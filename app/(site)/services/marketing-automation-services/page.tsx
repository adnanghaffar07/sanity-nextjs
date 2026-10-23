import type { Metadata } from "next";
import LiveChatTawk from "@/components/layout/LiveChatTawk";
import StatsSection from "@/components/sections/StatsSection";
import MarketingHeader from "@/components/services/marketing-automation/Header";
import MarketingAutomationHero from "@/components/services/marketing-automation/MarketingAutomationHero";
import PainPointsSection from "@/components/services/marketing-automation/PainPointsSection";
import ServicesSection from "@/components/services/marketing-automation/ServicesSection";
import ChannelCoverageSection from "@/components/services/marketing-automation/ChannelCoverageSection";
import TechStackSection from "@/components/services/marketing-automation/TechStackSection";
import ProcessSection from "@/components/services/marketing-automation/ProcessSection";
import ResultsSection from "@/components/services/marketing-automation/ResultsSection";
import WhyChooseUsSection from "@/components/services/marketing-automation/WhyChooseUsSection";
import IndustriesSection from "@/components/services/marketing-automation/IndustriesSection";
import CTABannerSection from "@/components/services/marketing-automation/CTABannerSection";
import ContactFormSection from "@/components/services/marketing-automation/ContactFormSection";

const PAGE_URL = "https://codeautomation.ai/services/marketing-automation-services";
const TITLE = "Marketing Automation Services | CodeAutomation";
const DESCRIPTION =
  "Turn your marketing into a revenue-generating machine with automated campaigns, lead nurturing and multi-channel workflows designed, built and deployed by CodeAutomation.";
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
    images: [{ url: SHARE_IMAGE, width: 1200, height: 630, alt: "CodeAutomation Marketing Automation Services" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [SHARE_IMAGE] },
};

// Landing page with its own header and contact form.
export default function MarketingAutomationPage() {
  return (
    <div className="w-full bg-white">
      <MarketingHeader />
      <LiveChatTawk />
      <MarketingAutomationHero />
      <StatsSection />
      <PainPointsSection />
      <ServicesSection />
      <ChannelCoverageSection />
      <TechStackSection />
      <ProcessSection />
      <ResultsSection />
      <WhyChooseUsSection />
      <IndustriesSection />
      <CTABannerSection />
      <ContactFormSection />
    </div>
  );
}
