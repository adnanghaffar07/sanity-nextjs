// Helpers for the Blog Post / Case Study / Value Blueprint schemas.
//
// They reuse the field definitions in shared-fields.ts (the field names and data
// shape of the original combined "portfolio" type), with plain-language labels,
// tabs and help text per type. Only fields the website displays are included.

import sharedFields from "./shared-fields";

type AnyField = Record<string, any> & { name: string };

const SHARED_FIELDS = new Map<string, AnyField>(
  (sharedFields as AnyField[]).map((f) => [f.name, f])
);

/**
 * A shared field with new label / tab / help text. (Untyped, like the
 * legacy schema.) For object fields, `only` keeps just the listed sub-fields.
 */
export function reuse(name: string, overrides: Partial<AnyField> = {}, only?: string[]): any {
  const field = SHARED_FIELDS.get(name);
  if (!field) throw new Error(`Unknown shared field "${name}"`);
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
