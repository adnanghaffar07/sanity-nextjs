import React from "react";
import HeroSectionComponent from "../components/HeroSectionComponent";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

async function getData() {
  const query = `*[_type == 'portfolio'] | order(_updatedAt desc)`;
  try {
    const fetchData = await client.fetch(query);
    return fetchData || [];
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

const page = async () => {
  const data = await getData();
  const recentArray = await data.filter((item: any) => item.group === "recent");
  const topArray = await data.filter((item: any) => item.group === "top");
  return (
    <>
      <HeroSectionComponent
        title="Case Studies"
        content="Explore our case studies to discover how we turn challenges into
  success stories through technology solutions."
        image="/case-study-hero-image.jpg"
      />

      <section className="mx-auto w-full relative overflow-hidden">
        <div className="bg-[#1D92FB] opacity-15 w-[734px] h-[734px] rounded-full absolute -left-[550px] sm:-left-[400px] -top-80 sm:-top-64 flex items-center justify-center z-0">
          <div className="bg-white w-[610px] h-[610px] rounded-full"></div>
        </div>

        <h2 className="self-center text-2xl sm:text-3xl md:text-6xl tracking-tight text-center text-black capitalize leading-[61.08px] max-md:max-w-full mt-10 sm:mt-20">
          Checkout our projects
        </h2>

        {topArray &&
          topArray.map((item: any, index: any) => {
            return index % 2 === 0 ? (
              <div
                className="mt-4 sm:mt-24 mx-5 sm:mx-10 relative"
                key={item._key}
              >
                <div className="bg-[#1D92FB] opacity-15 w-[120px] sm:w-[207px] h-[120px] sm:h-[207px] rounded-full absolute -right-20 sm:-right-20 md:-right-28 top-[220px] sm:top-[350px] md:top-[440px] lg:top-[600px] xl:top-20 z-0"></div>
                <div className="flex flex-col xl:flex-row gap-5 max-w-[1624px] justify-between items-center mx-auto">
                  <div className="w-full sm:w-[600px] md:w-[720px] lg:w-[980px] xl:w-[778px] z-[1]">
                    {item?.cardimage?.asset && (
                      <Image
                        src={urlForImage(item.cardimage.asset)}
                        alt={item.cardimage.alt}
                        width={800}
                        height={533}
                        loading="lazy"
                        className="grow w-full z-[1]"
                      />
                    )}
                  </div>

                  <div className="flex flex-col items-center mt-0 md:mt-10">
                    <h2 className="self-stretch text-2xl sm:text-3xl md:text-6xl tracking-tight text-right capitalize leading-[61.08px] text-sky-950">
                      {item.title}
                    </h2>
                    <p className="mt-0 sm:mt-3 text-xs sm:text-xl leading-[16px] sm:leading-7 text-right text-black max-w-[290px] sm:max-w-[490px]">
                      {item.carddescription}
                    </p>

                    <div className="w-full flex justify-end">
                      {item.slug ? (
                        <Link
                          href={`/case-study/${item.slug}`}
                          className="flex items-center px-4 gap-4 mt-2 sm:mt-10 text-2xl text-black bg-[#F7E022] w-[134px] sm:w-[223px] h-7 sm:h-[55px] rounded-[9px] cursor-pointer shadow-xl"
                        >
                          <p className="flex-auto text-xs sm:text-xl">
                            Learn More
                          </p>
                          <div className="w-4 h-4 sm:w-8 sm:h-8">
                            <Image
                              src="/case-study-more-button-icon.png"
                              alt="Learn More Icon"
                              width={31}
                              height={32}
                              loading="lazy"
                              className="shrink-0 aspect-[1.03]"
                            />
                          </div>
                        </Link>
                      ) : (
                        <button className="flex items-center px-4 gap-4 mt-2 sm:mt-10 text-2xl text-black bg-[#F7E022] w-[134px] sm:w-[223px] h-7 sm:h-[55px] rounded-[9px] cursor-pointer shadow-xl">
                          <p className="flex-auto text-xs sm:text-xl">
                            Learn More
                          </p>
                          <div className="w-4 h-4 sm:w-8 sm:h-8">
                            <Image
                              src="/case-study-more-button-icon.png"
                              alt="Learn More Icon"
                              width={31}
                              height={32}
                              loading="lazy"
                              className="shrink-0 aspect-[1.03]"
                            />
                          </div>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="mt-16 sm:mt-40 mx-5 sm:mx-10 relative"
                key={item._key}
              >
                <div className="bg-[#1D92FB] opacity-15 w-[120px] sm:w-[207px] h-[120px] sm:h-[207px] rounded-full absolute -left-20 sm:-left-36 top-[160px] sm:top-[320px] md:top-[450px] lg:top-[600px] xl:top-12 z-0"></div>
                <div className="flex flex-col xl:flex-row-reverse gap-5 justify-between max-w-[1624px] items-center mx-auto relative">
                  <div className="w-full sm:w-[600px] md:w-[720px] lg:w-[980px] xl:w-[778px]z-[1]">
                    {item?.cardimage?.asset && (
                      <Image
                        src={urlForImage(item.cardimage.asset)}
                        alt={item.cardimage.alt}
                        width={800}
                        height={533}
                        loading="lazy"
                        className="grow w-full z-[1]"
                      />
                    )}
                  </div>

                  <div className="flex flex-col items-center mt-0 md:mt-10">
                    <h2 className="self-stretch text-2xl sm:text-3xl md:text-6xl tracking-tight text-left capitalize leading-[61.08px] text-sky-950">
                      {item.title}
                    </h2>
                    <p className="mt-0 sm:mt-3 text-xs sm:text-xl leading-[16px] sm:leading-7 text-left text-black max-w-[290px] sm:max-w-[490px]">
                      {item.carddescription}
                    </p>

                    <div className="w-full flex justify-start">
                      {item.slug ? (
                        <Link
                          href={`/case-study/${item.slug}`}
                          className="flex items-center px-4 gap-4 mt-2 sm:mt-10 text-2xl text-black bg-[#F7E022] w-[134px] sm:w-[223px] h-7 sm:h-[55px] rounded-[9px] cursor-pointer shadow-xl"
                        >
                          <p className="flex-auto text-xs sm:text-xl">
                            Learn More
                          </p>
                          <div className="w-4 h-4 sm:w-8 sm:h-8">
                            <Image
                              src="/case-study-more-button-icon.png"
                              alt="Learn More Icon"
                              width={31}
                              height={32}
                              loading="lazy"
                              className="shrink-0 aspect-[1.03]"
                            />
                          </div>
                        </Link>
                      ) : (
                        <button className="flex items-center px-4 gap-4 mt-2 sm:mt-10 text-2xl text-black bg-[#F7E022] w-[134px] sm:w-[223px] h-7 sm:h-[55px] rounded-[9px] cursor-pointer shadow-xl">
                          <p className="flex-auto text-xs sm:text-xl">
                            Learn More
                          </p>
                          <div className="w-4 h-4 sm:w-8 sm:h-8">
                            <Image
                              src="/case-study-more-button-icon.png"
                              alt="Learn More Icon"
                              width={31}
                              height={32}
                              loading="lazy"
                              className="shrink-0 aspect-[1.03]"
                            />
                          </div>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </section>

      <section className="mb-40 xl:container xl:mx-auto flex flex-col">
        <h2 className="mt-16 sm:mt-36 text-2xl sm:text-6xl capitalize leading-8 sm:leading-[61px] text-sky-950 mb-9 sm:mb-16 ml-20">
          Our Recent Work
        </h2>
        <div className="flex justify-center items-center flex-col xl:flex-row flex-wrap gap-x-24 gap-y-14 relative">
          {recentArray &&
            recentArray.map((recentWork: any) => {
              return recentWork.slug ? (
                <div
                  className="flex flex-col pb-3 lg:pb-9 text-2xl font-medium leading-6 text-black rounded-lg sm:rounded-3xl bg-zinc-100 shadow-lg"
                  key={recentWork._key}
                >
                  <Link
                    href={`/case-study/${recentWork.slug}`}
                    className="w-[274px] sm:w-[512px] "
                  >
                    {recentWork?.cardimage?.asset && (
                      <Image
                        src={urlForImage(recentWork.cardimage.asset)}
                        alt={recentWork.cardimage.alt}
                        width={512}
                        height={288}
                        loading="lazy"
                        className="shadow-caseStudyRecentWorkCard rounded-lg sm:rounded-[26px] w-full h-full xl:h-[256px] "
                      />
                    )}
                  </Link>
                  <h2 className="text-sm sm:text-2xl text self-center mt-6">
                    {recentWork.title} - {recentWork.subtitle}
                  </h2>
                </div>
              ) : (
                <div
                  className="flex flex-col pb-3 lg:pb-9 text-2xl font-medium leading-6 text-black rounded-lg sm:rounded-3xl bg-zinc-100 shadow-lg"
                  key={recentWork._key}
                >
                  <div className="w-[274px] sm:w-[512px] ">
                    {recentWork?.cardimage?.asset && (
                      <Image
                        src={urlForImage(recentWork.cardimage.asset)}
                        alt={recentWork.cardimage.alt}
                        width={512}
                        height={288}
                        loading="lazy"
                        className="shadow-caseStudyRecentWorkCard rounded-lg sm:rounded-[26px] w-full h-full xl:h-[256px]"
                      />
                    )}
                  </div>
                  <h2 className="text-sm sm:text-2xl text self-center mt-6">
                    {recentWork.title} - {recentWork.subtitle}
                  </h2>
                </div>
              );
            })}
          <div className="absolute -bottom-24 right-10 lg:right-64 xl:right-16 2xl:right-52">
            <div className="flex gap-4">
              <button>
                <Image
                  src="/recentProject-left-arrow.png"
                  alt="left-arrow-key"
                  width={36}
                  height={36}
                />
              </button>
              <button>
                <Image
                  src="/recentProject-right-arrow.png"
                  alt="right-arrow-key"
                  width={36}
                  height={36}
                />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
