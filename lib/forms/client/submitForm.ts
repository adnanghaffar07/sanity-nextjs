// Sends a form to POST /api/forms with the page URL and attribution attached.
// Every website form uses this; the server decides where the data goes.

import type { FormId } from "../catalog";
import type { FormSubmissionRequest, FormSubmissionResponse } from "../types";
import { submissionContext } from "./attribution";

export class FormSubmitError extends Error {
  constructor(
    message: string,
    readonly fieldErrors: Record<string, string> = {}
  ) {
    super(message);
    this.name = "FormSubmitError";
  }
}

interface SubmitOptions {
  /** Push the Google Tag Manager conversion event (forms that already did). */
  trackConversion?: boolean;
}

export async function submitForm(
  form: FormId,
  data: Omit<FormSubmissionRequest, "form" | "context">,
  { trackConversion = false }: SubmitOptions = {}
): Promise<FormSubmissionResponse> {
  const request: FormSubmissionRequest = { form, ...data, context: submissionContext() };

  let response: Response;
  try {
    response = await fetch("/api/forms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request),
    });
  } catch {
    throw new FormSubmitError("Network error. Please check your connection and try again.");
  }

  const result = (await response.json().catch(() => ({ ok: false }))) as FormSubmissionResponse;
  if (!response.ok || !result.ok) {
    throw new FormSubmitError(result.error ?? "Sorry, something went wrong. Please try again.", result.fieldErrors);
  }

  if (trackConversion) {
    const w = window as Window & { dataLayer?: Record<string, unknown>[] };
    w.dataLayer = w.dataLayer || [];
    // "form: contactForm" is what the existing GTM triggers listen for.
    w.dataLayer.push({ event: "formSubmission", form: "contactForm", formId: form });
  }
  return result;
}
