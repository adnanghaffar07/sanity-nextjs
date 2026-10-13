// Unsubscribe link in newsletters and blog-post emails: /api/unsubscribe?email=…

import { unsubscribe } from "@/lib/forms/server/audience";

export async function GET(request: Request) {
  const email = new URL(request.url).searchParams.get("email");
  if (!email) {
    return new Response("Invalid request: Email is required.", { status: 400 });
  }

  try {
    const updated = await unsubscribe(email);
    return updated
      ? new Response("You have been unsubscribed successfully.", { status: 200 })
      : new Response("Email not found in the database.", { status: 404 });
  } catch (error) {
    console.error("Error unsubscribing:", error);
    return new Response("Failed to unsubscribe", { status: 500 });
  }
}
