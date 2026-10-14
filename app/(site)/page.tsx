// Home page. Each section is its own component in ./components/home; the
// testimonials and FAQs come from the "Home Page" document in Sanity.

import type { Metadata } from "next";
import Image from "next/image";
import { getHomePageContent } from "@/sanity/lib/home";
import ellipse from "@/public/ellipse-1.png";
import ScrollAnimation from "./components/ScrollAnimation";
import StatsSection from "./components/StatsSection";
import CaseStudiesHome from "./components/CaseStudies-Home";
import HomeHero from "./components/home/HomeHero";
import TrustBadges from "./components/home/TrustBadges";
import WhyTrustedSection from "./components/home/WhyTrustedSection";
import ExpertiseSection from "./components/home/ExpertiseSection";
import ServicesOverview from "./components/home/ServicesOverview";
import WhoWeAre from "./components/home/WhoWeAre";
import WhyChooseUs from "./components/home/WhyChooseUs";
import DevelopmentApproach from "./components/home/DevelopmentApproach";
import ConsultationCta from "./components/home/ConsultationCta";
import ProcessSection from "./components/home/ProcessSection";
import TechnologiesSection from "./components/home/TechnologiesSection";
import TestimonialsSection from "./components/home/TestimonialsSection";
import FaqSection from "./components/home/FaqSection";
import HomeStructuredData from "./components/home/HomeStructuredData";

// Static page, refreshed every 5 minutes or right away via the /api/revalidate webhook.
export const revalidate = 300;

const TITLE = "Custom Software & AI Development Company | CodeAutomation.ai";
const DESCRIPTION =
  "Naperville, IL-based AI agent and custom software development company. Trusted by 200+ global clients. Book a free strategy session today.";

// Nested metadata objects replace the layout's, so Open Graph is complete here.
export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: TITLE,
    description: "Naperville, IL-based AI agent and custom software development company.",
    images: [{ url: "/thankyou.jpg", width: 1200, height: 630, alt: "CodeAutomation" }],
  },
};

export default async function Home() {
  const { testimonials, faqs } = await getHomePageContent();

  return (
    <>
      <HomeStructuredData title={TITLE} description={DESCRIPTION} faqs={faqs} />

      <HomeHero />
      <StatsSection />
      <TrustBadges />

      <ScrollAnimation>
        <WhyTrustedSection />
      </ScrollAnimation>

      <div className="max-w-full mx-auto relative max-w-[1920px]">
        <Image src={ellipse} alt="" width={160} height={160} className="w-40 absolute left-0 top-0" />

        <ExpertiseSection />

        <ScrollAnimation>
          <ServicesOverview />
        </ScrollAnimation>
        <ScrollAnimation>
          <WhoWeAre />
        </ScrollAnimation>
        <ScrollAnimation>
          <WhyChooseUs />
        </ScrollAnimation>
        <ScrollAnimation>
          <ConsultationCta />
        </ScrollAnimation>
        <ScrollAnimation>
          {/* Same spacing the section had before its duplicate heading was removed. */}
          <div className="flex flex-col self-center w-full mx-auto py-6 md:py-16 px-6 lg:px-10">
            <CaseStudiesHome />
          </div>
        </ScrollAnimation>
        <ScrollAnimation>
          <DevelopmentApproach />
        </ScrollAnimation>
        <ScrollAnimation>
          <ProcessSection />
        </ScrollAnimation>

        <TestimonialsSection testimonials={testimonials} />

        <ScrollAnimation>
          <TechnologiesSection />
        </ScrollAnimation>
        <ScrollAnimation>
          <FaqSection faqs={faqs} />
        </ScrollAnimation>
      </div>
    </>
  );
}
