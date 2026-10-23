// Sanity webhook → refresh cached pages right after content is published.
//
// Set up in sanity.io/manage → API → Webhooks:
//   URL:        https://codeautomation.ai/api/revalidate
//   Trigger on: create, update, delete
//   Filter:     _type in ["homePage", "caseStudy", "caseStudiesPage", "servicePage", "logicalServices", "subService", "techLogos", "careers", "technologies", "technologiesPage", "serviceSummary", "blogPost", "valueBlueprint", "valueBlueprints", "paymentPlanUI", "news", "lifeatCA", "partnership", "terms", "valueDiscoveryProcessPage"]
//   Projection: { _type }
//   Secret:     same value as SANITY_REVALIDATE_SECRET in the site's environment
// Each published type refreshes the pages that use its cache tag.

import { revalidateTag } from "next/cache";
import { NextResponse, type NextRequest } from "next/server";
import { parseBody } from "next-sanity/webhook";

export async function POST(request: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) {
    return NextResponse.json({ message: "SANITY_REVALIDATE_SECRET is not set" }, { status: 500 });
  }

  try {
    const { isValidSignature, body } = await parseBody<{ _type?: string }>(request, secret);
    if (!isValidSignature) {
      return NextResponse.json({ message: "Invalid signature" }, { status: 401 });
    }
    if (!body?._type) {
      return NextResponse.json({ message: "Missing _type" }, { status: 400 });
    }
    revalidateTag(body._type);
    return NextResponse.json({ revalidated: body._type });
  } catch (error) {
    console.error("Revalidate webhook failed:", error);
    return NextResponse.json({ message: "Error revalidating" }, { status: 500 });
  }
}
