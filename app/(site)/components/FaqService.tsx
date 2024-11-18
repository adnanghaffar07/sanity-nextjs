"use client";

import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa"; // Import Plus and Minus icons

// Define the FAQ structure
interface FAQ {
  question: string;
  answer: string;
  open?: boolean;
}

export default function FAQServicePage({ faqData }: { faqData: any }) {
 

  const [faqs, setFaqs] = useState<FAQ[]>(
    faqData.map((faq: any) => ({ ...faq, open: false }))
  );

  const toggleFAQ = (index: number): void => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq, i) =>
        i === index ? { ...faq, open: !faq.open } : faq
      )
    );
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <section className="bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-blue-200 rounded-lg overflow-hidden"
              >
                {/* Question */}
                <button
                  className="w-full px-6 py-4 flex justify-between items-center text-lg font-semibold bg-blue-50 hover:bg-blue-100 focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  {/* Icon: Plus for closed, Minus for open */}
                  {faq.open ? (
                    <FaMinus className="text-blue-600" />
                  ) : (
                    <FaPlus className="text-blue-600" />
                  )}
                </button>
                {/* Answer */}
                <div
                  className={`px-6 py-4 text-gray-700 ${
                    faq.open ? "block" : "hidden"
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

