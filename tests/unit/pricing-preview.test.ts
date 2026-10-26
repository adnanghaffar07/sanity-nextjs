import { describe, expect, it } from "vitest";
import { PREVIEW_ROWS, planPreview, type PlanFeatures } from "@/components/pricing/preview";

const features: PlanFeatures = {
  title: "Plans",
  description: "Compare",
  featuresList: Array.from({ length: 17 }, (_, i) => ({ _key: `f${i}`, name: `Feature ${i}` })),
  pricing: { basicPrice: 100, standardPrice: 200, enterprisePrice: 300 },
};

describe("planPreview (what /pricing sends to every visitor)", () => {
  it("keeps only the preview rows", () => {
    const rows = planPreview(features).featuresList ?? [];
    expect(rows).toHaveLength(Math.max(PREVIEW_ROWS.phone, PREVIEW_ROWS.desktop));
    expect(rows[0].name).toBe("Feature 0");
  });

  it("never includes the prices", () => {
    const preview = planPreview(features);
    expect(preview.pricing).toBeUndefined();
    expect(JSON.stringify(preview)).not.toMatch(/Price/);
  });

  it("keeps the heading text and copes with a plan without features", () => {
    expect(planPreview({ title: "Plans", description: "Compare" })).toEqual({ title: "Plans", description: "Compare", featuresList: undefined });
  });
});
