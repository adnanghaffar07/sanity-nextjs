// Section templates for the new Service Page builder. Each one mirrors a
// section of the hand-built AI Chatbot Development Services page, and has a
// matching component in app/(site)/components/service-sections.

import { defineArrayMember, defineField, defineType } from "sanity";
import {
  RocketIcon,
  DocumentTextIcon,
  WarningOutlineIcon,
  ThLargeIcon,
  ImagesIcon,
  BulbOutlineIcon,
  SplitHorizontalIcon,
  BellIcon,
  CaseIcon,
  OlistIcon,
  ArrowRightIcon,
  StarIcon,
  CodeBlockIcon,
  HelpCircleIcon,
  CheckmarkCircleIcon,
} from "@sanity/icons";
import { createElement } from "react";
import { headerFields, iconField, sectionBaseFields, sectionGroups } from "./shared";
import { BrandPickerInput } from "./BrandPickerInput";
import { getBrand } from "./brands";

const preview = (fallback: string) => ({
  select: { title: "heading", hidden: "hidden" },
  prepare: ({ title, hidden }: { title?: string; hidden?: boolean }) => ({
    title: title || fallback,
    subtitle: `${fallback}${hidden ? " · hidden" : ""}`,
  }),
});

// Plain text from a rich-text value, for Studio list labels.
const toPlainText = (value: unknown): string =>
  Array.isArray(value)
    ? value
        .map((block: any) => (block?.children || []).map((c: any) => c?.text || "").join(""))
        .join(" ")
    : typeof value === "string"
      ? value
      : "";

const simpleItem = (name: string, title: string, fields: any[], previewTitle = "title") =>
  defineArrayMember({
    name,
    title,
    type: "object",
    fields,
    preview: {
      select: { label: previewTitle },
      prepare: ({ label }: { label?: unknown }) => ({ title: toPlainText(label) || title }),
    },
  });

// 1 ── Hero ───────────────────────────────────────────────────────────────────
export const spHero = defineType({
  name: "spHero",
  title: "Hero",
  type: "object",
  icon: RocketIcon,
  groups: sectionGroups,
  fields: [
    defineField({ name: "badge", title: "Badge text", type: "string", group: "content", description: "Small pill above the heading, e.g. \"AI Chatbot Development\"." }),
    iconField("badgeIcon", "Badge icon", "content"),
    defineField({ name: "heading", title: "Heading (H1)", type: "string", group: "content", validation: (r) => r.required() }),
    defineField({ name: "headingHighlight", title: "Highlighted ending", type: "string", group: "content", description: "Optional words shown in blue after the heading, e.g. \"USA\"." }),
    defineField({ name: "subheading", title: "Subheading", type: "spRichText", group: "content" }),
    defineField({
      name: "highlights",
      title: "Checklist points",
      type: "array",
      group: "content",
      of: [
        simpleItem("highlight", "Point", [
          defineField({ name: "text", title: "Text", type: "spRichText" }),
        ], "text"),
      ],
      description: "Short points shown with blue check icons. Links allowed.",
    }),
    defineField({ name: "primaryButton", title: "Primary button", type: "spButton", group: "content" }),
    defineField({ name: "secondaryButton", title: "Secondary button", type: "spButton", group: "content" }),
    defineField({ name: "image", title: "Hero image", type: "spImage", group: "content", description: "Recommended 1120 × 960 px." }),
    defineField({
      name: "showTrustBar",
      title: "Show trust bar",
      type: "boolean",
      group: "content",
      initialValue: true,
      description: "Shows client logos and Google / Clutch / DesignRush review chips under the hero.",
    }),
    ...sectionBaseFields,
  ],
  preview: preview("Hero"),
});

// 1b ── Hero with lead form (dark photo background, like legacy service pages) ─
export const spHeroForm = defineType({
  name: "spHeroForm",
  title: "Hero with Form",
  type: "object",
  icon: RocketIcon,
  groups: sectionGroups,
  fields: [
    defineField({ name: "heading", title: "Heading (H1)", type: "string", group: "content", validation: (r) => r.required() }),
    defineField({ name: "subheading", title: "Subheading", type: "spRichText", group: "content" }),
    defineField({ name: "primaryButton", title: "Primary button", type: "spButton", group: "content" }),
    defineField({ name: "secondaryButton", title: "Secondary button", type: "spButton", group: "content" }),
    defineField({
      name: "backgroundImage",
      title: "Background image",
      type: "spImage",
      group: "content",
      description: "Shown behind a dark overlay. Recommended 1920 × 1080 px.",
    }),
    defineField({
      name: "showReviewBadges",
      title: "Show review badges",
      type: "boolean",
      group: "content",
      initialValue: true,
      description: "Google / DesignRush / Clutch badges under the buttons.",
    }),
    defineField({ name: "formHeading", title: "Form heading", type: "string", group: "content", initialValue: "Ready to innovate your business?" }),
    defineField({ name: "formSubheading", title: "Form subheading", type: "string", group: "content", initialValue: "We are here! Let's kick-off our journey to success." }),
    defineField({
      name: "formStyle",
      title: "Form style",
      type: "string",
      group: "content",
      options: { list: [{ title: "Glass (see-through)", value: "default" }, { title: "Solid blue", value: "blue" }], layout: "radio", direction: "horizontal" },
      initialValue: "default",
    }),
    ...sectionBaseFields,
  ],
  preview: preview("Hero with Form"),
});

// 1c ── Hero banner (dark photo background, no form) ─────────────────────────
export const spHeroBanner = defineType({
  name: "spHeroBanner",
  title: "Hero Banner",
  type: "object",
  icon: RocketIcon,
  groups: sectionGroups,
  fields: [
    defineField({ name: "heading", title: "Heading (H1)", type: "string", group: "content", validation: (r) => r.required() }),
    defineField({ name: "subheading", title: "Subheading", type: "spRichText", group: "content" }),
    defineField({ name: "primaryButton", title: "Primary button", type: "spButton", group: "content" }),
    defineField({ name: "secondaryButton", title: "Secondary button", type: "spButton", group: "content" }),
    defineField({
      name: "alignment",
      title: "Text alignment",
      type: "string",
      group: "content",
      options: {
        list: [
          { title: "Centre", value: "center" },
          { title: "Left", value: "left" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
      initialValue: "center",
      description: "Where the heading, text and buttons sit. On phones it is always centred.",
    }),
    defineField({
      name: "backgroundImage",
      title: "Background image",
      type: "spImage",
      group: "content",
      description: "Shown behind a dark overlay. Recommended 1920 × 1080 px.",
    }),
    defineField({
      name: "showReviewBadges",
      title: "Show review badges",
      type: "boolean",
      group: "content",
      initialValue: true,
      description: "Google / DesignRush / Clutch badges under the buttons.",
    }),
    ...sectionBaseFields,
  ],
  preview: preview("Hero Banner"),
});

// 2 ── Intro ──────────────────────────────────────────────────────────────────
export const spIntro = defineType({
  name: "spIntro",
  title: "Intro",
  type: "object",
  icon: DocumentTextIcon,
  groups: sectionGroups,
  fields: [
    ...headerFields({ intro: false }),
    defineField({ name: "body", title: "Body text", type: "spRichText", group: "content" }),
    defineField({ name: "panelTitle", title: "Side panel title", type: "string", group: "content", description: "e.g. \"What we build\"." }),
    defineField({
      name: "panelItems",
      title: "Side panel items",
      type: "array",
      group: "content",
      of: [
        simpleItem("panelItem", "Item", [
          iconField(),
          defineField({ name: "title", title: "Title", type: "string" }),
          defineField({ name: "link", title: "Link (optional)", type: "spLink" }),
        ]),
      ],
    }),
    defineField({
      name: "notes",
      title: "Small notes under the panel",
      type: "array",
      group: "content",
      of: [simpleItem("note", "Note", [iconField(), defineField({ name: "title", title: "Text", type: "string" })])],
    }),
    ...sectionBaseFields,
  ],
  preview: preview("Intro"),
});

// 3 ── Problem ────────────────────────────────────────────────────────────────
export const spProblem = defineType({
  name: "spProblem",
  title: "Problem",
  type: "object",
  icon: WarningOutlineIcon,
  groups: sectionGroups,
  fields: [
    ...headerFields(),
    defineField({
      name: "chatExample",
      title: "Example conversation",
      type: "array",
      group: "content",
      description: "Optional chat illustration showing the problem.",
      of: [
        defineArrayMember({
          name: "chatMessage",
          type: "object",
          title: "Message",
          fields: [
            defineField({
              name: "from",
              title: "From",
              type: "string",
              options: { list: ["user", "bot"], layout: "radio", direction: "horizontal" },
              initialValue: "user",
            }),
            defineField({ name: "text", title: "Text", type: "string" }),
            defineField({ name: "warning", title: "Mark as wrong answer", type: "boolean", initialValue: false }),
          ],
          preview: { select: { title: "text", subtitle: "from" } },
        }),
      ],
    }),
    defineField({ name: "costTitle", title: "Cost list title", type: "string", group: "content", description: "e.g. \"Every bad answer has a cost.\"" }),
    defineField({
      name: "costs",
      title: "Cost items",
      type: "array",
      group: "content",
      of: [simpleItem("cost", "Cost", [iconField(), defineField({ name: "title", title: "Text", type: "string" })])],
    }),
    defineField({ name: "body", title: "Text under the costs", type: "spRichText", group: "content" }),
    defineField({ name: "badTitle", title: "\"Typical\" card title", type: "string", group: "content" }),
    defineField({ name: "badItems", title: "\"Typical\" card points", type: "array", group: "content", of: [{ type: "string" }] }),
    defineField({ name: "goodTitle", title: "\"Effective\" card title", type: "string", group: "content" }),
    defineField({ name: "goodItems", title: "\"Effective\" card points", type: "array", group: "content", of: [{ type: "string" }] }),
    defineField({ name: "closingLine", title: "Closing line", type: "spRichText", group: "content" }),
    ...sectionBaseFields,
  ],
  preview: preview("Problem"),
});

// 4 ── Services grid (numbered cards with outcome) ────────────────────────────
export const spServicesGrid = defineType({
  name: "spServicesGrid",
  title: "Services Grid",
  type: "object",
  icon: ThLargeIcon,
  groups: sectionGroups,
  fields: [
    ...headerFields(),
    defineField({
      name: "items",
      title: "Services",
      type: "array",
      group: "content",
      of: [
        simpleItem("serviceItem", "Service", [
          iconField(),
          defineField({ name: "title", title: "Title", type: "string" }),
          defineField({ name: "description", title: "Description", type: "spRichText" }),
          defineField({ name: "outcome", title: "Outcome", type: "spRichText" }),
          defineField({ name: "link", title: "Card link (optional)", type: "spLink" }),
        ]),
      ],
    }),
    ...sectionBaseFields,
  ],
  preview: preview("Services Grid"),
});

// 5 ── Image cards (image + icon + "best for" tags) ───────────────────────────
export const spImageCards = defineType({
  name: "spImageCards",
  title: "Image Cards",
  type: "object",
  icon: ImagesIcon,
  groups: sectionGroups,
  fields: [
    ...headerFields(),
    defineField({ name: "tagsLabel", title: "Tags label", type: "string", group: "content", initialValue: "Best for" }),
    defineField({
      name: "items",
      title: "Cards",
      type: "array",
      group: "content",
      of: [
        simpleItem("imageCard", "Card", [
          defineField({ name: "image", title: "Image", type: "spImage", description: "Recommended 800 × 450 px (16:9)." }),
          iconField(),
          defineField({ name: "title", title: "Title", type: "string" }),
          defineField({ name: "description", title: "Description", type: "spRichText" }),
          defineField({ name: "tags", title: "Tags", type: "array", of: [{ type: "string" }], options: { layout: "tags" } }),
          defineField({ name: "link", title: "Card link (optional)", type: "spLink" }),
        ]),
      ],
    }),
    ...sectionBaseFields,
  ],
  preview: preview("Image Cards"),
});

// 6 ── Icon grid (e.g. capabilities) ──────────────────────────────────────────
export const spIconGrid = defineType({
  name: "spIconGrid",
  title: "Icon Grid",
  type: "object",
  icon: BulbOutlineIcon,
  groups: sectionGroups,
  fields: [
    ...headerFields(),
    defineField({
      name: "theme",
      title: "Background",
      type: "string",
      group: "content",
      options: { list: [{ title: "Dark navy", value: "dark" }, { title: "Light", value: "light" }], layout: "radio", direction: "horizontal" },
      initialValue: "dark",
    }),
    defineField({
      name: "items",
      title: "Items",
      type: "array",
      group: "content",
      of: [
        simpleItem("iconItem", "Item", [
          iconField(),
          defineField({ name: "title", title: "Title", type: "string" }),
          defineField({ name: "description", title: "Description", type: "spRichText" }),
          defineField({ name: "tagsLabel", title: "Tags label (optional)", type: "string" }),
          defineField({ name: "tags", title: "Tags (optional)", type: "array", of: [{ type: "string" }], options: { layout: "tags" } }),
          defineField({ name: "link", title: "Link (optional)", type: "spLink" }),
        ]),
      ],
    }),
    ...sectionBaseFields,
  ],
  preview: preview("Icon Grid"),
});

// 7 ── Comparison (two cards with VS) ─────────────────────────────────────────
const comparisonCard = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: "object",
    group: "content",
    fields: [
      iconField(),
      defineField({ name: "title", title: "Title", type: "string" }),
      defineField({ name: "description", title: "Description", type: "spRichText" }),
      defineField({ name: "chooseWhen", title: "\"Choose it when\" text", type: "spRichText" }),
      defineField({ name: "link", title: "Link (optional)", type: "spLink" }),
    ],
  });

export const spComparison = defineType({
  name: "spComparison",
  title: "Comparison (VS)",
  type: "object",
  icon: SplitHorizontalIcon,
  groups: sectionGroups,
  fields: [
    ...headerFields({ intro: false }),
    comparisonCard("left", "Left card (highlighted)"),
    comparisonCard("right", "Right card (dark)"),
    defineField({ name: "footer", title: "Text under the cards", type: "spRichText", group: "content" }),
    ...sectionBaseFields,
  ],
  preview: preview("Comparison"),
});

// 8 ── CTA banner (mid-page) ──────────────────────────────────────────────────
export const spCtaBanner = defineType({
  name: "spCtaBanner",
  title: "CTA Banner",
  type: "object",
  icon: BellIcon,
  groups: sectionGroups,
  fields: [
    defineField({ name: "heading", title: "Heading", type: "string", group: "content", validation: (r) => r.required() }),
    defineField({ name: "text", title: "Text", type: "spRichText", group: "content" }),
    defineField({ name: "button", title: "Button", type: "spButton", group: "content" }),
    defineField({ name: "image", title: "Image (optional)", type: "spImage", group: "content", description: "Recommended 860 × 660 px." }),
    ...sectionBaseFields,
  ],
  preview: preview("CTA Banner"),
});

// 9 ── Industries (tiles with bullet points) ──────────────────────────────────
export const spIndustries = defineType({
  name: "spIndustries",
  title: "Industries",
  type: "object",
  icon: CaseIcon,
  groups: sectionGroups,
  fields: [
    ...headerFields(),
    defineField({
      name: "items",
      title: "Industries",
      type: "array",
      group: "content",
      of: [
        simpleItem("industry", "Industry", [
          iconField(),
          defineField({ name: "title", title: "Industry", type: "string" }),
          defineField({ name: "points", title: "Use cases", type: "array", of: [{ type: "string" }] }),
          defineField({ name: "link", title: "Link (optional)", type: "spLink" }),
        ]),
      ],
    }),
    ...sectionBaseFields,
  ],
  preview: preview("Industries"),
});

// 10 ── Process timeline ──────────────────────────────────────────────────────
export const spProcess = defineType({
  name: "spProcess",
  title: "Process Timeline",
  type: "object",
  icon: OlistIcon,
  groups: sectionGroups,
  fields: [
    ...headerFields(),
    defineField({
      name: "steps",
      title: "Steps",
      type: "array",
      group: "content",
      of: [
        simpleItem("step", "Step", [
          iconField(),
          defineField({ name: "title", title: "Title", type: "string" }),
          defineField({ name: "description", title: "Description", type: "spRichText" }),
        ]),
      ],
    }),
    ...sectionBaseFields,
  ],
  preview: preview("Process Timeline"),
});

// 11 ── "Instead of → You get" rows ───────────────────────────────────────────
export const spInsteadOf = defineType({
  name: "spInsteadOf",
  title: "Instead Of / You Get",
  type: "object",
  icon: ArrowRightIcon,
  groups: sectionGroups,
  fields: [
    ...headerFields(),
    defineField({ name: "leftLabel", title: "Left column label", type: "string", group: "content", initialValue: "Instead of" }),
    defineField({ name: "rightLabel", title: "Right column label", type: "string", group: "content", initialValue: "You get" }),
    defineField({
      name: "rows",
      title: "Rows",
      type: "array",
      group: "content",
      of: [
        defineArrayMember({
          name: "row",
          type: "object",
          title: "Row",
          fields: [
            defineField({ name: "insteadOf", title: "Instead of", type: "string" }),
            defineField({ name: "youGet", title: "You get", type: "spRichText" }),
          ],
          preview: { select: { title: "insteadOf" } },
        }),
      ],
    }),
    ...sectionBaseFields,
  ],
  preview: preview("Instead Of / You Get"),
});

// 12 ── Benefits (image + list) ───────────────────────────────────────────────
export const spBenefits = defineType({
  name: "spBenefits",
  title: "Benefits",
  type: "object",
  icon: StarIcon,
  groups: sectionGroups,
  fields: [
    ...headerFields(),
    defineField({ name: "image", title: "Image (optional)", type: "spImage", group: "content", description: "Recommended 1040 × 780 px." }),
    defineField({
      name: "items",
      title: "Benefits",
      type: "array",
      group: "content",
      of: [
        simpleItem("benefit", "Benefit", [
          iconField(),
          defineField({ name: "title", title: "Title", type: "string" }),
          defineField({ name: "description", title: "Description", type: "spRichText" }),
        ]),
      ],
    }),
    ...sectionBaseFields,
  ],
  preview: preview("Benefits"),
});

// 13 ── Tech stack (rows per category) ────────────────────────────────────────
export const spTechStack = defineType({
  name: "spTechStack",
  title: "Tech Stack",
  type: "object",
  icon: CodeBlockIcon,
  groups: sectionGroups,
  fields: [
    ...headerFields(),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      group: "content",
      of: [
        simpleItem("techCategory", "Category", [
          iconField(),
          defineField({ name: "title", title: "Category", type: "string" }),
          defineField({
            name: "items",
            title: "Technologies",
            type: "array",
            of: [
              defineArrayMember({
                name: "tech",
                title: "Technology",
                type: "object",
                fields: [
                  defineField({
                    name: "brand",
                    title: "Brand",
                    type: "string",
                    components: { input: BrandPickerInput },
                    description: "Pick a brand — its logo and colour are filled in automatically.",
                  }),
                  defineField({
                    name: "title",
                    title: "Name (optional)",
                    type: "string",
                    description: "Leave empty to use the brand name. Required if you upload a logo instead.",
                  }),
                  defineField({
                    name: "logo",
                    title: "Logo upload (if the brand isn't listed)",
                    type: "image",
                    description: "Square logo, ideally SVG or PNG on a transparent background. Used only when no brand is picked.",
                  }),
                  defineField({ name: "link", title: "Link (optional)", type: "spLink" }),
                ],
                validation: (rule) =>
                  rule.custom((value: any) =>
                    value?.brand || (value?.logo?.asset && value?.title)
                      ? true
                      : "Pick a brand, or upload a logo and enter a name."
                  ),
                preview: {
                  select: { title: "title", brand: "brand", logo: "logo" },
                  prepare: ({ title, brand, logo }: any) => {
                    const known = getBrand(brand);
                    return {
                      title: title || known?.name || "Technology",
                      subtitle: known ? undefined : logo ? "Uploaded logo" : "No logo",
                      media: logo?.asset
                        ? logo
                        : known
                          ? createElement(known.icon, { style: { color: known.color } })
                          : undefined,
                    };
                  },
                },
              }),
            ],
          }),
        ]),
      ],
    }),
    ...sectionBaseFields,
  ],
  preview: preview("Tech Stack"),
});

// 14 ── FAQ ───────────────────────────────────────────────────────────────────
export const spFaq = defineType({
  name: "spFaq",
  title: "FAQ",
  type: "object",
  icon: HelpCircleIcon,
  groups: sectionGroups,
  fields: [
    ...headerFields({ intro: false }),
    defineField({
      name: "items",
      title: "Questions",
      type: "array",
      group: "content",
      of: [
        simpleItem("faqItem", "Question", [
          defineField({ name: "question", title: "Question", type: "string", validation: (r) => r.required() }),
          defineField({ name: "answer", title: "Answer", type: "spRichText", validation: (r) => r.required() }),
        ], "question"),
      ],
    }),
    defineField({
      name: "addSchema",
      title: "Add FAQ structured data for Google",
      type: "boolean",
      group: "settings",
      initialValue: true,
    }),
    ...sectionBaseFields,
  ],
  preview: preview("FAQ"),
});

// 15 ── Final CTA ─────────────────────────────────────────────────────────────
export const spFinalCta = defineType({
  name: "spFinalCta",
  title: "Final CTA",
  type: "object",
  icon: CheckmarkCircleIcon,
  groups: sectionGroups,
  fields: [
    defineField({ name: "heading", title: "Heading", type: "string", group: "content", validation: (r) => r.required() }),
    defineField({ name: "headingHighlight", title: "Highlighted ending", type: "string", group: "content", description: "Shown in yellow after the heading." }),
    defineField({ name: "text", title: "Text", type: "spRichText", group: "content" }),
    defineField({ name: "listTitle", title: "List title", type: "string", group: "content", description: "e.g. \"You'll leave with\"." }),
    defineField({
      name: "items",
      title: "List items",
      type: "array",
      group: "content",
      of: [simpleItem("takeaway", "Item", [iconField(), defineField({ name: "title", title: "Text", type: "string" })])],
    }),
    defineField({ name: "button", title: "Button", type: "spButton", group: "content" }),
    ...sectionBaseFields,
  ],
  preview: preview("Final CTA"),
});

export const SECTION_TYPES = [
  spHero,
  spHeroForm,
  spHeroBanner,
  spIntro,
  spProblem,
  spServicesGrid,
  spImageCards,
  spIconGrid,
  spComparison,
  spCtaBanner,
  spIndustries,
  spProcess,
  spInsteadOf,
  spBenefits,
  spTechStack,
  spFaq,
  spFinalCta,
];
