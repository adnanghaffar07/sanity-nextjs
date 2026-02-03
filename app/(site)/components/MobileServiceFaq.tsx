'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react'; // Or replace with inline SVG

const faqs = [
  {
    question: 'How Much Will It Cost to Develop a Custom App?',
    answer:
      'The cost depends on the scope of your project and the timeline for delivery. After we gather all your requirements, we’ll provide a tailored quote. Our custom mobile app development services are competitively priced, offering excellent value. Plus, we make it easier for you by offering flexible payment options, including installments.',
  },
  {
    question: 'How Long Does It Typically Take to Build an App?',
    answer:
      'The timeline varies based on the scope of your project and the stage of development when you reach out. If you have a deadline in mind, we’ll work with it to meet your expectations. After gathering your requirements and discussing with our development team, we’ll provide a detailed project plan with estimated timelines for each milestone.',
  },
  {
    question: 'What Do You Need From Me to Provide a Quote?',
    answer:
      'To give you an accurate quote, we’ll need the type of app you want, key features, target market, and examples you like. We’ll also need your contact information to send your customized quote.',
  },
  {
    question: 'Why Choose CodeAutomation Over Other Service Providers?',
    answer:
      'At CodeAutomation, we offer a unique combination of experience, affordability, and expertise. We’re passionate about delivering results, with attention to detail and professionalism. If you want high-quality mobile app development at an affordable price, we’re the right fit.',
  },
  {
    question: 'Can I Hire a Dedicated Team of Developers and Work Directly With Them?',
    answer:
      'Absolutely! For larger projects, we assign a dedicated team to ensure smooth communication and focused progress.',
  },
  {
    question: 'Do You Sign an NDA?',
    answer:
      'Yes. Before any engagement, we sign an NDA to ensure your ideas and shared information are protected.',
  },
  {
    question: 'Who Will Own the Project Source Code?',
    answer:
      'You will. From day one, we ensure you retain full ownership of the project source code through a signed contract.',
  },
  {
    question: "How Do You Protect Your Customer's Intellectual Property?",
    answer:
      'We take IP protection seriously. You retain ownership of your idea, source code, and app. We sign an NDA and offer contractual safeguards.',
  },
  {
    question: 'Will You Upgrade My App if a New OS Version is Released?',
    answer:
      'Yes. For the first 3 months after delivery, we offer free support and OS upgrades. Afterward, upgrades are available at a reduced cost.',
  },
  {
    question: 'Can I Add New Features After Development Has Started?',
    answer:
      'Yes, but this may affect the timeline and cost. We’ll revise the contract and provide updated estimates.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10 md:py-20 px-4 max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-6 md:mb-10">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="bg-[#1D92FB] text-white rounded-lg overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-4 font-medium focus:outline-none"
              >
                <span className="text-left">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`px-6 text-sm text-white transition-all duration-300 ease-in-out ${
                  isOpen
                    ? 'max-h-96 opacity-100 py-4'
                    : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                {faq.answer}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
