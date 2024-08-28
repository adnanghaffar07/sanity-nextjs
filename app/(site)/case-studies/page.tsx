"use client";
import React, { useEffect, useState } from "react";

import HeroSectionComponent from "../components/HeroSectionComponent";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { revalidatePath } from "next/cache";
import ButtonScrollToSection from "../components/ButtonScrollToSection";

const Page = () => {
  const [originalCards, setOriginalCards] = useState<any[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [filteredItems, setFilteredItems] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const itemsPerPage = 9;

  const handleFilterChange = (filter: string) => {
    if (filter === "all") {
      setSelectedFilters([]);
      setActiveFilter("all");
    } else {
      if (activeFilter === filter) {
        setSelectedFilters([]);
        setActiveFilter("all");
      } else {
        setSelectedFilters([filter]);
        setActiveFilter(filter);
      }
    }
    setCurrentPage(0); // Reset to the first page whenever filter changes
  };

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
    let tempItems = originalCards;

    if (selectedFilters.length > 0) {
      tempItems = tempItems.filter((item) =>
        selectedFilters.includes(item.group)
      );
    }

    setFilteredItems(tempItems);
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

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value) {
      // Filter suggestions based on the search term
      const filteredSuggestions = originalCards
        .filter((item) =>
          item.cardTitle?.toLowerCase().startsWith(value.toLowerCase())
        )
        .map((item) => item.cardTitle);

      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }

    // Update filtered items as the user types
    const filteredItems = originalCards.filter((item) =>
      item.cardTitle?.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredItems(filteredItems);
    setCurrentPage(0); // Reset to the first page
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchTerm(suggestion);
    setSuggestions([]);

    // Find and set the filtered item matching the suggestion
    const selectedCaseStudy = originalCards.filter(
      (item) => item.cardTitle.toLowerCase() === suggestion.toLowerCase()
    );
    setFilteredItems(selectedCaseStudy);
    setCurrentPage(0); // Reset to the first page when a suggestion is clicked
  };

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  return (
    <>
      <section className="relative">
        <div className="w-full h-[380px] sm:h-[700px] opacity-65 absolute z-[1]"></div>
        <div className="w-full h-[380px] sm:h-[700px] relative z-0">
          <Image
            src="/CaseStudyHero.png"
            alt="CaseStudyHero.jpg"
            loading="lazy"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="mt-[130px] sm:mt-[290px] items-center absolute inset-0 flex flex-col z-[2]">
          <h1 className="text-xl sm:text-5xl font-bold tracking-tight capitalize leading-[48px] text-white text-center">
            Discover Success Stories
          </h1>
          <p className="mt-2 sm:mt-4 mb-4 text-xs sm:text-xl font-light tracking-wide leading-4 sm:leading-7 text-white max-w-5xl xl:px-0 text-center">
            Explore our case study on codeautomation, showcasing how innovative strategies significantly enhance efficiency, reduce costs, and accelerate development in software projects.
          </p>
          <ButtonScrollToSection
            content="Let’s Get Started"
            classes="bg-[#1D92FB]  hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
            destination="gridSection"

            key="Lets-Get-Started"
          />


        </div>
      </section>

      <section className=" relative">
        <div className="absolute inset-0 bg-[#3595EB] opacity-10 pointer-events-none"></div>
        <img
          loading="lazy"
          src="/ellipse-1.png"
          className="absolute left-0 w-40 lg:block hidden"
          alt="ellipse"
        />

        <div className="max-w-6xl px-6 md:px-16 py-10 md:py-16 mx-auto relative">
          {/* Content with Image and Text */}
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Text Section on the Left */}
            <div className="flex-1 md:mr-8">
              <h3 className="text-2xl md:text-4xl font-semibold text-black mb-4">
                Real World Application Case studies
              </h3>
              <p className="text-xl text-[#3C3C3C]">
                Case studies are essential because they offer detailed insights and
                practical examples of how theories work in real-world scenarios,
                helping to improve strategies and decision-making.
              </p>
            </div>

            {/* Image on the Right */}
            <div className="flex-1 mt-8 md:mt-0">
              <img
                src="/Picture.png"
                alt="Our Case Studies"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>



      <div className="flex flex-col items-center justify-center mb-24 " id="gridSection">

        {/* Filter Section */}
        <section className="w-full max-w-[1340px] mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mt-10 items-center w-full px-6">
            {/* Heading and Search Bar */}
            <h1 className="text-2xl md:text-4xl text-black font-bold">
              Explore Our Work
            </h1>
            <div className="relative flex items-center border border-gray-400 rounded px-2 bg-white md:ml-auto w-full md:w-auto">
              <svg
                className="w-6 h-6 text-black"
                fill="white"
                stroke="black"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m1.35-4.65a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearchChange}
                className="ml-2 py-2 px-2 bg-white focus:outline-none text-black w-full"
              />
              {suggestions.length > 0 && (
                <ul className="absolute top-full left-0 w-full bg-white border border-gray-200 mt-1 rounded shadow-lg z-10">
                  {suggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Gray Line */}
          <div className="p-6">
            <hr className="border-t-1 border-gray-300 w-full" />
          </div>

          <ul className="flex flex-row flex-wrap md:justify-start mx-6 justify-center gap-4 mt-4">
            <li>
              <button
                className={`px-4 py-2 rounded border ${activeFilter === "all"
                  ? "bg-[#1D92FB] text-white"
                  : "bg-[#454545] bg-opacity-10 border-gray-300 border-1 text-[#454545]"
                  }`}
                onClick={() => handleFilterChange("all")}
              >
                All Projects
              </button>
            </li>
            <li>
              <button
                className={`px-4 py-2 rounded border ${activeFilter === "app"
                  ? "bg-[#1D92FB] text-white"
                  : "bg-[#454545] bg-opacity-10 border-gray-300 border-1 text-[#454545]"
                  }`}
                onClick={() => handleFilterChange("app")}
              >
                Mobile App Development
              </button>
            </li>
            <li>
              <button
                className={`px-4 py-2 rounded border ${activeFilter === "web"
                  ? "bg-[#1D92FB] text-white"
                  : "bg-[#454545] bg-opacity-10 border-gray-300 border-1 text-[#454545]"
                  }`}
                onClick={() => handleFilterChange("web")}
              >
                Web App Development
              </button>
            </li>
            <li>
              <button
                className={`px-4 py-2 rounded border ${activeFilter === "qa"
                  ? "bg-[#1D92FB] text-white"
                  : "bg-[#454545] bg-opacity-10 border-gray-300 border-1 text-[#454545]"
                  }`}
                onClick={() => handleFilterChange("qa")}
              >
                QA Testing & Automation
              </button>
            </li>
            <li>
              <button
                className={`px-4 py-2 rounded border ${activeFilter === "shopify"
                  ? "bg-[#1D92FB] text-white"
                  : "bg-[#454545] bg-opacity-10 border-gray-300 border-1 text-[#454545]"
                  }`}
                onClick={() => handleFilterChange("shopify")}
              >
                Ecommerce
              </button>
            </li>
          </ul>
        </section>

        {/* Case Study Grid Section */}

        <section
          className="mx-auto relative max-w-[1740px] mt-10 px-5"

        >
          <div className="md:grid md:grid-cols-3 grid grid-cols-1 gap-7 sm:gap-10 md:gap-10">
            {paginateItems().map((item: any, index: any) => (
              <div key={index} className="relative w-full cursor-pointer group overflow-hidden">
                <Link href={`/case-studies/${item?.url}`}>
                  {item?.cardImage && (
                    <Image
                      width={454}
                      height={300}
                      className="w-full aspect-[1.52] md:max-w-[410px] sm:max-w-[204px] sm:mb-2"
                      src={urlForImage(item.cardImage).toString()}
                      alt="card"
                    />
                  )}
                  <div
                    className={`absolute inset-0 flex items-center justify-center text-center p-4 transform translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 rounded-3xl`}
                    style={{
                      backgroundColor: item.backgroundColor || '#4aa2f0', // Default or dynamic color
                    }}
                  >
                    <p className="text-white">{item.cardDescription}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>


        {/* Pagination Section */}
        <section className="w-full max-w-[1240px] mx-auto flex flex-col md:flex-row items-center justify-between mt-10 px-5">
          <ScrollLink
            to="gridSection"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 0}
              className={`flex items-center justify-center px-3 h-10 text-sm font-medium border rounded-xl transition-colors ${currentPage === 0
                ? "bg-gray-100 text-gray-500"
                : "bg-[#f7e022] text-black hover:bg-[#e8d21e]"
                }`}
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

          <div className="flex gap-2 my-4 md:mt-0">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-10 h-10 flex items-center justify-center px-4 py-1 rounded-md border transition-colors ${currentPage === index
                  ? "bg-[#1D92FB] text-white"
                  : "bg-white text-[#1D92FB] border-[#1D92FB]"
                  }`}
                style={{ minWidth: '40px', minHeight: '40px' }} // Optional: If you need exact pixel dimensions
              >
                {index + 1}
              </button>
            ))}
          </div>


          <ScrollLink
            to="gridSection"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <button
              onClick={handleNextPage}
              disabled={(currentPage + 1) * itemsPerPage >= filteredItems.length}
              className={`flex items-center justify-center px-3 h-10 text-sm font-medium rounded-xl transition-colors ${(currentPage + 1) * itemsPerPage >= filteredItems.length
                ? "bg-gray-100 text-gray-500"
                : "bg-[#1d92fb] text-white hover:bg-blue-700"
                }`}
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
        </section>
      </div>
    </>
  );
};

export default Page;
