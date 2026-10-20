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
// component names; the website maps them in `components/services/page-builder/icons.tsx`.
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
    description: "Click \"Choose\" and pick an icon. It appears in brand blue on the website.",
    ...(group ? { group } : {}),
  });

// ── Link (used by buttons, cards and rich-text annotations) ──────────────────
const linkFields = [
  defineField({
    name: "linkType",
    title: "Where does it go?",
    type: "string",
    options: {
      list: [
        { title: "A page on our website", value: "internal" },
        { title: "Another website", value: "external" },
      ],
      layout: "radio",
      direction: "horizontal",
    },
    initialValue: "internal",
  }),
  defineField({
    name: "reference",
    title: "Choose a service page",
    type: "reference",
    to: LINKABLE_TYPES,
    description: "Start typing the service name. If that page's address changes later, this link updates by itself.",
    hidden: ({ parent }: any) => parent?.linkType === "external",
  }),
  defineField({
    name: "path",
    title: "…or type the page address",
    type: "string",
    description: "For pages that aren't service pages, e.g. /contact-us or /case-studies/heyou. Use #section-id to jump to a section on this page. Leave empty if you chose a page above.",
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
    title: "Website address",
    type: "url",
    description: "The full address, starting with https://",
    hidden: ({ parent }: any) => parent?.linkType !== "external",
    validation: (rule) => rule.uri({ scheme: ["http", "https", "mailto", "tel"] }),
  }),
  defineField({
    name: "openInNewTab",
    title: "Open in a new browser tab",
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
    defineField({ name: "label", title: "Button text", type: "string", validation: (r) => r.required() }),
    defineField({ name: "link", title: "Button link", type: "spLink" }),
    defineField({
      name: "style",
      title: "Button colour",
      type: "string",
      options: {
        list: [
          { title: "Blue", value: "primary" },
          { title: "Yellow", value: "accent" },
          { title: "Outline only", value: "outline" },
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
            title: "Link to a page on our website",
            type: "object",
            icon: LinkIcon,
            fields: [
              defineField({
                name: "reference",
                title: "Choose a service page",
                type: "reference",
                to: LINKABLE_TYPES,
                description: "Start typing the service name. The link updates by itself if that page moves.",
              }),
              defineField({
                name: "path",
                title: "…or type the page address",
                type: "string",
                description: "For other pages, e.g. /contact-us or /case-studies/heyou. Leave empty if you chose a page above.",
              }),
            ],
          },
          {
            name: "externalLink",
            title: "Link to another website",
            type: "object",
            icon: LaunchIcon,
            fields: [
              defineField({
                name: "href",
                title: "Website address",
                description: "The full address, starting with https://",
                type: "url",
                validation: (rule) => rule.uri({ scheme: ["http", "https", "mailto", "tel"] }),
              }),
              defineField({
                name: "openInNewTab",
                title: "Open in a new browser tab",
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
      title: "Image description (alt text)",
      type: "string",
      description: "One short sentence describing what's in the image. Helps Google and people using screen readers.",
      validation: (r) => r.required(),
    }),
  ],
});

// Fields every section shares: an optional anchor id and a hide switch.
export const sectionBaseFields = [
  defineField({
    name: "anchorId",
    title: "Section ID (for \"jump to\" links)",
    type: "string",
    group: "settings",
    description: "Optional. Give this section a short name like how-it-works; any button linking to #how-it-works will then scroll here. Lowercase letters, numbers and dashes only.",
    validation: (rule) =>
      rule.regex(/^[a-z0-9-]+$/, { name: "anchor", invert: false }).warning(),
  }),
  defineField({
    name: "hidden",
    title: "Hide this section",
    type: "boolean",
    group: "settings",
    initialValue: false,
    description: "Turn on to hide this section from the website without deleting its content.",
  }),
];

export const sectionGroups = [
  { name: "content", title: "Content", default: true },
  { name: "settings", title: "Settings" },
];

// Common header fields: small label above the heading, the heading and an intro.
export const headerFields = (opts: { intro?: boolean } = {}) => [
  defineField({ name: "eyebrow", title: "Small label above the heading", type: "string", group: "content", description: "Optional. A few words shown in small blue capitals above the heading, e.g. \"Our Services\"." }),
  defineField({ name: "heading", title: "Heading", type: "string", group: "content", description: "The main title of this section.", validation: (r) => r.required() }),
  ...(opts.intro === false
    ? []
    : [defineField({ name: "intro", title: "Short intro (under the heading)", type: "spRichText", group: "content", description: "Optional. One or two sentences introducing this section." })]),
];
