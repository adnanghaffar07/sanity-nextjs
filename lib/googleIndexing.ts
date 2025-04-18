import { google } from "googleapis";

const SCOPES = ["https://www.googleapis.com/auth/indexing"];

const auth = new google.auth.JWT(
  process.env.GOOGLE_CLIENT_EMAIL,
  undefined,
  process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  SCOPES
);
 
const indexer = google.indexing({ version: "v3", auth });

export async function submitToGoogle(url: string) {
  try {
    const response = await indexer.urlNotifications.publish({
      requestBody: {
        url: url,
        type: "URL_UPDATED", // Use "URL_DELETED" if you want to remove from indexing
      },
    });
    console.log("Submitted for indexing:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error submitting URL:", error);
    throw new Error("Failed to submit URL for indexing");
  }
}
 
