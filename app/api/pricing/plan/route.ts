// Full pricing plan (every feature and the prices) for signed-in visitors.
// The /pricing page itself only contains the preview rows.

import { NextResponse } from "next/server";
import { sessionEmail } from "@/lib/auth/session";
import { getPricingPage } from "@/sanity/lib/site-pages";

const PRIVATE = { headers: { "Cache-Control": "private, no-store" } };

export async function GET() {
  // 200 either way: a 401 would show as an error in every visitor's console.
  if (!sessionEmail()) return NextResponse.json({ signedIn: false }, PRIVATE);
  const page = await getPricingPage();
  return NextResponse.json({ signedIn: true, features: page?.features ?? null }, PRIVATE);
}
