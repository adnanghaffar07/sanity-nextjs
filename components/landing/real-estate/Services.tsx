import React from "react";

const RealEstateServices = () => {
  const services = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "AI leasing & inquiry agent",
      description: "Responds to every new lead in under 90 seconds. Qualifies them, answers FAQs, books showings — automatically, day or night.",
      tag: "Most requested",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Lease document automation",
      description: "AI extracts data from lease PDFs and applications, populates your CRM, flags missing fields — without anyone touching a keyboard.",
      tag: "Saves 15 hrs/week",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      title: "Tenant communication workflows",
      description: "Automated maintenance follow-ups, renewal reminders, payment notices, and move-out checklists — personalized to each tenant, zero manual send.",
      tag: "Zero missed follow-ups",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.102m1.858-3.807a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l6.364-6.364a4 4 0 000-5.656z" />
        </svg>
      ),
      title: "CRM & data sync automation",
      description: "Connect your lead sources, property management software, and CRM so every record is always current — no manual entry, ever.",
      tag: "Real-time sync",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Automated reporting & analytics",
      description: "Weekly occupancy reports, lead pipeline summaries, and KPI dashboards delivered automatically to your inbox — no one builds them by hand.",
      tag: "Always up to date",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Custom PropTech development",
      description: "Need a custom portal, tenant app, or internal tool? We build it. Mobile, web, or desktop — designed for your exact workflow.",
      tag: "Full custom build",
    },
  ];

  return (
    <section id="services" className="relative bg-black py-24 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle Grid Pattern - Blue */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #3498db 1px, transparent 0)`,
          backgroundSize: '50px 50px',
          opacity: 0.05
        }} />
        
        {/* Ambient Glows - Blue & Yellow */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#3498db]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-[#f7e022]/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3498db]/3 rounded-full blur-[150px]" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          {/* Eyebrow - Blue */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#3498db]" />
            <span className="text-[#3498db] text-sm font-semibold tracking-[0.2em] uppercase">
              What we build for real estate companies
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#3498db]" />
          </div>
          
          {/* Headline - Blue accent */}
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            The exact automations your
            <br />
            <span className="relative inline-block mt-3">
              <span className="relative z-10 text-[#3498db]">competitors are deploying right now</span>
              <div className="absolute bottom-2 left-0 right-0 w-32 h-3 mx-auto bg-[#3498db]/20 -z-0" />
            </span>
          </h2>
          
          <p className="text-gray-500 mt-4 text-lg">
            Battle-tested solutions that deliver real ROI
          </p>
        </div>
        
        {/* Services Grid - 3x2 Cards - Original styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/[0.02] rounded-2xl p-6 md:p-8 border border-white/5 hover:border-[#3498db]/30 transition-all duration-500 hover:scale-[1.02]"
            >
              {/* Card Hover Glow - Blue */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#3498db]/0 via-[#3498db]/0 to-[#3498db]/0 group-hover:from-[#3498db]/5 group-hover:via-[#3498db]/3 group-hover:to-transparent transition-all duration-500" />
              
              {/* Icon Container - Blue */}
              <div className="relative mb-6">
                <div className="w-14 h-14 rounded-xl bg-[#3498db]/10 flex items-center justify-center border border-[#3498db]/20 group-hover:border-[#3498db]/40 group-hover:scale-110 transition-all duration-300">
                  <div className="text-[#3498db] group-hover:text-[#3498db]/80 transition-colors">
                    {service.icon}
                  </div>
                </div>
                {/* Icon Glow - Blue */}
                <div className="absolute -inset-2 bg-[#3498db]/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#3498db] transition-colors duration-300">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              
              {/* Tag Badge - Blue */}
              <div className="inline-flex items-center">
                <span className="relative overflow-hidden text-xs font-semibold px-3 py-1.5 rounded-full bg-[#3498db]/10 border border-[#3498db]/20 text-[#3498db] group-hover:bg-[#3498db]/20 group-hover:border-[#3498db]/40 transition-all duration-300">
                  {service.tag}
                </span>
              </div>
              
              {/* Decorative Top Right Corner */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#3498db]/5 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Decorative Bottom Left Line */}
              <div className="absolute bottom-0 left-0 w-12 h-px bg-gradient-to-r from-[#3498db]/0 via-[#3498db]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
        
        {/* Bottom CTA Section - Yellow */}
        <div className="text-center mt-20 pt-8">
          <div className="inline-flex flex-col items-center gap-4">
            <p className="text-gray-500 text-sm tracking-wide uppercase">Ready to deploy these automations?</p>
            <a
              href="#audit"
              className="group inline-flex items-center gap-3 px-7 py-3 bg-[#f7e022] hover:bg-[#e6cd1a] text-black font-bold text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#f7e022]/25 active:scale-95"
            >
              <span>Get your free audit</span>
              <svg 
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealEstateServices;