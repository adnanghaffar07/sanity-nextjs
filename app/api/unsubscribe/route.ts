// Unsubscribe link in newsletters and blog-post emails: /api/unsubscribe?email=…
//
// Opening the link (GET) only shows a confirmation button: mail security
// scanners open every link in an email, and must not unsubscribe people.
// The button, and email apps' one-click unsubscribe, send a POST, which
// unsubscribes. The reply is the same whether or not the address is on the
// list, so the link can't be used to find out who is subscribed.

import { unsubscribe } from "@/lib/forms/server/audience";
import { clientIp, escapeHtml, rateLimit } from "@/lib/security/request";

const page = (body: string, status = 200) =>
  new Response(
    `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex"><title>Unsubscribe | CodeAutomation</title></head>` +
      `<body style="font-family:system-ui,sans-serif;max-width:480px;margin:80px auto;padding:0 16px;text-align:center;color:#222">${body}</body></html>`,
    { status, headers: { "Content-Type": "text/html; charset=utf-8" } }
  );

const emailFrom = (request: Request) => new URL(request.url).searchParams.get("email")?.trim() ?? "";

export function GET(request: Request) {
  const email = emailFrom(request);
  if (!email) return page("<p>This unsubscribe link is incomplete.</p>", 400);
  return page(
    `<h1 style="font-size:22px">Unsubscribe from CodeAutomation emails?</h1><p>${escapeHtml(email)}</p>` +
      `<form method="post"><button type="submit" style="background:#1d92fb;color:#fff;border:0;border-radius:6px;padding:12px 24px;font-size:16px;cursor:pointer">Unsubscribe</button></form>`
  );
}

export async function POST(request: Request) {
  const email = emailFrom(request);
  if (!email) return page("<p>This unsubscribe link is incomplete.</p>", 400);

  const ip = clientIp(request);
  if (ip && !rateLimit(`unsubscribe:${ip}`, 20, 60 * 60 * 1000)) {
    return page("<p>Too many requests. Please try again later.</p>", 429);
  }

  try {
    await unsubscribe(email);
    return page("<h1 style=\"font-size:22px\">You have been unsubscribed.</h1><p>You won't receive these emails any more.</p>");
  } catch (error) {
    console.error("Unsubscribing failed:", error);
    return page("<p>Failed to unsubscribe. Please try again later.</p>", 500);
  }
}
