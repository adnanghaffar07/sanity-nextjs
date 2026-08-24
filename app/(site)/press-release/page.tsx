// app/press-release/page.tsx
import React from "react";
import { Metadata } from "next";

// ✅ Static data (completely static, no Sanity/dynamic fetching)
const pressData = {
  heroTitle: "Press & Media Centre",
  heroSubtitle: "Company Announcements & Media Coverage",
  heroDescription: "Welcome to the CodeAutomation Press Room. Stay updated with our latest company news, product launches, AI breakthroughs, strategic partnerships, and media resources.",
  prPlaceholder: "[PRs will be added here]",
};

// ✅ Generate Metadata
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Press & Media Centre - CodeAutomation.ai",
    description: "Stay updated with latest company news, product launches, AI breakthroughs, strategic partnerships, and media resources.",
    keywords: "Press, Media, News, Announcements, CodeAutomation, AI, Automation",
    alternates: {
      canonical: "https://codeautomation.ai/press-release",
    },
    openGraph: {
      title: "Press & Media Centre - CodeAutomation.ai",
      description: "Latest company news, product launches, and media resources.",
      url: "https://codeautomation.ai/press-release",
      type: "website",
      images: [
        {
          url: "/press-og-image.jpg",
          width: 1200,
          height: 630,
          alt: "CodeAutomation Press & Media Centre",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Press & Media Centre - CodeAutomation.ai",
      description: "Latest company news, product launches, and media resources.",
      images: ["/press-og-image.jpg"],
    },
  };
}

const PressPage: React.FC = () => {
  const data = pressData;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* ===== HERO SECTION ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0b1a2e] via-[#1a3a5f] to-[#0b1a2e] min-h-[550px] lg:min-h-[650px] flex items-center justify-center">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/press-og-image.jpg')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1a2e] via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(2,102,217,0.15),transparent_20%)]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4">
            {data.heroTitle}
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-blue-100/90 max-w-3xl mx-auto font-light mb-3">
            {data.heroSubtitle}
          </p>
          <p className="text-base sm:text-lg text-blue-200/80 max-w-2xl mx-auto font-light">
            {data.heroDescription}
          </p>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* ===== FIRST BLOCK ===== */}
        <div className="mb-16">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              {data.heroTitle}
            </h2>
            <span className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
              room
            </span>
          </div>

          {/* Intro Card */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50/50 rounded-2xl p-6 sm:p-8 mb-8 border-l-4 border-blue-600 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
              {data.heroSubtitle}
            </h3>
            <p className="text-base sm:text-lg text-gray-700">
              {data.heroDescription}
            </p>
          </div>

          {/* PR Placeholder */}
          <div className="bg-white rounded-2xl border-2 border-dashed border-gray-300 p-8 sm:p-12 text-center hover:border-blue-400 hover:bg-blue-50/30 transition-all duration-300">
            <div className="max-w-md mx-auto">
              <svg
                className="w-14 h-14 mx-auto text-gray-400 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                {data.prPlaceholder}
              </h4>
              <p className="text-gray-600 mb-4">
                Stay tuned — press releases, media kits, and announcements will appear in this space.
              </p>
              <span className="inline-block text-sm font-medium text-gray-700 bg-gray-100 px-4 py-1.5 rounded-full">
                📂 Media resources coming soon
              </span>
            </div>
          </div>
        </div>

        {/* ===== SECOND BLOCK (duplicate) ===== */}
        <div className="pt-8 border-t-2 border-gray-200">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              {data.heroTitle}
            </h2>
            <span className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
              archive
            </span>
          </div>

          {/* Duplicate Intro Card */}
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50/50 rounded-2xl p-6 sm:p-8 mb-8 border-l-4 border-indigo-600 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
              {data.heroSubtitle}
            </h3>
            <p className="text-base sm:text-lg text-gray-700">
              {data.heroDescription}
            </p>
          </div>

          {/* Duplicate PR Placeholder */}
          <div className="bg-white rounded-2xl border-2 border-dashed border-gray-300 p-8 sm:p-12 text-center hover:border-blue-400 hover:bg-blue-50/30 transition-all duration-300">
            <div className="max-w-md mx-auto">
              <svg
                className="w-14 h-14 mx-auto text-gray-400 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                {data.prPlaceholder}
              </h4>
              <p className="text-gray-600 mb-4">
                Stay tuned — press releases, media kits, and announcements will appear in this space.
              </p>
              <span className="inline-block text-sm font-medium text-gray-700 bg-gray-100 px-4 py-1.5 rounded-full">
                📌 New announcements
              </span>
            </div>
          </div>
        </div>

        {/* ===== FOOTER ===== */}
        <footer className="mt-16 pt-6 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-gray-500">
            <span className="inline-block w-2 h-2 rounded-full bg-blue-600 opacity-50" />
            <span>CodeAutomation · Press & Media Centre</span>
            <span className="hidden sm:inline">·</span>
            <span>All resources publicly available</span>
            <span className="inline-block w-2 h-2 rounded-full bg-blue-400 opacity-30" />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PressPage;