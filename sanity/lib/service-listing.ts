// Service cards for /services: legacy "Logical Services", top-level "Service
// Pages" and the hand-built pages listed below. Cached like the service pages.

import { client, reportSanityError } from "./client";
import { urlForImage } from "./image";
import { SERVICE_FETCH_OPTIONS } from "@/components/services/page-builder/data";
import type { SanityImage } from "./legacy-services";

export interface ServiceListingCard {
  _id: string;
  urlPath: string;
  title: string;
  description: string | null;
  iconUrl: string | null;
}

interface CardRow {
  _id: string;
  urlPath: string;
  title: string | null;
  description: string | null;
  icon: SanityImage | null;
}

// Pages built in code (not in Sanity) that still get a card. If the same
// address is later added in Sanity, the Sanity entry wins.
const HAND_BUILT: ServiceListingCard[] = [
  {
    _id: "manual-marketing-automation-services",
    urlPath: "marketing-automation-services",
    title: "Marketing Automation Services",
    description:
      "Turn your marketing into a revenue-generating machine with automated campaigns, lead nurturing and multi-channel workflows.",
    iconUrl: "/service-icons/marketing-automation.png",
  },
  {
    _id: "manual-social-media-automation-workflow",
    urlPath: "social-media-automation-workflow",
    title: "Social Media Automation",
    description:
      "Automate Facebook, Instagram and LinkedIn posts and reels, from AI-generated captions and hashtags to scheduled publishing.",
    iconUrl: "/service-icons/social-media-automation.png",
  },
  {
    _id: "manual-ai-chatbot-development-services",
    urlPath: "ai-chatbot-development-services",
    title: "AI Chatbot Development Services",
    description:
      "Custom AI chatbots trained on your business data and connected to your CRM, helpdesk, and calendar to resolve queries, qualify leads, and book appointments 24/7.",
    iconUrl: "/service-icons/ai-chatbot-development.png",
  },
];

// These come first, in this order; the rest keep their Studio order.
const PINNED = [
  "ai-agent",
  "ai-chatbot-development-services",
  "ai-business-automation-solutions",
  "ai-software-development-services",
  "qa-testing-services",
  "ai-devops",
  "ml-services",
  "custom-software-development-services",
  "mobile-app-development-services",
  "automation-integration",
  "ui-ux-design-services",
  "custom-cms-development-services",
  "rpa-services",
  "data-warehouse",
  "email-marketing",
  "iot-services",
];

const CARDS_QUERY = `{
  "legacy": *[_type == "logicalServices" && defined(urlPath)] | order(_createdAt asc){
    _id, urlPath, "title": serviceCardTitle, "description": serviceDesc, "icon": cardIcon
  },
  "pages": *[_type == "servicePage" && defined(slug.current) && !defined(parent) && coalesce(listing.show, true)] | order(_createdAt asc){
    _id, "urlPath": slug.current, "title": coalesce(listing.cardTitle, title), "description": listing.cardDescription, "icon": listing.cardIcon
  }
}`;

const toCard = (row: CardRow): ServiceListingCard => ({
  _id: row._id,
  urlPath: row.urlPath,
  title: row.title ?? "",
  description: row.description,
  // 72px wide: the icon shows at 36px, sharp on high-density screens.
  iconUrl: row.icon?.asset ? `${urlForImage(row.icon)}&w=72` : null,
});

function pinnedFirst(cards: ServiceListingCard[]) {
  const rank = (card: ServiceListingCard) => {
    const index = PINNED.indexOf(card.urlPath.toLowerCase().trim());
    return index === -1 ? PINNED.length : index;
  };
  // Array.prototype.sort is stable, so unpinned cards keep their order.
  return [...cards].sort((a, b) => rank(a) - rank(b));
}

/** Every service card, pinned services first. */
export async function getServiceListingCards(): Promise<ServiceListingCard[]> {
  try {
    const { legacy, pages } = await client.fetch<{ legacy: CardRow[]; pages: CardRow[] }>(CARDS_QUERY, {}, SERVICE_FETCH_OPTIONS);
    // A Service Page replaces the legacy card with the same address, in place,
    // so a migrated service keeps its position.
    const pageByPath = new Map(pages.map((page) => [page.urlPath, page]));
    const legacyPaths = new Set(legacy.map((row) => row.urlPath));
    const fromSanity = [
      ...legacy.map((row) => pageByPath.get(row.urlPath) ?? row),
      ...pages.filter((page) => !legacyPaths.has(page.urlPath)),
    ].map(toCard);
    const sanityPaths = new Set(fromSanity.map((card) => card.urlPath));
    return pinnedFirst([...fromSanity, ...HAND_BUILT.filter((card) => !sanityPaths.has(card.urlPath))]);
  } catch (error) {
    reportSanityError("Loading service cards", error);
    return pinnedFirst(HAND_BUILT);
  }
}
