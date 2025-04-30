"use client";

import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { PortableText, PortableTextBlock } from "@portabletext/react";
import { portableTextComponents } from "./PortableTextServices";

interface FAQ {
  question: string;
  answer: string;
  open?: boolean;
  descriptionBlock?: PortableTextBlock[];
}

export default function FAQServicePage({ faqSection }: { faqSection: any }) {
  const [faqs, setFaqs] = useState<FAQ[]>(
    faqSection?.faqs?.map((faq: any) => ({ ...faq, open: false })) || [] // Fallback to an empty array
  );

  const toggleFAQ = (index: number): void => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq, i) =>
        i === index ? { ...faq, open: !faq.open } : faq
      )
    );
  };

  if (!faqSection || !faqSection.faqs) {
    return <div>No FAQs available.</div>; // Display a fallback UI when data is missing
  }

  return (
    <div className="container mx-auto px-6 py-6 md:py-16">
      <section className="bg-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold mb-6">{faqSection.title}</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-blue-200 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full px-3 py-4 flex justify-between items-center text-lg font-semibold bg-blue-50 hover:bg-blue-100 focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  {faq.open ? (
                    <FaMinus className="text-blue-600" />
                  ) : (
                    <FaPlus className="text-blue-600" />
                  )}
                </button>
                <div
                  className={`px-6 py-4 text-gray-700 ${faq.open ? "block" : "hidden"
                    }`}
                >
                  {faq.descriptionBlock ? (
                    <PortableText value={faq.descriptionBlock} components={portableTextComponents} />
                  ) : (
                    <p>{faq.answer}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
