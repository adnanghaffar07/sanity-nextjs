// pages/index.js

import Link from "next/link";
import { client } from "../../../../sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import ScrollButton from "../../components/valueBluePrint";
import CustomSoftwareSection from "../../components/CustomSoftwareAcc";
import MobileAppServiceSection from "../../components/mobileAppServiceAccordian";
import SecondMobileServiceAcc from "../../components/SecondMobileServiceAccordian";
import ButtonScrollToSection from "../../components/ButtonScrollToSection";
import CaseStudiesHome from "../../components/CaseStudies-Home";
import CustomSoftware2Section from "../../components/CustomSoftware2Acc";
import Script from "next/script";
import FAQServicePage from "../../components/FaqService";
import { PortableText } from "@portabletext/react";
import { portableTextComponents } from "../../components/PortableTextServices";

async function getData(service: string) {
  if (!service) return null; // ✅ Prevents undefined errors
  const query = `*[_type == 'logicalServices' && urlPath == '${service}'][0]`;
  try {
    return await client.fetch(query);
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

async function getSubData() {
  const querySub = `*[_type == 'subService'] | order(_createdAt asc)`;
  try {
    return await client.fetch(querySub);
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

async function getLogoData() {
  const queryLogo = `*[_type == 'techLogos'] | order(_createdAt asc)`;
  try {
    return await client.fetch(queryLogo);
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}


// ✅ Fixed generateMetadata Function
export async function generateMetadata({ params }: { params: { service: string } }) {
  const data = await getData(params.service);

  const defaultTitle = "Code Automation - Custom Software and Mobile Development Company in USA";
  const defaultDescription = "Custom Software and Mobile Development Company in USA";
  const defaultKeywords = "CodeAutomation.ai";

  const title = data?.webSeoMetadata?.title || defaultTitle;
  const description = data?.webSeoMetadata?.description || defaultDescription;
  const keywords = data?.webSeoMetadata?.keywords?.join(", ") || defaultKeywords;

  const facebookMeta = data?.facebookCards || {};
  const twitterMeta = data?.twitterCards || {};
  const linkedInMeta = data?.linkedInCards || {};
  const pinterestMeta = data?.pinterestCards || {};
  const whatsappMeta = data?.whatsappCards || {};
  const telegramMeta = data?.telegramCards || {};

  const heroImageUrl = data?.heroImage ? urlForImage(data.heroImage).toString() : "/default-image.jpg"; // ✅ Prevents errors if image is missing

  // ✅ Fixed Canonical URL
  const canonicalUrl = params.service
    ? `https://codeautomation.ai/services/${params.service}`
    : "https://codeautomation.ai/services";

  return {
    title,
    description,
    keywords,
    openGraph: {
      type: facebookMeta.facebookType || "website",
      url: facebookMeta.facebookUrl || canonicalUrl, // ✅ Uses canonical URL
      title: facebookMeta.facebookTitle || title,
      description: facebookMeta.facebookDescription || description,
      images: [{ url: heroImageUrl, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: twitterMeta.twitterTitle || title,
      description: twitterMeta.twitterDescription || description,
      images: [{ url: heroImageUrl, alt: title }],
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
      canonical: canonicalUrl, // ✅ Fixed the canonical tag
    },
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
      {data?.jsonLd && (
        <Script
          id="services-pages"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: data.jsonLd }}
        />
      )}
      <div className="flex overflow-hidden relative flex-col pb-12 w-full font-light text-white lg:min-h-[700px] max-md:max-w-full">
        {data.heroImage && (
          <img
            className="top-0 left-0 object-fit absolute size-full"
            src={urlForImage(data.heroImage).toString()}
            alt={data.heroImage.alt}
          />
        )}
        <div className="absolute top-0 left-0 w-full h-full bg-[#020C16] opacity-65"></div>
        <div className="flex relative flex-col items-center lg:px-20 px-5 lg:pt-12 lg:pb-0 pt-48 pb-36 w-full max-md:px-5 max-md:max-w-full flex-grow">
          <div className="lg:absolute lg:top-[300px]">
            <h1 className="lg:text-4xl text-2xl font-bold text-center capitalize max-lg:mt-0 lg:w-8/12 mx-auto">
              {data.serviceTitle}
            </h1>
            <h2 className="lg:text-2xl mx-auto max-w-5xl text-base text-center mt-4 max-md:max-w-full lg:px-32">
              {data.serviceDesc}
            </h2>
            {(data.firstButton || data.secondButton || params.service === "mobile-app-development-services") && (
              <div className="flex flex-col sm:flex-row mx-auto pt-6 space-y-6 sm:space-y-0 sm:space-x-5 items-center justify-center">
                {data.firstButton && (
                  <ButtonScrollToSection
                    classes="bg-[#1d92fb] text-white cursor-pointer py-3 px-2 font-semibold rounded-lg shadow-lg text-center w-full sm:min-w-48 sm:max-w-72"
                    content={data.firstButton.firstButtonText}
                    key="first-button"
                    destination="contact-box"
                  />
                )}
                {data.secondButton?.SecondButtonUrl && (
                  <Link
                    href={data.secondButton.SecondButtonUrl}
                    className="bg-[#f7e022] text-black font-semibold py-3 px-2 rounded-lg shadow-lg text-center w-full sm:max-w-72"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {data.secondButton.SecondButtonText}
                  </Link>
                )}
                {params.service === "mobile-app-development-services" && (
                  <Link
                    href="/pricing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#f7e022] text-black font-semibold py-3 px-2 rounded-lg shadow-lg text-center w-full sm:max-w-72"
                  >
                    View Pricing
                  </Link>
                )}

              </div>
            )}

          </div>
        </div>
      </div>
      {/* Tools Section */}
      {data.toolsLogoSection?.logoArray?.length > 0 && (
        <section className="mx-auto px-6 md:px-16 bg-white max-w-6xl py-8">
          <h2 className="text-3xl font-bold text-center text-neutral-700">
            Tools & Technologies
          </h2>
          <h2 className="mt-4 text-lg font-medium mb-8 text-center text-neutral-700">
            We leverage industry-leading technologies and tools to create our Mobile Applications, including but not limited to
          </h2>
          <div className="grid grid-cols-4 gap-4 justify-center">
            {data.toolsLogoSection.logoArray.slice(0, 4).map((logo: any, index: number) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center justify-center md:space-x-4"
              >
                <div className="w-fit flex items-center justify-center">
                  <img
                    src={urlForImage(logo).toString()}
                    alt={logo?.alt}
                    className="h-10 md:h-16 object-cover cursor-pointer"
                  />
                </div>
                <span className="text-gray-900 mt-4 md:mt-0">{logo?.alt}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-4 mt-6 justify-center">
            {data.toolsLogoSection.logoArray.slice(4, 7).map((logo: any, index: number) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center justify-center md:space-x-4"
              >
                <div className="w-fit flex items-center justify-center">
                  <img
                    src={urlForImage(logo).toString()}
                    alt={logo?.alt}
                    className="h-10 md:h-16 object-cover cursor-pointer"
                  />
                </div>
                <span className="text-gray-900 mt-4 md:mt-0">{logo?.alt}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4 mt-6 justify-center">
            {data.toolsLogoSection.logoArray.slice(7, 11).map((logo: any, index: number) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center justify-center md:space-x-4"
              >
                <div className="w-fit flex items-center justify-center">
                  <img
                    src={urlForImage(logo).toString()}
                    alt={logo?.alt}
                    className="h-10 md:h-16 object-cover cursor-pointer"
                  />
                </div>
                <span className="text-gray-900 mt-4 md:mt-0">{logo?.alt}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {data.clientsSection && (
        <div className="relative">
          {/* Background overlay */}
          <div className="absolute inset-0 bg-[#1D92FB] opacity-10 pointer-events-none"></div>

          {/* Main content */}
          <div className="flex flex-col justify-around px-6 py-10 md:px-8 md:py-16 max-w-9xl mx-auto relative">
            {/* Title and Description */}
            <div className="text-center text-neutral-700">
              <h2 className="text-3xl font-bold max-md:max-w-full">
                {data.clientsSection.sectionTitle}
              </h2>
              <p className="mt-4 text-lg font-medium max-md:max-w-full">
                {data.clientsSection.sectionDescription}
              </p>
            </div>

            {/* Client Logos */}
            <div className="flex flex-wrap gap-10 xl:gap-20  justify-center items-center mt-12 max-md:mt-10">
              {data.clientsSection.clientLogos.map((logo: any, index: any) => (
                <img
                  key={index}
                  src={urlForImage(logo.asset).toString()}
                  alt={logo.altText}
                  className="object-cover h-8 xl:h-11 "
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Why Prefer Code Automation? Custom Software */}
      {data.customSoftwareSection && <CustomSoftwareSection data={data} />}

      {/*  Our Custom Software Development Services Custom Software*/}
      {data.customSoftwareDev && (
        <section className="px-6 py-10 md:px-16 md:py-16 relative ">
          <div className="absolute inset-0 bg-[#1D92FB] opacity-10 pointer-events-none"></div>
          <section className="max-w-7xl mx-auto">
            <div className="justify-center text-center relative pb-10">
              <div>
                <h2 className="text-3xl font-bold text-[#3C3C3C] mb-4 mx-auto max-w-3xl">
                  {data.customSoftwareDev.heading}
                </h2>
                <p className="text-lg font-medium text-[#3C3C3C] mx-auto max-w-4xl">
                  {data.customSoftwareDev.subheading}
                </p>
                <p className="text-lg font-medium text-[#3C3C3C] mx-auto max-w-4xl">
                  {data.customSoftwareDev.paragraph}
                </p>
              </div>
            </div>

            <div className="relative flex flex-col md:flex-row items-center justify-between z-10">
              <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 md:pl-12">
                <div className="space-y-8">
                  {data.customSoftwareDev.items.map((item: any, index: any) => (
                    <div key={index} className="relative flex items-start">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-[#1D92FB] text-white font-bold">
                          {item.number}
                        </div>
                        {index < data.customSoftwareDev.items.length - 1 && (
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
                  src={urlForImage(data.customSoftwareDev.image).toString()}
                  alt={data.customSoftwareDev.image.alt}
                  className="w-3/4 rounded-lg shadow-lg z-10 md:mt-0 mt-6"
                />
              </div>
            </div>
          </section>
        </section>
      )}

      {/* Turn Vision Into Reality Custom Software */}
      {data.turnVision && (
        <section
          className="px-6 md:px-16 py-10 md:py-16 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/Container.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container text-white mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left side (Heading, Offer Text, and QA) */}
            <div className="col-span-1 md:col-span-1">
              <div className="flex flex-col w-full max-md:max-w-full">
                <div className="text-3xl font-bold leading-none max-md:max-w-full">
                  {data.turnVision.title}
                </div>
                <div className="mt-4 text-xl leading-none max-md:max-w-full">
                  {data.turnVision.subtitle}
                </div>
                <div className="mt-4 text-lg font-light leading-7 max-md:max-w-full">
                  {data.turnVision.description}
                </div>
                <Link
                  href={data.turnVision.buttonLink}
                  className="button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {data.turnVision.buttonText}
                </Link>
              </div>
            </div>

            {/* Right side (Image) */}
            <div className="col-span-1 md:col-span-1 flex justify-center">
              <div className="max-w-full h-[300px] md:h-full rounded-lg overflow-hidden">
                {data.specialOffersSection?.offerImg && (
                  <img
                    src={urlForImage(data.turnVision?.featuredImage).toString()}
                    alt={data.turnVision?.featuredImage.alt}
                    className="object-cover rounded-lg h-[200px] md:h-[300px]"
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      )}
      {/* Custom Software Case Studies Section */}
      {data.transBusiness && (
        <div className="px-6 md:px-16 py-10 md:py-16">
          <h2 className="text-3xl text-center font-bold text-[#3C3C3C]">
            Showcasing Our Success Stories
          </h2>
          <CaseStudiesHome />
        </div>
      )}

      {/* Why Prefer Code Automation? Custom Software */}
      {data.provenProcessSection && <CustomSoftware2Section data={data} />}


      {/* Introduction Section */}
      {data.introductionSection && (
        <section className="relative px-6 md:px-16 py-10 md:py-16 bg-white">
          <div className="absolute inset-0 bg-[#1D92FB] opacity-10 pointer-events-none"></div>
          <div className="container mx-auto flex flex-wrap items-center justify-center relative">
            {/* Image on the left */}
            {data.introductionSection?.introImage && (
              <div className="w-full flex justify-center md:w-1/3 md:flex md:pr-8 md:pl-8 mb-4">
                <img
                  src={urlForImage(
                    data.introductionSection?.introImage
                  ).toString()}
                  alt={data.introductionSection?.introImage.alt}
                  className="object-cover rounded-lg h-[250px] md:h-[330px]"
                  loading="lazy"
                />
              </div>
            )}

            {/* Content on the right */}
            {data.introductionSection?.introHeading && (
              <div className="w-full md:w-1/2">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
                    {data.introductionSection.introHeading}
                  </h2>
                  {data.introductionSection.introDescBlock && data.introductionSection.introDescBlock.length > 0 ? (
                    <div className="text-lg text-gray-800 leading-relaxed text-center md:text-justify">
                      <PortableText
                        value={data.introductionSection.introDescBlock}
                        components={portableTextComponents}
                      />
                    </div>
                  ) : (
                    <div className="text-lg text-gray-800 leading-relaxed text-center md:text-justify">
                      {data.introductionSection.introDesc}
                    </div>
                  )}


                  {/* Array in introduction description section */}
                  {data?.introductionDescArray?.length > 0 && (
                    <div className="flex flex-col gap-4">
                      {data?.introductionDescArray?.map(
                        (description: string, index: number) => {
                          return (
                            <p
                              className="text-lg text-gray-800 leading-relaxed text-center md:text-justify"
                              key={index}
                            >
                              {description}
                            </p>
                          );
                        }
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Design section */}
      {data.designSection && (
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
      )}

      {/* Development section */}
      {data.developmentSection && (
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
      )}

      {/* Implementation section */}
      {data.implementationSection && (
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
      )}
      {/* CMS Page */}
      {data.contentItems && (
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
              {data.contentItems &&
                data.contentItems.map((items: any, index: number) => (
                  <div
                    key={index}
                    className="bg-white shadow-md md:h-[350px] h-[370px] w-auto sm:w-[400px] rounded-lg overflow-hidden hover:shadow-lg transition duration-300 h-full"
                  >
                    <img
                      src={urlForImage(items.cmsImage).toString()}
                      alt={items.cmsImage?.alt || "Default alt text"}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center justify-center mb-4">
                        <h3 className="text-xl font-semibold text-center">
                          {items.heading}
                        </h3>
                      </div>
                      <p className="text-gray-700 text-center">
                        {items.description}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* child service cards */}
      {data.subServices && (
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
                            src={urlForImage(
                              subService.heroImageSub
                            ).toString()}
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
      )}

      {/* CTA after SubServices  */}
      {data.ctaAfterSubServices && (
        <section
          className="px-6 md:px-16 py-10 md:py-16 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/Container.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container text-white mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left side (Heading, Offer Text, and QA) */}
            <div className="col-span-1 md:col-span-1">
              <div className="flex flex-col w-full max-md:max-w-full">
                <div className="text-3xl font-bold leading-none max-md:max-w-full">
                  {data.ctaAfterSubServices.title}
                </div>
                <div className="mt-4 text-xl leading-none max-md:max-w-full rich-text">
                  {data.ctaAfterSubServices.subtitle}
                </div>

                <div className="mt-4 text-lg font-light leading-7 max-md:max-w-full rich-text">
                  {data.ctaAfterSubServices.description}
                </div>
                <Link
                  href={data.ctaAfterSubServices.buttonLink}
                  className="button"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ maxWidth: "320px" }}
                >
                  {data.ctaAfterSubServices.buttonText}
                </Link>
              </div>
            </div>

            {/* Right side (Image) */}
            <div className="col-span-1 md:col-span-1 flex justify-center">
              <div className="max-w-full h-[300px] md:h-full rounded-lg overflow-hidden">
                {data.ctaAfterSubServices?.featuredImage && (
                  <img
                    src={urlForImage(
                      data.ctaAfterSubServices?.featuredImage
                    ).toString()}
                    alt={data.ctaAfterSubServices?.featuredImage.alt}
                    className="object-cover rounded-lg h-[300px]"
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Our Mobile App Development Services Section */}
      {data.mobileAppServices && (
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
      )}

      {/* clients logo section after subservice */}
      {data.clientsSectionAfterSubServices && (
        <div className="relative">
          {/* Background overlay */}
          <div className="absolute inset-0 bg-[#1D92FB] opacity-10 pointer-events-none"></div>

          {/* Main content */}
          <div className="flex flex-col justify-around px-6 py-10 md:px-8 md:py-16 max-w-9xl mx-auto relative">
            {/* Title and Description */}
            <div className="text-center text-neutral-700">
              <h2 className="text-3xl font-bold max-md:max-w-full">
                {data.clientsSectionAfterSubServices.sectionTitle}
              </h2>
              <p className="mt-4 text-lg font-medium max-md:max-w-full">
                {data.clientsSectionAfterSubServices.sectionDescription}
              </p>
            </div>

            {/* Client Logos */}
            <div className="flex flex-wrap gap-10 xl:gap-20  justify-center items-center mt-12 max-md:mt-10">
              {data.clientsSectionAfterSubServices.clientLogos.map(
                (logo: any, index: any) => (
                  <img
                    key={index}
                    src={urlForImage(logo.asset).toString()}
                    alt={logo.altText}
                    className="object-cover sm:h-8 xl:h-11 "
                  />
                )
              )}
            </div>
          </div>
        </div>
      )}

      {/* Why Choose Code Automation? Mobile APP*/}
      {data.whyChooseMobile && (
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
                    <p
                      className="text-lg text-[#3C3C3C]"
                    >{item.description}</p>
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
      )}

      {/* Industries & Applications We QA */}
      {data.industriesWeQA && (
        <section className="relative px-6 md:px-16 py-16 bg-white">
          <div className="absolute inset-0 bg-[#1D92FB] opacity-10 pointer-events-none"></div>

          {/* Centered Heading and Description */}
          <div className="flex flex-col items-center justify-center text-center mb-12 relative">
            <h2 className="text-3xl font-bold mb-4">
              {" "}
              {data.industriesWeQA?.heading}
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed max-w-3xl">
              {" "}
              {data.industriesWeQA?.description}
            </p>
          </div>

          {/* Image on the Right and Bullet Points on the Left */}
          <div className="container mx-auto flex flex-wrap items-start justify-center relative max-w-7xl">
            {/* Bullet Points on the Left */}
            <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col space-y-4">
              <h2 className="text-3xl font-bold mb-4">
                {data.industriesWeQA?.bulletPointsHeading}
              </h2>
              {data.industriesWeQA?.bulletPoints?.map((point: any, index: any) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-lg transform transition-transform hover:scale-105"
                >
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
      )}

      {/* Industries We Serve Section */}
      {data.industriesServe && (
        <section className="px-6 md:px-16 py-10 md:py-16">
          <div className="flex flex-col">
            <div className="flex gap-5 px-20 max-md:flex-wrap max-md:px-5">
              <div className="flex flex-col flex-1 justify-center text-4xl text-sky-500 capitalize leading-[60px] max-md:max-w-full">
                <div className="justify-center max-md:max-w-full">
                  <h2 className="font-bold  text-2xl text-black text-center capitalize leading-[60px]">
                    {data.industriesServe.heading}
                  </h2>
                  <p className="text-lg text-[#3C3C3C] leading-relaxed mb-3 text-center">
                    {data.industriesServe.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-auto flex flex-col justify-center overflow-hidden">
              <div
                className="flex gap-5 h-auto justify-start pl-20 mt-6 max-md:flex-wrap max-md:pl-5 hide-scrollbar"
                id="scrollContainer"
                style={{ overflowX: "auto" }}
              >
                {data.industriesServe?.bulletPoints.map(
                  (item: any, index: number) => (
                    <div
                      key={item._id}
                      className="h-auto flex-shrink-0 w-full sm:w-80 md:w-80 lg:w-1/4 bg-[#FBFBFB] border border-gray-300 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 relative"
                      style={{ minWidth: "calc(100% / 4 - 20px)" }} // Ensure 4 cards per row with spacing
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
                          {item.bulletPoints?.map(
                            (bullet: string, bulletIndex: number) => (
                              <li key={bulletIndex}>{bullet}</li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  )
                )}
              </div>
              <ScrollButton
                scrollContainerId="scrollContainer"
                totalItems={data.industriesServe?.bulletPoints.length} // Pass total items dynamically
                itemsPerPage={3} // Adjust items per page based on your design
              />
            </div>
          </div>
        </section>
      )}

      {/* Tools & Technology Section */}
      {data.toolsTechSection?.toolsTechHeading && (
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
                                  alt={logoData.image.alt || logoData.heading}
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
      )}

      {/* Updated Tools & Technology Section */}
      {data.updatedToolsTechSection && (
        <section className="relative px-6 md:px-16 py-16">
          <div className="absolute inset-0 bg-[#1D92FB] opacity-10 pointer-events-none"></div>
          <div className="container mx-auto relative">
            <h2 className="text-2xl text-center font-bold mb-4">
              {data.updatedToolsTechSection?.toolsTechHeading}
            </h2>

            {/* Render paragraph if there's content */}
            {data.updatedToolsTechSection?.toolsTechDesc && (
              <p className="text-lg text-[#3C3C3C] leading-relaxed max-w-5xl text-center mb-8 mx-auto">
                {data.updatedToolsTechSection?.toolsTechDesc}
              </p>
            )}

            <div
              className={
                data.updatedToolsTechSection?.toolsTech != null
                  ? "flex flex-col sm:flex-row sm:flex-wrap justify-center gap-[20px] sm:gap-[30px] 2xl:gap-[30px] max-w-[1440px] sm:my-40"
                  : "hidden"
              }
              style={{
                marginTop: data.updatedToolsTechSection?.toolsTechDesc
                  ? "0"
                  : "0",
                marginBottom: data.updatedToolsTechSection?.toolsTechDesc
                  ? "0"
                  : "0",
              }}
            >
              {data.updatedToolsTechSection?.toolsTech?.map(
                (tool: any, toolIndex: any) => (
                  <div key={toolIndex}>
                    <div className="bg-white shadow-md p-6 w-auto sm:w-[400px] rounded-lg flex flex-col h-full">
                      <div className="flex flex-row">
                        {tool.images?.map((logoRef: any, logoIndex: any) => {
                          const logoData = dataLogo.find(
                            (logo: any) => logo._id === logoRef._ref
                          );
                          if (logoData) {
                            return (
                              <div key={logoIndex} className="">
                                <img
                                  src={urlForImage(logoData.image).toString()}
                                  alt={logoData.image.alt || logoData.heading}
                                  className="h-8 object-cover mb-2 mr-2"
                                />
                              </div>
                            );
                          } else {
                            return null;
                          }
                        })}
                      </div>
                      <h3 className="text-xl font-semibold mb-4">
                        {tool.heading}
                      </h3>
                      <ul className="list-disc ml-5">
                        {tool.description.map((text: String, index: number) => {
                          return (
                            <li className="text-gray-700 mb-2" key={index}>
                              {text}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      )}

      {/* Example Value of Service (Use Cases) Section */}
      {data.exampleServicesSection && (
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
      )}
      {data.mobileAppServiceSection && <MobileAppServiceSection data={data} />}
      {data.secondMobileAppAcc && <SecondMobileServiceAcc data={data} />}
      {/* Turn Vision Into Reality Custom Software */}
      {data.transBusiness && (
        <section
          className="px-6 md:px-16 py-10 md:py-16 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/Container.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container text-white mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left side (Heading, Offer Text, and QA) */}
            <div className="col-span-1 md:col-span-1">
              <div className="flex flex-col w-full max-md:max-w-full">
                <div className="text-3xl font-bold leading-none max-md:max-w-full">
                  {data.transBusiness.title}
                </div>
                <div className="my-6 text-lg font-light leading-7 max-md:max-w-full">
                  {data.transBusiness.description}
                </div>

                <ButtonScrollToSection
                  classes="button2"
                  content={data.transBusiness.buttonText}
                  key="first-button"
                  destination="contact-box"
                />
              </div>
            </div>

            {/* Right side (Image) */}
            <div className="col-span-1 md:col-span-1 flex justify-center">
              <div className="max-w-full h-[300px] md:h-full rounded-lg overflow-hidden">
                {data.specialOffersSection?.offerImg && (
                  <img
                    src={urlForImage(
                      data.transBusiness?.featuredImage
                    ).toString()}
                    alt={data.transBusiness?.featuredImage.alt}
                    className="object-cover rounded-lg h-[300px]"
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/*  Preferred Choice for QA Testing*/}
      {data.preferredChoice && (
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
                      <p className="text-[#3C3C3C] mt-2">{item.description}</p>
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
      )}
      {/* Pricing Section */}
      {data.pricingSection && (
        <section className="px-6 py-10 md:px-16 md:py-16 relative">
          <div className="absolute inset-0 bg-[#1D92FB] opacity-10 pointer-events-none"></div>
          <div className="relative">
            {/* Section Heading */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#3C3C3C]">
                {data.pricingSection?.heading}
              </h2>
              <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                {data.pricingSection?.description}
              </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid gap-8 md:grid-cols-3 relative">
              {data.pricingSection?.plans?.map((plan: any, index: number) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl shadow-lg p-8 ${plan.highlighted
                    ? 'border-2 border-[#1D92FB] transform scale-105'
                    : 'border border-gray-200'
                    }`}
                >
                  <h3 className="text-2xl font-bold text-[#1D92FB] mb-2">
                    {plan.title}
                  </h3>
                  <p className="text-3xl font-extrabold text-[#3C3C3C] mb-4">
                    {plan.price}
                    {!plan.price.toLowerCase().includes('custom') && (
                      <span className="text-base font-medium">/month</span>
                    )}
                  </p>
                  <ul className="space-y-3 text-gray-700 list-disc list-inside">
                    {plan.features.map((feature: string, idx: number) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Advantages of Our QA and Testing Services */}
      {data.advantagesOfQA && (
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
                      <p className="text-[#3C3C3C] mt-2">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Typical Project CycleFor QA and Mobile App development and cms */}
      {data.projectCycleQA && (
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
                  <img
                    src={urlForImage(
                      data.projectCycleQA?.projectCycleImg
                    ).toString()}
                    alt={data.projectCycleQA?.projectCycleImg.alt}
                    className="object-cover h-[370px]"
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Typical Project Cycle Stages Section */}
      {data.projectCycleSection && (
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
                  <img
                    src={urlForImage(
                      data.projectCycleSection?.projectCycleImg
                    ).toString()}
                    alt={data.projectCycleSection?.projectCycleImg.alt}
                    className="object-cover h-[370px]"
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Service Options Section For QA */}
      {data.qaDelivery && (
        <section className="bg-white px-6 md:px-16 py-10 md:py-16">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center ">
            {/* Left side (Image) */}
            <div className="col-span-1 md:col-span-1 flex justify-center">
              {data.qaDelivery?.qaDeliveryleImg && (
                <img
                  src={urlForImage(data.qaDelivery?.qaDeliveryleImg).toString()}
                  alt={data.qaDelivery?.qaDeliveryleImg.alt}
                  className="object-cover h-[500px]"
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
      )}

      {/* Service Options Section */}
      {data.deliveryOptionSection && (
        <section className="bg-white px-6 md:px-16 py-10 md:py-16">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center ">
            {/* Left side (Image) */}
            <div className="col-span-1 md:col-span-1 flex justify-center">
              {data.deliveryOptionSection?.deliveryImg && (
                <img
                  src={urlForImage(
                    data.deliveryOptionSection?.deliveryImg
                  ).toString()}
                  alt={data.deliveryOptionSection?.deliveryImg.alt}
                  className="object-cover h-[370px]"
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
      )}

      {/* Special Offers Section */}
      {data.specialOffersSection?.offerHeading && (
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
                  {data.specialOffersSection.specialOfferQA.map(
                    (qaItem: any, index: any) => (
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
                    )
                  )}
                </div>
              )}
            </div>

            {/* Right side (Image) */}
            <div className="col-span-1 md:col-span-1 flex justify-center">
              <div className="max-w-full h-[300px] md:h-full rounded-lg overflow-hidden">
                {data.specialOffersSection?.offerImg && (
                  <img
                    src={urlForImage(
                      data.specialOffersSection?.offerImg
                    ).toString()}
                    alt={data.specialOffersSection?.offerImg.alt}
                    className="object-cover rounded-lg h-[300px]"
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Updated Special Offer Section */}
      {data.UpdatedSpecialOffersSection?.offerHeading && (
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
                {data.UpdatedSpecialOffersSection?.offerHeading}
              </h2>

              {data.UpdatedSpecialOffersSection?.specialOfferTitle && (
                <div className="bg-white bg-opacity-30 backdrop-blur-md p-6 rounded-lg mb-8">
                  <p className="text-lg font-bold text-[#F7E022] mb-4">
                    {data.UpdatedSpecialOffersSection?.specialOfferTitle}
                  </p>
                  <p className="text-lg font-light text-white mb-4">
                    <span>
                      {data.UpdatedSpecialOffersSection?.specialOfferText1}
                    </span>{" "}
                    <span className="text-[#F7E022]">
                      {data.UpdatedSpecialOffersSection?.specialOfferDays}
                    </span>{" "}
                    <span>
                      {data.UpdatedSpecialOffersSection?.specialOfferText2}
                    </span>
                  </p>
                </div>
              )}

              <Link
                href={data.UpdatedSpecialOffersSection.buttonLink}
                className="button"
                target="_blank"
                rel="noopener noreferrer"
                style={{ maxWidth: "320px" }}
              >
                {data.UpdatedSpecialOffersSection.buttonText}
              </Link>
            </div>

            {/* Right side (Image) */}
            <div className="col-span-1 md:col-span-1 flex justify-center">
              <div className="max-w-full h-[300px] md:h-full rounded-lg overflow-hidden">
                {data.UpdatedSpecialOffersSection?.offerImg && (
                  <img
                    src={urlForImage(
                      data.UpdatedSpecialOffersSection?.offerImg
                    ).toString()}
                    alt={data.UpdatedSpecialOffersSection?.offerImg.alt}
                    className="object-cover rounded-lg h-[300px]"
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Summary Message about Service Section */}
      {data.summarySection?.summaryHeading && (
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
      )}

      {/* Call to Action Section */}
      {data.callToActionSection?.callToActionHeading && (
        <section className="px-6 md:px-16 py-10 md:py-16 bg-blue-50">
          <div className="container mx-auto text-cencter max-w-6xl">
            <h2 className="text-2xl font-bold mb-4">
              {data.callToActionSection?.callToActionHeading}
            </h2>
            <p className="text-lg mb-8">
              {data.callToActionSection?.callToAction}
            </p>
          </div>
        </section>
      )}

      {data.faqSection && (
        <FAQServicePage faqSection={data.faqSection} />
      )}
      {data?.seoContent && (
        <div
          className="sr-only"
          dangerouslySetInnerHTML={{ __html: data.seoContent }}
        />
      )}
    </div>
  );
}
