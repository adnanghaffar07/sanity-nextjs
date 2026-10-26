"use client";

import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import type { PortableTextBlock } from "sanity";
import { RichOrPlain } from "./primitives";

export interface ServiceFaqSection {
  title?: string;
  faqs?: { question?: string; answer?: string; descriptionBlock?: PortableTextBlock[] }[];
}

// FAQ list; each answer opens and closes on its own.
export default function ServiceFaq({ faqSection }: { faqSection: ServiceFaqSection }) {
  const [open, setOpen] = useState<Set<number>>(new Set());
  const toggle = (index: number) =>
    setOpen((current) => {
      const next = new Set(current);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });

  if (!faqSection.faqs) return null;

  return (
    <div className="container mx-auto px-6 py-6 md:py-16">
      <section className="bg-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold mb-6">{faqSection.title}</h2>
          <div className="space-y-6">
            {faqSection.faqs.map((faq, index) => (
              <div key={index} className="border border-blue-200 rounded-lg overflow-hidden">
                <button
                  type="button"
                  aria-expanded={open.has(index)}
                  className="w-full px-3 py-4 flex justify-between items-center text-lg font-semibold bg-blue-50 hover:bg-blue-100 focus:outline-none"
                  onClick={() => toggle(index)}
                >
                  <span>{faq.question}</span>
                  {open.has(index) ? <FaMinus className="text-blue-600" /> : <FaPlus className="text-blue-600" />}
                </button>
                <div className={`px-6 py-4 text-gray-700 ${open.has(index) ? "block" : "hidden"}`}>
                  {faq.descriptionBlock ? <RichOrPlain blocks={faq.descriptionBlock} /> : <p>{faq.answer}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
