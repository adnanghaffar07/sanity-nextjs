// A technology logo (e.g. "React"), picked on the Technologies page and in
// the service and value blueprint pages. Field names are the stored keys.

import { defineField, defineType } from "sanity";
import { ImageIcon } from "@sanity/icons";

export const TECH_LOGO_TYPE = "techLogos";

export const techLogo = defineType({
  name: TECH_LOGO_TYPE,
  title: "Technology Logos",
  type: "document",
  icon: ImageIcon,
  fields: [
    defineField({
      name: "heading",
      title: "Name",
      type: "string",
      description: "Shown under the logo, e.g. \"React\".",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
          description: "Optional. The name above is used when this is empty.",
        }),
      ],
    }),
  ],
  preview: {
    select: { title: "heading", media: "image" },
  },
});
