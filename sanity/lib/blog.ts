// Blog posts for /blogs, /blogs/<address> and the author page. Fetched on the
// server and cached; publishing in Studio refreshes them through the
// /api/revalidate webhook (tag "blogPost"), otherwise after 5 minutes.

import type { Image, PortableTextBlock } from "sanity";
import { client, reportSanityError } from "./client";
import { BLOG_FILTER, NEWEST_FIRST } from "./content";

export type BlogImage = Image & { alt?: string };

// Fields missing in Studio come back as null from GROQ, not undefined.
export interface BlogCard {
  _id: string;
  slug: string;
  title: string;
  subtitle?: string | null;
  introductionheading?: string | null;
  heroimage?: BlogImage | null;
  cardimage?: BlogImage | null;
}

export interface BlogPost extends BlogCard {
  blogheading?: string | null;
  description?: PortableTextBlock[] | null;
  primaryimage?: BlogImage | null;
  briefdescription?: string | null;
  briefitemsarray?: { _key?: string; heading?: string; value?: string }[] | null;
  challengesfacedheading?: string | null;
  chanllangesfaced?: { _key?: string; heading?: string; description?: string }[] | null;
  conclusionheading?: string | null;
  conclusion?: string | null;
  faqSection?: { title?: string; faqs?: { _key?: string; question?: string; answer?: string }[] } | null;
  webSeoMetadataSub?: { title?: string; description?: string } | null;
  jsonLd?: string | null;
}

const CACHE = { next: { revalidate: 300, tags: ["blogPost"] } };

const CARD_FIELDS = `_id, slug, title, subtitle, introductionheading, heroimage, cardimage`;

const BLOG_CARDS_QUERY = `*[${BLOG_FILTER} && defined(slug)] | order(_createdAt desc){ ${CARD_FIELDS} }`;

const BLOG_POST_QUERY = `*[${BLOG_FILTER} && slug == $slug] | order(${NEWEST_FIRST})[0]{
  ${CARD_FIELDS},
  blogheading,
  description,
  primaryimage,
  briefdescription,
  briefitemsarray,
  challengesfacedheading,
  chanllangesfaced,
  conclusionheading,
  conclusion,
  faqSection,
  webSeoMetadataSub,
  jsonLd
}`;

/** Every blog post as a card, newest first. */
export async function getBlogCards(): Promise<BlogCard[]> {
  try {
    return (await client.fetch<BlogCard[] | null>(BLOG_CARDS_QUERY, {}, CACHE)) ?? [];
  } catch (error) {
    reportSanityError("Loading blog posts", error);
    return [];
  }
}

/** One blog post by its address, or null if there is none. */
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    return await client.fetch<BlogPost | null>(BLOG_POST_QUERY, { slug }, CACHE);
  } catch (error) {
    reportSanityError("Loading blog post", error);
    return null;
  }
}

/** A random selection of other posts for the "More Articles" section. */
export async function getMoreArticles(currentSlug: string, count = 6): Promise<BlogCard[]> {
  const others = (await getBlogCards()).filter((post) => post.slug !== currentSlug);
  return others.sort(() => Math.random() - 0.5).slice(0, count);
}
