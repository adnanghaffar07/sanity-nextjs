// Pricing-page sign-up (unlocks the full plan details). Passwords are stored
// hashed (lib/security/password.ts); the dataset is public, so nothing secret
// is ever saved in plain text.

import { NextResponse } from "next/server";
import { startSession } from "@/lib/auth/session";
import { privateId, serverClient } from "@/sanity/lib/server-client";
import { hashPassword } from "@/lib/security/password";
import { clientIp, rateLimit, sameSiteRequest } from "@/lib/security/request";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

export async function POST(req: Request) {
  if (!sameSiteRequest(req)) return NextResponse.json({ error: "Forbidden." }, { status: 403 });
  const ip = clientIp(req);
  if (ip && !rateLimit(`register:${ip}`, 5, 60 * 60 * 1000)) {
    return NextResponse.json({ error: "Too many attempts. Please try again later." }, { status: 429 });
  }

  const { email: rawEmail, password } = (await req.json().catch(() => ({}))) as { email?: string; password?: string };
  const email = rawEmail?.trim().toLowerCase() ?? "";
  if (!EMAIL_PATTERN.test(email)) return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  if (typeof password !== "string" || password.length < MIN_PASSWORD_LENGTH) {
    return NextResponse.json({ error: `Use a password of at least ${MIN_PASSWORD_LENGTH} characters.` }, { status: 400 });
  }

  const existing = await serverClient.fetch(`count(*[_type == "user" && email == $email])`, { email });
  if (existing > 0) return NextResponse.json({ error: "An account with this email already exists. Please log in." }, { status: 400 });

  await serverClient.create({ _id: privateId(), _type: "user", email, passwordHash: await hashPassword(password) });

  return startSession(NextResponse.json({ success: true }), email);
}
