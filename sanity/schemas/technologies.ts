// Technology categories on /technologies (e.g. "Frontend" with its logos).
// Their order is set in the "Technology Order" document below. Field names
// are the stored keys, so they must not change.

import { defineArrayMember, defineField, defineType } from "sanity";
import { CodeBlockIcon, OlistIcon } from "@sanity/icons";
import { TECH_LOGO_TYPE } from "./tech-logo";

export const TECHNOLOGY_TYPE = "technologies";
export const TECHNOLOGY_ORDER_ID = "technologiesPage";

export const technology = defineType({
  name: TECHNOLOGY_TYPE,
  title: "Technologies",
  type: "document",
  icon: CodeBlockIcon,
  fields: [
    defineField({
      name: "techname",
      title: "Category name",
      type: "string",
      description: "E.g. \"Frontend\" or \"Cloud Services\".",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "techDesc",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "logos",
      title: "Technologies",
      type: "array",
      description: "The logos shown under the description, in this order. Pick from Technology Logos.",
      of: [{ type: "reference", to: [{ type: TECH_LOGO_TYPE }] }],
      validation: (rule) => rule.unique(),
    }),
    defineField({
      name: "techImage",
      title: "Illustration",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
          description: "Optional. Leave empty if the illustration is only decorative.",
        }),
      ],
    }),
    // Old logo list, copied into "Technologies" above by
    // scripts/migrate-technologies.mjs and removed by its --cleanup step.
    defineField({
      name: "techLogos",
      title: "Old logo list",
      type: "array",
      hidden: true,
      readOnly: true,
      of: [
        defineArrayMember({
          type: "object",
          name: "techLogoGroup",
          fields: [
            defineField({ name: "heading", type: "string" }),
            defineField({ name: "images", type: "array", of: [{ type: "reference", to: [{ type: TECH_LOGO_TYPE }] }] }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: { title: "techname", media: "techImage", logos: "logos" },
    prepare: ({ title, media, logos }) => ({
      title: title?.trim() || "Untitled category",
      subtitle: `${logos?.length ?? 0} technologies`,
      media,
    }),
  },
});

// "Technology Order": the order of the categories on /technologies.
// One document only (id "technologiesPage"); see sanity.config.ts.
export const technologyOrder = defineType({
  name: TECHNOLOGY_ORDER_ID,
  title: "Technology Order",
  type: "document",
  icon: OlistIcon,
  fields: [
    defineField({
      name: "categoryOrder",
      title: "Category order",
      type: "array",
      description:
        "Drag to change the order of the categories on the Technologies page. Categories not in this list are shown first, most recently edited first.",
      of: [{ type: "reference", to: [{ type: TECHNOLOGY_TYPE }] }],
      validation: (rule) => rule.unique(),
    }),
  ],
  preview: {
    select: { categories: "categoryOrder" },
    prepare: ({ categories }) => ({
      title: "Technology Order",
      subtitle: `${categories?.length ?? 0} categories in order`,
    }),
  },
});
