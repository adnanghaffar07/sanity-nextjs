// Helpers for the Blog Post / Case Study / Value Blueprint schemas.
//
// They reuse the field definitions in shared-fields.ts (the field names and data
// shape of the original combined "portfolio" type), with plain-language labels,
// tabs and help text per type. Only fields the website displays are included.

import { defineField, type FieldDefinition, type Rule } from "sanity";
import { apiVersion } from "../../env";
import sharedFields from "./shared-fields";

/** A field as written in shared-fields.ts (plain objects copied from the legacy schema). */
export type SharedField = { name: string; type: string; fields?: SharedField[]; [key: string]: unknown };

/** What a type may change on a shared field: its label, tab, help text and rules. */
type FieldOverrides = {
  title?: string;
  description?: string;
  group?: string;
  options?: Record<string, unknown>;
  validation?: (rule: Rule) => Rule;
};

const SHARED_FIELDS = new Map(sharedFields.map((f) => [f.name, f]));

/**
 * A shared field with new label / tab / help text. For object fields, `only`
 * keeps just the listed sub-fields.
 */
export function reuse(name: string, overrides: FieldOverrides = {}, only?: string[]): FieldDefinition {
  const field = SHARED_FIELDS.get(name);
  if (!field) throw new Error(`Unknown shared field "${name}"`);
  const fields = only ? (field.fields ?? []).filter((f) => only.includes(f.name)) : field.fields;
  if (only && fields?.length !== only.length) throw new Error(`Unknown sub-field in "${name}": ${only.join(", ")}`);
  // The legacy definitions are plain objects; Studio validates their shape when it loads the schema.
  return { ...field, ...overrides, ...(fields ? { fields } : {}), name: field.name } as FieldDefinition;
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
export const addressField = (type: string, example: string, basePath: string) =>
  defineField({
    name: "slug",
    title: "Page address (URL)",
    type: "string",
    group: "content",
    description: `The last part of the address: codeautomation.ai${basePath}/THIS-PART, e.g. ${example}. Lowercase words separated by dashes. Must be unique.`,
    validation: (rule) =>
      rule
        .required()
        .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, { name: "lowercase-with-dashes" })
        .custom(async (value, context) => {
          if (!value) return true;
          // "raw" so unpublished drafts of other documents also count as taken.
          const client = context.getClient({ apiVersion }).withConfig({ perspective: "raw" });
          const id = (context.document?._id || "").replace(/^drafts\./, "");
          const query = `count(*[_type == $type && slug == $slug && !(_id in [$id, "drafts." + $id])])`;
          // The check can fail in transit (Studio cancels it when you switch
          // documents, or the connection drops). Retry once; if Sanity still
          // can't be reached, skip the duplicate check instead of blocking publish.
          for (let attempt = 0; attempt < 2; attempt++) {
            try {
              const count = await client.fetch(query, { type, slug: value, id });
              return count === 0 ? true : "Another page already uses this address.";
            } catch {
              await new Promise((resolve) => setTimeout(resolve, 500));
            }
          }
          return true;
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
}): FieldDefinition[] => [
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
