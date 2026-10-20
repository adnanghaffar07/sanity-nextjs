import Image from "next/image";
import { imageDimensions, isSvgImage, urlForImage } from "@/sanity/lib/image";
import type { TechLogo } from "@/sanity/lib/technologies";

const LOGO_HEIGHT = 56; // h-14

// The logos of one category, four per row, each with its name underneath.
export default function TechLogoGrid({ logos, side }: { logos: TechLogo[]; side: "left" | "right" }) {
  if (logos.length === 0) return null;

  return (
    <div
      className={`flex flex-wrap gap-3 mt-7 text-sm text-center text-black ${side === "left" ? "justify-start" : "justify-end"}`}
    >
      <ul className={`grid grid-cols-4 gap-4 sm:gap-5 ${side === "left" ? "sm:justify-center" : "justify-end"}`}>
        {logos.map((logo) => {
          const size = imageDimensions(logo.image);
          const width = size ? Math.round((LOGO_HEIGHT * size.width) / size.height) : LOGO_HEIGHT;
          return (
            <li key={logo._id} className={side === "left" ? "p-1 justify-center" : "p-1"}>
              <figure>
                <Image
                  src={urlForImage(logo.image)}
                  alt=""
                  width={width}
                  height={LOGO_HEIGHT}
                  unoptimized={isSvgImage(logo.image)}
                  className="h-14 w-auto object-cover mb-2 mx-auto"
                />
                <figcaption className="text-center">{logo.name}</figcaption>
              </figure>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
