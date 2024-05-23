// pages/index.js

import { client } from "../../../../../sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

async function getData(urlPathSub: string) {
  const query = `*[_type == 'subService' && urlPathSub == '${urlPathSub}'][0]`;
  try {
    const fetchData = await client.fetch(query);
    console.log("Fetched data:", fetchData); // Log fetched data
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

const Page = async ({ params }: { params: { slug: string } }) => {
  const data = await getData(params.slug);
  console.log("Sanity Data", data);

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}

      <div className="flex overflow-hidden relative flex-col pb-12 w-full font-light text-white lg:min-h-[700px] max-md:max-w-full">
        <img
          className="top-0 left-0 object-cover absolute inset-0 size-full"
          src={urlForImage(data.heroImageSub).toString()}
          alt=""
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#020C16] opacity-65"></div>
        <div className="flex relative flex-col items-center lg:px-20 px-5 lg:pt-12 lg:pb-0 pt-48 pb-36 w-full max-md:px-5 max-md:max-w-full flex-grow">
          <div className="lg:absolute lg:top-[300px]">
            <div className="lg:text-4xl text-2xl font-bold text-center capitalize max-lg:mt-0 lg:w-8/12 mx-auto">
              <h2 className="title capitalize">{data.serviceTitleSub}</h2>
            </div>

            <div className="lg:text-2xl text-base text-center mt-4 max-md:max-w-full lg:px-32">
              {data.serviceDescSub}
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="px-6 md:px-16 py-10 md:py-16 bg-white">
        <div className="container mx-auto flex flex-wrap items-center justify-center">
          {data.introductionSubSection?.introImage ? (
            <div className="w-full  md:relative md:right-[20px] md:w-1/2 md:flex md:pl-8 md:justify-start mb-4">
              <Image
                src={urlForImage(
                  data.introductionSubSection?.introImage
                ).toString()}
                alt={data.introductionSubSection?.introImage.alt || ""}
                width={570}
                height={370}
              />
            </div>
          ) : null}
          <div
            className={
              data.introductionSubSection?.introImage
                ? "w-full md:w-1/2 md:justify-end"
                : "w-full"
            }
          >
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold mb-8">
                {data.introductionSubSection?.introHeading}
              </h2>
              <p className="text-lg text-gray-800 leading-relaxed text-justify">
                {data.introductionSubSection?.introDesc}
              </p>

              <br />
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Technology Section */}
      <section className="px-6 md:px-16 py-10 md:py-16">
        <div className="container mx-auto">
          <h2 className="text-2xl text-center font-bold mb-8">
            {data.toolsTechSubSection?.toolsTechHeading}
          </h2>

          {data.toolsTechSubSection?.toolsTechDesc && (
            <p className="text-lg text-center font-light mb-8">
              {data.toolsTechSubSection?.toolsTechDesc}
            </p>
          )}

          <div
            className={
              data.toolsTechSubSection?.toolsTech != null
                ? "flex flex-col sm:flex-row sm:flex-wrap justify-center gap-[20px] sm:gap-[30px] 2xl:gap-[30px] max-w-[1440px] sm:my-40"
                : "hidden"
            }
            style={{
              marginTop: data.toolsTechSubSection?.toolsTechDesc ? "0" : "0",
              marginBottom: data.toolsTechSubSection?.toolsTechDesc ? "0" : "0",
            }}
          >
            {data.toolsTechSubSection?.toolsTech?.map(
              (tool: any, toolIndex: any) => (
                <div key={toolIndex}>
                  <div className="bg-white shadow-md p-6 w-[400px] rounded-lg flex flex-col h-full">
                    <div className="flex flex-row justify-center">
                      {tool.images &&
                        tool.images.map((image: any, imageIndex: any) => (
                          <img
                            key={imageIndex}
                            src={urlForImage(image).toString()}
                            alt={tool.heading}
                            className="h-12 mb-4"
                          />
                        ))}
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
            {data.exampleServicesSubSection?.exampleServiceHeading}
          </h2>

          {data.exampleServicesSubSection?.exampleServicedesc && (
            <p className="text-xl text-center font-light mb-8">
              {data.exampleServicesSubSection?.exampleServicedesc}
            </p>
          )}

          <div
            className={
              data.exampleServicesSubSection?.exampleService != null
                ? "flex flex-col sm:flex-row sm:flex-wrap justify-center gap-[20px] sm:gap-[30px] 2xl:gap-[30px] max-w-[1440px] sm:my-40"
                : "hidden"
            }
            style={{
              marginTop: data.exampleServicesSubSection?.exampleService
                ? "0"
                : "0",
              marginBottom: data.exampleServicesSubSection
                ?.exampleServicesSection
                ? "0"
                : "0",
            }}
          >
            {data.exampleServicesSubSection?.exampleService?.map(
              (example: any, exampleIndex: any) => (
                <div key={exampleIndex}>
                  <div className="bg-gray-100 shadow-md p-6 w-[400px] rounded-lg flex flex-col h-full">
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
                {data.projectCycleSubSection?.projectCycleHaeding}
              </h2>
              <div className="list-disc list-inside ml-4">
                {data.projectCycleSubSection?.projectCycle?.map(
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
              {data.projectCycleSubSection?.projectCycleImg && (
                <Image
                  src={urlForImage(
                    data.projectCycleSubSection?.projectCycleImg
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
            {data.deliveryOptionSubSection?.deliveryImg && (
              <Image
                src={urlForImage(
                  data.deliveryOptionSubSection?.deliveryImg
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
              {data.deliveryOptionSubSection?.deliveryOptionHaeding}
            </h2>
            <ul className="list-disc list-inside">
              {data.deliveryOptionSubSection?.deliveryOption?.map(
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
              {data.specialOffersSubSection?.offerHeading}
            </h2>
            <div className="bg-white shadow-md p-6 rounded-lg">
              <p className="text-lg font-semibold mb-4">
                {data.specialOffersSubSection?.specialOffer}
              </p>
            </div>
          </div>
          {/* Right side (Content) */}
          <div className="col-span-1 md:col-span-1 flex justify-center">
            <div className="max-w-full h-[300px] md:h-full rounded-lg overflow-hidden">
              {data.specialOffersSubSection?.offerImg && (
                <Image
                  src={urlForImage(
                    data.specialOffersSubSection?.offerImg
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
            {data.summarySubSection?.summaryHeading}
          </h2>
          <p className="text-lg text-center">
            {data.summarySubSection?.summaryMessage}
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="px-6 md:px-16 py-10 md:py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">
            {data.callToActionSubSection?.callToActionHeading}
          </h2>
          <p className="text-lg mb-8">
            {data.callToActionSubSection?.callToAction}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section className="px-6 md:px-16 py-10 md:py-16 bg-white">
                <div className="container mx-auto text-center">
                    <h2 className="text-2xl font-bold mb-4">{data.contactSubSection?.contactUsHeading}</h2>
                    <p className="text-lg text-center">
                    {data.contactSubSection?.contactUsDesc}   
                    </p>
                    <p className="text-blue-500 font-bold">
                    <Link href='mailto:info@codeautomation.ai' target="_blank">{data.contactSubSection?.contactEmail}</Link>  
                    </p>
                    <p className=" text-blue-500  font-bold">
                    <Link href='tel:+18505584691'>{data.contactSubSection?.contactPhone}</Link>   
                    </p>
                    <p className=" text-blue-500 font-bold">
                    <Link href='https://codeautomation.ai/' target="_blank">{data.contactSubSection?.contactLink}</Link>
                    </p>
                </div>
            </section> */}
    </div>
  );
};
export default Page;
