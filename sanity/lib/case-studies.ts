// Case studies for /case-studies, /case-studies/<address> and the case study
// section on the home, pricing, offshore and service pages. Fetched on the
// server and cached; publishing in Studio refreshes them through the
// /api/revalidate webhook (tags "caseStudy" and "caseStudiesPage"), otherwise
// after 5 minutes.

import type { Image } from "sanity";
import { client, reportSanityError } from "./client";
import { CASE_STUDY_FILTER, NEWEST_FIRST } from "./content";

type SanityImage = Image & { alt?: string };

// Fields missing in Studio come back as null from GROQ, not undefined.
export interface CaseStudyCard {
  _id: string;
  slug: string;
  title: string;
  description: string | null;
  image: SanityImage | null;
  /** Filter tabs this card appears under, e.g. ["web", "ai"]. */
  categories: string[];
}

interface HeadingText {
  _key: string;
  heading: string | null;
  description: string | null;
}

export interface TechLogo {
  _id: string;
  heading: string | null;
  image: SanityImage | null;
}

export interface CaseStudy {
  subtitle: string | null;
  blogheading: string | null;
  button: { buttonText?: string; buttonUrl?: string } | null;
  cardimage: SanityImage | null;
  color: string | null;
  projectscopecontent: string | null;
  projectGoalsSection: {
    title: string | null;
    goals: { _key: string; description: string | null; image: SanityImage | null }[] | null;
  } | null;
  briefdescription: string | null;
  briefitemsarray: { _key: string; heading: string | null; value: string | null }[] | null;
  primaryimage: SanityImage | null;
  toolsandtechusedheading: string | null;
  tools: { _key: string; heading: string | null; detail: string | null; logos: TechLogo[] | null }[] | null;
  features: {
    showTitles: boolean | null;
    featureslist: {
      _key: string;
      heading: string | null;
      description: string | null;
      logoImage: SanityImage | null;
      images: SanityImage | null;
    }[] | null;
  } | null;
  challengesfacedheading: string | null;
  chanllangesfaced: HeadingText[] | null;
  ourapproachheading: string | null;
  ourapproach: HeadingText[] | null;
  resultsheading: string | null;
  results: HeadingText[] | null;
  conclusionheading: string | null;
  conclusion: string | null;
  webSeoMetadataSub: { title?: string; description?: string; keywords?: string[] } | null;
  jsonLd: string | null;
}

const CACHE = { next: { revalidate: 300, tags: ["caseStudy", "caseStudiesPage", "techLogos"] } };

// Cards come from each Case Study's "Card" tab, in the order set in the Case
// Study Order document. Case studies missing from that list come first, newest first.
const CARDS_QUERY = `{
  "cards": *[${CASE_STUDY_FILTER} && defined(slug) && listing.show != false] | order(_createdAt desc){
    _id,
    slug,
    "title": coalesce(listing.cardTitle, title),
    "description": listing.cardDescription,
    "image": coalesce(listing.cardImage, cardimage),
    "categories": coalesce(listing.categories, [])
  },
  "order": *[_id == "caseStudiesPage"][0].cardOrder[]._ref
}`;

const CASE_STUDY_QUERY = `*[${CASE_STUDY_FILTER} && slug == $slug] | order(${NEWEST_FIRST})[0]{
  subtitle, blogheading, button, cardimage, color,
  projectscopecontent, projectGoalsSection, briefdescription, briefitemsarray, primaryimage,
  toolsandtechusedheading,
  "tools": caseStudiesToolsSection.toolsTech[]{ _key, heading, detail, "logos": images[]->{ _id, heading, image } },
  features,
  challengesfacedheading, chanllangesfaced, ourapproachheading, ourapproach,
  resultsheading, results, conclusionheading, conclusion,
  webSeoMetadataSub, jsonLd
}`;

function sortByCardOrder(cards: CaseStudyCard[], order: string[]): CaseStudyCard[] {
  const position = new Map(order.map((id, index) => [id, index]));
  const unlisted = cards.filter((card) => !position.has(card._id));
  const listed = cards
    .filter((card) => position.has(card._id))
    .sort((a, b) => position.get(a._id)! - position.get(b._id)!);
  return [...unlisted, ...listed];
}

/** Every case study card, in the order set in Studio. */
export async function getCaseStudyCards(): Promise<CaseStudyCard[]> {
  try {
    const result = await client.fetch<{ cards: CaseStudyCard[] | null; order: string[] | null }>(CARDS_QUERY, {}, CACHE);
    return sortByCardOrder(result.cards ?? [], result.order ?? []);
  } catch (error) {
    reportSanityError("Loading case study cards", error);
    return [];
  }
}

/** One case study by its address, or null if there is none. */
export async function getCaseStudy(slug: string): Promise<CaseStudy | null> {
  try {
    return await client.fetch<CaseStudy | null>(CASE_STUDY_QUERY, { slug }, CACHE);
  } catch (error) {
    reportSanityError("Loading case study", error);
    return null;
  }
}
