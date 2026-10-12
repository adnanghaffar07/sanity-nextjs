// Value Blueprint: /value-blueprints/<address>. Blueprints first lived at
// /value-blueprints/<document id>; those keep that id as their address, and
// `legacyId` keeps the old link working if the address is changed later.

import { defineField, defineType } from "sanity";
import { BulbOutlineIcon } from "@sanity/icons";
import { SEO_GROUP, addressField, legacyIdField, reuse, seoFields } from "./reuse";

// Logos from the shared Tech Logos library.
const logoList = (name: string, title: string, description?: string) =>
  defineField({
    name,
    title,
    description,
    type: "array",
    of: [{ type: "reference", to: [{ type: "techLogos" }] }],
    options: { layout: "grid" },
  });

// The page shows the workflow as steps joined with "+"; logos inside one step
// are alternatives, joined with "or". Stored in the legacy shape:
// toolstechlist[0].categories.{firstCat … SevenCat}.
const STEP_KEYS = ["firstCat", "secondCat", "thirdCat", "forthCat", "fifthCat", "SixthCat", "SevenCat"];

export const valueBlueprint = defineType({
  name: "valueBlueprint",
  title: "Value Blueprint",
  type: "document",
  icon: BulbOutlineIcon,
  groups: [
    { name: "content", title: "Page content", default: true },
    { name: "card", title: "Card on Value Blueprints page" },
    SEO_GROUP,
  ],
  fields: [
    reuse("title", {
      title: "Blueprint name",
      group: "content",
      description: "Main heading on the page and title on the card.",
      validation: (r: any) => r.required(),
    }),
    addressField("valueBlueprint", "lead-gen-classification", "/value-blueprints"),
    reuse("heroimage", { title: "Top image", group: "content", description: "Background image behind the name at the top of the page." }),

    // ── Workflow tools (page order) ──────────────────────────────────────────
    reuse("toolsandtechusedheading", { title: "Workflow tools: heading", group: "content", description: "E.g. \"Tools & Technologies Used\"." }),
    defineField({
      name: "toolstechlist",
      title: "Workflow tools",
      type: "array",
      group: "content",
      description: "The tools in this workflow, step by step. Steps are shown joined with \"+\"; several logos in one step are shown as alternatives (\"or\").",
      validation: (r) => r.max(1),
      of: [
        {
          type: "object",
          name: "workflowTools",
          title: "Workflow",
          fields: [
            defineField({
              name: "categories",
              title: "Steps",
              type: "object",
              options: { collapsible: false },
              fields: STEP_KEYS.map((key, i) =>
                logoList(key, `Step ${i + 1}`, i === 0 ? "E.g. the app the data comes from. Leave later steps empty if you need fewer." : undefined)
              ),
            }),
          ],
          preview: {
            select: Object.fromEntries(STEP_KEYS.map((k) => [k, `categories.${k}`])),
            prepare: (steps: Record<string, unknown[] | undefined>) => {
              const used = STEP_KEYS.filter((k) => steps[k]?.length).length;
              return { title: `${used} step${used === 1 ? "" : "s"}` };
            },
          },
        },
      ],
    }),

    // ── Key points, results, conclusion ──────────────────────────────────────
    reuse("challengesfacedheading", { title: "Key points: heading", group: "content" }),
    defineField({
      name: "chanllangesfaced",
      title: "Key points",
      type: "array",
      group: "content",
      of: [
        {
          type: "object",
          name: "keyPoint",
          title: "Key point",
          fields: [
            defineField({ name: "heading", title: "Title", type: "string" }),
            defineField({ name: "description", title: "Text", type: "text", rows: 3 }),
          ],
          preview: { select: { title: "heading", subtitle: "description" } },
        },
      ],
    }),
    reuse("resultsheading", { title: "Results: heading", group: "content" }),
    reuse("conclusionheading", { title: "Conclusion: heading", group: "content" }),
    reuse("conclusion", { title: "Conclusion", group: "content" }),

    // ── Card on /value-blueprints ────────────────────────────────────────────
    reuse("cardimage", { title: "Card image", group: "card", description: "Image on the card on codeautomation.ai/value-blueprints." }),
    defineField({
      name: "caseStudiesToolsSection",
      title: "Logos on the card",
      type: "object",
      group: "card",
      description: "Shown when someone hovers over the card.",
      options: { collapsible: false },
      fields: [
        defineField({
          name: "toolsTech",
          title: "Logo groups",
          type: "array",
          of: [
            {
              type: "object",
              name: "cardLogos",
              title: "Logos",
              fields: [logoList("images", "Logos")],
              preview: {
                select: { logos: "images" },
                prepare: ({ logos }: any) => ({ title: `${logos?.length || 0} logo${logos?.length === 1 ? "" : "s"}` }),
              },
            },
          ],
        }),
      ],
    }),

    // The blueprint template reads only these SEO values.
    ...seoFields({
      google: ["title", "description", "keywords"],
      social: {
        facebookCardsSub: ["facebookTitle", "facebookDescription", "facebookUrl", "facebookType"],
        linkedInCardsSub: ["linkedInTitle", "linkedInDescription", "linkedInUrl"],
        twitterCardsSub: ["twitterTitle", "twitterDescription", "twitterUrl", "twitterType"],
        whatsappCardsSub: ["whatsappTitle", "whatsappDescription", "whatsappUrl"],
        telegramCardsSub: ["telegramTitle", "telegramDescription", "telegramUrl"],
        pinterestCardsSub: ["pinterestTitle", "pinterestDescription", "pinterestUrl"],
      },
    }),

    // The old /value-blueprints/<id> link keeps working through this.
    legacyIdField,
  ],
  preview: {
    select: { title: "title", slug: "slug", media: "cardimage" },
    prepare: ({ title, slug, media }: any) => ({ title, subtitle: slug ? `/value-blueprints/${slug}` : "No address yet", media }),
  },
});
