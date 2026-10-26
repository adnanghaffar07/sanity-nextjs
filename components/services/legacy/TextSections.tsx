import SanityImage from "@/components/ui/SanityImage";
import type { LegacyService, NumberedItem, SanityImage as SanityImageData } from "@/sanity/lib/legacy-services";
import { NumberedList, RichOrPlain, Tint } from "./primitives";

type Service = LegacyService;

// Introduction: optional image on the left, heading, text and a numbered list.
export function IntroSection({ intro, points }: { intro: NonNullable<Service["introductionSection"]>; points: string[] | null }) {
  const hasImage = Boolean(intro.introImage);

  return (
    <section className="relative bg-white px-6 py-10 md:px-16 md:py-16">
      <Tint />
      <div className={`container relative mx-auto flex flex-wrap items-center justify-center ${hasImage ? "" : "text-center"}`}>
        {hasImage && (
          <div className="mb-4 flex w-full justify-center md:w-1/3 md:pl-8 md:pr-8">
            <div className="group relative w-full h-[250px] md:h-[330px]">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#1D92FB] to-[#6BB8FF] opacity-20 blur-xl transition-opacity duration-500 group-hover:opacity-40" />
              <SanityImage
                image={intro.introImage}
                alt="Introduction visual"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="rounded-lg object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        )}

        {intro.introHeading && (
          <div className={`w-full ${hasImage ? "md:w-1/2" : "md:w-3/4"}`}>
            <div className="mx-auto max-w-5xl">
              <h2 className={`mb-8 text-2xl font-bold ${hasImage ? "text-center md:text-left" : "text-center"}`}>{intro.introHeading}</h2>
              <div className={`text-lg leading-relaxed text-gray-800 ${hasImage ? "text-center md:text-justify" : "text-center"}`}>
                <RichOrPlain blocks={intro.introDescBlock} text={intro.introDesc} />
              </div>

              {points?.length ? (
                <div className="mt-6 flex flex-col gap-4">
                  {points.map((point, index) => (
                    <div key={index} className={`flex gap-3 items-start ${hasImage ? "" : "justify-center"}`}>
                      <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#1D92FB]/10">
                        <span className="text-xs font-bold text-[#1D92FB]">{index + 1}</span>
                      </div>
                      <p className={`text-lg leading-relaxed text-gray-800 ${hasImage ? "text-left" : "text-center"}`}>{point}</p>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// Centred heading and paragraph with a small accent line.
export function DesignSection({ section }: { section: NonNullable<Service["designSection"]> }) {
  return (
    <section className="bg-white px-6 md:px-16 py-10 md:py-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-[#1D92FB]/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#1D92FB]/5 rounded-full blur-2xl" />
      <div className="container mx-auto relative flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-8 text-center">{section.heading}</h2>
        <div className="relative max-w-5xl">
          <div className="absolute left-1/2 -translate-x-1/2 -top-4 w-12 h-0.5 bg-[#1D92FB]" />
          <p className="text-lg text-center text-gray-800 leading-relaxed pt-4">{section.description}</p>
        </div>
      </div>
    </section>
  );
}

// Centred heading and paragraph (development, implementation and summary sections).
export function PlainTextSection({ heading, text, narrow }: { heading?: string; text?: string; narrow?: boolean }) {
  return (
    <section className="bg-white px-6 md:px-16 py-10 md:py-16">
      <div className={`container mx-auto ${narrow ? "max-w-6xl" : ""}`}>
        <h2 className="text-2xl font-bold mb-8 text-center">{heading}</h2>
        <p className="text-lg text-center">{text}</p>
      </div>
    </section>
  );
}

// Left-aligned heading and paragraph on a light blue band.
export function CallToActionSection({ section }: { section: NonNullable<Service["callToActionSection"]> }) {
  return (
    <section className="px-6 md:px-16 py-10 md:py-16 bg-blue-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl font-bold mb-4">{section.callToActionHeading}</h2>
        <p className="text-lg mb-8">{section.callToAction}</p>
      </div>
    </section>
  );
}

interface NumberedSectionProps {
  heading?: string;
  subheading?: string;
  subheadingAsTitle?: boolean;
  paragraph?: string;
  items?: NumberedItem[];
  image?: SanityImageData;
  imageAlt: string;
  imageSide: "left" | "right";
  tinted?: boolean;
  contained?: boolean;
}

// Heading block, then numbered steps beside an image
// ("Our development services", "Preferred choice", "Advantages").
export function NumberedSection({ heading, subheading, subheadingAsTitle, paragraph, items, image, imageAlt, imageSide, tinted, contained }: NumberedSectionProps) {
  const imageColumn = (
    <div className="md:w-1/2 flex justify-center">
      <SanityImage image={image} alt={imageAlt} sizes="(min-width: 768px) 38vw, 75vw" className="w-3/4 h-auto rounded-lg shadow-lg z-10 md:mt-0 mt-6" />
    </div>
  );
  const body = (
    <>
      <div className="justify-center text-center relative z-10 pb-10">
        <h2 className="text-3xl font-bold text-[#3C3C3C] mb-4 mx-auto max-w-3xl">{heading}</h2>
        {subheading &&
          (subheadingAsTitle ? (
            <h3 className="text-xl font-bold text-[#3C3C3C] mb-4 mx-auto max-w-3xl">{subheading}</h3>
          ) : (
            <p className="text-lg font-medium text-[#3C3C3C] mx-auto max-w-4xl">{subheading}</p>
          ))}
        {paragraph && <p className="text-lg font-medium text-[#3C3C3C] mx-auto max-w-4xl">{paragraph}</p>}
      </div>
      <div className="relative flex flex-col md:flex-row items-center justify-between z-10">
        {imageSide === "left" && imageColumn}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 md:pl-12">
          <NumberedList items={items ?? []} />
        </div>
        {imageSide === "right" && imageColumn}
      </div>
    </>
  );

  return (
    <section className={`px-6 py-10 md:px-16 md:py-16 ${tinted ? "relative" : ""}`}>
      {tinted && <Tint />}
      {contained ? <div className="max-w-7xl mx-auto">{body}</div> : body}
    </section>
  );
}
