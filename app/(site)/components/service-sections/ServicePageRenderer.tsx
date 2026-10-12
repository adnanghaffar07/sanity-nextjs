// Renders a new section-based Service Page (Sanity type `servicePage`).

import type { LinkMap } from "./links";
import {
  HeroSection,
  IntroSection,
  ProblemSection,
  ServicesGridSection,
  ImageCardsSection,
} from "./sections-top";
import {
  IconGridSection,
  ComparisonSection,
  CtaBannerSection,
  IndustriesSection,
  ProcessSection,
} from "./sections-middle";
import {
  InsteadOfSection,
  BenefitsSection,
  TechStackSection,
  FaqSection,
  FinalCtaSection,
} from "./sections-bottom";
import { HeroFormSection, HeroBannerSection } from "./sections-hero-form";
import { SubServicesSection } from "./sections-subservices";

// Sanity section type → component. Keep in sync with
// sanity/schemas/service-page/sections.ts (SECTION_TYPES).
// (Some sections are async server components, e.g. Sub-Services.)
const SECTION_COMPONENTS: Record<string, (props: any) => any> = {
  spHero: HeroSection,
  spHeroForm: HeroFormSection,
  spHeroBanner: HeroBannerSection,
  spIntro: IntroSection,
  spProblem: ProblemSection,
  spServicesGrid: ServicesGridSection,
  spImageCards: ImageCardsSection,
  spIconGrid: IconGridSection,
  spComparison: ComparisonSection,
  spCtaBanner: CtaBannerSection,
  spIndustries: IndustriesSection,
  spProcess: ProcessSection,
  spInsteadOf: InsteadOfSection,
  spBenefits: BenefitsSection,
  spTechStack: TechStackSection,
  spFaq: FaqSection,
  spFinalCta: FinalCtaSection,
  spSubServices: SubServicesSection,
};

export type ServiceSection = { _key: string; _type: string; hidden?: boolean; anchorId?: string } & Record<string, any>;

export default function ServicePageRenderer({
  sections,
  links,
  pageTitle,
  pageId,
  pageSlug,
}: {
  sections: ServiceSection[] | undefined;
  links: LinkMap;
  /** Page title, passed to sections that need it (e.g. the lead form). */
  pageTitle?: string;
  /** Page id + address, used by the automatic Sub-Services section. */
  pageId?: string;
  pageSlug?: string;
}) {
  return (
    <main className="w-full bg-white">
      {(sections || [])
        .filter((section) => !section.hidden)
        .map((section) => {
          const Component = SECTION_COMPONENTS[section._type];
          if (!Component) {
            if (process.env.NODE_ENV !== "production") {
              console.warn(`No component for service page section "${section._type}"`);
            }
            return null;
          }
          return <Component key={section._key} data={section} links={links} anchorId={section.anchorId} pageTitle={pageTitle} pageId={pageId} pageSlug={pageSlug} />;
        })}
    </main>
  );
}
