import type { TechLogo } from "@/sanity/lib/technologies";
import SanityLogo from "../SanityLogo";

// The logos of one category, four per row, each with its name underneath.
export default function TechLogoGrid({ logos, side }: { logos: TechLogo[]; side: "left" | "right" }) {
  if (logos.length === 0) return null;

  return (
    <div
      className={`flex flex-wrap gap-3 mt-7 text-sm text-center text-black ${side === "left" ? "justify-start" : "justify-end"}`}
    >
      <ul className={`grid grid-cols-4 gap-4 sm:gap-5 ${side === "left" ? "sm:justify-center" : "justify-end"}`}>
        {logos.map((logo) => (
          <li key={logo._id} className={side === "left" ? "p-1 justify-center" : "p-1"}>
            <figure>
              <SanityLogo logo={logo} height={56} alt="" className="h-14 w-auto object-cover mb-2 mx-auto" />
              <figcaption className="text-center">{logo.name}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
}
