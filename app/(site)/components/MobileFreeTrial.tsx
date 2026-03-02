// components/FreeTrial.tsx
'use client';
import { useState } from 'react';
import QuoteModal from './MobileQuoteModal';

export default function FreeTrial() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCall = () => {
    window.location.href = 'tel:+18505584691';
  };

  return (
    <section className="relative py-20 md:py-24 px-4 overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#2196f3] opacity-5 rounded-full"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#2196f3] opacity-5 rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            {/* Tagline */}
            <div className="inline-flex bg-[#E6F3FF] items-center gap-2 px-4 py-2 rounded-full mb-6 shadow-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-gray-700">Limited time offer</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Try Code Automation
              <span className="text-[#2196f3] block mt-2">free for 3 days</span>
            </h2>

            <p className="text-lg text-gray-600 mb-8">
              No credit card required. Full access to all features.
            </p>

            {/* Feature List - Vertical */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#2196f3] bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-[#2196f3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Full platform access</h4>
                  <p className="text-sm text-gray-600">All features unlocked, no restrictions</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#2196f3] bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-[#2196f3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">No credit card required</h4>
                  <p className="text-sm text-gray-600">Start instantly, zero commitment</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#2196f3] bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-[#2196f3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Cancel anytime</h4>
                  <p className="text-sm text-gray-600">No questions asked, no hidden fees</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 bg-[#2196f3] hover:bg-blue-600 text-white font-semibold rounded-md transition-all duration-300 inline-flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl"
              >
                <span>Start 3-day free trial</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>

            {/* Social Proof */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">Trusted by 500+ companies including</p>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
                <span className="text-gray-700 font-medium">TechStart</span>
                <span className="text-gray-700 font-medium">FinApp</span>
                <span className="text-gray-700 font-medium">HealthPlus</span>
                <span className="text-gray-700 font-medium">EcomSolutions</span>
                <span className="text-gray-700 font-medium">Brandify</span>
                <span className="text-gray-400">+ more</span>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className="relative hidden lg:block">
            {/* Main visual */}
            <div className="relative">
              {/* 3D-like card stack */}
              <div className="relative h-[500px]">
                {/* Back card */}
                <div className="absolute top-0 right-0 w-64 h-80 bg-[#2196f3] bg-opacity-20 rounded-2xl transform rotate-6 translate-x-10 translate-y-4"></div>
                
                {/* Middle card */}
                <div className="absolute top-0 right-0 w-64 h-80 bg-[#2196f3] bg-opacity-40 rounded-2xl transform rotate-3 translate-x-5 translate-y-2 backdrop-blur-sm"></div>
                
                {/* Front card - Main feature display */}
                <div className="absolute top-0 right-0 w-64 h-80 bg-white rounded-2xl shadow-2xl p-6 transform hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-12 h-12 bg-[#E6F3FF] rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#2196f3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Rapid MVP Delivery</h4>
                  <p className="text-sm text-gray-600 mb-4">Get your product to market in days, not months</p>
                  
                  {/* Progress bar */}
                  <div className="mt-auto">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>Progress</span>
                      <span>75%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-[#2196f3] rounded-full"></div>
                    </div>
                  </div>

                  {/* Decorative dots */}
                  <div className="flex gap-1 mt-4">
                    <div className="w-2 h-2 bg-[#2196f3] rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
                  </div>
                </div>

                {/* Floating 3-day badge */}
                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold shadow-lg animate-bounce">
                  3 Days Free
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-10 left-0 w-20 h-20 bg-[#2196f3] opacity-10 rounded-full"></div>
              <div className="absolute top-20 -left-10 w-32 h-32 bg-[#2196f3] opacity-10 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Bottom Banner - Updated with click-to-call */}
        <div className="mt-16 bg-[#E6F3FF] rounded-xl p-6 shadow-md">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#E6F3FF] rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-[#2196f3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Have questions?</p>
                <p className="text-sm text-gray-600">Call us for immediate assistance</p>
              </div>
            </div>
            
            {/* Click-to-call button with phone number and USA flag */}
            <button
              onClick={handleCall}
              className="flex items-center gap-3 bg-white px-5 py-3 rounded-full transition-all duration-300 group"
            >
              {/* Phone Icon */}
              <svg className="w-5 h-5 text-[#2196f3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              
              {/* Phone Number */}
              <span className="text-[#2196f3] font-semibold text-sm">850 558 4691</span>
              
              {/* USA Flag Icon - Using SVG representation */}
              <div className="w-6 h-6 rounded-full overflow-hidden border border-gray-200 flex-shrink-0">
                <svg viewBox="0 0 60 40" className="w-full h-full">
                  <rect width="60" height="40" fill="#B22234"/>
                  <rect width="60" height="5.71" y="5.71" fill="#FFFFFF"/>
                  <rect width="60" height="5.71" y="17.14" fill="#FFFFFF"/>
                  <rect width="60" height="5.71" y="28.57" fill="#FFFFFF"/>
                  <rect width="24" height="20" fill="#3C3B6E"/>
                  <g fill="#FFFFFF">
                    {[...Array(50)].map((_, i) => {
                      const row = Math.floor(i / 10);
                      const col = i % 10;
                      const x = 1.2 + col * 2.4;
                      const y = row % 2 === 0 ? 1 + row * 2 : 2 + row * 2;
                      return <circle key={i} cx={x} cy={y} r="0.5"/>;
                    })}
                  </g>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Quote Modal */}
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}