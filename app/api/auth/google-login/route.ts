// Pricing-page "Sign in with Google". Verifies Google's ID token, creates the
// account on first sign-in, and starts the same session as a password log-in.

import { NextResponse } from "next/server";
import { OAuth2Client } from "google-auth-library";
import { GOOGLE_CLIENT_ID } from "@/lib/auth/google";
import { startSession } from "@/lib/auth/session";
import { clientIp, rateLimit, sameSiteRequest } from "@/lib/security/request";
import { privateId, serverClient } from "@/sanity/lib/server-client";

const google = new OAuth2Client(GOOGLE_CLIENT_ID);

export async function POST(req: Request) {
  if (!sameSiteRequest(req)) return NextResponse.json({ error: "Forbidden." }, { status: 403 });
  const ip = clientIp(req);
  if (ip && !rateLimit(`google-login:${ip}`, 10, 15 * 60 * 1000)) {
    return NextResponse.json({ error: "Too many attempts. Please try again later." }, { status: 429 });
  }

  const { tokenId } = (await req.json().catch(() => ({}))) as { tokenId?: string };
  if (!tokenId) return NextResponse.json({ error: "Google sign-in failed. Please try again." }, { status: 400 });

  try {
    const ticket = await google.verifyIdToken({ idToken: tokenId, audience: GOOGLE_CLIENT_ID });
    const payload = ticket.getPayload();
    const email = payload?.email?.trim().toLowerCase();
    if (!payload || !email || !payload.email_verified) {
      return NextResponse.json({ error: "Your Google account has no verified email address." }, { status: 401 });
    }

    const existing = await serverClient.fetch<number>(`count(*[_type == "user" && lower(email) == $email])`, { email });
    if (existing === 0) {
      await serverClient.create({ _id: privateId(), _type: "user", email, name: payload.name, googleId: payload.sub });
    }

    return startSession(NextResponse.json({ success: true }), email);
  } catch (error) {
    console.error("Google sign-in failed:", error);
    return NextResponse.json({ error: "Google sign-in failed. Please try again." }, { status: 401 });
  }
}
