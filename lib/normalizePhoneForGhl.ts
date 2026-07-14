/**
 * Normalize phone numbers for GoHighLevel (E.164 when possible).
 * Avoids invalid values like "+0324..." from local numbers that start with 0.
 */
export function normalizePhoneForGhl(phone: string): string {
  const trimmed = phone.trim().replace(/[\s()-]/g, "");
  if (!trimmed) return "";

  if (trimmed.startsWith("+")) {
    const digits = trimmed.slice(1).replace(/\D/g, "");
    if (!digits) return "";

    // "+0324..." is not a valid country code — drop trunk zeros after "+"
    const withoutInvalidPrefix = digits.replace(/^0+/, "");
    return withoutInvalidPrefix ? `+${withoutInvalidPrefix}` : trimmed;
  }

  const digits = trimmed.replace(/\D/g, "");
  if (!digits) return "";

  // Local trunk prefix (e.g. 0324...) — strip leading 0 instead of prefixing "+"
  if (digits.startsWith("0")) {
    const national = digits.replace(/^0+/, "");
    if (!national) return digits;
    if (national.length === 10) return `+1${national}`;
    if (national.length >= 11) return `+${national}`;
    return national;
  }

  if (digits.length === 10) return `+1${digits}`;
  if (digits.length >= 11) return `+${digits}`;

  return digits;
}

export function isLikelyValidGhlPhone(phone: string): boolean {
  if (!phone) return false;
  if (/^\+\d{8,15}$/.test(phone)) {
    return !phone.startsWith("+0");
  }
  return /^\d{7,15}$/.test(phone);
}
