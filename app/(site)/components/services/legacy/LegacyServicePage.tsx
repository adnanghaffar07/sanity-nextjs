// A legacy service page: every section the "Logical Services" document has
// content for, in a fixed order.

import type { LegacyService } from "@/sanity/lib/legacy-services";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import ServiceHero from "./ServiceHero";
import ServiceAccordion from "./ServiceAccordion";
import ServiceFaq from "./ServiceFaq";
import PricingSection from "./PricingSection";
import { ClientLogos, ToolLogos } from "./LogoSections";
import { CallToActionSection, DesignSection, IntroSection, NumberedSection, PlainTextSection } from "./TextSections";
import { CtaBanner, SpecialOfferBanner, UpdatedSpecialOfferBanner } from "./BannerSections";
import { ContentItemsSection, ExampleServicesSection, SubServiceCards, ToolsSection } from "./CardSections";
import { IndustriesServe, IndustriesWeQA } from "./IndustrySections";
import { DeliveryOptions, ProjectCycleQA, ProjectCycleStages, QaDelivery } from "./CycleSections";

export default function LegacyServicePage({ service: s }: { service: LegacyService }) {
  // The "turn vision" and "transform business" banners show their image only
  // when the page also has a special offer image (as they always have).
  const bannerImages = Boolean(s.specialOffersSection?.offerImg);

  return (
    <div className="bg-white">
      {s.jsonLd && (
        <script
          type="application/ld+json"
          // Escape "<" so content can never close the script tag.
          dangerouslySetInnerHTML={{ __html: s.jsonLd.replace(/</g, "\\u003c") }}
        />
      )}
      <ServiceHero service={s} />
      {s.toolsLogoSection && <ToolLogos section={s.toolsLogoSection} />}
      {s.clientsSection && <ClientLogos section={s.clientsSection} />}
      {s.introductionSection && <IntroSection intro={s.introductionSection} points={s.introductionDescArray} />}
      {s.designSection && <DesignSection section={s.designSection} />}
      {s.customSoftwareSection && <ServiceAccordion section={s.customSoftwareSection} imageSide="left" />}
      {s.customSoftwareDev && (
        <NumberedSection
          heading={s.customSoftwareDev.heading}
          subheading={s.customSoftwareDev.subheading}
          paragraph={s.customSoftwareDev.paragraph}
          items={s.customSoftwareDev.items}
          image={s.customSoftwareDev.image}
          imageAlt={s.customSoftwareDev.image?.alt ?? ""}
          imageSide="right"
          tinted
          contained
        />
      )}
      {s.turnVision && <CtaBanner banner={s.turnVision} showImage={bannerImages} action="consultation" compactImage />}
      {s.transBusiness && s.showCaseStudies !== true && (
        <div className="px-6 md:px-16 py-10 md:py-16">
          <h2 className="text-3xl text-center font-bold text-[#3C3C3C]">Showcasing Our Success Stories</h2>
          <CaseStudiesSection />
        </div>
      )}
      {s.provenProcessSection && <ServiceAccordion section={s.provenProcessSection} imageSide="left" tinted />}
      {s.developmentSection && <PlainTextSection heading={s.developmentSection.heading} text={s.developmentSection.description} />}
      {s.implementationSection && <PlainTextSection heading={s.implementationSection.heading} text={s.implementationSection.description} />}
      {s.contentItems && <ContentItemsSection service={s} />}
      {s.subServiceCards && <SubServiceCards service={s} />}
      {s.ctaAfterSubServices && <CtaBanner banner={s.ctaAfterSubServices} showImage action="consultation" narrowButton />}
      {s.industriesWeQA && <IndustriesWeQA section={s.industriesWeQA} />}
      {s.industriesServe && <IndustriesServe section={s.industriesServe} />}
      {s.toolsTech && <ToolsSection tools={s.toolsTech} variant="detail" />}
      {s.updatedToolsTech && <ToolsSection tools={s.updatedToolsTech} variant="bullets" />}
      {s.exampleServicesSection && <ExampleServicesSection section={s.exampleServicesSection} />}
      {s.mobileAppServiceSection && <ServiceAccordion section={s.mobileAppServiceSection} imageSide="left" />}
      {s.secondMobileAppAcc && <ServiceAccordion section={s.secondMobileAppAcc} imageSide="right" tinted wideDescription />}
      {s.transBusiness && <CtaBanner banner={s.transBusiness} showImage={bannerImages} action="contact-form" />}
      {s.preferredChoice && (
        <NumberedSection
          heading={s.preferredChoice.heading}
          subheading={s.preferredChoice.subheading}
          subheadingAsTitle
          paragraph={s.preferredChoice.paragraph}
          items={s.preferredChoice.items}
          image={s.preferredChoice.image}
          imageAlt="Software Development Services"
          imageSide="right"
        />
      )}
      {s.pricingSection && <PricingSection pricing={s.pricingSection} />}
      {s.advantagesOfQA && (
        <NumberedSection
          heading={s.advantagesOfQA.heading}
          subheading={s.advantagesOfQA.subheading}
          items={s.advantagesOfQA.items}
          image={s.advantagesOfQA.image}
          imageAlt="Advantages of Our QA"
          imageSide="left"
          tinted
        />
      )}
      {s.projectCycleQA && <ProjectCycleQA section={s.projectCycleQA} />}
      {s.projectCycleSection && <ProjectCycleStages section={s.projectCycleSection} />}
      {s.qaDelivery && <QaDelivery section={s.qaDelivery} />}
      {s.deliveryOptionSection && <DeliveryOptions section={s.deliveryOptionSection} />}
      {s.specialOffersSection?.offerHeading && <SpecialOfferBanner offer={s.specialOffersSection} />}
      {s.UpdatedSpecialOffersSection?.offerHeading && <UpdatedSpecialOfferBanner offer={s.UpdatedSpecialOffersSection} />}
      {s.summarySection?.summaryHeading && (
        <PlainTextSection heading={s.summarySection.summaryHeading} text={s.summarySection.summaryMessage} narrow />
      )}
      {s.callToActionSection?.callToActionHeading && <CallToActionSection section={s.callToActionSection} />}
      {s.faqSection && <ServiceFaq faqSection={s.faqSection} />}
    </div>
  );
}
