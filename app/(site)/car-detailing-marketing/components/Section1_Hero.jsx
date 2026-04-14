"use client"
import React from 'react'

export default function Section1_Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/70 z-10" />
        
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Professional car detailing"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-36">
        <div className="max-w-3xl">
          
          {/* Top Tag / Eyebrow Text */}
          <div className="mb-5 md:mb-6 animate-fadeInUp">
            <span className="inline-flex items-center gap-2 bg-[#f7e022]/10 backdrop-blur-sm text-[#f7e022] font-semibold text-xs md:text-sm uppercase tracking-wider px-3 py-1.5 rounded-full border border-[#f7e022]/30">
              <span className="w-1.5 h-1.5 bg-[#f7e022] rounded-full animate-pulse"></span>
              Done-For-You Marketing for Car Detailing Businesses
            </span>
          </div>

          {/* Main Headline (H1) */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 md:mb-6 leading-tight animate-fadeInUp animation-delay-100">
            Stop Losing Customers{' '}
            <span className="text-[#f7e022]">
              to Competitors
            </span>{' '}
            <br className="hidden sm:block" />
            with Better Marketing.
          </h1>

          {/* Sub-headline */}
          <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-6 md:mb-7 max-w-2xl leading-relaxed animate-fadeInUp animation-delay-200">
            We help car detailing businesses across the USA get more bookings, automate their follow-ups, 
            and build a fully booked calendar — without lifting a finger.
          </p>
          
          {/* Service tags */}
          <div className="flex flex-wrap gap-2 mb-7 md:mb-8 animate-fadeInUp animation-delay-300">
            {[
              { name: 'Meta Ads', icon: 'M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83' },
              { name: 'Google Maps', icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7' },
              { name: 'CRM Automation', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
              { name: 'Content Creation', icon: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z' }
            ].map((service, index) => (
              <span key={index} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white border border-white/20">
                <svg className="w-3.5 h-3.5 text-[#f7e022]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                </svg>
                {service.name}
              </span>
            ))}
          </div>

       {/* CTA Buttons */}
<div className="flex flex-col sm:flex-row gap-3 mb-8 md:mb-10 animate-fadeInUp animation-delay-400">
  {/* Primary CTA - Using your yellow button style */}
  <button 
    onClick={() => window.open('https://calendly.com/adnanghaffar/30min', '_blank')}
    className="button flex items-center justify-center gap-2 text-sm md:text-base py-3 px-6"
  >
    Book Your Free Strategy Call
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  </button>
  
  {/* Secondary CTA */}
  <button 
    onClick={() => {
      const priceSection = document.getElementById('pricing');
      if (priceSection) {
        priceSection.scrollIntoView({ behavior: 'smooth' });
      }
    }}
    className="border-2 border-white/40 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 hover:border-white/60 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2 text-sm md:text-base"
  >
    View Our Packages
    <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  </button>
</div>

          {/* Trust Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 animate-fadeInUp animation-delay-500">
            {[
              { text: "100% Done For You", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
              { text: "No Long-Term Contracts", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
              { text: "USA-Based Clients", icon: "M3 12l2-2m0 0l2 2m-2-2v10m6-16l2-2m0 0l2 2m-2-2v10m6-16l2-2m0 0l2 2m-2-2v10M12 12h.01M16 12h.01M8 12h.01M12 16h.01M16 16h.01M8 16h.01" },
              { text: "Results in 30 Days", icon: "M13 10V3L4 14h7v7l9-11h-7z" }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2.5 text-center border border-white/20 hover:bg-white/15 transition-all group">
                <svg className="w-5 h-5 text-[#f7e022] mx-auto mb-1.5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
                <div className="text-white text-xs font-medium">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block z-20">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}