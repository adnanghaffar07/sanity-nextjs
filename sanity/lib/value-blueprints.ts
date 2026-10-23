// Value blueprints for /value-blueprints and /value-blueprints/<address>.
// Fetched on the server and cached; publishing in Studio refreshes them
// through the /api/revalidate webhook (tags "valueBlueprint" and
// "valueBlueprints"), otherwise after 5 minutes.

import type { Image } from "sanity";
import { client, reportSanityError } from "./client";
import { NEWEST_FIRST, VALUE_BLUEPRINT_FILTER } from "./content";

type SanityImage = Image & { alt?: string };

// Fields missing in Studio come back as null from GROQ, not undefined.
export interface TechLogo {
  _id: string;
  heading: string | null;
  image: SanityImage | null;
}

export interface IconCard {
  _key: string;
  heading: string | null;
  detail: string | null;
  image: SanityImage | null;
}

export interface TextBlock {
  heading: string | null;
  text: string | null;
  image: SanityImage | null;
}

interface Seo {
  title?: string;
  description?: string;
  keywords?: string[];
}

export interface ValueBlueprintsPage {
  title: string | null;
  heroImage: SanityImage | null;
  intro: TextBlock | null;
  tools: { heading: string | null; text: string | null; items: { _key: string; name: string | null; logos: TechLogo[] }[] };
  projectCycle: { heading: string | null; cards: IconCard[] } | null;
  deliveryOptions: { heading: string | null; cards: IconCard[] } | null;
  summary: TextBlock | null;
  callToAction: TextBlock | null;
  specialOffer: TextBlock | null;
  seo: Seo | null;
  facebook: { title?: string; description?: string } | null;
  twitter: { title?: string; description?: string } | null;
}

export interface ValueBlueprintCard {
  _id: string;
  slug: string;
  title: string;
  image: SanityImage | null;
  logos: TechLogo[];
}

export interface ValueBlueprint {
  slug: string;
  title: string;
  heroimage: SanityImage | null;
  toolsandtechusedheading: string | null;
  /** Workflow steps, each a list of alternative tools (shown joined by "or", steps by "+"). */
  steps: TechLogo[][];
  challengesfacedheading: string | null;
  chanllangesfaced: { _key: string; heading: string | null; description: string | null }[] | null;
  resultsheading: string | null;
  conclusionheading: string | null;
  conclusion: string | null;
  seo: Seo | null;
  facebook: { facebookTitle?: string; facebookDescription?: string } | null;
  twitter: { twitterTitle?: string; twitterDescription?: string } | null;
}

const CACHE = { next: { revalidate: 300, tags: ["valueBlueprint", "valueBlueprints", "techLogos"] } };

const LOGO = `{ _id, heading, image }`;

// Stored workflow step keys, in page order.
const STEP_KEYS = ["firstCat", "secondCat", "thirdCat", "forthCat", "fifthCat", "SixthCat", "SevenCat"];

const PAGE_QUERY = `*[_type == "valueBlueprints"][0]{
  title,
  heroImage,
  "intro": introductionSection{ "heading": introHeading, "text": introDesc, "image": introImage },
  "tools": {
    "heading": toolsTechSection.toolsTechHeading,
    "text": toolsTechSection.toolsTechDesc,
    "items": coalesce(toolsTechSection.toolsTech[]{ _key, "name": heading, "logos": coalesce(images[]->${LOGO}, []) }, [])
  },
  "projectCycle": projectCycleSection{ "heading": projectCycleHaeding, "cards": coalesce(projectCycle[]{ _key, heading, detail, "image": projectImage }, []) },
  "deliveryOptions": deliveryOptionSection{ "heading": deliveryOptionHaeding, "cards": coalesce(deliveryOption[]{ _key, heading, detail, "image": deliveryImage }, []) },
  "summary": summarySection{ "heading": summaryHeading, "text": summaryMessage, "image": summaryImg },
  "callToAction": callToActionSection{ "heading": callToActionHeading, "text": callToAction, "image": callToActionImg },
  "specialOffer": specialOffersSection{ "heading": offerHeading, "text": specialOffer, "image": offerImg },
  "seo": webSeoMetadata,
  facebook,
  "twitter": twitterhMeta
}`;

const CARDS_QUERY = `*[${VALUE_BLUEPRINT_FILTER} && defined(slug)] | order(_createdAt asc){
  _id,
  slug,
  title,
  "image": cardimage,
  "logos": coalesce(caseStudiesToolsSection.toolsTech[].images[]->${LOGO}, [])
}`;

// The address is the blueprint's own address, or (old links) its original document id.
const BLUEPRINT_QUERY = `*[${VALUE_BLUEPRINT_FILTER} && (slug == $address || legacyId == $address)] | order(${NEWEST_FIRST})[0]{
  slug,
  title,
  heroimage,
  toolsandtechusedheading,
  "steps": [${STEP_KEYS.map((key) => `coalesce(toolstechlist[0].categories.${key}[]->${LOGO}, [])`).join(", ")}],
  challengesfacedheading,
  chanllangesfaced,
  resultsheading,
  conclusionheading,
  conclusion,
  "seo": webSeoMetadataSub,
  "facebook": facebookCardsSub,
  "twitter": twitterCardsSub
}`;

// A reference to a logo that was deleted from the library resolves to null.
const existing = (logos: (TechLogo | null)[]) => logos.filter((logo): logo is TechLogo => logo !== null);

/** The /value-blueprints page content, or null if it can't be loaded. */
export async function getValueBlueprintsPage(): Promise<ValueBlueprintsPage | null> {
  try {
    const page = await client.fetch<ValueBlueprintsPage | null>(PAGE_QUERY, {}, CACHE);
    if (!page) return null;
    return { ...page, tools: { ...page.tools, items: page.tools.items.map((item) => ({ ...item, logos: existing(item.logos) })) } };
  } catch (error) {
    reportSanityError("Loading the Value Blueprints page", error);
    return null;
  }
}

/** Every blueprint as a card, oldest first. */
export async function getValueBlueprintCards(): Promise<ValueBlueprintCard[]> {
  try {
    const cards = (await client.fetch<ValueBlueprintCard[] | null>(CARDS_QUERY, {}, CACHE)) ?? [];
    return cards.map((card) => ({ ...card, logos: existing(card.logos) }));
  } catch (error) {
    reportSanityError("Loading value blueprints", error);
    return [];
  }
}

/** One blueprint by its address (or old document id), or null if there is none. */
export async function getValueBlueprint(address: string): Promise<ValueBlueprint | null> {
  try {
    const blueprint = await client.fetch<ValueBlueprint | null>(BLUEPRINT_QUERY, { address }, CACHE);
    if (!blueprint) return null;
    return { ...blueprint, steps: blueprint.steps.map(existing).filter((step) => step.length > 0) };
  } catch (error) {
    reportSanityError("Loading value blueprint", error);
    return null;
  }
}
