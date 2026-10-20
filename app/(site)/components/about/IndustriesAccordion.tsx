'use client';
import { useState } from 'react';

const IndustriesAccordion = ({ bulletPoints }: { bulletPoints: any[] }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleIndex = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <div className="py-10 px-4 md:px-12 lg:px-20 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                {bulletPoints.map((item, index) => (
                    <div
                        key={item._id}
                        className="border border-gray-300 rounded-xl shadow-md overflow-hidden"
                    >
                        {/* Header */}
                        <button
                            onClick={() => toggleIndex(index)}
                            className="w-full flex justify-between items-center px-6 py-4 bg-[#F4F8FB] hover:bg-[#E7F3FD] transition font-semibold text-left text-[#1D92FB]"
                        >
                            <div className="flex items-center gap-3">
                                <span className="bg-[#1D92FB] text-white px-3 py-1 rounded-md text-sm font-bold">
                                    {index + 1}
                                </span>
                                <span className="font-bold">{item.heading}</span> {/* <- Bold added here */}
                            </div>

                            <span className="text-xl">{openIndex === index ? '−' : '+'}</span>
                        </button>
                        {/* Body */}
                        <div
                            className={`px-6 text-sm text-[#3C3C3C] transition-all duration-500 overflow-hidden ${openIndex === index ? 'max-h-[1000px] pt-2 pb-4 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                        >
                            <ul className="list-disc max-w-5xl pl-5 space-y-2">
                                {item.bulletPoints?.map((bullet: string, i: number) => {
                                    const match = bullet.match(/^(Challenge|Solutions|Services Delivered):\s*(.*)/i);
                                    return (
                                        <li key={i}>
                                            {match ? (
                                                <>
                                                    <strong>{match[1]}:</strong> {match[2]}
                                                </>
                                            ) : (
                                                bullet
                                            )}
                                        </li>
                                    );
                                })}


                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IndustriesAccordion;
