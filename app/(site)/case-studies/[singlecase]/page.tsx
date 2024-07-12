import React from "react";
import { client } from "../../../../sanity/lib/client";
import HouseArrestBanner from "../../components/HouseArrestBanners";
import ScrollAnimation from "../../components/ScrollAnimation";



import { urlForImage } from "@/sanity/lib/image";
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
      <section className="flex overflow-hidden relative flex-col pb-12 w-full font-light max-md:max-w-full ">
        {data?.title === "House Arrest" && data?.cardimage ? (
          <HouseArrestBanner />
        ) : (
          data.cardimage && (
            <img
              src={urlForImage(data.cardimage).toString()}
              alt=""
            />
          )
        )}
      </section>
      <img
        loading="lazy"
        src="/Subtract-left.png"
        alt="eclipse icon"
        className="absolute w-[180px] z-0"
      />
      {/* Introduction Section */}
      <ScrollAnimation>
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
      </ScrollAnimation>
      <img
        loading="lazy"
        src="/vector1.png"
        alt="eclipse icon"
        className="absolute w-[50px] md:w-[90px] z-0"
      />

      {/* Tools and Technologies Used Section */}
      <ScrollAnimation>
        <section className="px-6 md:px-16 py-10 md:py-16 max-w-7xl mx-auto ">
          <div></div>
          <h3 className="text-2xl font-semibold text-center my-4 md:my-8 font-klein">
            {data?.toolsandtechusedtitle}
          </h3>

          <p className="text-lg font-light text-center leading-9 text-black">
            {data?.toolsandtechdescription}
          </p>
          <img
            loading="lazy"
            src="/vector2.png"
            alt="eclipse icon"
            className="absolute right-0 w-[30px] md:w-[90px] z-0"
          />
          <h3 className="text-2xl font-semibold text-center my-4 md:my-8 font-klein">
            {data?.toolsandtechusedheading}
          </h3>

          {data.caseStudiesToolsSection ? (
            <div className="container mt-10">
              <div className="flex flex-col sm:flex sm:flex-row sm:flex-wrap justify-center gap-y-5 md:gap-y-10">
                {data.caseStudiesToolsSection.toolsTech.map(
                  (tool: any, toolIndex: any) => (
                    <div
                      key={toolIndex}
                      className="w-full m-4 sm:m-0 sm:w-1/2 lg:w-1/3"
                    >
                      <div className="flex md:justify-center gap-2">
                        <div className="flex flex-row gap-3">
                          {tool.images?.map((logoRef: any, logoIndex: any) => {
                            const logoData = dataLogo.find(
                              (logo: any) => logo._id === logoRef._ref
                            );
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
                          <p className="mt-1 text-lg tracking-wide">
                            {tool.detail}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          ) : (
            <ul>
              {data.technologiesused?.map((tech: any) => (
                <li
                  className="text-xs md:text-xl leading-4 md:leading-8 font-light"
                  key={tech._key}
                >
                  <span className="text-lg font-bold">
                    {tech.heading}:{" "}
                  </span>
                  <span className="text-lg font-light">
                    {tech.description}
                  </span>
                </li>
              ))}
            </ul>
          )}


        </section>
      </ScrollAnimation>
      <img
        loading="lazy"
        src="/vector1.png"
        alt="eclipse icon"
        className="absolute w-[30px] md:w-[90px] z-0"
      />
      <img
        loading="lazy"
        src="/vector3.png"
        alt="eclipse icon"
        className="absolute right-0 w-[80px] md:w-[160px] z-0"
      />

      {/*  Application Features  */}
      <ScrollAnimation>
        <section className="">

          <div className="px-6 md:px-16 py-5 md:py-16 max-w-7xl mx-auto">
            {data.features?.featureslist.map((feature: any, index: number) => (
              <div key={feature._key} className="flex flex-col items-center">
                {/* Render heading */}


                <div className="flex flex-row items-center justify-center mt-4 space-x-4">
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
                            className="object-cover h-12 md:h-24 px-3"
                          />
                        </div>
                      );
                    } else {
                      return null;
                    }
                  })}

                  <h3
                    className={`text-xl font-klein font-semibold leading-10 max-md:max-w-full md:text-2xl max-md:leading-8 ${index === 0 ? "text-red-600" : "text-blue-600"
                      }`}
                  >
                    {feature.heading}
                  </h3>

                </div>
                {/* Render description */}
                <p className="font-light text-center text-xl max-md:text-lg tracking-wide leading-10 text-black max-md:max-w-full">
                  {feature.description}
                </p>
                {/* Render images if available */}
                {feature.images && (
                  <img
                    loading="lazy"
                    src={urlForImage(feature.images).toString()}
                    className="object-cover mt-4 md:px-20"
                  />
                )}
              </div>
            ))}
          </div>

          {/* <img
          loading="lazy"
          src="/vector4.png"
          alt="eclipse icon"
          className="absolute w-[170px] z-0 "
        /> */}
        </section>
      </ScrollAnimation>
      <img
        loading="lazy"
        src="/vector3.png"
        alt="eclipse icon"
        className="absolute right-0 w-[50px] md:w-[160px] z-0"
      />




      <section >

        <div>
          <ScrollAnimation>
            <div className="px-6 md:px-16 py-5 md:py-16 max-w-7xl mx-auto">
              {data?.secondaryimage?.asset && (
                <img
                  loading="lazy"
                  src={urlForImage(data.secondaryimage.asset)}
                  alt={data.secondaryimage.alt}
                  className="object-cover"
                />
              )}
              {/* Client Background & We Provided Section */}
              {/* {data.projectoverviewtitle && (
          <h3 className="text-2xl font-semibold  my-4 md:my-8">
            {data.projectoverviewtitle}
          </h3>
        )} */}
            </div>
          </ScrollAnimation>

          {data?.secondaryimage?.asset && (
            <img
              loading="lazy"
              src="/vector3.png"
              alt="eclipse icon"
              className="absolute right-0 w-[100px] md:w-[170px] z-0"
            />
          )}
          <img
            loading="lazy"
            src="/vector1.png"
            alt="eclipse icon"
            className="absolute w-[30px] md:w-[65px] z-0"
          />
          <ScrollAnimation>
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
          </ScrollAnimation>
        </div>
      </section>


      <img
        loading="lazy"
        src="/vector1.png"
        alt="eclipse icon"
        className="absolute w-[30px] md:w-[60px] z-0"
      />
      <ScrollAnimation>
        <section>
          <div className="px-6 md:px-16 max-w-7xl mx-auto">
            <div className="w-full my-8 md:my-10  mx-auto">
              <h3 className="text-2xl font-semibold  mb-4">
                {data?.projectscopeheading}
              </h3>
              <p className="text-lg  font-light leading-8 md:leading-8 ">
                {data?.projectscopecontent && data.projectscopecontent}
              </p>

              <h3 className="text-2xl font-semibold my-4 md:my-8">
                {data?.challengesfacedheading}
              </h3>
              <ul>
                {data.chanllangesfaced?.map((challange: any) => {
                  return (
                    <li
                      className="text-xs md:text-lg leading-4 md:leading-8 font-light"
                      key={challange._key}
                    >
                      <span className="text-lg  font-light">
                        {challange.description}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section></ScrollAnimation>

      <img
        loading="lazy"
        src="/Subtract-right.png"
        alt="eclipse icon"
        className="absolute right-0 w-[270px] md:w-[370px] z-0"
      />
      <ScrollAnimation>
        <section>
          <div className="px-6 md:px-16 pb-10 max-w-7xl mx-auto">
            <h3 className="text-2xl font-semibold my-4 md:my-8">
              {data?.ourapproachheading}
            </h3>
            <ul>
              {data.ourapproach?.map((approach: any) => {
                return (
                  <li
                    className="text-xs md:text-xl leading-4 md:leading-8 font-light"
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
            <h3 className="text-2xl  font-semibold my-4 md:my-8">
              {data?.resultsheading}
            </h3>
            <ul>
              {data?.results?.map((result: any) => {
                return (
                  <li
                    className="text-xs md:text-xl leading-4 md:leading-8 font-light"
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

            <h3 className="text-2xl font-semibold my-4 md:my-8">
              {data?.conclusionheading}
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
