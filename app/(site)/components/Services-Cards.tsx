"use client";
import React, { useMemo, useState, useEffect } from "react";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";
import ScrollAnimation from "../components/ScrollAnimation";
import { Link as ScrollLink } from "react-scroll";

const ServicesCard = ({ data }: any) => {
    const [originalServices, setOriginalServices] = useState<any[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [currentPage, setCurrentPage] = useState(0);

    const itemsPerPage = 9;

    // ✅ set props.data into state only once
    useEffect(() => {
        if (data?.length) {
            setOriginalServices(data);
        }
    }, [data]);

    // Filtering (search)
    const filteredServices = useMemo(() => {
        let items = originalServices;

        if (searchTerm) {
            items = items.filter((item) =>
                item.serviceCardTitle?.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        return items;
    }, [originalServices, searchTerm]);

    // Pagination
    const paginatedServices = useMemo(() => {
        const startIndex = currentPage * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return filteredServices.slice(startIndex, endIndex);
    }, [filteredServices, currentPage]);

    const totalPages = Math.ceil(filteredServices.length / itemsPerPage);

    // Search handling
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.toLowerCase();
        setSearchTerm(value);

        const newSuggestions = value
            ? originalServices
                .filter((item) =>
                    item.serviceCardTitle?.toLowerCase().startsWith(value)
                )
                .map((item) => item.serviceCardTitle)
            : [];
        setSuggestions(newSuggestions);
        setCurrentPage(0);
    };

    const handleSuggestionClick = (suggestion: string) => {
        setSearchTerm(suggestion);
        setSuggestions([]);
        setCurrentPage(0);
    };

    const handlePrevPage = () => {
        if (currentPage > 0) setCurrentPage((prev) => prev - 1);
    };

    const handleNextPage = () => {
        if ((currentPage + 1) * itemsPerPage < filteredServices.length) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center mb-24" id="gridSection">
            {/* Search Bar */}
            <section className="w-full max-w-[1340px] mx-auto mb-7">
                <div className="flex flex-col md:flex-row gap-6 mt-14 items-center w-full px-6">
                    <h2 className="text-2xl md:text-3xl text-black font-bold">Your Digital Solutions</h2>

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
                            placeholder="Search services"
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className="ml-2 py-2 px-2 bg-white focus:outline-none text-black w-full"
                        />
                        {suggestions.length > 0 && (
                            <ul className="absolute top-full left-0 w-full bg-white border border-gray-200 mt-1 rounded shadow-lg z-50">
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
            </section>

            {/* Services Grid */}
            <section className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-[70px] sm:gap-[80px] 2xl:gap-[120px] max-w-[1440px] my-12 sm:mt-20 md:px-5">
                {paginatedServices.map((service) => (
                    <ScrollAnimation key={service._id}>
                        <Link
                            href={`/services/${service.urlPath}`}
                            className="flex flex-col relative w-[276px] sm:w-[348px] h-[143px] sm:h-[185px]"
                        >
                            <div className="z-10 w-14 sm:w-20 h-14 sm:h-20 bg-white rounded-full absolute flex justify-center items-center right-2 sm:right-5 -top-4 sm:-top-12 drop-shadow-serviceCard">
                                {service.cardIcon && (
                                    <img
                                        src={urlForImage(service.cardIcon).toString()}
                                        loading="lazy"
                                        alt="service-icon"
                                        className="h-8 md:h-10 object-cover"
                                    />
                                )}
                            </div>

                            <div className="flex gap-2 py-5 mt-2 sm:py-4 items-center justify-center px-5 text-black rounded-lg sm:rounded-3xl shadow-lg backdrop-blur-[6.5px] bg-[#D7D7D7] bg-opacity-30 mx-auto w-[280px] sm:w-[348px] h-[169px] sm:h-[185px]">
                                <div className="flex flex-col grow shrink-0 w-fit">
                                    <h3 className="text-base sm:text-xl font-medium leading-6">
                                        {service.serviceCardTitle}
                                    </h3>
                                    <p className="mt-3 text-[15px] sm:text-sm font-light leading-5 max-w-[230px] sm:max-w-[274px] line-clamp-3">
                                        {service.serviceDesc}
                                    </p>
                                </div>
                                <img
                                    src={"/service-card-right-arrow.png"}
                                    alt="arrow-icon"
                                    className="z-10 shrink-0 self-end mt-8 w-[36px] sm:w-[53px] absolute -right-4 top-5 sm:-right-7"
                                />
                            </div>
                        </Link>
                    </ScrollAnimation>
                ))}
            </section>

            {/* Pagination */}
            <section className="w-full max-w-[1240px] mx-auto flex flex-row items-center justify-between mt-10 px-5">
                <ScrollLink to="gridSection" smooth={true} offset={-70} duration={500}>
                    <button
                        onClick={handlePrevPage}
                        disabled={currentPage === 0}
                        className={`flex items-center justify-center px-3 h-6 md:h-10 text-xs md:text-sm font-medium border rounded-md md:rounded-lg transition-colors ${currentPage === 0
                            ? "bg-gray-100 text-gray-500"
                            : "bg-[#f7e022] text-black hover:bg-[#e8d21e]"
                            }`}
                    >
                        Prev
                    </button>
                </ScrollLink>

                <div className="flex gap-1 md:gap-2 my-4 md:mt-0">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <ScrollLink
                            key={index}
                            to="gridSection"
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <button
                                onClick={() => setCurrentPage(index)}
                                className={`w-6 h-6 md:w-10 md:h-10 flex text-xs md:text-sm items-center justify-center px-2 md:px-4 py-1 rounded-md border transition-colors ${currentPage === index
                                    ? "bg-[#1D92FB] text-white"
                                    : "bg-white text-[#1D92FB] border-[#1D92FB]"
                                    }`}
                            >
                                {index + 1}
                            </button>
                        </ScrollLink>
                    ))}
                </div>

                <ScrollLink to="gridSection" smooth={true} offset={-70} duration={500}>
                    <button
                        onClick={handleNextPage}
                        disabled={(currentPage + 1) * itemsPerPage >= filteredServices.length}
                        className={`flex items-center justify-center px-3 h-6 md:h-10 text-xs md:text-sm font-medium rounded-md md:rounded-lg transition-colors ${(currentPage + 1) * itemsPerPage >= filteredServices.length
                            ? "bg-gray-100 text-gray-500"
                            : "bg-[#1d92fb] text-white hover:bg-blue-700"
                            }`}
                    >
                        Next
                    </button>
                </ScrollLink>
            </section>
        </div>
    );
};

export default ServicesCard;
