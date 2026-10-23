import SanityImage from "@/components/ui/SanityImage";
import type { LegacyService } from "@/sanity/lib/legacy-services";
import { Tint } from "./primitives";

// Rows of 4, 3 and up to 4 logos (in 2 columns).
const ROWS: { start: number; end: number; columns: string }[] = [
  { start: 0, end: 4, columns: "grid-cols-4" },
  { start: 4, end: 7, columns: "grid-cols-3 mt-6" },
  { start: 7, end: 11, columns: "grid-cols-2 mt-6" },
];

// "Tools & Technologies" logos with their names (from the logo's description).
export function ToolLogos({ section }: { section: NonNullable<LegacyService["toolsLogoSection"]> }) {
  const logos = section.logoArray ?? [];
  if (logos.length === 0) return null;

  return (
    <section className="mx-auto px-6 md:px-16 bg-white max-w-6xl py-8">
      <h2 className="text-3xl font-bold text-center text-neutral-700">Tools & Technologies</h2>
      <h2 className="mt-4 text-lg font-medium mb-8 text-center text-neutral-700">
        We leverage industry-leading technologies and tools to create our Mobile Applications, including but not limited to
      </h2>
      {ROWS.map(({ start, end, columns }) => (
        <div key={start} className={`grid gap-4 justify-center ${columns}`}>
          {logos.slice(start, end).map((logo, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center justify-center md:space-x-4">
              <div className="w-fit flex items-center justify-center">
                <SanityImage image={logo} sizes="128px" className="h-10 md:h-16 w-auto object-cover" />
              </div>
              <span className="text-gray-900 mt-4 md:mt-0">{logo.alt}</span>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}

// Client logos under a title and description.
export function ClientLogos({ section }: { section: NonNullable<LegacyService["clientsSection"]> }) {
  return (
    <div className="relative">
      <Tint />
      <div className="flex flex-col justify-around px-6 py-10 md:px-8 md:py-16 max-w-9xl mx-auto relative">
        <div className="text-center text-neutral-700">
          <h2 className="text-3xl font-bold max-md:max-w-full">{section.sectionTitle}</h2>
          <p className="mt-4 text-lg font-medium max-md:max-w-full">{section.sectionDescription}</p>
        </div>
        <div className="flex flex-wrap gap-10 xl:gap-20 justify-center items-center mt-12 max-md:mt-10">
          {section.clientLogos?.map((logo, index) => (
            <SanityImage key={index} image={logo} alt={logo.altText} sizes="200px" className="object-cover h-8 xl:h-11 w-auto" />
          ))}
        </div>
      </div>
    </div>
  );
}
