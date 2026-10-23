// Content for /about/service-summary from the "Service Summary" document.
// Fetched on the server and cached; publishing in Studio refreshes it through
// the /api/revalidate webhook, otherwise after 5 minutes.

import { client, reportSanityError } from "./client";
import type { SanityImageWithAlt, TechLogo } from "./technologies";

interface Section {
  heading?: string;
  text?: string;
}

export interface ToolCard {
  _key: string;
  heading?: string;
  detail?: string;
  logos: TechLogo[];
}

export interface ServiceSummaryContent {
  seo?: { title?: string; description?: string; keywords?: string[] };
  heroImage?: SanityImageWithAlt;
  pageTitle?: string;
  pageDesc?: string;
  intro?: Section;
  options?: {
    heading?: string;
    items?: { _key: string; title?: string; subtitle?: string; description?: string; benefits?: string[] }[];
  };
  tools?: { heading?: string; items?: ToolCard[] };
  cycle?: { heading?: string; steps?: { _key: string; heading?: string; detail?: string }[] };
  summary?: Section & { image?: SanityImageWithAlt };
  cta?: Section;
  offer?: Section;
  payments?: Section & { items?: ToolCard[] };
}

// Logos are referenced Technology Logos; deleted ones and ones without an image are skipped.
const LOGOS = `"logos": (images[]->)[defined(image.asset)]{ _id, "name": heading, image }`;

const SERVICE_SUMMARY_QUERY = `*[_type == "serviceSummary"][0]{
  "seo": webSeoMetadata{ title, description, keywords },
  heroImage,
  pageTitle,
  pageDesc,
  "intro": introductionSection{ "heading": introHeading, "text": introDesc },
  "options": detailSection{
    heading,
    "items": detailInd[]{ _key, title, "subtitle": smDescription, description, "benefits": keyBenefits }
  },
  "tools": projectManagement{ "heading": projectHeading, "items": toolsTech[]{ _key, heading, detail, ${LOGOS} } },
  "cycle": projectCycleSection{ "heading": projectCycleHaeding, "steps": projectLifeCycle[]{ _key, heading, detail } },
  "summary": summarySection{ "heading": summaryHeading, "text": summaryMessage, "image": summaryImg },
  "cta": callToActionSection{ "heading": callToActionHeading, "text": callToAction },
  "offer": specialOffersSection{ "heading": offerHeading, "text": specialOffer },
  "payments": paymentOption{
    "heading": paymentHeading,
    "text": paymentDetail,
    "items": paymentTools[]{ _key, heading, detail, ${LOGOS} }
  }
}`;

export async function getServiceSummary(): Promise<ServiceSummaryContent | null> {
  try {
    return await client.fetch<ServiceSummaryContent | null>(
      SERVICE_SUMMARY_QUERY,
      {},
      { next: { revalidate: 300, tags: ["serviceSummary", "techLogos"] } }
    );
  } catch (error) {
    reportSanityError("Loading the Service Summary", error);
    return null;
  }
}
