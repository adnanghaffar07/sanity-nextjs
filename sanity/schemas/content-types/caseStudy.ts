// Case Study: /case-studies/<address>. Each case study has its own card (Card
// tab); the card order is set in the Case Study Order document.

import { defineField, defineType } from "sanity";
import { CaseIcon } from "@sanity/icons";
import { SEO_GROUP, addressField, legacyIdField, reuse, seoFields } from "./reuse";

const imageWithAlt = (name: string, title: string, description?: string) =>
  defineField({
    name,
    title,
    description,
    type: "image",
    options: { hotspot: true },
    fields: [{ name: "alt", title: "Image description (for Google & screen readers)", type: "string" }],
  });

export const caseStudy = defineType({
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  icon: CaseIcon,
  groups: [
    { name: "content", title: "Top of page", default: true },
    { name: "overview", title: "About & overview" },
    { name: "details", title: "Features & technology" },
    { name: "story", title: "Challenges & results" },
    { name: "card", title: "Card on Case Studies page" },
    SEO_GROUP,
  ],
  fields: [
    // ── Top of page ──────────────────────────────────────────────────────────
    reuse("title", {
      title: "Client / project name",
      group: "content",
      description: "Used in Studio and on cards, e.g. \"Heyou\".",
      validation: (r: any) => r.required(),
    }),
    addressField("caseStudy", "heyou", "/case-studies"),
    reuse("subtitle", { title: "Main heading", group: "content", description: "Large heading over the top image." }),
    reuse("blogheading", { title: "Sub-heading", group: "content", description: "Smaller heading under the main heading." }),
    reuse("button", { title: "Button (optional)", group: "content", description: "E.g. \"Visit website\" with the client's link. Opens in a new tab." }),
    reuse("cardimage", {
      title: "Top image",
      group: "content",
      description: "Full-width background image at the top of the page. Also used on cards if the Card tab has no image.",
    }),
    reuse("color", {
      title: "Accent colour",
      group: "content",
      description: "Brand colour used for highlights on the page, as a hex code, e.g. #1D92FB.",
    }),

    // ── About & overview ─────────────────────────────────────────────────────
    reuse("projectscopecontent", { title: "About this project", group: "overview", description: "Paragraph under \"About This Project\"." }),
    reuse("projectGoalsSection", { title: "Project goals", group: "overview", description: "This section only shows when it has content." }),
    reuse("briefdescription", { title: "Overview text", group: "overview" }),
    reuse("briefitemsarray", { title: "Overview key facts", group: "overview", description: "Short label + value pairs, e.g. \"Industry: Healthcare\"." }),
    reuse("primaryimage", { title: "Overview image", group: "overview" }),

    // ── Tools & features (same order as on the page) ─────────────────────────
    // Same stored shape as the legacy fields; only what the page displays.
    reuse("toolsandtechusedheading", {
      title: "Tools section: heading",
      group: "details",
      description: "E.g. \"Tools & Technologies Used\".",
    }),
    defineField({
      name: "caseStudiesToolsSection",
      title: "Tools section",
      type: "object",
      group: "details",
      options: { collapsible: false },
      fields: [
        defineField({
          name: "toolsTech",
          title: "Tool groups",
          type: "array",
          description: "One group per area, e.g. Frontend, Backend, Testing. Each shows its logos with a short label.",
          of: [
            {
              type: "object",
              name: "toolGroup",
              title: "Tool group",
              fields: [
                defineField({ name: "heading", title: "Group name", type: "string", description: "E.g. \"Frontend\"." }),
                defineField({ name: "detail", title: "Tools in this group", type: "string", description: "E.g. \"React, Next.js, Tailwind\"." }),
                defineField({
                  name: "images",
                  title: "Logos",
                  type: "array",
                  of: [{ type: "reference", to: [{ type: "techLogos" }] }],
                  options: { layout: "grid" },
                  description: "Pick from the shared Tech Logos library.",
                }),
              ],
              preview: {
                select: { title: "heading", subtitle: "detail", logos: "images" },
                prepare: ({ title, subtitle, logos }: any) => ({
                  title: title || "Untitled group",
                  subtitle: [subtitle, logos?.length ? `${logos.length} logo${logos.length === 1 ? "" : "s"}` : null]
                    .filter(Boolean)
                    .join(" · "),
                }),
              },
            },
          ],
        }),
      ],
    }),
    defineField({
      name: "features",
      title: "Features section",
      type: "object",
      group: "details",
      description: "Blocks shown one under another, each with text and up to two images (e.g. a logo and an app screenshot).",
      options: { collapsible: false },
      fields: [
        defineField({
          name: "showTitles",
          title: "Show block titles",
          type: "boolean",
          initialValue: false,
          description: "Off: only the text and images are shown. On: each block's title is shown above it (the first in red, the rest in blue).",
        }),
        defineField({
          name: "featureslist",
          title: "Feature blocks",
          type: "array",
          of: [
            {
              type: "object",
              name: "featureBlock",
              title: "Feature block",
              fields: [
                defineField({
                  name: "heading",
                  title: "Title",
                  type: "string",
                  description: "E.g. \"Heyou Mobile App Features\". Only shown when \"Show block titles\" is on.",
                }),
                imageWithAlt("logoImage", "Image above the text (optional)", "E.g. the client's logo or an app icon."),
                defineField({
                  name: "description",
                  title: "Text",
                  type: "text",
                  rows: 3,
                  description: "One or two sentences, shown large and centred.",
                }),
                imageWithAlt("images", "Image below the text (optional)", "E.g. a screenshot or mock-up of the product."),
              ],
              preview: {
                select: { heading: "heading", text: "description", media: "images", logo: "logoImage" },
                prepare: ({ heading, text, media, logo }: any) => ({
                  title: heading || text || "Feature block",
                  subtitle: heading ? text : undefined,
                  media: media || logo,
                }),
              },
            },
          ],
        }),
      ],
    }),

    // ── Challenges & results ─────────────────────────────────────────────────
    reuse("challengesfacedheading", { title: "Challenges: heading", group: "story" }),
    reuse("chanllangesfaced", { title: "Challenges", group: "story" }),
    reuse("ourapproachheading", { title: "Our approach: heading", group: "story" }),
    reuse("ourapproach", { title: "Our approach", group: "story" }),
    reuse("resultsheading", { title: "Results: heading", group: "story" }),
    reuse("results", { title: "Results", group: "story" }),
    reuse("conclusionheading", { title: "Conclusion: heading", group: "story" }),
    reuse("conclusion", { title: "Conclusion", group: "story" }),

    // ── Card on /case-studies and the home page ──────────────────────────────
    defineField({
      name: "listing",
      title: "Card on the Case Studies page",
      type: "object",
      group: "card",
      description: "How this case study appears in the grid on codeautomation.ai/case-studies and on the home page.",
      fields: [
        defineField({ name: "show", title: "Show a card for this case study", type: "boolean", initialValue: true }),
        defineField({ name: "cardTitle", title: "Card title", type: "string", description: "If empty, the client / project name is used." }),
        defineField({ name: "cardDescription", title: "Card description", type: "string", description: "One short sentence." }),
        imageWithAlt("cardImage", "Card image", "If empty, the top image is used."),
        defineField({
          name: "categories",
          title: "Filter tabs",
          type: "array",
          of: [{ type: "string" }],
          description: "Which tabs on the Case Studies page show this card.",
          options: {
            layout: "grid",
            list: [
              { title: "AI & Automation", value: "ai" },
              { title: "Web App", value: "web" },
              { title: "Mobile App", value: "app" },
              { title: "QA & Testing", value: "qa" },
              { title: "Ecommerce / Shopify", value: "shopify" },
            ],
          },
        }),
      ],
    }),

    // The case study template reads only these SEO values.
    ...seoFields({
      google: ["title", "description", "keywords"],
      jsonLd: true,
    }),

    legacyIdField,
  ],
  preview: {
    select: { title: "title", slug: "slug", media: "cardimage", show: "listing.show" },
    prepare: ({ title, slug, media, show }: any) => ({
      title,
      subtitle: `${slug ? `/case-studies/${slug}` : "No address yet"}${show === false ? " · no card" : ""}`,
      media,
    }),
  },
});
