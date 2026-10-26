import SanityImage from "@/components/ui/SanityImage";
import type { IconCard } from "@/sanity/lib/value-blueprints";

// A heading and a grid of icon cards that turn blue on hover
// (used for "Project Cycle" and "Service Delivery Options").
export default function IconCardGrid({ section }: { section: { heading: string | null; cards: IconCard[] } | null }) {
  if (!section) return null;

  return (
    <div className="px-6 md:px-16 py-10 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">{section.heading}</h2>
        <div className="flex flex-wrap justify-center">
          {section.cards.map((card) => (
            <div key={card._key} className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white shadow-xl p-6 rounded-lg flex flex-col h-full transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#1D92FB] group">
                <div className="flex justify-center mb-4">
                  <SanityImage
                    image={card.image}
                    alt={card.heading ?? ""}
                    sizes="96px"
                    className="h-12 w-auto object-cover transition-transform duration-300 ease-in-out group-hover:scale-90"
                  />
                </div>
                <h3 className="text-xl text-center font-semibold mb-4 transition-colors duration-300 ease-in-out group-hover:text-white">
                  {card.heading}
                </h3>
                <p className="text-gray-500 text-center transition-colors duration-300 ease-in-out group-hover:text-white">
                  {card.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
