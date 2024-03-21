import React from "react";
import HeroSectionComponent from "../components/HeroSectionComponent";
import Image from "next/image";
import Link from "next/link";

const recentWorkArr = [
  {
    imgSrc: "/recent-work-innroad.png",
    title: "innRoad - Hotel Management",
    link: "",
  },
  {
    imgSrc: "/recent-work-publicinput.png",
    title: "PublicInput - Public Engagement",
    link: "",
  },
  {
    imgSrc: "/recent-work-tracely.png",
    title: "Tracely - Location Tracking App",
    link: "",
  },
  {
    imgSrc: "/recent-work-vested.png",
    title: "Vested Finance - Fintech",
    link: "",
  },
];

const page = () => {
  return (
    <>
      <HeroSectionComponent
        title="“Case Study”"
        content="Explore our case studies to discover how we turn challenges into
  success stories through technology solutions."
        image="/case-study-hero-image.png"
      />

      <section className="2xl:container 2xl:mx-auto w-full relative overflow-hidden">
        <div className="bg-[#1D92FB] opacity-15 w-[734px] h-[734px] rounded-full absolute -left-[600px] md:-left-[500px] -top-64 flex items-center justify-center z-0">
          <div className="bg-white w-[640px] h-[640px] rounded-full"></div>
        </div>

        <div className="bg-[#1D92FB] opacity-15 w-[95px] md:w-[207px] h-[95px] md:h-[207px] rounded-full absolute -right-10 md:-right-24 top-[300px] sm:top-[460px] md:top-[650px] xl:top-64 z-0"></div>

        <h2 className="self-center text-2xl sm:text-3xl md:text-6xl tracking-tight text-center text-black capitalize leading-[61.08px] max-md:max-w-full mt-10 sm:mt-20">
          Checkout our projects
        </h2>

        <div className="mt-4 sm:mt-24 mx-5 sm:mx-10">
          <div className="flex flex-col xl:flex-row gap-5 justify-center items-center mx-auto">
            <div className="w-full sm:w-[480px] md:w-[580px] lg:w-[680px] xl:w-[778px] z-[1]">
              <Image
                src="/bubblehouse-project.png"
                alt="Bubblehouse Image"
                width={800}
                height={533}
                loading="lazy"
                className="grow w-full z-[1]"
              />
            </div>

            <div className="flex flex-col items-center mt-0 md:mt-10">
              <h2 className="self-stretch text-2xl sm:text-3xl md:text-6xl tracking-tight text-right capitalize leading-[61.08px] text-sky-950">
                Bubblehouse
              </h2>
              <p className="mt-0 sm:mt-3 text-xs sm:text-xl leading-[16px] sm:leading-7 text-right text-black max-w-[290px] sm:max-w-[490px]">
                Bubblehouse helps you drive the loyalty for your business/brand
                through tiers, collectibles, referrals, etc.
              </p>

              <div className="w-full flex justify-end">
                <Link
                  href={"/case-study/bubble-house"}
                  className="flex items-center px-4 gap-4 mt-2 sm:mt-10 text-2xl text-black bg-[#F7E022] w-[134px] sm:w-[223px] h-7 sm:h-[55px] rounded-[9px] cursor-pointer shadow-xl"
                >
                  <p className="flex-auto text-xs sm:text-xl">Learn More</p>
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
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 sm:mt-40 mx-5 sm:mx-10">
          <div className="flex flex-col xl:flex-row-reverse gap-5 justify-center items-center mx-auto relative">
            <div className="bg-[#1D92FB] opacity-15 w-[95px] md:w-[207px] h-[95px] md:h-[207px] rounded-full absolute -left-20 md:-left-40 top-[160px] sm:top-[250px] md:top-[400px] xl:top-12 z-0"></div>
            <div className="w-full sm:w-[480px] md:w-[580px] lg:w-[680px] xl:w-[778px] z-[1]">
              <Image
                src="/casestudy-getdandy-project.png"
                alt="Bubblehouse Image"
                width={800}
                height={533}
                loading="lazy"
                className="grow w-full z-[1]"
              />
            </div>

            <div className="flex flex-col items-center mt-0 md:mt-10">
              <h2 className="self-stretch text-2xl sm:text-3xl md:text-6xl tracking-tight text-left capitalize leading-[61.08px] text-sky-950">
                Getdandy
              </h2>
              <p className="mt-0 sm:mt-3 text-xs sm:text-xl leading-[16px] sm:leading-7 text-left text-black max-w-[290px] sm:max-w-[490px]">
                Dandy is an AI and ML-based software that provides options to
                remove bad reviews, replies to the reviews, and getting customer
                information using QR codes
              </p>

              <div className="w-full flex justify-start">
                <button className="flex items-center px-4 gap-4 mt-2 sm:mt-10 text-2xl text-black bg-[#F7E022] w-[134px] sm:w-[223px] h-7 sm:h-[55px] rounded-[9px] cursor-pointer shadow-xl">
                  <p className="flex-auto text-xs sm:text-xl">Learn More</p>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-40 xl:container xl:mx-auto flex flex-col">
        <h2 className="mt-16 sm:mt-36 text-2xl sm:text-6xl capitalize leading-8 sm:leading-[61px] text-sky-950 mb-9 sm:mb-16 ml-20">
          Our Recent Work
        </h2>
        <div className="flex justify-center items-center flex-col xl:flex-row flex-wrap gap-x-24 gap-y-14 relative">
          {recentWorkArr.map((recentWork, i) => (
            <div
              className="flex flex-col pb-3 lg:pb-9 text-2xl font-medium leading-6 text-black rounded-lg sm:rounded-3xl bg-zinc-100 shadow-lg"
              key={i}
            >
              <div className="w-[274px] sm:w-[512px] ">
                <Image
                  src={recentWork.imgSrc}
                  alt={recentWork.title}
                  width={512}
                  height={288}
                  loading="lazy"
                  className="shadow-caseStudyRecentWorkCard rounded-lg sm:rounded-[26px] w-full h-full "
                />
              </div>
              <h2 className="text-sm sm:text-2xl text self-center mt-6">
                {recentWork.title}
              </h2>
            </div>
          ))}
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
