// Validation of the greeting popup form (submission: lib/forms/client/submitForm).

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
