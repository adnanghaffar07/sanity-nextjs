import Link from "next/link";
import SanityImage from "@/components/ui/SanityImage";
import CarouselScrollButtons from "@/components/ui/CarouselScrollButtons";
import type { ValueBlueprintCard } from "@/sanity/lib/value-blueprints";

const SCROLL_CONTAINER_ID = "scrollContainer";

// "Explore Our Value BLUEPRINTS": a sideways-scrolling row of blueprint cards.
// Hovering a card shows the logos of the tools it uses.
export default function BlueprintCarousel({ cards }: { cards: ValueBlueprintCard[] }) {
  return (
    <section className="px-6 md:px-16 py-10 bg-white">
      <div className="flex flex-col max-w-[1400px] mx-auto">
        <h2 className="px-20 max-md:px-5 text-4xl text-center text-black capitalize leading-[60px]">
          <span className="font-medium">Explore Our Value </span>
          <span className="font-bold">BLUEPRINTS</span>
        </h2>
        <div className="relative h-auto flex flex-col justify-center overflow-hidden">
          <div
            id={SCROLL_CONTAINER_ID}
            className="flex overflow-x-auto overflow-y-hidden gap-5 h-auto justify-start md:pl-20 mt-8 max-md:flex-wrap max-md:pl-0 hide-scrollbar"
          >
            {cards.map((card) => (
              <Link key={card._id} href={`/value-blueprints/${card.slug}`} aria-label={`View details of ${card.title}`}>
                <div className="relative w-full sm:w-80 h-[320px] overflow-hidden group">
                  <SanityImage
                    image={card.image}
                    alt={card.title}
                    sizes="320px"
                    className="w-full sm:w-80 h-[320px] md:object-contain rounded-3xl transition duration-300 group-hover:scale-90"
                  />
                  <p className="absolute inset-x-0 top-4 max-w-[200px] text-white text-md font-light text-left ml-3 md:ml-10 py-3 z-10">
                    {card.title}
                  </p>
                  <div className="absolute inset-0 flex flex-col items-end rounded-3xl justify-start opacity-0 group-hover:opacity-100">
                    <div className="flex-col justify-start mt-8 mr-6">
                      {card.logos.map((logo, index) => (
                        <SanityImage
                          key={`${logo._id}-${index}`}
                          image={logo.image}
                          alt={logo.heading ?? ""}
                          sizes="64px"
                          className="h-8 w-auto mb-2 object-contain"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <CarouselScrollButtons scrollContainerId={SCROLL_CONTAINER_ID} totalItems={cards.length} itemsPerPage={3} />
        </div>
      </div>
    </section>
  );
}
