// Sanity webhook → Google Indexing API: asks Google to recrawl a page after it
// is published. Sanity must send "Authorization: Bearer <SANITY_WEBHOOK_SECRET>"
// (same as /api/sanity-webhook).

import { NextResponse } from "next/server";
import { submitToGoogle } from "@/lib/googleIndexing";
import { hasBearerSecret } from "@/lib/security/request";

const BASE_URL = "https://codeautomation.ai";
const SECTIONS: Record<string, string> = { blogPost: "blogs", caseStudy: "case-studies", valueBlueprint: "value-blueprints" };

type Body = { _type?: string; slug?: string; urlPath?: string; url?: string };

// The published page's address, from the document type (or a URL sent directly).
function pageUrl({ _type, slug, urlPath, url }: Body): string | { error: string } {
  if (_type && SECTIONS[_type]) return slug ? `${BASE_URL}/${SECTIONS[_type]}/${slug}` : { error: `Missing slug for ${_type} document` };
  if (_type === "logicalServices") {
    return urlPath ? `${BASE_URL}/services/${urlPath.replace(/^\//, "")}` : { error: "Missing urlPath for logicalServices document" };
  }
  return url ?? { error: "Unsupported document type or missing URL data" };
}

export async function POST(req: Request) {
  if (!hasBearerSecret(req, "SANITY_WEBHOOK_SECRET")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const url = pageUrl((await req.json()) as Body);
    if (typeof url !== "string") return NextResponse.json(url, { status: 400 });
    const result = await submitToGoogle(url);
    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error("Submitting URL for indexing failed:", error);
    return NextResponse.json({ error: "Failed to submit URL for indexing" }, { status: 500 });
  }
}
