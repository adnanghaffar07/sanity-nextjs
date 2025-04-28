import React from "react";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import ButtonScrollToSection from "../components/ButtonScrollToSection";
import DownloadButton from "../components/BrochureDownload";

async function getBrochures() {
    const query = `*[_type == "logicalServices" && brochure.asset != null] | order(_createdAt asc) {
        serviceCardTitle,
         _updatedAt, 
        clientsSection {
            sectionTitle
        },
        serviceDesc,
        date,
        heroImage {
            asset->{url}
        },
        brochure {
            asset->{_ref, url, originalFilename }
        }
    }`;

    try {
        const brochures = await client.fetch(query);
        return brochures;
    } catch (error) {
        console.error("Error fetching brochures:", error);
        return [];
    }   
}
// ✅ Proper generateMetadata function
export async function generateMetadata() {
    const data = await getBrochures();
  
    const defaultTitle = "Download Our Service Brochures - CodeAutomation.ai";
    const defaultDescription = "Explore and download brochures of our custom software and mobile development services.";
    const defaultKeywords = "Brochures, CodeAutomation.ai, Software Development, Mobile App Development";
    const canonicalUrl = "https://codeautomation.ai/brochure"; // ✅ Correct canonical URL
  
    const title = data?.webSeoMetadataSub?.title || defaultTitle;
    const description = data?.webSeoMetadataSub?.description || defaultDescription;
    const keywords = data?.webSeoMetadataSub?.keywords?.join(", ") || defaultKeywords;
  
    const heroImageUrl = data?.heroImage?.asset?.url || "/brochure-cover.jpg";
  
    const facebookMeta = data?.facebookCardsSub || {};
    const twitterMeta = data?.twitterCardsSub || {};
    const linkedInMeta = data?.linkedInCardsSub || {};
    const pinterestMeta = data?.pinterestCardsSub || {};
    const whatsappMeta = data?.whatsappCardsSub || {};
    const telegramMeta = data?.telegramCardsSub || {};
  
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
        url: twitterMeta.twitterUrl || canonicalUrl,
      },
      linkedIn: {
        title: linkedInMeta.linkedInTitle || title,
        description: linkedInMeta.linkedInDescription || description,
        image: heroImageUrl,
        url: linkedInMeta.linkedInUrl || canonicalUrl,
      },
      pinterest: {
        title: pinterestMeta.pinterestTitle || title,
        description: pinterestMeta.pinterestDescription || description,
        url: pinterestMeta.pinterestUrl || canonicalUrl,
      },
      whatsapp: {
        title: whatsappMeta.whatsappTitle || title,
        description: whatsappMeta.whatsappDescription || description,
        url: whatsappMeta.whatsappUrl || canonicalUrl,
      },
      telegram: {
        title: telegramMeta.telegramTitle || title,
        description: telegramMeta.telegramDescription || description,
        url: telegramMeta.telegramUrl || canonicalUrl,
      },
      alternates: {
        canonical: canonicalUrl, // ✅ Canonical properly added
      },
    };
  }

const BrochuresPage = async () => {
    const brochures = await getBrochures();

    return (
        <div className="bg-blue-50 min-h-screen">
            <div className="flex overflow-hidden relative flex-col w-full font-light text-white h-[450px] lg:min-h-[700px]">
                <img
                    className="top-0 left-0 object-cover absolute inset-0 size-full"
                    src="/brochure-cover.jpg"
                    alt="Background Image"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-[#020C16] opacity-65"></div>

                <div className="flex relative flex-col items-center justify-center max-w-7xl mx-auto lg:px-20 px-5 lg:pt-12 w-full max-md:px-5 max-md:max-w-full flex-grow mt-20 lg:mt-0">
                    <div className="flex flex-col items-center justify-center text-center">
                        <div className="lg:text-4xl text-3xl font-bold capitalize lg:w-8/12 mx-auto">
                            <h1 className="title capitalize">Download Your Future Today!</h1>
                        </div>
                        <h2 className="md:text-2xl sm:text-xl text-lg text-center mt-4 max-md:max-w-full lg:px-32">
                            Unlock the secrets of automation with our exclusive brochures. Your journey to efficiency starts here!
                        </h2>
                    </div>
                </div>
            </div>
            {/* Header Section */}
            <div className="px-6">
                <section className="bg-white max-w-7xl mx-auto mt-10 mb-6 md:mb-16 py-16 px-6 md:px-12 rounded-3xl">
                    <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        {/* Left Section */}
                        <div className="space-y-6">
                            <h3 className="text-lg font-bold text-[#1d92fb] uppercase">Features</h3>
                            <h3 className="text-4xl font-extrabold text-gray-800">
                                Discover the Value of Our Brochures
                            </h3>
                            <p className="text-gray-600 text-lg">
                                Explore comprehensive insights, detailed guides, and exclusive knowledge about our services by downloading our brochures. Enhance your decision-making and stay informed about the latest trends and offerings.
                            </p>
                        </div>

                        {/* Right Section */}
                        <img
                            src="/brochure-hero.jpg" // Replace this with the actual image path
                            alt="Brochure Features"
                            className="w-full rounded-3xl shadow-lg"
                        />
                    </div>

                    {/* Feature Icons Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        {/* Feature 1 */}
                        <div className="text-center">
                            <div className=" inline-block mb-4">
                                <img src="/brochure-icon.png" alt="brochure" />
                            </div>
                            <h4 className="text-lg font-bold text-gray-800">In-depth Information</h4>
                            <p className="text-gray-600">
                                Gain access to valuable and detailed information about our services and solutions.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="text-center">
                            <div className=" inline-block mb-4">
                                <img src="/brochure-icon.png" alt="brochure" />
                            </div>
                            <h4 className="text-lg font-bold text-gray-800">Free Downloads</h4>
                            <p className="text-gray-600">
                                All brochures are available for free download, enabling easy access to key resources.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="text-center">
                            <div className=" inline-block mb-4">
                                <img src="/brochure-icon.png" alt="brochure" />
                            </div>
                            <h4 className="text-lg font-bold text-gray-800">Save Time</h4>
                            <p className="text-gray-600">
                                Quickly understand our offerings with concise and visually appealing brochures.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            {/* Brochures List */}
            <div className="max-w-5xl px-6 mx-auto">
                <div className="text-left mb-3 mt-8">
                    <h3 className="text-3xl font-bold text-gray-900">Latest Brochures</h3>
                </div>

                {brochures.slice(-3).map((brochure: any, index: any) => (
                    <div key={index} className="flex md:flex-row flex-col justify-between items-start md:items-center gap-6 py-6 border-b border-black">

                        {/* Image */}
                        <div className="flex-shrink-0 justify">
                            <img
                                src={urlForImage(brochure.heroImage).toString()}
                                alt={brochure.heroImage.alt}
                                className="w-[250px] h-[140px] object-cover rounded-3xl mb-4 md:mb-0"
                            />
                        </div>

                        {/* Description */}
                        <div className="flex-grow md:ml-6">
                            <h2 className="text-lg font-semibold text-gray-800 mb-2">{brochure.serviceCardTitle}</h2>
                            <p className="text-gray-600 max-w-2xl">{brochure.serviceDesc}</p>
                            <p className="text-gray-500 text-sm mt-3">
                                &#10003; {new Date(brochure._updatedAt).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                            </p>
                        </div>

                        {/* Download Button */}
                        {brochure.brochure?.asset && (
                            <DownloadButton fileUrl={brochure.brochure.asset.url} serviceTitle={brochure.serviceCardTitle} />
                        )}

                    </div>
                ))}
            </div>



            <div className="max-w-5xl mx-auto pt-6 px-4">
                <h2 className="text-3xl font-bold text-left pb-4 my-6 text-black">
                    Our Best Brochures
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {brochures.slice(0, 6).map((brochure: any, index: any) => (
                        <div
                            key={index}
                            className="flex flex-col items-start justify-between text-left"
                        >
                            {/* Image */}
                            <div>
                                <img
                                    src={urlForImage(brochure.heroImage).toString()}
                                    alt={brochure.serviceCardTitle}
                                    className="w-full h-48 object-cover rounded-2xl mb-4"
                                />

                                {/* Title */}
                                <h2 className="text-xl font-semibold text-left text-gray-800 mb-2">
                                    {brochure.serviceCardTitle}
                                </h2>

                                {/* Description */}
                                <p className="text-gray-600 text-left mb-3">
                                    {brochure.serviceDesc}
                                </p>
                            </div>

                            <div className="">

                                {/* Download Button */}
                                {brochure.brochure?.asset && (
                                    <DownloadButton fileUrl={brochure.brochure.asset.url} serviceTitle={brochure.serviceCardTitle} />)}
                            </div>


                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full mt-10 mb-10 px-6 py-10 text-white bg-[#1d92fb] md:px-16 md:py-16 rounded-lg shadow-lg text-center md:text-left">
                <div className="max-w-7xl mx-auto">
                    <h2 className="mb-6 text-2xl font-bold">
                        Your Guide to Automation & Development
                    </h2>
                    <p className="mb-6 text-lg leading-relaxed">
                        Discover insights into software development and automation with CodeAutomation.
                        Download our free brochures to learn how we revolutionize processes, boost efficiency,
                        and deliver innovative solutions tailored to your business needs.
                    </p>
                    <div className="mt-8 flex justify-center md:justify-start">
                        <ButtonScrollToSection
                            content="Download Now"
                            classes="px-8 py-3 text-blue-900 cursor-pointer bg-white rounded-full shadow-md hover:text-black hover:bg-[#f7e022] transition duration-300"
                            destination="brochure"
                        />
                    </div>
                </div>
            </div>
            <div id="brochure" className="max-w-7xl mx-auto py-6 px-4">
                <h3 className="text-3xl font-bold text-left pb-4 my-6 text-black">
                    Brochures Tailored for Your Success
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {brochures.slice(6, brochures.length - 3).map((brochure: any, index: any) => (
                        <div
                            key={index}
                            className="flex flex-col justify-between items-start text-left"
                        >
                            {/* Image */}
                            <img
                                src={urlForImage(brochure.heroImage).toString()}
                                alt={brochure.serviceCardTitle}
                                className="w-full h-48 object-cover rounded-2xl mb-4"
                            />

                            {/* Title */}
                            <h2 className="text-xl font-semibold text-left text-gray-800 mb-2">
                                {brochure.serviceCardTitle}
                            </h2>

                            {/* Description */}
                            <p className="text-gray-600 text-left  mb-6">
                                {brochure.serviceDesc}
                            </p>

                            {/* Download Button */}
                            {brochure.brochure?.asset && (
                                <DownloadButton fileUrl={brochure.brochure.asset.url} serviceTitle={brochure.serviceCardTitle} />)}

                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default BrochuresPage;
