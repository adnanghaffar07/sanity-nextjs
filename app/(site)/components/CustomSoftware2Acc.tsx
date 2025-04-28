"use client";

import { useState } from "react";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { portableTextComponents } from "./PortableTextServices";

interface AccordionItemProps {
    title: string;
    content?: string; // Making content optional since you may pass PortableText as children
    isOpen: boolean;
    onToggle: () => void;
    children?: React.ReactNode;  // Adding children as a prop
}

function AccordionItem({ title, content, isOpen, onToggle, children }: AccordionItemProps) {
    return (
        <div className="mb-4 bg-white rounded-lg shadow-lg overflow-hidden">
            <button
                onClick={onToggle}
                className="w-full flex justify-between items-center py-4 px-6 border text-left text-[#3C3C3C] text-lg font-semibold focus:outline-none bg-[#FDFDFD] rounded-lg"
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
                {children ? (
                    <div className="py-4 px-6 text-[#3C3C3C] bg-[#FDFDFD]">
                        {children} {/* Render PortableText content or other children */}
                    </div>
                ) : (
                    <p className="py-4 px-6 text-[#3C3C3C] bg-[#FDFDFD]">
                        {content} {/* Render simple text content for fallback */}
                    </p>
                )}
            </div>
        </div>
    );
}

export default function CustomSoftware2Section({ data }: { data: any }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="px-6 md:px-16 py-10 md:py-16 relative">
            <div className="absolute inset-0 bg-[#1D92FB] opacity-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative">
                {/* Heading and Description in the Middle */}
                <div className="text-center mb-10">
                    <h2 className="text-2xl font-bold text-[#3C3C3C] capitalize">
                        {data.provenProcessSection.heading}
                    </h2>
                    <p className="text-lg mt-4 text-[#3C3C3C] max-w-3xl mx-auto">
                        {data.provenProcessSection.description}
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-start justify-between">
                    {/* Image on the left */}
                    <div className="flex-1 md:mr-8 ">
                        <img
                            src={urlForImage(data.provenProcessSection.imageSrc).toString()}
                            alt={data.provenProcessSection.imageSrc.alt}
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                    </div>
                    {/* Accordion on the right */}
                    <div className="flex-1 mt-8 md:mt-0">
                        {data.provenProcessSection.accordionItemsBlock && data.provenProcessSection.accordionItemsBlock.length > 0 ? (
                            data.provenProcessSection.accordionItemsBlock.map((item: any, index: number) => (
                                <AccordionItem
                                    key={index}
                                    title={item.title}
                                    isOpen={openIndex === index}
                                    onToggle={() => handleToggle(index)}
                                >
                                    {/* Render PortableText content for rich text */}
                                    <PortableText value={item.content} components={portableTextComponents} />
                                </AccordionItem>
                            ))
                        ) : (
                            data.provenProcessSection.accordionItems.map((item: any, index: number) => (
                                <AccordionItem
                                    key={index}
                                    title={item.title}
                                    content={item.content}  // Render simple text content for fallback
                                    isOpen={openIndex === index}
                                    onToggle={() => handleToggle(index)}
                                />
                            ))
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
