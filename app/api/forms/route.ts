// Single endpoint for every website form. See lib/forms/server/process.ts.
// Layers against spam: same-site check and rate limit here, Cloudflare
// Turnstile and spam flagging in process.ts.

import { NextResponse } from "next/server";
import { handleFormRequest } from "@/lib/forms/server/process";
import { clientIp, rateLimit, sameSiteRequest } from "@/lib/security/request";

// Real visitors send one or two forms; this only stops scripts.
const MAX_SUBMISSIONS = 8;
const WINDOW_MS = 10 * 60 * 1000;

export async function POST(request: Request) {
  if (!sameSiteRequest(request)) {
    return NextResponse.json({ ok: false, error: "Forbidden." }, { status: 403 });
  }

  const ip = clientIp(request);
  if (ip && !rateLimit(`forms:${ip}`, MAX_SUBMISSIONS, WINDOW_MS)) {
    return NextResponse.json(
      { ok: false, error: "Too many submissions. Please wait a few minutes and try again." },
      { status: 429 }
    );
  }

  const body = await request.json().catch(() => null);
  const { status, body: response } = await handleFormRequest(body, ip);
  return NextResponse.json(response, { status });
}
