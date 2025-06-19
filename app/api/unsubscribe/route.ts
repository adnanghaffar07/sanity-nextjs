import { serverClient } from "@/sanity/lib/sanity/serverClient";

export async function GET(req: any) {
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
    const metaQuery = `*[_type == "fbMetaLead" && email == $email]{_id}`;

    // Fetch documents from both collections
    const [contactDocuments, calendlyDocuments, metayDocuments] = await Promise.all([
      serverClient.fetch(contactQuery, params),
      serverClient.fetch(calendlyQuery, params),
      serverClient.fetch(metaQuery, params),

    ]);

    // Combine both results
    const documents = [...contactDocuments, ...calendlyDocuments, ...metayDocuments];

    if (!documents || documents.length === 0) {
      return new Response("Email not found in the database.", { status: 404 });
    }

    // Update all matching documents
    const updatePromises = documents.map((doc) =>
      serverClient
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
