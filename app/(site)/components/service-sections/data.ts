// Data loading + SEO metadata for new section-based Service Pages.

import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { buildLinkMap, servicePagePath, type LinkMap } from "./links";
import type { ServiceSection } from "./ServicePageRenderer";

export type ServicePageDoc = {
  _id: string;
  title?: string;
  slug?: string;
  parentSlug?: string;
  sections?: ServiceSection[];
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
    ogImage?: any;
    canonicalUrl?: string;
    noIndex?: boolean;
  };
};

const SITE_URL = "https://codeautomation.ai";

/**
 * Published Service Page for /services/<parentSlug?>/<slug>, or null.
 * Returns null on any error so the legacy page can still render.
 */
export async function getServicePage(slug: string, parentSlug?: string): Promise<ServicePageDoc | null> {
  try {
    return await client.fetch(
      `*[_type == "servicePage" && slug.current == $slug &&
         select($parent == "" => !defined(parent), coalesce(parent->slug.current, parent->urlPath) == $parent)
       ][0]{
        _id, title, sections, seo,
        "slug": slug.current,
        "parentSlug": coalesce(parent->slug.current, parent->urlPath)
      }`,
      { slug, parent: parentSlug ?? "" }
    );
  } catch (error) {
    console.error("Error fetching service page:", error);
    return null;
  }
}

export async function getServicePageWithLinks(
  slug: string,
  parentSlug?: string
): Promise<{ page: ServicePageDoc; links: LinkMap } | null> {
  const page = await getServicePage(slug, parentSlug);
  if (!page) return null;
  const links = await buildLinkMap(page.sections);
  return { page, links };
}

const firstHeroImage = (page: ServicePageDoc) =>
  page.sections?.find((s) => s._type === "spHero" && s.image?.asset)?.image;

export function servicePageMetadata(page: ServicePageDoc): Metadata {
  const path = servicePagePath(page.slug, page.parentSlug) || "/services";
  const canonical = page.seo?.canonicalUrl || `${SITE_URL}${path}`;
  const title = page.seo?.metaTitle || page.title || "CodeAutomation";
  const description = page.seo?.metaDescription || undefined;
  const shareImage = page.seo?.ogImage?.asset ? page.seo.ogImage : firstHeroImage(page);
  const imageUrl = shareImage ? urlForImage(shareImage).toString() : `${SITE_URL}/thankyou.jpg`;

  return {
    title,
    description,
    keywords: page.seo?.keywords?.length ? page.seo.keywords : undefined,
    alternates: { canonical },
    robots: page.seo?.noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      type: "website",
      url: canonical,
      title,
      description,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}
