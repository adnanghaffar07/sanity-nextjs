import Image from "next/image";
import { client } from "../../../../sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";
import ButtonScrollToSection from "../../components/ButtonScrollToSection";

async function getData() {
  const query = `*[_type == 'serviceSummary'][0]`;
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

// Updated generateMetadata function
export async function generateMetadata() {
  const data = await getData(); // Ensure to pass params.service to getData
  const defaultTitle = "Code Automation - Custom Software and Mobile Development Company in USA";
  const defaultDescription = "Custom Software and Mobile Development Company in USA";
  const defaultKeywords = "CodeAutomation.ai";

  const title = data.webSeoMetadata?.title || defaultTitle;
  const description = data.webSeoMetadata?.description || defaultDescription;
  const keywords = data.webSeoMetadata?.keywords?.join(", ") || defaultKeywords;

  const facebookMeta = data.facebool || {};
  const twitterMeta = data.twitterCards || {};
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
        }
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
        }
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
    }
  };
}

export default async function ServiceSummary() {
  const data = await getData()
  const dataLogo = await getLogoData();


  return (
    <div className="">
      {/* Hero Section */}
      <div className="flex overflow-hidden relative flex-col pb-12 w-full font-light text-white lg:min-h-[700px] max-md:max-w-full">
        {data.heroImage && (
          <img
            className="top-0 left-0 object-cover absolute inset-0 size-full"
            src={urlForImage(data.heroImage).toString()}
            alt="banner"
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
      <img
        loading="lazy"
        src="/affiliate-partner-eclipse.png"
        alt="eclipse icon"
        className="absolute w-[270px] z-0"

      />
      <div className="px-6 md:px-16 py-10 md:py-16 bg-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="">
            <div className="">
              <h2 className="text-2xl font-bold mb-8 text-center md:text-left "> {/* Adjusted text alignment for larger screens */}
                {data.introductionSection?.introHeading}
              </h2>
              <p className="text-lg text-gray-800 leading-relaxed text-justify text-center"> {/* Adjusted text alignment for larger screens */}
                {data.introductionSection?.introDesc}
              </p>

            </div>
          </div>
          {/* <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8 md:flex md:justify-center"> 
            <Image
              src={urlForImage(data.introductionSection?.introImage).toString()}
              alt=""
              width={570}
              height={370}
            />
          </div> */}
        </div>
      </div>
      {/* Detail Section */}
      <div className="px-6 md:px-16 py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">{data.detailSection.heading}</h2>
          <div className="flex flex-wrap gap-8 justify-center">
            {data.detailSection?.detailInd?.map((detail: any, index: any) => (
              <div key={index} className="bg-white rounded-lg shadow-xl p-6 mb-6 w-full max-w-xl border border-gray-700">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{detail.title}</h3>
                <p className="text-gray-600 mb-4">{detail.smDescription}</p>
                <p className="text-gray-700 mb-4">{detail.description}</p>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Key Benefits:</h4>
                <ul className="list-disc pl-6">
                  {detail.keyBenefits.map((benefit: any, index: any) => (
                    <li key={index} className="text-gray-700">{benefit}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Management Section */}
      <div className="px-6 md:px-16 py-10 md:py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">{data.projectManagement?.projectHeading}</h2>
          <div className="flex flex-wrap justify-center">
            {data.projectManagement?.toolsTech?.map((tool: any, toolIndex: any) => (
              <div key={toolIndex} className="w-full md:w-1/2 lg:w-1/3 p-4">
                <div className="bg-white border border-[#0a8ffc] shadow-md p-6 rounded-lg flex flex-col h-full">
                  <div className="flex flex-row justify-center mb-4">
                    {tool.images?.map((logoRef: any, logoIndex: any) => {
                      const logoData = dataLogo.find((logo: any) => logo._id === logoRef._ref);
                      if (logoData) {
                        return (
                          <div key={logoIndex} className="mr-2">
                            <img
                              src={urlForImage(logoData.image).toString()}
                              alt={logoData.heading}
                              className="h-8 object-cover"
                            />
                          </div>
                        );
                      } else {
                        return null;
                      }
                    })}
                  </div>
                  <h3 className="text-xl text-center font-semibold mb-4">{tool.heading}</h3>
                  <p className="text-gray-700 text-center">{tool.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Cycle Section */}
      <div className="px-6 md:px-16 py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-16">{data.projectCycleSection?.projectCycleHaeding}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-14">
            {data.projectCycleSection?.projectLifeCycle.map((step: any, index: any) => (
              <div key={index} className="bg-[#EDECEC] rounded-3xl shadow-sm relative">
                <div className="z-10 flex justify-center items-center px-5 mt-0 text-3xl font-semibold tracking-tight leading-4 text-justify whitespace-nowrap bg-white rounded-full h-[62px] w-[62px] absolute -right-2 -top-8 drop-shadow-serviceCard">
                  <span className="text-gray-800 font-bold text-lg">{index + 1}</span>
                </div>
                <div className="p-6 h-full">
                  <div className="text-base font-medium text-lg leading-6 pt-6 text-center">
                    {step.heading}
                  </div>
                  <div className="mt-5 text-xs font-light tracking-normal leading-4 text-justify">
                    {step.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <img
        loading="lazy"
        src="/affiliate-partner-eclipse.png"
        alt="eclipse icon"
        className="absolute w-[300px] z-0"

      />
      {/* Summary Section */}
      <div className="px-6 md:px-16 py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center">
          <div className="w-full md:w-1/2 md:pr-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold mb-8 text-center md:text-left "> {/* Adjusted text alignment for larger screens */}
                {data.summarySection?.summaryHeading}
              </h2>
              <p className="text-lg text-gray-800 leading-relaxed text-justify text-center"> {/* Adjusted text alignment for larger screens */}
                {data.summarySection?.summaryMessage}
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8 md:flex md:justify-center"> {/* Adjusted margin and flex styles for smaller screens */}
            <Image
              src={urlForImage(data.summarySection?.summaryImg).toString()}
              alt=""
              width={470}
              height={250}
            />
          </div>
        </div>
      </div>




      {/* Call to Action Section */}
      <div className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl md:text-2xl font-bold text-gray-800 mb-6">{data.callToActionSection?.callToActionHeading}</h2>
            <p className="text-lg text-gray-700 mb-8">{data.callToActionSection?.callToAction}</p>
            <div className="mt-8 flex justify-center ">
              <ButtonScrollToSection
                content="Get Started Now"
                classes="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                destination="contact-box"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Special Offer Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">{data.specialOffersSection?.offerHeading}</h2>
            <p className="text-lg text-gray-700 mb-8">{data.specialOffersSection?.specialOffer}</p>
            <div className="mt-8 flex justify-center">
              <ButtonScrollToSection
                content="Claim Offer"
                classes="bg-gradient-to-r ml-3 from-pink-500 to-purple-500 cursor-pointer text-white font-bold py-3 px-8 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500"
                destination="contact-box"
              />
            </div>

          </div>
        </div>
      </div>

      {/* Payment Section */}
      <div className="px-6 md:px-16 py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            {data.paymentOption?.paymentHeading}
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center">
            {data.paymentOption?.paymentDetail}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-5 gap-8">
            {data.paymentOption?.paymentTools?.map((tool: any, toolIndex: any) => (
              <div
                key={toolIndex}
                className="p-4 flex flex-col items-center transform hover:scale-105 transition-transform duration-300"
              >
                <div className="flex flex-row justify-center mb-4 space-x-2">
                  {tool.images?.map((logoRef: any, logoIndex: any) => {
                    const logoData = dataLogo.find((logo: any) => logo._id === logoRef._ref);
                    if (logoData) {
                      return (
                        <div key={logoIndex} className="mr-2">
                          <img
                            src={urlForImage(logoData.image).toString()}
                            alt={logoData.heading}
                            className="h-12 object-cover"
                          />
                        </div>
                      );
                    } else {
                      return null;
                    }
                  })}
                </div>
                <h3 className="text-xl font-semibold text-center mb-2 text-gray-800">{tool.heading}</h3>
                <p className="text-gray-600 text-center">{tool.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>


    </div>
  );
}
