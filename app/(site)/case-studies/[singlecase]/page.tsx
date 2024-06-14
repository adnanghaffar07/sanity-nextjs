import React from "react";
import { client } from "../../../../sanity/lib/client";
import HeroSectionComponent from "../../components/HeroSectionComponent";
import Image from "next/image";
import HouseArrestBanner from "../../components/HouseArrestBanners";

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

const page = async ({ params }: { params: { singlecase: string } }) => {
  const data = await getData(params.singlecase);
  const dataLogo = await getLogoData();

  return (
    <div className="max-w-full">
      <section className="flex overflow-hidden relative flex-col pb-12 w-full font-light    max-md:max-w-full ">
        {data?.title === "House Arrest" && data?.cardimage?.asset ? (
          <HouseArrestBanner />
        ) : (
          data?.cardimage?.asset && (
            <img
              loading="lazy"
              src={urlForImage(data.cardimage.asset)}
              style={{ objectFit: "cover" }}
              className=" sm:h-[700px]  h-auto"
              alt={data.cardimage.alt}
            />
          )
        )}
      </section>
      <div className="flex flex-col self-center w-full xl:max-w-[1380px]   mx-auto">
        <div className="lg:px-10 px-4">
          <div className="flex flex-col xl:flex-row justify-center items-center mt-0  gap-6 md:gap-10 lg:gap-36">
            <div>
              <h2 className="text-3xl font-semibold   mb-4">
                {data?.introductionheading}
              </h2>
              <p className="text-lg font-light   xl:max-w-[610px] text-justify">
                {data.briefdescription && data.briefdescription}
              </p>
            </div>
            <div className="flex flex-col   gap-6 md:gap-10 mb-20  mt-20 md:mb-24">
              {data.briefitemsarray?.map((item: any) => {
                return (
                  <div className="relative" key={item._key}>
                    <div className="w-[42px] md:w-[78px] h-[42px] md:h-[78px] rounded-full bg-[#1D92FB] opacity-[0.14] absolute -left-4 md:-left-10 md:-top-2"></div>
                    <p className="text-[#707070] text-sm md:text-xl font-medium">
                      {item.heading}
                    </p>
                    <p className="text-lg md:text-xl max-w-80 font-medium ">
                      {item.value}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <section>
            <h3 className="text-3xl font-semibold  text-center  my-4 md:my-8">
              {data?.toolsandtechusedtitle}
            </h3>

            <p className="text-lg font-light tracking-wider leading-9  text-justify text-black">
              {data?.toolsandtechdescription}
            </p>

            <h3 className="text-3xl font-semibold text-center  my-4 md:my-8">
              {data?.toolsandtechusedheading}
            </h3>

            {data.caseStudiesToolsSection ? (
              <div className="container mx-16 mt-10 ">
                <div className="flex flex-col sm:flex sm:flex-row sm:flex-wrap justify-center gap-y-10 ">
                  {data.caseStudiesToolsSection.toolsTech.map(
                    (tool: any, toolIndex: any) => (
                      <div
                        key={toolIndex}
                        className="w-full sm:w-1/2 lg:w-1/3 "
                      >
                        <div className="flex  gap-2">
                          <div className="flex flex-row  gap-2">
                            {tool.images?.map(
                              (logoRef: any, logoIndex: any) => {
                                const logoData = dataLogo.find(
                                  (logo: any) => logo._id === logoRef._ref
                                );
                                if (logoData) {
                                  return (
                                    <div key={logoIndex}>
                                      <img
                                        src={urlForImage(
                                          logoData.image
                                        ).toString()}
                                        alt={logoData.heading}
                                        className=" max-h-10   object-cover"
                                      />
                                    </div>
                                  );
                                } else {
                                  return null;
                                }
                              }
                            )}
                          </div>

                          <div className="flex flex-col my-auto">
                            <h3 className="text-3xl tracking-wider">
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
                    <span className="text-lg text-justify font-bold">
                      {tech.heading}:{" "}
                    </span>
                    <span className="text-lg text-justify font-light">
                      {tech.description}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </section>

          <section className="my-[10%]">
            {/*  Application Features  */}

            {data.features?.featureslist.map((feature: any) => {
              return (
                <div
                  key={feature._key}
                  className="flex gap-5  justify-center text-center max-md:flex-wrap"
                >
                  {feature.logo?.map((logoRef: any, logoIndex: any) => {
                    const logoData = dataLogo.find(
                      (logo: any) => logo._id === logoRef._ref
                    );
                    if (logoData && logoData.image) {
                      return (
                        <div key={logoIndex}>
                          <img
                            src={urlForImage(logoData.image).toString()}
                            alt={logoData.heading}
                            className="shrink-0 self-start max-w-full aspect-[0.9] w-[114px]"
                          />
                        </div>
                      );
                    } else {
                      return null;
                    }
                  })}

                  <div className="flex flex-col grow shrink-0 self-end px-5 mt-10 basis-0 w-fit max-md:mt-10 max-md:max-w-full">
                    <h3 className="text-4xl font-semibold  leading-10 text-red-600 max-md:max-w-full max-md:text-4xl max-md:leading-8">
                      {feature.heading}
                    </h3>
                    <p className="self-center mt-6 text-xl tracking-wide leading-10 text-justify text-black max-md:max-w-full">
                      {feature.description}
                    </p>
                    {feature.images && (
                      <img
                        loading="lazy"
                        src={urlForImage(feature.images).toString()}
                        className=" max-w-full"
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </section>

          <div>
            {data?.secondaryimage?.asset && (
              <img
                loading="lazy"
                src={urlForImage(data.secondaryimage.asset)}
                alt={data.secondaryimage.alt}
                className="size-full my-[10%] sm:mb-14 shadow-blogImage"
              />
            )}
            {/* Client Background & We Provided Section */}
            {data.projectoverview ? (
              <div className="flex flex-col gap-5 sm:flex sm:flex-row justify-center mb-10">
                {data.projectoverview.projectoverviewdetail.map(
                  (project: any) => (
                    <div
                      key={project._key}
                      className="rounded-2xl sm:w-[30%] text-white p-10"
                      style={{ backgroundColor: project.backgroundcolor }}
                    >
                      <h1 className="text-3xl text-center font-semibold p-2">
                        {project.heading}
                      </h1>
                      <p>{project.detail}</p>
                    </div>
                  )
                )}
              </div>
            ) : (
              <div className="hidden"></div>
            )}

            <div>
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col gap-28  px-5 text-2xl tracking-wider text-black max-md:max-w-full">
                    {/*  Application Testing  */}
                    <div className=" text-justify">
                      <h2 className="text-3xl font-semibold  mb-4">
                        {data.applicationtestingheading}
                      </h2>
                      <p className="text-lg text-justify font-light leading-8 md:leading-8">
                        {data.applicationtestingdescription}
                      </p>
                    </div>
                    {/*  Types of Testing  */}
                    <div>
                      <h2 className="text-3xl font-semibold  mb-4">
                        {data.typeoftestingheading}
                      </h2>

                      <ul className=" mx-10">
                        {data.typeoftestinglist?.map((testingType: any) => (
                          <li className=" list-disc" key={testingType._key}>
                            <span className="text-lg text-justify font-light">
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

            <div className="w-full my-10 md:my-20 text-justify mx-auto">
              <h3 className="text-3xl font-semibold  mb-4">
                {data?.projectscopeheading}:
              </h3>
              <p className="text-lg text-justify font-light leading-8 md:leading-8 ">
                {data?.projectscopecontent && data.projectscopecontent}
              </p>

              <h3 className="text-3xl font-semibold my-4 md:my-8">
                {data?.challengesfacedheading}:
              </h3>
              <ul>
                {data.chanllangesfaced?.map((challange: any) => {
                  return (
                    <li
                      className="text-xs md:text-lg leading-4 md:leading-8 font-light"
                      key={challange._key}
                    >
                      <span className="text-lg text-justify font-light">
                        {challange.description}
                      </span>
                    </li>
                  );
                })}
              </ul>
              <h3 className="text-3xl font-semibold my-4 md:my-8">
                {data?.ourapproachheading}:
              </h3>
              <ul>
                {data.ourapproach?.map((approach: any) => {
                  return (
                    <li
                      className="text-xs md:text-xl leading-4 md:leading-8 font-light"
                      key={approach._key}
                    >
                      <span className="text-lg text-justify font-bold">
                        {approach.heading}:{" "}
                      </span>
                      <span className="text-lg text-justify font-light">
                        {approach.description}
                      </span>
                    </li>
                  );
                })}
              </ul>
              <h3 className="text-3xl  font-semibold my-4 md:my-8">
                {data?.resultsheading}:
              </h3>
              <ul>
                {data?.results?.map((result: any) => {
                  return (
                    <li
                      className="text-xs md:text-xl leading-4 md:leading-8 font-light"
                      key={result._key}
                    >
                      <span className="text-lg text-justify font-bold">
                        {result.heading}:{" "}
                      </span>
                      <span className="text-lg text-justify font-light">
                        {result.description}
                      </span>
                    </li>
                  );
                })}
              </ul>

              <h3 className="text-3xl font-semibold my-4 md:my-8">
                {data?.conclusionheading}:
              </h3>
              <p className="text-lg text-justify leading-8 md:leading-8">
                {data?.conclusion && data.conclusion}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
