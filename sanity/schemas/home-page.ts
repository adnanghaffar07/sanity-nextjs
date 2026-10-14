// The home page's editable content: one document (id "homePage"), shown in
// Studio as "Home Page". It can't be created, duplicated or deleted there
// (see sanity.config.ts). Everything else on the home page lives in code.

import { defineArrayMember, defineField, defineType } from "sanity";
import { HomeIcon } from "@sanity/icons";

export const HOME_PAGE_ID = "homePage";

export const homePage = defineType({
  name: HOME_PAGE_ID,
  title: "Home Page",
  type: "document",
  icon: HomeIcon,
  groups: [
    { name: "testimonials", title: "Testimonials", default: true },
    { name: "faqs", title: "FAQs" },
  ],
  fields: [
    defineField({
      name: "testimonials",
      title: "Testimonials",
      description: "Client quotes in the \"Trusted by Industry Leaders\" carousel. Drag to change the order.",
      type: "array",
      group: "testimonials",
      validation: (rule) => rule.min(3).warning("The carousel looks best with at least 3 testimonials."),
      of: [
        defineArrayMember({
          type: "object",
          name: "testimonial",
          title: "Testimonial",
          fields: [
            defineField({ name: "name", title: "Name", type: "string", validation: (rule) => rule.required() }),
            defineField({
              name: "role",
              title: "Role and company",
              type: "string",
              description: "E.g. \"CEO, Abacus.AI\".",
            }),
            defineField({
              name: "quote",
              title: "Quote",
              type: "text",
              rows: 4,
              validation: (rule) => rule.required().max(400).warning("Keep it under about 400 characters so it fits the card."),
            }),
            defineField({
              name: "photo",
              title: "Photo or company logo",
              type: "image",
              options: { hotspot: true },
              description: "Square image, shown in a circle.",
              fields: [
                defineField({
                  name: "alt",
                  title: "Image description",
                  type: "string",
                  description: "For screen readers, e.g. \"Abacus.AI logo\". Leave empty to use \"<name>'s profile picture\".",
                }),
              ],
            }),
          ],
          preview: { select: { title: "name", subtitle: "role", media: "photo" } },
        }),
      ],
    }),
    defineField({
      name: "faqs",
      title: "Frequently asked questions",
      description: "Shown at the bottom of the home page. Drag to change the order.",
      type: "array",
      group: "faqs",
      of: [
        defineArrayMember({
          type: "object",
          name: "faq",
          title: "Question",
          fields: [
            defineField({ name: "question", title: "Question", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "answer", title: "Answer", type: "text", rows: 4, validation: (rule) => rule.required() }),
          ],
          preview: { select: { title: "question", subtitle: "answer" } },
        }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Home Page" }) },
});
