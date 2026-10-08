// Shared building blocks for the new section-based Service Page schema.
// Nothing here touches the legacy `logicalServices` / `subService` types —
// they are only *referenced* so new content can link to legacy pages.

import { defineArrayMember, defineField, defineType } from "sanity";
import { LinkIcon, LaunchIcon } from "@sanity/icons";
import { IconPickerInput } from "./IconPickerInput";

// Documents an internal link can point at. Legacy service types are included
// so new pages can interlink with pages that haven't been migrated yet.
export const LINKABLE_TYPES = [
  { type: "servicePage" },
  { type: "logicalServices" },
  { type: "subService" },
];

// Icons editors can pick for cards, lists and badges. Values are lucide-react
// component names; the website maps them in `service-sections/icons.tsx`.
export const ICON_OPTIONS = [
  "Bot", "MessagesSquare", "MessageCircle", "Headset", "Mic", "PhoneCall",
  "BrainCircuit", "Sparkles", "Cpu", "Database", "DatabaseZap", "Library",
  "BookOpenText", "Zap", "Workflow", "Plug", "Code2", "Blocks", "Layers",
  "Compass", "Search", "PenTool", "FlaskConical", "Rocket", "Activity",
  "Target", "ShieldCheck", "Lock", "Languages", "Globe", "Globe2",
  "Smartphone", "Monitor", "Cloud", "CloudCog", "Server", "Settings",
  "Wrench", "Clock", "Timer", "CalendarCheck", "CalendarClock", "Magnet",
  "Users", "UserRoundCheck", "UserX", "Building2", "House", "Hotel",
  "HeartPulse", "ShoppingBag", "ShoppingCart", "Landmark", "GraduationCap",
  "Truck", "LifeBuoy", "Feather", "BadgeCheck", "Award", "Trophy",
  "TrendingUp", "BarChart3", "PieChart", "LineChart", "Lightbulb",
  "Hourglass", "Route", "ReceiptText", "FolderCheck", "Bug", "CircleCheck",
  "Star", "Heart", "Mail", "FileText",
].map((value) => ({ title: value.replace(/([a-z])([A-Z0-9])/g, "$1 $2"), value }));

// Pass `group` only for top-level section fields (nested objects have no groups).
export const iconField = (name = "icon", title = "Icon", group?: string) =>
  defineField({
    name,
    title,
    type: "string",
    options: { list: ICON_OPTIONS },
    // Visual picker (icon + name, searchable) instead of a text dropdown.
    components: { input: IconPickerInput },
    description: "Icon shown on the website (brand blue).",
    ...(group ? { group } : {}),
  });

// ── Link (used by buttons, cards and rich-text annotations) ──────────────────
const linkFields = [
  defineField({
    name: "linkType",
    title: "Link type",
    type: "string",
    options: {
      list: [
        { title: "Internal page", value: "internal" },
        { title: "External URL", value: "external" },
      ],
      layout: "radio",
      direction: "horizontal",
    },
    initialValue: "internal",
  }),
  defineField({
    name: "reference",
    title: "Page",
    type: "reference",
    to: LINKABLE_TYPES,
    description: "Pick a service page (new or legacy). The URL updates automatically if the page moves.",
    hidden: ({ parent }: any) => parent?.linkType === "external",
  }),
  defineField({
    name: "path",
    title: "…or site path",
    type: "string",
    description: "Any other page on this site, e.g. /case-studies/heyou or /contact-us. Used when no page is picked above.",
    hidden: ({ parent }: any) => parent?.linkType === "external",
    validation: (rule) =>
      rule.custom((value) =>
        !value || value.startsWith("/") || value.startsWith("#")
          ? true
          : "Site paths must start with / (or # for a section on the same page)"
      ),
  }),
  defineField({
    name: "url",
    title: "URL",
    type: "url",
    hidden: ({ parent }: any) => parent?.linkType !== "external",
    validation: (rule) => rule.uri({ scheme: ["http", "https", "mailto", "tel"] }),
  }),
  defineField({
    name: "openInNewTab",
    title: "Open in new tab",
    type: "boolean",
    initialValue: false,
  }),
];

export const spLink = defineType({
  name: "spLink",
  title: "Link",
  type: "object",
  icon: LinkIcon,
  fields: linkFields,
  options: { collapsible: true, collapsed: false },
});

export const spButton = defineType({
  name: "spButton",
  title: "Button",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Label", type: "string", validation: (r) => r.required() }),
    defineField({ name: "link", title: "Link", type: "spLink" }),
    defineField({
      name: "style",
      title: "Style",
      type: "string",
      options: {
        list: [
          { title: "Primary (blue)", value: "primary" },
          { title: "Accent (yellow)", value: "accent" },
          { title: "Outline", value: "outline" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
      initialValue: "primary",
    }),
  ],
  preview: { select: { title: "label", subtitle: "style" } },
});

// ── Rich text with internal/external link annotations ────────────────────────
export const spRichText = defineType({
  name: "spRichText",
  title: "Rich text",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      styles: [{ title: "Normal", value: "normal" }],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Numbered", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Bold", value: "strong" },
          { title: "Italic", value: "em" },
        ],
        annotations: [
          {
            name: "internalLink",
            title: "Internal link",
            type: "object",
            icon: LinkIcon,
            fields: [
              defineField({
                name: "reference",
                title: "Page",
                type: "reference",
                to: LINKABLE_TYPES,
              }),
              defineField({
                name: "path",
                title: "…or site path",
                type: "string",
                description: "e.g. /case-studies/heyou. Used when no page is picked above.",
              }),
            ],
          },
          {
            name: "externalLink",
            title: "External link",
            type: "object",
            icon: LaunchIcon,
            fields: [
              defineField({
                name: "href",
                title: "URL",
                type: "url",
                validation: (rule) => rule.uri({ scheme: ["http", "https", "mailto", "tel"] }),
              }),
              defineField({
                name: "openInNewTab",
                title: "Open in new tab",
                type: "boolean",
                initialValue: true,
              }),
            ],
          },
        ],
      },
    }),
  ],
});

// ── Image with required alt text ─────────────────────────────────────────────
export const spImage = defineType({
  name: "spImage",
  title: "Image",
  type: "image",
  options: { hotspot: true },
  fields: [
    defineField({
      name: "alt",
      title: "Alt text",
      type: "string",
      description: "Describe the image for SEO and screen readers.",
      validation: (r) => r.required(),
    }),
  ],
});

// Fields every section shares: an optional anchor id and a hide switch.
export const sectionBaseFields = [
  defineField({
    name: "anchorId",
    title: "Anchor ID",
    type: "string",
    group: "settings",
    description: "Optional. Lets buttons jump here with #anchor-id (e.g. how-it-works). Lowercase letters, numbers and dashes.",
    validation: (rule) =>
      rule.regex(/^[a-z0-9-]+$/, { name: "anchor", invert: false }).warning(),
  }),
  defineField({
    name: "hidden",
    title: "Hide this section",
    type: "boolean",
    group: "settings",
    initialValue: false,
    description: "Keep the content but don't show it on the website.",
  }),
];

export const sectionGroups = [
  { name: "content", title: "Content", default: true },
  { name: "settings", title: "Settings" },
];

// Common header fields: small label above the heading, the heading and an intro.
export const headerFields = (opts: { intro?: boolean } = {}) => [
  defineField({ name: "eyebrow", title: "Eyebrow label", type: "string", group: "content", description: "Small blue label above the heading, e.g. \"What We Do\"." }),
  defineField({ name: "heading", title: "Heading", type: "string", group: "content", validation: (r) => r.required() }),
  ...(opts.intro === false
    ? []
    : [defineField({ name: "intro", title: "Intro text", type: "spRichText", group: "content" })]),
];
