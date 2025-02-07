import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const country = req.geo?.country || "Unknown"; // Get country code

  if (country === "PK") {
    // Redirect to the not-found page
    return NextResponse.redirect(new URL('/404', req.url));
  }

  return NextResponse.next();
}

// Apply middleware only to a specific page (e.g., `/pricing`)
export const config = {
  matcher: "/pricing", // Change this to the actual page route
};
