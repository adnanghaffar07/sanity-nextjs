// What happens when each form is submitted. Everything not listed here is the
// same for every form (see process.ts): saved to Sanity, synced to GoHighLevel,
// one notification email to the team.

import type { FormId, ClientType } from "@/lib/forms/catalog";
import type { StandardFields } from "@/lib/forms/types";
import type { AutoReplyKind } from "./emails";
import type { NormalizedSubmission } from "./process";

export interface FormDefinition {
  /** "name" is satisfied by name or firstName. */
  required: (keyof StandardFields)[];
  /** Require a Cloudflare Turnstile token. */
  captcha?: boolean;
  /** GoHighLevel tags; `false` = don't sync to GoHighLevel. */
  crmTags: string[] | false;
  autoReply?: AutoReplyKind;
  /** Send the team notification email (default true). */
  teamEmail?: boolean;
  /** Fixed interest category instead of guessing it from the text. */
  clientType?: ClientType;
  /** Extra integration run after saving (failures are logged, not shown to the visitor). */
  afterSubmit?: (submission: NormalizedSubmission) => Promise<void>;
}

const WEBSITE_LEAD = "website lead";

export const FORM_DEFINITIONS: Record<FormId, FormDefinition> = {
  "hero-form": { required: ["name", "email", "phone"], captcha: true, crmTags: [WEBSITE_LEAD, "hero form"], autoReply: "inquiry" },
  "contact-form": { required: ["name", "email", "phone"], captcha: true, crmTags: [WEBSITE_LEAD, "contact form"], autoReply: "inquiry" },
  "greeting-popup": { required: ["name", "email", "phone"], captcha: true, crmTags: [WEBSITE_LEAD, "greeting popup"], autoReply: "inquiry" },
  "contact-page": {
    required: ["name", "email", "phone", "company", "lookingFor", "message"],
    captcha: true,
    crmTags: [WEBSITE_LEAD, "contact page"],
  },
  "marketing-audit": {
    required: ["name", "email", "company", "lookingFor", "message"],
    captcha: true,
    crmTags: [WEBSITE_LEAD, "marketing audit"],
    autoReply: "marketing-audit",
    clientType: "marketing",
  },
  "mobile-quote": { required: ["name", "email", "phone", "message"], captcha: true, crmTags: [WEBSITE_LEAD, "mobile quote"], clientType: "app" },
  "mobile-consultation": {
    required: ["name", "email", "phone", "message"],
    captcha: true,
    crmTags: [WEBSITE_LEAD, "mobile consultation"],
    clientType: "app",
  },
  "mobile-service-hero": { required: ["phone"], captcha: true, crmTags: [WEBSITE_LEAD, "mobile service form"], clientType: "app" },
  "ai-revenue-engine": {
    required: ["name", "email", "phone"],
    captcha: true,
    crmTags: ["ai revenue engine lead"],
    clientType: "ai",
    afterSubmit: notifyAiRevenueWorkflow,
  },
  "real-estate-audit": {
    required: ["name", "email", "company"],
    captcha: true,
    crmTags: [WEBSITE_LEAD, "real estate audit"],
    autoReply: "real-estate-audit",
    clientType: "ai",
  },
  registration: { required: ["name", "email", "phone"], captcha: true, crmTags: [WEBSITE_LEAD, "plan registration"] },
  // Internal /meta-leads page, where the team types in a Meta lead by hand.
  "meta-lead-manual": { required: ["name"], captcha: true, crmTags: [WEBSITE_LEAD, "meta lead"], autoReply: "thank-you" },
  // Arrives from GoHighLevel, so no CRM sync or emails.
  "facebook-lead": { required: [], crmTags: false, teamEmail: false },
};

// The AI Revenue Engine page starts an automated call workflow in n8n.
const AI_REVENUE_WEBHOOK = "https://n8n.srv1425590.hstgr.cloud/webhook/ca-call-retell";

async function notifyAiRevenueWorkflow(submission: NormalizedSubmission) {
  // Same payload the page used to send, so the n8n workflow keeps working.
  const response = await fetch(AI_REVENUE_WEBHOOK, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      firstName: submission.firstName,
      email: submission.email,
      phone: submission.phone,
      countryCode: submission.details["Country code"],
      timezone: submission.details["Time zone"],
      source: "ai-revenue-engine",
      pageUrl: submission.context.pageUrl,
      submittedAt: submission.submittedAt,
    }),
  });
  if (!response.ok) throw new Error(`AI revenue workflow webhook returned ${response.status}`);
}
