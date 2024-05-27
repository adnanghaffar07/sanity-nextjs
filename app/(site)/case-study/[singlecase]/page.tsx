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
      <section>
        {data?.cardimage?.asset && (
          <img
            loading="lazy"
            src={urlForImage(data.cardimage.asset)}
            style={{ objectFit: "cover" }}
            alt={data.cardimage.alt}
          />
        )}
      </section>
      <div className="flex flex-col self-center w-full xl:max-w-[1380px]   mx-auto">
        <div className="lg:px-10 px-4">
          <div>
            <div className="flex flex-col xl:flex-row justify-between items-center  mt-10  gap-6 md:gap-10 lg:gap-36">
              <div>
                <h2 className="text-xl sm:text-3xl font-semibold md:text-3xl mb-4">
                  Introduction
                </h2>
                <p className="text-xs sm:text-xl font-light md:text-lg xl:max-w-[610px] text-justify">
                  {data.briefdescription && data.briefdescription}
                </p>
              </div>
              <div className="flex flex-col gap-6 md:gap-10 mb-20 mt-20 md:mb-24">
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
              <h3 className="text-xl md:text-3xl font-semibold mb-4 md:mb-8">
                Project Scope:
              </h3>
              <p className="text-xs md:text-lg font-light leading-4 md:leading-8 ">
                {data?.projectscopecontent && data.projectscopecontent}
              </p>

              <h3 className="text-lg md:text-3xl font-semibold my-4 md:my-8">
                Tools & Technologies Used:
              </h3>

              <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center sm:mt-0 sm:mb-0  gap-[60px] sm:gap-[30px] 2xl:gap-[50px] max-w-[1440px] sm:my-40">
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

              <h3 className="text-xl md:text-3xl font-semibold my-4 md:my-8">
                Challenges Faced:
              </h3>
              <ul>
                {data.chanllangesfaced?.map((challange: any) => {
                  return (
                    <li
                      className="text-xs md:text-lg leading-4 md:leading-8 font-light"
                      key={challange._key}
                    >
                      <span className="font-light md:text-lg">{challange.description}</span>
                    </li>
                  );
                })}
              </ul>
              <h3 className="text-xl md:text-3xl font-semibold my-4 md:my-8">
                Our Approach:
              </h3>
              <ul>
                {data.ourapproach?.map((approach: any) => {
                  return (
                    <li
                      className="text-xs md:text-xl leading-4 md:leading-8 font-light"
                      key={approach._key}
                    >
                      <span className="text-xs md:text-lg font-bold">
                        {approach.heading}:{" "}
                      </span>
                      <span className="font-light md:text-lg">{approach.description}</span>
                    </li>
                  );
                })}
              </ul>
              <h3 className="text-xl md:text-3xl font-semibold my-4 md:my-8">
                Results:
              </h3>
              <ul>
                {data?.results?.map((result: any) => {
                  return (
                    <li
                      className="text-xs md:text-xl leading-4 md:leading-8 font-light"
                      key={result._key}
                    >
                      <span className="text-xs md:text-lg font-bold">
                        {result.heading}:{" "}
                      </span>
                      <span className="font-light md:text-lg">{result.description}</span>
                    </li>
                  );
                })}
              </ul>

              <p className="text-xs md:text-lg leading-4 md:leading-8 font-light">
                {data?.toolsfortest && data.toolsfortest}
              </p>
              <h3 className="text-xl md:text-3xl font-semibold my-4 md:my-8">
                Conclusion:
              </h3>
              <p className="text-xs md:text-lg leading-4 md:leading-8 font-light">
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
