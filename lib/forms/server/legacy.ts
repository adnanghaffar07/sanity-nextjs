// TEMPORARY (remove one release after the forms moved to /api/forms):
// adapters for the old per-form endpoints, so a page that was loaded before
// the deploy can still submit. They translate the old request into the new
// pipeline; nothing on the current site calls them.

import { NextResponse } from "next/server";
import { serverClient } from "@/sanity/lib/sanity/serverClient";
import { verifyTurnstileToken } from "@/lib/verifyTurnstile";
import type { FormId } from "../catalog";
import type { StandardFields } from "../types";
import { recordSubmission } from "./process";

type Input = { fields: StandardFields; details?: Record<string, string | undefined>; pageUrl?: string };

const str = (value: unknown) => (value == null ? undefined : String(value));
const ip = (request: Request) => request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;

async function save(form: FormId, { fields, details, pageUrl }: Input) {
  await recordSubmission(form, { fields, details, context: { pageUrl } });
}

/** Wraps an old endpoint: parse → (captcha) → save, answering like the old route did. */
function legacyRoute(
  parse: (request: Request) => Promise<{ form: FormId; input: Input; captcha?: string | null } | null>,
  okBody: Record<string, unknown> = { success: true }
) {
  return async (request: Request) => {
    try {
      const parsed = await parse(request);
      if (!parsed) return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
      if (parsed.captcha !== undefined && !(await verifyTurnstileToken(parsed.captcha, ip(request)))) {
        return NextResponse.json({ error: "Captcha verification failed" }, { status: 400 });
      }
      await save(parsed.form, parsed.input);
      return NextResponse.json(okBody, { status: 200 });
    } catch (error) {
      console.error("Legacy form endpoint failed:", error);
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
  };
}

const json = async (request: Request) => (await request.json().catch(() => ({}))) as Record<string, unknown>;

/** /api/projectdiscussionform (hero, footer, home page form and popup; FormData). */
export const projectDiscussionForm = legacyRoute(async (request) => {
  const data = await request.formData();
  const get = (key: string) => str(data.get(key));
  if (!get("name") || !get("email") || !get("number")) return null;
  // Only the popup sent "subscribe", and only the hero form sent the page URL.
  const form: FormId = data.has("subscribe") ? "greeting-popup" : get("page_url") ? "hero-form" : "contact-form";
  return {
    form,
    captcha: get("recaptcha_value") ?? null,
    input: {
      fields: {
        name: get("name"),
        email: get("email"),
        phone: get("number"),
        lookingFor: get("looking"),
        message: get("message"),
        newsletterOptIn: get("subscribe") ? get("subscribe") === "true" : undefined,
      },
      details: { Page: get("pagename") },
      pageUrl: get("page_url"),
    },
  };
}, { message: "Emails sent successfully" });

/**
 * /api/lead: old pages called it right after the endpoint above, so a second
 * call for the same email within 5 minutes is already saved and is skipped.
 */
export async function lead(request: Request) {
  const body = await json(request);
  if (!body.name || !body.email || !body.phone) {
    return NextResponse.json({ error: "Validation failed", details: ["Name, email and phone are required"] }, { status: 400 });
  }
  const since = new Date(Date.now() - 5 * 60 * 1000).toISOString();
  const recent = await serverClient
    .fetch<number>(`count(*[_type == "formSubmission" && lower(email) == lower($email) && submittedAt > $since])`, {
      email: String(body.email).trim(),
      since,
    })
    .catch(() => 0);
  if (recent) return NextResponse.json({ success: true, message: "Lead already received" }, { status: 201 });

  try {
    await save("contact-form", {
      fields: {
        name: str(body.name),
        email: str(body.email),
        phone: str(body.phone),
        lookingFor: str(body.inquiry_type ?? body.what_are_you_looking_for),
        message: str(body.message),
      },
      pageUrl: str(body.page_url),
    });
    return NextResponse.json({ success: true, message: "Lead processed successfully" }, { status: 201 });
  } catch (error) {
    console.error("Legacy /api/lead failed:", error);
    return NextResponse.json({ error: "Unable to process lead submission" }, { status: 502 });
  }
}

/** /api/contact-page */
export const contactPage = legacyRoute(async (request) => {
  const b = await json(request);
  if (!b.name || !b.email) return null;
  return {
    form: "contact-page",
    input: {
      fields: { name: str(b.name), email: str(b.email), phone: str(b.phone), company: str(b.company), lookingFor: str(b.inquiryType), message: str(b.message) },
      pageUrl: str(b.page_url),
    },
  };
}, { success: true, message: "Contact submission received." });

/** /api/contact (marketing automation audit) */
export const marketingAudit = legacyRoute(async (request) => {
  const b = await json(request);
  if (!b.email) return null;
  return {
    form: "marketing-audit",
    input: {
      fields: {
        firstName: str(b.firstName),
        lastName: str(b.lastName),
        email: str(b.email),
        phone: str(b.phone),
        company: str(b.company),
        lookingFor: str(b.industry),
        message: str(b.challenge),
      },
      details: { Industry: str(b.industry), "Current tools": str(b.tools) },
    },
  };
}, { message: "Email sent successfully" });

/** /api/mobile-submit-quote (quote modal and floating consultation drawer) */
export const mobileQuote = legacyRoute(async (request) => {
  const b = await json(request);
  if (!b.email && !b.phone) return null;
  return {
    form: /floating|consult/i.test(String(b.source ?? "")) ? "mobile-consultation" : "mobile-quote",
    input: { fields: { name: str(b.name), email: str(b.email), phone: str(b.phone), message: str(b.message) } },
  };
});

/** /api/send-mobile-email (mobile service hero form) */
export const mobileServiceHero = legacyRoute(async (request) => {
  const b = await json(request);
  if (!b.contact_number && !b.email) return null;
  return {
    form: "mobile-service-hero",
    input: { fields: { name: str(b.name), email: str(b.email), phone: str(b.contact_number), lookingFor: str(b.looking), message: str(b.message) } },
  };
}, { message: "Email sent to team successfully." });

/** /api/ai-revenue-engine-lead */
export const aiRevenueEngine = legacyRoute(async (request) => {
  const b = await json(request);
  if (!(b.firstName || b.name) || !b.email || !b.phone) return null;
  return {
    form: "ai-revenue-engine",
    input: {
      fields: { firstName: str(b.firstName), lastName: str(b.lastName), name: str(b.name), email: str(b.email), phone: str(b.phone), company: str(b.company), message: str(b.message) },
      details: { "Country code": str(b.countryCode), "Time zone": str(b.timezone) },
      pageUrl: str(b.pageUrl),
    },
  };
}, { ok: true, warnings: [] });

/** /api/real-estate-audit */
export const realEstateAudit = legacyRoute(async (request) => {
  const b = await json(request);
  if (!b.name || !b.email || !b.company) return null;
  return {
    form: "real-estate-audit",
    input: { fields: { name: str(b.name), email: str(b.email), phone: str(b.phone), company: str(b.company), lookingFor: "Real estate automation audit" } },
  };
}, { success: true, message: "Emails sent successfully" });

/** /api/meta-submit-lead (internal manual entry page) */
export const metaLead = legacyRoute(async (request) => {
  const b = await json(request);
  return {
    form: "meta-lead-manual",
    input: {
      fields: { name: str(b.name), email: str(b.email), phone: str(b.phoneNumber), company: str(b.companyName), lookingFor: str(b.work ?? b.appType) },
      details: { Campaign: str(b.campaignName), "Lead created": str(b.creationDate), "App type": str(b.appType) },
    },
  };
});

/** /api/paymentPlan-email (plan registration) */
export const registration = legacyRoute(async (request) => {
  const b = await json(request);
  return {
    form: "registration",
    captcha: str(b.recaptcha) ?? null,
    input: {
      fields: { name: str(b.name), email: str(b.email), phone: str(b.phone), lookingFor: str(b.package), message: str(b.details) },
      details: { Package: str(b.package) },
    },
  };
}, { message: "Success" });
