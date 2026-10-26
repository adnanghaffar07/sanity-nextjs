"use client";

import { useState, type ReactNode } from "react";
import SanityImage from "@/components/ui/SanityImage";
import type { AccordionSection } from "@/sanity/lib/legacy-services";
import { RichOrPlain, Tint } from "./primitives";

function AccordionItem({ title, isOpen, onToggle, children }: { title?: string; isOpen: boolean; onToggle: () => void; children: ReactNode }) {
  return (
    <div className="mb-4 bg-white rounded-lg shadow-lg overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex justify-between items-center py-4 px-6 border text-left text-[#3C3C3C] text-lg font-semibold focus:outline-none bg-[#FDFDFD] rounded-lg"
      >
        <h3>{title}</h3>
        <svg
          className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          width="22"
          height="22"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[1000px]" : "max-h-0"}`}>
        <div className="py-4 px-6 text-[#3C3C3C] bg-[#FDFDFD]">{children}</div>
      </div>
    </div>
  );
}

interface ServiceAccordionProps {
  section: AccordionSection;
  imageSide: "left" | "right";
  tinted?: boolean;
  wideDescription?: boolean;
}

// Heading and description, then an image beside an accordion (one item open at a time).
export default function ServiceAccordion({ section, imageSide, tinted, wideDescription }: ServiceAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (index: number) => setOpenIndex(openIndex === index ? null : index);

  const richItems = section.accordionItemsBlock?.length ? section.accordionItemsBlock : section.accordianItemsBlock;
  const accordion = richItems?.length
    ? richItems.map((item, index) => (
        <AccordionItem key={index} title={item.title} isOpen={openIndex === index} onToggle={() => toggle(index)}>
          <RichOrPlain blocks={item.content} />
        </AccordionItem>
      ))
    : section.accordionItems?.map((item, index) => (
        <AccordionItem key={index} title={item.title} isOpen={openIndex === index} onToggle={() => toggle(index)}>
          {item.contentArray ? (
            item.contentArray.map((group, groupIndex) => (
              <div key={groupIndex} className="mb-4">
                <h4>{group.stringField}</h4>
                <ul className="pl-4 mt-2 list-disc">
                  {group.nestedArray?.map((point, pointIndex) => (
                    <li key={pointIndex} className="mt-2">
                      <strong>{point.heading}</strong> {point.text}
                    </li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <p>{item.content}</p>
          )}
        </AccordionItem>
      ));

  const image = (
    <div className={`flex-1 ${imageSide === "left" ? "md:mr-8" : "mt-8 md:mt-0"}`}>
      <SanityImage image={section.imageSrc} sizes="(min-width: 768px) 50vw, 100vw" className="w-full h-auto rounded-lg shadow-md" />
    </div>
  );

  return (
    <section className={`px-6 md:px-16 py-10 md:py-16 ${tinted ? "relative" : ""}`}>
      {tinted && <Tint />}
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-[#3C3C3C] capitalize">{section.heading}</h2>
          <p className={`text-lg mt-4 text-[#3C3C3C] mx-auto ${wideDescription ? "max-w-6xl" : "max-w-3xl"}`}>{section.description}</p>
        </div>
        <div className="flex flex-col md:flex-row items-start justify-between">
          {imageSide === "left" && image}
          <div className={`flex-1 ${imageSide === "left" ? "mt-8 md:mt-0" : "md:mr-8"}`}>{accordion}</div>
          {imageSide === "right" && image}
        </div>
      </div>
    </section>
  );
}
