// sanity/lib/serverClient.ts
import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../../env";

export const serverClient = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn: false, // Always false for authenticated queries
  token: process.env.SANITY_API_TOKEN, // ✅ Safe: this runs only on the server
});
