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
  {
    title: "Infrastructural and Pedagogical Barriers to Integrating AI Tools in CLT-Oriented Classrooms in Rural vs. Urban Higher Secondary Schools",
    authors: "Yusuf Adebayo, Adnan Ghaffar",
    journal: "MS in Data Science and Analytics, CEO of CodeAutomation.ai",
    description:
      "The integration of Artificial Intelligence (AI) tools into Communicative Language Teaching (CLT) classrooms presents promising opportunities to enhance language learning outcomes, particularly at the higher secondary level",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=3loqVSYAAAAJ&citation_for_view=3loqVSYAAAAJ:2osOgNQ5qMEC",
  },
  {
    title: "Bridging the Gap: How AI Can Support Teacher Training for Effective CLT Implementation at the Higher Secondary Level",
    authors: "Adnan Ghaffar, Bruce Williams",
    journal: "MS in Data Science and Analytics, CEO of CodeAutomation.ai",
    description:
      "The successful implementation of Communicative Language Teaching (CLT) at the higher secondary level remains a persistent challenge in many educational contexts, particularly in developing countries where teacher preparedness, resource availability, and pedagogical support are limited. ",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=3loqVSYAAAAJ&citation_for_view=3loqVSYAAAAJ:qjMakFHDy7sC",
  },
  {
    title: "AI in the CLT Classroom: Examining Student Engagement and Motivation in Technology-Assisted Communicative Language Learning",
    authors: "Adnan Ghaffar, Chidiebere Joshua",
    journal: "MS in Data Science and Analytics, CEO of CodeAutomation.ai",
    description:
      "The integration of Artificial Intelligence (AI) in Communicative Language Teaching (CLT) classrooms represents a transformative approach to language learning, emphasizing student engagement and motivation through technology-assisted environments.",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=3loqVSYAAAAJ&citation_for_view=3loqVSYAAAAJ:zYLM7Y9cAGgC",
  },
  {
    title: "AI Into Business Automation: Practical Frameworks For Streamlining Operations",
    authors: "Adnan Ghaffar, Abimbola Oyeronke",
    journal: "MS in Data Science and Analytics, CEO of CodeAutomation.ai",
    description:
      "This critique evaluates the paper “AI into Business Automation: Practical Frameworks for Streamlining Operations” through the lens of international research standards, SaaS business practices, and 2025 market trends.",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=3loqVSYAAAAJ&citation_for_view=3loqVSYAAAAJ:W7OEmFMy1HYC",
  },
  {
    title: "Sustainable AI: Integrating Carbon Capture and Energy-Efficient Algorithms for Green Business Automation",
    authors: "Bruce William, Adnan Ghaffar, Hart Charles",
    journal: "MS in Data Science and Analytics, CEO of CodeAutomation.ai",
    description:
      "As artificial intelligence (AI) becomes increasingly integral to business automation, concerns about its environmental impact have grown due to the high energy consumption of AI models and data centers.",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=3loqVSYAAAAJ&citation_for_view=3loqVSYAAAAJ:9yKSN-GCB0IC",
  },
  {
    title: "AI-Driven Software Development and Business Automation in 2025: A Comprehensive Framework for Enhanced Efficiency, Transparency, and Decision Support",
    authors: "Adnan Ghaffar",
    journal: "MS in Data Science and Analytics, CEO of CodeAutomation.ai",
    description:
      "This paper introduces an end-to-end framework combining state-of-the-art AI models such as GPT-5 and AlphaCode 2.0 to enable software development and business process automation.",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=3loqVSYAAAAJ&citation_for_view=3loqVSYAAAAJ:u-x6o8ySG0sC",
  },
  {
    title: "AI-Driven Forecasting Models for Green Tech Stocks: Linking Carbon Capture Innovation to Stock Market Trends in 2025",
    authors: "Yusuf Adebayo, Syed Sadique Basha, Adnan Ghaffar",
    journal: "MS in Data Science and Analytics, CEO of CodeAutomation.ai",
    description:
      "The increasing urgency to combat climate change has propelled green technologies—particularly carbon capture and sequestration (CCS)—to the forefront of environmental and economic discourse.",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=3loqVSYAAAAJ&citation_for_view=3loqVSYAAAAJ:IjCSPb-OGe4C",
  },
  {
    title: "Integrating AI into Busine ss Automation: Practical Frameworks for Streamlining Operation",
    authors: "Adnan Ghaffar, Chirag Gajiwala, Syed Basha, Bruce William",
    journal: "MS in Data Science and Analytics, CEO of CodeAutomation.ai",
    description:
      "In today’s digital era, businesses are under pressure to deliver faster, smarter, and more cost-effective services. Traditional rule-based automation is no longer sufficient to meet these demands. ",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=3loqVSYAAAAJ&citation_for_view=3loqVSYAAAAJ:UeHWp8X0CEIC",
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
        <h3 className="text-4xl font-bold mb-8">Research Articles</h3>
        <div className="space-y-8">
          {scholarArticles.map((article, index) => (
            <GoogleScholarArticleCard key={index} {...article} />
          ))}
        </div>
      </main>
    </div>
  );
}
