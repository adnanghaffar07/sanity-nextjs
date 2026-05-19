"use client";

import React, { useState } from "react";

const BlogsFaq = ({ faq }: any) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="relative">
            <div className="max-w-4xl mx-auto px-4 md:px-6 py-12">
                
                {/* Heading Section */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                        {faq.title || "Frequently Asked Questions"}
                    </h2>
                    <div className="w-16 h-0.5 bg-gray-900 mx-auto mb-6" />
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        Everything you need to know about our products and services
                    </p>
                </div>

                {/* Accordions Container */}
                <div className="divide-y divide-gray-200">
                    {faq.faqs?.map((item: any, index: number) => (
                        <div
                            key={index}
                            className="py-5 md:py-6"
                        >
                            {/* Question Button */}
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex items-center justify-between gap-4 text-left group"
                            >
                                <span className={`
                                    text-base md:text-lg font-semibold tracking-tight
                                    transition-all duration-200
                                    ${activeIndex === index 
                                        ? "text-gray-900" 
                                        : "text-gray-700 group-hover:text-gray-900"
                                    }
                                `}>
                                    {item.question}
                                </span>
                                
                                {/* Plus/Minus Icon - More elegant than chevron */}
                                <div className={`
                                    relative w-5 h-5 flex-shrink-0 transition-all duration-300
                                    ${activeIndex === index ? "rotate-45" : "rotate-0"}
                                `}>
                                    <span className="absolute inset-0 w-full h-0.5 bg-gray-400 top-1/2 -translate-y-1/2" />
                                    <span className="absolute inset-0 w-0.5 h-full bg-gray-400 left-1/2 -translate-x-1/2" />
                                </div>
                            </button>

                            {/* Answer Panel */}
                            <div
                                className={`
                                    overflow-hidden transition-all duration-300 ease-in-out
                                    ${activeIndex === index 
                                        ? "max-h-96 opacity-100 mt-4" 
                                        : "max-h-0 opacity-0"
                                    }
                                `}
                            >
                                <div className="pl-0 md:pl-6">
                                    <p className="text-gray-500 leading-relaxed text-base">
                                        {item.answer}
                                    </p>
                                    
                                    {/* Optional divider for longer answers */}
                                    {item.answer?.length > 200 && (
                                        <div className="mt-4 pt-4 border-t border-gray-100">
                                            <a 
                                                href="#" 
                                                className="text-gray-900 text-sm font-medium hover:underline inline-flex items-center gap-1"
                                            >
                                                Read more
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogsFaq;