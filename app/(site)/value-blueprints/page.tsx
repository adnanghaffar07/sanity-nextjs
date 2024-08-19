import Image from "next/image";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";
import ButtonScrollToSection from "../components/ButtonScrollToSection";
import { useState } from "react";
import ScrollButton from "../components/valueBluePrint";

async function getData() {
  const query = `*[_type == 'valueBlueprints'][0]`;
  try {
    const fetchData = await client.fetch(query);
    return fetchData || [];
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}
async function getLogoData() {
  const queryLogo = `*[_type == 'techLogos'] | order(_createdAt asc)`;
  try {
    const fetchData = await client.fetch(queryLogo);
    return fetchData || [];
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

async function getValueData() {
  const queryValue = `*[_type == 'portfolio' && pageType == 'valueBlueprint'] | order(_createdAt asc)`;
  try {
    const fetchData = await client.fetch(queryValue);
    return fetchData || [];
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

// Updated generateMetadata function
export async function generateMetadata() {
  const data = await getData();
  const defaultTitle =
    "Code Automation - Custom Software and Mobile Development Company in USA";
  const defaultDescription =
    "Custom Software and Mobile Development Company in USA";
  const defaultKeywords = "CodeAutomation.ai";

  const title = data.webSeoMetadata?.title || defaultTitle;
  const description = data.webSeoMetadata?.description || defaultDescription;
  const keywords = data.webSeoMetadata?.keywords?.join(", ") || defaultKeywords;

  const facebookMeta = data.facebook || {};
  const twitterMeta = data.twitterhMeta || {};
  const linkedInMeta = data.linkedInCards || {};
  const pinterestMeta = data.pinterestCards || {};
  const whatsappMeta = data.whatsappCards || {};
  const telegramMeta = data.telegramCards || {};

  const heroImageUrl = urlForImage(data.heroImage).toString(); // Use a default image if heroImage is not available
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
          url: heroImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: twitterMeta.title || title,
      description: twitterMeta.description || description,
      images: [
        {
          url: heroImageUrl,
          alt: title,
        },
      ],
    },
    linkedIn: {
      title: linkedInMeta.linkedInTitle || title,
      description: linkedInMeta.linkedInDescription || description,
      image: heroImageUrl,
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
    },
  };
}

export default async function ValueBlueprints() {
  const data = await getData();
  const dataLogo = await getLogoData();
  const portfolioData = await getValueData();

  console.log("Tools & Tech", portfolioData.caseStudiesToolsSection);

  return (
    <div className="">
      {/* Hero Section */}
      <div className="flex overflow-hidden relative flex-col pb-12 w-full font-light text-white lg:min-h-[700px] max-md:max-w-full">
        {data.heroImage && (
          <img
            className="top-0 left-0 object-cover absolute inset-0 size-full"
            src={urlForImage(data.heroImage).toString()}
            alt=""
          />
        )}
        <div className="flex relative flex-col items-center lg:px-20 px-5 lg:pt-12 lg:pb-0 pt-48 pb-36 w-full max-md:px-5 max-md:max-w-full flex-grow">
          <div className="lg:absolute lg:top-[300px]">
            <div className="lg:text-4xl text-2xl font-bold text-center capitalize max-lg:mt-0 lg:w-8/12 mx-auto">
              <h2 className="title capitalize leading-[56px]">{data.title}</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <img
        loading="lazy"
        src="/stroke1.png"
        alt="eclipse icon"
        className="absolute w-[130px] z-0"
      />

      <div className="px-6 md:px-16 py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
                {data.introductionSection?.introHeading}
              </h2>
              <p className="text-lg text-gray-800 leading-relaxed text-justify md:text-left">
                {data.introductionSection?.introDesc}
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8 md:flex md:justify-center">
            <Image
              src={urlForImage(data.introductionSection?.introImage).toString()}
              alt="Introduction image"
              width={520}
              height={320}
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Explore Blueprints section */}
      <section className="px-6 md:px-16 py-10 md:py-16 bg-slate-100">
        <div className="flex flex-col pt-20 pb-6">
          <div className="flex gap-5 px-20 max-md:flex-wrap max-md:px-5">
            <div className="flex flex-col flex-1 justify-center text-4xl font-bold text-sky-500 capitalize leading-[60px] max-md:max-w-full">
              <div className="justify-center max-md:max-w-full">
                <span className="font-medium text-black capitalize leading-[60px]">
                  Explore Our Value{" "}
                </span>
                <span className="text-sky-500 capitalize leading-[60px]">
                  BLUEPRINTS
                </span>
              </div>
            </div>
          </div>
          <div className="relative h-auto flex flex-col justify-center overflow-hidden">
            <div
              className="flex overflow-x-auto overflow-y-hidden gap-5 h-auto justify-start pl-20 mt-6 max-md:flex-wrap max-md:pl-5 hide-scrollbar"
              id="scrollContainer"
            >
              {portfolioData.map((item: any) => (
                <Link
                  key={item._id}
                  href={`/value-blueprints/${item._id}`}
                  aria-label={`View details of ${item.title}`}
                >
                  <div className="h-auto w-full sm:w-80 md:w-80">
                    <div className="shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300 h-full relative">
                      <div className="w-full h-58 md:h-64 lg:h-72">
                        <img
                          src={urlForImage(item.heroimage).toString()}
                          alt={item.title}
                          className="w-full h-full object-cover transition duration-300 hover:scale-105"
                        />
                      </div>
                      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-40 backdrop-blur-md text-white px-2 py-4">
                        <h3 className="text-lg md:text-lg font-light transition duration-300">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    <div className="flex justify-center mt-2 flex-wrap">
                      {item.caseStudiesToolsSection?.toolsTech?.map(
                        (tool: any, toolIndex: any) => (
                          <div
                            key={toolIndex}
                            className="relative mx-2 my-1 group"
                          >
                            {tool?.images.map(
                              (logoRef: any, logoIndex: any) => {
                                const logoData = dataLogo.find(
                                  (logo: any) => logo._id === logoRef._ref
                                );
                                if (logoData) {
                                  return (
                                    <div
                                      key={logoIndex}
                                      className="relative pb-7"
                                    >
                                      <div className="flex items-center justify-center">
                                        <div className="relative group">
                                          <img
                                            src={urlForImage(
                                              logoData.image
                                            ).toString()}
                                            alt={logoData.heading}
                                            className="h-11 w-11 border-grey-800 shadow-lg transition-transform duration-500 object-cover group-hover:scale-110 rounded-full"
                                          />
                                          <div className="absolute inset-x-0 -bottom-8 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <div className="mt-2 bg-white text-black text-sm rounded-md shadow-lg px-2 py-1 whitespace-nowrap">
                                              {logoData.heading}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  );
                                } else {
                                  return null;
                                }
                              }
                            )}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <ScrollButton scrollContainerId="scrollContainer" />
          </div>
        </div>
      </section>

      {/* Tools and Technology */}
      <img
        loading="lazy"
        src="/stroke2.png"
        alt="eclipse icon"
        className="absolute right-0 w-[150px] z-0"
      />
      <div className="px-6 md:px-16 py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            {data.toolsTechSection?.toolsTechHeading}
          </h2>
          <h2 className="text-lg text-gray-800 leading-relaxed text-center mb-6">
            {data.toolsTechSection?.toolsTechDesc}
          </h2>
          <div className="flex justify-center items-center mt-10 w-full max-md:max-w-full">
            <div className="flex flex-col w-full max-w-[1090px] max-md:max-w-full">
              {/* Top Row */}
              <div className="flex flex-wrap gap-5 md:justify-center justify-start items-center mb-10">
                {data.toolsTechSection?.toolsTech
                  ?.slice(0, 7)
                  .map((tool: any, toolIndex: any) => (
                    <div
                      key={toolIndex}
                      className="flex items-center justify-center w-full sm:w-1/3 md:w-1/4 lg:w-1/5"
                    >
                      <div className="flex items-center justify-start h-full group">
                        <div className="flex justify-center">
                          {tool.images?.map((logoRef: any, logoIndex: any) => {
                            const logoData = dataLogo.find(
                              (logo: any) => logo._id === logoRef._ref
                            );
                            if (logoData) {
                              return (
                                <div key={logoIndex} className="mr-2">
                                  <img
                                    src={urlForImage(logoData.image).toString()}
                                    alt={logoData.heading}
                                    className="h-12 object-cover grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110"
                                  />
                                </div>
                              );
                            } else {
                              return null;
                            }
                          })}
                        </div>
                        <h3 className="text-lg text-[#C4C4C4] transition-all duration-300 group-hover:text-gray-800">
                          {tool.heading}
                        </h3>
                      </div>
                    </div>
                  ))}
              </div>

              {/* Middle Row */}
              <div className="flex flex-wrap gap-5 md:justify-center justify-start items-center mb-10">
                {data.toolsTechSection?.toolsTech
                  ?.slice(7, 14)
                  .map((tool: any, toolIndex: any) => (
                    <div
                      key={toolIndex}
                      className="flex items-center justify-center w-full sm:w-1/3 md:w-1/4 lg:w-1/5"
                    >
                      <div className="flex items-center justify-center h-full group">
                        <div className="flex justify-center">
                          {tool.images?.map((logoRef: any, logoIndex: any) => {
                            const logoData = dataLogo.find(
                              (logo: any) => logo._id === logoRef._ref
                            );
                            if (logoData) {
                              return (
                                <div key={logoIndex} className="mr-1">
                                  <img
                                    src={urlForImage(logoData.image).toString()}
                                    alt={logoData.heading}
                                    className="h-12 object-cover grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110"
                                  />
                                </div>
                              );
                            } else {
                              return null;
                            }
                          })}
                        </div>
                        <h3 className="text-lg text-[#C4C4C4] transition-all duration-300 group-hover:text-gray-800">
                          {tool.heading}
                        </h3>
                      </div>
                    </div>
                  ))}
              </div>

              {/* Bottom Row */}
              <div className="flex flex-wrap gap-5 md:justify-center justify-start items-center">
                {data.toolsTechSection?.toolsTech
                  ?.slice(14, 17)
                  .map((tool: any, toolIndex: any) => (
                    <div
                      key={toolIndex}
                      className="flex items-center justify-center w-full sm:w-1/3 md:w-1/4 lg:w-1/5"
                    >
                      <div className="flex items-center justify-center h-full group">
                        <div className="flex justify-center">
                          {tool.images?.map((logoRef: any, logoIndex: any) => {
                            const logoData = dataLogo.find(
                              (logo: any) => logo._id === logoRef._ref
                            );
                            if (logoData) {
                              return (
                                <div key={logoIndex} className="mr-1">
                                  <img
                                    src={urlForImage(logoData.image).toString()}
                                    alt={logoData.heading}
                                    className="h-12 object-cover grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110"
                                  />
                                </div>
                              );
                            } else {
                              return null;
                            }
                          })}
                        </div>
                        <h3 className="text-lg text-[#C4C4C4] transition-all duration-300 group-hover:text-gray-800">
                          {tool.heading}
                        </h3>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Cycle Section */}
      <div className="px-6 md:px-16 py-10 md:py-16 bg-[#F1F5F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            {data.projectCycleSection?.projectCycleHaeding}
          </h2>
          <div className="flex flex-wrap justify-center">
            {data.projectCycleSection?.projectCycle.map(
              (tool: any, toolIndex: any) => (
                <div key={toolIndex} className="w-full md:w-1/2 lg:w-1/3 p-4">
                  <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col h-full transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#1D92FB] group">
                    <div className="flex flex-row justify-center mb-4">
                      {tool.projectImage && (
                        <div className="mr-2">
                          <img
                            src={urlForImage(tool.projectImage).toString()}
                            alt={tool.projectImage.alt || tool.heading}
                            className="h-12 object-cover transition-transform duration-300 ease-in-out group-hover:scale-90"
                          />
                        </div>
                      )}
                    </div>
                    <h3 className="text-xl text-center font-semibold mb-4 transition-colors duration-300 ease-in-out group-hover:text-white">
                      {tool.heading}
                    </h3>
                    <p className="text-gray-500 text-center transition-colors duration-300 ease-in-out group-hover:text-white">
                      {tool.detail}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Service Delivery Options */}
      <div className="px-6 md:px-16 py-10 md:py-16 bg-[#F1F5F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            {data.deliveryOptionSection?.deliveryOptionHaeding}
          </h2>
          <div className="flex flex-wrap justify-center">
            {data.deliveryOptionSection?.deliveryOption.map(
              (tool: any, toolIndex: any) => (
                <div key={toolIndex} className="w-full md:w-1/2 lg:w-1/3 p-4">
                  <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col h-full transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#1D92FB] group">
                    <div className="flex flex-row justify-center mb-4">
                      {tool.deliveryImage && (
                        <div className="mr-2">
                          <img
                            src={urlForImage(tool.deliveryImage).toString()}
                            alt={tool.deliveryImage.alt || tool.heading}
                            className="h-12 object-cover transition-transform duration-300 ease-in-out group-hover:scale-90"
                          />
                        </div>
                      )}
                    </div>
                    <h3 className="text-xl text-center font-semibold mb-4 transition-colors duration-300 ease-in-out group-hover:text-white">
                      {tool.heading}
                    </h3>
                    <p className="text-gray-500 text-center transition-colors duration-300 ease-in-out group-hover:text-white">
                      {tool.detail}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Summary Section */}
      <img
        loading="lazy"
        src="/stroke1.png"
        alt="eclipse icon"
        className="absolute w-[120px] z-0"
      />

      <div className="px-6 md:px-16 py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
                {data.summarySection?.summaryHeading}
              </h2>
              <p className="text-lg text-gray-800 leading-relaxed text-justify md:text-left">
                {data.summarySection?.summaryMessage}
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8 md:flex md:justify-center">
            <Image
              src={urlForImage(data.summarySection?.summaryImg).toString()}
              alt="Introduction image"
              width={520}
              height={320}
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Combined Section */}
      <div className="flex justify-center items-center px-16 py-20 bg-slate-100 max-md:px-5">
        <div className="mt-7 w-full max-w-[1066px] max-md:max-w-full">
          <div className="flex gap-16 max-md:flex-col max-md:gap-0">
            {/* Call to Action Card */}
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center px-20 py-11 w-full rounded-3xl border border-solid bg-sky-500 bg-opacity-10 border-black border-opacity-0 max-md:px-5 max-md:mt-10 max-md:max-w-full transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    {data.callToActionSection?.callToActionHeading}
                  </h2>
                  <p className="text-lg text-gray-700 mb-8">
                    {data.callToActionSection?.callToAction}
                  </p>
                  {data.callToActionSection?.callToActionImg && (
                    <Image
                      src={urlForImage(
                        data.callToActionSection.callToActionImg
                      ).toString()}
                      alt={data.callToActionSection.callToActionImg.alt}
                      className="mx-auto mb-6"
                      width={120}
                      height={120}
                    />
                  )}
                  <ButtonScrollToSection
                    content="Get Started Now"
                    classes="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
                    destination="contact-box"
                    key="Get-Started-Now-button"
                  />
                </div>
              </div>
            </div>

            {/* Special Offer Card */}
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center px-20 py-11 w-full rounded-3xl border border-solid bg-[#666666] bg-opacity-10 border-black border-opacity-0 max-md:px-5 max-md:mt-10 max-md:max-w-full transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    {data.specialOffersSection?.offerHeading}
                  </h2>
                  <p className="text-lg text-gray-700 mb-8">
                    {data.specialOffersSection?.specialOffer}
                  </p>
                  {data.specialOffersSection?.offerImg && (
                    <Image
                      src={urlForImage(
                        data.specialOffersSection.offerImg
                      ).toString()}
                      alt={data.specialOffersSection.offerImg.alt}
                      className="mx-auto mb-6"
                      width={120}
                      height={120}
                    />
                  )}
                  <ButtonScrollToSection
                    classes="bg-[#F7E022] cursor-pointer text-black font-semibold py-2 px-8 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-yellow-500"
                    content="Claim Offer"
                    destination="contact-box"
                    key="Claim-Offer-button"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
