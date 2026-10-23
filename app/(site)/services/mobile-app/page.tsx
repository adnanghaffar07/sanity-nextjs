import type { Metadata } from "next";
import LiveChatTawk from "@/components/layout/LiveChatTawk";
import StatsSection from "@/components/sections/StatsSection";
import MobileAppHeader from "@/components/services/mobile-app/MobileAppHeader";
import MobileAppHero from "@/components/services/mobile-app/MobileAppHero";
import { MobileAppConsultProvider } from "@/components/services/mobile-app/MobileAppConsult";
import MobileIndustries from "@/components/services/mobile-app/Industries";
import MobileServicesOverview from "@/components/services/mobile-app/MobileServicesOverview";
import MobileProcessSteps from "@/components/services/mobile-app/MobileProcessSteps";
import PortfolioSection from "@/components/services/mobile-app/PortfolioSection";
import WhyChoose from "@/components/services/mobile-app/WhyChoose";
import TechStackSection from "@/components/services/mobile-app/TechStackSection";
import AppCategoryTabs from "@/components/services/mobile-app/AppCategoryTabs";
import FreeTrial from "@/components/services/mobile-app/FreeTrial";
import CtaSection from "@/components/services/mobile-app/CtaSection";
import Testimonials from "@/components/services/mobile-app/Testimonials";
import FaqSection from "@/components/services/mobile-app/FaqSection";

const PAGE_URL = "https://codeautomation.ai/services/mobile-app";
const TITLE = "Custom Mobile App Development Services | CodeAutomation";
const DESCRIPTION =
  "We help entrepreneurs turn app ideas into scalable, secure mobile apps using native and cross-platform tech to maximize reach and ROI.";
const SHARE_IMAGE = "https://codeautomation.ai/thankyou.jpg";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: SHARE_IMAGE, width: 1200, height: 630, alt: "CodeAutomation Mobile App Development" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [SHARE_IMAGE] },
};

// Landing page with its own header; ads point here.
export default function MobileAppPage() {
  return (
    <MobileAppConsultProvider>
      <MobileAppHeader />
      <LiveChatTawk />
      <MobileAppHero />
      <StatsSection />
      <div id="industries">
        <MobileIndustries />
      </div>
      <MobileServicesOverview />
      <MobileProcessSteps />
      <div id="portfolio">
        <PortfolioSection />
      </div>
      <WhyChoose />
      <TechStackSection />
      <AppCategoryTabs />
      <FreeTrial />
      <CtaSection />
      <Testimonials />
      <FaqSection />
    </MobileAppConsultProvider>
  );
}
