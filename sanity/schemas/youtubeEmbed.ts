import { defineField, defineType } from "sanity";

const youtubeEmbed = defineType({
  name: "youtubeEmbed",
  type: "object",
  title: "YouTube Embed",
  fields: [
    defineField({
      name: "url",
      type: "url",
      title: "YouTube Video URL",
      validation: (rule) => rule.uri({ scheme: ["http", "https"] }),
    }),
  ],
  preview: {
    select: { url: "url" },
    prepare: ({ url }) => ({ title: "YouTube Video", subtitle: url }),
  },
});

export default youtubeEmbed;
