import SanityImage from "@/components/ui/SanityImage";
import type { TextBlock } from "@/sanity/lib/value-blueprints";

// Heading and text on the left, image on the right, on a light blue band.
export default function TextImageSection({ block, textAlign }: { block: TextBlock | null; textAlign: "justify" | "center" }) {
  if (!block) return null;

  return (
    <div className="px-6 md:px-16 py-10 md:py-16 relative">
      <div className="absolute inset-0 bg-[#1D92FB] opacity-10 pointer-events-none" />
      <div className="max-w-7xl relative mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center md:text-left">{block.heading}</h2>
            <p className={`text-lg text-gray-800 leading-relaxed md:text-left ${textAlign === "justify" ? "text-justify" : "text-center"}`}>
              {block.text}
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8 md:flex md:justify-center">
          <SanityImage
            image={block.image}
            alt={block.heading ?? ""}
            sizes="(min-width: 768px) 520px, 100vw"
            className="object-cover rounded-lg w-full max-w-[520px] h-auto aspect-[13/8]"
          />
        </div>
      </div>
    </div>
  );
}
