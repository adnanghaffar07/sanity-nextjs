// Helpers for the new Blog Post / Case Study / Value Blueprint schemas.
//
// They reuse the exact field definitions (name + data shape) from the legacy
// `portfolio` schema, with new plain-language labels, tabs and help text. Same
// shape = documents copy across exactly, and the existing page templates keep
// rendering them without changes. Only fields the website actually displays
// are included. The legacy schema itself is untouched.

import portfolioSchema from "../portfolio";

type AnyField = Record<string, any> & { name: string };

const LEGACY_FIELDS = new Map<string, AnyField>(
  (portfolioSchema.fields as AnyField[]).map((f) => [f.name, f])
);

/**
 * A legacy portfolio field with new label / tab / help text. (Untyped, like the
 * legacy schema.) For object fields, `only` keeps just the listed sub-fields.
 */
export function reuse(name: string, overrides: Partial<AnyField> = {}, only?: string[]): any {
  const field = LEGACY_FIELDS.get(name);
  if (!field) throw new Error(`Unknown portfolio field "${name}"`);
  const fields = only ? field.fields.filter((f: AnyField) => only.includes(f.name)) : field.fields;
  if (only && fields.length !== only.length) throw new Error(`Unknown sub-field in "${name}": ${only.join(", ")}`);
  return { ...field, ...overrides, ...(fields ? { fields } : {}), name: field.name };
}

/** Hidden: the old document this one was copied from (keeps old links working and avoids duplicates). */
export const legacyIdField = {
  name: "legacyId",
  title: "Copied from (old document id)",
  type: "string",
  hidden: true,
  readOnly: true,
};

/** The page address. Stored as plain text, like the legacy documents. */
export const addressField = (type: string, example: string, basePath: string) => ({
  name: "slug",
  title: "Page address (URL)",
  type: "string",
  group: "content",
  description: `The last part of the address: codeautomation.ai${basePath}/THIS-PART, e.g. ${example}. Lowercase words separated by dashes. Must be unique.`,
  validation: (rule: any) =>
    rule
      .required()
      .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, { name: "lowercase-with-dashes" })
      .custom(async (value: string | undefined, context: any) => {
        if (!value) return true;
        const client = context.getClient({ apiVersion: "2024-03-14" });
        const id = (context.document?._id || "").replace(/^drafts\./, "");
        const count = await client.fetch(
          `count(*[_type == $type && slug == $slug && !(_id in [$id, "drafts." + $id])])`,
          { type, slug: value, id }
        );
        return count === 0 ? true : "Another page already uses this address.";
      }),
});

const SOCIAL_TITLES: Record<string, string> = {
  facebookCardsSub: "Facebook preview",
  linkedInCardsSub: "LinkedIn preview",
  twitterCardsSub: "X (Twitter) preview",
  whatsappCardsSub: "WhatsApp preview",
  telegramCardsSub: "Telegram preview",
  pinterestCardsSub: "Pinterest preview",
};

/**
 * Search & social fields for the SEO tab. Each page template reads different
 * parts, so every type lists exactly the sub-fields its page uses.
 */
export const seoFields = (spec: {
  google: string[];
  jsonLd?: boolean;
  social?: Record<string, string[]>;
}): any[] => [
  reuse(
    "webSeoMetadataSub",
    { title: "Google search result", description: "Shown in Google results.", group: "seo" },
    spec.google
  ),
  ...Object.entries(spec.social || {}).map(([name, only]) =>
    reuse(
      name,
      {
        title: SOCIAL_TITLES[name],
        description: "Optional. Leave empty to use the Google title and description.",
        group: "seo",
        options: { collapsible: true, collapsed: true },
      },
      only
    )
  ),
  ...(spec.jsonLd
    ? [
        reuse("jsonLd", {
          title: "Structured data (advanced)",
          description: "Optional schema.org JSON for Google. Leave empty unless you know you need it.",
          group: "seo",
        }),
      ]
    : []),
];

export const SEO_GROUP = { name: "seo", title: "Google & Sharing (SEO)" };
