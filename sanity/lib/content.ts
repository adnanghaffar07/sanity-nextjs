// Queries for Blog Posts, Case Studies and Value Blueprints.
//
// These used to be one `portfolio` type. They now have their own types
// (blogPost / caseStudy / valueBlueprint); scripts/split-portfolio.mjs copies
// the old documents across. Until every old document has been copied, the
// website reads both: the new document wins, and an old document is skipped
// once a new one was copied from it (`legacyId`) or uses its address.

const legacyOf = (newType: string, legacyCondition: string) =>
  `(_type == "${newType}" || (_type == "portfolio" && ${legacyCondition} && !(_id in *[_type == "${newType}"].legacyId) && !(slug in *[_type == "${newType}"].slug)))`;

export const BLOG_FILTER = legacyOf("blogPost", `pageType == "blogs"`);
export const CASE_STUDY_FILTER = legacyOf(
  "caseStudy",
  `(!defined(pageType) || pageType == "caseStudy") && title != "CaseStudyInfo"`
);
export const VALUE_BLUEPRINT_FILTER = legacyOf("valueBlueprint", `pageType == "valueBlueprint"`);

/**
 * Order term that puts new documents before old ones with the same address.
 * Ties (two posts with one address) go to the newest post, as on the live site.
 */
export const NEW_FIRST = `select(_type == "portfolio" => 1, 0) asc, _createdAt desc`;

// ── Case study cards (/case-studies grid and home page) ───────────────────────

export type CaseStudyCard = {
  _key: string;
  cardTitle?: string;
  cardDescription?: string;
  cardImage?: any;
  url: string;
  group?: string;
};

export const CASE_STUDY_CARDS_QUERY = `{
  "cards": *[_type == "caseStudy" && defined(slug)] | order(_createdAt desc){
    _id,
    "slug": slug,
    "show": listing.show != false,
    "cardTitle": coalesce(listing.cardTitle, title),
    "cardDescription": listing.cardDescription,
    "cardImage": coalesce(listing.cardImage, cardimage),
    "categories": listing.categories
  },
  "legacy": *[_type == "portfolio" && title == "CaseStudyInfo"] | order(_updatedAt desc)[0].cardItemsList
}`;

const slugFromUrl = (url = "") =>
  url.trim().replace(/^https?:\/\/[^/]+/, "").replace(/^\/?(case-studies\/)?/, "").replace(/\/+$/, "");

/**
 * Cards come from each Case Study's "Card" tab. The grid keeps the hand-picked
 * order of the old CaseStudyInfo list: a copied case study replaces its old card
 * in place (or removes it, if its card is turned off), cards not copied yet stay
 * as they are, and case studies that were never in that list come first, newest
 * first.
 */
export function mergeCaseStudyCards(result: { cards?: any[]; legacy?: any[] } | null): CaseStudyCard[] {
  const fresh = result?.cards || [];
  const legacy = result?.legacy || [];
  const toCard = (c: any): CaseStudyCard => ({
    _key: c._id,
    cardTitle: c.cardTitle,
    cardDescription: c.cardDescription,
    cardImage: c.cardImage,
    url: c.slug,
    group: (c.categories || []).join(","),
  });

  const bySlug = new Map(fresh.map((c) => [c.slug, c]));
  const inLegacyList = new Set(legacy.map((c) => slugFromUrl(c?.url)));
  const out: CaseStudyCard[] = fresh.filter((c) => c.show && !inLegacyList.has(c.slug)).map(toCard);
  for (const old of legacy) {
    const match = bySlug.get(slugFromUrl(old?.url));
    if (!match) out.push(old);
    else if (match.show) out.push(toCard(match));
  }
  return out;
}
