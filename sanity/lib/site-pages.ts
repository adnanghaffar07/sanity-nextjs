// One-document pages edited in Studio: pricing, news, life at CA, partnership,
// terms, the discovery process, and the brochure list. Each is fetched on the
// server and cached; publishing refreshes it through the /api/revalidate
// webhook (tag = the document type), otherwise after 5 minutes.
//
// Fields missing in Studio come back as null from GROQ, not undefined.

import type { Image, PortableTextBlock } from "sanity";
import { client, reportSanityError } from "./client";

export type SanityImage = Image & { alt?: string };

export interface PageSeo {
  title?: string;
  description?: string;
  keywords?: string[];
}

async function fetchPage<T>(type: string, projection: string, label: string): Promise<T | null> {
  try {
    return await client.fetch<T | null>(`*[_type == $type][0]${projection}`, { type }, { next: { revalidate: 300, tags: [type] } });
  } catch (error) {
    reportSanityError(`Loading the ${label} page`, error);
    return null;
  }
}

// ── Pricing ─────────────────────────────────────────────────────────────────

export interface PlanCell {
  description?: string;
  included?: boolean;
}

export interface PlanFeature {
  _key: string;
  name: string;
  basic?: PlanCell;
  standard?: PlanCell;
  enterprise?: PlanCell;
}

export interface PricingPage {
  heading: string | null;
  subHeading: string | null;
  callToActionButton: string | null;
  callToActionLink: string | null;
  introductionSection: { introHeading?: string; featureIncluded?: string[]; introImage?: SanityImage } | null;
  features: {
    title?: string;
    description?: string;
    featuresList?: PlanFeature[];
    pricing?: { basicPrice?: number; standardPrice?: number; enterprisePrice?: number };
  } | null;
}

export const getPricingPage = () =>
  fetchPage<PricingPage>("paymentPlanUI", "{ heading, subHeading, callToActionButton, callToActionLink, introductionSection, features }", "pricing");

// ── News ────────────────────────────────────────────────────────────────────

export interface NewsPage {
  title: string | null;
  subtitle: string | null;
  backgroundImage: SanityImage | null;
  heroImage: SanityImage | null;
  articleTitle: string | null;
  articleSubtitle: string | null;
  articles: { _key: string; title?: string; description?: string; date?: string; image?: SanityImage }[] | null;
  techTitle: string | null;
  techSubtitle: string | null;
  latestTechnologies: { _key: string; title?: string; description?: string }[] | null;
  webSeoMetadataSub: PageSeo | null;
  facebookCardsSub: { facebookTitle?: string; facebookDescription?: string } | null;
  twitterCardsSub: { twitterTitle?: string; twitterDescription?: string } | null;
}

export const getNewsPage = () =>
  fetchPage<NewsPage>(
    "news",
    `{ title, subtitle, backgroundImage, heroImage, articleTitle, articleSubtitle, articles, techTitle, techSubtitle,
       latestTechnologies, webSeoMetadataSub, facebookCardsSub, twitterCardsSub }`,
    "news"
  );

// ── Life at CA ──────────────────────────────────────────────────────────────

export interface LifeAtCaPage {
  title: string | null;
  description: string | null;
  bannerImage: SanityImage | null;
  teamMembers: { _key: string; name?: string; title?: string; imageUrl?: SanityImage }[] | null;
  introText: string | null;
  extraImages: SanityImage[] | null;
  middleText: string | null;
  /** Each section holds up to 15 photos laid out in a fixed collage. */
  imageSections: { _key: string; images?: SanityImage[] }[] | null;
  conclusionText: string | null;
}

export const getLifeAtCaPage = () =>
  fetchPage<LifeAtCaPage>(
    "lifeatCA",
    "{ title, description, bannerImage, teamMembers, introText, extraImages, middleText, imageSections, conclusionText }",
    "life at CA"
  );

// ── Partnership program ─────────────────────────────────────────────────────

export interface PartnershipPage {
  heroTitle: string | null;
  heroSubTitle: string | null;
  heroImage: SanityImage | null;
  title: string | null;
  description: string | null;
  availableProgramSection: {
    partnershipTitle?: string;
    partnershipDescription?: string;
    partnershipImage?: SanityImage;
    programs?: { _key: string; title?: string; description?: string; icon?: SanityImage }[];
  } | null;
  programDetails: {
    _key: string;
    title?: string;
    programImage?: SanityImage;
    list?: { _key: string; topLevelItem?: string; subLevelList?: { _key: string; subLevelItem?: string }[] }[];
  }[] | null;
  services: { _key: string; link?: string; singleService?: string[] }[] | null;
  webSeoMetadataSub: PageSeo | null;
  facebookCardsSub: { facebookTitle?: string; facebookDescription?: string } | null;
  twitterCardsSub: { twitterTitle?: string; twitterDescription?: string } | null;
}

export const getPartnershipPage = () =>
  fetchPage<PartnershipPage>(
    "partnership",
    `{ heroTitle, heroSubTitle, heroImage, title, description, availableProgramSection, programDetails, services,
       webSeoMetadataSub, facebookCardsSub, twitterCardsSub }`,
    "partnership"
  );

// ── Terms and conditions ────────────────────────────────────────────────────

export interface TermsPage {
  title: string | null;
  heroImage: SanityImage | null;
  heroText: string | null;
  content: PortableTextBlock[] | null;
  lastUpdated: string | null;
}

export const getTermsPage = () => fetchPage<TermsPage>("terms", "{ title, heroImage, heroText, content, lastUpdated }", "terms");

// ── Brochures ───────────────────────────────────────────────────────────────

export interface Brochure {
  _id: string;
  title: string | null;
  description: string | null;
  image: SanityImage | null;
  updatedAt: string;
  fileUrl: string;
}

/** Services that have a brochure PDF, oldest first. */
export async function getBrochures(): Promise<Brochure[]> {
  try {
    return (
      (await client.fetch<Brochure[] | null>(
        `*[_type == "logicalServices" && defined(brochure.asset)] | order(_createdAt asc){
          _id,
          "title": serviceCardTitle,
          "description": serviceDesc,
          "image": heroImage,
          "updatedAt": _updatedAt,
          "fileUrl": brochure.asset->url
        }`,
        {},
        { next: { revalidate: 300, tags: ["logicalServices"] } }
      )) ?? []
    );
  } catch (error) {
    reportSanityError("Loading brochures", error);
    return [];
  }
}

// ── Value discovery process ─────────────────────────────────────────────────

/** A bold title followed by its detail, e.g. "Interviews: talk to stakeholders". */
export interface TitledPoint {
  title?: string;
  detail?: string;
}

interface DiscoverySection {
  heading?: string;
  description?: string;
}

interface Example {
  title?: string;
  detail?: string;
}

export interface DiscoveryPage {
  pageTitle: string | null;
  pageDesc: string | null;
  heroImage: SanityImage | null;
  intro: DiscoverySection | null;
  discovery: DiscoverySection | null;
  knowledge: (DiscoverySection & { sources: TitledPoint[] | null; stepsHeading?: string; steps: TitledPoint[] | null; example: Example | null }) | null;
  voc: (DiscoverySection & { methods: TitledPoint[] | null; example: Example | null }) | null;
  dmaic: (DiscoverySection & { dmaicHeading?: string; dmaicSteps: TitledPoint[] | null; dmaicExample: Example | null; dmadvHeading?: string; dmadvSteps: TitledPoint[] | null; dmadvExample: Example | null }) | null;
  opportunities: (DiscoverySection & { points: TitledPoint[] | null }) | null;
  imagery: (DiscoverySection & { points: TitledPoint[] | null }) | null;
  cta: { heading?: string; text?: string } | null;
  conclusion: { heading?: string; text?: string; inquiryHeading?: string } | null;
  seo: PageSeo | null;
  facebook: { title?: string; description?: string; image?: SanityImage } | null;
  twitter: { title?: string; description?: string; image?: SanityImage } | null;
}

// Renames the stored (inconsistently named) fields to one shape per section.
export const getDiscoveryPage = () =>
  fetchPage<DiscoveryPage>(
    "valueDiscoveryProcessPage",
    `{
      pageTitle, pageDesc, heroImage,
      "intro": introductionSection{ "heading": introHeading, "description": introDesc },
      "discovery": discoverynSection{ heading, description },
      "knowledge": knowledgeAcquisitionSection{
        heading, description, stepsHeading,
        "sources": sources[]{ "title": sourceTitle, "detail": sourceDetail },
        "steps": steps[]{ "title": stepTitle, "detail": stepDetail },
        "example": example{ "title": exampleTitle, "detail": exampleDetail }
      },
      "voc": vocSection{
        heading, description,
        "methods": methods[]{ "title": methodTitle, "detail": methodDetail },
        "example": example{ "title": exampleTitle, "detail": exampleDetail }
      },
      "dmaic": dmaicDmadSection{
        heading, description,
        "dmaicHeading": dmaic.dmaicHeading,
        "dmaicSteps": dmaic.dmaicSteps[]{ "title": step, detail },
        "dmaicExample": dmaic{ "title": exampleTitle, "detail": exampleDetail },
        "dmadvHeading": dmadv.dmadvHeading,
        "dmadvSteps": dmadv.dmadvSteps[]{ "title": step, detail },
        "dmadvExample": dmadv{ "title": exampleTitle, "detail": exampleDetail }
      },
      "opportunities": valueOpportunitiesSection{ heading, description, "points": opportunities[]{ "title": opportunityTitle, "detail": opportunityDetail } },
      "imagery": webDevelopmentImagerySection{ heading, description, "points": guidancePoints[]{ "title": pointTitle, "detail": pointDetail } },
      "cta": ctaSection{ "heading": ctaHeading, "text": ctaText },
      "conclusion": conclusionSection{ "heading": conclusionHeading, "text": conclusionText, inquiryHeading },
      "seo": webSeoMetadata,
      facebook,
      "twitter": twitterhMeta
    }`,
    "discovery process"
  );
