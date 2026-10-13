// The request every form sends to POST /api/forms (see client/submitForm.ts).

import type { FormId } from "./catalog";

/** Fields most forms share. Anything else goes in `details`. */
export interface StandardFields {
  name?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  company?: string;
  lookingFor?: string;
  message?: string;
  newsletterOptIn?: boolean;
}

export interface SubmissionContext {
  pageUrl?: string;
  pageTitle?: string;
  referrer?: string;
  landingPage?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  gclid?: string;
  fbclid?: string;
}

export interface FormSubmissionRequest {
  form: FormId;
  fields: StandardFields;
  /** Form-specific answers, keyed by the question as people see it. */
  details?: Record<string, string | undefined>;
  context?: SubmissionContext;
  captchaToken?: string;
}

export interface FormSubmissionResponse {
  ok: boolean;
  id?: string;
  error?: string;
  /** Field-level problems, keyed by field name. */
  fieldErrors?: Record<string, string>;
}
