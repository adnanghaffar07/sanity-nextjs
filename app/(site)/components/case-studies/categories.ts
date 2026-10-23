// Case study categories: the values stored in each case study's "Filter tabs"
// field, with the badge label shown on its card.

export const CATEGORY_BADGES: Record<string, string> = {
  app: "Mobile App",
  web: "Web App",
  qa: "QA & Testing",
  shopify: "Ecommerce",
  ai: "AI & Automation",
};

/** The card's categories that have a badge, without duplicates. */
export const badgesOf = (categories: string[]) =>
  Array.from(new Set(categories.map((c) => c.trim().toLowerCase()))).filter((c) => CATEGORY_BADGES[c]);
