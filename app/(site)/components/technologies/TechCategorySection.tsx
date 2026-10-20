import Image from "next/image";
import { imageDimensions, isSvgImage, urlForImage } from "@/sanity/lib/image";
import type { TechCategory } from "@/sanity/lib/technologies";
import intersectLeft from "@/public/intersect-left.png";
import intersectRight from "@/public/intersect-right.png";
import TechLogoGrid from "./TechLogoGrid";

// One technology category. The page alternates sides: text on the left with
// the illustration on the right, then the other way round.
export default function TechCategorySection({ category, side }: { category: TechCategory; side: "left" | "right" }) {
  const isLeft = side === "left";
  const decoration = isLeft ? intersectLeft : intersectRight;

  const text = (
    <div className={isLeft ? "xl:pl-20 lg:order-1 order-2 relative justify-center" : "lg:pl-20 relative"}>
      <Image
        src={decoration}
        alt=""
        className={`w-20 h-auto absolute ${isLeft ? "-left-5" : "-right-5"} top-0 lg:hidden block -z-10`}
      />
      <h2 className={`lg:text-5xl text-3xl mb-3 ${isLeft ? "" : "text-end"}`}>{category.name}</h2>
      <div className="mb-10">
        <p className={`lg:text-lg text-base ${isLeft ? "" : "text-end"}`}>{category.description}</p>
      </div>
      <TechLogoGrid logos={category.logos} side={side} />
    </div>
  );

  const size = imageDimensions(category.image);
  const illustration = (
    <div className={isLeft ? "text-center lg:order-2 order-1" : "text-center"}>
      {category.image && size && (
        <Image
          src={urlForImage(category.image)}
          alt={category.image.alt ?? ""}
          width={size.width}
          height={size.height}
          sizes="(min-width: 1024px) 440px, (min-width: 768px) 50vw, 75vw"
          unoptimized={isSvgImage(category.image)}
          className="lg:w-3/4 md:w-1/2 w-3/4 h-auto inline-block"
        />
      )}
    </div>
  );

  return (
    <section className={`max-w-full mx-auto relative ${isLeft ? "pt-8" : ""}`}>
      <Image
        src={decoration}
        alt=""
        className={`aspect-[1.22] absolute ${isLeft ? "left-0" : "right-0"} top-20 lg:block hidden`}
      />
      <div
        className={`flex flex-col w-full max-w-[1400px] max-md:max-w-full relative z-10 mx-auto ${isLeft ? "items-center justify-center" : "self-center"}`}
      >
        <div className="lg:px-10 px-5 w-full">
          <div className={`grid lg:grid-cols-2 gap-5 lg:py-12 py-8 ${isLeft ? "" : "xl:pr-20"}`}>
            {isLeft ? (
              <>
                {text}
                {illustration}
              </>
            ) : (
              <>
                {illustration}
                {text}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
