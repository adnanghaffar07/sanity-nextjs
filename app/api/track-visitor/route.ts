// Records one page visit for the /admin/visitors dashboard. Location comes
// from Vercel's geo headers (free, no third-party lookup); it is "Unknown"
// when running locally.

import { NextResponse, type NextRequest } from "next/server";
import { clientIp, rateLimit, sameSiteRequest } from "@/lib/security/request";
import { privateId, serverClient } from "@/sanity/lib/server-client";

const UNKNOWN = "Unknown";
const countryNames = new Intl.DisplayNames(["en"], { type: "region" });

function isLocalSource(value: string): boolean {
  if (!value || value === UNKNOWN || value === "Direct") return false;
  try {
    const host = new URL(value).hostname.toLowerCase();
    return host === "localhost" || host === "127.0.0.1" || host === "::1" || host.endsWith(".local");
  } catch {
    return value.toLowerCase().includes("localhost") || value.includes("127.0.0.1");
  }
}

// Vercel sets these on every request it routes; the city is URL-encoded.
function location(req: NextRequest) {
  const header = (name: string) => req.headers.get(`x-vercel-ip-${name}`) ?? "";
  const countryCode = header("country");
  let city = UNKNOWN;
  try {
    city = decodeURIComponent(header("city")) || UNKNOWN;
  } catch {}
  let country = countryCode || UNKNOWN;
  try {
    if (countryCode) country = countryNames.of(countryCode) ?? countryCode;
  } catch {}
  return {
    location: { city, region: header("country-region") || UNKNOWN, country },
    latitude: Number(header("latitude")) || 0,
    longitude: Number(header("longitude")) || 0,
  };
}

const text = (value: unknown, fallback: string) => (typeof value === "string" && value ? value.slice(0, 2000) : fallback);

export async function POST(req: NextRequest) {
  // Only our own pages may record visits, and not faster than a real visitor browses.
  if (!sameSiteRequest(req)) return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  const ip = clientIp(req);
  if (ip && !rateLimit(`visit:${ip}`, 30, 60 * 1000)) {
    return NextResponse.json({ success: true, skipped: "rate-limited" });
  }

  try {
    const body = await req.json().catch(() => ({}));
    const pageUrl = text(body?.pageUrl, req.headers.get("referer") || UNKNOWN);
    const referrer = text(body?.referrer, "Direct");
    if (isLocalSource(pageUrl) || isLocalSource(referrer)) {
      return NextResponse.json({ success: true, skipped: "localhost-traffic" });
    }

    await serverClient.create({
      _id: privateId(),
      _type: "visitor",
      ip: ip ?? UNKNOWN,
      ...location(req),
      timestamp: new Date().toISOString(),
      pageUrl,
      userAgent: text(body?.userAgent, req.headers.get("user-agent") || UNKNOWN),
      referrer,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Saving visitor failed:", error);
    return NextResponse.json({ error: "Failed to save visitor data" }, { status: 500 });
  }
}
