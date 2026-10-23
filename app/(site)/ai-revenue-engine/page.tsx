import type { Metadata } from "next";
import HeroSection from "@/components/landing/ai-revenue-engine/HeroSection";
import TrustedBySection from "@/components/landing/ai-revenue-engine/TrustedBySection";
import DeploymentSection from "@/components/landing/ai-revenue-engine/Deployment";
import TryItTodaySection from "@/components/landing/ai-revenue-engine/TryItTodaySection";
import AiRevenueLeadModal from "@/components/landing/ai-revenue-engine/AiRevenueLeadModal";

// Ad landing page: kept out of search results.
export const metadata: Metadata = {
  title: "Hire an AI Agent | AI Revenue Engine by CodeAutomation",
  robots: { index: false, follow: false },
};

export default function RevenueEnginePage() {
  return (
    <div>
      <HeroSection />
      <TrustedBySection />
      <DeploymentSection />
      <TryItTodaySection />
      <AiRevenueLeadModal />
    </div>
  );
}
