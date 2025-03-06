import Image from "next/image";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";
import ButtonScrollToSection from "../components/ButtonScrollToSection";
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
  const canonicalUrl = "https://codeautomation.ai/value-blueprints";
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
    alternates: {
      canonical: canonicalUrl, // ✅ This ensures correct canonical
    },
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
      <div className="px-6 md:px-16 py-10 md:py-16 relative">
        <div className="absolute inset-0 bg-[#1D92FB] opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl relative mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
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
      <section
        className="px-6 md:px-16 py-10 bg-white"
        style={{
          backgroundImage: "url(/Container.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col max-w-[1400px] mx-auto">
          <div className="flex gap-5 px-20 max-md:flex-wrap max-md:px-5">
            <div className="flex flex-col flex-1 justify-center text-4xl font-bold text-sky-500 capitalize leading-[60px] max-md:max-w-full">
              <div className="justify-center text-center">
                <span className="font-medium text-white capitalize leading-[60px] text-center">
                  Explore Our Value{" "}
                </span>
                <span className="text-white capitalize leading-[60px]">
                  BLUEPRINTS
                </span>
              </div>
            </div>
          </div>
          <div className="relative h-auto flex flex-col justify-center overflow-hidden">
            <div
              className="flex overflow-x-auto overflow-y-hidden gap-5 h-auto justify-start md:pl-20 mt-8 max-md:flex-wrap max-md:pl-0 hide-scrollbar"
              id="scrollContainer"
            >
              {portfolioData.map((item: any) => (
                <Link
                  key={item._id}
                  href={`/value-blueprints/${item._id}`}
                  aria-label={`View details of ${item.title}`}
                >
                  {/* Card Container */}
                  <div className="relative w-full sm:w-80 md:w-80 h-[200px] md:h-[230px] rounded-lg overflow-hidden group">
                    {/* Main Image (Covers Full Width) */}
                    <img
                      src={urlForImage(item.heroimage).toString()}
                      alt={item.title}
                      className="w-full h-[200px] md:h-[230px] object-cover rounded aspect-[3.06] transition duration-300 group-hover:scale-110"
                    />

                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                      {/* Logos Row */}
                      <div className="flex gap-3 justify-center mb-3">
                        {item.caseStudiesToolsSection?.toolsTech?.map((tool: any, toolIndex: any) =>
                          tool?.images.map((logoRef: any, logoIndex: any) => {
                            const logoData = dataLogo.find((logo: any) => logo._id === logoRef._ref);
                            if (logoData) {
                              return (
                                <img
                                  key={logoIndex}
                                  src={urlForImage(logoData.image).toString()}
                                  alt={logoData.heading}
                                  className="h-10 bg-white rounded-full object-contain"
                                />
                              );
                            }
                            return null;
                          })
                        )}
                      </div>

                      {/* Title */}
                      <div className="text-white text-lg font-medium text-center px-3">
                        {item.title}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <ScrollButton
              scrollContainerId="scrollContainer"
              totalItems={portfolioData.length}
              itemsPerPage={3}
            />
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
      <div className="px-6 md:px-16 py-10 md:py-16 relative">
        <div className="absolute inset-0 bg-[#1D92FB] opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 relative">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            {data.toolsTechSection?.toolsTechHeading}
          </h2>
          <h2 className="text-lg text-gray-800 leading-relaxed text-center mb-6">
            {data.toolsTechSection?.toolsTechDesc}
          </h2>
          <div className="flex justify-center items-center mt-10 w-full max-md:max-w-full">
            <div className="flex flex-col w-full max-w-[1090px] max-md:max-w-full">
              {/* Top Row */}
              <div className="flex flex-wrap gap-5 justify-center items-center mb-10">
                {data.toolsTechSection?.toolsTech
                  ?.slice(0, 7)
                  .map((tool: any, toolIndex: any) => (
                    <div
                      key={toolIndex}
                      className="flex flex-col items-center justify-center w-1/4 sm:w-1/4 md:w-1/4 lg:w-1/5"
                    >
                      <div className="flex items-center justify-start h-full group cursor-pointer">
                        <div className="flex justify-center">
                          {tool.images?.map((logoRef: any, logoIndex: any) => {
                            const logoData = dataLogo.find(
                              (logo: any) => logo._id === logoRef._ref
                            );
                            if (logoData) {
                              return (
                                <div
                                  key={logoIndex}
                                  className=" flex md:flex-row flex-col items-center"
                                >
                                  <img
                                    src={urlForImage(logoData.image).toString()}
                                    alt={logoData.heading}
                                    className="h-10 md:h-14 md:mr-2 object-cover cursor-pointer"
                                  />
                                  <h3 className="text-sm text-gray-800 font-semibold cursor-pointer mt-2">
                                    {tool.heading}
                                  </h3>
                                </div>
                              );
                            } else {
                              return null;
                            }
                          })}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              {/* Middle Row */}
              <div className="flex flex-wrap gap-5 justify-center  items-center mb-10">
                {data.toolsTechSection?.toolsTech
                  ?.slice(7, 14)
                  .map((tool: any, toolIndex: any) => (
                    <div
                      key={toolIndex}
                      className="flex flex-col items-center justify-center w-1/4 sm:w-1/4 md:w-1/4 lg:w-1/5"
                    >
                      <div className="flex items-center justify-center h-full group cursor-pointer">
                        <div className="flex justify-center">
                          {tool.images?.map((logoRef: any, logoIndex: any) => {
                            const logoData = dataLogo.find(
                              (logo: any) => logo._id === logoRef._ref
                            );
                            if (logoData) {
                              return (
                                <div
                                  key={logoIndex}
                                  className=" flex md:flex-row flex-col items-center"
                                >
                                  <img
                                    src={urlForImage(logoData.image).toString()}
                                    alt={logoData.heading}
                                    className="h-10 md:h-14 md:mr-2 object-cover cursor-pointer"
                                  />
                                  <h3 className="text-sm text-gray-800 font-semibold text-center cursor-pointer mt-2">
                                    {tool.heading}
                                  </h3>
                                </div>
                              );
                            } else {
                              return null;
                            }
                          })}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              {/* Bottom Row */}
              <div className="flex flex-wrap gap-5 justify-center items-center">
                {data.toolsTechSection?.toolsTech
                  ?.slice(14, 18)
                  .map((tool: any, toolIndex: any) => (
                    <div
                      key={toolIndex}
                      className="flex flex-col items-center justify-center w-1/4 sm:w-1/4 md:w-1/4 lg:w-1/5"
                    >
                      <div className="flex items-center justify-center h-full group cursor-pointer">
                        <div className="flex justify-center">
                          {tool.images?.map((logoRef: any, logoIndex: any) => {
                            const logoData = dataLogo.find(
                              (logo: any) => logo._id === logoRef._ref
                            );
                            if (logoData) {
                              return (
                                <div
                                  key={logoIndex}
                                  className=" flex md:flex-row flex-col items-center"
                                >
                                  <img
                                    src={urlForImage(logoData.image).toString()}
                                    alt={logoData.heading}
                                    className="h-10 md:h-14 md:mr-2 object-cover cursor-pointer"
                                  />
                                  <h3 className="text-sm text-gray-800 font-semibold cursor-pointer mt-2">
                                    {tool.heading}
                                  </h3>
                                </div>
                              );
                            } else {
                              return null;
                            }
                          })}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Project Cycle Section */}
      <div className="px-6 md:px-16 py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            {data.projectCycleSection?.projectCycleHaeding}
          </h2>
          <div className="flex flex-wrap justify-center">
            {data.projectCycleSection?.projectCycle.map(
              (tool: any, toolIndex: any) => (
                <div key={toolIndex} className="w-full md:w-1/2 lg:w-1/3 p-4">
                  <div className="bg-white shadow-xl p-6 rounded-lg flex flex-col h-full transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#1D92FB] group">
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
      <div className="px-6 md:px-16 py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            {data.deliveryOptionSection?.deliveryOptionHaeding}
          </h2>
          <div className="flex flex-wrap justify-center">
            {data.deliveryOptionSection?.deliveryOption.map(
              (tool: any, toolIndex: any) => (
                <div key={toolIndex} className="w-full md:w-1/2 lg:w-1/3 p-4">
                  <div className="bg-white shadow-xl p-6 rounded-lg flex flex-col h-full transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#1D92FB] group">
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
      <div className="px-6 md:px-16 py-10 md:py-16 relative">
        <div className="absolute inset-0 bg-[#1D92FB] opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center relative">
          <div className="w-full md:w-1/2">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
                {data.summarySection?.summaryHeading}
              </h2>
              <p className="text-lg text-gray-800 leading-relaxed text-center md:text-left">
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
      <div className="flex justify-center items-center px-16 py-6 md:py-20 bg-white max-md:px-5">
        <div className="w-full max-w-[1066px] max-md:max-w-full">
          <div className="flex gap-16 max-md:flex-col max-md:gap-0">
            {/* Call to Action Card */}
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center px-20 py-11 w-full rounded-3xl border border-solid bg-sky-500 bg-opacity-10 max-md:px-5 max-md:mt-10 max-md:max-w-full transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
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
              <div className="flex flex-col grow items-center px-20 py-11 w-full rounded-3xl border border-solid bg-[#F7E022] bg-opacity-10 max-md:px-5 max-md:mt-10 max-md:max-w-full transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
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
