// Legacy service pages (/services/<urlPath>) and their sub-service pages
// (/services/<urlPath>/<urlPathSub>), built from "Logical Services" and
// "Sub Service" documents. Pages made with the newer "Service Page" type take
// precedence (see components/services/page-builder/data.ts).
//
// The documents have many optional sections; the template renders the ones
// that are filled in. Fields missing in Studio come back as null from GROQ.

import type { Image, PortableTextBlock } from "sanity";
import { client, reportSanityError } from "./client";
import { SERVICE_FETCH_OPTIONS } from "@/components/services/page-builder/data";

export type SanityImage = Image & { alt?: string; altText?: string };
type Blocks = PortableTextBlock[];

export interface TechLogo {
  _id: string;
  heading: string | null;
  image: SanityImage | null;
}

export interface NumberedItem {
  number?: string;
  title?: string;
  description?: string;
  descriptionBlock?: Blocks;
}

export interface AccordionSection {
  heading?: string;
  description?: string;
  imageSrc?: SanityImage;
  accordionItems?: { title?: string; content?: string; contentArray?: { stringField?: string; nestedArray?: { heading?: string; text?: string }[] }[] }[];
  accordionItemsBlock?: { title?: string; content?: Blocks }[];
  /** Spelled this way in the stored "second mobile app" section. */
  accordianItemsBlock?: { title?: string; content?: Blocks }[];
}

export interface Banner {
  title?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  featuredImage?: SanityImage;
}

export interface ToolCard {
  heading?: string;
  detail?: string;
  description?: string[];
  logos: TechLogo[];
}

export interface ClientsSection {
  sectionTitle?: string;
  sectionDescription?: string;
  clientLogos?: SanityImage[];
}

export interface SubServiceCard {
  _id: string;
  urlPathSub: string;
  serviceCardSub: string | null;
  serviceDescSub: string | null;
  heroImageSub: SanityImage | null;
  logos: TechLogo[];
}

export interface LegacyService {
  urlPath: string;
  jsonLd: string | null;
  heroImage: SanityImage | null;
  serviceTitle: string | null;
  serviceDesc: string | null;
  firstButton: { firstButtonText?: string } | null;
  secondButton: { SecondButtonText?: string; SecondButtonUrl?: string } | null;
  toolsLogoSection: { logoArray?: SanityImage[] } | null;
  clientsSection: ClientsSection | null;
  introductionSection: { introHeading?: string; introDesc?: string; introDescBlock?: Blocks; introImage?: SanityImage } | null;
  introductionDescArray: string[] | null;
  designSection: { heading?: string; description?: string } | null;
  customSoftwareSection: AccordionSection | null;
  customSoftwareDev: { heading?: string; subheading?: string; paragraph?: string; items?: NumberedItem[]; image?: SanityImage } | null;
  turnVision: Banner | null;
  transBusiness: Banner | null;
  showCaseStudies: boolean | null;
  provenProcessSection: AccordionSection | null;
  developmentSection: { heading?: string; description?: string } | null;
  implementationSection: { heading?: string; description?: string } | null;
  subServiceHeading: string | null;
  subServiceDesc: string | null;
  contentItems: { heading?: string; description?: string; cmsImage?: SanityImage }[] | null;
  subServiceCards: SubServiceCard[] | null;
  ctaAfterSubServices: Banner | null;
  industriesWeQA: {
    heading?: string;
    description?: string;
    bulletPointsHeading?: string;
    bulletPoints?: string[];
    bulletPointsBlock?: { bulletPointsBlock?: Blocks }[];
    image?: SanityImage;
  } | null;
  industriesServe: {
    heading?: string;
    description?: string;
    bulletPoints?: { heading?: string; bulletPoints?: string[]; bulletPointsBlock?: Blocks }[];
  } | null;
  toolsTech: { heading: string | null; description: string | null; cards: ToolCard[] | null } | null;
  updatedToolsTech: { heading: string | null; description: string | null; cards: ToolCard[] | null } | null;
  exampleServicesSection: { exampleServiceHeading?: string; exampleServicedesc?: string; exampleService?: { heading?: string; detail?: string }[] } | null;
  mobileAppServiceSection: AccordionSection | null;
  secondMobileAppAcc: AccordionSection | null;
  preferredChoice: { heading?: string; subheading?: string; paragraph?: string; items?: NumberedItem[]; image?: SanityImage } | null;
  pricingSection: {
    heading?: string;
    description?: string;
    plans?: { title?: string; price?: string; features?: string[]; highlighted?: boolean; buttonText?: string; buttonUrl?: string }[];
    showButtonInAllPlans?: boolean;
    globalButtonText?: string;
    globalButtonUrl?: string;
  } | null;
  advantagesOfQA: { heading?: string; subheading?: string; items?: NumberedItem[]; image?: SanityImage } | null;
  projectCycleQA: { heading?: string; subHeading?: string; paragraph?: string; projectCycleImg?: SanityImage } | null;
  projectCycleSection: { projectCycleHaeding?: string; projectCycle?: { detail?: string }[]; projectCycleImg?: SanityImage } | null;
  qaDelivery: { heading?: string; subHeading?: string; paragraph?: string; qaDeliveryleImg?: SanityImage } | null;
  deliveryOptionSection: { deliveryOptionHaeding?: string; deliveryOption?: { detail?: string }[]; deliveryImg?: SanityImage } | null;
  specialOffersSection: {
    offerHeading?: string;
    specialOffer?: string;
    specialOfferQA?: { heading?: string; description?: string }[];
    offerImg?: SanityImage;
  } | null;
  UpdatedSpecialOffersSection: {
    offerHeading?: string;
    specialOfferTitle?: string;
    specialOfferText1?: string;
    specialOfferDays?: string;
    specialOfferText2?: string;
    buttonText?: string;
    offerImg?: SanityImage;
  } | null;
  summarySection: { summaryHeading?: string; summaryMessage?: string } | null;
  callToActionSection: { callToActionHeading?: string; callToAction?: string } | null;
  faqSection: { title?: string; faqs?: { question?: string; answer?: string; descriptionBlock?: Blocks }[] } | null;
  webSeoMetadata: { title?: string; description?: string; keywords?: string[] } | null;
  facebookCards: { facebookTitle?: string; facebookDescription?: string } | null;
  twitterCards: { twitterTitle?: string; twitterDescription?: string } | null;
}

const LOGO = `{ _id, heading, image }`;

const toolCards = (section: string) => `{
  "heading": ${section}.toolsTechHeading,
  "description": ${section}.toolsTechDesc,
  "cards": ${section}.toolsTech[]{ heading, detail, description, "logos": coalesce(images[]->${LOGO}, []) }
}`;

// Every stored field the template reads, with references resolved: sub-service
// cards and tool logos come with the page instead of separate lookups.
const SERVICE_QUERY = `*[_type == "logicalServices" && urlPath == $urlPath][0]{
  ...,
  "subServiceCards": subServices[]->{
    _id, urlPathSub, serviceCardSub, serviceDescSub, heroImageSub,
    "logos": coalesce(images[]->${LOGO}, [])
  },
  "toolsTech": select(defined(toolsTechSection.toolsTechHeading) => ${toolCards("toolsTechSection")}),
  "updatedToolsTech": select(defined(updatedToolsTechSection) => ${toolCards("updatedToolsTechSection")})
}`;

// Missing logos (deleted from the library) resolve to null; drop them.
const withExistingLogos = <T extends { logos: (TechLogo | null)[] }>(item: T) => ({
  ...item,
  logos: item.logos.filter((logo): logo is TechLogo => logo !== null),
});

/** One legacy service page by its address, or null if there is none. */
export async function getLegacyService(urlPath: string): Promise<LegacyService | null> {
  try {
    const service = await client.fetch<LegacyService | null>(SERVICE_QUERY, { urlPath }, SERVICE_FETCH_OPTIONS);
    if (!service) return null;
    const cleanTools = (tools: LegacyService["toolsTech"]) => tools && { ...tools, cards: tools.cards?.map(withExistingLogos) ?? null };
    return {
      ...service,
      // A card whose sub-service was deleted resolves to null.
      subServiceCards: service.subServiceCards?.filter(Boolean).map(withExistingLogos) ?? null,
      toolsTech: cleanTools(service.toolsTech),
      updatedToolsTech: cleanTools(service.updatedToolsTech),
    };
  } catch (error) {
    reportSanityError("Loading service page", error);
    return null;
  }
}

export interface LegacySubService {
  serviceTitleSub: string | null;
  serviceDescSub: string | null;
  heroImageSub: SanityImage | null;
  introductionSubSection: { introHeading?: string; introDesc?: string; introImage?: SanityImage } | null;
  toolsTech: { heading: string | null; description: string | null; cards: ToolCard[] | null };
  exampleServicesSubSection: NonNullable<LegacyService["exampleServicesSection"]> | null;
  projectCycleSubSection: LegacyService["projectCycleSection"];
  deliveryOptionSubSection: LegacyService["deliveryOptionSection"];
  specialOffersSubSection: { offerHeading?: string; specialOffer?: string; offerImg?: SanityImage } | null;
  summarySubSection: { summaryHeading?: string; summaryMessage?: string } | null;
  callToActionSubSection: { callToActionHeading?: string; callToAction?: string } | null;
  webSeoMetadataSub: { title?: string; description?: string; keywords?: string[] } | null;
  twitterCardsSub: { twitterTitle?: string; twitterDescription?: string; twitterImage?: SanityImage } | null;
}

const SUB_SERVICE_QUERY = `*[_type == "subService" && urlPathSub == $urlPathSub][0]{
  ...,
  "toolsTech": ${toolCards("toolsTechSubSection")}
}`;

/** One sub-service page by its address, or null if there is none. */
export async function getLegacySubService(urlPathSub: string): Promise<LegacySubService | null> {
  try {
    const sub = await client.fetch<LegacySubService | null>(SUB_SERVICE_QUERY, { urlPathSub }, SERVICE_FETCH_OPTIONS);
    if (!sub) return null;
    return { ...sub, toolsTech: { ...sub.toolsTech, cards: sub.toolsTech.cards?.map(withExistingLogos) ?? null } };
  } catch (error) {
    reportSanityError("Loading sub-service page", error);
    return null;
  }
}
