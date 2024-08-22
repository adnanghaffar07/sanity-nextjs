// pages/index.js

import Link from "next/link";
import { client } from "../../../../sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import HeroSectionComponent from "../../components/HeroSectionComponent";
import Image from "next/image";
import ScrollButton from "../../components/valueBluePrint";
import MobileAppServiceSection from "../../components/mobileAppServiceAccordian";
import SecondMobileServiceAcc from "../../components/SecondMobileServiceAccordian";

async function getData(params: string) {
  const query = `*[_type == 'logicalServices' && urlPath == '${params}'][0]`;
  try {
    const fetchData = await client.fetch(query);
    return fetchData || [];
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

async function getSubData() {
  const querySub = `*[_type == 'subService'] | order(_createdAt asc)`;
  try {
    const fetchData = await client.fetch(querySub);
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
export async function generateMetadata({
  params,
}: {
  params: { service: string };
}) {
  const data = await getData(params.service); // Ensure to pass params.service to getData
  const defaultTitle = "Code Automation - Custom Software and Mobile Development Company in USA";
  const defaultDescription = "Custom Software and Mobile Development Company in USA";
  const defaultKeywords = "CodeAutomation.ai";

  const title = data.webSeoMetadata?.title || defaultTitle;
  const description = data.webSeoMetadata?.description || defaultDescription;
  const keywords = data.webSeoMetadata?.keywords?.join(", ") || defaultKeywords;

  const facebookMeta = data.facebookCards || {};
  const twitterMeta = data.twitterCards || {};
  const linkedInMeta = data.linkedInCards || {};
  const pinterestMeta = data.pinterestCards || {};
  const whatsappMeta = data.whatsappCards || {};
  const telegramMeta = data.telegramCards || {};
  return {
    title,
    description,
    keywords,
    openGraph: {
      type: facebookMeta.facebookType || "website",
      url: facebookMeta.facebookUrl || "https://codeautomation.ai",
      title: facebookMeta.facebookTitle || title,
      description: facebookMeta.facebookDescription || description,
      images: [
        {
          url: urlForImage(data.heroImage).toString(),
          width: 1200,
          height: 630,
          alt: title,
        }
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: twitterMeta.twitterTitle || title,
      description: twitterMeta.twitterDescription || description,
      images: [
        {
          url: urlForImage(data.heroImage).toString(),
          alt: title,
        }
      ],
    },
    linkedIn: {
      title: linkedInMeta.linkedInTitle || title,
      description: linkedInMeta.linkedInDescription || description,
      image: urlForImage(data.heroImage).toString(),
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

export default async function service({
  params,
}: {
  params: { service: string };
}) {
  const data = await getData(params.service);
  const dataSub = await getSubData();
  const dataLogo = await getLogoData();

  return (
    <div className="bg-white">
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
              <h2 className="title capitalize">{data.serviceTitle}</h2>
            </div>
            <div className="lg:text-2xl text-base text-center mt-4 max-md:max-w-full lg:px-32">
              {data.serviceDesc}
            </div>
          </div>
        </div>
      </div>
      {/* Introduction Section */}
      <section className="relative px-6 md:px-16 py-10 md:py-16 bg-white">
        <div className="absolute inset-0 bg-[#1D92FB] opacity-10 pointer-events-none"></div>
        <div className="container mx-auto flex flex-wrap items-center justify-center relative">
          {/* Image on the left */}
          {data.introductionSection?.introImage && (
            <div className="w-full md:w-1/3 md:flex md:pr-8 md:pl-8 mb-4">
              <Image
                src={urlForImage(data.introductionSection?.introImage).toString()}
                alt="Introduction image"
                width={370}
                height={150}
                className="object-cover rounded-lg"
                loading="lazy"
              />
            </div>
          )}

          {/* Content on the right */}
          {data.introductionSection?.introHeading && data.introductionSection?.introDesc && (
            <div className="w-full md:w-1/2">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
                  {data.introductionSection.introHeading}
                </h2>
                <p className="text-lg text-gray-800 leading-relaxed text-center md:text-justify">
                  {data.introductionSection.introDesc}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>



      {/* Design section */}
      {data.designSection &&
        <section className="bg-white px-6 md:px-16 py-10 md:py-16">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              {data.designSection?.heading}
            </h2>
            <p className="text-lg text-center">
              {data.designSection?.description}
            </p>
          </div>
        </section>
      }


      {/* Development section */}
      {data.developmentSection &&
        <section className="px-6 md:px-16 py-10 md:py-16">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              {data.developmentSection?.heading}
            </h2>
            <p className="text-lg text-center">
              {data.developmentSection?.description}
            </p>
          </div>
        </section>
      }

      {/* Implementation section */}
      {data.implementationSection &&
        <section className="bg-white px-6 md:px-16 py-10 md:py-16">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              {data.implementationSection?.heading}
            </h2>
            <p className="text-lg text-center">
              {data.implementationSection?.description}
            </p>
          </div>
        </section>
      }

      {/* child service cards */}
      {data.subServices &&
        <section className="px-6 md:px-16 py-10 md:py-16 bg-white">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">
              {data.subServiceHeading}
            </h2>
            <p className="text-lg mb-10 max-w-3xl text-center mx-auto">
              {data.subServiceDesc}
            </p>
            <div
              className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-[20px] sm:gap-[30px] 2xl:gap-[30px] max-w-[1440px] sm:my-40"
              style={{
                marginTop: data.toolsTechSection?.toolsTechDesc ? "0" : "0",
                marginBottom: data.toolsTechSection?.toolsTechDesc ? "0" : "0",
              }}
            >
              {data.subServices &&
                data.subServices.map((subServiceRef: any) => {
                  const subService = dataSub.find(
                    (item: any) => item._id === subServiceRef._ref
                  );
                  if (subService) {
                    const logos = subService.images?.map((logoRef: any) =>
                      dataLogo.find((logo: any) => logo._id === logoRef._ref)
                    );
                    return (
                      <Link
                        href={`/services/${params.service}/${subService.urlPathSub}`}
                        key={subService._id}
                      >
                        <div className="bg-white shadow-md w-auto sm:w-[400px] rounded-lg overflow-hidden hover:shadow-lg transition duration-300 h-full">
                          <img
                            src={urlForImage(subService.heroImageSub).toString()}
                            alt={subService.serviceCardSub}
                            className="w-full h-40 object-cover"
                          />
                          <div className="p-6">
                            <div className="flex items-center justify-center mb-4">
                              {logos?.map((logoData: any, logoIndex: any) => (
                                <div key={logoIndex} className="mr-2">
                                  <img
                                    src={urlForImage(logoData.image).toString()}
                                    alt={logoData.heading}
                                    className="h-10 object-cover"
                                  />
                                </div>
                              ))}
                              <h3 className="text-xl font-semibold text-center">
                                {subService.serviceCardSub}
                              </h3>
                            </div>
                            <p className="text-gray-700 text-center">
                              {subService.serviceDescSub}
                            </p>
                          </div>
                        </div>
                      </Link>
                    );
                  } else {
                    return null;
                  }
                })}
            </div>
          </div>
        </section>
      }

      {/* Our Mobile App Development Services Section */}
      {data.mobileAppServices &&
        <section className="px-6 md:px-16 py-10 md:py-16 relative">
          <div className="absolute inset-0 bg-[#1D92FB] opacity-10 pointer-events-none"></div>
          {/* Heading and Description */}
          <div className="text-center mb-10 relative">
            <h2 className="text-2xl font-bold text-[#3C3C3C] mb-4">
              {data.mobileAppServices.heading}
            </h2>
            <p className="text-lg text-[#3C3C3C] max-w-6xl mx-auto">
              {data.mobileAppServices.paragraph}
            </p>
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-8 relative">
            {data.mobileAppServices.cards.map((card: any, index: any) => (
              <div
                key={index}
                className="w-full max-w-7xl mx-auto bg-[#FDFDFD] border border-gray-300 rounded-lg p-8 shadow-md"
              >
                <h3 className="text-xl font-semibold text-[#3C3C3C] mb-4">
                  {card.title}
                </h3>
                <p className="text-lg text-[#3C3C3C]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      }

      {/* Why Choose Code Automation? Mobile APP*/}
      {data.whyChooseMobile &&
        <section className="px-6 md:px-16 py-10 md:py-16">
          <div className="max-w-7xl mx-auto">
            {/* Heading at the Top */}
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-[#3C3C3C] capitalize">
                {data.whyChooseMobile.heading}
              </h2>
            </div>

            {/* Content with Image and Text */}
            <div className="flex flex-col md:flex-row items-center justify-between">
              {/* Text Section on the Left */}
              <div className="flex-1 md:mr-8">
                {data.whyChooseMobile?.items.map((item: any, index: number) => (
                  <div key={index} className="mb-8">
                    <h3 className="text-xl font-semibold text-[#3C3C3C] mb-4">
                      {item.title}
                    </h3>
                    <p className="text-lg text-[#3C3C3C]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Image on the Right */}
              <div className="flex-1 mt-8 md:mt-0">
                <img
                  src={urlForImage(data.whyChooseMobile.image).toString()}
                  alt="why choose us"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>

          </div>

        </section>
      }


      {/* Industries & Applications We QA */}
      {data.industriesWeQA &&
        <section className="relative px-6 md:px-16 py-16 bg-white">
          <div className="absolute inset-0 bg-[#1D92FB] opacity-10 pointer-events-none"></div>

          {/* Centered Heading and Description */}
          <div className="flex flex-col items-center justify-center text-center mb-12 relative">
            <h2 className="text-3xl font-bold mb-4">   {data.industriesWeQA?.heading}</h2>
            <p className="text-lg text-gray-800 leading-relaxed max-w-3xl">   {data.industriesWeQA?.description}</p>
          </div>

          {/* Image on the Right and Bullet Points on the Left */}
          <div className="container mx-auto flex flex-wrap items-start justify-center relative max-w-7xl">
            {/* Bullet Points on the Left */}
            <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col space-y-4">
              <h2 className="text-3xl font-bold mb-4">{data.industriesWeQA?.bulletPointsHeading}</h2>
              {data.industriesWeQA?.bulletPoints?.map((point: any, index: any) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-lg transform transition-transform hover:scale-105">
                  <p className="text-[#3C3C3C] font-semibold">
                    • {point}
                  </p>
                </div>
              ))}
            </div>

            {/* Image on the Right */}
            <div className="w-full md:w-1/2 lg:w-2/3 flex md:mt-0 mt-6 justify-center md:justify-end">
              {data.industriesWeQA?.image && (
                <img
                  src={urlForImage(data.industriesWeQA?.image).toString()}
                  alt="Your Image"
                  className="rounded-lg object-cover max-w-full h-auto"
                />
              )}
            </div>
          </div>
        </section>
      }



      {/* Industries We Serve Section */}
      {data.industriesServe &&
        <section className="px-6 md:px-16 py-10 md:py-16">
          <div className="flex flex-col">
            <div className="flex gap-5 px-20 max-md:flex-wrap max-md:px-5">
              <div className="flex flex-col flex-1 justify-center text-4xl font-bold text-sky-500 capitalize leading-[60px] max-md:max-w-full">
                <div className="justify-center max-md:max-w-full">
                  <h2 className="font-medium text-black text-center capitalize leading-[60px]">
                    {data.industriesServe.heading}
                  </h2>
                </div>
              </div>
            </div>
            <div className="relative h-auto flex flex-col justify-center overflow-hidden">
              <div
                className="flex gap-5 h-auto justify-start pl-20 mt-6 max-md:flex-wrap max-md:pl-5 hide-scrollbar"
                id="scrollContainer"
                style={{ overflowX: 'auto' }}
              >
                {data.industriesServe?.bulletPoints.map((item: any, index: number) => (
                  <div
                    key={item._id}
                    className="h-auto flex-shrink-0 w-full sm:w-80 md:w-80 lg:w-1/4 bg-[#FBFBFB] border border-gray-300 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 relative"
                    style={{ minWidth: 'calc(100% / 4 - 20px)' }} // Ensure 4 cards per row with spacing
                  >
                    {/* Index on the Left Side */}
                    <div className="absolute top-6 left-6 rounded-lg bg-[#1D92FB] text-white text-xl font-bold px-4 py-2">
                      {index + 1}
                    </div>

                    {/* Heading and Bullet Points */}
                    <div className="px-5 py-7 pt-16 mt-6">
                      <h3 className="text-xl font-semibold text-[#3C3C3C] mb-4">
                        {item.heading}
                      </h3>
                      <ul className="list-disc pl-5 space-y-2 text-[#3C3C3C]">
                        {item.bulletPoints?.map((bullet: string, bulletIndex: number) => (
                          <li key={bulletIndex}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
              <ScrollButton scrollContainerId="scrollContainer" />
            </div>
          </div>
        </section>
      }
      {/* Tools & Technology Section */}
      <section className="relative px-6 md:px-16 py-16">
        <div className="absolute inset-0 bg-[#1D92FB] opacity-10 pointer-events-none"></div>
        <div className="container mx-auto relative">
          <h2 className="text-2xl text-center font-bold mb-4">
            {data.toolsTechSection?.toolsTechHeading}
          </h2>

          {/* Render paragraph if there's content */}
          {data.toolsTechSection?.toolsTechDesc && (
            <p className="text-lg text-[#3C3C3C] leading-relaxed max-w-5xl text-center mb-8 mx-auto">
              {data.toolsTechSection?.toolsTechDesc}
            </p>
          )}

          <div
            className={
              data.toolsTechSection?.toolsTech != null
                ? "flex flex-col sm:flex-row sm:flex-wrap justify-center gap-[20px] sm:gap-[30px] 2xl:gap-[30px] max-w-[1440px] sm:my-40"
                : "hidden"
            }
            style={{
              marginTop: data.toolsTechSection?.toolsTechDesc ? "0" : "0",
              marginBottom: data.toolsTechSection?.toolsTechDesc ? "0" : "0",
            }}
          >
            {data.toolsTechSection?.toolsTech?.map(
              (tool: any, toolIndex: any) => (
                <div key={toolIndex}>
                  <div className="bg-white shadow-md p-6 w-auto sm:w-[400px] rounded-lg flex flex-col h-full">
                    <div className="flex flex-row justify-center">
                      {tool.images?.map((logoRef: any, logoIndex: any) => {
                        const logoData = dataLogo.find(
                          (logo: any) => logo._id === logoRef._ref
                        );
                        if (logoData) {
                          return (
                            <div key={logoIndex} className="">
                              <img
                                src={urlForImage(logoData.image).toString()}
                                alt={logoData.heading}
                                className="h-8 object-cover mb-2 mr-2"
                              />
                            </div>
                          );
                        } else {
                          return null;
                        }
                      })}
                    </div>
                    <h3 className="text-xl text-center font-semibold mb-4">
                      {tool.heading}
                    </h3>
                    <p className="text-gray-700 text-center">{tool.detail}</p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
      {data.mobileAppServiceSection &&
      <MobileAppServiceSection data={data} />
}
      {data.secondMobileAppAcc &&
      <SecondMobileServiceAcc data={data} />
      }
      {/*  Preferred Choice for QA Testing*/}
      {data.advantagesOfQA &&
        <section className="px-6 py-10 md:px-16 md:py-16">
          <div className="justify-center text-center pb-10">
            <div>
              <h2 className="text-3xl font-bold text-[#3C3C3C] mb-4 mx-auto max-w-3xl">
                {data.preferredChoice.heading}
              </h2>
              <h3 className="text-xl font-bold text-[#3C3C3C] mb-4 mx-auto max-w-3xl">
                {data.preferredChoice.subheading}
              </h3>
              <p className="text-lg font-medium text-[#3C3C3C] mx-auto max-w-4xl">
                {data.preferredChoice.paragraph}
              </p>
            </div>
          </div>

          <div className="relative flex flex-col md:flex-row items-center justify-between z-10">
            <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 md:pl-12">
              <div className="space-y-8">
                {data.preferredChoice.items.map((item: any, index: any) => (
                  <div key={index} className="relative flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-[#1D92FB] text-white font-bold">
                        {item.number}
                      </div>
                      {index < data.preferredChoice.items.length - 1 && (
                        <div className="absolute left-5 top-16 h-10 border-l-4 border-[#1D92FB]" />
                      )}
                    </div>
                    <div className="ml-8">
                      <h3 className="text-xl font-semibold text-[#1D92FB]">
                        {item.title}
                      </h3>
                      <p className="text-[#3C3C3C] mt-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <img
                src={urlForImage(data.preferredChoice.image).toString()}
                alt="Software Development Services"
                className="w-3/4 rounded-lg shadow-lg z-10 md:mt-0 mt-6"
              />
            </div>
          </div>
        </section>
      }

      {/* Advantages of Our QA and Testing Services */}
      {data.advantagesOfQA &&
        <section className="relative px-6 py-10 md:px-16 md:py-16">
          <div className="absolute inset-0 bg-[#1D92FB] opacity-10"></div>
          <div className="justify-center text-center relative z-10 pb-10">
            <div>
              <h2 className="justify-center text-center text-3xl font-bold text-[#3C3C3C] mb-4 mx-auto max-w-3xl">
                {data.advantagesOfQA.heading}
              </h2>
              <p className="justify-center text-center text-lg font-medium text-[#3C3C3C] mx-auto max-w-4xl">
                {data.advantagesOfQA.subheading}
              </p>
            </div>
          </div>

          <div className="relative flex flex-col md:flex-row items-center justify-between z-10">
            <div className="md:w-1/2 flex justify-center">
              {data.advantagesOfQA.image && (
                <img
                  src={urlForImage(data.advantagesOfQA.image).toString()}
                  alt="Advantages of Our QA"
                  className="w-3/4 rounded-lg shadow-lg z-10 md:mt-0 mt-6"
                />
              )}
            </div>
            <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 md:pl-12">
              <div className="space-y-8">
                {data.advantagesOfQA.items?.map((item: any, index: any) => (
                  <div key={index} className="relative flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-[#1D92FB] text-white font-bold">
                        {item.number}
                      </div>
                      {index < data.advantagesOfQA.items.length - 1 && (
                        <div className="absolute left-5 top-16 h-10 border-l-4 border-[#1D92FB]" />
                      )}
                    </div>
                    <div className="ml-8">
                      <h3 className="text-xl font-semibold text-[#1D92FB]">
                        {item.title}
                      </h3>
                      <p className="text-[#3C3C3C] mt-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      }
      {/* Example Value of Service (Use Cases) Section */}
      {data.exampleServicesSection &&
        <section className="bg-white px-6 md:px-16 py-10 md:py-16">
          <div className="container mx-auto">
            <h2 className="text-2xl  text-center font-bold mb-8">
              {data.exampleServicesSection?.exampleServiceHeading}
            </h2>

            {data.exampleServicesSubSection?.exampleServicedesc && (
              <p className="text-xl text-center font-light mb-8">
                {data.exampleServicesSection?.exampleServicedesc}
              </p>
            )}

            <div
              className={
                data.exampleServicesSection?.exampleService != null
                  ? "flex flex-col sm:flex-row sm:flex-wrap justify-center gap-[20px] sm:gap-[30px] 2xl:gap-[30px] max-w-[1440px] sm:my-40"
                  : "hidden"
              }
              style={{
                marginTop: data.exampleServicesSection?.exampleService
                  ? "0"
                  : "0",
                marginBottom: data.exampleServicesSection
                  ?.exampleServicesSection
                  ? "0"
                  : "0",
              }}
            >
              {data.exampleServicesSection?.exampleService?.map(
                (example: any, exampleIndex: any) => (
                  <div key={exampleIndex}>
                    <div className="bg-gray-100 shadow-md p-6 w-auto sm:w-[400px] rounded-lg flex flex-col h-full">
                      <div className="flex flex-col  justify-center">
                        <h3 className="text-xl text-center font-semibold ">
                          {example.heading}
                        </h3>
                        <p className="text-gray-700 mt-4 text-center">
                          {example.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      }

      {/* Typical Project CycleFor QA and Mobile App development */}
      {data.projectCycleQA &&
        <section className="px-6 md:px-16 py-10 md:py-16 bg-white">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            {/* Right side (Content) */}
            <div className="col-span-1 md:col-span-1 ml-4 md:ml-24 max-w-4xl">
              {" "}
              {/* Adjusted margin */}
              <div>
                <h2 className="text-2xl font-bold mb-8 text-gray-800">
                  {data.projectCycleQA?.heading}
                </h2>
                <h3 className="text-xl font-bold mb-8 text-gray-800">
                  {data.projectCycleQA?.subHeading}
                </h3>
                <p className="text-lg text-gray-800">
                  {data.projectCycleQA?.paragraph}
                </p>

              </div>
            </div>
            {/* Left side (Image) */}
            <div className="col-span-1 md:col-span-1 flex justify-center">
              <div>
                {data.projectCycleQA?.projectCycleImg && (
                  <Image
                    src={urlForImage(
                      data.projectCycleQA?.projectCycleImg
                    ).toString()}
                    alt=""
                    width={370}
                    height={370}
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      }

      {/* Typical Project Cycle Stages Section */}
      {data.projectCycleSection &&
        <section className="px-6 md:px-16 py-10 md:py-16 bg-white">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            {/* Right side (Content) */}
            <div className="col-span-1 md:col-span-1 ml-4 md:ml-24">
              {" "}
              {/* Adjusted margin */}
              <div>
                <h2 className="text-2xl font-bold mb-8 text-gray-800">
                  {data.projectCycleSection?.projectCycleHaeding}
                </h2>
                <div className="list-disc list-inside ml-4">
                  {data.projectCycleSection?.projectCycle?.map(
                    (cycle: any, index: any) => (
                      <div
                        key={index}
                        className="flex items-center mb-8 relative"
                      >
                        <div className="w-8 md:w-12 h-8 md:h-12 rounded-full bg-[#1D92FB] opacity-[0.14] ml-4 md:ml-4 -left-4 md:-left-8 absolute"></div>
                        <p className="text-lg md:text-lg font-medium text-gray-700 ml-4 md:ml-4">
                          {cycle.detail}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
            {/* Left side (Image) */}
            <div className="col-span-1 md:col-span-1 flex justify-center">
              <div>
                {data.projectCycleSection?.projectCycleImg && (
                  <Image
                    src={urlForImage(
                      data.projectCycleSection?.projectCycleImg
                    ).toString()}
                    alt=""
                    width={370}
                    height={370}
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      }

      {/* Service Options Section For QA */}
      {data.qaDelivery &&
        <section className="bg-white px-6 md:px-16 py-10 md:py-16">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center ">
            {/* Left side (Image) */}
            <div className="col-span-1 md:col-span-1 flex justify-center">
              {data.qaDelivery?.qaDeliveryleImg && (
                <Image
                  src={urlForImage(data.qaDelivery?.qaDeliveryleImg).toString()}
                  alt="Delivery Image"
                  width={370}
                  height={370}
                />
              )}
            </div>
            {/* Right side (Content) */}
            <div className=" mr-4 md:mr-24 max-w-3xl ">
              <h2 className="text-2xl justify-start font-bold mb-8 text-gray-800">
                {data.qaDelivery?.heading}
              </h2>
              <h3 className="text-xl justify-start font-bold mb-8 text-gray-800">
                {data.qaDelivery?.subHeading}
              </h3>
              <p className="text-lg justify-start text-gray-800">
                {data.qaDelivery?.paragraph}
              </p>

            </div>
          </div>
        </section>
      }

      {/* Service Options Section */}
      {data.deliveryOptionSection &&
        <section className="bg-white px-6 md:px-16 py-10 md:py-16">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center ">
            {/* Left side (Image) */}
            <div className="col-span-1 md:col-span-1 flex justify-center">
              {data.deliveryOptionSection?.deliveryImg && (
                <Image
                  src={urlForImage(
                    data.deliveryOptionSection?.deliveryImg
                  ).toString()}
                  alt="Delivery Image"
                  width={370}
                  height={370}
                />
              )}
            </div>
            {/* Right side (Content) */}
            <div className="text-right mr-4 md:mr-24">
              <h2 className="text-2xl font-bold mb-8">
                {data.deliveryOptionSection?.deliveryOptionHaeding}
              </h2>
              <ul className="list-disc list-inside">
                {data.deliveryOptionSection?.deliveryOption?.map(
                  (cycle: any, index: any) => (
                    <div
                      key={index}
                      className="flex items-center mb-8 relative justify-end"
                    >
                      <div className="w-6 md:w-10 h-6 md:h-10 rounded-full bg-[#1D92FB] opacity-[0.14] ml-4 md:ml-4 -left-19 md:-left-19 absolute"></div>
                      <p className="text-lg md:text-lg font-medium text-gray-700 mr-8 md:mr-8">
                        {cycle.detail}
                      </p>
                    </div>
                  )
                )}
              </ul>
            </div>
          </div>
        </section>
      }

      {/* Special Offers Section */}
      <section
        className="px-6 md:px-16 py-10 md:py-16 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/Container.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side (Heading, Offer Text, and QA) */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-bold text-white mb-8">
              {data.specialOffersSection?.offerHeading}
            </h2>

            {data.specialOffersSection?.specialOffer && (
              <div className="bg-white bg-opacity-30 backdrop-blur-md p-6 rounded-lg mb-8">
                <p className="text-lg font-light text-white mb-4">
                  {data.specialOffersSection?.specialOffer}
                </p>
              </div>
            )}

            {data.specialOffersSection?.specialOfferQA?.length > 0 && (
              <div className="space-y-4">
                {data.specialOffersSection.specialOfferQA.map((qaItem: any, index: any) => (
                  <div
                    key={index}
                    className="bg-white bg-opacity-30 backdrop-blur-md p-6 rounded-lg"
                  >
                    <h3 className="text-lg font-bold text-white mb-2">
                      {qaItem.heading}
                    </h3>
                    <p className="text-base font-light text-white">
                      {qaItem.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right side (Image) */}
          <div className="col-span-1 md:col-span-1 flex justify-center">
            <div className="max-w-full h-[300px] md:h-full rounded-lg overflow-hidden">
              {data.specialOffersSection?.offerImg && (
                <Image
                  src={urlForImage(data.specialOffersSection?.offerImg).toString()}
                  alt="Special Offer"
                  width={300}
                  height={300}
                  className="object-cover rounded-lg"
                />
              )}
            </div>
          </div>
        </div>
      </section>



      {/* Summary Message about Service Section */}
      <section className="bg-white px-6 md:px-16 py-10 md:py-16 ">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold mb-8 text-center">
            {data.summarySection?.summaryHeading}
          </h2>
          <p className="text-lg text-center">
            {data.summarySection?.summaryMessage}
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="px-6 md:px-16 py-10 md:py-16 bg-gray-100">
        <div className="container mx-auto text-center max-w-6xl">
          <h2 className="text-2xl font-bold mb-4">
            {data.callToActionSection?.callToActionHeading}
          </h2>
          <p className="text-lg mb-8">
            {data.callToActionSection?.callToAction}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section className="px-6 md:px-16 py-10 md:py-16 bg-white">
                <div className="container mx-auto text-center">
                    <h2 className="text-2xl font-bold mb-4">{data.contactSection?.contactUsHeading}</h2>
                    <p className="text-lg text-center">
                        {data.contactSection?.contactUsDesc}

                    </p>
                   
                    <p className="text-blue-500 font-bold">
                     <Link href='mailto:info@codeautomation.ai' target="_blank"> {data.contactSection?.contactEmail} </Link>
                    </p> 
                  

                    <p className=" text-blue-500 font-bold">
                    <Link href='tel:+18505584691'>  {data.contactSection?.contactPhone} </Link>
                    </p>
                    <p className=" text-blue-500 font-bold">
                    <Link href='https://codeautomation.ai/' target="_blank">   {data.contactSection?.contactLink} </Link>
                    </p>
                </div>
            </section> */}
    </div>
  );
}
