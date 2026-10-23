import type { Metadata } from "next";
import ProblemSection from "@/components/services/social-media-automation/ProblemSection";
import SolutionSection from "@/components/services/social-media-automation/SolutionSection";
import OutcomesToolsSection from "@/components/services/social-media-automation/OutcomesToolsSection";
import FinalCTASection from "@/components/services/social-media-automation/FinalCTASection";
import FAQSection from "@/components/services/social-media-automation/FAQSection";

const PAGE_URL = "https://codeautomation.ai/services/social-media-automation-workflow";
const TITLE = "Social Media Automation for Facebook, Instagram & LinkedIn | CodeAutomation";
const DESCRIPTION =
  "Want to save time on social media management? CodeAutomation offers a simple solution to automate Facebook, Instagram, and LinkedIn posts and reels. From AI-generated captions and hashtags to seamless image/video processing, streamline your workflow and stay on-brand with ease.";
const SHARE_IMAGE = "https://codeautomation.ai/thankyou.jpg";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["CodeAutomation", "software development company", "software development services"],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: SHARE_IMAGE, width: 1200, height: 630, alt: "CodeAutomation Social Media Automation" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [SHARE_IMAGE] },
};

export default function SocialMediaAutomationPage() {
  return (
    <main>
      <ProblemSection />
      <SolutionSection />
      <OutcomesToolsSection />
      <FinalCTASection />
      <FAQSection />
    </main>
  );
}
