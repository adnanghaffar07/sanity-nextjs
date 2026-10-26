// Authenticated Sanity client for server code only (API routes, form
// handling): it can write and read private documents such as users and
// form submissions. Never import it into a client component.
import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "@/sanity/env";

export const serverClient = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

/**
 * ID for a document holding personal data (form submissions, users, visitors).
 * The dataset is public, but Sanity never serves documents whose ID contains a
 * dot to unauthenticated requests, so these stay readable only with a token
 * (this client, Studio). Always create such documents with this ID.
 */
export const privateId = () => `private.${crypto.randomUUID()}`;
