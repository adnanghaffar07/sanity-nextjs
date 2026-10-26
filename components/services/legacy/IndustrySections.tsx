import SanityImage from "@/components/ui/SanityImage";
import CarouselScrollButtons from "@/components/ui/CarouselScrollButtons";
import type { LegacyService } from "@/sanity/lib/legacy-services";
import { RichOrPlain, Tint } from "./primitives";

const SCROLL_CONTAINER_ID = "scrollContainer";

// "Industries & applications we QA": bullet cards on the left, image on the right.
export function IndustriesWeQA({ section }: { section: NonNullable<LegacyService["industriesWeQA"]> }) {
  const cardClass = "bg-white p-4 rounded-lg shadow-lg transform transition-transform hover:scale-105";

  return (
    <section className="relative px-6 md:px-16 py-16 bg-white">
      <Tint />
      <div className="flex flex-col items-center justify-center text-center mb-12 relative">
        <h2 className="text-3xl font-bold mb-4">{section.heading}</h2>
        <p className="text-lg text-gray-800 leading-relaxed max-w-3xl">{section.description}</p>
      </div>
      <div className="container mx-auto flex flex-wrap items-start justify-center relative max-w-7xl">
        <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col space-y-4">
          <h2 className="text-3xl font-bold mb-4">{section.bulletPointsHeading}</h2>
          {section.bulletPointsBlock?.length
            ? section.bulletPointsBlock.map((block, index) => (
                <div key={index} className={cardClass}>
                  <RichOrPlain blocks={block.bulletPointsBlock} />
                </div>
              ))
            : section.bulletPoints?.map((point, index) => (
                <div key={index} className={cardClass}>
                  <p className="text-[#3C3C3C] font-semibold">• {point}</p>
                </div>
              ))}
        </div>
        <div className="w-full md:w-1/2 lg:w-2/3 flex md:mt-0 mt-6 justify-center md:justify-end">
          <SanityImage image={section.image} alt="Industries we test" sizes="(min-width: 1024px) 66vw, 100vw" className="rounded-lg object-cover max-w-full h-auto" />
        </div>
      </div>
    </section>
  );
}

// "Industries we serve": numbered cards in a sideways-scrolling row.
export function IndustriesServe({ section }: { section: NonNullable<LegacyService["industriesServe"]> }) {
  const industries = section.bulletPoints ?? [];

  return (
    <section className="px-6 md:px-16 py-10 md:py-16">
      <div className="flex flex-col">
        <div className="px-20 max-md:px-5">
          <h2 className="font-bold text-2xl text-black text-center capitalize leading-[60px]">{section.heading}</h2>
          <p className="text-lg text-[#3C3C3C] leading-relaxed mb-3 text-center">{section.description}</p>
        </div>
        <div className="relative h-auto flex flex-col justify-center overflow-hidden">
          <div
            id={SCROLL_CONTAINER_ID}
            className="flex gap-5 h-auto justify-start pl-20 mt-6 max-md:flex-wrap max-md:pl-5 hide-scrollbar overflow-x-auto"
          >
            {industries.map((industry, index) => (
              <div
                key={index}
                className="h-auto flex-shrink-0 w-full sm:w-80 lg:w-1/4 bg-[#FBFBFB] border border-gray-300 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 relative"
                style={{ minWidth: "calc(100% / 4 - 20px)" }}
              >
                <div className="absolute top-6 left-6 rounded-lg bg-[#1D92FB] text-white text-xl font-bold px-4 py-2">{index + 1}</div>
                <div className="px-5 py-7 pt-16 mt-6">
                  <h3 className="text-xl font-semibold text-[#3C3C3C] mb-4">{industry.heading}</h3>
                  {industry.bulletPointsBlock?.length ? (
                    <div className="prose text-[#3C3C3C]">
                      <RichOrPlain blocks={industry.bulletPointsBlock} />
                    </div>
                  ) : (
                    <ul className="list-disc pl-5 space-y-2 text-[#3C3C3C]">
                      {industry.bulletPoints?.map((bullet, bulletIndex) => (
                        <li key={bulletIndex}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
          <CarouselScrollButtons scrollContainerId={SCROLL_CONTAINER_ID} totalItems={industries.length} itemsPerPage={3} />
        </div>
      </div>
    </section>
  );
}
