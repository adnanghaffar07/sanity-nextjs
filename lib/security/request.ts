// Shared protections for API routes.
//
//   sameSiteRequest   browser endpoints: only accept requests sent from our own pages
//   rateLimit         best-effort cap on requests per visitor (per server instance)
//   hasBearerSecret   webhook endpoints: require "Authorization: Bearer <secret>"
//   clientIp          the visitor's IP behind Vercel's proxy
//
// Cloudflare Turnstile (lib/forms/server/turnstile.ts) is the main bot check for
// forms; these are extra layers so a script can't hammer the endpoints directly.

import { timingSafeEqual } from "node:crypto";

const SITE_HOSTS = new Set(["codeautomation.ai", "www.codeautomation.ai"]);

/** The visitor's IP address (first entry of x-forwarded-for on Vercel). */
export function clientIp(req: Request): string | null {
  return req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || null;
}

function hostOf(url: string | null): string | null {
  if (!url) return null;
  try {
    return new URL(url).hostname;
  } catch {
    return null;
  }
}

/**
 * True when the request comes from one of our pages: the production domain,
 * this deployment's own host (Vercel previews), or localhost in development.
 * Scripts that post straight to the API usually send no Origin/Referer at all.
 */
export function sameSiteRequest(req: Request): boolean {
  const from = hostOf(req.headers.get("origin")) ?? hostOf(req.headers.get("referer"));
  if (!from) return false;
  if (SITE_HOSTS.has(from)) return true;
  const ownHost = req.headers.get("x-forwarded-host") ?? req.headers.get("host");
  if (ownHost && from === ownHost.split(":")[0]) return true;
  return process.env.NODE_ENV !== "production" && (from === "localhost" || from === "127.0.0.1");
}

// ── Rate limiting ────────────────────────────────────────────────────────────
// In memory, so each server instance counts separately: it stops a single
// script from flooding an endpoint, not a distributed attack. For that, add a
// rate-limit rule in the Vercel Firewall (Project → Firewall → Rate limiting).
const hits = new Map<string, number[]>();

/** Returns false once `key` has made `limit` requests within `windowMs`. */
export function rateLimit(key: string, limit: number, windowMs: number): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
  if (recent.length >= limit) {
    hits.set(key, recent);
    return false;
  }
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 5000) {
    // Drop the oldest keys so memory stays bounded.
    for (const k of Array.from(hits.keys()).slice(0, 1000)) hits.delete(k);
  }
  return true;
}

// ── Webhook secrets ──────────────────────────────────────────────────────────
/**
 * True when the request carries "Authorization: Bearer <value of envName>".
 * Fails closed: if the environment variable is missing, nothing is accepted.
 */
export function hasBearerSecret(req: Request, envName: string): boolean {
  const expected = process.env[envName]?.trim();
  if (!expected) {
    console.error(`${envName} is not set: rejecting the request.`);
    return false;
  }
  const sent = req.headers.get("authorization")?.replace(/^Bearer\s+/i, "").trim() ?? "";
  const a = Buffer.from(sent);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

/** Escapes text for safe use inside an HTML email. */
export function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
