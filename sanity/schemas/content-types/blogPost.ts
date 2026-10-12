// Blog Post: replaces `portfolio` documents with pageType "blogs".
// Field names match the legacy documents, so the blog template renders both.

import { defineType } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";
import { SEO_GROUP, addressField, legacyIdField, reuse, seoFields } from "./reuse";

export const blogPost = defineType({
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  icon: DocumentTextIcon,
  groups: [
    { name: "content", title: "Article", default: true },
    { name: "images", title: "Images" },
    { name: "extra", title: "Extra sections" },
    SEO_GROUP,
  ],
  fields: [
    reuse("title", {
      title: "Blog title",
      group: "content",
      description: "Shown on the blog cards and used as the Google title if none is set in the SEO tab.",
      validation: (r: any) => r.required(),
    }),
    addressField("blogPost", "how-to-choose-ai-automation-agency", "/blogs"),
    reuse("blogheading", {
      title: "Heading above the article",
      group: "content",
      description: "Large heading at the start of the article.",
    }),
    reuse("subtitle", {
      title: "Publish date",
      group: "content",
      description: "Shown as \"Published …\" under the heading and on the blog cards, e.g. \"12 October 2026\".",
    }),
    reuse("introductionheading", {
      title: "Introduction",
      group: "content",
      description: "Short opening paragraph under the heading. Also used as the blog card text.",
    }),
    reuse("description", {
      title: "Article body",
      group: "content",
      description: "The main article: text, headings, images, code, tables and YouTube videos.",
    }),

    reuse("heroimage", {
      title: "Main image",
      group: "images",
      description: "Image at the top of the article and on the blog cards. Also used when shared on social media.",
    }),
    reuse("cardimage", { title: "Card image (optional)", group: "images", description: "Only needed if the card should use a different image." }),
    reuse("primaryimage", { title: "Image beside the key facts (optional)", group: "images" }),

    reuse("briefdescription", { title: "Key facts: intro text", group: "extra" }),
    reuse("briefitemsarray", { title: "Key facts", group: "extra", description: "Short label + value pairs, e.g. \"Reading time: 6 min\"." }),
    reuse("challengesfacedheading", { title: "Highlights: heading", group: "extra" }),
    reuse("chanllangesfaced", { title: "Highlights", group: "extra", description: "Cards shown after the article." }),
    reuse("conclusionheading", { title: "Conclusion: heading", group: "extra" }),
    reuse("conclusion", { title: "Conclusion", group: "extra" }),
    reuse("faqSection", { title: "FAQ", group: "extra", description: "Questions and answers at the end of the article." }),

    reuse("audience", {
      title: "Newsletter audience",
      group: "content",
      description: "Which client groups get an email about this post when it's published.",
    }),

    // The blog template reads only these SEO values.
    ...seoFields({ google: ["title", "description"], jsonLd: true }),

    legacyIdField,
  ],
  orderings: [
    { title: "Newest first", name: "createdDesc", by: [{ field: "_createdAt", direction: "desc" }] },
  ],
  preview: {
    select: { title: "title", slug: "slug", media: "heroimage" },
    prepare: ({ title, slug, media }: any) => ({ title, subtitle: slug ? `/blogs/${slug}` : "No address yet", media }),
  },
});
