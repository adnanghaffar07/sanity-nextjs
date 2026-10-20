import EducationSection from "@/components/about/ai-tools/EducationSection";
import { FaqSection } from "@/components/about/ai-tools/FaqSection";
import { FeaturedToolsSection } from "@/components/about/ai-tools/FeaturedTools";
import { HeroSection } from "@/components/about/ai-tools/HeroSection";
import { ToolsGrid } from "@/components/about/ai-tools/ToolsGrid";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ToolsGrid />
      <EducationSection />
      <FeaturedToolsSection />
      <FaqSection/>
    </div>
  );
};

export default Index;