"use client";
import React, { useEffect, useState } from "react";
import HeroSectionComponent from "../components/HeroSectionComponent";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { revalidatePath } from "next/cache";

const Page = () => {
  const [originalCards, SetOriginalCards] = useState<any[]>([""]);
  const [selectedFilters, SetSelectedFilters] = useState<any[]>([]);
  const [filteredItems, setFilteredItems] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(0);

  var itemsPerPage = 6;
  var startIndex = 0;
  var endIndex = startIndex + itemsPerPage;
  var totalPages = 0;

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
      const recentArray = await data.filter(
        (item: any) => item.group === "recent"
      );
      const topArray = await data.filter((item: any) => item.group === "top");

      const caseStudyData = data.filter(
        (item: any) => item.title == "CaseStudyInfo"
      );

      if (caseStudyData && caseStudyData[0].cardItemsList) {
        const initalArray = caseStudyData[0].cardItemsList;
        setFilteredItems(initalArray);
        SetOriginalCards(initalArray);
        totalPages = Math.ceil(originalCards.length / itemsPerPage);
      } else {
        console.error("No CaseStudyInfo found or cardItemsList is missing");
      }
    };
    dataFun();
  }, []);

  function GetFilteredData(option: any) {
    if (selectedFilters.includes(option)) {
      let filters = selectedFilters.filter((el) => el !== option);
      SetSelectedFilters(filters);
    } else {
      SetSelectedFilters([...selectedFilters, option]);
    }
  }

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage + 1, totalPages - 1));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  // FOR FILTIRATION
  useEffect(() => {
    FilterItems();
  }, [selectedFilters]);

  // FOR PAGINATION
  useEffect(() => {
    startIndex = currentPage * itemsPerPage;
    endIndex = startIndex + itemsPerPage;
    const newFilteredItems = originalCards.slice(startIndex, endIndex);
    setFilteredItems(newFilteredItems);
  }, [currentPage]);

  function FilterItems() {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((selectedCategory) => {
        let temp = originalCards.filter((item) => {
          return item.group === selectedCategory;
        });
        return temp;
      });
      setFilteredItems(tempItems.flat());
    } else {
      setFilteredItems(originalCards);
    }
  }

  return (
    <>
      <section className="relative">
        <div className=" w-full h-[380px] sm:h-[700px] opacity-65 absolute z-[1]"></div>
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
            Case Studies
          </h1>
          <p className="mt-1 sm:mt-2 mb-2 sm:mb-44 text-xs sm:text-xl font-light tracking-wide leading-4 sm:leading-7  text-white max-w-[280px] sm:max-w-[1080px] xl:px-0 text-center">
            Explore our case study on CodeAutomation, showcasing how innovative
            strategies significantly enhance efficiency, reduce costs, and
            accelerate development in software projects.
          </p>
        </div>
      </section>

      <section className=" h-full flex flex-col  justify-center gap-4 bg-[#F3F3F3]">
        <div className="self-stretch text-5xl mt-20 text-center text-black capitalize leading-[60px] max-md:text-4xl max-md:leading-[51px]">
          Real World Application Case studies
        </div>

        <span className="lg:text-xl text-base text-center mt-4 max-md:max-w-full lg:px-32">
          Case studies are essential because they offer detailed insights and
          practical examples of how theories work in real-world scenarios,
          helping to improve strategies and decision-making.
        </span>
      </section>

      <div className=" flex md:flex-row  sm:px-4  justify-center mt-10 mb-10">
        {/* Filter Section    */}

        <section className=" md:w-[20%] sm:w-auto py-24 px-10  text-white  bg-[#1D92FB]  max-w-[480px]">
          <div className=" flex flex-row gap-2">
            <Image
              src="/FilterIcon.png"
              width={27}
              height={24}
              alt="filterIcon"
              className="h-[20px] sm:h-[24px]"
            ></Image>
            <h1 className=" text-center">Filter Case Studies</h1>
          </div>

          <div className=" flex flex-col gap-20">
            <div className="mt-20 ml-2">
              <h1>Project Types</h1>
              <br></br>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    id="app"
                    onChange={(event) => GetFilteredData("app")}
                  />
                  <span> Mobile Development</span>
                </li>

                <li>
                  <input
                    type="checkbox"
                    id="web"
                    onChange={(event) => GetFilteredData("web")}
                  />
                  <span> Web Development</span>
                </li>

                <li>
                  <input
                    type="checkbox"
                    id="qa"
                    onClick={(event) => GetFilteredData("qa")}
                  />
                  <span> QA Testing & Automation</span>
                </li>

                <li>
                  <input
                    type="checkbox"
                    onClick={(event) => GetFilteredData("shopify")}
                  />
                  <span> Ecommerce</span>
                </li>
                {/*
                <li>
                  <input type="checkbox" />
                  <span> CRM Implementation</span>
                </li>

                <li>
                  <input type="checkbox" />
                  <span> CRM Customization</span>
                </li> */}
              </ul>
            </div>

            {/* <div className="mt-20 ml-2">
              <h1> Industries</h1>
              <br></br>
              <ul>
                <li>
                  <input type="checkbox" />
                  <span> Travel & Hospitality</span>
                </li>

                <li>
                  <input type="checkbox" />
                  <span> Communication</span>
                </li>

                <li>
                  <input type="checkbox" />
                  <span> Finance</span>
                </li>

                <li>
                  <input type="checkbox" />
                  <span> Technology</span>
                </li>

                <li>
                  <input type="checkbox" />
                  <span> Automation</span>
                </li>

                <li>
                  <input type="checkbox" />
                  <span> Agency</span>
                </li>

                <li>
                  <input type="checkbox" />
                  <span> Education Technology</span>
                </li>
              </ul>
            </div> */}
          </div>
        </section>

        {/*  Case Study Grid Section    */}

        <section className=" mx-auto">
          <div className=" md:grid md:grid-cols-3 m-[50px]   md:gap-10 sm:grid  sm:grid-col-1">
            {filteredItems
              .slice(startIndex, endIndex)
              .map((item: any, index: any) => {
                return (
                  <div key={index}>
                    {item?.cardImage && (
                      <Link href={`/case-study/${item?.url}`}>
                        <Image
                          width={404}
                          height={268}
                          className="w-full aspect-[1.52]  p-2  ring-2  ring-yellow-500 rounded-tr-3xl rounded-bl-3xl shadow-2xl hover:shadow-blue-800  md:max-w-[304px] sm:max-w-[204px] sm:mb-2"
                          src={urlForImage(item.cardImage).toString()}
                          alt="card"
                        ></Image>
                      </Link>
                    )}

                    <div className="text-base font-light md:px-5  tracking-wide leading-6 max-w-[317px] text-sky-950">
                      {item.cardDescription}
                    </div>
                  </div>
                );
              })}
          </div>
        </section>
      </div>

      {
        <section>
          <div className="flex flex-row justify-center mb-0 ">
            <button
              type="button"
              onClick={handlePrevPage}
              disabled={currentPage === 0}
              className="text-white bg-white-700  font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              <Image
                src="/backwardArrow.png"
                width={50}
                height={50}
                alt="backward"
              />
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages - 1}
              className="text-white  font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              <Image
                src="/forwardArrow.png"
                width={50}
                height={50}
                alt="backward"
              />
            </button>
          </div>
        </section>
      }

      <br></br>
    </>
  );
};

export default Page;
