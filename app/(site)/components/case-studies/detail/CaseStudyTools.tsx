import SanityImage from "@/components/ui/SanityImage";
import type { CaseStudy, TechLogo } from "@/sanity/lib/case-studies";

type ToolGroup = NonNullable<CaseStudy["tools"]>[number];

function Logos({ logos, className }: { logos: TechLogo[] | null; className: string }) {
  return (
    <>
      {logos?.map((logo) =>
        logo ? (
          <SanityImage key={logo._id} image={logo.image} alt={logo.heading ?? ""} sizes="112px" className={className} />
        ) : null
      )}
    </>
  );
}

// "Tools & Technologies Used": logo groups in rows on desktop, as cards on phones.
export default function CaseStudyTools({ heading, tools }: { heading: string | null; tools: ToolGroup[] | null }) {
  return (
    <section className="px-6 md:px-16 py-10 md:py-16 max-w-7xl mx-auto">
      <h2 className="md:text-4xl text-2xl font-semibold text-center my-4 md:my-8 font-klein">{heading}</h2>

      {tools && (
        <div className="container md:mt-10">
          <div className="hidden md:flex flex-col sm:flex-row sm:flex-wrap justify-center gap-y-5 md:gap-y-10">
            {tools.map((tool) => (
              <div key={tool._key} className="w-full m-1 md:m-4 sm:m-0 sm:w-1/2 lg:w-1/4">
                <div className="flex md:justify-center gap-2">
                  <div className="flex flex-row gap-x-3">
                    <Logos logos={tool.logos} className="h-10 md:h-14 w-auto object-contain" />
                  </div>
                  <div className="flex flex-col w-auto my-auto">
                    <h3 className="text-xl md:text-2xl tracking-wider font-bold font-klein">{tool.heading}</h3>
                    <p className="mt-1 text-lg tracking-wide">{tool.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:hidden">
            {tools.map((tool) => (
              <div
                key={tool._key}
                className="flex-1 sm:flex-none sm:w-[45%] m-2 p-3 border border-gray-200 rounded-lg shadow-sm flex items-center justify-center flex-col"
              >
                <div className="flex items-center justify-center mb-2 gap-2">
                  <Logos logos={tool.logos} className="h-10 md:h-12 w-auto object-contain" />
                </div>
                <div className="text-center">
                  <h3 className="text-base md:text-lg font-bold font-klein">{tool.heading}</h3>
                  <p className="text-sm md:text-base">{tool.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
