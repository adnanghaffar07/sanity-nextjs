import ProblemSection from '@/components/services/social-media-automation/ProblemSection';
import SolutionSection from '@/components/services/social-media-automation/SolutionSection';
import OutcomesToolsSection from '@/components/services/social-media-automation/OutcomesToolsSection';
import FinalCTASection from '@/components/services/social-media-automation/FinalCTASection';
import FAQSection from '@/components/services/social-media-automation/FAQSection';

export const metadata = {
  title: "Social Media Automation for Facebook, Instagram & LinkedIn | CodeAutomation",
  description:
    "Want to save time on social media management? CodeAutomation offers a simple solution to automate Facebook, Instagram, and LinkedIn posts and reels. From AI-generated captions and hashtags to seamless image/video processing, streamline your workflow and stay on-brand with ease.",
  keywords: [
    "CodeAutomation",
    "software development company",
    "software development services",
  ],
  alternates: {
    canonical: "https://codeautomation.ai/services/social-media-automation-workflow",
  },
};

export default function Page() {
  return (
    <main>
      <ProblemSection />
      <SolutionSection/>
      <OutcomesToolsSection/>
      <FinalCTASection/>
      <FAQSection/>
    </main>
  );
}