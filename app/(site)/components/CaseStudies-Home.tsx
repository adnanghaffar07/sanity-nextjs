import React from "react";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";

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

const WorkItem = ({
  imageSrc,
  alt,
  index,
  url,
  description,
  buttoncolor = "gray",
}: {
  imageSrc: any;
  alt: string;
  index: number;
  url: string;
  description: string;
  buttoncolor: string;
}) => (
  <Link href={`/case-studies/${url}`} key={index}>
    <div className="relative w-[280px] sm:w-[340px] md:w-[380px] h-[250px] cursor-pointer group overflow-hidden">
      {imageSrc.asset && (
        <img
          loading="lazy"
          src={urlForImage(imageSrc).toString()}
          alt={alt}
          className="absolute inset-0 w-[280px] sm:w-[340px] md:w-[380px] h-[250px] object-contain"
        />
      )}
      <div
        className={`w-[280px] sm:w-[340px] md:w-[380px] h-[250px] absolute inset-0 bg-[#4aa2f0] text-white flex items-center justify-center text-center p-4 transform translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 group-hover:rotate-0 transition-all duration-700 rounded-3xl`}
      >
        <p>{description}</p>
      </div>
    </div>
  </Link>
);

const CaseStudiesHome = async () => {
  const data = await getData();
  const caseStudyData = data.filter(
    (item: any) => item.title === "CaseStudyInfo"
  );

  return (
    <section className="flex flex-col items-center px-0 sm:px-5 pt-20 pb-15 w-full max-md:max-w-full">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-x-5 gap-y-8 md:gap-y-12 justify-around flex-wrap">
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
                buttoncolor={item.buttonColor}
              />
            ))}
        </div>
      </div>
      <Link
        href={"/case-studies"}
        className="px-10 py-3 mt-14 font-semibold text-center text-white bg-[#1D92FB] rounded flex items-center justify-center"
      >
        View more
      </Link>
    </section>
  );
};

export default CaseStudiesHome;
