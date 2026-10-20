import HeroSection from '@/components/landing/ai-revenue-engine/HeroSection'
import TrustedBySection from '@/components/landing/ai-revenue-engine/TrustedBySection'
import DeploymentSection from '@/components/landing/ai-revenue-engine/Deployment'
import TryItTodaySection from '@/components/landing/ai-revenue-engine/TryItTodaySection'
import AiRevenueLeadModal from "@/components/landing/ai-revenue-engine/AiRevenueLeadModal";

export const metadata = {
  robots: "noindex, nofollow",
};

const RevenueEngine = () => {
  return (
    <div>
      <HeroSection/>
      <TrustedBySection/>
     <DeploymentSection/>
        <TryItTodaySection/>
      <AiRevenueLeadModal />
    </div>
  )
}

export default RevenueEngine