"use client";

import React from "react";

const RealEstateHeroSection = () => {
  const handleAuditClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const auditSection = document.querySelector("#audit");
    if (auditSection) {
      auditSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const painPoints = [
    {
      number: "01",
      title: "Leads falling through the cracks",
      description: "New inquiries sitting in your inbox for hours. Competitors respond in minutes. You lose the deal.",
      solution: "We build AI agents that respond in 90 seconds, 24/7",
    },
    {
      number: "02",
      title: "Manual lease & document processing",
      description: "Your team re-keying data from PDFs into spreadsheets. Hours a day. Every day.",
      solution: "Automated document extraction & CRM sync",
    },
    {
      number: "03",
      title: "Tenant follow-ups nobody has time for",
      description: "Maintenance requests, renewal reminders, payment notices — all handled manually by your ops team.",
      solution: "Automated tenant communication workflows",
    },
    {
      number: "04",
      title: "CRM that never reflects reality",
      description: "Data entry is the last thing your team gets to. Your pipeline is always 3 days behind.",
      solution: "Real-time CRM sync — zero manual entry",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100">
      
      {/* Subtle Background Pattern - Blue theme */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, #3498db 1px, transparent 0)`,
        backgroundSize: '50px 50px'
      }} />
      
      {/* Theme Color Accent Elements - Blue & Yellow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#3498db]/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#f7e022]/10 rounded-full blur-[100px]" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 lg:pt-40 pb-24">
        
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT PANEL */}
          <div className="space-y-8">
            {/* Eyebrow Badge - Blue Accent */}
            <div className="inline-flex items-center gap-3">
              <div className="w-8 h-px bg-[#3498db]" />
              <span className="text-[#3498db] text-sm font-semibold tracking-wider uppercase">
                AI Automation for Real Estate
              </span>
            </div>
            
            {/* Headline - Shorter and punchier */}
            <h1 className="text-3xl md:text-6xl font-bold text-gray-900 leading-[1.15] tracking-tight">
              Your operations, <br />
              <span className="text-[#3498db]">running itself.</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
              We build custom AI automation for property managers, brokers, and real estate operators — 
              so your team stops doing manually what a machine can do in seconds.
            </p>
            
            {/* Metrics Row - Blue numbers */}
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#3498db] mb-1">
                  60<span className="text-gray-900">%</span>
                </div>
                <div className="text-gray-500 text-sm">Avg. ops time saved</div>
              </div>
              <div className="w-px h-10 bg-gray-300" />
              
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#3498db] mb-1">
                  30<span className="text-gray-900 text-xl"> Days</span>
                </div>
                <div className="text-gray-500 text-sm">To deploy</div>
              </div>
              <div className="w-px h-10 bg-gray-300" />
              
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#3498db] mb-1">
                  200<span className="text-gray-900">+</span>
                </div>
                <div className="text-gray-500 text-sm">Clients automated</div>
              </div>
            </div>
            
            {/* CTA Button - Yellow/Gold (#f7e022) */}
            <div className="pt-4">
              <a
                href="#audit"
                onClick={handleAuditClick}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[#f7e022] hover:bg-[#e6cd1a] text-gray-900 font-bold text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#f7e022]/30 active:scale-95"
              >
                <span>Claim your free audit</span>
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
          
          {/* RIGHT PANEL - Pain Points with Blue Accents */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            {/* Section Label */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                What&apos;s slowing your team down right now?
              </h2>
              <div className="w-12 h-0.5 bg-[#3498db] mt-3" />
            </div>
            
            {/* Pain Points List */}
            <div className="space-y-6">
              {painPoints.map((point, idx) => (
                <div key={idx} className="group">
                  <div className="flex items-start gap-4 mb-2">
                    <span className="text-2xl font-bold text-[#3498db]/40 group-hover:text-[#3498db] transition-colors">
                      {point.number}
                    </span>
                    <h3 className="text-gray-900 font-semibold text-lg">
                      {point.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm ml-12 mb-2">
                    {point.description}
                  </p>
                  <div className="ml-12 flex items-center gap-2 text-[#3498db] text-sm font-medium">
                    <span className="text-xl">→</span>
                    <span>{point.solution}</span>
                  </div>
                  {idx !== painPoints.length - 1 && (
                    <div className="border-t border-gray-100 mt-4" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealEstateHeroSection;