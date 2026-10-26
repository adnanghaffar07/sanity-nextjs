// Section templates for the new Service Page builder. Each has a matching
// component in components/services/page-builder.
//
// Labels and help text are written in plain language for any service (not one
// specific page). Only titles/descriptions are user-facing — field `name`s are
// the stored keys, so they must not be renamed once pages use them.

import { defineArrayMember, defineField, defineType, type FieldDefinition, type PreviewValue } from "sanity";
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
type TextBlock = { children?: { text?: string }[] } | null | undefined;

const toPlainText = (value: unknown): string =>
  Array.isArray(value)
    ? (value as TextBlock[]).map((block) => (block?.children ?? []).map((span) => span?.text ?? "").join("")).join(" ")
    : typeof value === "string"
      ? value
      : "";

const simpleItem = (name: string, title: string, fields: FieldDefinition[], previewTitle = "title") =>
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

// Reused field definitions with consistent wording.
const titleField = (title = "Title", description?: string) =>
  defineField({ name: "title", title, type: "string", ...(description ? { description } : {}) });
const descriptionField = (title = "Description", description?: string) =>
  defineField({ name: "description", title, type: "spRichText", ...(description ? { description } : {}) });
const optionalLink = (title = "Link (optional)", description = "Makes this item clickable.") =>
  defineField({ name: "link", title, type: "spLink", description });
const tagsField = (title = "Tags", description = "Short labels shown as small pills. Type a word and press Enter.") =>
  defineField({ name: "tags", title, type: "array", of: [{ type: "string" }], options: { layout: "tags" }, description });

const primaryButton = defineField({ name: "primaryButton", title: "Main button", type: "spButton", group: "content", description: "Optional. The most important action, e.g. \"Book a Call\"." });
const secondaryButton = defineField({ name: "secondaryButton", title: "Second button", type: "spButton", group: "content", description: "Optional. A second action, e.g. \"See Our Work\"." });
const reviewBadges = defineField({
  name: "showReviewBadges",
  title: "Show review site logos",
  type: "boolean",
  group: "content",
  initialValue: true,
  description: "Shows the Google, DesignRush and Clutch review logos under the buttons.",
});
const backgroundImage = defineField({
  name: "backgroundImage",
  title: "Background image",
  type: "spImage",
  group: "content",
  description: "Fills the whole section behind a dark overlay. Recommended size 1920 × 1080 px.",
});

// 1 ── Hero ───────────────────────────────────────────────────────────────────
export const spHero = defineType({
  name: "spHero",
  title: "Hero (light, with image)",
  description: "Top of the page: big heading, short text, bullet points, buttons and an image on the right.",
  type: "object",
  icon: RocketIcon,
  groups: sectionGroups,
  fields: [
    defineField({ name: "badge", title: "Small label above the heading", type: "string", group: "content", description: "Optional. A short label in a pill above the heading, e.g. the service name." }),
    iconField("badgeIcon", "Icon for the small label", "content"),
    defineField({ name: "heading", title: "Page heading", type: "string", group: "content", description: "The main title of the page. Use only one hero section per page.", validation: (r) => r.required() }),
    defineField({ name: "headingHighlight", title: "Highlighted words (blue)", type: "string", group: "content", description: "Optional. Words added to the end of the heading in blue, e.g. \"in the USA\"." }),
    defineField({ name: "subheading", title: "Text under the heading", type: "spRichText", group: "content", description: "One or two sentences explaining the service." }),
    defineField({
      name: "highlights",
      title: "Bullet points",
      type: "array",
      group: "content",
      of: [
        simpleItem("highlight", "Bullet point", [
          defineField({ name: "text", title: "Text", type: "spRichText" }),
        ], "text"),
      ],
      description: "Optional. Short points shown with blue tick icons. 2–4 work best.",
    }),
    primaryButton,
    secondaryButton,
    defineField({ name: "image", title: "Image (right side)", type: "spImage", group: "content", description: "Recommended size 1120 × 960 px." }),
    defineField({
      name: "showTrustBar",
      title: "Show client logos and review ratings",
      type: "boolean",
      group: "content",
      initialValue: true,
      description: "Shows our client logos and the Google, Clutch and DesignRush ratings under the hero.",
    }),
    ...sectionBaseFields,
  ],
  preview: preview("Hero (light, with image)"),
});

// 1b ── Hero with lead form ───────────────────────────────────────────────────
export const spHeroForm = defineType({
  name: "spHeroForm",
  title: "Hero (dark, with contact form)",
  description: "Top of the page over a background photo, with a contact form on the right.",
  type: "object",
  icon: RocketIcon,
  groups: sectionGroups,
  fields: [
    defineField({ name: "heading", title: "Page heading", type: "string", group: "content", description: "The main title of the page. Use only one hero section per page.", validation: (r) => r.required() }),
    defineField({ name: "subheading", title: "Text under the heading", type: "spRichText", group: "content" }),
    primaryButton,
    secondaryButton,
    backgroundImage,
    reviewBadges,
    defineField({ name: "formHeading", title: "Form title", type: "string", group: "content", initialValue: "Ready to innovate your business?" }),
    defineField({ name: "formSubheading", title: "Form subtitle", type: "string", group: "content", initialValue: "We are here! Let's kick-off our journey to success." }),
    defineField({
      name: "formStyle",
      title: "Form look",
      type: "string",
      group: "content",
      options: { list: [{ title: "See-through", value: "default" }, { title: "Solid blue", value: "blue" }], layout: "radio", direction: "horizontal" },
      initialValue: "default",
    }),
    ...sectionBaseFields,
  ],
  preview: preview("Hero (dark, with contact form)"),
});

// 1c ── Hero banner ───────────────────────────────────────────────────────────
export const spHeroBanner = defineType({
  name: "spHeroBanner",
  title: "Hero (dark, no form)",
  description: "Top of the page over a background photo: heading, text and buttons. Centred or left-aligned.",
  type: "object",
  icon: RocketIcon,
  groups: sectionGroups,
  fields: [
    defineField({ name: "heading", title: "Page heading", type: "string", group: "content", description: "The main title of the page. Use only one hero section per page.", validation: (r) => r.required() }),
    defineField({ name: "subheading", title: "Text under the heading", type: "spRichText", group: "content" }),
    primaryButton,
    secondaryButton,
    defineField({
      name: "alignment",
      title: "Text position",
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
    backgroundImage,
    reviewBadges,
    ...sectionBaseFields,
  ],
  preview: preview("Hero (dark, no form)"),
});

// 2 ── Intro ──────────────────────────────────────────────────────────────────
export const spIntro = defineType({
  name: "spIntro",
  title: "Text with Side Box",
  description: "A paragraph about the service, with an optional box of key items on the right.",
  type: "object",
  icon: DocumentTextIcon,
  groups: sectionGroups,
  fields: [
    ...headerFields({ intro: false }),
    defineField({ name: "body", title: "Main text", type: "spRichText", group: "content", description: "The paragraph(s) about the service." }),
    defineField({ name: "panelTitle", title: "Side box title", type: "string", group: "content", description: "Optional. A short title for the box on the right, e.g. \"What we offer\"." }),
    defineField({
      name: "panelItems",
      title: "Side box items",
      type: "array",
      group: "content",
      description: "Optional. Each item shows an icon and a short line of text. Leave empty to show the text full width.",
      of: [
        simpleItem("panelItem", "Item", [iconField(), titleField("Text"), optionalLink()]),
      ],
    }),
    defineField({
      name: "notes",
      title: "Small notes under the side box",
      type: "array",
      group: "content",
      description: "Optional. One or two very short notes with an icon.",
      of: [simpleItem("note", "Note", [iconField(), titleField("Text")])],
    }),
    ...sectionBaseFields,
  ],
  preview: preview("Text with Side Box"),
});

// 3 ── Problem ────────────────────────────────────────────────────────────────
export const spProblem = defineType({
  name: "spProblem",
  title: "Problem & Solution",
  description: "Explain the problem your customers face, with an image, a list of pain points, and a \"before vs after\" comparison.",
  type: "object",
  icon: WarningOutlineIcon,
  groups: sectionGroups,
  fields: [
    ...headerFields(),
    defineField({
      name: "image",
      title: "Image (left side)",
      type: "spImage",
      group: "content",
      description: "Optional. A picture that shows the problem, e.g. a screenshot, diagram or photo. Recommended size 1200 × 900 px.",
    }),
    // Kept only so pages created with the earlier chat example still load
    // without warnings; hidden from editors and replaced by the image above.
    defineField({
      name: "chatExample",
      title: "Example conversation (no longer used)",
      type: "array",
      group: "content",
      hidden: true,
      of: [
        defineArrayMember({
          name: "chatMessage",
          type: "object",
          fields: [
            defineField({ name: "from", type: "string" }),
            defineField({ name: "text", type: "string" }),
            defineField({ name: "warning", type: "boolean" }),
          ],
        }),
      ],
    }),
    defineField({ name: "costTitle", title: "Pain points title", type: "string", group: "content", description: "Optional. A short line above the pain points, e.g. \"What this costs your business\"." }),
    defineField({
      name: "costs",
      title: "Pain points",
      type: "array",
      group: "content",
      description: "Optional. Short problems your customers have. Each shows an icon on a red background.",
      of: [simpleItem("cost", "Pain point", [iconField(), titleField("Text")])],
    }),
    defineField({ name: "body", title: "Text under the pain points", type: "spRichText", group: "content", description: "Optional. Explain why the problem happens." }),
    defineField({ name: "badTitle", title: "Left box title (the problem)", type: "string", group: "content", description: "e.g. \"The usual approach\"." }),
    defineField({ name: "badItems", title: "Left box points", type: "array", group: "content", of: [{ type: "string" }], description: "What goes wrong today. Each point shows a red ✕." }),
    defineField({ name: "goodTitle", title: "Right box title (the solution)", type: "string", group: "content", description: "e.g. \"Our approach\"." }),
    defineField({ name: "goodItems", title: "Right box points", type: "array", group: "content", of: [{ type: "string" }], description: "What we do instead. Each point shows a blue ✓." }),
    defineField({ name: "closingLine", title: "Closing line (right box)", type: "spRichText", group: "content", description: "Optional. One short line at the bottom of the right box, shown in yellow." }),
    ...sectionBaseFields,
  ],
  preview: preview("Problem & Solution"),
});

// 4 ── Services grid (numbered cards with a result line) ──────────────────────
export const spServicesGrid = defineType({
  name: "spServicesGrid",
  title: "Numbered Cards",
  description: "A grid of numbered cards, e.g. the services you offer. Each card can end with a result line.",
  type: "object",
  icon: ThLargeIcon,
  groups: sectionGroups,
  fields: [
    ...headerFields(),
    defineField({
      name: "outcomeLabel",
      title: "Label for the result line",
      type: "string",
      group: "content",
      initialValue: "Outcome",
      description: "Shown in bold before each card's result line, e.g. \"Outcome\", \"Result\" or \"You get\".",
    }),
    defineField({
      name: "items",
      title: "Cards",
      type: "array",
      group: "content",
      of: [
        simpleItem("serviceItem", "Card", [
          iconField(),
          titleField(),
          descriptionField(),
          defineField({ name: "outcome", title: "Result line (optional)", type: "spRichText", description: "One short line at the bottom of the card." }),
          optionalLink("Card link (optional)", "Makes the card title clickable."),
        ]),
      ],
    }),
    ...sectionBaseFields,
  ],
  preview: preview("Numbered Cards"),
});

// 5 ── Image cards ────────────────────────────────────────────────────────────
export const spImageCards = defineType({
  name: "spImageCards",
  title: "Cards with Images",
  description: "Cards with a picture on top, e.g. types of solutions or use cases.",
  type: "object",
  icon: ImagesIcon,
  groups: sectionGroups,
  fields: [
    ...headerFields(),
    defineField({ name: "tagsLabel", title: "Label above the tags", type: "string", group: "content", initialValue: "Best for", description: "Shown above each card's tags, e.g. \"Best for\" or \"Ideal for\"." }),
    defineField({
      name: "items",
      title: "Cards",
      type: "array",
      group: "content",
      of: [
        simpleItem("imageCard", "Card", [
          defineField({ name: "image", title: "Image", type: "spImage", description: "Recommended size 800 × 450 px (wide)." }),
          iconField(),
          titleField(),
          descriptionField(),
          tagsField(),
          optionalLink("Card link (optional)", "Makes the card title clickable."),
        ]),
      ],
    }),
    ...sectionBaseFields,
  ],
  preview: preview("Cards with Images"),
});

// 6 ── Icon grid ──────────────────────────────────────────────────────────────
export const spIconGrid = defineType({
  name: "spIconGrid",
  title: "Icon Grid",
  description: "A grid of short items with an icon each, e.g. features or capabilities. Dark or light background.",
  type: "object",
  icon: BulbOutlineIcon,
  groups: sectionGroups,
  fields: [
    ...headerFields(),
    defineField({
      name: "theme",
      title: "Background colour",
      type: "string",
      group: "content",
      options: { list: [{ title: "Dark blue", value: "dark" }, { title: "Light", value: "light" }], layout: "radio", direction: "horizontal" },
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
          titleField(),
          descriptionField(),
          defineField({ name: "tagsLabel", title: "Label above the tags (optional)", type: "string", description: "e.g. \"Certified for\"." }),
          tagsField("Tags (optional)"),
          optionalLink(),
        ]),
      ],
    }),
    ...sectionBaseFields,
  ],
  preview: preview("Icon Grid"),
});

// 7 ── Comparison (two cards with VS) ─────────────────────────────────────────
const comparisonCard = (name: string, title: string, description: string) =>
  defineField({
    name,
    title,
    description,
    type: "object",
    group: "content",
    fields: [
      iconField(),
      titleField("Title"),
      descriptionField("Description"),
      defineField({ name: "chooseWhen", title: "Highlighted note (optional)", type: "spRichText", description: "One line shown in a box at the bottom of the card, after the note label." }),
      optionalLink("Link (optional)", "Makes the card title clickable."),
    ],
  });

export const spComparison = defineType({
  name: "spComparison",
  title: "Two-Card Comparison",
  description: "Compare two options side by side with \"VS\" between them.",
  type: "object",
  icon: SplitHorizontalIcon,
  groups: sectionGroups,
  fields: [
    ...headerFields({ intro: false }),
    defineField({
      name: "noteLabel",
      title: "Label for the highlighted notes",
      type: "string",
      group: "content",
      initialValue: "Choose it when",
      description: "Shown in bold before each card's highlighted note, e.g. \"Choose it when\" or \"Best if\".",
    }),
    comparisonCard("left", "Left card", "Light blue card, usually the option this page is about."),
    comparisonCard("right", "Right card", "Dark card, usually the alternative."),
    defineField({ name: "footer", title: "Text under the cards", type: "spRichText", group: "content", description: "Optional. A closing line, e.g. a link to learn more." }),
    ...sectionBaseFields,
  ],
  preview: preview("Two-Card Comparison"),
});

// 8 ── CTA banner ─────────────────────────────────────────────────────────────
export const spCtaBanner = defineType({
  name: "spCtaBanner",
  title: "Call-to-Action Banner",
  description: "A bold blue banner asking visitors to get in touch, with a button and optional image.",
  type: "object",
  icon: BellIcon,
  groups: sectionGroups,
  fields: [
    defineField({ name: "heading", title: "Heading", type: "string", group: "content", validation: (r) => r.required() }),
    defineField({ name: "text", title: "Text", type: "spRichText", group: "content", description: "One or two sentences." }),
    defineField({ name: "button", title: "Button", type: "spButton", group: "content" }),
    defineField({ name: "image", title: "Image (optional)", type: "spImage", group: "content", description: "Shown on the right. Recommended size 860 × 660 px." }),
    ...sectionBaseFields,
  ],
  preview: preview("Call-to-Action Banner"),
});

// 9 ── Industries (tiles with bullet points) ──────────────────────────────────
export const spIndustries = defineType({
  name: "spIndustries",
  title: "Tiles with Bullet Points",
  description: "Small tiles, each with an icon, a title and a short bullet list, e.g. industries you serve.",
  type: "object",
  icon: CaseIcon,
  groups: sectionGroups,
  fields: [
    ...headerFields(),
    defineField({
      name: "items",
      title: "Tiles",
      type: "array",
      group: "content",
      of: [
        simpleItem("industry", "Tile", [
          iconField(),
          titleField("Title", "e.g. \"Healthcare\"."),
          defineField({ name: "points", title: "Bullet points", type: "array", of: [{ type: "string" }], description: "2–4 short points." }),
          optionalLink(),
        ]),
      ],
    }),
    ...sectionBaseFields,
  ],
  preview: preview("Tiles with Bullet Points"),
});

// 10 ── Process timeline ──────────────────────────────────────────────────────
export const spProcess = defineType({
  name: "spProcess",
  title: "Step-by-Step Process",
  description: "Numbered steps showing how you work. Up to 5 steps show side by side on large screens.",
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
      description: "Steps are numbered automatically in this order.",
      of: [simpleItem("step", "Step", [iconField(), titleField(), descriptionField()])],
    }),
    ...sectionBaseFields,
  ],
  preview: preview("Step-by-Step Process"),
});

// 11 ── Before → After rows ───────────────────────────────────────────────────
export const spInsteadOf = defineType({
  name: "spInsteadOf",
  title: "Before → After Rows",
  description: "Rows comparing the old way (crossed out) with what you offer, e.g. \"Instead of … → You get …\".",
  type: "object",
  icon: ArrowRightIcon,
  groups: sectionGroups,
  fields: [
    ...headerFields(),
    defineField({ name: "leftLabel", title: "Left column heading", type: "string", group: "content", initialValue: "Instead of" }),
    defineField({ name: "rightLabel", title: "Right column heading", type: "string", group: "content", initialValue: "You get" }),
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
            defineField({ name: "insteadOf", title: "Left (the old way)", type: "string", description: "Shown crossed out." }),
            defineField({ name: "youGet", title: "Right (what you get)", type: "spRichText" }),
          ],
          preview: { select: { title: "insteadOf" } },
        }),
      ],
    }),
    ...sectionBaseFields,
  ],
  preview: preview("Before → After Rows"),
});

// 12 ── Benefits (image + list) ───────────────────────────────────────────────
export const spBenefits = defineType({
  name: "spBenefits",
  title: "List with Image",
  description: "A list of points with icons, next to an image, e.g. benefits.",
  type: "object",
  icon: StarIcon,
  groups: sectionGroups,
  fields: [
    ...headerFields(),
    defineField({ name: "image", title: "Image (optional)", type: "spImage", group: "content", description: "Shown under the heading on the left. Recommended size 1040 × 780 px." }),
    defineField({
      name: "items",
      title: "List items",
      type: "array",
      group: "content",
      of: [simpleItem("benefit", "Item", [iconField(), titleField(), descriptionField()])],
    }),
    ...sectionBaseFields,
  ],
  preview: preview("List with Image"),
});

// 13 ── Tech stack ────────────────────────────────────────────────────────────
export const spTechStack = defineType({
  name: "spTechStack",
  title: "Technologies",
  description: "Rows of technology logos grouped by category, e.g. \"Cloud: AWS, Azure\".",
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
      description: "Each category is one row, e.g. \"Cloud\" or \"Integrations\".",
      of: [
        simpleItem("techCategory", "Category", [
          iconField(),
          titleField("Category name"),
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
                    description: "Pick a brand. Its logo and colour are added automatically.",
                  }),
                  defineField({
                    name: "title",
                    title: "Name (optional)",
                    type: "string",
                    description: "Leave empty to use the brand name. Required if you upload your own logo.",
                  }),
                  defineField({
                    name: "logo",
                    title: "Your own logo (if the brand isn't listed)",
                    type: "image",
                    description: "A square logo, ideally on a transparent background. Only used when no brand is picked.",
                  }),
                  optionalLink(),
                ],
                validation: (rule) =>
                  rule.custom((value: { brand?: string; title?: string; logo?: { asset?: unknown } } | undefined) =>
                    value?.brand || (value?.logo?.asset && value?.title)
                      ? true
                      : "Pick a brand, or upload a logo and enter a name."
                  ),
                preview: {
                  select: { title: "title", brand: "brand", logo: "logo" },
                  prepare: ({ title, brand, logo }: { title?: string; brand?: string; logo?: { asset?: unknown } & PreviewValue["media"] }) => {
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
  preview: preview("Technologies"),
});

// 14 ── FAQ ───────────────────────────────────────────────────────────────────
export const spFaq = defineType({
  name: "spFaq",
  title: "FAQ",
  description: "Questions and answers that open and close. Can also show your answers in Google results.",
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
      title: "Show these answers in Google results",
      type: "boolean",
      group: "settings",
      initialValue: true,
      description: "Adds FAQ data that Google can use. Leave on unless another FAQ on this page already does.",
    }),
    ...sectionBaseFields,
  ],
  preview: preview("FAQ"),
});

// 15 ── Final CTA ─────────────────────────────────────────────────────────────
export const spFinalCta = defineType({
  name: "spFinalCta",
  title: "Closing Call-to-Action",
  description: "A dark section for the end of the page: heading, short list of what visitors get, and a button.",
  type: "object",
  icon: CheckmarkCircleIcon,
  groups: sectionGroups,
  fields: [
    defineField({ name: "heading", title: "Heading", type: "string", group: "content", validation: (r) => r.required() }),
    defineField({ name: "headingHighlight", title: "Highlighted words (yellow)", type: "string", group: "content", description: "Optional. Words added to the end of the heading in yellow." }),
    defineField({ name: "text", title: "Text", type: "spRichText", group: "content" }),
    defineField({ name: "listTitle", title: "List heading", type: "string", group: "content", description: "Optional. Shown above the list, e.g. \"What you'll get\"." }),
    defineField({
      name: "items",
      title: "List items",
      type: "array",
      group: "content",
      description: "Optional. 2–3 short items work best.",
      of: [simpleItem("takeaway", "Item", [iconField(), titleField("Text")])],
    }),
    defineField({ name: "button", title: "Button", type: "spButton", group: "content" }),
    ...sectionBaseFields,
  ],
  preview: preview("Closing Call-to-Action"),
});

// 16 ── Sub-services (filled in automatically) ────────────────────────────────
export const spSubServices = defineType({
  name: "spSubServices",
  title: "Sub-Services",
  description: "Automatically shows cards for this service's sub-services — both new pages and older ones not yet moved. You only write the heading.",
  type: "object",
  icon: ThLargeIcon,
  groups: sectionGroups,
  fields: [
    ...headerFields(),
    defineField({
      name: "linkLabel",
      title: "Link text on each card",
      type: "string",
      group: "content",
      initialValue: "Learn more",
    }),
    ...sectionBaseFields,
  ],
  preview: preview("Sub-Services"),
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
  spSubServices,
];
