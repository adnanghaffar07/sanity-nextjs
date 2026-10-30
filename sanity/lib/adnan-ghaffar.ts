// Text for the /adnan-ghaffar profile page, from the "Adnan Ghaffar Page"
// document. Any empty field (or a missing document) uses the defaults in
// adnan-ghaffar-defaults.ts.
// Fetched on the server and cached; publishing in Studio refreshes it through
// the /api/revalidate webhook (tag "adnanGhaffarPage"), otherwise after 5 minutes.

import { client, reportSanityError } from "./client";
import { ADNAN_GHAFFAR_DEFAULTS, type AdnanGhaffarPageContent } from "./adnan-ghaffar-defaults";

export type { AdnanGhaffarPageContent, FocusArea } from "./adnan-ghaffar-defaults";
export { ADNAN_GHAFFAR_DEFAULTS };

type Stored = { [K in keyof AdnanGhaffarPageContent]?: AdnanGhaffarPageContent[K] | null };

const QUERY = `*[_id == "adnanGhaffarPage"][0]{
  seoTitle, seoDescription, role, introduction,
  aboutHeading, "aboutParagraphs": aboutParagraphs[defined(@) && @ != ""],
  focusHeading, "focusAreas": focusAreas[defined(title) && defined(text)]{ title, text, link },
  articlesHeading, articlesIntro,
  ctaHeading, ctaText, ctaButtonLabel, ctaLink
}`;

const hasText = (value: unknown): value is string => typeof value === "string" && value.trim() !== "";

/** Stored values win; empty strings, empty lists and missing fields use the defaults. */
export function withDefaults(stored: Stored | null | undefined): AdnanGhaffarPageContent {
  const result = { ...ADNAN_GHAFFAR_DEFAULTS };
  if (!stored) return result;
  for (const key of Object.keys(result) as (keyof AdnanGhaffarPageContent)[]) {
    const value = stored[key];
    if (Array.isArray(value) ? value.length > 0 : hasText(value)) {
      (result as Record<string, unknown>)[key] = value;
    }
  }
  return result;
}

export async function getAdnanGhaffarPage(): Promise<AdnanGhaffarPageContent> {
  try {
    const stored = await client.fetch<Stored | null>(QUERY, {}, { next: { revalidate: 300, tags: ["adnanGhaffarPage"] } });
    return withDefaults(stored);
  } catch (error) {
    reportSanityError("Loading the Adnan Ghaffar Page content", error);
    return ADNAN_GHAFFAR_DEFAULTS;
  }
}
