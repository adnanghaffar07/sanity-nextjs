import type { Metadata } from "next";
import { getNewsPage } from "@/sanity/lib/site-pages";
import { urlForImage } from "@/sanity/lib/image";
import SanityImage from "@/components/ui/SanityImage";

export const revalidate = 300;

const PAGE_URL = "https://codeautomation.ai/news";
const DEFAULT_TITLE = "Latest News and Updates - CodeAutomation.ai";
const DEFAULT_DESCRIPTION = "Stay updated with the latest news, announcements, and insights from CodeAutomation.ai.";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getNewsPage();
  const title = page?.webSeoMetadataSub?.title || DEFAULT_TITLE;
  const description = page?.webSeoMetadataSub?.description || DEFAULT_DESCRIPTION;
  const image = page?.heroImage ? urlForImage(page.heroImage) : "/thankyou.jpg";
  const images = [{ url: image, width: 1200, height: 630, alt: title }];

  return {
    title,
    description,
    keywords: page?.webSeoMetadataSub?.keywords?.join(", ") || "News, Updates, Announcements, CodeAutomation.ai",
    alternates: { canonical: PAGE_URL },
    openGraph: {
      type: "website",
      url: PAGE_URL,
      title: page?.facebookCardsSub?.facebookTitle || title,
      description: page?.facebookCardsSub?.facebookDescription || description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: page?.twitterCardsSub?.twitterTitle || title,
      description: page?.twitterCardsSub?.twitterDescription || description,
      images,
    },
  };
}

export default async function NewsPage() {
  const page = await getNewsPage();

  return (
    <div className="font-light text-black bg-blue-50">
      <div className="flex overflow-hidden relative flex-col w-full font-light text-white h-[450px] lg:min-h-[700px]">
        <SanityImage image={page?.backgroundImage} alt="Background Image" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[#020C16] opacity-65" />
        <div className="flex relative flex-col items-center justify-center max-w-7xl mx-auto lg:px-20 px-5 lg:pt-12 w-full max-md:max-w-full flex-grow mt-20 lg:mt-0 text-center">
          <h1 className="lg:text-4xl text-3xl font-bold capitalize lg:w-8/12 mx-auto">{page?.title}</h1>
          <p className="md:text-2xl sm:text-xl text-lg mt-4 max-md:max-w-full lg:px-32">{page?.subtitle}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <h3 className="text-2xl lg:text-4xl font-bold text-gray-900 text-center mb-4">{page?.articleTitle}</h3>
        <p className="text-xl text-center text-gray-700 mb-12 max-w-5xl mx-auto">{page?.articleSubtitle}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {page?.articles?.map((article) => (
            <div key={article._key} className="relative flex flex-col bg-white rounded-lg shadow-xl overflow-hidden transform transition-transform hover:scale-105 duration-300">
              <div className="relative w-full h-64">
                <SanityImage image={article.image} alt="Article Image" fill sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="flex flex-col p-6 pb-10">
                <h2 className="text-xl font-semibold text-gray-900">{article.title}</h2>
                <p className="text-gray-700 my-4 leading-relaxed">{article.description}</p>
                <span className="absolute bottom-2 text-sm text-gray-500">{article.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl lg:text-4xl font-bold text-center text-gray-900 mb-8">{page?.techTitle}</h2>
          <p className="text-xl max-w-5xl mx-auto text-center text-gray-700 mb-12">{page?.techSubtitle}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {page?.latestTechnologies?.map((tech) => (
              <div key={tech._key} className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{tech.title}</h3>
                <p className="text-gray-700 mb-4">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
