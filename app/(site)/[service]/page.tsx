import React from "react";
import Link from "next/link";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

async function getData() {
  const query = `*[_type == 'logicalServices'] | order(_createdAt asc)`;
  try {
    const fetchData = await client.fetch(query);
    return fetchData || [];
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

async function getSubData() {
  const querySub = `*[_type == 'subService'] | order(_createdAt asc)`;
  try {
    const fetchData = await client.fetch(querySub);
    return fetchData || [];
  } catch (error) {
    console.error("Error fetching sub data:", error);
    return [];
  }
}

const Page = async () => {
  try {
    const data = await getData();
    const dataSub = await getSubData();

    if (!data || !data.length) {
      // Handle case where data is empty
      return <h2 className="my-[300px] text-3xl text-center">No data available</h2>;
    }

    return (
      <div className="bg-gray-100">
        {/* Iterate over each item in data */}
        {data.map((item:any, index:any) => (
          <div key={index}>
            {/* Render details for each item */}
            <div className="flex overflow-hidden relative flex-col pb-12 w-full font-light text-white lg:min-h-[700px] max-md:max-w-full">
              <img
                className="top-0 left-0 object-cover absolute inset-0 size-full"
                // src={urlForImage(item.heroImage).toString()}
                alt="lifeatca"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-[#020C16] opacity-65"></div>
              <div className="flex relative flex-col items-center lg:px-20 px-5 lg:pt-12 lg:pb-0 pt-48 pb-36 w-full max-md:px-5 max-md:max-w-full flex-grow">
                <div className="lg:absolute lg:top-[300px]">
                  <div className="lg:text-4xl text-2xl font-bold text-center capitalize max-lg:mt-0 lg:w-8/12 mx-auto">
                    <h2 className="title capitalize">{item.serviceTitle}</h2>
                  </div>
                  <div className="lg:text-2xl text-base text-center mt-4 max-md:max-w-full lg:px-32">
                    {item.serviceDesc}
                  </div>
                </div>
              </div>
            </div>

            {/* Introduction Section */}
            <section className="py-16 bg-gray-200 px-16">
              <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-8 ">
                  {item.introductionSection && item.introductionSection.introHeading}
                </h2>
                <div className="max-w-2xl ">
                  <p className="text-lg text-gray-800 leading-relaxed">
                    {item.introductionSection && item.introductionSection.introDesc}
                  </p>
                </div>
              </div>
            </section>
          </div>
        ))}
      </div>
    );
  } catch (error) {
    console.error("Error rendering page:", error);
    return <h2 className="my-[300px] text-3xl text-center">An error occurred</h2>;
  }
};

export default Page;
