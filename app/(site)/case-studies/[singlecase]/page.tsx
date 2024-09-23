import React from "react";
import { client } from "../../../../sanity/lib/client";
import HouseArrestBanner from "../../components/HouseArrestBanners";
import ScrollAnimation from "../../components/ScrollAnimation";



import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";
async function getData(urlService: string) {
  const query = `*[_type == 'portfolio' && slug == '${urlService}'][0]`;
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
export async function generateMetadata({ params }: { params: { singlecase: string } }) {

  const data = await getData(params.singlecase);

  const title = data.webSeoMetadataSub?.title || "Code Automation - Custom Software and Mobile Development Company in USA";
  const description = data.webSeoMetadataSub?.description || "Custom Software and Mobile Development Company in USA";
  const keywords = data.webSeoMetadataSub?.keywords?.join(", ") || "CodeAutomation.ai";

  const heroImageUrl = data.cardimage ? urlForImage(data.cardimage).toString() : " " // Use a default image if heroImage is not available

  const facebookMeta = data.facebookCardsSub || {};
  const twitterMeta = data.twitterCardsSub || {};
  const linkedInMeta = data.linkedInCardsSub || {};
  const pinterestMeta = data.pinterestCardsSub || {};
  const whatsappMeta = data.whatsappCardsSub || {};
  const telegramMeta = data.telegramCardsSub || {};

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
          url: heroImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: twitterMeta.twitterType || "summary_large_image",
      title: twitterMeta.twitterTitle || title,
      description: twitterMeta.twitterDescription || description,
      images: [
        {
          url: heroImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        }
      ],
      url: twitterMeta.twitterUrl || "https://codeautomation.ai",
    },
    linkedIn: {
      title: linkedInMeta.linkedInTitle || title,
      description: linkedInMeta.linkedInDescription || description,
      image: linkedInMeta.linkedInImage && urlForImage(linkedInMeta.linkedInImage).toString(),
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
      {data.projectGoalsSection &&
        <section className="flex overflow-hidden relative flex-col md:pb-12 w-full font-light text-white lg:min-h-[700px] max-md:max-w-full">
          {data.cardimage && (
            <img
              src={urlForImage(data.cardimage).toString()}
              alt="l"
              className="top-0 left-0 object-cover absolute inset-0 size-full bg-black"
            />
          )}
          <div className="lg:absolute lg:top-[200px] md:left-[0px] lg:left-[110px] ">
            <div className="md:text-6xl text-3xl mb-6 font-bold capitalize max-w-2xl lg:pl-8">
              <h2>{data.subtitle}</h2>
            </div>
            <div className="md:text-4xl text-2xl text-gray-100 font-bold capitalize max-w-lg lg:pl-8">
              <h2>{data.blogheading}</h2>
            </div>
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
          </div>
        </section>

      }

      {/* Introduction Section */}
      <ScrollAnimation>
        {data.typeoftestinglist &&
          <div className="flex flex-col xl:flex-row gap-10 xl:gap-36  mt-0 md:mt-10 px-6 md:px-16 max-w-7xl mx-auto">
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                {data?.introductionheading}
              </h2>
              <p className="text-lg font-light xl:max-w-[610px]">
                {data?.briefdescription}
              </p>
            </div>
            <div className="flex flex-col gap-6 ml-8 md:gap-10">
              {data?.briefitemsarray?.map((item: any) => (
                <div className="relative" key={item._key}>
                  <div className="w-[42px] md:w-[78px] h-[42px] md:h-[78px] rounded-full bg-[#1D92FB] opacity-[0.14] absolute -left-4 md:-left-10 md:-top-2"></div>
                  <p className="text-[#707070] text-sm md:text-xl font-medium">
                    {item.heading}
                  </p>
                  <p className="text-lg max-w-80 font-medium">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        }
      </ScrollAnimation>

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
      {/* <ScrollAnimation>
        {data.projectGoalsSection &&
          <div className="overflow-hidden px-6 md:px-16 py-5 md:py-16 max-w-7xl mx-auto">
            <div className="flex gap-10 max-md:flex-col">
              <div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b7f5532a9f5fd6d00fdcb03c11b38378b35e812402a8b93409a6f9303aab8985?placeholderIfAbsent=true&apiKey=4bbac2e9fd8543319fbc188f9510a76b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7f5532a9f5fd6d00fdcb03c11b38378b35e812402a8b93409a6f9303aab8985?placeholderIfAbsent=true&apiKey=4bbac2e9fd8543319fbc188f9510a76b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7f5532a9f5fd6d00fdcb03c11b38378b35e812402a8b93409a6f9303aab8985?placeholderIfAbsent=true&apiKey=4bbac2e9fd8543319fbc188f9510a76b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7f5532a9f5fd6d00fdcb03c11b38378b35e812402a8b93409a6f9303aab8985?placeholderIfAbsent=true&apiKey=4bbac2e9fd8543319fbc188f9510a76b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7f5532a9f5fd6d00fdcb03c11b38378b35e812402a8b93409a6f9303aab8985?placeholderIfAbsent=true&apiKey=4bbac2e9fd8543319fbc188f9510a76b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7f5532a9f5fd6d00fdcb03c11b38378b35e812402a8b93409a6f9303aab8985?placeholderIfAbsent=true&apiKey=4bbac2e9fd8543319fbc188f9510a76b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7f5532a9f5fd6d00fdcb03c11b38378b35e812402a8b93409a6f9303aab8985?placeholderIfAbsent=true&apiKey=4bbac2e9fd8543319fbc188f9510a76b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7f5532a9f5fd6d00fdcb03c11b38378b35e812402a8b93409a6f9303aab8985?placeholderIfAbsent=true&apiKey=4bbac2e9fd8543319fbc188f9510a76b"
                  className="object-contain grow w-full aspect-[1.01] rounded-[32px_32px_300px_32px] max-md:mt-10 max-md:max-w-full"
                />
              </div>
              <div className="flex flex-col ml-10 w-[59%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col mt-2 w-full max-md:mt-10 max-md:max-w-full">
                  <div className="md:text-4xl text-2xl font-semibold leading-none text-slate-900 max-md:max-w-full">
                    {data.toolsandtechusedheading}
                  </div>
                  {data.caseStudiesToolsSection.toolsTech.map(
                    (tool: any, toolIndex: any) => (
                      <div key={toolIndex} className="flex flex-col mt-8 w-full max-w-[624px] max-md:max-w-full">
                        <div className="md:text-2xl text-xl font-semibold leading-relaxed text-slate-900 max-md:max-w-full">
                          {tool.heading}
                        </div>
                        <div className="flex flex-wrap gap-10 items-center mt-2 w-full text-lg tracking-wide text-black max-md:max-w-full">
                          {tool.images?.map((logoRef: any, logoIndex: any) => {
                            const logoData = dataLogo.find((logo: any) => logo._id === logoRef._ref);
                            if (logoData) {
                              return (
                                <div key={logoIndex} className="flex gap-1.5 items-center self-stretch my-auto w-[158px]">
                                  <img
                                    src={urlForImage(logoData.image).toString()}
                                    alt={logoData.heading}
                                    className="object-contain shrink-0 self-stretch my-auto w-14 rounded-lg aspect-square"
                                  />
                                  <div className="self-stretch my-auto">{logoData.heading}</div>
                                </div>
                              );
                            } else {
                              return null;
                            }
                          })}
                        </div>

                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        }
      </ScrollAnimation> */}


      {/*  Application Features  */}
      {/* <ScrollAnimation>
        {data.projectGoalsSection &&
          <div className="overflow-hidden px-6 md:px-16 py-5 md:py-16 max-w-7xl mx-auto">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-slate-900 max-md:mt-10 max-md:max-w-full">
                  {data.features?.featureslist?.map((feature: any, index: any) => (
                    <img
                      key={index}
                      loading="lazy"
                      src={urlForImage(feature.logoImage)}
                      className="object-contain max-w-full aspect-[3.13] w-[125px]"
                    />
                  ))}
                  <div className="mt-2.5 text-2xl font-semibold leading-relaxed max-md:max-w-full">
                    {data.features.description}
                  </div>
                  <div className="flex flex-col mt-10 w-full font-medium text-center max-md:max-w-full">
                    <div className="flex flex-wrap gap-3 md:gap-6 items-center w-full max-md:max-w-full">
                      {data.features?.feature?.map((features: any, featureIndex: any) => (
                        <div
                          key={featureIndex}
                          className="flex flex-col grow shrink items-center self-stretch px-6 pb-4 my-auto bg-white rounded-xl border border-solid border-black border-opacity-10 shadow-[0px_4px_8px_rgba(0,0,0,0.08)] md:w-[calc(25%-24px)] w-[calc(33.33%-16px)] max-md:px-5"
                        >
                          <div className="px-2 py-1 text-md whitespace-nowrap rounded-md bg-slate-900 bg-opacity-10 w-[32px]">
                            {featureIndex + 1}
                          </div>
                          <div className="mt-3 text-sm leading-5">{features.text}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                {data.features?.featureslist?.map((feature: any, index: any) => (
                  <img
                    key={index}
                    loading="lazy"
                    src={urlForImage(feature.image)}
                    className="object-contain self-stretch my-auto w-full aspect-[1.01] max-md:mt-10 max-md:max-w-full"
                  />
                ))}
              </div>
            </div>
          </div>
        }
      </ScrollAnimation> */}


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
                    className="object-cover mt-4 md:px-32"
                  />
                )}
              </div>
            ))}
          </div>
        </section>

      </ScrollAnimation>
      <section >
        <div>
          {data.typeoftestinglist &&
            <ScrollAnimation>
              {data?.secondaryimage &&
                <div className="px-6 md:px-16 py-5 md:py-16 max-w-7xl mx-auto">
                  {data?.secondaryimage?.asset && (
                    <img
                      loading="lazy"
                      src={urlForImage(data.secondaryimage.asset)}
                      alt={data.secondaryimage.alt}
                      className="object-cover"
                    />
                  )}
                </div>
              }
            </ScrollAnimation>
          }

          <ScrollAnimation>
            {data.typeoftestinglist &&
              <div className="px-6 md:px-16 max-w-7xl mx-auto">
                {data.projectoverview ? (
                  <div className="">
                    <div className="mb-6 md:mb-10">
                      <h3 className="text-2xl font-semibold mb-6">
                        {data.projectoverview.heading}
                      </h3>
                      <p>{data.projectoverview.detail}</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6">
                      {data.projectoverview.projectoverviewdetail.map((project: any) => (
                        <div
                          key={project._key}
                          className="rounded-3xl w-full sm:w-[45%] shadow-md text-black p-6 sm:p-8 md:p-10"
                          style={{
                            background: `linear-gradient(to right, ${project.leftcolor}, ${project.rightcolor})`,
                          }}
                        >
                          <h1 className="text-2xl text-center text-white font-semibold p-2">
                            {project.heading}
                          </h1>
                          <p className="text-white text-center">{project.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="hidden"></div>
                )}

                {data.applicationtestingheading ||
                  data.typeoftestingheading ||
                  data.testingimage ? (
                  <div>
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0 py-10 md:py-16">
                      <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col text-2xl gap-10 md:gap-18 text-black max-md:max-w-full">
                          {/*  Application Testing  */}
                          <div>
                            <h2 className="text-2xl font-semibold  mb-4">
                              {data.applicationtestingheading}
                            </h2>
                            <p className="text-lg  font-light leading-8 md:leading-8">
                              {data.applicationtestingdescription}
                            </p>
                          </div>
                          {/*  Types of Testing  */}
                          <div>
                            <h2 className="text-2xl font-semibold  mb-4">
                              {data.typeoftestingheading}
                            </h2>

                            <ul className=" mx-10">
                              {data.typeoftestinglist?.map((testingType: any) => (
                                <li className=" list-disc" key={testingType._key}>
                                  <span className="text-lg  font-light">
                                    {testingType.value}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                        {data.testingimage && (
                          <img
                            loading="lazy"
                            src={urlForImage(data.testingimage).toString()}
                            className="mt-9 w-full aspect-[1.37] max-md:max-w-full"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="hidden"></div>
                )}
              </div>
            }
          </ScrollAnimation>
        </div>
      </section>


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
