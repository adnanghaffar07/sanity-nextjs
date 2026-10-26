import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

// The cookie the server would receive with the request.
let requestCookie: string | undefined;
vi.mock("next/headers", () => ({
  cookies: () => ({ get: () => (requestCookie ? { value: requestCookie } : undefined) }),
}));

const { sessionEmail, startSession } = await import("@/lib/auth/session");

const SECRET = "unit-test-secret";

describe("pricing sign-in session", () => {
  beforeEach(() => {
    process.env.JWT_SECRET = SECRET;
    requestCookie = undefined;
  });
  afterEach(() => {
    delete process.env.JWT_SECRET;
  });

  it("sets a 30-day httpOnly cookie that page scripts can't read", () => {
    const cookie = startSession(NextResponse.json({ success: true }), "a@b.co").cookies.get("authToken");
    expect(cookie?.httpOnly).toBe(true);
    expect(cookie?.secure).toBe(true);
    expect(cookie?.sameSite).toBe("lax");
    expect(cookie?.maxAge).toBe(30 * 24 * 60 * 60);
  });

  it("recognises the cookie it issued", () => {
    requestCookie = startSession(NextResponse.json({}), "a@b.co").cookies.get("authToken")?.value;
    expect(sessionEmail()).toBe("a@b.co");
  });

  it("rejects missing, forged, foreign and expired tokens", () => {
    expect(sessionEmail()).toBeNull();
    requestCookie = "anything";
    expect(sessionEmail()).toBeNull();
    requestCookie = jwt.sign({ email: "a@b.co" }, "another-secret");
    expect(sessionEmail()).toBeNull();
    requestCookie = jwt.sign({ email: "a@b.co", exp: Math.floor(Date.now() / 1000) - 60 }, SECRET);
    expect(sessionEmail()).toBeNull();
  });

  it("refuses to issue sessions without a secret", () => {
    delete process.env.JWT_SECRET;
    expect(() => startSession(NextResponse.json({}), "a@b.co")).toThrow(/JWT_SECRET/);
  });
});
