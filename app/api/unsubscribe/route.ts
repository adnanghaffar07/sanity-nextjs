// Unsubscribe link in newsletters and blog-post emails: /api/unsubscribe?email=…
// The reply is the same whether or not the address is on the list, so the link
// can't be used to find out who is subscribed.

import { unsubscribe } from "@/lib/forms/server/audience";
import { clientIp, rateLimit } from "@/lib/security/request";

const DONE = "You have been unsubscribed. You won't receive these emails any more.";

export async function GET(request: Request) {
  const email = new URL(request.url).searchParams.get("email")?.trim();
  if (!email) return new Response("Invalid request: Email is required.", { status: 400 });

  const ip = clientIp(request);
  if (ip && !rateLimit(`unsubscribe:${ip}`, 20, 60 * 60 * 1000)) {
    return new Response("Too many requests. Please try again later.", { status: 429 });
  }

  try {
    await unsubscribe(email);
    return new Response(DONE, { status: 200 });
  } catch (error) {
    console.error("Error unsubscribing:", error);
    return new Response("Failed to unsubscribe. Please try again later.", { status: 500 });
  }
}
