"use client";

import { useState } from "react";

interface AccordionItemProps {
    title: string;
    content: string;
    isOpen: boolean;
    onToggle: () => void;
    index: number; // Add index prop to display the index before the heading
}

function AccordionItem({ title, content, isOpen, onToggle, index }: AccordionItemProps) {
    return (
        <div className="mb-4 bg-[#FDFDFD] items-center justify-center rounded-lg border overflow-hidden">
            <button
                onClick={onToggle}
                className="w-full flex justify-between items-center py-3.5 px-6 border text-left text-[#3C3C3C] text-lg font-semibold focus:outline-none bg-[#FDFDFD] rounded-lg"
            >
                <h3>
                 {title}
                </h3>
                <svg
                    className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"
                        }`}
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
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[1000px]" : "max-h-0"}`}>
                <p className="py-4 px-6 text-[#3C3C3C] bg-[#FDFDFD]">{content}</p>
            </div>
        </div>
    );
}

export default function Offshoresoftware() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Define the content array
    const accordionData = [
        {
            title: "Consultation",
            content: "Understanding your project requirements.",
        },
        {
            title: "Team Allocation",
            content: "Assigning a dedicated offshore team.",
        },
        {
            title: "Development",
            content: "Agile processes for iterative improvements.",
        },
        {
            title: "Quality Assurance",
            content: "Rigorous testing to ensure excellence.",
        },
        {
            title: "Delivery & Support",
            content: "On-time delivery and post-launch assistance.",
        },
    ];

    return (
        <section className="px-6 md:px-16 py-10 bg-[#FDFDFD]  md:py-16 ">

            <div className="max-w-7xl mx-auto">
                {/* Heading and Description in the Middle */}
                <div className="text-center mb-10">
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#3C3C3C] text-center">Our Offshore Software Development Process</h2>
                    <p className="text-xl font-semibold mt-4 text-[#3C3C3C] max-w-3xl mx-auto">
                    Transparent Steps for Success                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-start justify-between">
                    {/* Image on the left */}
                    <div className="flex-1 md:mr-8">
                        <img
                            src="/offshoresoftware.jpeg"
                            alt="offshore software development outsourcing"
                            className="w-full lg:h-[384px] rounded-lg shadow-md"
                        />
                    </div>

                    {/* Accordion on the right */}
                    <div className="flex-1 mt-8 md:mt-0">
                        {accordionData.map((item, index) => (
                            <AccordionItem
                                key={index}
                                title={item.title}
                                content={item.content}
                                isOpen={openIndex === index}
                                onToggle={() => handleToggle(index)}
                                index={index} // Pass the index to the AccordionItem
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
