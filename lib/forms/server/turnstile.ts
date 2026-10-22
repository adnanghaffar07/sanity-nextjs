// Server-side Cloudflare Turnstile check ("siteverify"). Every form with
// `captcha: true` (lib/forms/server/definitions.ts) must pass this before it is
// saved. Without the real secret, Cloudflare reports "Siteverify isn't being
// called" and the widget doesn't stop bots.
//
// Environment variables (Cloudflare → Turnstile → widget → Settings):
//   TURNSTILE_SECRET_KEY            secret key, server only
//   NEXT_PUBLIC_TURNSTILE_SITE_KEY  site key, used by the widget in the browser
//
// Local development falls back to Cloudflare's always-pass test keys. In
// production a missing secret rejects every submission (fail closed) and logs
// an error, instead of silently letting bots through.

const SITEVERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const TEST_SECRET = "1x0000000000000000000000000000000AA";

function secretKey(): string | null {
  const secret = process.env.TURNSTILE_SECRET_KEY?.trim();
  if (secret) return secret;
  if (process.env.NODE_ENV !== "production") return TEST_SECRET;
  console.error("TURNSTILE_SECRET_KEY is not set: rejecting the form submission. Add it to the hosting environment.");
  return null;
}

export async function verifyTurnstileToken(
  token: string | null | undefined,
  remoteIp?: string | null
): Promise<boolean> {
  if (!token?.trim()) return false;
  const secret = secretKey();
  if (!secret) return false;

  try {
    const body = new FormData();
    body.append("secret", secret);
    body.append("response", token);
    if (remoteIp) body.append("remoteip", remoteIp);

    const res = await fetch(SITEVERIFY_URL, { method: "POST", body, signal: AbortSignal.timeout(10_000) });
    const outcome = (await res.json()) as { success?: boolean; "error-codes"?: string[]; hostname?: string };
    if (outcome.success === true) return true;

    // e.g. "timeout-or-duplicate" (token reused or older than 5 minutes) or "invalid-input-secret".
    console.warn("Turnstile token rejected:", outcome["error-codes"]?.join(", ") || "unknown reason");
    return false;
  } catch (error) {
    console.error("Turnstile verification request failed:", error);
    return false;
  }
}
