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

// Service pages that were permanently removed. Served as 410 Gone so search
// engines drop them from the index faster than a 404. Matched without regard to
// case: the list is lowercased below, and so is the requested path.
const GONE_PATHS = new Set([
  "/services/crm-setup-integration/sugar-crm",
  "/services/cloud-accounting-services/xero-cloud-accounting-services",
  "/services/cloud-accounting-services/quickbooks-cloud-accounting-services",
  "/services/automation-integration/n8n-automation",
  "/services/automation-integration/corezoid-automation",
  "/services/automation-integration/ifttt-automation",
  "/services/automation-integration/zapier-automation",
  "/services/headless-cms-development-services/sanity-headless",
  "/services/automation-integration/make-automation",
  "/services/website-analytics/gtml-google-tag-manager",
  "/services/website-analytics/hotjar-analytics",
  "/services/page-auth-verification/docuSign-services",
  "/services/data-warehouse/keboola",
  "/services/data-warehouse/bigquery-datawarehouse",
  "/services/data-warehouse/airbyte",
  "/services/process-orchestration/camunda-process-orchestration",
  "/services/process-orchestration",
  "/services/ecommerce-development/zencart",
  "/services/ecommerce-development/opencart",
  "/services/payment-platforms/gocardless",
  "/services/email-marketing/sendpulse",

  "/services/headless-cms-development-services/hygraph-headless",
  "/services/headless-cms-development-services/storyblock-headless",
  "/services/headless-cms-development-services/contentful-headless",
  "/services/headless-cms-development-services/strapi-headless-services",
  "/services/headless-cms-development-services/wordpress-headless",

  "/services/qa-testing-services/web-qa-testing",
  "/services/qa-testing-services/mobile-app-testing",
  "/services/qa-testing-services/automation-testing",
  "/services/qa-testing-services/web-app-testing-services",
  "/services/qa-testing-services/apm-sanitry",
  "/services/qa-testing-services/google-lighthouse-vitals",
  "/services/qa-testing-services/sonar-code-review",
  "/services/qa-testing-services/wcag-accessibility",

  "/services/mobile-app-development-services/flutter-mobile-development-services",
  "/services/mobile-app-development-services/mobile-app-audit-rescue-service",
  "/services/mobile-app-development-services/swift",

  "/services/rpa-services/robomotion",
  "/services/rpa-services/uipath",
  "/services/rpa-services/automation-anywhere",
  "/services/rpa-services/ant-works",

  "/services/ml-services/predictive-analytical-service",
  "/services/ml-services/document-recognition",
  "/services/ml-services/image-video-service",
  "/services/ml-services/instabase",

  "/services/ai-devops/cicd",
  "/services/ai-devops/terraform",
  "/services/ai-devops/jenkins",
  "/services/ai-devops/docker",

  "/services/headless-ecommerce/sanity-headless-ecommerce",
  "/services/headless-ecommerce/bigcommerce-headless",
  "/services/headless-ecommerce/shopify-headless",

  "/services/ecommerce-development/magento",
  "/services/ecommerce-development/shopify",
  "/services/ecommerce-development/prestashop",
  "/services/ecommerce-development/bigcommerce",

  "/services/payment-platforms/stripe-payment-services",
  "/services/payment-platforms/paypal-payment-services",
  "/services/payment-platforms/rapyd",
  "/services/payment-platforms/online-payment-platform",
  "/services/payment-platforms/escrow",

  "/services/page-auth-verification/kinde-authentication-services",
  "/services/page-auth-verification/twilio-authentication-services",
  "/services/page-auth-verification/twilio-verification-services",
  "/services/page-auth-verification/docuSign-services",
  "/services/page-auth-verification/twilio-number-verification-services",
  "/services/page-auth-verification/kyc-process",

  "/services/web-scraping/apify-web-data-scraping-services",
  "/services/web-scraping/scrapy-cloud-services",
  "/services/web-scraping/selenium",
  "/services/web-scraping/puppeter",
  "/services/web-scraping/texau",

  "/services/low-code-no-code/bubble.io",
  "/services/low-code-no-code/airtable",
  "/services/low-code-no-code/tabidoo",
  "/services/low-code-no-code/retool",

  "/services/crm-setup-integration/salesforce",

  "/services/managed-services/joomla-managed-service",
  "/services/managed-services/sanity-headles-managed-services",
  "/services/managed-services/digital-transformation-managed-services",
  "/services/managed-services/wordpress-woocomerce-managed-service",
  "/services/managed-services/digital-all-in",

  "/services/website-analytics/ga4-google-analytics",
  "/services/email-marketing/sendgrid",
  "/services/website-analytics/amplitude-analytics",
  "/services/email-marketing/mailchimp",
  "/services/email-marketing/brevo",
  "/services/data-warehouse/data-quality",
  "/services/email-marketing/klaviyo",
  "/services/data-warehouse/etl",
].map((path) => path.toLowerCase()));

const GONE_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="robots" content="noindex">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>410 - Page Removed | CodeAutomation</title>
</head>
<body style="font-family:system-ui,sans-serif;display:flex;min-height:100vh;align-items:center;justify-content:center;margin:0;text-align:center;padding:16px">
<div>
<h1>This page has been permanently removed</h1>
<p>The content you are looking for is no longer available.</p>
<p><a href="/">Go to homepage</a> &middot; <a href="/services">View our services</a></p>
</div>
</body>
</html>`;

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

  const pathname = req.nextUrl.pathname.replace(/\/+$/, "").toLowerCase();
  if (GONE_PATHS.has(pathname)) {
    return new NextResponse(GONE_HTML, {
      status: 410,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "X-Robots-Tag": "noindex",
      },
    });
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
