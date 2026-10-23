import type { Metadata } from "next";
import RealEstateNavbar from "@/components/landing/real-estate/NavBar";
import RealEstateHeroSection from "@/components/landing/real-estate/Hero";
import SocialProofBar from "@/components/landing/real-estate/SocialProof";
import HowItWorks from "@/components/landing/real-estate/HowItWorks";
import RealEstateServices from "@/components/landing/real-estate/Services";
import RealEstateResults from "@/components/landing/real-estate/Results";
import FinalCTA from "@/components/landing/real-estate/Cta";

// Ad landing page: kept out of search results.
export const metadata: Metadata = {
  title: "AI Automation for Real Estate Teams | CodeAutomation",
  description: "AI automation systems for brokers, property managers, and real estate operators across the USA. Get a free audit.",
  robots: { index: false, follow: false },
};

export default function RealEstateLandingPage() {
  return (
    <div>
      <RealEstateNavbar />
      <RealEstateHeroSection />
      <SocialProofBar />
      <HowItWorks />
      <RealEstateServices />
      <RealEstateResults />
      <FinalCTA />
    </div>
  );
}
