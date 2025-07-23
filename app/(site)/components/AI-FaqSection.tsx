"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is AI Tools Directory?",
    answer:
      "AI Tools Directory is a curated platform where you can discover, compare, and explore the best AI tools across various categories.",
  },
  {
    question: "Are the tools free to use?",
    answer:
      "Some tools offer free versions or trials, while others require subscriptions. Each listing includes pricing details where available.",
  },
  {
    question: "How do I submit my AI tool?",
    answer:
      "You can submit your AI tool by clicking the 'Submit a Tool' button at the top. Our team will review it before publishing.",
  },
  {
    question: "How often is the directory updated?",
    answer:
      "We update the directory weekly to include trending tools, user submissions, and feature improvements.",
  },
];

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#111827] mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-[#e5e7eb] rounded-lg bg-white shadow-sm"
            >
              <button
                className="w-full flex justify-between items-center p-5 text-left text-[#111827] font-medium text-lg"
                onClick={() => toggle(index)}
              >
                {faq.question}
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5 text-[#4b5563] text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
