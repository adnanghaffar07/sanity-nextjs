"use client";

import React, { useState } from "react";

const BlogsFaq = ({faq}:any) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

     const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="relative text-black">
            {/* Illustration */}
            <img
                loading="lazy"
                src="/ellipse-1.png"
                className="absolute left-0 w-[92px] lg:block hidden"
                alt="ellipse"
            />
            <div className="max-w-5xl md:py-12 py-6 px-6 md:px-16 mx-auto gap-8">
                {/* Heading */}
                <div className="text-center mb-8">
                    <h2 className="text-2xl poppins lg:text-3xl font-bold mb-4">
                     {faq.title}
                    </h2>
                </div>

                {/* Accordions */}
                <div>
                    {faq.faqs.map((faq:any, index:any) => (
                        <div
                            key={index}
                            className="mb-4 overflow-hidden rounded-lg shadow-md transition-all duration-300"
                        >
                            {/* Question */}
                            <button
                                onClick={() => toggleAccordion(index)}
                                className={`w-full flex items-center justify-between text-left px-6 py-4 bg-white text-lg font-bold transition-colors duration-300 ${activeIndex === index ? "bg-blue-50 text-blue-600" : "hover:bg-gray-100"
                                    }`}
                            >
                                {faq.question}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`w-6 h-6 transform transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""
                                        }`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>

                            {/* Answer */}
                            <div
                                className={`transition-all duration-300 ${activeIndex === index ? "max-h-96 px-6 py-4 bg-blue-50" : "max-h-0 overflow-hidden"
                                    }`}
                            >
                                <p className="text-gray-600 text-md">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </section>
    );
};

export default BlogsFaq;
