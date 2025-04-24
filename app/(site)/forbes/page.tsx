// app/forbes/page.tsx

import ForbesArticleCard from "../components/ForbesArticleCard";

const forbesArticles = [
  {
    title: 'Automation Is No Longer Optional: Getting Your Business Ready For AI',
    imageUrl: 'https://imageio.forbes.com/specials-images/imageserve/67e3f863eb8ecda125d434e2/0x0.jpg?format=jpg&width=440',
    articleUrl: 'https://www.forbes.com/councils/forbesbusinesscouncil/2025/03/27/automation-is-no-longer-optional-getting-your-business-ready-for-ai/',
    description: 'How quickly can you embrace AI before the competition gets ahead?',
  },];

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
            <h1 className="text-2xl font-bold capitalize lg:text-4xl">Explore Forbes Insights</h1>
            <h2 className="mt-4 text-base lg:text-2xl lg:px-32">
              Discover hand-picked Forbes articles on AI, business, tech, and the future. Curated by CodeAutomation to keep you informed and inspired.
            </h2>
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
