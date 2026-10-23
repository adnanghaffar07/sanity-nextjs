"use client";

import { useState } from "react";
import type { BlogPost } from "@/sanity/lib/blog";

// FAQ accordion at the end of a blog post; one answer open at a time.
export default function BlogFaq({ faq }: { faq: NonNullable<BlogPost["faqSection"]> }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative">
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-12">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            {faq.title || "Frequently Asked Questions"}
          </h2>
          <div className="w-16 h-0.5 bg-gray-900 mx-auto mb-6" />
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Everything you need to know about our products and services
          </p>
        </div>

        <div className="divide-y divide-gray-200">
          {faq.faqs?.map((item, index) => {
            const open = openIndex === index;
            return (
              <div key={item._key ?? index} className="py-5 md:py-6">
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : index)}
                  aria-expanded={open}
                  className="w-full flex items-center justify-between gap-4 text-left group"
                >
                  <span
                    className={`text-base md:text-lg font-semibold tracking-tight transition-all duration-200 ${
                      open ? "text-gray-900" : "text-gray-700 group-hover:text-gray-900"
                    }`}
                  >
                    {item.question}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`relative w-5 h-5 flex-shrink-0 transition-all duration-300 ${open ? "rotate-45" : "rotate-0"}`}
                  >
                    <span className="absolute inset-0 w-full h-0.5 bg-gray-400 top-1/2 -translate-y-1/2" />
                    <span className="absolute inset-0 w-0.5 h-full bg-gray-400 left-1/2 -translate-x-1/2" />
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    open ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="pl-0 md:pl-6 text-gray-500 leading-relaxed text-base">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
