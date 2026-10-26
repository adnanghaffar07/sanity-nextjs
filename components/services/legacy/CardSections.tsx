import Link from "next/link";
import SanityImage from "@/components/ui/SanityImage";
import type { LegacyService, TechLogo, ToolCard } from "@/sanity/lib/legacy-services";
import { CardRow, Tint } from "./primitives";

function SectionHeading({ heading, description }: { heading: string | null; description: string | null }) {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-center">{heading}</h2>
      <p className="text-lg mb-10 max-w-3xl text-center mx-auto">{description}</p>
    </>
  );
}

function Logos({ logos, className, wrapperClassName }: { logos: TechLogo[]; className: string; wrapperClassName?: string }) {
  return (
    <>
      {logos.map((logo, index) => (
        <div key={`${logo._id}-${index}`} className={wrapperClassName}>
          <SanityImage image={logo.image} alt={logo.image?.alt || logo.heading || ""} sizes="80px" className={`${className} w-auto object-cover`} />
        </div>
      ))}
    </>
  );
}

// Image cards with a heading and text (CMS service pages).
export function ContentItemsSection({ service }: { service: LegacyService }) {
  return (
    <section className="px-6 md:px-16 py-10 md:py-16 bg-white">
      <div className="container mx-auto">
        <SectionHeading heading={service.subServiceHeading} description={service.subServiceDesc} />
        <CardRow>
          {service.contentItems?.map((item, index) => (
            <div key={index} className="bg-white shadow-md md:h-[350px] h-[370px] w-auto sm:w-[400px] rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
              <div className="relative w-full h-40">
                <SanityImage image={item.cmsImage} fill sizes="400px" className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-center mb-4">{item.heading}</h3>
                <p className="text-gray-700 text-center">{item.description}</p>
              </div>
            </div>
          ))}
        </CardRow>
      </div>
    </section>
  );
}

// Cards linking to this service's sub-service pages.
export function SubServiceCards({ service }: { service: LegacyService }) {
  return (
    <section className="px-6 md:px-16 py-10 md:py-16 bg-white">
      <div className="container mx-auto">
        <SectionHeading heading={service.subServiceHeading} description={service.subServiceDesc} />
        <CardRow>
          {service.subServiceCards?.map((sub) => (
            <Link key={sub._id} href={`/services/${service.urlPath}/${sub.urlPathSub}`}>
              <div className="bg-white shadow-md w-auto sm:w-[400px] rounded-lg overflow-hidden hover:shadow-lg transition duration-300 h-full">
                <div className="relative w-full h-40">
                  <SanityImage image={sub.heroImageSub} alt={sub.serviceCardSub ?? ""} fill sizes="400px" className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-center mb-4">
                    <Logos logos={sub.logos} className="h-10" wrapperClassName="mr-2" />
                    <h3 className="text-xl font-semibold text-center">{sub.serviceCardSub}</h3>
                  </div>
                  <p className="text-gray-700 text-center">{sub.serviceDescSub}</p>
                </div>
              </div>
            </Link>
          ))}
        </CardRow>
      </div>
    </section>
  );
}

// Tool cards: logos, name and either a sentence or a bullet list.
interface ToolsSectionProps {
  tools: { heading: string | null; description: string | null; cards: ToolCard[] | null };
  variant: "detail" | "bullets";
  /** Sub-service pages show the cards without the blue band. */
  plain?: boolean;
}

export function ToolsSection({ tools, variant, plain }: ToolsSectionProps) {
  return (
    <section className="relative px-6 md:px-16 py-16">
      {!plain && <Tint />}
      <div className="container mx-auto relative">
        <h2 className="text-2xl text-center font-bold mb-4">{tools.heading}</h2>
        {tools.description && <p className="text-lg text-[#3C3C3C] leading-relaxed max-w-5xl text-center mb-8 mx-auto">{tools.description}</p>}
        {tools.cards && (
          <CardRow>
            {tools.cards.map((tool, index) => (
              <div key={index} className="bg-white shadow-md p-6 w-auto sm:w-[400px] rounded-lg flex flex-col h-full">
                <div className={`flex flex-row ${variant === "detail" ? "justify-center" : ""}`}>
                  <Logos logos={tool.logos} className="h-8 mb-2 mr-2" />
                </div>
                {variant === "detail" ? (
                  <>
                    <h3 className="text-xl text-center font-semibold mb-4">{tool.heading}</h3>
                    <p className="text-gray-700 text-center">{tool.detail}</p>
                  </>
                ) : (
                  <>
                    <h3 className="text-xl font-semibold mb-4">{tool.heading}</h3>
                    <ul className="list-disc ml-5">
                      {tool.description?.map((text, textIndex) => (
                        <li key={textIndex} className="text-gray-700 mb-2">
                          {text}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            ))}
          </CardRow>
        )}
      </div>
    </section>
  );
}

// "Use cases": grey cards with a heading and text.
export function ExampleServicesSection({ section }: { section: NonNullable<LegacyService["exampleServicesSection"]> }) {
  return (
    <section className="bg-white px-6 md:px-16 py-10 md:py-16">
      <div className="container mx-auto">
        <h2 className="text-2xl text-center font-bold mb-8">{section.exampleServiceHeading}</h2>
        {section.exampleServicedesc && <p className="text-xl text-center font-light mb-8">{section.exampleServicedesc}</p>}
        {section.exampleService && (
          <CardRow>
            {section.exampleService.map((example, index) => (
              <div key={index} className="bg-gray-100 shadow-md p-6 w-auto sm:w-[400px] rounded-lg flex flex-col h-full">
                <h3 className="text-xl text-center font-semibold">{example.heading}</h3>
                <p className="text-gray-700 mt-4 text-center">{example.detail}</p>
              </div>
            ))}
          </CardRow>
        )}
      </div>
    </section>
  );
}
