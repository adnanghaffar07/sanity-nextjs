// "Sub-Services": automatic cards for the current service's sub-services.
// Combines, in one query:
//   • new Service Pages whose parent is this page (or the legacy service with
//     the same address — sub-services can move before their main service), and
//   • legacy sub-services still listed on the legacy version of this service.
// A moved sub-service replaces its legacy card in the same position, so the
// list stays complete at every stage of the migration.

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Layers } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { SERVICE_FETCH_OPTIONS } from "./links";
import { urlForImage } from "@/sanity/lib/image";
import type { LinkMap } from "./links";
import { SectionHeader, SectionShell } from "./primitives";

export type SubServicesData = {
  eyebrow?: string;
  heading?: string;
  intro?: unknown;
  linkLabel?: string;
  /** Dev preview only: sample cards instead of a live query. */
  previewItems?: SubServiceCard[];
};

type SubServiceCard = { key: string; href: string; title: string; description?: string; imageUrl?: string };

const imageOf = (image: any) => (image?.asset?._ref ? urlForImage(image).toString() : undefined);

async function loadCards(pageId?: string, pageSlug?: string): Promise<SubServiceCard[]> {
  if (!pageSlug) return [];
  const id = (pageId || "").replace(/^drafts\./, "");
  try {
    const { newSubs, legacySubs } = await client.fetch(
      `{
        "newSubs": *[_type == "servicePage" && defined(slug.current) &&
                     (parent._ref == $id || parent->urlPath == $slug)
                    ] | order(_createdAt asc){
          _id, title, "slug": slug.current, listing,
          "heroImage": coalesce(
            sections[_type == "spHero"][0].image,
            sections[_type in ["spHeroForm", "spHeroBanner"]][0].backgroundImage
          )
        },
        "legacySubs": *[_type == "logicalServices" && urlPath == $slug][0].subServices[]->{
          _id, urlPathSub, serviceCardSub, serviceDescSub, heroImageSub
        }
      }`,
      { id, slug: pageSlug },
      SERVICE_FETCH_OPTIONS
    );

    const toNewCard = (p: any): SubServiceCard => ({
      key: p._id,
      href: `/services/${pageSlug}/${p.slug}`,
      title: p.listing?.cardTitle || p.title,
      description: p.listing?.cardDescription,
      imageUrl: imageOf(p.heroImage),
    });

    const newBySlug = new Map<string, any>((newSubs || []).map((p: any) => [p.slug, p]));
    const used = new Set<string>();
    const cards: SubServiceCard[] = [];

    for (const legacy of legacySubs || []) {
      if (!legacy?.urlPathSub) continue;
      const moved = newBySlug.get(legacy.urlPathSub);
      if (moved) {
        cards.push(toNewCard(moved));
        used.add(moved.slug);
      } else {
        cards.push({
          key: legacy._id,
          href: `/services/${pageSlug}/${legacy.urlPathSub}`,
          title: legacy.serviceCardSub || legacy.urlPathSub,
          description: legacy.serviceDescSub,
          imageUrl: imageOf(legacy.heroImageSub),
        });
      }
    }
    for (const p of newSubs || []) {
      if (!used.has(p.slug)) cards.push(toNewCard(p));
    }
    return cards;
  } catch (error) {
    console.error("Error loading sub-services:", error);
    return [];
  }
}

export async function SubServicesSection({
  data,
  links,
  anchorId,
  pageId,
  pageSlug,
}: {
  data: SubServicesData;
  links: LinkMap;
  anchorId?: string;
  pageId?: string;
  pageSlug?: string;
}) {
  const cards = data.previewItems ?? (await loadCards(pageId, pageSlug));
  // Nothing to show yet (no sub-services): render nothing rather than an empty block.
  if (cards.length === 0) return null;
  const linkLabel = data.linkLabel?.trim() || "Learn more";

  return (
    <SectionShell anchorId={anchorId} className="bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-24">
        <SectionHeader eyebrow={data.eyebrow} heading={data.heading} intro={data.intro} links={links} />
        <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card) => (
            <li key={card.key}>
              <Link
                href={card.href}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm hover:-translate-y-1 hover:border-[#1D92FB]/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-video overflow-hidden bg-[#EAF4FF]">
                  {card.imageUrl ? (
                    <Image
                      src={card.imageUrl}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <span className="absolute inset-0 flex items-center justify-center text-[#1D92FB]">
                      <Layers className="h-10 w-10" aria-hidden />
                    </span>
                  )}
                </div>
                <div className="flex grow flex-col p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-black">{card.title}</h3>
                  {card.description && (
                    <p className="mt-2 grow text-[15px] leading-6 text-gray-600 line-clamp-3">{card.description}</p>
                  )}
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1D92FB]">
                    {linkLabel}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}
