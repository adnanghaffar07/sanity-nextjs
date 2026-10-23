// New section-based Service Page. Lives alongside the legacy
// `logicalServices` / `subService` documents (which are left untouched).
// When a published Service Page has the same URL as a legacy service, the
// website shows the new page; unpublish it and the legacy page shows again.

import { defineArrayMember, defineField, defineType } from "sanity";
import { DocumentsIcon } from "@sanity/icons";
import { SECTION_TYPES } from "./sections";

const SECTION_PREVIEW_DIR = "/section-previews";

export const servicePage = defineType({
  name: "servicePage",
  title: "Service Page (New)",
  type: "document",
  icon: DocumentsIcon,
  groups: [
    { name: "page", title: "Page Content", default: true },
    { name: "url", title: "Page Address" },
    { name: "seo", title: "Google & Sharing (SEO)" },
    { name: "listing", title: "Card on Services Page" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Page name",
      type: "string",
      group: ["page", "url"],
      description: "The name of this service, e.g. \"AI Chatbot Development\". Used in Studio, and as the Google title if you don't set one in the SEO tab.",
      validation: (r) => r.required(),
    }),

    // ── URL ──────────────────────────────────────────────────────────────────
    defineField({
      name: "slug",
      title: "Page address (URL)",
      type: "slug",
      group: "url",
      description:
        "The last part of the page address: codeautomation.ai/services/THIS-PART. Click \"Generate\" to create it from the page name. To replace an existing (old) service page, use exactly the same address, e.g. ai-agent.",
      options: {
        source: "title",
        maxLength: 96,
        // Unique within the same parent, so /services/a/x and /services/b/x can coexist.
        isUnique: async (slug, context) => {
          const { document, getClient } = context;
          const client = getClient({ apiVersion: "2024-03-14" });
          const id = (document?._id || "").replace(/^drafts\./, "");
          const parentRef = (document as any)?.parent?._ref ?? null;
          const query = `count(*[_type == "servicePage" && slug.current == $slug && !(_id in [$id, "drafts." + $id]) && coalesce(parent._ref, "") == coalesce($parent, "")])`;
          // Retry once if the request fails in transit; if Sanity still can't be
          // reached, don't block publishing over a check that couldn't run.
          for (let attempt = 0; attempt < 2; attempt++) {
            try {
              return (await client.fetch(query, { slug, id, parent: parentRef })) === 0;
            } catch {
              await new Promise((resolve) => setTimeout(resolve, 500));
            }
          }
          return true;
        },
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "parent",
      title: "Main service (only for sub-services)",
      type: "reference",
      group: "url",
      // Old (legacy) services are allowed too, so a sub-service can move to this
      // system before its main service does — its address stays the same.
      to: [{ type: "servicePage" }, { type: "logicalServices" }],
      description:
        "Leave empty for a main service. For a sub-service, pick its main service (new or old page) and the address becomes /services/main-service/this-page — the same address the old sub-service had.",
      // Only main services can be parents (no sub-sub-services).
      options: { filter: '_type == "logicalServices" || !defined(parent)' },
    }),

    // ── Page builder ─────────────────────────────────────────────────────────
    defineField({
      name: "sections",
      title: "Page sections",
      type: "array",
      group: "page",
      description:
        "Build the page from top to bottom. Click \"Add item\", then pick a section from the pictures (each shows how it looks on the website). Drag sections to change their order. Start with one Hero section.",
      of: SECTION_TYPES.map((t) => defineArrayMember({ type: t.name })),
      options: {
        insertMenu: {
          filter: true,
          showIcons: true,
          groups: [
            { name: "top", title: "Top of page (pick one)", of: ["spHero", "spHeroForm", "spHeroBanner"] },
            { name: "text", title: "Text & explanation", of: ["spIntro", "spProblem"] },
            { name: "content", title: "Cards, lists & grids", of: ["spServicesGrid", "spImageCards", "spIconGrid", "spIndustries", "spBenefits", "spTechStack"] },
            { name: "compare", title: "Comparisons & steps", of: ["spComparison", "spInsteadOf", "spProcess"] },
            { name: "related", title: "Related pages", of: ["spSubServices"] },
            { name: "cta", title: "Calls to action & FAQ", of: ["spCtaBanner", "spFinalCta", "spFaq"] },
          ],
          views: [
            { name: "grid", previewImageUrl: (typeName: string) => `${SECTION_PREVIEW_DIR}/${typeName}.png` },
            { name: "list" },
          ],
        },
      },
    }),

    // ── SEO ──────────────────────────────────────────────────────────────────
    defineField({
      name: "seo",
      title: "Google & sharing",
      type: "object",
      group: "seo",
      fields: [
        defineField({ name: "metaTitle", title: "Title in Google results", type: "string", description: "The blue clickable title people see in Google. Aim for 50–60 characters.", validation: (r) => r.max(65).warning("Keep it under about 60 characters so Google doesn't cut it off") }),
        defineField({ name: "metaDescription", title: "Description in Google results", type: "text", rows: 3, description: "The short text under the title in Google. Aim for 140–160 characters.", validation: (r) => r.max(170).warning("Keep it under about 160 characters so Google doesn't cut it off") }),
        defineField({ name: "keywords", title: "Keywords", type: "array", of: [{ type: "string" }], options: { layout: "tags" }, description: "Optional. Main search terms for this page. Type one and press Enter." }),
        defineField({ name: "ogImage", title: "Image when shared on social media", type: "image", description: "Shown when the page is shared on LinkedIn, Facebook, WhatsApp, etc. 1200 × 630 px. If empty, the hero image is used." }),
        defineField({ name: "canonicalUrl", title: "Main version of this page (advanced)", type: "url", description: "Leave empty. Only fill this in if this page is a copy of another page and Google should treat the other one as the main version." }),
        defineField({ name: "noIndex", title: "Hide this page from Google", type: "boolean", initialValue: false, description: "Turn on for test or private pages that shouldn't appear in search results." }),
      ],
    }),

    // ── /services listing card ───────────────────────────────────────────────
    defineField({
      name: "listing",
      title: "Card on the Services page",
      description: "How this service appears as a card. Main services get a card on codeautomation.ai/services; sub-services get a card in their main service's \"Sub-Services\" section.",
      type: "object",
      group: "listing",
      fields: [
        defineField({ name: "show", title: "Show a card for this service", type: "boolean", initialValue: true }),
        defineField({ name: "cardTitle", title: "Card title", type: "string", description: "Short service name. If empty, the page name is used." }),
        defineField({ name: "cardDescription", title: "Card description", type: "text", rows: 3, description: "One or two sentences. Only the first 3 lines show on the card." }),
        defineField({ name: "cardIcon", title: "Card icon", type: "image", description: "A small square icon, ideally on a transparent background." }),
      ],
    }),
  ],
  preview: {
    // Parent may be a new page (slug) or an old service (urlPath).
    select: { title: "title", slug: "slug.current", parentSlug: "parent.slug.current", parentUrlPath: "parent.urlPath" },
    prepare: ({ title, slug, parentSlug, parentUrlPath }: any) => {
      const parent = parentSlug || parentUrlPath;
      return {
        title,
        subtitle: slug ? `/services/${parent ? parent + "/" : ""}${slug}` : "No URL yet",
      };
    },
  },
});
