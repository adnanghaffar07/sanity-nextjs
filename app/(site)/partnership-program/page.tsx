import Image from "next/image";
import React from "react";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import ScrollAnimation from "../components/ScrollAnimation";
import ButtonScrollToSection from "../components/ButtonScrollToSection";
import Link from "next/link";

async function getData() {
  const query = `*[_type == 'partnership'][0]`;
  try {
    return await client.fetch(query);
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

// ✅ Updated generateMetadata function with Canonical URL
export async function generateMetadata() {
  const data = await getData();

  const defaultTitle = "Code Automation - Custom Software and Mobile Development Company in USA";
  const defaultDescription = "Custom Software and Mobile Development Company in USA";
  const defaultKeywords = "CodeAutomation.ai";
  const canonicalUrl = "https://codeautomation.ai/partnership"; // ✅ Canonical URL

  const title = data?.webSeoMetadataSub?.title || defaultTitle;
  const description = data?.webSeoMetadataSub?.description || defaultDescription;
  const keywords = data?.webSeoMetadataSub?.keywords?.join(", ") || defaultKeywords;

  // ✅ Prevents errors if `heroImage` is missing
  const heroImageUrl = data?.heroImage ? urlForImage(data.heroImage).toString() : "/default-image.jpg";

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
      canonical: canonicalUrl, // ✅ Fixed canonical tag
    },
  };
}

const page = async () => {
  const data = await getData();
  return (
    <div>
      <section className="relative">
        <div className="bg-black w-full h-[380px] sm:h-[700px] opacity-30 absolute z-[1]"></div>
        <div className="w-full h-[380px] sm:h-[700px] relative z-0">
          {data?.heroImage?.asset && (
            <Image
              src={urlForImage(data.heroImage.asset)}
              alt={data.heroImage.alt}
              loading="eager"
              fill
              style={{ objectFit: "cover" }}
            />
          )}
        </div>

        <div className="mt-[160px] sm:mt-[290px] items-center absolute inset-0 flex flex-col z-[2] px-16">
          <h1 className="lg:text-4xl text-2xl  font-semibold tracking-tight capitalize leading-[48px] text-white text-center">
            {data.heroTitle}
          </h1>
          <p className="mt-2 md:mt-8 md:text-2xl text-lg font-light tracking-wide leading-7  text-white max-w-[280px] sm:max-w-[1080px] xl:px-0 text-center">
            {data.heroSubTitle}
          </p>
          <ButtonScrollToSection
            classes="bg-[#f7e022] text-black cursor-pointer mt-6 py-3 px-2 font-semibold rounded-lg shadow-lg text-center w-full sm:min-w-48 sm:max-w-64"
            content="Become a Partner"
            key="first-button"
            destination="contact-box"
          />
        </div>
      </section>

      <ScrollAnimation>
        <section className="flex justify-center items-center px-16 py-14 text-center bg-blue-50 max-md:px-5">
          <div className="flex flex-col max-w-full ">
            <h2 className="text-2xl md:text-4xl  leading-20 text-black max-md:max-w-full max-w-3xl mx-auto">
              {data.title}
              <br />
            </h2>
            <p className="self-center mt-4 text-lg leading-8 text-slate-600 max-w-4xl mx-auto">
              {data.description}
            </p>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section className="mt-16 sm:mt-28 relative overflow-hidden">
          <img
            loading="lazy"
            src="/partnership-program-eclipse.png"
            alt="eclipse icon"
            className="absolute bottom-0 w-[645px] z-0"
          />

          <div className="flex gap-16 xl:gap-10 2xl:gap-16 flex-col-reverse xl:flex-row justify-center items-center mx-1 sm:mx-10">
            <div className="flex flex-col max-md:ml-0 max-md:w-full">
              <article className="flex flex-col grow max-md:mt-10 max-md:max-w-full z-10 px-4 sm:px-0">
                <div className="flex flex-col pl-0 sm:pl-20 text-neutral-900 max-md:max-w-full mb-4 mt-1">
                  <h2 className="text-2xl sm:text-4xl leading-16 max-md:max-w-full font-medium text-center sm:text-left">
                    {data?.availableProgramSection?.partnershipTitle}
                  </h2>
                  <p className="mt-8 text-base text-lg leading-8 max-w-[666px] text-justify">
                    {data?.availableProgramSection?.partnershipDescription}
                    <br />
                  </p>
                </div>

                {data?.availableProgramSection?.programs?.map(
                  (program: any) => {
                    return (
                      <ScrollAnimation key={program._key}>
                        <div className="flex flex-col sm:flex-row gap-4 sm:items-start items-center mt-10 xl:mt-3 max-md:flex-wrap justify-center">
                          {program?.icon?.asset && (
                            <img
                              loading="lazy"
                              src={urlForImage(program.icon.asset)}
                              alt={program.icon.alt}
                              width={67}
                              height={67}
                            />
                          )}
                          <div className="flex flex-col grow shrink-0 mt-1.5 basis-0 max-w-[666px]">
                            <div className="flex flex-col sm:flex-row gap-5 font-bold text-black max-md:flex-wrap max-md:max-w-full items-center justify-center">
                              <h3 className="flex-auto text-lg leading-7 text-center sm:text-left">
                                {program.title}
                              </h3>
                              {/* <button className="text-xs text-center border-2 border-black border-solid rounded-[50px] w-[126px] h-[28px]">
                                Learn more
                              </button> */}
                            </div>
                            <p className="mt-3 text-md leading-7 text-slate-700 max-w-[666px] text-justify">
                              {program.description}
                              <br />
                            </p>
                          </div>
                        </div>
                      </ScrollAnimation>
                    );
                  }
                )}
              </article>
            </div>

            {data?.availableProgramSection?.partnershipImage?.asset && (
              <div className="flex flex-col items-center ml-0 w-[470px] mt-4 sm:mt-3 md:mt-8">
                <div className="bg-[#0A8FFC] rounded-[57px] w-[280px] md:w-[481px] h-[330px] md:h-[529px] relative">
                  <div className="max-md:mt-10 w-[270px] md:w-[471px] h-[320px] md:h-[520px] absolute -top-12 md:-top-8">
                    <Image
                      loading="lazy"
                      src={urlForImage(
                        data?.availableProgramSection?.partnershipImage?.asset
                      )}
                      alt={data?.availableProgramSection?.partnershipImage?.alt}
                      className="self-stretch my-auto rounded-[57px]"
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(min-width: 768px) 471px, 270px"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </ScrollAnimation>

      {data?.programDetails?.map((program: any, index: any) => {
        return (
          <section className="mt-24 relative" key={program._key}>
            <ScrollAnimation>
              <img
                loading="lazy"
                src="/affiliate-partner-eclipse.png"
                alt="eclipse icon"
                className={`absolute bottom-0 w-[320px] z-0 ${index === 1 ? "block" : "hidden"
                  }`}
              />
              <img
                loading="lazy"
                src="/white-label-eclipse.png"
                alt="eclipse icon"
                className={`absolute bottom-0 right-0 w-[420px] z-0 ${index === 2 ? "block" : "hidden"
                  }`}
              />

              <div className="flex items-center justify-center">
                <div
                  className={`flex gap-5 flex-col max-w-[1280px] items-center justify-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                >
                  {program?.programImage?.asset && (
                    <figure className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
                      <img
                        loading="lazy"
                        src={urlForImage(program.programImage.asset)}
                        alt={program?.programImage?.alt}
                        className="grow w-full aspect-[0.99] max-md:mt-10 max-md:max-w-full"
                      />
                    </figure>
                  )}
                  <div className="flex flex-col ml-0 sm:ml-5 w-[80%] sm:w-[55%]">
                    <div className="flex flex-col self-stretch px-0 sm:px-5 my-auto max-md:mt-10 max-md:max-w-full">
                      <h2 className="text-2xl text-black leading-[58px] md:text-4xl">
                        {program.title}
                      </h2>
                      <ol className="mt-10 ml-6 text-lg leading-10 text-slate-700 max-md:mt-10 list-decimal">
                        {program.list.map((item: any) => {
                          return item.subLevelList ? (
                            <div key={item._key}>
                              <li key={item._key}>{item.topLevelItem}</li>
                              <ol
                                style={{ listStyleType: "lower-alpha" }}
                                className="ms-8"
                              >
                                {item.subLevelList.map((subItem: any) => {
                                  return (
                                    <li key={subItem._key}>
                                      {subItem.subLevelItem}
                                    </li>
                                  );
                                })}
                              </ol>
                            </div>
                          ) : (
                            <li key={item._key}>{item.topLevelItem}</li>
                          );
                        })}
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </section>
        );
      })}

      <ScrollAnimation>
        <section className="flex justify-center leading-8 text-center bg-blue-50 border-t border-b pb-36">
          <div className="max-w-[1280px]">
            <h2 className="text-2xl md:text-4xl my-20 font-semibold text-gray-800">Our Services</h2>
            <div className="text-slate-600 max-w-[1280px]">
              <div className="flex justify-center gap-x-8 gap-y-14 flex-wrap px-5 w-full max-md:flex-wrap max-md:max-w-full">
                {data?.services?.map((service: any) => (
                  <Link
                    href={service.link} // Dynamically use the link field
                    target="_blank" // Opens the link in a new tab
                    rel="noopener noreferrer" // Improves security
                    className="flex flex-col items-center justify-center text-black bg-white rounded-2xl shadow-md max-md:px-5 w-[290px] sm:w-[390px] h-[80px] p-4 text-xl hover:text-white transition border duration-300 ease-in-out transform hover:scale-105 hover:bg-[#1D92FB]"
                    key={service._key}
                  >
                    {service.singleService.length === 1 ? (
                      <span>{service.singleService[0]}</span>
                    ) : (
                      <>
                        <span>{service.singleService[0]}</span>
                       
                        <span>{service.singleService[1]}</span>
                      </>
                    )}
                  </Link>
                ))}

              </div>
            </div>
          </div>
        </section>

      </ScrollAnimation>
    </div>
  );
};

export default page;
