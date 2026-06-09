import Link from "next/link";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

export const metadata = {
  title: "Adnan Ghaffar | AI Consultant & CEO of CodeAutomation",
  description:
    "Adnan Ghaffar is the CEO of CodeAutomation, helping businesses leverage AI automation, Agentic AI, and custom software solutions to improve efficiency, scalability, and growth.",
  alternates: { canonical: "https://codeautomation.ai/domain/adnan-ghaffar" },
  openGraph: {
    title: "Adnan Ghaffar | AI Consultant & CEO of CodeAutomation",
    description:
      "Adnan Ghaffar is the CEO of CodeAutomation, helping businesses leverage AI automation, Agentic AI, and custom software solutions to improve efficiency, scalability, and growth.",
    url: "https://codeautomation.ai/domain/adnan-ghaffar",
    images: [
      { url: "https://www.codeautomation.ai/images/adnan-ghaffar.jpg", width: 1200, height: 630 },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adnan Ghaffar | AI Consultant & CEO of CodeAutomation",
    description:
      "Adnan Ghaffar is the CEO of CodeAutomation, helping businesses leverage AI automation, Agentic AI, and custom software solutions to improve efficiency, scalability, and growth.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Adnan Ghaffar",
    jobTitle: "CEO",
    description:
      "Adnan Ghaffar is the CEO of CodeAutomation, an AI consulting and software development company helping businesses leverage Agentic AI, AI automation, and custom software solutions.",
    url: "https://www.codeautomation.ai/author/adnan-ghaffar/",
    image: "https://www.codeautomation.ai/images/adnan-ghaffar.jpg",
    worksFor: { "@type": "Organization", name: "CodeAutomation", url: "https://www.codeautomation.ai/" },
    sameAs: ["https://www.linkedin.com/in/adnan-ghaffar/"],
  },
};

async function getBlogs() {
  const query = `*[_type == "portfolio" && pageType == "blogs"] | order(_createdAt desc){_id, slug, title, subtitle, introductionheading, heroimage}`;
  try {
    const res = await client.fetch(query);
    return res || [];
  } catch (e) {
    console.error(e);
    return [];
  }
}

export default async function AuthorPage() {
  const blogs = await getBlogs().then(blogs => blogs.slice(0, 6));

  return (
    <>
      {/* Minimal Hero Section */}
      <div className="bg-gradient-to-br from-[#020C16] to-[#0a1929] py-20 px-5 border-b border-blue-900/30">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 mt-20 md:gap-12 items-center md:items-start">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <img
                src="/ceo-adnan.png"
                alt="Adnan Ghaffar"
                className="w-48 h-48 rounded-2xl object-cover shadow-2xl border-4 border-blue-500/20"
              />
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-white">
              <div className="inline-block mb-3">
                <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/50 text-blue-300 text-xs font-semibold">
                  CEO & AI Strategist
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-3">Adnan Ghaffar</h1>
              <p className="text-lg text-blue-300 mb-6 font-light">
                Founder & CEO of CodeAutomation
              </p>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-2xl">
                Adnan Ghaffar is the CEO of CodeAutomation, an AI consulting and software development company helping businesses with  Agentic AI and custom AI solutions. As an AI strategist and technology leader, Adnan specializes in building custom AI agents, intelligent workflows, and scalable software systems. Helped organizations improve operational efficiency, accelerate growth, and drive innovation through AI-powered automation.              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-16 px-5 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">10+</h3>
              <p className="text-gray-600">Years in Tech</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600">Businesses Served</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">AI Expert</h3>
              <p className="text-gray-600">Agentic Solutions</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-6 text-gray-900">About Adnan</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            As CEO of CodeAutomation, Adnan leads a team of experts dedicated to transforming businesses through AI-powered solutions. His vision is to democratize advanced technology, making enterprise-grade AI automation accessible to organizations of all sizes.
          </p>
          <p className="text-gray-700 leading-relaxed">
            With a deep understanding of both technology and business strategy, Adnan combines technical excellence with practical business acumen to deliver solutions that drive measurable results. His expertise spans custom AI agent development, enterprise automation, software architecture, and digital transformation.
          </p>
        </div>
      </div>

      {/* Featured Articles Section */}
      <div className="py-20 px-5 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Articles</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Insights on AI automation, software development, and digital transformation
            </p>
          </div>

      {/* Blog Grid */}
<div className="grid md:grid-cols-2 gap-8 mb-10">
  {blogs.map((blog: any) => (
    <Link
      key={blog._id}
      href={`/blogs/${blog.slug}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="group cursor-pointer h-full">
        <div className="overflow-hidden rounded-xl mb-4 h-64 bg-gray-200">
          <img
            src={urlForImage(blog.heroimage).toString()}
            alt={blog.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition line-clamp-2">
          {blog.title}
        </h3>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {blog.subtitle ||
            blog.introductionheading?.split(" ").slice(0, 15).join(" ")}
        </p>

        <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium group-hover:bg-blue-600 group-hover:text-white transition">
          Read Article →
        </span>
      </div>
    </Link>
  ))}
</div>

          <div className="text-center">
            <Link href="/blogs">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
                View All Articles
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-5 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-blue-100 mb-8">
            Connect with Adnan and the CodeAutomation team to explore how AI can drive your growth.
          </p>
          <Link href="https://calendly.com/adnanghaffar/codeautomation" target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition">
              Get in Touch
            </button>
          </Link>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
