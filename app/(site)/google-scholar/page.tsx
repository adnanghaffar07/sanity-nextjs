// app/google-scholar/page.tsx

import GoogleScholarArticleCard from "../components/GoogleScholarArticleCard";

export const metadata = {
  title: "Adnan Ghaffar on Google Scholar | AI & Automation Research | CodeAutomation",
  description:
    "Explore Adnan Ghaffar's contributions to AI and automation research featured on Google Scholar. Gain insights into innovative frameworks and intelligent automation systems shaping the tech industry.",
  keywords: [
    "Adnan Ghaffar",
    "Google Scholar",
    "AI research",
    "automation frameworks",
    "intelligent systems",
    "CodeAutomation"
  ],
  alternates: {
    canonical: "https://codeautomation.ai/google-scholar",
  },
};

const scholarArticles = [
    {
        title: "Business AI Automation",
        authors: "Mahabub Sultan Adnan Ghaffar",
        journal: "MS in Data Science and Analytics, CEO of CodeAutomation.ai",
        description:
          "This article explores how artificial intelligence (AI) technologies like machine learning, NLP, RPA, and cognitive computing streamline business processes, reduce errors, and enhance operational efficiency. It highlights real-world use cases in customer service, marketing, HR, and supply chain management.",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=3loqVSYAAAAJ&citation_for_view=3loqVSYAAAAJ:u5HHmVD_uO8C",
  },
  // Add more articles here as needed
];

export default function GoogleScholarPage() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero Section */}
      <div className="flex overflow-hidden relative flex-col pb-12 w-full font-light text-white lg:min-h-[700px] max-md:max-w-full">
        <img
          className="top-0 left-0 object-cover absolute inset-0 size-full"
          src="/google-scholar.jpg" // Replace with an actual image path
          alt="Google Scholar Hero"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#000000] opacity-60"></div>
        <div className="relative flex flex-col items-center px-5 pt-48 pb-36 w-full lg:px-20 lg:pt-12 flex-grow">
          <div className="lg:absolute lg:top-[300px] text-center lg:w-8/12 mx-auto">
            <h1 className="text-2xl font-bold capitalize lg:text-4xl">Published on Google Scholar</h1>
            <h2 className="mt-4 text-base lg:text-2xl lg:px-32">
              Adnan Ghaffar, CEO of CodeAutomation, shares advanced research on AI-driven automation and intelligent frameworks through peer-reviewed publications.
            </h2>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-8">Research Articles</h1>
        <div className="space-y-8">
          {scholarArticles.map((article, index) => (
            <GoogleScholarArticleCard key={index} {...article} />
          ))}
        </div>
      </main>
    </div>
  );
}
