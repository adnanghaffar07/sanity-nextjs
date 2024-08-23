"use client";
import React, { useEffect, useState } from "react";

import HeroSectionComponent from "../components/HeroSectionComponent";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { revalidatePath } from "next/cache";

const Page = () => {
  const [originalCards, setOriginalCards] = useState<any[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<any[]>([]);
  const [filteredItems, setFilteredItems] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 6;

  useEffect(() => {
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

    const dataFun = async () => {
      const data = await getData();
      const caseStudyData = data.filter(
        (item: any) => item.title === "CaseStudyInfo"
      );

      if (caseStudyData && caseStudyData[0].cardItemsList) {
        const initialArray = caseStudyData[0].cardItemsList;
        setOriginalCards(initialArray);
        setFilteredItems(initialArray);
      } else {
        console.error("No CaseStudyInfo found or cardItemsList is missing");
      }
    };
    dataFun();
  }, []);

  useEffect(() => {
    filterItems();
    setCurrentPage(0); // Reset to the first page when filters change
  }, [selectedFilters]);

  useEffect(() => {
    paginateItems();
  }, [currentPage, filteredItems]);

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      const tempItems = selectedFilters.flatMap((selectedCategory) =>
        originalCards.filter((item) => item.group === selectedCategory)
      );
      setFilteredItems(tempItems);
    } else {
      setFilteredItems(originalCards);
    }
  };

  const paginateItems = () => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredItems.slice(startIndex, endIndex);
  };

  const handleNextPage = () => {
    if ((currentPage + 1) * itemsPerPage < filteredItems.length) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const getFilteredData = (option: any) => {
    if (selectedFilters.includes(option)) {
      setSelectedFilters(selectedFilters.filter((el) => el !== option));
    } else {
      setSelectedFilters([...selectedFilters, option]);
    }
  };

  return (
    <>
      <section className="relative">
        <div className="w-full h-[380px] sm:h-[700px] opacity-65 absolute z-[1]"></div>
        <div className="w-full h-[380px] sm:h-[700px] relative z-0">
          <Image
            src="/CaseStudyHero.jpg"
            alt="CaseStudyHero.jpg"
            loading="lazy"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="mt-[130px] sm:mt-[327px] items-center absolute inset-0 flex flex-col z-[2]">
          <h1 className="text-xl sm:text-5xl font-bold tracking-tight capitalize leading-[48px] text-white text-center">
            Our Case Studies
          </h1>
          <p className="mt-1 sm:mt-2 mb-2 sm:mb-44 text-xs sm:text-xl font-light tracking-wide leading-4 sm:leading-7 text-white max-w-[280px] sm:max-w-[1080px] xl:px-0 text-center">
            Explore our case study on CodeAutomation, showcasing how innovative
            strategies significantly enhance efficiency, reduce costs, and
            accelerate development in software projects.
          </p>
        </div>
      </section>

      <section className="h-full flex flex-col justify-center gap-4 bg-[#F3F3F3]">
        <div className="self-stretch text-5xl mt-20 text-center text-black capitalize leading-[60px] max-md:text-4xl max-md:leading-[51px]">
          Real World Application Case studies
        </div>

        <span className="lg:text-xl text-base text-center mt-4 max-md:max-w-full mb-6 lg:px-32">
          Case studies are essential because they offer detailed insights and
          practical examples of how theories work in real-world scenarios,
          helping to improve strategies and decision-making.
        </span>
      </section>

      <div className="flex md:flex-row sm:px-4 justify-center mt-10 mb-10">
        {/* Filter Section */}
        <section className="md:w-[20%] sm:w-auto py-24 px-10 text-white bg-[#1D92FB] max-w-[480px]">
          <div className="flex flex-row gap-2">
            <Image
              src="/FilterIcon.png"
              width={27}
              height={24}
              alt="filterIcon"
              className="h-[20px] sm:h-[24px]"
            ></Image>
            <h1 className="text-center">Filter Case Studies</h1>
          </div>

          <div className="flex flex-col gap-20">
            <div className="mt-20 ml-2">
              <h1>Project Types</h1>
              <br></br>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    id="app"
                    onChange={(event) => getFilteredData("app")}
                  />
                  <span> Mobile App Development</span>
                </li>

                <li>
                  <input
                    type="checkbox"
                    id="web"
                    onChange={(event) => getFilteredData("web")}
                  />
                  <span> Web App Development</span>
                </li>

                <li>
                  <input
                    type="checkbox"
                    id="qa"
                    onClick={(event) => getFilteredData("qa")}
                  />
                  <span> QA Testing & Automation</span>
                </li>

                <li>
                  <input
                    type="checkbox"
                    onClick={(event) => getFilteredData("shopify")}
                  />
                  <span> Ecommerce</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Case Study Grid Section */}
        <section className="mx-auto" id="gridSection">
          <div className="md:grid md:grid-cols-3 m-[50px] grid grid-col-1 gap-7 sm:gap-10 md:gap-10 sm:grid sm:grid-col-1">
            {paginateItems().map((item: any, index: any) => (
              <div
                key={index}
                className="ring-2 p-2 sm:ring-2 hover:scale-110 hover:transition duration-300 sm:shadow-2xl sm:hover:shadow-blue-800 sm:ring-yellow-500 sm:rounded-tr-3xl sm:rounded-bl-3xl"
              >
                <Link href={`/case-studies/${item?.url}`}>
                  {item?.cardImage && (
                    <Image
                      width={404}
                      height={268}
                      className="w-full aspect-[1.52] p-2 md:max-w-[304px] sm:max-w-[204px] sm:mb-2"
                      src={urlForImage(item.cardImage).toString()}
                      alt="card"
                    />
                  )}
                  <div className="text-base font-light md:px-5 tracking-wide leading-6 max-w-[317px] text-sky-950">
                    {item.cardDescription}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="mx-auto">
        <div className="inline-flex mt-2 xs:mt-0">
          {currentPage > 0 && (
            <ScrollLink
              to="gridSection"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <button
                onClick={handlePrevPage}
                className="flex items-center justify-center px-3 h-10 text-sm font-medium bg-[#f7e022] border rounded-xl text-black hover:bg-[#e8d21e] transition-colors"
                >
                <svg
                  className="w-3.5 h-3.5 me-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 5H1m0 0 4 4M1 5l4-4"
                  />
                </svg>
                Prev
              </button>
            </ScrollLink>
          )}

          {((currentPage + 1) * itemsPerPage < filteredItems.length) && (
            <ScrollLink
              to="gridSection"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <button
                onClick={handleNextPage}
                className="flex items-center justify-center px-3 h-10 text-sm font-medium bg-[#1d92fb] rounded-xl  ml-4 text-white border hover:bg-blue-700 transition-colors"
                >
                Next
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
            </ScrollLink>
          )}
        </div>
      </section>

      <br></br>
    </>
  );
};

export default Page;
