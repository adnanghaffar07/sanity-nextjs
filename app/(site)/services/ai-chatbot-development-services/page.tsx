import type { Metadata } from "next";
import HeroSection from "@/components/services/ai-chatbot/HeroSection";
import IntroSection from "@/components/services/ai-chatbot/IntroSection";
import ProblemSection from "@/components/services/ai-chatbot/ProblemSection";
import ServicesSection from "@/components/services/ai-chatbot/ServicesSection";
import ChatbotTypesSection from "@/components/services/ai-chatbot/ChatbotTypesSection";
import CapabilitiesSection from "@/components/services/ai-chatbot/CapabilitiesSection";
import ChatbotVsAgentSection from "@/components/services/ai-chatbot/ChatbotVsAgentSection";
import MidPageCTASection from "@/components/services/ai-chatbot/MidPageCTASection";
import IndustriesSection from "@/components/services/ai-chatbot/IndustriesSection";
import ProcessSection from "@/components/services/ai-chatbot/ProcessSection";
import WhyChooseUsSection from "@/components/services/ai-chatbot/WhyChooseUsSection";
import BenefitsSection from "@/components/services/ai-chatbot/BenefitsSection";
import TechnologiesSection from "@/components/services/ai-chatbot/TechnologiesSection";
import FAQSection from "@/components/services/ai-chatbot/FAQSection";
import FinalCTASection from "@/components/services/ai-chatbot/FinalCTASection";

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
