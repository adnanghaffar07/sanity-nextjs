import React from "react";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { Metadata } from "next"; // ✅ Import Metadata type


async function getData() {
    const query = `*[_type == 'news'][0]`;
    try {
        const fetchData = await client.fetch(query);
        return fetchData || {};
    } catch (error) {
        console.error("Error fetching data:", error);
        return {};
    }
}
// ✅ Generate Metadata with Canonical URL
export async function generateMetadata(): Promise<Metadata> {
    const data = await getData();

    const defaultTitle = "Latest News and Updates - CodeAutomation.ai";
    const defaultDescription = "Stay updated with the latest news, announcements, and insights from CodeAutomation.ai.";
    const defaultKeywords = "News, Updates, Announcements, CodeAutomation.ai";
    const canonicalUrl = "https://codeautomation.ai/news"; // ✅ Canonical URL for News Page

    const title = data?.webSeoMetadataSub?.title || defaultTitle;
    const description = data?.webSeoMetadataSub?.description || defaultDescription;
    const keywords = data?.webSeoMetadataSub?.keywords?.join(", ") || defaultKeywords;

    const heroImageUrl = data?.heroImage ? urlForImage(data.heroImage).toString() : "/thankyou.jpg";
    const facebookMeta = data?.facebookCardsSub || {};
    const twitterMeta = data?.twitterCardsSub || {};

    return {
        title,
        description,
        keywords,
        openGraph: {
            type: facebookMeta.facebookType || "website",
            url: facebookMeta.facebookUrl || canonicalUrl,
            title: facebookMeta.facebookTitle || title,
            description: facebookMeta.facebookDescription || description,
            images: [{ url: heroImageUrl, width: 1200, height: 630, alt: title }],
        },
        twitter: {
            card: twitterMeta.twitterType || "summary_large_image",
            title: twitterMeta.twitterTitle || title,
            description: twitterMeta.twitterDescription || description,
            images: [{ url: heroImageUrl, width: 1200, height: 630, alt: title }],
        },
                alternates: {
            canonical: canonicalUrl, // ✅ Canonical tag added here
        },
    };
}

const News: React.FC = async () => {
    const data = await getData();
    return (
        <div className="font-light text-black bg-blue-50">
            {/* Hero Section */}
            <div className="flex overflow-hidden relative flex-col w-full font-light text-white h-[450px] lg:min-h-[700px]">
                <img
                    className="top-0 left-0 object-cover absolute inset-0 size-full"
                    src={urlForImage(data.backgroundImage).toString()}
                    alt={data.backgroundImage?.alt || "Background Image"}
                />
                <div className="absolute top-0 left-0 w-full h-full bg-[#020C16] opacity-65"></div>

                <div className="flex relative flex-col items-center justify-center max-w-7xl mx-auto lg:px-20 px-5 lg:pt-12 w-full max-md:px-5 max-md:max-w-full flex-grow mt-20 lg:mt-0">
                    <div className="flex flex-col items-center justify-center text-center">
                        <div className="lg:text-4xl text-3xl font-bold capitalize lg:w-8/12 mx-auto">
                            <h1 className="title capitalize">{data.title}</h1>
                        </div>
                        <p className="md:text-2xl sm:text-xl text-lg text-center mt-4 max-md:max-w-full lg:px-32">
                            {data.subtitle}
                        </p>
                    </div>
                </div>
            </div>

            {/* News Articles Section */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
                <h3 className="text-2xl lg:text-4xl font-bold text-gray-900 text-center mb-4">
                    {data.articleTitle}
                </h3>
                <p className="text-xl text-center text-gray-700 mb-12 max-w-5xl mx-auto">
                    {data.articleSubtitle}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.articles?.map((article: any, index: any) => (
                        <div
                            key={index}
                            className="flex flex-col bg-white rounded-lg shadow-xl overflow-hidden transform transition-transform hover:scale-105 duration-300"
                        >
                            <img
                                className="w-full h-64 object-cover"
                                src={urlForImage(article.image).toString()}
                                alt={article.image?.alt || "Article Image"}
                            />
                            <div className="flex flex-col  p-6">
                                <h2 className="text-xl font-semibold  text-gray-900">
                                    {article.title}
                                </h2>
                                <p className="text-gray-700 my-4 leading-relaxed">
                                    {article.description}
                                </p>
                                <div className="flex justify-between absolute bottom-2 text-sm text-gray-500">
                                    <span>{article.date}</span>
                                    {/* <span>{article.author}</span> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Latest Technologies Section */}
            <div className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <h2 className="text-2xl lg:text-4xl font-bold text-center text-gray-900 mb-8">
                        {data.techTitle}
                    </h2>
                    <p className="text-xl max-w-5xl mx-auto text-center text-gray-700 mb-12">
                        {data.techSubtitle}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {data.latestTechnologies?.map((tech: any, index: any) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                    {tech.title}
                                </h3>
                                <p className="text-gray-700 mb-4">{tech.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;
