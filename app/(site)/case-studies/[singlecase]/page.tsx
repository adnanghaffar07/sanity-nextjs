import React from "react";
import { client } from "../../../../sanity/lib/client";
import HouseArrestBanner from "../../components/HouseArrestBanners";
import ScrollAnimation from "../../components/ScrollAnimation";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";

async function getData(urlService: string) {
  const query = `*[_type == 'portfolio' && slug == '${urlService}'][0]`;
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

// ✅ Updated generateMetadata function with Canonical URL
export async function generateMetadata({ params }: { params: { singlecase: string } }) {
  const data = await getData(params.singlecase);

  const defaultTitle = "Code Automation - Custom Software and Mobile Development Company in USA";
  const defaultDescription = "Custom Software and Mobile Development Company in USA";
  const defaultKeywords = "CodeAutomation.ai";
  const canonicalUrl = `https://codeautomation.ai/case-studies/${params.singlecase}`; // ✅ Dynamic Canonical URL

  const title = data?.webSeoMetadataSub?.title || defaultTitle;
  const description = data?.webSeoMetadataSub?.description || defaultDescription;
  const keywords = data?.webSeoMetadataSub?.keywords?.join(", ") || defaultKeywords;

  // ✅ Prevents errors if `cardimage` is missing
  const heroImageUrl = data?.cardimage ? urlForImage(data.cardimage).toString() : "/default-image.jpg";

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
      image: linkedInMeta.linkedInImage ? urlForImage(linkedInMeta.linkedInImage).toString() : heroImageUrl,
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


const page = async ({ params }: { params: { singlecase: string } }) => {
  const data = await getData(params.singlecase);
  const dataLogo = await getLogoData();

  return (
    <div className="">
      {data.typeoftestinglist &&
        <section className="flex overflow-hidden relative flex-col bg-black md:pb-12 w-full font-light text-white lg:min-h-[700px] max-md:max-w-full">
          {data?.title === "House Arrest" && data?.cardimage ? (
            <HouseArrestBanner />
          ) : (
            data.cardimage && (
              <img
                src={urlForImage(data.cardimage).toString()}
                alt="l"
                className="xl:top-0 xl:left-0 xl:object-cover xl:absolute xl:inset-0 xl:size-full "
              />
            )
          )}
        </section>
      }
      <section className="flex overflow-hidden relative flex-col md:pb-12 w-full font-light text-white lg:min-h-[700px] max-md:max-w-full">
        {data.cardimage && (
          <img
            src={urlForImage(data.cardimage).toString()}
            alt="l"
            className="top-0 left-0 object-cover absolute inset-0 size-full bg-black"
          />
        )}
        <div className="lg:absolute lg:top-[200px] md:left-[0px] lg:left-[110px] ">
          <h1 className="md:text-6xl text-3xl mb-6 font-bold capitalize max-w-2xl lg:pl-8">
            {data.subtitle}
          </h1>
          <h2 className="md:text-4xl text-2xl text-gray-100 font-bold capitalize max-w-lg lg:pl-8">
            {data.blogheading}
          </h2>
          {data.button &&
            <Link
              href={data.button.buttonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center bg-black text-lg text-white ml-6 mr-6 md:-pl-20 lg:pl-8 p-5 rounded-md hover:bg-white hover:text-black transition-all sm:w-2 md:w-48">
              <span className="mr-2">{data.button.buttonText}</span>
              <svg
                className="w-4 h-4 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          }
        </div>
      </section>
      {/* Introduction Section */}
      <ScrollAnimation>
        {data.projectGoalsSection &&
          <div className="flex overflow-hidden flex-col items-center px-6 md:px-16 pt-10 md:pt-16 max-w-7xl mx-auto">
            <div className="text-2xl  leading-none text-slate-900">INTRODUCTION</div>
            <div className="mt-8 md:text-5xl text-2xl text-center font-semibold leading-none text-slate-900">
              About This Project
            </div>
            <div className="mt-11 text-xl leading-8 text-center text-slate-900 w-[724px] max-md:mt-10 max-md:max-w-full">
              {data.projectscopecontent}
            </div>
            <div className="md:self-end mt-16  w-full max-w-[1328px] max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col pb-10 md:pb-16 w-[59%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
                    <div className="flex flex-col text-slate-900 max-md:max-w-full max-md:items-center max-md:text-center">
                      <div className="text-2xl leading-none">GET STARTED</div>
                      <div className="mt-6 md:text-5xl text-2xl font-semibold leading-none">
                        Overview
                      </div>
                      <div className="mt-6 text-xl leading-8 max-md:max-w-full">
                        {data?.briefdescription}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-8 items-center self-start mt-8 font-medium max-md:max-w-full">
                      {data?.briefitemsarray?.map((item: any) => (
                        <div className="flex items-start self-stretch my-auto w-[232px]" key={item._key}>

                          <div className="flex shrink-0 rounded-full h-[79px] w-[79px]"
                            style={{ backgroundColor: data?.color ? `${data.color}33` : '#C6C5C533' }}

                          />
                          <div className="flex flex-col mt-2.5 ">
                            <div className="self-start -ml-10 text-xl text-neutral-500">
                              {item.heading}
                            </div>
                            <div className="text-lg -ml-10  tracking-wide text-black">
                              {item.value}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    src={urlForImage(data.primaryimage).toString()}
                    alt="intro"
                    className="object-contain grow w-full rounded-2xl aspect-[0.75] max-md:mt-10 max-md:max-w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        }
      </ScrollAnimation>
      {/* Project Goal Section */}
      <ScrollAnimation>
        {data.projectGoalsSection &&
          <div className="px-6 md:px-16 py-10 md:py-16 mx-auto"
            style={{ backgroundColor: data?.color ? `${data.color}33` : '#05BD4B33' }}
          >
            <div className="flex flex-col justify-center items-center bg-white rounded-2xl max-w-7xl mx-auto min-h-[412px] shadow-[0px_16px_32px_rgba(109,70,189,0.05)] max-md:px-5 max-md:max-w-full">
              <div className="md:text-4xl text-2xl font-semibold text-slate-900 mt-6">
                {data.projectGoalsSection.title}
              </div>
              <div className="flex flex-wrap gap-10 justify-center items-start mt-7 text-xl leading-9 text-neutral-800 max-md:mt-7 max-md:max-w-full">
                {data?.projectGoalsSection?.goals.map((item: any) => (
                  <div className="flex flex-col justify-center items-center p-3 min-w-[240px] w-[314px]" key={item._key}>
                    <img
                      loading="lazy"
                      src={urlForImage(item.image).toString()}
                      alt="goal"
                      className="object-contain w-20 aspect-square rounded-[500px]"
                    />
                    <div className="mt-4 text-center">
                      {item.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        }
      </ScrollAnimation>
      {/* Tools and Technologies Used Section */}
      <ScrollAnimation>
        <section className="px-6 md:px-16 py-10 md:py-16 max-w-7xl mx-auto">
          <h3 className="md:text-4xl text-2xl font-semibold text-center my-4 md:my-8 font-klein">
            {data?.toolsandtechusedheading}
          </h3>

          {data.caseStudiesToolsSection ? (
            <div className="container md:mt-10">
              {/* Desktop Layout */}
              <div className="hidden md:flex flex-col sm:flex-row sm:flex-wrap justify-center gap-y-5 md:gap-y-10">
                {data.caseStudiesToolsSection.toolsTech.map((tool: any, toolIndex: any) => (
                  <div key={toolIndex} className="w-full m-1 md:m-4 sm:m-0 sm:w-1/2 lg:w-1/4">
                    <div className="flex md:justify-center gap-2">
                      <div className="flex flex-row gap-x-3">
                        {tool.images?.map((logoRef: any, logoIndex: any) => {
                          const logoData = dataLogo.find((logo: any) => logo._id === logoRef._ref);
                          if (logoData) {
                            return (
                              <div key={logoIndex}>
                                <img
                                  src={urlForImage(logoData.image).toString()}
                                  alt={logoData.heading}
                                  className="h-10 md:h-14 object-contain"
                                />
                              </div>
                            );
                          } else {
                            return null;
                          }
                        })}
                      </div>

                      <div className="flex flex-col w-auto my-auto">
                        <h3 className="text-xl md:text-2xl tracking-wider font-bold font-klein">
                          {tool.heading}
                        </h3>
                        <p className="mt-1 text-lg tracking-wide">{tool.detail}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Layout */}
              <div className="flex flex-wrap justify-center gap-4 md:hidden">
                {data.caseStudiesToolsSection.toolsTech.map((tool: any, toolIndex: any) => (
                  <div
                    key={toolIndex}
                    className="flex-1 sm:flex-none sm:w-[45%] m-2 p-3 border border-gray-200 rounded-lg shadow-sm flex items-center justify-center flex-col"
                  >
                    <div className="flex items-center justify-center mb-2 gap-2">
                      {tool.images?.map((logoRef: any, logoIndex: any) => {
                        const logoData = dataLogo.find((logo: any) => logo._id === logoRef._ref);
                        if (logoData) {
                          return (
                            <img
                              key={logoIndex}
                              src={urlForImage(logoData.image).toString()}
                              alt={logoData.heading}
                              className="h-10 md:h-12 object-contain"
                            />
                          );
                        } else {
                          return null;
                        }
                      })}
                    </div>

                    <div className="text-center">
                      <h3 className="text-base md:text-lg font-bold font-klein">{tool.heading}</h3>
                      <p className="text-sm md:text-base">{tool.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <ul>
              {data.technologiesused?.map((tech: any) => (
                <li className="text-xs md:text-xl leading-4 md:leading-8 font-light" key={tech._key}>
                  <span className="text-lg font-bold">{tech.heading}: </span>
                  <span className="text-lg font-light">{tech.description}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      </ScrollAnimation>
      {/*  Application Features  */}
      <ScrollAnimation>
        <section className="">
          <div className="px-6 md:px-16 pb-6 md:pb-16 pt-0 max-w-7xl mx-auto">
            {data.features?.featureslist.map((feature: any, index: number) => (
              <div key={feature._key} className="flex flex-col items-center">
                {/* Render heading */}
                <div className="flex flex-row items-center justify-center space-x-4">
                  {/* Render logos */}
                  {feature.logo?.map((logoRef: any, logoIndex: any) => {
                    const logoData = dataLogo.find(
                      (logo: any) => logo._id === logoRef._ref
                    );
                    if (logoData && logoData.image) {
                      return (
                        <div key={logoIndex} className="flex-shrink-0">
                          <img
                            src={urlForImage(logoData.image).toString()}
                            alt={logoData.heading}
                            className="object-cover h-12 md:h-24"
                          />
                        </div>
                      );
                    } else {
                      return null;
                    }
                  })}
                  {data.typeoftestinglist &&
                    <h3
                      className={`text-xl font-klein font-semibold leading-10 max-md:max-w-full md:text-xl max-md:leading-8 ${index === 0 ? "text-red-600" : "text-blue-600"
                        }`}
                    >
                      {feature.heading}
                    </h3>
                  }
                </div>
                {/* Render description */}
                {feature.logoImage && (
                  <img
                    loading="lazy"
                    src={urlForImage(feature.logoImage).toString()}
                    alt={feature?.logoImage?.alt}
                    className="object-cover my-2 md:px-20"
                  />
                )}
                <p className="font-semibold text-center md:text-2xl text-lg my-2 max-w-3xl tracking-wide leading-10 text-black max-md:max-w-full">
                  {feature.description}
                </p>
                {/* Render images if available */}
                {feature.images && (
                  <img
                    loading="lazy"
                    src={urlForImage(feature.images).toString()}
                    alt={feature?.images?.alt}
                    className="object-cover mt-4 md:px-32"
                  />
                )}
              </div>
            ))}
          </div>
        </section>
      </ScrollAnimation>
      <ScrollAnimation>
        <section
          className={`py-6 md:py-16 px-6 md:px-16 bg-opacity-20`}
          style={{ backgroundColor: data?.color ? `${data.color}33` : '#05BD4B33' }}
        >
          <div className="px-6 md:px-16 py-6 max-w-7xl mx-auto  bg-white rounded-2xl max-w-7xl mx-auto shadow-[0px_16px_32px_rgba(109,70,189,0.05)]">
            <div className="">
              <h3 className="text-2xl font-semibold my-4 md:my-8">
                {data?.challengesfacedheading}:
              </h3>
              <ul>
                {data.chanllangesfaced?.map((challange: any) => {
                  return (
                    <li
                      className="text-xs md:text-lg leading-4 md:leading-8 font-light"
                      key={challange._key}
                    >
                      <span className="text-lg  font-bold">
                        {challange.heading}:{" "}
                      </span>
                      <span className="text-lg  font-light">
                        {challange.description}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="px-6 md:px-16 py-6 max-w-7xl mt-14 mx-auto  bg-white rounded-2xl max-w-7xl mx-auto shadow-[0px_16px_32px_rgba(109,70,189,0.05)]">
            <div className="">
              <h3 className="text-2xl font-semibold my-4 md:my-8">
                {data?.ourapproachheading}:
              </h3>
              <ul>
                {data.ourapproach?.map((approach: any) => {
                  return (
                    <li
                      className="text-xs md:text-lg leading-4 md:leading-8 font-light"
                      key={approach._key}
                    >
                      <span className="text-lg  font-bold">
                        {approach.heading}:{" "}
                      </span>
                      <span className="text-lg  font-light">
                        {approach.description}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="px-6 md:px-16 py-6 max-w-7xl mt-14 mx-auto  bg-white rounded-2xl max-w-7xl mx-auto shadow-[0px_16px_32px_rgba(109,70,189,0.05)]">
            <div className="">
              <h3 className="text-2xl font-semibold my-4 md:my-8">
                {data?.resultsheading}:
              </h3>
              <ul>
                {data.results?.map((result: any) => {
                  return (
                    <li
                      className="text-xs md:text-lg leading-4 md:leading-8 font-light"
                      key={result._key}
                    >
                      <span className="text-lg  font-bold">
                        {result.heading}:{" "}
                      </span>
                      <span className="text-lg  font-light">
                        {result.description}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="px-6 md:px-16 py-6 max-w-7xl mx-auto mt-14 bg-white rounded-2xl max-w-7xl mx-auto shadow-[0px_16px_32px_rgba(109,70,189,0.05)]">
            <h3 className="text-2xl font-semibold my-4 md:my-8">
              {data?.conclusionheading}:
            </h3>
            <p className="text-lg  font-light leading-8 md:leading-8">
              {data?.conclusion && data.conclusion}
            </p>
          </div>
        </section>
      </ScrollAnimation>
    </div>

  );
};
export default page;
