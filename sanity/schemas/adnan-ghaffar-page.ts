// The /adnan-ghaffar profile page's editable text: one document (id
// "adnanGhaffarPage"), shown in Studio as "Adnan Ghaffar Page". Every field is
// optional: an empty field falls back to the default copy in
// sanity/lib/adnan-ghaffar.ts. The canonical URL, portrait and structured data
// stay in code.

import { defineArrayMember, defineField, defineType } from "sanity";
import { UserIcon } from "@sanity/icons";

export const ADNAN_GHAFFAR_PAGE_ID = "adnanGhaffarPage";

const EMPTY_USES_DEFAULT = "Leave empty to use the default text.";

export const adnanGhaffarPage = defineType({
  name: ADNAN_GHAFFAR_PAGE_ID,
  title: "Adnan Ghaffar Page",
  type: "document",
  icon: UserIcon,
  groups: [
    { name: "content", title: "Page content", default: true },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    // SEO
    defineField({
      name: "seoTitle",
      title: "Google title",
      type: "string",
      group: "seo",
      description: `Also used when the page is shared. ${EMPTY_USES_DEFAULT}`,
      validation: (rule) => rule.max(65).warning("Google usually cuts titles after about 60 characters."),
    }),
    defineField({
      name: "seoDescription",
      title: "Google description",
      type: "text",
      rows: 3,
      group: "seo",
      description: `Also used when the page is shared. ${EMPTY_USES_DEFAULT}`,
      validation: (rule) => rule.max(170).warning("Google usually cuts descriptions after about 160 characters."),
    }),

    // Top of the page
    defineField({ name: "role", title: "Role (under the name)", type: "string", group: "content", description: EMPTY_USES_DEFAULT }),
    defineField({ name: "introduction", title: "Introduction", type: "text", rows: 4, group: "content", description: EMPTY_USES_DEFAULT }),

    // About
    defineField({ name: "aboutHeading", title: "About: heading", type: "string", group: "content", description: EMPTY_USES_DEFAULT }),
    defineField({
      name: "aboutParagraphs",
      title: "About: paragraphs",
      type: "array",
      group: "content",
      description: EMPTY_USES_DEFAULT,
      of: [defineArrayMember({ type: "text", rows: 4 })],
    }),

    // Areas of focus
    defineField({ name: "focusHeading", title: "Areas of focus: heading", type: "string", group: "content", description: EMPTY_USES_DEFAULT }),
    defineField({
      name: "focusAreas",
      title: "Areas of focus",
      type: "array",
      group: "content",
      description: `Drag to change the order. ${EMPTY_USES_DEFAULT}`,
      of: [
        defineArrayMember({
          type: "object",
          name: "focusArea",
          title: "Area",
          fields: [
            defineField({ name: "title", title: "Name", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "text", title: "Text", type: "text", rows: 2, validation: (rule) => rule.required() }),
            defineField({
              name: "link",
              title: "Link (optional)",
              type: "string",
              description: 'A page on this site, starting with "/", e.g. "/services/ai-agent". The name becomes the link.',
              validation: (rule) =>
                rule.custom((value) => !value || value.startsWith("/") || 'Use a site path that starts with "/".'),
            }),
          ],
          preview: { select: { title: "title", subtitle: "link" } },
        }),
      ],
    }),

    // Articles
    defineField({ name: "articlesHeading", title: "Articles: heading", type: "string", group: "content", description: EMPTY_USES_DEFAULT }),
    defineField({ name: "articlesIntro", title: "Articles: text", type: "text", rows: 2, group: "content", description: EMPTY_USES_DEFAULT }),

    // Call to action
    defineField({ name: "ctaHeading", title: "Call to action: heading", type: "string", group: "content", description: EMPTY_USES_DEFAULT }),
    defineField({ name: "ctaText", title: "Call to action: text", type: "text", rows: 3, group: "content", description: EMPTY_USES_DEFAULT }),
    defineField({ name: "ctaButtonLabel", title: "Call to action: button text", type: "string", group: "content", description: EMPTY_USES_DEFAULT }),
    defineField({
      name: "ctaLink",
      title: "Call to action: button link",
      type: "url",
      group: "content",
      description: `Booking page the button opens. ${EMPTY_USES_DEFAULT}`,
      validation: (rule) => rule.uri({ scheme: ["https"] }),
    }),
  ],
  preview: { prepare: () => ({ title: "Adnan Ghaffar Page" }) },
});
