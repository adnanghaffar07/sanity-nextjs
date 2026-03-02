'use client';

import { useState } from 'react';
import Image from 'next/image';

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
    <section className="bg-white py-16 md:py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#2196f3] font-semibold text-sm uppercase tracking-wider mb-3 block">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Everything you need to know about working with CodeAutomation
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl bg-white hover:border-gray-300 transition-all duration-200"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className={`text-lg font-medium pr-8 ${
                    isOpen ? 'text-[#2196f3]' : 'text-gray-900'
                  }`}>
                    {faq.question}
                  </span>
                  
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isOpen ? 'bg-[#2196f3] rotate-180' : 'bg-gray-100'
                  }`}>
                    <svg 
                      className={`w-5 h-5 transition-colors duration-300 ${
                        isOpen ? 'text-white' : 'text-gray-500'
                      }`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M19 9l-7 7-7-7" 
                      />
                    </svg>
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Card */}
        <div className="mt-12 bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-[#E6F3FF] rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 text-[#2196f3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Still have questions?</h3>
                <p className="text-gray-600">We&apos;re here to help. Reach out to us directly.</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+18505584691"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#2196f3] text-white font-semibold rounded-xl hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>850 558 4691</span>
              </a>
              
              <a
                href="mailto:info@codeautomation.ai"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-[#2196f3] hover:text-[#2196f3] transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>

        {/* Business Hours */}
        <div className="mt-6 flex justify-center items-center gap-6 text-sm text-gray-500">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#2196f3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Mon-Fri, 9am-6pm EST
          </span>
          <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#2196f3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Response within 2hrs
          </span>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 pt-8 border-t border-gray-100">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            <span>✨ 500+ happy clients</span>
            <span>🔒 NDA protected</span>
            <span>⚡ 24/7 support available</span>
          </div>
        </div>
      </div>
    </section>
  );
}