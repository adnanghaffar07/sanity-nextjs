import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getCaseStudyCards } from "@/sanity/lib/case-studies";
import CaseStudyCard from "@/components/case-studies/CaseStudyCard";

const CARD_COUNT = 6;

function ViewAllLink({ className }: { className: string }) {
  return (
    <Link
      href="/case-studies"
      className={`group items-center gap-2 rounded-lg bg-[#1D92FB] px-6 py-3 font-semibold text-white shadow-lg shadow-[#1D92FB]/25 hover:bg-blue-600 transition-colors ${className}`}
    >
      View All Case Studies
      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden />
    </Link>
  );
}

// The first six case studies, shown on the home, pricing, offshore and service pages.
export default async function CaseStudiesSection() {
  const cards = (await getCaseStudyCards()).slice(0, CARD_COUNT);

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-[#F7F9FC] to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 md:py-20">
        {/* Header: copy on the left, button on the right */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-12">
          <div className="max-w-3xl text-center lg:text-left mx-auto lg:mx-0">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#1D92FB]">Case Studies</span>
            <h2 className="mt-3 font-bold text-black text-2xl lg:text-3xl xl:text-4xl leading-tight">
              Transformative Software Development Case Studies
            </h2>
            <p className="mt-4 text-base md:text-lg leading-7 text-gray-600">
              Explore the impactful results of our expertise in software development. Each project in our portfolio
              reflects our commitment to excellence. Discover how we&rsquo;ve driven success for businesses like yours
              through our detailed case studies.
            </p>
          </div>
          <ViewAllLink className="hidden lg:inline-flex shrink-0 lg:ml-auto" />
        </div>

        {/* Cards: swipeable row on phones, grid from tablet up */}
        <ul className="mt-10 md:mt-12 -mx-6 px-6 sm:mx-0 sm:px-0 flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 overflow-x-auto sm:overflow-visible snap-x snap-mandatory pb-4 sm:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {cards.map((card) => (
            <li key={card._id} className="w-[85%] sm:w-auto shrink-0 snap-start">
              <CaseStudyCard card={card} imageSizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 85vw" />
            </li>
          ))}
        </ul>

        {/* Button below the grid on phones/tablets */}
        <div className="mt-8 flex justify-center lg:hidden">
          <ViewAllLink className="inline-flex" />
        </div>
      </div>
    </section>
  );
}
