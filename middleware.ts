import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Known spam/abuse sources (Tor exit nodes and other bad actors flagged from lead-form submissions).
const BLOCKED_IPS = new Set([
  "185.220.100.251",
  "185.220.100.248",
  "185.220.101.33",
  "103.146.203.120",
  "185.220.101.153",
  "193.189.100.201",
  "45.84.107.101",
  "45.84.107.222",
  "171.25.193.131",
  "185.220.101.26",
  "45.13.225.69",
  "193.189.100.199",
  "193.189.100.195",
  "185.220.101.174",
  "185.220.100.255",
  "45.84.107.198",
  "171.25.193.38",
  "185.220.101.98",
]);

function getClientIp(req: NextRequest): string | null {
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  const realIp = req.headers.get("x-real-ip");
  if (realIp) return realIp.trim();

  return req.ip || null;
}

export function middleware(req: NextRequest) {
  const clientIp = getClientIp(req);
  if (clientIp && BLOCKED_IPS.has(clientIp)) {
    return new NextResponse("Access denied.", { status: 403 });
  }

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return new NextResponse(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,DELETE,PATCH,POST,PUT',
        'Access-Control-Allow-Headers': 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization',
        'Access-Control-Max-Age': '86400',
      },
    });
  } 

  const country = req.geo?.country || "Unknown"; // Get country code

  // if (country === "PK") {
  //   // Redirect to the not-found page
  //   return NextResponse.rewrite(new URL('/not-found', req.url));
  // }

  // Add CORS headers to the response
  const response = NextResponse.next();
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET,DELETE,PATCH,POST,PUT');
  response.headers.set('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');
  
  return response;
}

// Run on all routes (pages + API) except static assets, so blocked IPs are
// stopped everywhere, not just on a single page.
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
