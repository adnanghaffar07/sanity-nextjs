import { client } from "@/sanity/lib/client";

export async function GET(req:any) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");

  if (!email) {
    return new Response("Invalid request: Email is required.", { status: 400 });
  }

  try {
    const params = { email };

    // Query documents with the specified email
    const contactQuery = `*[_type == "calendlyMeeting" && email == $email]{_id}`;
    const calendlyQuery = `*[_type == "contactForm" && email == $email]{_id}`;

    // Fetch documents from both collections
    const [contactDocuments, calendlyDocuments] = await Promise.all([
      client.fetch(contactQuery, params),
      client.fetch(calendlyQuery, params),
    ]);

    // Combine both results
    const documents = [...contactDocuments, ...calendlyDocuments];

    if (!documents || documents.length === 0) {
      return new Response("Email not found in the database.", { status: 404 });
    }

    // Update all matching documents
    const updatePromises = documents.map((doc) =>
      client
        .patch(doc._id)
        .set({ isUnsubscribed: true })
        .commit()
    );

    await Promise.all(updatePromises);

    return new Response(
      "You have been unsubscribed successfully.",
      { status: 200 }
    );
  } catch (error) {
    console.error("Error unsubscribing:", error);
    return new Response("Failed to unsubscribe", { status: 500 });
  }
}
