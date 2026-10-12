// Queries for Blog Posts, Case Studies and Value Blueprints.

export const BLOG_FILTER = `_type == "blogPost"`;
export const CASE_STUDY_FILTER = `_type == "caseStudy"`;
export const VALUE_BLUEPRINT_FILTER = `_type == "valueBlueprint"`;

/** If two documents share an address, the newest one is shown. */
export const NEWEST_FIRST = `_createdAt desc`;

// ── Case study cards (/case-studies grid and home page) ───────────────────────

export type CaseStudyCard = {
  _key: string;
  cardTitle?: string;
  cardDescription?: string;
  cardImage?: any;
  url: string;
  group?: string;
};

// Cards come from each Case Study's "Card" tab, in the order set in the Case
// Study Order document. Case studies missing from that list come first, newest first.
export const CASE_STUDY_CARDS_QUERY = `{
  "cards": *[_type == "caseStudy" && defined(slug) && listing.show != false] | order(_createdAt desc){
    _id,
    slug,
    "cardTitle": coalesce(listing.cardTitle, title),
    "cardDescription": listing.cardDescription,
    "cardImage": coalesce(listing.cardImage, cardimage),
    "categories": listing.categories
  },
  "order": *[_id == "caseStudiesPage"][0].cardOrder[]._ref
}`;

export function sortCaseStudyCards(result: { cards?: any[]; order?: string[] } | null): CaseStudyCard[] {
  const cards = result?.cards || [];
  const position = new Map((result?.order || []).map((id, index) => [id, index]));
  const unlisted = cards.filter((c) => !position.has(c._id));
  const listed = cards
    .filter((c) => position.has(c._id))
    .sort((a, b) => position.get(a._id)! - position.get(b._id)!);
  return [...unlisted, ...listed].map((c) => ({
    _key: c._id,
    cardTitle: c.cardTitle,
    cardDescription: c.cardDescription,
    cardImage: c.cardImage,
    url: c.slug,
    group: (c.categories || []).join(","),
  }));
}
