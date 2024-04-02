import React from "react";
import ServiceApproachSection from "../../components/ServiceApproachSection";
import { client } from "../../../../sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import HeroSectionComponent from "../../components/HeroSectionComponent";

async function getData(urlService: any) {
  const query = `*[_type == 'services' && urlPath == '${urlService}'][0]`;
  try {
    const fetchData = await client.fetch(query);
    return fetchData || [];
  } catch (error) {
    // console.error("Error fetching data:", error);
    return [];
  }
}

const page = async ({ params }: { params: { service: String } }) => {
  const data = await getData(params.service); // use effect

  if (data.length === 0) {
    return (
      <h2 className="my-[300px] text-3xl text-center">Some error occurs.</h2>
    );
  }

  const bannerImageUrl = urlForImage(data.bannerimage.asset);
  const ourApproachImage = urlForImage(data.ourApproachImg.asset);
  const offerImage = urlForImage(data.offerImg.asset);

  let videoUrl;
  if (
    data.bannervideo &&
    data.bannervideo.asset &&
    data.bannervideo.asset._ref
  ) {
    const ref = data.bannervideo.asset._ref;
    const [, fileId, extension] = ref.match(/file-(.+)-(.+)/);
    videoUrl = `https://cdn.sanity.io/files/${client.config().projectId}/${
      client.config().dataset
    }/${fileId}.${extension}`;
    // console.log(videoUrl);
  } else {
    console.error("The bannervideo or its asset property is undefined.");
  }

  const videoBuiler = async () => {
    const ref = await data.bannervideo.asset._ref;
    const [, fileId, extension] = await ref.match(/file-(.+)-(.+)/);
    // console.log("_________url video___________", fileId);

    return `https://cdn.sanity.io/files/${client.config().projectId}/${
      client.config().dataset
    }/${fileId}.${extension}`;
  };

  console.log("_____first", await videoBuiler());

  //   videoBuiler()
  //     .then((url) => {
  //       return url;
  //     })
  //     .then((dat) => {
  //       return dat;
  //     })
  // );


  return (
    <>
      <section className="relative">
        <div className="bg-black w-full h-[380px] sm:h-[700px] opacity-65 absolute z-[1]"></div>
        <div className="w-full h-[380px] sm:h-[700px] relative z-0">
          <video
            className="top-0 left-0 object-cover absolute inset-0 size-full"
            width="100%"
            height="100%"
            muted
            autoPlay
            loop
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        </div>

        <div className="mt-[130px] sm:mt-[327px] absolute inset-0 flex flex-col items-center z-[2]">
          <h1 className="text-xl sm:text-5xl font-bold tracking-tight text-center capitalize leading-[48px] text-white">
            {data.serviceTitleBaner}
          </h1>
          <p className="mt-1 sm:mt-2 mb-2 sm:mb-44 text-xs sm:text-xl font-light tracking-wide leading-4 sm:leading-7 text-center text-white max-w-[280px] sm:max-w-[1080px] px-3 xl:px-0">
            {data.serviceDesceBaner}
          </p>
        </div>
      </section>
      {/* <HeroSectionComponent
        title={`"${data.serviceTitleBaner}"`}
        content={data.serviceDesceBaner}
        image={bannerImageUrl}
        alt={data.bannerimage.alt}
      /> */}

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
        </div>
      </div>
    </>
  );
};

export default page;
