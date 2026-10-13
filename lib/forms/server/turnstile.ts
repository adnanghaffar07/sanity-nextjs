export async function verifyTurnstileToken(
  token: string | null | undefined,
  remoteIp?: string | null
): Promise<boolean> {
  if (!token || !token.trim()) return false;

  const secret =
    process.env.TURNSTILE_SECRET_KEY || "1x0000000000000000000000000000000AA";

  try {
    const verifyBody = new FormData();
    verifyBody.append("secret", secret);
    verifyBody.append("response", token);
    if (remoteIp) verifyBody.append("remoteip", remoteIp);

    const verifyRes = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body: verifyBody,
      }
    );

    const outcome = await verifyRes.json();
    return outcome?.success === true;
  } catch (error) {
    console.error("Turnstile verification request failed:", error);
    return false;
  }
}
