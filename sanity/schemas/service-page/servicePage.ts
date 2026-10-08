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
    { name: "page", title: "Page Sections", default: true },
    { name: "url", title: "URL" },
    { name: "seo", title: "SEO" },
    { name: "listing", title: "Services Listing" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Internal title",
      type: "string",
      group: ["page", "url"],
      description: "Used in Studio and as the default SEO title.",
      validation: (r) => r.required(),
    }),

    // ── URL ──────────────────────────────────────────────────────────────────
    defineField({
      name: "slug",
      title: "URL slug",
      type: "slug",
      group: "url",
      description:
        "Last part of the URL. To replace a legacy service, use exactly the same slug (e.g. ai-agent).",
      options: {
        source: "title",
        maxLength: 96,
        // Unique within the same parent, so /services/a/x and /services/b/x can coexist.
        isUnique: async (slug, context) => {
          const { document, getClient } = context;
          const client = getClient({ apiVersion: "2024-03-14" });
          const id = (document?._id || "").replace(/^drafts\./, "");
          const parentRef = (document as any)?.parent?._ref ?? null;
          const count = await client.fetch(
            `count(*[_type == "servicePage" && slug.current == $slug && !(_id in [$id, "drafts." + $id]) && coalesce(parent._ref, "") == coalesce($parent, "")])`,
            { slug, id, parent: parentRef }
          );
          return count === 0;
        },
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "parent",
      title: "Parent service page",
      type: "reference",
      group: "url",
      to: [{ type: "servicePage" }],
      description:
        "Optional. Set this for sub-services, e.g. parent \"AI Software Development\" + slug \"rag-chatbot\" → /services/ai-software-development-services/rag-chatbot.",
      options: { filter: "!defined(parent)" },
    }),

    // ── Page builder ─────────────────────────────────────────────────────────
    defineField({
      name: "sections",
      title: "Page sections",
      type: "array",
      group: "page",
      description:
        "Click \"Add item\" and pick a section from the grid. Drag to reorder. Each preview shows how the section looks on the website.",
      of: SECTION_TYPES.map((t) => defineArrayMember({ type: t.name })),
      options: {
        insertMenu: {
          filter: true,
          showIcons: true,
          groups: [
            { name: "top", title: "Top of page", of: ["spHero", "spHeroForm", "spHeroBanner", "spIntro", "spProblem"] },
            { name: "content", title: "Content", of: ["spServicesGrid", "spImageCards", "spIconGrid", "spIndustries", "spBenefits", "spTechStack"] },
            { name: "compare", title: "Comparisons & process", of: ["spComparison", "spInsteadOf", "spProcess"] },
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
      title: "SEO",
      type: "object",
      group: "seo",
      fields: [
        defineField({ name: "metaTitle", title: "Meta title", type: "string", validation: (r) => r.max(65).warning("Keep under ~60 characters") }),
        defineField({ name: "metaDescription", title: "Meta description", type: "text", rows: 3, validation: (r) => r.max(170).warning("Keep under ~160 characters") }),
        defineField({ name: "keywords", title: "Keywords", type: "array", of: [{ type: "string" }], options: { layout: "tags" } }),
        defineField({ name: "ogImage", title: "Share image", type: "image", description: "1200 × 630 px. Falls back to the hero image." }),
        defineField({ name: "canonicalUrl", title: "Canonical URL override", type: "url", description: "Leave empty to use this page's own URL." }),
        defineField({ name: "noIndex", title: "Hide from search engines (noindex)", type: "boolean", initialValue: false }),
      ],
    }),

    // ── /services listing card ───────────────────────────────────────────────
    defineField({
      name: "listing",
      title: "Services listing card",
      type: "object",
      group: "listing",
      fields: [
        defineField({ name: "show", title: "Show on /services page", type: "boolean", initialValue: true }),
        defineField({ name: "cardTitle", title: "Card title", type: "string" }),
        defineField({ name: "cardDescription", title: "Card description", type: "text", rows: 3 }),
        defineField({ name: "cardIcon", title: "Card icon", type: "image" }),
      ],
    }),
  ],
  preview: {
    select: { title: "title", slug: "slug.current", parentSlug: "parent.slug.current" },
    prepare: ({ title, slug, parentSlug }: any) => ({
      title,
      subtitle: slug ? `/services/${parentSlug ? parentSlug + "/" : ""}${slug}` : "No URL yet",
    }),
  },
});
