// A legacy sub-service page (/services/<service>/<sub-service>) from a
// "Sub Service" document.

import SanityImage from "@/components/ui/SanityImage";
import type { LegacySubService } from "@/sanity/lib/legacy-services";
import { ExampleServicesSection, ToolsSection } from "./CardSections";
import { DeliveryOptions, ProjectCycleStages } from "./CycleSections";
import { PlainTextSection } from "./TextSections";

export default function LegacySubServicePage({ sub }: { sub: LegacySubService }) {
  const intro = sub.introductionSubSection;
  const offer = sub.specialOffersSubSection;

  return (
    <div className="bg-gray-100">
      <div className="flex overflow-hidden relative flex-col pb-12 w-full font-light text-white lg:min-h-[700px] max-md:max-w-full">
        <SanityImage image={sub.heroImageSub} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[#020C16] opacity-65" />
        <div className="flex relative flex-col items-center lg:px-20 px-5 lg:pt-12 lg:pb-0 pt-48 pb-36 w-full max-md:max-w-full flex-grow">
          <div className="lg:absolute lg:top-[300px]">
            <h1 className="lg:text-4xl text-2xl font-bold text-center capitalize lg:w-8/12 mx-auto">{sub.serviceTitleSub}</h1>
            <h2 className="lg:text-2xl text-base text-center mt-4 max-md:max-w-full lg:px-32">{sub.serviceDescSub}</h2>
          </div>
        </div>
      </div>

      <section className="px-6 md:px-16 py-10 md:py-16 bg-white">
        <div className="container mx-auto flex flex-wrap items-center justify-center">
          {intro?.introImage && (
            <div className="w-full md:relative md:right-[20px] md:w-1/2 md:flex md:pl-8 md:justify-start mb-4">
              <SanityImage image={intro.introImage} sizes="(min-width: 768px) 570px, 100vw" className="w-full max-w-[570px] h-auto" />
            </div>
          )}
          <div className={intro?.introImage ? "w-full md:w-1/2" : "w-full"}>
            <div className="max-w-2xl mb-6">
              <h2 className="text-2xl font-bold mb-8">{intro?.introHeading}</h2>
              <p className="text-lg text-gray-800 leading-relaxed text-justify">{intro?.introDesc}</p>
            </div>
          </div>
        </div>
      </section>

      <ToolsSection tools={sub.toolsTech} variant="detail" plain />
      {sub.exampleServicesSubSection && <ExampleServicesSection section={sub.exampleServicesSubSection} />}
      {sub.projectCycleSubSection && <ProjectCycleStages section={sub.projectCycleSubSection} />}
      {sub.deliveryOptionSubSection && <DeliveryOptions section={sub.deliveryOptionSubSection} />}

      <section className="px-6 md:px-16 py-10 md:py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-8">{offer?.offerHeading}</h2>
            <div className="bg-white shadow-md p-6 rounded-lg">
              <p className="text-lg font-semibold mb-4">{offer?.specialOffer}</p>
            </div>
          </div>
          <div className="flex justify-center">
            <SanityImage image={offer?.offerImg} sizes="270px" className="w-[270px] h-auto rounded-lg" />
          </div>
        </div>
      </section>

      <PlainTextSection heading={sub.summarySubSection?.summaryHeading} text={sub.summarySubSection?.summaryMessage} />

      <section className="px-6 md:px-16 py-10 md:py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">{sub.callToActionSubSection?.callToActionHeading}</h2>
          <p className="text-lg mb-8">{sub.callToActionSubSection?.callToAction}</p>
        </div>
      </section>
    </div>
  );
}
