// Link resolution for the new Service Page builder.
// Internal links store a Sanity reference (new or legacy service page) or a
// plain site path; references are turned into URLs here so links keep working
// when a page's slug or parent changes.

import { client } from "@/sanity/lib/client";

export type LinkTarget = {
  _id: string;
  _type: "servicePage" | "logicalServices" | "subService" | string;
  slug?: string;
  parentSlug?: string;
  urlPath?: string;
  urlPathSub?: string;
  legacyParent?: string;
};

export type LinkMap = Record<string, string>;

export type SpLink = {
  linkType?: "internal" | "external";
  reference?: { _ref?: string };
  path?: string;
  url?: string;
  openInNewTab?: boolean;
};

export const servicePagePath = (slug?: string, parentSlug?: string) =>
  slug ? `/services/${parentSlug ? `${parentSlug}/` : ""}${slug}` : undefined;

const hrefForTarget = (t: LinkTarget): string | undefined => {
  switch (t._type) {
    case "servicePage":
      return servicePagePath(t.slug, t.parentSlug);
    case "logicalServices":
      return t.urlPath ? `/services/${t.urlPath}` : undefined;
    case "subService":
      // The legacy sub-service route only uses the last segment, but use the
      // real parent when we can find it so the URL is canonical.
      return t.urlPathSub
        ? `/services/${t.legacyParent || "services"}/${t.urlPathSub}`
        : undefined;
    default:
      return undefined;
  }
};

/** Every `_ref` anywhere inside a value (sections, buttons, rich-text marks…). */
export const collectRefs = (value: unknown, out = new Set<string>()): Set<string> => {
  if (Array.isArray(value)) {
    value.forEach((v) => collectRefs(v, out));
  } else if (value && typeof value === "object") {
    const obj = value as Record<string, unknown>;
    if (typeof obj._ref === "string") out.add(obj._ref);
    Object.values(obj).forEach((v) => collectRefs(v, out));
  }
  return out;
};

/** Resolve all referenced pages to URLs in a single query. */
export async function buildLinkMap(value: unknown): Promise<LinkMap> {
  const ids = Array.from(collectRefs(value));
  if (ids.length === 0) return {};
  try {
    const targets: LinkTarget[] = await client.fetch(
      `*[_id in $ids]{
        _id, _type,
        "slug": slug.current,
        "parentSlug": parent->slug.current,
        urlPath, urlPathSub,
        "legacyParent": *[_type == "logicalServices" && references(^._id)][0].urlPath
      }`,
      { ids }
    );
    const map: LinkMap = {};
    for (const t of targets) {
      const href = hrefForTarget(t);
      if (href) map[t._id] = href;
    }
    return map;
  } catch (error) {
    console.error("Error resolving service page links:", error);
    return {};
  }
}

/** href + target attrs for an spLink (or undefined if it points nowhere). */
export const resolveLink = (link: SpLink | undefined, links: LinkMap) => {
  if (!link) return undefined;
  const external = link.linkType === "external";
  const href = external
    ? link.url
    : (link.reference?._ref && links[link.reference._ref]) || link.path;
  if (!href) return undefined;
  const newTab = Boolean(link.openInNewTab);
  return {
    href,
    external: external || /^https?:\/\//.test(href),
    target: newTab ? "_blank" : undefined,
    rel: newTab ? "noopener noreferrer" : undefined,
  };
};
