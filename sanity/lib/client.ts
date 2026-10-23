import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, useCdn } from "@/sanity/env";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});

/**
 * Handles a failed Sanity request in a data loader. While building, it fails
 * the build, so a page is never shipped with empty content (the previous
 * deployment stays live instead). At runtime it logs the error and the loader
 * returns its fallback, so one failed request doesn't break the page.
 */
export function reportSanityError(what: string, error: unknown): void {
  if (process.env.NEXT_PHASE === "phase-production-build") {
    throw new Error(`${what} failed during the build`, { cause: error });
  }
  console.error(`${what} failed:`, error);
}
