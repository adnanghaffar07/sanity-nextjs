// Validation and submission of the greeting popup form.

export interface FormValues {
  name: string;
  email: string;
  contact_number: string;
  looking: string;
  subscribe: boolean;
}

export type RequiredField = "name" | "email" | "contact_number" | "looking";
export type FormErrors = Partial<Record<RequiredField, string>>;

export const REQUIRED_FIELDS: RequiredField[] = ["name", "email", "contact_number", "looking"];

export const INITIAL_VALUES: FormValues = {
  name: "",
  email: "",
  contact_number: "",
  looking: "",
  subscribe: true,
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateField(field: RequiredField, value: string): string {
  switch (field) {
    case "name":
      return value ? "" : "Name is required";
    case "email":
      if (!value) return "Email is required";
      return EMAIL_PATTERN.test(value) ? "" : "Please enter a valid email address";
    case "contact_number": {
      if (!value) return "Contact number is required";
      // Ignore the country code when checking the length.
      const withoutCountryCode = value.replace(/^\+\d+\s*/, "");
      return withoutCountryCode.length < 5 ? "Enter a valid contact number" : "";
    }
    case "looking":
      return value ? "" : "Please specify what you are looking for";
  }
}

export function validateForm(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  for (const field of REQUIRED_FIELDS) {
    const error = validateField(field, values[field]);
    if (error) errors[field] = error;
  }
  return errors;
}

/** "/services/ai-agent" → "Ai Agent"; the home page → "Home". */
export function pageNameFromPath(pathname: string): string {
  const lastSegment = pathname.split("/").pop() || "Home";
  return lastSegment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * Sends the form to the site's contact endpoint (which decides success) and,
 * in parallel, to the GoHighLevel CRM (best effort: a failure there is ignored).
 */
export async function submitPopupForm(
  values: FormValues,
  captchaToken: string,
  pageName: string
): Promise<boolean> {
  const formData = new FormData();
  formData.append("name", values.name);
  formData.append("email", values.email);
  formData.append("number", values.contact_number);
  formData.append("looking", values.looking);
  formData.append("message", values.subscribe ? "Newsletter subscription via popup" : "Popup form submission");
  formData.append("subscribe", String(values.subscribe));
  formData.append("pagename", pageName);
  formData.append("recaptcha_value", captchaToken);
  formData.append("page_url", window.location.href);

  const crmLead = fetch("/api/lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: values.name,
      email: values.email,
      phone: values.contact_number, // includes the country code, e.g. "+1234567890"
      what_are_you_looking_for: values.looking,
      message: values.subscribe ? "Popup form submission (newsletter subscribed)" : "Popup form submission",
    }),
  }).catch((error) => console.warn("GoHighLevel submission failed:", error));

  const [response] = await Promise.all([
    fetch("/api/projectdiscussionform", { method: "POST", body: formData }),
    crmLead,
  ]);
  return response.ok;
}

/** Google Tag Manager conversion event (same event as the site's other forms). */
export function trackFormSubmission(): void {
  const w = window as Window & { dataLayer?: Record<string, unknown>[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event: "formSubmission", form: "contactForm" });
}
