import AIEducationSection from "../components/AI-EducationSection";
import { FaqSection } from "../components/AI-FaqSection";
import { FeaturedToolsSection } from "../components/AI-FeaturedTools";
import { HeroSection } from "../components/AI-HeroSection";
import { ToolsGrid } from "../components/AI-ToolsGrid";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ToolsGrid />
      <AIEducationSection />
      <FeaturedToolsSection />
      <FaqSection/>
    </div>
  );
};

export default Index;