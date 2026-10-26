// Pricing-page sign-in session (server only). After login, sign-up or Google
// sign-in the visitor gets a signed token in an httpOnly cookie: page scripts
// can't read it, and the server verifies it before sending the full plan.

import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import type { NextResponse } from "next/server";

const COOKIE = "authToken";
const MAX_AGE_SECONDS = 30 * 24 * 60 * 60;

function secret(): string {
  const value = process.env.JWT_SECRET?.trim();
  if (!value) throw new Error("JWT_SECRET is not set");
  return value;
}

/** Signs the visitor in for 30 days by setting the session cookie on `response`. */
export function startSession<T extends NextResponse>(response: T, email: string): T {
  const token = jwt.sign({ email }, secret(), { expiresIn: MAX_AGE_SECONDS });
  response.cookies.set(COOKIE, token, { httpOnly: true, secure: true, sameSite: "lax", path: "/", maxAge: MAX_AGE_SECONDS });
  return response;
}

/** The signed-in visitor's email, or null when there is no valid session. */
export function sessionEmail(): string | null {
  const token = cookies().get(COOKIE)?.value;
  if (!token) return null;
  try {
    const payload = jwt.verify(token, secret());
    return typeof payload === "object" && typeof payload.email === "string" ? payload.email : null;
  } catch {
    return null;
  }
}
