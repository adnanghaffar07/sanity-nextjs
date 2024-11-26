import Image from "next/image";
import { client } from "../../../../sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";
import ButtonScrollToSection from "../../components/ButtonScrollToSection";
async function getData() {
    const query = `*[_type == 'valueDiscoveryProcessPage'][0]`;
    try {
        const fetchData = await client.fetch(query);
        return fetchData || [];
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}

export async function generateMetadata() {
    const data = await getData();

    const defaultTitle = "Code Automation - Custom Software and Mobile Development Company in USA";
    const defaultDescription = "Custom Software and Mobile Development Company in USA";
    const defaultKeywords = "CodeAutomation.ai";

    const title = data.webSeoMetadata?.title || defaultTitle;
    const description = data.webSeoMetadata?.description || defaultDescription;
    const keywords = data.webSeoMetadata?.keywords?.join(", ") || defaultKeywords;

    // Extract Open Graph metadata
    const facebookMeta = data.facebook || {};
    const twitterMeta = data.twitterhMeta || {};
    const linkedInMeta = data.linkedInCards || {};
    const pinterestMeta = data.pinterestCards || {};
    const whatsappMeta = data.whatsappCards || {};
    const telegramMeta = data.telegramCards || {};

    return {
        title,
        description,
        keywords,
        openGraph: {
            type: facebookMeta.type || "website",
            url: facebookMeta.url || "https://codeautomation.ai",
            title: facebookMeta.title || title,
            description: facebookMeta.description || description,
            images: [
                {
                    url: urlForImage(facebookMeta.image).toString(),
                    width: 1200,
                    height: 630,
                    alt: title,
                }
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: twitterMeta.title || title,
            description: twitterMeta.description || description,
            images: [
                {
                    url: urlForImage(twitterMeta.image).toString(),
                    alt: title,
                }
            ],
        },
        linkedIn: {
            title: linkedInMeta.linkedInTitle || title,
            description: linkedInMeta.linkedInDescription || description,
             image: urlForImage(linkedInMeta.linkedInImage).toString(),
            url: linkedInMeta.linkedInUrl || "https://codeautomation.ai",
        },
        pinterest: {
            title: pinterestMeta.pinterestTitle || title,
            description: pinterestMeta.pinterestDescription || description,
            url: pinterestMeta.pinterestUrl || "https://codeautomation.ai",
        },
        whatsapp: {
            title: whatsappMeta.whatsappTitle || title,
            description: whatsappMeta.whatsappDescription || description,
            url: whatsappMeta.whatsappUrl || "https://codeautomation.ai",
        },
        telegram: {
            title: telegramMeta.telegramTitle || title,
            description: telegramMeta.telegramDescription || description,
            url: telegramMeta.telegramUrl || "https://codeautomation.ai",
        }
    };
}
export default async function DiscoveryProcess() {
    const data = await getData();


    return (
        <div className="w-full flex flex-col items-center">
            {/* Hero Section */}
            <div className="flex overflow-hidden relative flex-col pb-12 w-full font-light text-white lg:min-h-[700px] max-md:max-w-full">
                {data.heroImage && (
                    <img
                        className="top-0 left-0 object-cover absolute inset-0 size-full"
                        src={urlForImage(data.heroImage).toString()}
                        alt=""
                    />
                )}
                <div className="absolute top-0 left-0 w-full h-full bg-[#020C16] opacity-65"></div>
                <div className="flex relative flex-col items-center lg:px-20 px-5 lg:pt-12 lg:pb-0 pt-48 pb-36 w-full max-md:px-5 max-md:max-w-full flex-grow">
                    <div className="lg:absolute lg:top-[300px]">
                        <div className="lg:text-4xl text-2xl font-bold text-center capitalize max-lg:mt-0 lg:w-8/12 mx-auto">
                            <h2 className="title capitalize">{data.pageTitle}</h2>
                        </div>
                        <div className="lg:text-2xl text-base text-center mt-4 max-md:max-w-full lg:px-32">
                            {data.pageDesc}
                        </div>
                    </div>
                </div>
            </div>

            {/* Introduction Section */}
            <div className="relative w-full px-6 py-10 bg-white md:px-16 md:py-16">
                <div className="max-w-7xl mx-auto">
                    <h2 className="mb-8 text-2xl text-blue-900 font-bold text-left">
                        {data.introductionSection?.introHeading}
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-800 text-left">
                        {data.introductionSection?.introDesc}
                    </p>
                </div>
            </div>
            {/* Value Discovery Section */}
            <div className="w-full px-6 py-10 bg-blue-50 md:px-16 md:py-16">
                <div className="max-w-7xl mx-auto">
                    <h2 className="mb-8 text-2xl font-bold text-blue-900 text-left">
                        {data.discoverynSection?.heading}
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-700 text-left">
                        {data.discoverynSection?.description}
                    </p>
                </div>
            </div>

            {/* Efficient Knowledge Acquisition Section */}
            <div className="w-full px-6 py-10 md:px-16 md:py-16">
                <div className="max-w-7xl mx-auto">
                    <h2 className="mb-6 text-2xl font-bold text-blue-900 text-left">
                        {data.knowledgeAcquisitionSection?.heading}
                    </h2>
                    <p className="mb-6 text-lg leading-relaxed text-gray-700 text-left">
                        {data.knowledgeAcquisitionSection?.description}
                    </p>
                    <h3 className="mb-4 text-2xl font-semibold text-blue-800">
                        Sources
                    </h3>
                    <ul className="mb-8 list-disc list-inside text-gray-700">
                        {data.knowledgeAcquisitionSection?.sources?.map((source: any, index: any) => (
                            <li key={index} className="mb-2">
                                <strong>{source.sourceTitle} </strong>{source.sourceDetail}
                            </li>
                        ))}
                    </ul>
                    <h3 className="mb-4 text-2xl font-semibold text-blue-800">
                        {data.knowledgeAcquisitionSection?.stepsHeading}
                    </h3>
                    <ul className="list-decimal list-inside text-gray-700">
                        {data.knowledgeAcquisitionSection?.steps?.map((step: any, index: any) => (
                            <li key={index} className="mb-2">
                                <strong>{step.stepTitle} </strong>{step.stepDetail}
                            </li>
                        ))}
                    </ul>
                    <div className="p-4 mt-8 bg-white rounded-lg shadow-lg">
                        <h4 className="text-xl font-bold text-gray-800">
                            {data.knowledgeAcquisitionSection?.example?.exampleTitle}
                        </h4>
                        <p className="text-lg leading-relaxed text-gray-700">
                            {data.knowledgeAcquisitionSection?.example?.exampleDetail}
                        </p>
                    </div>
                </div>
            </div>

            {/* Voice of the Customer Section */}
            <div className="w-full px-6 py-10 bg-blue-50 md:px-16 md:py-16">
                <div className="max-w-7xl mx-auto">
                    <h2 className="mb-6 text-2xl font-bold text-blue-900 text-left">
                        {data.vocSection?.heading}
                    </h2>
                    <p className="mb-6 text-lg leading-relaxed text-gray-700 text-left">
                        {data.vocSection?.description}
                    </p>
                    <h3 className="mb-4 text-2xl font-semibold text-blue-800">
                        Methods
                    </h3>
                    <ul className="mb-8 list-disc list-inside text-gray-700">
                        {data.vocSection?.methods?.map((method: any, index: any) => (
                            <li key={index} className="mb-2">
                                <strong>{method.methodTitle} </strong>{method.methodDetail}
                            </li>
                        ))}
                    </ul>
                    <div className="p-4 mt-8 bg-white rounded-lg shadow-lg">
                        <h4 className="text-xl font-bold text-gray-800">
                            {data.vocSection?.example?.exampleTitle}
                        </h4>
                        <p className="text-lg leading-relaxed text-gray-700">
                            {data.vocSection?.example?.exampleDetail}
                        </p>
                    </div>
                </div>
            </div>

            {/* DMAIC Section */}
            <div className="w-full px-6 py-10 md:px-16 md:py-16">
                <div className="max-w-7xl mx-auto">
                    <h2 className="mb-6 text-2xl font-bold text-blue-900 text-left">
                        {data.dmaicDmadSection?.heading}
                    </h2>
                    <p className="mb-6 text-lg leading-relaxed text-gray-700 text-left">
                        {data.dmaicDmadSection?.description}
                    </p>
                    <h3 className="mb-4 text-2xl font-semibold text-blue-800">
                        {data.dmaicDmadSection?.dmaic?.dmaicHeading}
                    </h3>
                    <ul className="mb-8 list-decimal list-inside text-gray-700">
                        {data.dmaicDmadSection?.dmaic?.dmaicSteps?.map((step: any, index: any) => (
                            <li key={index} className="mb-2">
                                <strong>{step.step} </strong>{step.detail}
                            </li>
                        ))}
                    </ul>
                    <div className="p-4 mt-8 bg-white rounded-lg shadow-md">
                        <h4 className="text-xl font-bold text-gray-800">
                            {data.dmaicDmadSection?.dmaic?.exampleTitle}
                        </h4>
                        <p className="text-lg leading-relaxed text-gray-700">
                            {data.dmaicDmadSection?.dmaic?.exampleDetail}
                        </p>
                    </div>
                </div>
            </div>

            {/* DMADV Section */}
            <div className="w-full px-6 py-10 bg-blue-50 md:px-16 md:py-16">
                <div className="max-w-7xl mx-auto">
                    <h3 className="mb-4 text-2xl font-semibold text-blue-800">
                        {data.dmaicDmadSection?.dmadv?.dmadvHeading}
                    </h3>
                    <ul className="mb-8 list-decimal list-inside text-gray-700">
                        {data.dmaicDmadSection?.dmadv?.dmadvSteps?.map((step: any, index: any) => (
                            <li key={index} className="mb-2">
                                <strong>{step.step} </strong>{step.detail}
                            </li>
                        ))}
                    </ul>
                    <div className="p-4 mt-8 bg-white rounded-lg shadow-md">
                        <h4 className="text-xl font-bold text-gray-800">
                            {data.dmaicDmadSection?.dmadv?.exampleTitle}
                        </h4>
                        <p className="text-lg leading-relaxed text-gray-700">
                            {data.dmaicDmadSection?.dmadv?.exampleDetail}
                        </p>
                    </div>
                </div>
            </div>

            {/* Identifying Value Opportunities Section */}
            <div className="w-full px-6 py-10 md:px-16 md:py-16">
                <div className="max-w-7xl mx-auto">
                    <h2 className="mb-6 text-2xl font-bold  text-blue-900 text-left">
                        {data.valueOpportunitiesSection?.heading}
                    </h2>
                    <p className="mb-6 text-lg leading-relaxed text-gray-700 text-left">
                        {data.valueOpportunitiesSection?.description}
                    </p>
                    <h3 className="mb-4 text-2xl font-semibold text-blue-800">
                        Opportunities
                    </h3>
                    <ul className="mb-8 list-disc list-inside text-gray-700">
                        {data.valueOpportunitiesSection?.opportunities?.map((opportunity: any, index: any) => (
                            <li key={index} className="mb-2">
                                <strong>{opportunity.opportunityTitle} </strong>{opportunity.opportunityDetail}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Guidance for Web Development and Imagery Section */}
            <div className="w-full px-6 py-10 bg-blue-50 md:px-16 md:py-16">
                <div className="max-w-7xl mx-auto">
                    <h2 className="mb-6 text-2xl font-bold text-blue-900 text-left">
                        {data.webDevelopmentImagerySection?.heading}
                    </h2>
                    <p className="mb-6 text-lg leading-relaxed text-gray-700 text-left">
                        {data.webDevelopmentImagerySection?.description}
                    </p>
                    <h3 className="mb-4 text-2xl font-semibold text-blue-800">
                        Guidance Points
                    </h3>
                    <ul className="mb-8 list-disc list-inside text-gray-700">
                        {data.webDevelopmentImagerySection?.guidancePoints?.map((point: any, index: any) => (
                            <li key={index} className="mb-2">
                                <strong>{point.pointTitle} </strong>{point.pointDetail}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Call to Action (CTA) Section */}
            <div className="w-full px-6 py-10 text-white bg-blue-900 md:px-16 md:py-16 rounded-lg shadow-lg text-center md:text-left">
                <div className="max-w-7xl mx-auto">
                    <h2 className="mb-6 text-2xl font-bold">
                        {data.ctaSection?.ctaHeading}
                    </h2>
                    <p className="mb-6 text-lg leading-relaxed">
                        {data.ctaSection?.ctaText}
                    </p>
                    <div className="mt-8 flex justify-center md:justify-start">
                        <ButtonScrollToSection
                            content="Get Started Now"
                            classes="px-8 py-3 text-blue-900 cursor-pointer bg-white rounded-full shadow-md hover:bg-gray-100 transition duration-300"
                            destination="contact-box"
                        />
                    </div>
                </div>
            </div>

            {/* Conclusion Section */}
            <div className="w-full  bg-white px-6 py-10 md:px-16 md:py-16 rounded-lg">
                <div className="max-w-7xl mx-auto">
                    <h2 className="mb-6 text-2xl font-bold  text-blue-900 text-left">
                        {data.conclusionSection?.conclusionHeading}
                    </h2>
                    <p className="mb-6 text-lg leading-relaxed text-gray-700 text-left">
                        {data.conclusionSection?.conclusionText}
                    </p>
                    <h3 className="mb-4 text-xl font-semibold text-blue-800">
                        {data.conclusionSection?.inquiryHeading}
                    </h3>
                    <div className="mt-8 flex justify-start">
                        <ButtonScrollToSection
                            content="Contact Us"
                            classes="px-8 py-3 text-white bg-blue-900 cursor-pointer rounded-full shadow-md hover:bg-blue-700 transition duration-300"
                            destination="contact-box"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
