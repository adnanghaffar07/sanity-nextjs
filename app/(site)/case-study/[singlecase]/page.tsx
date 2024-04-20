import React from "react";
import { client } from "../../../../sanity/lib/client";
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
    <div className="max-w-full relative overflow-hidden">
      <div className="bg-[#1D92FB] opacity-15 w-[734px] h-[734px] rounded-full absolute -left-[600px] md:-left-[480px] top-[620px] hidden md:flex items-center justify-center z-0">
        <div className="bg-white w-[600px] h-[600px] rounded-full"></div>
      </div>
      <div className="bg-[#1D92FB] opacity-15 w-[734px] h-[734px] rounded-full absolute -left-[600px] md:-left-[360px] top-[2800px] md:flex items-center justify-center z-0 hidden">
        <div className="bg-white w-[600px] h-[600px] rounded-full"></div>
      </div>
      <div className="bg-[#1D92FB] opacity-15 w-[734px] h-[734px] rounded-full absolute -right-[600px] md:-right-[360px] top-[3900px] md:flex items-center justify-center z-0 hidden">
        <div className="bg-white w-[600px] h-[600px] rounded-full"></div>
      </div>
      <div className="bg-[#1D92FB] opacity-15 w-[207px] h-[207px] rounded-full absolute -right-24 top-[160px] sm:top-[250px] md:top-[600px] xl:top-[850px] 2xl:xl:top-[1100px] z-0 hidden md:block"></div>
      <h3 className="mt-[120px] md:mt-[215px] relative xl:text-6xl lg:text-5xl sm:text-4xl text-xl font-normal mb-6 md:mb-12 ms-4 sm:ms-10 2xl:container 2xl:mx-auto 2xl:ps-10">
        {data?.title && data.title}{" "}
        <span className="xl:text-3xl lg:text-2xl sm:text-xl text-sm font-light">
          ({data?.subtitle && data.subtitle})
        </span>
      </h3>
      <div className="flex flex-col self-center w-full xl:max-w-[1300px] relative z-10 mx-auto">
        <div className="lg:px-10 px-4">
          <div>
            <div className="flex justify-center mb-6 sm:mb-24 ">
              {data?.primaryimage?.asset && (
                <img
                  loading="lazy"
                  src={urlForImage(data.primaryimage.asset)}
                  width={1080}
                  className="shadow-blogImage"
                  alt={data.primaryimage.alt}
                />
              )}
            </div>
            <div className="flex flex-col xl:flex-row justify-center items-center gap-6 md:gap-10 lg:gap-24">
              <div>
                <h2 className="text-xl sm:text-3xl md:text-6xl mb-4">
                  The Brief
                </h2>
                <p className="text-xs sm:text-xl md:text-2xl font-light max-w-[610px] text-justify">
                  {data.briefdescription && data.briefdescription}
                </p>
              </div>
              <div className="flex flex-col gap-6 md:gap-14 mb-10 md:mb-24">
                {data.briefitemsarray?.map((item: any) => {
                  return (
                    <div className="relative" key={item._key}>
                      <div className="w-[42px] md:w-[78px] h-[42px] md:h-[78px] rounded-full bg-[#1D92FB] opacity-[0.14] absolute -left-4 md:-left-10 md:-top-2"></div>
                      <p className="text-[#707070] text-sm md:text-2xl font-medium">
                        {item.heading}
                      </p>
                      <p className="text-lg md:text-3xl font-medium ">
                        {item.value}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div>
            {data.secondaryimage.asset && (
              <img
                loading="lazy"
                src={urlForImage(data.secondaryimage.asset)}
                alt={data.secondaryimage.alt}
                className="size-full mb-0 sm:mb-14 shadow-blogImage"
              />
            )}
            <div className="max-w-[1020px] my-10 md:my-20 text-justify mx-auto">
              <h3 className="text-xl md:text-4xl font-semibold mb-4 md:mb-8">
                Project Scope:
              </h3>
              <p className="text-xs md:text-xl font-light leading-4 md:leading-8 tracking-[0.72px]">
                {data?.projectscopecontent && data.projectscopecontent}
              </p>

              <h3 className="text-xl md:text-4xl font-semibold my-4 md:my-8">
                Technologies used:
              </h3>
              <ul className="list-disc list-inside">
                {data.technologiesused?.map((technology: any) => {
                  return (
                    <li
                      className="text-xs md:text-xl leading-4 md:leading-8 tracking-[0.72px] font-light"
                      key={technology._key}
                    >
                      <span className="text-xs md:text-xl font-bold">
                        {technology.heading}:{" "}
                      </span>
                      <span>{technology.description}</span>
                    </li>
                  );
                })}
              </ul>
              <h3 className="text-xl md:text-4xl font-semibold my-4 md:my-8">
                Challenges Faced:
              </h3>
              <ul className="list-disc list-inside">
                {data.chanllangesfaced?.map((challange: any) => {
                  return (
                    <li
                      className="text-xs md:text-xl leading-4 md:leading-8 tracking-[0.72px] font-light"
                      key={challange._key}
                    >
                      <span className="text-xs md:text-xl font-bold">
                        {challange.heading}:{" "}
                      </span>
                      <span>{challange.description}</span>
                    </li>
                  );
                })}
              </ul>
              <h3 className="text-xl md:text-4xl font-semibold my-4 md:my-8">
                Our Approach:
              </h3>
              <ul className="list-disc list-inside">
                {data.ourapproach?.map((approach: any) => {
                  return (
                    <li
                      className="text-xs md:text-xl leading-4 md:leading-8 tracking-[0.72px] font-light"
                      key={approach._key}
                    >
                      <span className="text-xs md:text-xl font-bold">
                        {approach.heading}:{" "}
                      </span>
                      <span>{approach.description}</span>
                    </li>
                  );
                })}
              </ul>
              <h3 className="text-xl md:text-4xl font-semibold my-4 md:my-8">
                Results:
              </h3>
              <ul className="list-disc list-inside">
                {data?.results?.map((result: any) => {
                  return (
                    <li
                      className="text-xs md:text-xl leading-4 md:leading-8 tracking-[0.72px] font-light"
                      key={result._key}
                    >
                      <span className="text-xs md:text-xl font-bold">
                        {result.heading}:{" "}
                      </span>
                      <span>{result.description}</span>
                    </li>
                  );
                })}
              </ul>
              <h3 className="text-xl md:text-4xl font-semibold my-4 md:my-8">
                Tools Used for Project & Test Case Management:
              </h3>
              <p className="text-xs md:text-xl leading-4 md:leading-8 tracking-[0.72px] font-light">
                {data?.toolsfortest && data.toolsfortest}
              </p>
              <h3 className="text-xl md:text-4xl font-semibold my-4 md:my-8">
                Conclusion:
              </h3>
              <p className="text-xs md:text-xl leading-4 md:leading-8 tracking-[0.72px] font-light">
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
