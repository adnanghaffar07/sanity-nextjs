"use client"
import React, { useState } from 'react'

export default function Section8_FAQ() {
    const [openIndex, setOpenIndex] = useState(null)

    const faqs = [
        {
            question: "Do I need to have any marketing experience?",
            answer: "Not at all. That's the whole point. We handle 100% of the setup and management. You don't need to know anything about Meta Ads, SEO, or CRM systems — we take care of everything from day one."
        },
        {
            question: "How quickly will I start seeing results?",
            answer: "Most of our detailing clients start seeing leads and enquiries within the first 30 days. Meta Ads can generate leads within the first week of going live. Google Maps rankings typically improve within 30–60 days of GBP optimization."
        },
        {
            question: "Is the ad spend included in the package price?",
            answer: "No — ad spend (what you pay Meta or Google directly to run your ads) is separate from our management fee. We recommend a minimum of $500/month in ad spend for the Starter plan, and $1,000/month for Growth. We manage the budget so every dollar is spent wisely."
        },
        {
            question: "What if I only need one or two services?",
            answer: "That's exactly what our Customized Plan is for. You can pick just the services you need — nothing more. You can also add or remove services month to month as your business grows."
        },
        {
            question: "Do you work with detailers who are just starting out?",
            answer: "Absolutely. In fact, starting your marketing right from day one is the smartest move you can make. Our Starter plan is specifically designed for detailers who are new or in the early stages of growth."
        },
        {
            question: "How is CodeAutomation.ai different from other marketing agencies?",
            answer: "Most agencies specialize in one or two services. We build and manage your entire marketing system — Meta Ads, Google, CRM automation, content, reputation management — all in one place, done for you. We also specialize in car detailing businesses specifically, so we already understand your market."
        },
        {
            question: "Is there a contract?",
            answer: "The Starter plan is 1–3 months. Growth is a 6-month commitment and Elite is 12 months. Longer commitments get better pricing and allow us to deliver the strongest results. The Customized Plan can be set up on a flexible timeline up to 12 months."
        }
    ]

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="relative py-20 md:py-28 overflow-hidden">
            {/* Modern Background with Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-[#3498db]/5 to-[#f7e022]/5"></div>

            {/* Abstract Shapes */}
            <div className="absolute top-20 right-0 w-72 h-72 bg-[#3498db]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-0 w-72 h-72 bg-[#f7e022]/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header - Modern */}
                <div className="text-center mb-16 md:mb-20">
                    <div className="inline-flex items-center gap-2 bg-white shadow-sm rounded-full px-5 py-2 mb-6 border border-gray-100">
                        <div className="flex gap-1">
                            <span className="w-2 h-2 bg-[#3498db] rounded-full animate-pulse"></span>
                            <span className="w-2 h-2 bg-[#f7e022] rounded-full animate-pulse delay-100"></span>
                            <span className="w-2 h-2 bg-[#3498db] rounded-full animate-pulse delay-200"></span>
                        </div>
                        <span className="text-gray-600 font-semibold text-sm uppercase tracking-wider">FAQ</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                        <span className="relative inline-block">
                            <span className="relative z-10">Everything You Need</span>
                            <svg className="absolute bottom-0 left-0 w-full h-3 -z-0" viewBox="0 0 200 10" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 5 Q 50 10 100 5 Q 150 0 200 5" stroke="#f7e022" strokeWidth="3" fill="none" strokeLinecap="round" />
                            </svg>
                        </span>
                        <br />
                        <span className="text-[#3498db]">to Know Before Starting</span>
                    </h2>

                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Got questions? We&apos;ve got answers. Here&apos;s everything detailers ask us before getting started.
                    </p>
                </div>

                {/* Modern FAQ Grid - Masonry Style */}
                <div className="grid md:grid-cols-2 gap-5 mb-20">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className={`group relative bg-white rounded-2xl transition-all duration-500 cursor-pointer overflow-hidden ${openIndex === idx
                                ? 'shadow-xl ring-2 ring-[#3498db] ring-offset-2'
                                : 'shadow-sm hover:shadow-lg border border-gray-100'
                                }`}
                            onClick={() => toggleFAQ(idx)}
                        >
                            {/* Gradient Top Bar */}
                            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3498db] to-[#f7e022] transform origin-left transition-transform duration-500 ${openIndex === idx ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                                }`}></div>

                            <div className="p-6">
                                <div className="flex justify-between items-start gap-4">
                                    <div className="flex-1">
                                        {/* Question Number */}
                                        <span className={`text-xs font-mono font-bold mb-2 block transition-colors duration-200 ${openIndex === idx ? 'text-[#3498db]' : 'text-gray-400'
                                            }`}>
                                            {(idx + 1).toString().padStart(2, '0')}
                                        </span>

                                        <h3 className={`font-bold text-base md:text-lg transition-colors duration-200 pr-8 ${openIndex === idx ? 'text-[#3498db]' : 'text-gray-800'
                                            }`}>
                                            {faq.question}
                                        </h3>
                                    </div>

                                    {/* Icon */}
                                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === idx
                                        ? 'bg-[#3498db] rotate-180'
                                        : 'bg-gray-100 group-hover:bg-[#3498db]/10'
                                        }`}>
                                        <svg className={`w-4 h-4 transition-all duration-300 ${openIndex === idx ? 'text-white' : 'text-gray-500 group-hover:text-[#3498db]'
                                            }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Answer */}
                                <div className={`overflow-hidden transition-all duration-500 ${openIndex === idx ? 'max-h-96 opacity-100 mt-5' : 'max-h-0 opacity-0'
                                    }`}>
                                    <div className="pt-4 border-t border-gray-100">
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modern CTA Section - Glassmorphism */}
                <div className="relative rounded-3xl overflow-hidden">
                    {/* Animated Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#6B46C1] via-[#805AD5] to-[#9F7AEA] bg-[length:200%_200%] animate-gradient"></div>

                    {/* Glass Overlay */}
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]"></div>

                    {/* Content */}
                    <div className="relative z-10 px-6 py-14 md:py-20 text-center">
                        {/* Floating Elements */}
                        <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full"></div>
                        <div className="absolute bottom-10 right-10 w-32 h-32 border border-white/10 rounded-full"></div>

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-5 py-2 mb-8">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f7e022] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f7e022]"></span>
                            </span>
                            <span className="text-white text-xs font-bold uppercase tracking-wider">Limited Availability</span>
                        </div>

                        {/* Headline */}
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
                            Ready to Transform
                            <span className="block text-[#f7e022]">Your Detailing Business?</span>
                        </h2>

                        {/* Subheadline */}
                        <p className="text-white/90 text-base md:text-lg mb-8 max-w-lg mx-auto">
                            Join 100+ detailers who have doubled their bookings with our done-for-you marketing system.
                        </p>

                        {/* CTA Button Group */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                            {/* Book Strategy Call - Calendly Link */}
                            <a
                                href="https://calendly.com/adnanghaffar/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative bg-[#f7e022] text-black font-bold py-4 px-8 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#f7e022]/30 hover:scale-105 inline-flex items-center justify-center"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Book Free Strategy Call
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </span>
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                            </a>

                            {/* View Success Stories - Smooth Scroll to Testimonials */}
                            <button
                                onClick={() => {
                                    const testimonialSection = document.getElementById('testimonials');
                                    if (testimonialSection) {
                                        testimonialSection.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                                className="border-2 border-white/30 text-white font-semibold py-4 px-8 rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
                            >
                                View Success Stories
                            </button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80">
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-[#f7e022]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>Free consultation</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-[#f7e022]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>No obligation</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-[#f7e022]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>Results in 30 days</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-12 text-center">
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-400">
                        <a href="https://codeautomation.ai" target="_blank" rel="noopener noreferrer" className="hover:text-[#3498db] transition-colors">CodeAutomation.ai</a>
                        <span>|</span>
                        <a href="mailto:info@codeautomation.ai" className="hover:text-[#3498db] transition-colors">info@codeautomation.ai</a>
                        <span>|</span>
                        <a href="https://codeautomation.ai" target="_blank" rel="noopener noreferrer" className="hover:text-[#3498db] transition-colors">www.codeautomation.ai</a>
                        <span>|</span>
                        <a href="tel:18505584691" className="hover:text-[#3498db] transition-colors">850.558.4691</a>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
        </section>
    )
}