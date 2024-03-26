import React from "react";
import HeroSectionComponent from "../../components/HeroSectionComponent";
import ServiceApproachSection from "../../components/ServiceApproachSection";

import { client } from "../../../../sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

export async function getData(urlService: any) {
  console.log("------urlService--------", urlService);
  const query = `*[_type == 'services' && urlPath == '${urlService}'][0]`;
  try {
    const fetchData = await client.fetch(query);
    return fetchData || [];
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

const page = async ({ params }: { params: { service: String } }) => {
  const data = await getData(params.service);

  if (data.length === 0) {
    return <h2 className="my-[300px] text-3xl text-center">Errors</h2>;
  }

  const bannerImageUrl = urlForImage(data.bannerimage.asset);
  const ourApproachImage = urlForImage(data.ourApproachImg.asset);
  const offerImage = urlForImage(data.offerImg.asset);

  return (
    <>
      <HeroSectionComponent
        title={`"${data.serviceTitleBaner}"`}
        content={data.serviceDesceBaner}
        image={bannerImageUrl}
        alt={data.bannerimage.alt}
      />

      <ServiceApproachSection
        title="Our Approach"
        description={data.ourApproach}
        subtitle="Here's how we achieve that"
        imageUrl={ourApproachImage}
        imageAlt={data.ourApproachImg.alt}
        approachSteps={data.howWeAchieve}
        columns={true}
      />

      <ServiceApproachSection
        title="What We Offer"
        description={data.whatWeOffer}
        imageUrl={offerImage}
        imageAlt={data.offerImg.alt}
        approachSteps={data.ourOffers}
        columns={false}
      />

      <div className="2xl:container 2xl:mx-auto mt-14 sm:mt-16 md:mt-20 xl:mt-44 relative 2xl:overflow-y-visible 2xl:overflow-x-hidden">
        <div className="bg-[#1D92FB] opacity-15 w-[434px] md:w-[734px] h-[434px] md:h-[734px] rounded-full absolute -left-[360px] md:-left-[570px] top-2 md:-top-72 flex items-center justify-center z-0">
          <div className="bg-white w-[354px] md:w-[584px] h-[354px] md:h-[584px] rounded-full"></div>
        </div>

        <h2 className="text-2xl sm:text-4xl md:text-6xl capitalize leading-[28px] sm:leading-[61px] text-sky-950 max-w-[1000px] mx-10 xl:mx-auto">
          Why Choose CodeAutomation for {data.chooseCA}
        </h2>

        <div className="flex flex-wrap xl:flex-nowrap gap-10 xl:gap-5 2xl:gap-10 justify-center items-center mt-12 text-black mb-[114px] mx-4">
          {data.chosseCAFor &&
            data.chosseCAFor.map((data: any, index: any) => {
              return (
                <div
                  className="flex flex-col justify-center bg-[#EDECEC] rounded-3xl shadow-sm z-10 relative w-[234px] h-[196px]"
                  key={data._key}
                >
                  <div className="z-10 flex justify-center items-center px-5 mt-0 text-3xl font-semibold tracking-tight leading-4 text-justify whitespace-nowrap bg-white rounded-full h-[62px] w-[62px] absolute -right-2 -top-4 drop-shadow-serviceCard">
                    0{index + 1}
                  </div>
                  <div className="flex flex-col pl-4 mt-2">
                    <h3 className="text-base font-medium leading-6 mt-6">
                      {data.quality}
                    </h3>
                    <p className="mt-5 text-xs font-light tracking-normal leading-4 text-justify max-w-[200px]">
                      {data.description}
                    </p>
                  </div>
                </div>
              );
            })}

          {/* <div className="flex flex-col justify-center bg-[#EDECEC] rounded-3xl shadow-sm z-10 relative w-[234px] h-[196px]">
            <div className="z-10 flex justify-center items-center px-5 mt-0 text-3xl font-semibold tracking-tight leading-4 text-justify whitespace-nowrap bg-white rounded-full h-[62px] w-[62px] absolute -right-2 -top-4 drop-shadow-serviceCard">
              01
            </div>
            <div className="flex flex-col pl-4 mt-2">
              <div className="text-base font-medium leading-6 mt-6">
                Skilled Team
              </div>
              <div className="mt-5 text-xs font-light tracking-normal leading-4 text-justify max-w-[200px]">
                Our web development team comprises experienced professionals
                with a strong track record of delivering outstanding websites.
              </div>
            </div>
          </div> */}

          {/* <div className="flex flex-col justify-center bg-[#EDECEC] rounded-3xl shadow-sm z-10 relative w-[234px] h-[196px]">
            <div className="z-10 flex justify-center items-center self-end px-3.5 mt-0 text-3xl font-semibold tracking-tight leading-4 text-justify whitespace-nowrap bg-white rounded-full h-[62px] w-[62px] absolute -right-2 -top-4 drop-shadow-serviceCard">
              02
            </div>
            <div className="flex flex-col pl-4 mt-0">
              <div className="text-base font-medium leading-6 mt-0">
                Modern Technology
              </div>
              <div className="mt-4 text-xs font-light tracking-normal leading-4 text-justify max-w-[200px]">
                We stay current with the latest web technologies to ensure your
                site is modern, fast, and secure.
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center bg-[#EDECEC] rounded-3xl shadow-sm z-10 relative w-[234px] h-[196px]">
            <div className="z-10 flex justify-center items-center self-end px-4 mt-0 text-3xl font-semibold tracking-tight leading-4 text-justify whitespace-nowrap bg-white rounded-full h-[62px] w-[62px] absolute -right-2 -top-4 drop-shadow-serviceCard">
              03
            </div>
            <div className="flex flex-col pl-4 mt-4">
              <div className="text-base font-medium leading-6">
                Custom Solutions
              </div>
              <div className="mt-5 text-xs font-light tracking-normal leading-4 text-justify max-w-[200px]">
                We don&apos;t believe in one-size-fits-all. Your website is
                built from the ground up to suit your unique needs and
                objectives.
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center bg-[#EDECEC] rounded-3xl shadow-sm z-10 relative w-[234px] h-[196px]">
            <div className="z-10 flex justify-center items-center self-end px-3 mt-0 text-3xl font-semibold tracking-tight leading-4 text-justify whitespace-nowrap bg-white rounded-full h-[62px] w-[62px] absolute -right-2 -top-4 drop-shadow-serviceCard">
              04
            </div>
            <div className="flex flex-col pl-4 mt-4">
              <div className="text-base font-medium leading-6">
                User-Centric Design
              </div>
              <div className="mt-4 text-xs font-light tracking-normal leading-4 text-justify max-w-[200px]">
                User experience is a top priority. We design websites that are
                intuitive and engaging to keep visitors coming back.
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center bg-[#EDECEC] rounded-3xl shadow-sm z-10 relative w-[234px] h-[196px]">
            <div className="z-10 flex justify-center items-center self-end px-3.5 mt-0 text-3xl font-semibold tracking-tight leading-4 text-justify whitespace-nowrap bg-white rounded-full h-[62px] w-[62px] absolute -right-2 -top-4 drop-shadow-serviceCard">
              05
            </div>
            <div className="flex flex-col pl-4 mt-4">
              <div className="text-base font-medium leading-6">
                Deadline Adherence
              </div>
              <div className="mt-5 text-xs font-light tracking-normal leading-4 text-justify max-w-[200px]">
                We work diligently to meet project timelines and milestones,
                ensuring your website is delivered on schedule.
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default page;
