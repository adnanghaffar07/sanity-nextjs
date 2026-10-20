// Technology categories for /technologies, in the order set in the
// "Technology Order" document. Fetched on the server and cached; publishing in
// Studio refreshes it through the /api/revalidate webhook, otherwise after 5 minutes.

import type { Image } from "sanity";
import { client } from "./client";

export type SanityImageWithAlt = Image & { alt?: string };

export interface TechLogo {
  _id: string;
  name: string;
  image: SanityImageWithAlt;
}

export interface TechCategory {
  _id: string;
  name: string;
  description?: string;
  image?: SanityImageWithAlt;
  logos: TechLogo[];
}

// "logos" falls back to the old nested list until scripts/migrate-technologies.mjs
// has copied it; logos that were deleted or have no image are skipped.
const TECHNOLOGIES_QUERY = `{
  "categories": *[_type == "technologies" && defined(techname)] | order(_updatedAt desc){
    _id,
    "name": techname,
    "description": techDesc,
    "image": techImage,
    "logos": (coalesce(logos, techLogos[].images[])[]->)[defined(image.asset)]{ _id, "name": heading, image }
  },
  "order": *[_id == "technologiesPage"][0].categoryOrder[]._ref
}`;

export async function getTechCategories(): Promise<TechCategory[]> {
  try {
    const result = await client.fetch<{ categories?: TechCategory[]; order?: string[] } | null>(
      TECHNOLOGIES_QUERY,
      {},
      { next: { revalidate: 300, tags: ["technologies", "technologiesPage", "techLogos"] } }
    );
    const categories = (result?.categories ?? []).map((c) => ({
      ...c,
      name: c.name.trim(),
      logos: c.logos.map((logo) => ({ ...logo, name: logo.name?.trim() ?? "" })),
    }));
    // Categories missing from the order list come first (most recently edited first).
    const position = new Map((result?.order ?? []).map((id, index) => [id, index]));
    const unlisted = categories.filter((c) => !position.has(c._id));
    const listed = categories
      .filter((c) => position.has(c._id))
      .sort((a, b) => position.get(a._id)! - position.get(b._id)!);
    return [...unlisted, ...listed];
  } catch (error) {
    console.error("Loading technologies failed:", error);
    return [];
  }
}
