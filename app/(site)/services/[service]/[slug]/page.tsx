// pages/index.js

import { client } from "../../../../../sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import ServiceHeroForm from "./ServiceHeroForm";
import { notFound } from "next/navigation";

async function getData(urlPathSub: string) {
  if (!urlPathSub) return null; // ✅ Prevents undefined errors
  const query = `*[_type == 'subService' && urlPathSub == '${urlPathSub}'][0]`;
  try {
    return await client.fetch(query);
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
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

export async function generateMetadata({ params }: { params: { service: string; slug: string } }) {
  const data = await getData(params.slug);

  const defaultTitle = "CodeAutomation - Custom Software and Mobile Development Company in USA";
  const defaultDescription = "Custom Software and Mobile Development Company in USA";
  const defaultKeywords = "CodeAutomation.ai";

  const title = data?.webSeoMetadataSub?.title || defaultTitle;
  const description = data?.webSeoMetadataSub?.description || defaultDescription;
  const keywords = data?.webSeoMetadataSub?.keywords?.join(", ") || defaultKeywords;

  const facebookMeta = data?.facebookCardsSub || {};
  const twitterMeta = data?.twitterCardsSub || {};

  const heroImageUrl = data?.heroImageSub ? urlForImage(data.heroImageSub).toString() : "/thankyou.jpg";

  // OG metadata: use webSeoMetadataSub only
  const ogTitle = data?.webSeoMetadataSub?.title || defaultTitle;
  const ogDescription = data?.webSeoMetadataSub?.description || defaultDescription;
  const ogImage = heroImageUrl;

  // Twitter metadata: use specific fields first, fallback to webSeoMetadataSub
  const twitterTitle = twitterMeta.twitterTitle || data?.webSeoMetadataSub?.title || defaultTitle;
  const twitterDescription = twitterMeta.twitterDescription || data?.webSeoMetadataSub?.description || defaultDescription;
  const twitterImage = twitterMeta.twitterImage ? urlForImage(twitterMeta.twitterImage).toString() : heroImageUrl;

  const canonicalUrl = params.slug
  ? `https://codeautomation.ai/services/${params.service}/${params.slug}`
  : "https://codeautomation.ai/services";

  
  return {
    title,
    description,
    keywords,
    openGraph: {
      type: "website",
      url: canonicalUrl,
      title: ogTitle,
      description: ogDescription,
      images: [{ url: ogImage, width: 1200, height: 630, alt: ogTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: twitterTitle,
      description: twitterDescription,
      images: [{ url: twitterImage, alt: twitterTitle }],
      url: canonicalUrl,
    },
    alternates: {
      canonical: canonicalUrl, // ✅ canonical is correct
    },
  };
}


const Page = async ({ params }: { params: { slug: string } }) => {
  const data = await getData(params.slug);
  if (!data) {
    notFound();
  }
  const dataLogo = await getLogoData();

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-slate-950 text-white lg:min-h-[720px]">
        <img
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40"
          src={urlForImage(data.heroImageSub).toString()}
          alt={data.heroImageSub.alt}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/80 to-slate-950/90" />

        {/* Decorative vectors */}
        <img
          src="/intersect-left.png"
          alt="vector-left"
          className="hidden lg:block absolute left-0 top-16 w-1/3 opacity-90 pointer-events-none"
        />
        <img
          src="/intersect-right-new.png"
          alt="vector-right"
          className="hidden lg:block absolute right-0 top-16 w-1/3 opacity-90 pointer-events-none"
        />

        <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-5 py-16 lg:px-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.6fr_0.4fr] items-center">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full bg-sky-500/20 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-sky-200 shadow-sm shadow-sky-500/10">
                Premium Service
              </span>
              <h1 className="mt-8 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                {data.serviceTitleSub}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
                {data.serviceDescSub}
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="#hero-form"
                  className="inline-flex items-center justify-center rounded-full bg-sky-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-400"
                >
                  Get Free Consultation
                </a>
                <a
                  href="https://calendly.com/adnanghaffar/codeautomation?utm_source=website&utm_campaign=services"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-slate-100/10 bg-white/10 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  Schedule a Call
                </a>
              </div>
            </div>

            <div id="hero-form" className="relative">
              <ServiceHeroForm serviceName={data.serviceTitleSub || undefined} />
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
                  <div className="bg-white shadow-md  p-6  w-auto sm:w-[400px] rounded-lg flex flex-col h-full">
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
                  alt={data.projectCycleSubSection?.projectCycleImg.alt}
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
                alt={data.deliveryOptionSubSection?.deliveryImg.alt}
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
                  alt={data.specialOffersSubSection?.offerImg.alt}
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
