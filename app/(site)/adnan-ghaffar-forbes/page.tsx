// app/forbes/page.tsx

import ForbesArticleCard from "../components/ForbesArticleCard";

export const metadata = {
  title: "Adnan Ghaffar in Forbes | AI & Tech Insights | CodeAutomation",
 description:
   "Explore CEO Adnan Ghaffar’s Forbes articles on AI innovation, tech trends, and business automation. Discover expert insights driving CodeAutomation’s industry-leading solutions.",
   keywords: [
     "CodeAutomation",
     "software development company",
     "software development services",
   ],
 alternates: {
   canonical: "https://codeautomation.ai/forbes", // ✅ Fixes the canonical error
 },
};
const forbesArticles = [
  {
    title: 'Automation Is No Longer Optional: Getting Your Business Ready For AI',
    imageUrl: 'https://imageio.forbes.com/specials-images/imageserve/67e3f863eb8ecda125d434e2/0x0.jpg?format=jpg&width=440',
    articleUrl: 'https://www.forbes.com/councils/forbesbusinesscouncil/2025/03/27/automation-is-no-longer-optional-getting-your-business-ready-for-ai/',
    description: 'How quickly can you embrace AI before the competition gets ahead?',
  },
 {
    title: 'How To Implement AI-Driven Automation For Revenue Generation',
    imageUrl: 'https://imageio.forbes.com/specials-images/imageserve/6363be26d666fe5483dd299d/Woman-Working-In-Busy-Green-Office-Space-With-Lots-Of-Plants/960x0.jpg?format=jpg&width=1440',
    articleUrl: 'https://www.forbes.com/councils/forbesbusinesscouncil/2025/05/27/how-to-implement-ai-driven-automation-for-revenue-generation/',
    description: 'One tool that is helping business leaders overcome these challenges is AI automation.',
  },
   {
    title: 'The Hidden Costs Of Manual Processes: Investing In Automation',
    imageUrl: 'https://specials-images.forbesimg.com/imageserve/687f9ba620b6ebf161b14248/Man-using-calculator--analyzing-financial-data--Focused-on--work-and-working-on/960x0.jpg?fit=scale',
    articleUrl: 'https://www.forbes.com/councils/forbesbusinesscouncil/2025/07/23/the-hidden-costs-of-manual-processes-investing-in-automation/',
    description: 'Ultimately, manual processes demonstrate that businesses are trapped in the past. Automation is about more than just saving money',
  },

];

export default function ForbesPage() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero Section */}
      <div className="flex overflow-hidden relative flex-col pb-12 w-full font-light text-white lg:min-h-[700px] max-md:max-w-full">
        <img
          className="top-0 left-0 object-cover absolute inset-0 size-full"
          src="/forbes-hero.jpg" // 👈 Replace with a Forbes-themed hero image
          alt="Forbes Hero"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#000000] opacity-60"></div>
        <div className="relative flex flex-col items-center px-5 pt-48 pb-36 w-full lg:px-20 lg:pt-12 flex-grow">
          <div className="lg:absolute lg:top-[300px] text-center lg:w-8/12 mx-auto">
            <h1 className="text-2xl font-bold capitalize lg:text-4xl">Featured in Forbes </h1>
            <h2 className="mt-4 text-base lg:text-2xl lg:px-32">
            Our CEO, Adnan Ghaffar, is a recognized thought leader in tech and automation. Explore his ground-breaking insights published in Forbes.            </h2>
          </div>
        </div>
      </div>
      <main className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-8">Featured Forbes Articles</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {forbesArticles.map((article, idx) => (
            <ForbesArticleCard key={idx} {...article} />
          ))}
        </div>
      </main>
    </div>
  );
}
