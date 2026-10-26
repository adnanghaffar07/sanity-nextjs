// Pricing-page log-in. Checks the hashed password; one generic error for a
// wrong email or password, so the form can't be used to find accounts.

import { NextResponse } from "next/server";
import { startSession } from "@/lib/auth/session";
import { serverClient } from "@/sanity/lib/server-client";
import { verifyPassword } from "@/lib/security/password";
import { clientIp, rateLimit, sameSiteRequest } from "@/lib/security/request";

const INVALID = "Incorrect email or password.";

export async function POST(req: Request) {
  if (!sameSiteRequest(req)) return NextResponse.json({ error: "Forbidden." }, { status: 403 });
  const ip = clientIp(req);
  if (ip && !rateLimit(`login:${ip}`, 10, 15 * 60 * 1000)) {
    return NextResponse.json({ error: "Too many attempts. Please try again later." }, { status: 429 });
  }

  const { email: rawEmail, password } = (await req.json().catch(() => ({}))) as { email?: string; password?: string };
  const email = rawEmail?.trim().toLowerCase() ?? "";
  if (!email || typeof password !== "string") return NextResponse.json({ error: INVALID }, { status: 401 });

  const user = await serverClient.fetch<{ passwordHash?: string } | null>(
    `*[_type == "user" && email == $email][0]{ passwordHash }`,
    { email }
  );
  if (!user || !(await verifyPassword(password, user.passwordHash))) {
    return NextResponse.json({ error: INVALID }, { status: 401 });
  }

  return startSession(NextResponse.json({ success: true }), email);
}
