// "Service Summary": the content of /about/service-summary. One document only
// (see sanity.config.ts). Only fields the page shows are listed; field names are
// the stored keys (including "projectCycleHaeding"), so they must not change.
// Old unused fields are removed from the data by scripts/cleanup-service-summary.mjs.

import { defineField, defineType } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";
import { TECH_LOGO_TYPE } from "./tech-logo";

export const SERVICE_SUMMARY_TYPE = "serviceSummary";

const imageWithAlt = (name: string, title: string, description?: string) =>
  defineField({
    name,
    title,
    type: "image",
    description,
    options: { hotspot: true },
    fields: [defineField({ name: "alt", title: "Alt text", type: "string", description: "Leave empty if decorative." })],
  });

const heading = (name: string, title = "Heading") => defineField({ name, title, type: "string" });
const text = (name: string, title: string) => defineField({ name, title, type: "text", rows: 3 });

// A card with a heading, a short line and logos picked from Technology Logos.
const logoCard = {
  type: "object" as const,
  fields: [
    defineField({ name: "heading", title: "Name", type: "string" }),
    defineField({ name: "detail", title: "Short description", type: "string" }),
    defineField({
      name: "images",
      title: "Logos",
      type: "array",
      of: [{ type: "reference", to: [{ type: TECH_LOGO_TYPE }] }],
    }),
  ],
  preview: { select: { title: "heading", subtitle: "detail", media: "images.0.image" } },
};

export const serviceSummary = defineType({
  name: SERVICE_SUMMARY_TYPE,
  title: "Service Summary",
  type: "document",
  icon: DocumentTextIcon,
  groups: [
    { name: "top", title: "Top & intro", default: true },
    { name: "options", title: "Service options" },
    { name: "process", title: "Tools & process" },
    { name: "closing", title: "Summary & offers" },
    { name: "payments", title: "Payments" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    { ...imageWithAlt("heroImage", "Hero image", "Background of the top section. Also used when the page is shared."), group: "top" },
    defineField({ name: "pageTitle", title: "Page title", type: "string", group: "top" }),
    defineField({ name: "pageDesc", title: "Subtitle", type: "string", group: "top" }),
    defineField({
      name: "introductionSection",
      title: "Introduction",
      type: "object",
      group: "top",
      fields: [heading("introHeading"), text("introDesc", "Text")],
    }),

    defineField({
      name: "detailSection",
      title: "Service delivery options",
      type: "object",
      group: "options",
      fields: [
        heading("heading"),
        defineField({
          name: "detailInd",
          title: "Options",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({ name: "title", title: "Name", type: "string" }),
                defineField({ name: "smDescription", title: "Tagline", type: "string" }),
                defineField({ name: "description", title: "Description", type: "text", rows: 4 }),
                defineField({ name: "keyBenefits", title: "Key benefits", type: "array", of: [{ type: "string" }] }),
              ],
              preview: { select: { title: "title", subtitle: "smDescription" } },
            },
          ],
        }),
      ],
    }),

    defineField({
      name: "projectManagement",
      title: "Project management tools",
      type: "object",
      group: "process",
      fields: [heading("projectHeading"), defineField({ name: "toolsTech", title: "Tools", type: "array", of: [logoCard] })],
    }),
    defineField({
      name: "projectCycleSection",
      title: "Project cycle",
      type: "object",
      group: "process",
      fields: [
        heading("projectCycleHaeding"),
        defineField({
          name: "projectLifeCycle",
          title: "Steps",
          type: "array",
          description: "Numbered automatically in this order.",
          of: [
            {
              type: "object",
              fields: [
                defineField({ name: "heading", title: "Step", type: "string" }),
                defineField({ name: "detail", title: "Description", type: "text", rows: 3 }),
              ],
              preview: { select: { title: "heading" } },
            },
          ],
        }),
      ],
    }),

    defineField({
      name: "summarySection",
      title: "Summary",
      type: "object",
      group: "closing",
      fields: [heading("summaryHeading"), text("summaryMessage", "Text"), imageWithAlt("summaryImg", "Image")],
    }),
    defineField({
      name: "callToActionSection",
      title: "Call to action",
      type: "object",
      group: "closing",
      description: "The \"Get Started Now\" button scrolls to the contact form.",
      fields: [heading("callToActionHeading"), text("callToAction", "Text")],
    }),
    defineField({
      name: "specialOffersSection",
      title: "Special offer",
      type: "object",
      group: "closing",
      description: "The \"Claim Offer\" button scrolls to the contact form.",
      fields: [heading("offerHeading"), text("specialOffer", "Text")],
    }),

    defineField({
      name: "paymentOption",
      title: "Payment options",
      type: "object",
      group: "payments",
      fields: [
        heading("paymentHeading"),
        defineField({ name: "paymentDetail", title: "Text", type: "string" }),
        defineField({ name: "paymentTools", title: "Payment methods", type: "array", of: [logoCard] }),
      ],
    }),

    defineField({
      name: "webSeoMetadata",
      title: "Google & sharing",
      type: "object",
      group: "seo",
      fields: [
        defineField({
          name: "title",
          title: "Title in Google",
          type: "string",
          validation: (rule) => rule.max(65).warning("Keep it under about 60 characters."),
        }),
        defineField({
          name: "description",
          title: "Description in Google",
          type: "text",
          rows: 3,
          validation: (rule) => rule.max(170).warning("Keep it under about 160 characters."),
        }),
        defineField({ name: "keywords", title: "Keywords", type: "array", of: [{ type: "string" }], options: { layout: "tags" } }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Service Summary", subtitle: "/about/service-summary" }) },
});
