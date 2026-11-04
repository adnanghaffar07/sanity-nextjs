import { describe, expect, it, vi } from "vitest";

// The module also loads pages from Sanity; only the address rules are tested here.
vi.mock("@/sanity/lib/client", () => ({ client: {}, reportSanityError: () => {} }));
vi.mock("@/components/services/page-builder/data", () => ({ SERVICE_FETCH_OPTIONS: {} }));

const { canonicalParentPath, primaryParentPath } = await import("@/sanity/lib/legacy-services");

describe("sub-service parent address", () => {
  const listedOnce = { parentPaths: ["ai-software-development-services"] };
  const listedTwice = { parentPaths: ["ai-software-development-services", "kajabi-development-services"] };
  const unlisted = { parentPaths: [] };

  it("keeps a service that lists the sub-service", () => {
    expect(canonicalParentPath(listedOnce, "ai-software-development-services")).toBe("ai-software-development-services");
    expect(canonicalParentPath(listedTwice, "kajabi-development-services")).toBe("kajabi-development-services");
  });

  it("moves any other service address to the oldest service that lists it", () => {
    expect(canonicalParentPath(listedOnce, "datadog-monitoring-solutions")).toBe("ai-software-development-services");
    expect(canonicalParentPath(listedOnce, "AI-Software-Development-Services")).toBe("ai-software-development-services");
  });

  it("accepts any service address when no service lists it", () => {
    expect(canonicalParentPath(unlisted, "ecommerce-development")).toBeNull();
  });

  it("gives Google the oldest listing service as the original", () => {
    expect(primaryParentPath(listedTwice)).toBe("ai-software-development-services");
    expect(primaryParentPath(unlisted)).toBeNull();
  });
});
