import type { ReactNode } from "react";
import SanityImage from "@/components/ui/SanityImage";
import type { LegacyService, SanityImage as SanityImageData } from "@/sanity/lib/legacy-services";

type Service = LegacyService;

// Two columns: text and an image (the image side and height vary).
function TwoColumns({ text, image, imageFirst, imageHeight }: { text: ReactNode; image?: SanityImageData; imageFirst?: boolean; imageHeight: string }) {
  const imageColumn = (
    <div className="flex justify-center">
      <SanityImage image={image} sizes="(min-width: 768px) 50vw, 100vw" className={`object-cover w-auto max-w-full ${imageHeight}`} />
    </div>
  );
  return (
    <section className="bg-white px-6 md:px-16 py-10 md:py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        {imageFirst && imageColumn}
        {text}
        {!imageFirst && imageColumn}
      </div>
    </section>
  );
}

function HeadingBlock({ heading, subHeading, paragraph }: { heading?: string; subHeading?: string; paragraph?: string }) {
  return (
    <>
      <h2 className="text-2xl font-bold mb-8 text-gray-800">{heading}</h2>
      <h3 className="text-xl font-bold mb-8 text-gray-800">{subHeading}</h3>
      <p className="text-lg text-gray-800">{paragraph}</p>
    </>
  );
}

// "Typical project cycle" text beside an image.
export function ProjectCycleQA({ section }: { section: NonNullable<Service["projectCycleQA"]> }) {
  return (
    <TwoColumns
      text={
        <div className="ml-4 md:ml-24 max-w-4xl">
          <HeadingBlock heading={section.heading} subHeading={section.subHeading} paragraph={section.paragraph} />
        </div>
      }
      image={section.projectCycleImg}
      imageHeight="h-[370px]"
    />
  );
}

// Project cycle stages as a list with round markers, beside an image.
export function ProjectCycleStages({ section }: { section: NonNullable<Service["projectCycleSection"]> }) {
  return (
    <TwoColumns
      text={
        <div className="ml-4 md:ml-24">
          <h2 className="text-2xl font-bold mb-8 text-gray-800">{section.projectCycleHaeding}</h2>
          <div className="ml-4">
            {section.projectCycle?.map((stage, index) => (
              <div key={index} className="flex items-center mb-8 relative">
                <div className="w-8 md:w-12 h-8 md:h-12 rounded-full bg-[#1D92FB] opacity-[0.14] ml-4 -left-4 md:-left-8 absolute" />
                <p className="text-lg font-medium text-gray-700 ml-4">{stage.detail}</p>
              </div>
            ))}
          </div>
        </div>
      }
      image={section.projectCycleImg}
      imageHeight="h-[370px]"
    />
  );
}

// QA delivery options: image, then text.
export function QaDelivery({ section }: { section: NonNullable<Service["qaDelivery"]> }) {
  return (
    <TwoColumns
      imageFirst
      text={
        <div className="mr-4 md:mr-24 max-w-3xl">
          <HeadingBlock heading={section.heading} subHeading={section.subHeading} paragraph={section.paragraph} />
        </div>
      }
      image={section.qaDeliveryleImg}
      imageHeight="h-[500px]"
    />
  );
}

// Delivery options: image, then a right-aligned list.
export function DeliveryOptions({ section }: { section: NonNullable<Service["deliveryOptionSection"]> }) {
  return (
    <TwoColumns
      imageFirst
      text={
        <div className="text-right mr-4 md:mr-24">
          <h2 className="text-2xl font-bold mb-8">{section.deliveryOptionHaeding}</h2>
          <div>
            {section.deliveryOption?.map((option, index) => (
              <div key={index} className="flex items-center mb-8 relative justify-end">
                <div className="w-6 md:w-10 h-6 md:h-10 rounded-full bg-[#1D92FB] opacity-[0.14] ml-4 absolute" />
                <p className="text-lg font-medium text-gray-700 mr-8">{option.detail}</p>
              </div>
            ))}
          </div>
        </div>
      }
      image={section.deliveryImg}
      imageHeight="h-[370px]"
    />
  );
}
