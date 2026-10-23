// The /value-blueprints page (one document). The blueprints themselves are
// "Value Blueprint" documents (content-types/valueBlueprint.ts). Field names
// are the stored keys, so they must not change.

import { defineArrayMember, defineField, defineType } from "sanity";
import { DocumentsIcon } from "@sanity/icons";
import { TECH_LOGO_TYPE } from "./tech-logo";

export const VALUE_BLUEPRINTS_PAGE_TYPE = "valueBlueprints";

const imageWithAlt = (name: string, title: string, description?: string) =>
  defineField({
    name,
    title,
    description,
    type: "image",
    options: { hotspot: true },
    fields: [defineField({ name: "alt", title: "Image description (for Google & screen readers)", type: "string" })],
  });

// A list of small cards, each with an icon, a heading and a sentence.
const cardList = (name: string, imageName: string) =>
  defineField({
    name,
    title: "Cards",
    type: "array",
    of: [
      defineArrayMember({
        type: "object",
        fields: [
          defineField({ name: "heading", title: "Heading", type: "string" }),
          defineField({ name: "detail", title: "Text", type: "text", rows: 2 }),
          imageWithAlt(imageName, "Icon"),
        ],
        preview: { select: { title: "heading", subtitle: "detail", media: imageName } },
      }),
    ],
  });

const textAndImage = (name: string, title: string, fields: [string, string, string]) =>
  defineField({
    name,
    title,
    type: "object",
    group: "content",
    options: { collapsible: false },
    fields: [
      defineField({ name: fields[0], title: "Heading", type: "string" }),
      defineField({ name: fields[1], title: "Text", type: "text", rows: 4 }),
      imageWithAlt(fields[2], "Image"),
    ],
  });

const titleAndDescription = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: "object",
    group: "seo",
    description: "Optional. Leave empty to use the Google title and description.",
    options: { collapsible: true, collapsed: true },
    fields: [
      defineField({ name: "title", title: "Title", type: "string" }),
      defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    ],
  });

export const valueBlueprintsPage = defineType({
  name: VALUE_BLUEPRINTS_PAGE_TYPE,
  title: "Value Blueprints Page",
  type: "document",
  icon: DocumentsIcon,
  groups: [
    { name: "content", title: "Page content", default: true },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({ name: "title", title: "Main heading", type: "string", group: "content" }),
    imageWithAlt("heroImage", "Top image", "Background image behind the main heading. Also used when the page is shared."),
    textAndImage("introductionSection", "Introduction", ["introHeading", "introDesc", "introImage"]),
    defineField({
      name: "toolsTechSection",
      title: "Tools & technologies",
      type: "object",
      group: "content",
      options: { collapsible: false },
      fields: [
        defineField({ name: "toolsTechHeading", title: "Heading", type: "string" }),
        defineField({ name: "toolsTechDesc", title: "Text", type: "text", rows: 3 }),
        defineField({
          name: "toolsTech",
          title: "Tools",
          type: "array",
          description: "Shown in rows of 7, 7 and 6 (up to 20).",
          validation: (rule) => rule.max(20),
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "heading", title: "Name", type: "string" }),
                defineField({
                  name: "images",
                  title: "Logo",
                  type: "array",
                  of: [{ type: "reference", to: [{ type: TECH_LOGO_TYPE }] }],
                }),
              ],
              preview: { select: { title: "heading" } },
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "projectCycleSection",
      title: "Project cycle",
      type: "object",
      group: "content",
      options: { collapsible: false },
      fields: [defineField({ name: "projectCycleHaeding", title: "Heading", type: "string" }), cardList("projectCycle", "projectImage")],
    }),
    defineField({
      name: "deliveryOptionSection",
      title: "Service delivery options",
      type: "object",
      group: "content",
      options: { collapsible: false },
      fields: [defineField({ name: "deliveryOptionHaeding", title: "Heading", type: "string" }), cardList("deliveryOption", "deliveryImage")],
    }),
    textAndImage("summarySection", "Summary", ["summaryHeading", "summaryMessage", "summaryImg"]),
    defineField({
      name: "callToActionSection",
      title: "Call to action card",
      type: "object",
      group: "content",
      options: { collapsible: false },
      fields: [
        defineField({ name: "callToActionHeading", title: "Heading", type: "string" }),
        defineField({ name: "callToAction", title: "Text", type: "text", rows: 3 }),
        imageWithAlt("callToActionImg", "Icon"),
      ],
    }),
    defineField({
      name: "specialOffersSection",
      title: "Special offer card",
      type: "object",
      group: "content",
      options: { collapsible: false },
      fields: [
        defineField({ name: "offerHeading", title: "Heading", type: "string" }),
        defineField({ name: "specialOffer", title: "Text", type: "text", rows: 3 }),
        imageWithAlt("offerImg", "Icon"),
      ],
    }),

    defineField({
      name: "webSeoMetadata",
      title: "Google search result",
      type: "object",
      group: "seo",
      fields: [
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
        defineField({ name: "keywords", title: "Keywords", type: "array", of: [{ type: "string" }] }),
      ],
    }),
    titleAndDescription("facebook", "Facebook / LinkedIn share"),
    titleAndDescription("twitterhMeta", "X (Twitter) share"),
  ],
  preview: { prepare: () => ({ title: "Value Blueprints Page", subtitle: "/value-blueprints" }) },
});
