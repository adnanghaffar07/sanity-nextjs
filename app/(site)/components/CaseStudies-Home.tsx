import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { CASE_STUDY_CARDS_QUERY, sortCaseStudyCards } from "@/sanity/lib/content";

async function getData() {
  try {
    const result = await client.fetch(CASE_STUDY_CARDS_QUERY, {}, { cache: "no-store" });
    return sortCaseStudyCards(result).map((card) => ({ ...card, alt: card.cardImage?.alt }));
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

const getDescriptionText = (value: any) => {
  if (typeof value === "string") return value;
  if (Array.isArray(value)) {
    return value
      .map((block) =>
        Array.isArray(block?.children)
          ? block.children.map((child: any) => child?.text || "").join("")
          : ""
      )
      .filter(Boolean)
      .join(" ");
  }
  return "";
};

// Same labels as the badges on the Case Studies page.
const GROUP_BADGES: Record<string, string> = {
  app: "Mobile App",
  web: "Web App",
  qa: "QA & Testing",
  shopify: "Ecommerce",
  ai: "AI & Automation",
};

const badgesOf = (group: unknown) =>
  String(group ?? "")
    .split(",")
    .map((g) => g.trim().toLowerCase())
    .filter((g) => GROUP_BADGES[g]);

const CaseStudiesHome = async () => {
  const data = await getData();
  const cards = data.slice(0, 6);

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-[#F7F9FC] to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 md:py-20">
        {/* Header: copy on the left, CTA on the right */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-12">
          <div className="max-w-3xl text-center lg:text-left mx-auto lg:mx-0">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#1D92FB]">
              Case Studies
            </span>
            <h2 className="mt-3 font-bold text-black text-2xl lg:text-3xl xl:text-4xl leading-tight">
              Transformative Software Development Case Studies
            </h2>
            <p className="mt-4 text-base md:text-lg leading-7 text-gray-600">
              Explore the impactful results of our expertise in software
              development. Each project in our portfolio reflects our commitment
              to excellence. Discover how we&rsquo;ve driven success for
              businesses like yours through our detailed case studies.
            </p>
          </div>
          <Link
            href="/case-studies"
            className="group hidden lg:inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#1D92FB] px-6 py-3 font-semibold text-white shadow-lg shadow-[#1D92FB]/25 hover:bg-blue-600 transition-colors lg:ml-auto"
          >
            View All Case Studies
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden />
          </Link>
        </div>

        {/* Cards: swipeable row on phones, grid from tablet up */}
        <ul className="mt-10 md:mt-12 -mx-6 px-6 sm:mx-0 sm:px-0 flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 overflow-x-auto sm:overflow-visible snap-x snap-mandatory pb-4 sm:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {cards.map((item: any, index: number) => {
            const badges = badgesOf(item.group);
            const description = getDescriptionText(item.cardDescription);
            const title = item.cardTitle || "Case study";
            return (
              <li
                key={item._key ?? item.url ?? index}
                className="w-[85%] sm:w-auto shrink-0 snap-start"
              >
                <Link
                  href={`/case-studies/${item.url}`}
                  className="group flex h-full flex-col rounded-3xl border border-gray-100 bg-white p-3 shadow-sm hover:-translate-y-1 hover:border-[#1D92FB]/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-gray-50">
                    {item.cardImage && (
                      <Image
                        src={urlForImage(item.cardImage).toString()}
                        alt={item.alt || `${title} case study`}
                        width={454}
                        height={300}
                        sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 85vw"
                        className="aspect-[1.52] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                    <span
                      aria-hidden
                      className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-700 opacity-0 shadow-md backdrop-blur transition-all duration-300 group-hover:opacity-100 group-hover:rotate-45"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </span>
                  </div>

                  <div className="flex grow flex-col px-3 pb-3 pt-5">
                    {badges.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {badges.map((g) => (
                          <span
                            key={g}
                            className={`rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${
                              g === "ai"
                                ? "bg-[#f7e022]/30 text-[#7a6a00]"
                                : "bg-[#EAF4FF] text-[#1D92FB]"
                            }`}
                          >
                            {GROUP_BADGES[g]}
                          </span>
                        ))}
                      </div>
                    )}
                    <h3 className="mt-3 text-lg sm:text-xl font-semibold leading-snug text-black">
                      {title}
                    </h3>
                    {description && (
                      <p className="mt-2 grow text-[15px] leading-6 text-gray-600 line-clamp-2">
                        {description}
                      </p>
                    )}
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1D92FB]">
                      View case study
                      <ArrowRight
                        className="w-4 h-4 transition-transform group-hover:translate-x-1"
                        aria-hidden
                      />
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA below the grid on phones/tablets */}
        <div className="mt-8 flex justify-center lg:hidden">
          <Link
            href="/case-studies"
            className="group inline-flex items-center gap-2 rounded-lg bg-[#1D92FB] px-6 py-3 font-semibold text-white shadow-lg shadow-[#1D92FB]/25 hover:bg-blue-600 transition-colors"
          >
            View All Case Studies
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesHome;
