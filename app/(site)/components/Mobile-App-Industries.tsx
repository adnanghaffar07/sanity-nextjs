import React from 'react';
import Image from 'next/image';

const MobileIndustries = () => {
    const industries = [
        { icon: "/industries1.png", name: "Healthcare", category: "Medical" },
        { icon: "/industries2.png", name: "Transportation", category: "Logistics" },
        { icon: "/industries3.png", name: "Lifestyle", category: "Consumer" },
        { icon: "/industries4.png", name: "Sports", category: "Fitness" },
        { icon: "/industries5.png", name: "Law & Order", category: "Legal" },
        { icon: "/industries6.png", name: "Telecom", category: "Communications" },
        { icon: "/industries7.png", name: "Finance", category: "FinTech" },
        { icon: "/industries8.png", name: "Traveling", category: "Hospitality" },
        { icon: "/industries9.png", name: "Automobile", category: "Automotive" },
        { icon: "/industries10.png", name: "Petconomy", category: "Pets" },
        { icon: "/industries11.png", name: "Food & Drink", category: "F&B" },
        { icon: "/industries12.png", name: "Social", category: "Networking" },
        { icon: "/industries13.png", name: "Human Resources", category: "HR Tech" },
        { icon: "/industries14.png", name: "Construction", category: "Real Estate" },
        { icon: "/industries15.png", name: "Business", category: "Enterprise" },
        { icon: "/industries16.png", name: "Education", category: "EdTech" },
    ];

    // Split industries into rows for better visual organization
    const firstRow = industries.slice(0, 8);
    const secondRow = industries.slice(8, 16);

    return (
        <section className="relative bg-gradient-to-b from-white to-[#F0F9FF] py-20 px-4 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1D92FB08_1px,transparent_1px),linear-gradient(to_bottom,#1D92FB08_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#1D92FB05] to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#1D92FB05] to-transparent"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-blue-200 shadow-sm mb-6">
                        <span className="w-2 h-2 bg-[#1D92FB] rounded-full animate-pulse"></span>
                        <span className="text-sm font-medium text-[#1D92FB] tracking-wide">INDUSTRY EXPERTISE</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Industries We Serve
                    </h2>

                    <div className="max-w-3xl mx-auto">
                        <p className="text-gray-600 text-lg leading-relaxed">
                            At CodeAutomation, we bring fresh, innovative ideas to life across diverse sectors.
                            From healthcare transformation to FinTech innovation, we create custom-tailored
                            strategies that help businesses grow and succeed.
                        </p>

                        {/* Key Stats */}
                        <div className="flex flex-wrap items-center justify-center gap-8 mt-8 pt-8 border-t border-blue-100">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-[#1D92FB]">16+</div>
                                <div className="text-sm text-gray-500">Industries Covered</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-[#1D92FB]">200+</div>
                                <div className="text-sm text-gray-500">Projects Delivered</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-[#1D92FB]">95%</div>
                                <div className="text-sm text-gray-500">Client Satisfaction</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Industries Grid - First Row */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto mb-4">
                    {firstRow.map((industry, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-xl p-4 border border-blue-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[#1D92FB] hover:-translate-y-1"
                        >
                            <div className="flex items-center gap-3">
                                {/* Icon Container */}
                                <div className="relative w-10 h-10 flex-shrink-0">
                                    <div className="absolute inset-0 bg-[#1D92FB] opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300"></div>
                                    <div className="relative w-full h-full flex items-center justify-center">
                                        <Image
                                            src={industry.icon}
                                            alt={industry.name}
                                            width={24}
                                            height={24}
                                            className="object-contain group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                </div>

                                {/* Industry Info */}
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-gray-900 font-semibold text-sm sm:text-base truncate">
                                        {industry.name}
                                    </h3>
                                    <p className="text-xs text-gray-400 uppercase tracking-wider">
                                        {industry.category}
                                    </p>
                                </div>

                                {/* Hover Arrow */}
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <svg className="w-4 h-4 text-[#1D92FB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>

                            {/* Bottom Accent */}
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-1/2 h-0.5 bg-gradient-to-r from-transparent via-[#1D92FB] to-transparent transition-all duration-300"></div>
                        </div>
                    ))}
                </div>

                {/* Industries Grid - Second Row */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto mb-12">
                    {secondRow.map((industry, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-xl p-4 border border-blue-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[#1D92FB] hover:-translate-y-1"
                        >
                            <div className="flex items-center gap-3">
                                {/* Icon Container */}
                                <div className="relative w-10 h-10 flex-shrink-0">
                                    <div className="absolute inset-0 bg-[#1D92FB] opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300"></div>
                                    <div className="relative w-full h-full flex items-center justify-center">
                                        <Image
                                            src={industry.icon}
                                            alt={industry.name}
                                            width={24}
                                            height={24}
                                            className="object-contain group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                </div>

                                {/* Industry Info */}
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-gray-900 font-semibold text-sm sm:text-base truncate">
                                        {industry.name}
                                    </h3>
                                    <p className="text-xs text-gray-400 uppercase tracking-wider">
                                        {industry.category}
                                    </p>
                                </div>

                                {/* Hover Arrow */}
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <svg className="w-4 h-4 text-[#1D92FB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>

                            {/* Bottom Accent */}
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-1/2 h-0.5 bg-gradient-to-r from-transparent via-[#1D92FB] to-transparent transition-all duration-300"></div>
                        </div>
                    ))}
                </div>

                {/* Expertise Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-blue-100 text-center">
                        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <svg className="w-6 h-6 text-[#1D92FB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Domain Expertise</h4>
                        <p className="text-sm text-gray-500">Deep understanding of industry-specific regulations and requirements</p>
                    </div>

                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-blue-100 text-center">
                        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <svg className="w-6 h-6 text-[#1D92FB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Innovation First</h4>
                        <p className="text-sm text-gray-500">Cutting-edge solutions tailored to each industry&apos;s unique challenges</p>
                    </div>

                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-blue-100 text-center">
                        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <svg className="w-6 h-6 text-[#1D92FB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Proven Track Record</h4>
                        <p className="text-sm text-gray-500">Successful implementations across 16+ industries worldwide</p>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="relative bg-gradient-to-r from-[#1D92FB] to-blue-600 rounded-2xl p-8 md:p-12 shadow-2xl shadow-blue-200 max-w-4xl mx-auto">
                    {/* Decorative pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:16px_16px]"></div>

                    <div className="relative z-10 text-center">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Ready to Transform Your Industry?
                        </h3>
                        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                            Let&apos;s discuss how our expertise can help solve your unique challenges and drive meaningful results.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="tel:+18505584691"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#1D92FB] font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 group shadow-lg"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>Call Us: +1 (850) 558-4691</span>
                            </a>

                            <a
                                href="https://calendly.com/adnanghaffar/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/30 group"
                            >
                                <span>Schedule Consultation</span>
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>

                        {/* Trust indicator */}
                        <p className="text-white/70 text-sm mt-6">
                            ✦ Free consultation • No obligation • 24/7 support ✦
                        </p>
                    </div>
                </div>
            </div>

            {/* Animation Styles */}
            <style jsx>{`
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
            `}</style>
        </section>
    );
}

export default MobileIndustries;