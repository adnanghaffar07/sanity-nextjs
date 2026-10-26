import type { PricingPage } from "@/sanity/lib/site-pages";

export type PlanFeatures = NonNullable<PricingPage["features"]>;

/** Feature rows shown before signing in: phones show one table per plan, so fewer. */
export const PREVIEW_ROWS = { phone: 4, desktop: 6 };

/** What the page sends to every visitor: the first rows and no prices. The rest needs a session (/api/pricing/plan). */
export function planPreview({ title, description, featuresList }: PlanFeatures): PlanFeatures {
  return { title, description, featuresList: featuresList?.slice(0, Math.max(PREVIEW_ROWS.phone, PREVIEW_ROWS.desktop)) };
}
