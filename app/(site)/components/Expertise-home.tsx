"use client";

import { useState } from 'react';

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ title, content, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b border-gray-300">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center py-4 text-left text-gray-800 text-lg font-medium focus:outline-none"
      >
        <span>{title}</span>
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
        <div className="py-2 text-gray-600">
          {content}
        </div>
      </div>
    </div>
  );
}

export default function CoreExpertise() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "CMS Development & Headless CMS",
      content: "Get CMS Development & Headless Contentful) Based on highly custom designed headless content management solution(Content Architecture).",
    },
    {
      title: "QA Testing and Automation",
      content: "Mobile App Development Create exceptional experiences with superior performance iOS & Android apps especially built to captivate your user.",
    },
    {
      title: "AI Services",
      content: "AI Services-pair artificial intelligence with open source, workflow based automation to drive value and an intelligent solution set for your business.",
    },
    {
      title: "Business Automation",
      content: "Boost business operations, increase efficiency using our next-gen Business automation solutions.",
    },
    {
      title: "Custom App/Software Development",
      content: "Because our software developers are capable of creating everything from the ground up, you can have a tailor-made solution that meets your exact requirements and specifications designed to be built for quality assurance testing right from the start.",
    }
  ];

  return (
    <div className="flex flex-col w-full max-w-screen-xl mx-auto md:px-4">
      <div className="flex flex-col text-black">
        <h2 className="xl:text-4xl lg:text-3xl text-3xl font-medium">
          Our Core Expertise
        </h2>
        <div className="xl:mt-11 lg:text-xl text-base font-light mt-5 xl:pr-36 tracking-normal">
          <p>
            Hire from our team of over 70+ dedicated Software Engineers and working in more than 100 technologies along with your time zone. We are a software development company that offers a wide range of software services, right according to your precise requirements.
          </p>
        </div>
        <h2 className="md:text-2xl text-lg mt-6 font-medium">
          Our expertise includes:
        </h2>
        <div className="mt-4 min-h-[370px]"> {/* Set minimum height for the accordion container */}
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              content={item.content}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
