import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import SanityImage from "@/components/ui/SanityImage";
import type { CaseStudyCard as CaseStudyCardData } from "@/sanity/lib/case-studies";
import { CATEGORY_BADGES, badgesOf } from "./categories";

// One case study card, used on /case-studies and in the case study section.
export default function CaseStudyCard({ card, imageSizes }: { card: CaseStudyCardData; imageSizes: string }) {
  const title = card.title || "Case study";

  return (
    <Link
      href={`/case-studies/${card.slug}`}
      className="group flex h-full flex-col rounded-3xl border border-gray-100 bg-white p-3 shadow-sm hover:-translate-y-1 hover:border-[#1D92FB]/30 hover:shadow-xl transition-all duration-300"
    >
      <div className="relative aspect-[1.52] overflow-hidden rounded-2xl bg-gray-50">
        <SanityImage
          image={card.image}
          alt={`${title} case study`}
          fill
          sizes={imageSizes}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span
          aria-hidden
          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-700 opacity-0 shadow-md backdrop-blur transition-all duration-300 group-hover:opacity-100 group-hover:rotate-45"
        >
          <ArrowUpRight className="w-5 h-5" />
        </span>
      </div>

      <div className="flex grow flex-col px-3 pb-3 pt-5">
        <Badges categories={card.categories} />
        <h3 className="mt-3 text-lg sm:text-xl font-semibold leading-snug text-black">{title}</h3>
        {card.description && (
          <p className="mt-2 grow text-[15px] leading-6 text-gray-600 line-clamp-2">{card.description}</p>
        )}
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1D92FB]">
          View case study
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden />
        </span>
      </div>
    </Link>
  );
}

function Badges({ categories }: { categories: string[] }) {
  const badges = badgesOf(categories);
  if (badges.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-1.5">
      {badges.map((category) => (
        <span
          key={category}
          className={`rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${
            category === "ai" ? "bg-[#f7e022]/30 text-[#7a6a00]" : "bg-[#EAF4FF] text-[#1D92FB]"
          }`}
        >
          {CATEGORY_BADGES[category]}
        </span>
      ))}
    </div>
  );
}
