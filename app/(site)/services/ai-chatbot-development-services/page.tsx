import type { Metadata } from "next";
import HeroSection from "./components/HeroSection";
import IntroSection from "./components/IntroSection";
import ProblemSection from "./components/ProblemSection";
import ServicesSection from "./components/ServicesSection";
import ChatbotTypesSection from "./components/ChatbotTypesSection";
import CapabilitiesSection from "./components/CapabilitiesSection";
import ChatbotVsAgentSection from "./components/ChatbotVsAgentSection";
import MidPageCTASection from "./components/MidPageCTASection";
import IndustriesSection from "./components/IndustriesSection";
import ProcessSection from "./components/ProcessSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import BenefitsSection from "./components/BenefitsSection";
import TechnologiesSection from "./components/TechnologiesSection";
import FAQSection from "./components/FAQSection";
import FinalCTASection from "./components/FinalCTASection";

const PAGE_URL = "https://codeautomation.ai/services/ai-chatbot-development-services";
const TITLE = "AI Chatbot Development Services | AI Chatbot Solutions";
const DESCRIPTION =
  "Work with a trusted AI chatbot development company to build AI chatbot solutions trained on your data and connected to your CRM. Book a free call.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "AI chatbot development services",
    "AI chatbot solutions",
    "AI chatbot development company",
    "custom AI chatbot",
    "CodeAutomation",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "https://codeautomation.ai/thankyou.jpg",
        width: 1200,
        height: 630,
        alt: "CodeAutomation AI Chatbot Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://codeautomation.ai/thankyou.jpg"],
  },
};

export default function AiChatbotDevelopmentServicesPage() {
  return (
    <main className="w-full bg-white">
      <HeroSection />
      <IntroSection />
      <ProblemSection />
      <ServicesSection />
      <ChatbotTypesSection />
      <CapabilitiesSection />
      {/* Section 5 goes here once supplied */}
      <ChatbotVsAgentSection />
      <MidPageCTASection />
      <IndustriesSection />
      <ProcessSection />
      <WhyChooseUsSection />
      <BenefitsSection />
      <TechnologiesSection />
      <FAQSection />
      <FinalCTASection />
    </main>
  );
}
