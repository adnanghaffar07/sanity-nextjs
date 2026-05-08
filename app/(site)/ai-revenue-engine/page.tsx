import HeroSection from './components/HeroSection'
import TrustedBySection from './components/TrustedBySection'
import DeploymentSection from './components/Deployment'
import TryItTodaySection from './components/TryItTodaySection'
import AiRevenueLeadModal from "./components/AiRevenueLeadModal";

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