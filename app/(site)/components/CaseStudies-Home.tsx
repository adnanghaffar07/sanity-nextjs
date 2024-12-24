import React from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import WorkItem from "./WorkItem";

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

const CaseStudiesHome = async () => {
  const data = await getData();
  const caseStudyData = data.filter(
    (item: any) => item.title === "CaseStudyInfo"
  );

  return (
    <section className="flex flex-col items-center px-0 sm:px-5 md:pt-10 pb-15 w-full max-md:max-w-full">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 mt-6 md:mt-0 sm:grid-cols-2 md:grid-cols-3 gap-7 sm:gap-10 md:gap-10">
          {caseStudyData[0].cardItemsList
            .slice(0, 6)
            .map((item: any, index: number) => (
              <WorkItem
                key={index}
                index={index}
                imageSrc={item.cardImage}
                alt={item.cardImage.alt}
                url={item.url}
                description={item.cardDescription}
                color={item.buttonColor} // Pass color dynamically
              />
            ))}
        </div>
      </div>
      <Link
  href={"/case-studies"}
  className="px-10 py-3 mt-14 font-semibold text-center text-white bg-[#1D92FB] border-2 border-[#1D92FB] rounded flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-[#1D92FB]"
>
  View more
</Link>

    </section>
  );
};

export default CaseStudiesHome;
