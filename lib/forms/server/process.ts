// Handles one form submission, for every form:
//   1. validate (+ Cloudflare Turnstile where the form uses it)
//   2. save a "formSubmission" document in Sanity (the source of truth)
//   3. in parallel: GoHighLevel sync, team email, auto-reply, extra integration
//   4. record the GoHighLevel result on the Sanity document
// Each step runs once. Set FORMS_DRY_RUN=1 to log instead of saving/sending.

import { randomUUID } from "crypto";
import { serverClient } from "@/sanity/lib/sanity/serverClient";
import { verifyTurnstileToken } from "./turnstile";
import { isLikelyValidGhlPhone, normalizePhoneForGhl } from "./phone";
import { FORMS, detectClientType, isFormId, type ClientType, type FormId } from "@/lib/forms/catalog";
import type { FormSubmissionResponse, StandardFields, SubmissionContext } from "@/lib/forms/types";
import { FORM_DEFINITIONS } from "./definitions";
import { TEAM_EMAIL, autoReply, sendEmail, teamEmailHtml } from "./emails";
import { syncLeadToCrm, type CrmLead, type CrmResult } from "./ghl";

const SITE_URL = "https://codeautomation.ai";
const MAX_SHORT = 300;
const MAX_LONG = 5000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export interface NormalizedSubmission {
  form: FormId;
  name: string;
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
  company?: string;
  lookingFor?: string;
  message?: string;
  newsletterOptIn?: boolean;
  details: Record<string, string>;
  context: SubmissionContext;
  clientType: ClientType;
  submittedAt: string;
}

type Result = { status: number; body: FormSubmissionResponse };

// ── Normalising input ─────────────────────────────────────────────────────────

const text = (value: unknown, max = MAX_SHORT) => {
  if (value == null) return undefined;
  const trimmed = String(value).trim().slice(0, max);
  return trimmed || undefined;
};

/** Only keep absolute http(s) URLs (Sanity "url" fields reject anything else). */
const url = (value: unknown) => {
  const candidate = text(value, 2000);
  if (!candidate) return undefined;
  try {
    const parsed = new URL(candidate);
    return parsed.protocol === "http:" || parsed.protocol === "https:" ? parsed.toString() : undefined;
  } catch {
    return undefined;
  }
};

function splitName(full: string) {
  const parts = full.split(/\s+/).filter(Boolean);
  return { firstName: parts[0] ?? "", lastName: parts.slice(1).join(" ") };
}

function normalize(form: FormId, body: Record<string, any>): NormalizedSubmission {
  const fields: StandardFields = body.fields ?? {};
  const context: SubmissionContext = body.context ?? {};
  const definition = FORM_DEFINITIONS[form];

  const firstName = text(fields.firstName);
  const lastName = text(fields.lastName);
  const name = text(fields.name) ?? [firstName, lastName].filter(Boolean).join(" ");
  const split = splitName(name);

  const details: Record<string, string> = {};
  for (const [label, value] of Object.entries(body.details ?? {})) {
    const cleanLabel = text(label, 100);
    const cleanValue = text(value, MAX_LONG);
    if (cleanLabel && cleanValue) details[cleanLabel] = cleanValue;
  }

  const lookingFor = text(fields.lookingFor);
  const message = text(fields.message, MAX_LONG);

  return {
    form,
    name,
    firstName: firstName ?? split.firstName,
    lastName: lastName ?? split.lastName,
    email: text(fields.email)?.toLowerCase(),
    phone: text(fields.phone, 40),
    company: text(fields.company),
    lookingFor,
    message,
    newsletterOptIn: typeof fields.newsletterOptIn === "boolean" ? fields.newsletterOptIn : undefined,
    details,
    context: {
      pageUrl: url(context.pageUrl),
      pageTitle: text(context.pageTitle),
      referrer: url(context.referrer),
      landingPage: url(context.landingPage),
      utmSource: text(context.utmSource),
      utmMedium: text(context.utmMedium),
      utmCampaign: text(context.utmCampaign),
      utmTerm: text(context.utmTerm),
      utmContent: text(context.utmContent),
      gclid: text(context.gclid),
      fbclid: text(context.fbclid),
    },
    clientType: definition.clientType ?? detectClientType(lookingFor, message),
    submittedAt: new Date().toISOString(),
  };
}

function validate(form: FormId, submission: NormalizedSubmission): Record<string, string> {
  const errors: Record<string, string> = {};
  for (const field of FORM_DEFINITIONS[form].required) {
    const value = field === "name" ? submission.name : submission[field as keyof NormalizedSubmission];
    if (!value) errors[field] = "This field is required.";
  }
  if (submission.email && !EMAIL_PATTERN.test(submission.email)) errors.email = "Please enter a valid email address.";
  return errors;
}

// ── Building the outputs ──────────────────────────────────────────────────────

function sanityDocument(s: NormalizedSubmission) {
  const { context: c } = s;
  return {
    _type: "formSubmission",
    status: "new",
    form: s.form,
    submittedAt: s.submittedAt,
    name: s.name || undefined,
    email: s.email,
    phone: s.phone,
    company: s.company,
    lookingFor: s.lookingFor,
    message: s.message,
    details: Object.entries(s.details).map(([label, value]) => ({ _key: randomUUID().slice(0, 12), label, value })),
    clientType: s.clientType,
    newsletterOptIn: s.newsletterOptIn,
    isUnsubscribed: false,
    page: { url: c.pageUrl, title: c.pageTitle },
    attribution: {
      landingPage: c.landingPage,
      referrer: c.referrer,
      utmSource: c.utmSource,
      utmMedium: c.utmMedium,
      utmCampaign: c.utmCampaign,
      utmTerm: c.utmTerm,
      utmContent: c.utmContent,
      gclid: c.gclid,
      fbclid: c.fbclid,
    },
  };
}

/** Label/value pairs describing the submission (used by the email and the CRM note). */
function summary(s: NormalizedSubmission) {
  const { context: c } = s;
  return [
    { label: "Form", value: FORMS[s.form].title },
    { label: "Name", value: s.name },
    { label: "Email", value: s.email, href: s.email ? `mailto:${s.email}` : undefined },
    { label: "Phone", value: s.phone, href: s.phone ? `tel:${s.phone}` : undefined },
    { label: "Company", value: s.company },
    { label: "Looking for", value: s.lookingFor },
    { label: "Message", value: s.message, multiline: true },
    ...Object.entries(s.details).map(([label, value]) => ({ label, value })),
    { label: "Newsletter", value: s.newsletterOptIn === undefined ? undefined : s.newsletterOptIn ? "Yes" : "No" },
    { label: "Submitted on", value: c.pageUrl, href: c.pageUrl },
    { label: "Page title", value: c.pageTitle },
    { label: "First page visited", value: c.landingPage, href: c.landingPage },
    { label: "Came from", value: c.referrer, href: c.referrer },
    { label: "UTM source", value: c.utmSource },
    { label: "UTM medium", value: c.utmMedium },
    { label: "UTM campaign", value: c.utmCampaign },
    { label: "UTM term", value: c.utmTerm },
    { label: "UTM content", value: c.utmContent },
    { label: "Google Ads click", value: c.gclid },
    { label: "Facebook click", value: c.fbclid },
  ];
}

function crmLead(s: NormalizedSubmission, tags: string[]): CrmLead {
  const { context: c } = s;
  const normalizedPhone = s.phone ? normalizePhoneForGhl(s.phone) : "";
  const validPhone = isLikelyValidGhlPhone(normalizedPhone) ? normalizedPhone : undefined;
  const note = summary(s)
    .filter((row) => row.value)
    .map((row) => `${row.label}: ${row.value}`)
    .join("\n");

  return {
    firstName: s.firstName,
    lastName: s.lastName,
    email: s.email,
    phone: validPhone,
    companyName: s.company,
    source: "website",
    tags,
    // Same keys the site used before, plus the attribution fields. In GHL v2 only
    // the custom fields that exist in the location are filled; the note has everything.
    customFields: {
      form_name: FORMS[s.form].title,
      what_are_you_looking_for: s.lookingFor ?? "General inquiry",
      inquiry_type: s.lookingFor ?? "General inquiry",
      message: s.message,
      page_url: c.pageUrl ?? SITE_URL,
      page_title: c.pageTitle,
      landing_page: c.landingPage,
      referrer: c.referrer,
      utm_source: c.utmSource,
      utm_medium: c.utmMedium,
      utm_campaign: c.utmCampaign,
      utm_term: c.utmTerm,
      utm_content: c.utmContent,
      gclid: c.gclid,
      fbclid: c.fbclid,
      phone_raw: validPhone ? undefined : s.phone,
    },
    note: `New ${FORMS[s.form].title} submission\n\n${note}`,
  };
}

// ── Saving & sending ──────────────────────────────────────────────────────────

// ── Spam flagging ────────────────────────────────────────────────────────────
// Turnstile stops most bots. Anything that still looks like link spam is saved
// with status "spam" (so nothing is lost) but not sent to GoHighLevel or emailed.

const URL_PATTERN = /(https?:\/\/|www\.)\S+/gi;
const SPAM_PHRASES = /\b(backlinks?|guest posts?|seo services|link building|casino|crypto ?(currency|trading)|viagra|forex)\b/i;

export function spamSignal(s: NormalizedSubmission): string | null {
  const linksIn = (value?: string) => (value?.match(URL_PATTERN) ?? []).length;
  if (linksIn(s.name) || linksIn(s.company)) return "link in name or company";
  const messageLinks = linksIn(s.message);
  if (messageLinks >= 2) return `${messageLinks} links in message`;
  if (messageLinks >= 1 && SPAM_PHRASES.test(s.message ?? "")) return "spam phrase with a link";
  return null;
}

/**
 * Saves a submission and runs its integrations. Also used by the GoHighLevel
 * Facebook-lead webhook to store its leads in the same place.
 */
export async function recordSubmission(
  form: FormId,
  input: { fields?: StandardFields; details?: Record<string, string | undefined>; context?: SubmissionContext },
  options: { extra?: Record<string, unknown> } = {}
): Promise<{ id?: string; crm: CrmResult }> {
  const submission = normalize(form, input);
  const definition = FORM_DEFINITIONS[form];
  const spam = spamSignal(submission);
  const doc = { ...sanityDocument(submission), ...options.extra, ...(spam ? { status: "spam" } : {}) };
  if (spam) console.warn(`Form ${form}: flagged as spam (${spam}); not sent to GoHighLevel or emailed.`);
  const dryRun = process.env.FORMS_DRY_RUN === "1";

  let id: string | undefined;
  if (dryRun) {
    console.info("[forms dry run] Sanity document:", JSON.stringify(doc, null, 2));
    id = "dry-run";
  } else {
    try {
      id = (await serverClient.create(doc))._id;
    } catch (error) {
      console.error(`Saving ${form} submission to Sanity failed:`, error);
    }
  }

  // Flagged spam is kept in Sanity for review, but nothing else happens.
  if (spam) return { id, crm: { status: "skipped", error: "flagged as spam" } };

  const rows = summary(submission);
  const tasks: Record<string, () => Promise<unknown>> = {};
  let crm: CrmResult = { status: "skipped" };

  if (definition.crmTags) {
    const lead = crmLead(submission, definition.crmTags);
    tasks.crm = async () => {
      crm = dryRun ? { status: "skipped", error: "dry run" } : await syncLeadToCrm(lead);
      if (dryRun) console.info("[forms dry run] GoHighLevel lead:", JSON.stringify(lead, null, 2));
    };
  }
  if (definition.teamEmail !== false) {
    const message = {
      to: TEAM_EMAIL,
      replyTo: submission.email,
      subject: `New ${FORMS[form].title} submission${submission.name ? ` — ${submission.name}` : ""}`,
      html: teamEmailHtml({
        formTitle: FORMS[form].title,
        rows,
        studioUrl: id && !dryRun ? `${SITE_URL}/studio/intent/edit/id=${id};type=formSubmission` : undefined,
      }),
    };
    tasks.teamEmail = () => (dryRun ? Promise.resolve(console.info("[forms dry run] team email:", message.subject)) : sendEmail(message));
  }
  if (definition.autoReply && submission.email) {
    const reply = autoReply(definition.autoReply, { name: submission.firstName || submission.name, lookingFor: submission.lookingFor });
    tasks.autoReply = () =>
      dryRun
        ? Promise.resolve(console.info("[forms dry run] auto-reply:", reply.subject))
        : sendEmail({ to: submission.email!, subject: reply.subject, html: reply.html, fromName: reply.fromName });
  }
  if (definition.afterSubmit && !dryRun) tasks.afterSubmit = () => definition.afterSubmit!(submission);

  const names = Object.keys(tasks);
  const results = await Promise.allSettled(names.map((name) => tasks[name]()));
  results.forEach((result, i) => {
    if (result.status === "rejected") console.error(`Form ${form}: ${names[i]} failed:`, result.reason);
  });

  if (id && !dryRun && definition.crmTags) {
    await serverClient
      .patch(id)
      .set({ crm: { status: crm.status, contactId: crm.contactId, error: crm.error, syncedAt: new Date().toISOString() } })
      .commit()
      .catch((error) => console.error("Saving GoHighLevel result failed:", error));
  }

  const delivered = Boolean(id) || crm.status === "synced" || results[names.indexOf("teamEmail")]?.status === "fulfilled";
  if (!delivered) throw new Error("The submission could not be saved or sent anywhere");
  return { id, crm };
}

/** Entry point for POST /api/forms. */
export async function handleFormRequest(body: unknown, ip: string | null): Promise<Result> {
  if (!body || typeof body !== "object") return { status: 400, body: { ok: false, error: "Invalid request." } };
  const input = body as Record<string, any>;
  if (!isFormId(input.form)) return { status: 400, body: { ok: false, error: "Unknown form." } };
  const form = input.form;

  const fieldErrors = validate(form, normalize(form, input));
  if (Object.keys(fieldErrors).length) {
    return { status: 400, body: { ok: false, error: "Please fill in the required fields.", fieldErrors } };
  }

  if (FORM_DEFINITIONS[form].captcha && !(await verifyTurnstileToken(input.captchaToken, ip))) {
    return { status: 400, body: { ok: false, error: "Captcha verification failed. Please try again." } };
  }

  try {
    const { id } = await recordSubmission(form, input);
    return { status: 201, body: { ok: true, id } };
  } catch (error) {
    console.error(`Form ${form} submission failed:`, error);
    return { status: 502, body: { ok: false, error: "Sorry, something went wrong. Please try again." } };
  }
}
