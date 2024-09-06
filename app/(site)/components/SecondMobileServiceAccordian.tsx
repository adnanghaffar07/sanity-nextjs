"use client";

import { useState } from "react";
import Image from "next/image"; // Assuming you're using Next.js
import { urlForImage } from "@/sanity/lib/image";

interface NestedContentProps {
    stringField: string;
    nestedArray: { heading: string; text: string }[];
}

interface AccordionItemProps {
    title: string;
    contentArray: NestedContentProps[];
    isOpen: boolean;
    onToggle: () => void;
}

function AccordionItem({ title, contentArray, isOpen, onToggle }: AccordionItemProps) {
    return (
        <div className="mb-4 bg-white rounded-lg shadow-lg overflow-hidden">
            <button
                onClick={onToggle}
                className="w-full flex justify-between items-center py-4 px-6 border text-left text-[#3C3C3C] text-lg font-semibold focus:outline-none bg-white rounded-lg"
            >
                <h3>{title}</h3>
                <svg
                    className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    width="22"
                    height="22"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[1000px]' : 'max-h-0'}`}>
                <div className="py-4 px-6 text-[#3C3C3C] bg-white">
                    {contentArray.map((contentItem, idx) => (
                        <div key={idx} className="mb-4">
                            <h4 className="">{contentItem.stringField}</h4>
                            <ul className="pl-4 mt-2 list-disc">
                                {contentItem?.nestedArray?.map((nestedItem, nestedIdx) => (
                                    <li key={nestedIdx} className="mt-2">
                                        <strong>{nestedItem.heading}</strong> {nestedItem.text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function SecondMobileServiceAcc({ data }: { data: any }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="px-6 md:px-16 py-10 md:py-16 relative">
            <div className="absolute inset-0 bg-[#1D92FB] opacity-10"></div>

            <div className="max-w-7xl mx-auto relative">
                {/* Heading and Description in the Middle */}
                <div className="text-center mb-10">
                    <h2 className="text-2xl font-bold text-[#3C3C3C] capitalize">
                        {data.secondMobileAppAcc.heading}
                    </h2>
                    <p className="text-lg mt-4 text-[#3C3C3C] max-w-6xl mx-auto">
                        {data.secondMobileAppAcc.description}
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-start justify-between">
                    {/* Accordion on the Left */}
                    <div className="flex-1 md:mr-8">
                        {data.secondMobileAppAcc.accordionItems.map((item: any, index: number) => (
                            <AccordionItem
                                key={index}
                                title={item.title}
                                contentArray={item.contentArray}
                                isOpen={openIndex === index}
                                onToggle={() => handleToggle(index)}
                            />
                        ))}
                    </div>

                    {/* Image on the right */}
                    <div className="flex-1 mt-8 md:mt-0">
                        <img
                            src={urlForImage(data.secondMobileAppAcc.imageSrc).toString()}
                            alt={data.secondMobileAppAcc.imageSrc.alt}
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
