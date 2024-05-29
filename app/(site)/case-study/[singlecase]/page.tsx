import React from "react";
import { client } from "../../../../sanity/lib/client";
import HeroSectionComponent from "../../components/HeroSectionComponent";

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
const page = async ({ params }: { params: { singlecase: string } }) => {
  const data = await getData(params.singlecase);

  return (
    <div className="max-w-full">
      <section className=" bg-black">
        {data?.title === "House Arrest" && data?.cardimage?.asset ? (
          <div style={{ paddingTop: '10px' }}>
          <img
            loading="lazy"
            src={urlForImage(data.cardimage.asset)}
            style={{ objectFit: "cover", display:"block" }}
            alt={data.cardimage.alt}
          />
          </div>
        ) : (
          data?.cardimage?.asset && (
            <img
              loading="lazy"
              src={urlForImage(data.cardimage.asset)}
              style={{ objectFit: "cover" }}
              alt={data.cardimage.alt}
            />
          )
        )}
      </section>
      <div className="flex flex-col self-center w-full xl:max-w-[1380px]   mx-auto">
        <div className="lg:px-10 px-4">
          <div className="flex flex-col xl:flex-row justify-center items-center  mt-10  gap-6 md:gap-10 lg:gap-36">
            <div className=" mr-32">
              <h2 className="text-3xl font-semibold   mb-4">Introduction</h2>
              <p className="text-lg font-light   xl:max-w-[610px] text-justify">
                {data.briefdescription && data.briefdescription}
              </p>
            </div>
            <div className="flex flex-col  gap-6 md:gap-10 mb-20 mr-40 mt-20 md:mb-24">
              {data.briefitemsarray?.map((item: any) => {
                return (
                  <div className="relative" key={item._key}>
                    <div className="w-[42px] md:w-[78px] h-[42px] md:h-[78px] rounded-full bg-[#1D92FB] opacity-[0.14] absolute -left-4 md:-left-10 md:-top-2"></div>
                    <p className="text-[#707070] text-sm md:text-xl font-medium">
                      {item.heading}
                    </p>
                    <p className="text-lg md:text-xl font-medium ">
                      {item.value}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            {data?.secondaryimage?.asset && (
              <img
                loading="lazy"
                src={urlForImage(data.secondaryimage.asset)}
                alt={data.secondaryimage.alt}
                className="size-full mb-0 sm:mb-14 shadow-blogImage"
              />
            )}
            <div className="w-full my-10 md:my-20 text-justify mx-auto">
              <h3 className="text-3xl font-semibold  mb-4">Project Scope:</h3>
              <p className="text-lg text-justify font-light leading-8 md:leading-8 ">
                {data?.projectscopecontent && data.projectscopecontent}
              </p>

              <h3 className="text-3xl font-semibold  my-4 md:my-8">
                Tools & Technologies Used:
              </h3>

              <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center  gap-44 sm:mt-0 sm:mb-0  sm:gap-[100px] 2xl:gap-[130px] max-w-[1440px] sm:my-40">
                {data.toolsandtechlist?.map((item: any) => {
                  return (
                    <img
                      key={item._key}
                      loading="lazy"
                      src={urlForImage(item.techImage?.asset)}
                      alt={item.techImage?.alt}
                      className="mb-0"
                    />
                  );
                })}
              </div>

              <h3 className="text-3xl font-semibold my-4 md:my-8">
                Challenges Faced:
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
                Our Approach:
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
              <h3 className="text-3xl  font-semibold my-4 md:my-8">Results:</h3>
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
                Conclusion:
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
