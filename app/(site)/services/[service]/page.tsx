// pages/index.js

import Link from "next/link";
import { client } from "../../../../sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import HeroSectionComponent from "../../components/HeroSectionComponent";
import Image from "next/image";
import IntroductionSection from "../../components/IntroSection";

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
    <div className="bg-gray-100">
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
      <IntroductionSection data={data} />

      {/* child service cards */}

      <section className="px-6 md:px-16 py-10 md:py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">
            {data.subServiceHeading}
          </h2>
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

      {/* Tools & Technology Section */}

      <section className="px-6 md:px-16 py-10 md:py-16">
        <div className="container mx-auto">
          <h2 className="text-2xl text-center font-bold mb-8">
            {data.toolsTechSection?.toolsTechHeading}
          </h2>

          {/* Render paragraph if there's content */}
          {data.toolsTechSection?.toolsTechDesc && (
            <p className="text-xl text-center font-light mb-8">
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


      {/* Example Value of Service (Use Cases) Section */}
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
                      <h3 className="text-xl text-center font-semibold mb-4">
                        {example.heading}
                      </h3>
                      <p className="text-gray-700 text-center">
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

      {/* Typical Project Cycle Stages Section */}
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

      {/* Service Options Section */}
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

      {/* Special Offers Section */}
      <section className="px-6 md:px-16 py-10 md:py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side (Image) */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-bold mb-8">
              {data.specialOffersSection?.offerHeading}
            </h2>
            <div className="bg-white shadow-md p-6 rounded-lg">
              <p className="text-lg font-semibold mb-4">
                {data.specialOffersSection?.specialOffer}
              </p>
            </div>
          </div>
          {/* Right side (Content) */}
          <div className="col-span-1 md:col-span-1 flex justify-center">
            <div className="max-w-full h-[300px] md:h-full rounded-lg overflow-hidden">
              {data.specialOffersSection?.offerImg && (
                <Image
                  src={urlForImage(
                    data.specialOffersSection?.offerImg
                  ).toString()}
                  alt="Your Image"
                  width={270}
                  height={270}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Summary Message about Service Section */}
      <section className="bg-white px-6 md:px-16 py-10 md:py-16">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">
            {data.summarySection?.summaryHeading}
          </h2>
          <p className="text-lg text-center">
            {data.summarySection?.summaryMessage}
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="px-6 md:px-16 py-10 md:py-16">
        <div className="container mx-auto text-center">
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
