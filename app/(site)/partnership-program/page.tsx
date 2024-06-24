import Image from "next/image";
import React from "react";
import type { Metadata } from "next";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import ScrollAnimation from "../components/ScrollAnimation";

async function getData() {
  const query = `*[_type == 'partnership'][0]`;
  try {
    const fetchData = await client.fetch(query);
    return fetchData || [];
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

// Updated generateMetadata function
export async function generateMetadata()  {
  const data = await getData();
  const keywords = data.webSeoMetadataSub?.keywords?.join(", ") || "CodeAutomation.ai"; // Join keywords into a single string

  return {
    title: data.webSeoMetadataSub?.title || "Code Automation - Custom Software and Mobile Development Company in USA",
    description: data.webSeoMetadataSub?.description || "Custom Software and Mobile Development Company in USA",
    keywords: keywords

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

        <div className="mt-[160px] sm:mt-[290px] items-center absolute inset-0 flex flex-col z-[2]">
          <h1 className="text-xl sm:text-3xl md:text-5xl xl:text-6xl font-semibold tracking-tight capitalize leading-[48px] text-white text-center">
            {data.heroTitle}
          </h1>
          <p className="mt-2 sm:mt-6 xl:mt-10 text-xs sm:text-base md:text-xl xl:text-3xl font-light tracking-wide leading-4 sm:leading-7  text-white max-w-[280px] sm:max-w-[1080px] xl:px-0 text-center">
            {data.heroSubTitle}
          </p>
        </div>
      </section>

      <ScrollAnimation>
        <section className="flex justify-center items-center px-16 py-14 text-center bg-zinc-100 max-md:px-5">
          <div className="flex flex-col max-w-full w-[700px]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl leading-10 text-black max-md:max-w-full">
              {data.title}
              <br />
            </h2>
            <p className="self-center mt-4 text-lg leading-6 text-slate-600 max-md:max-w-full max-w-[610px]">
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
                  <h2 className="text-2xl sm:text-4xl leading-8 sm:leading-6 max-md:max-w-full font-medium text-center sm:text-left">
                    {data?.availableProgramSection?.partnershipTitle}
                  </h2>
                  <p className="mt-8 text-base leading-6 max-w-[666px] text-justify">
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
                            <p className="mt-3 text-sm leading-6 text-slate-600 max-w-[666px] text-justify">
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
                className={`absolute bottom-0 w-[320px] z-0 ${
                  index === 1 ? "block" : "hidden"
                }`}
              />
              <img
                loading="lazy"
                src="/white-label-eclipse.png"
                alt="eclipse icon"
                className={`absolute bottom-0 right-0 w-[420px] z-0 ${
                  index === 2 ? "block" : "hidden"
                }`}
              />

              <div className="flex items-center justify-center">
                <div
                  className={`flex gap-5 flex-col max-w-[1280px] items-center justify-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
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
                      <h2 className="text-3xl text-black leading-[58px] sm:text-4xl md:text-5xl">
                        {program.title}
                      </h2>
                      <ol className="mt-14 text-xl sm:text-2xl leading-[50px] text-slate-600 max-md:mt-10 list-decimal">
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
        <section className="flex justify-center leading-8 text-center bg-[#EFEEEE] pb-36 -mb-16">
          <div className="max-w-[1280px]">
            <h2 className="text-3xl sm:text-5xl my-20">Our Services</h2>
            <div className="text-slate-600 max-w-[1280px]">
              <div className="flex justify-center gap-x-8 gap-y-14 flex-wrap px-5 w-full max-md:flex-wrap max-md:max-w-full">
                {data?.services?.map((service: any) => {
                  return service.singleService.length === 1 ? (
                    <p
                      className="flex items-center justify-center bg-white rounded-2xl shadow-md max-md:px-5 w-[290px] sm:w-[390px] h-[80px] p-2 text-xl sm:text-2xl"
                      key={service._key}
                    >
                      {service.singleService[0]}
                    </p>
                  ) : (
                    <p
                      className="flex items-center justify-center bg-white rounded-2xl shadow-md max-md:px-5 w-[290px] sm:w-[390px] h-[80px] p-2 text-xl sm:text-2xl"
                      key={service._key}
                    >
                      {service.singleService[0]}
                      <br />
                      {service.singleService[1]}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
};

export default page;
