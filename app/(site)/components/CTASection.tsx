'use client';

import Image from 'next/image';
import React from 'react';
import { MessageSquare, Calendar, ArrowRight, Sparkles, Clock, Users, Star } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="relative py-16 md:py-20 px-4 max-w-7xl mx-auto">
      {/* Main Container - Clean glass morphism effect */}
      <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 w-full flex flex-col md:flex-row items-center gap-8 md:gap-12 px-6 md:px-10 lg:px-12 py-8 md:py-10 overflow-hidden">
        
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1D92FB]/5 via-transparent to-[#F7E022]/5"></div>
        
        {/* Decorative elements - minimal */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#1D92FB]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F7E022]/5 rounded-full blur-3xl"></div>

        {/* Left Content - Sleek and compact */}
        <div className="w-full md:w-3/5 lg:w-3/5 relative z-10">
          {/* Micro badge */}
          <div className="inline-flex items-center gap-1.5 bg-[#1D92FB]/10 rounded-full px-2.5 py-1 mb-4">
            <Sparkles className="w-3 h-3 text-[#1D92FB]" />
            <span className="text-[10px] font-semibold text-[#1D92FB] uppercase tracking-wider">Limited Spots</span>
          </div>

          {/* Headline - Clean and bold */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#020C16] mb-2 leading-tight">
            Don&apos;t let competitors{' '}
            <span className="text-[#1D92FB]">get ahead</span>
          </h2>
          
          <p className="text-sm text-gray-500 mb-4 max-w-md leading-relaxed">
            Free consultation • 30-min strategy call • No obligation
          </p>
          
          {/* Buttons - Clean and compact */}
          <div className="flex flex-col sm:flex-row gap-2 mb-4">
            <button
              onClick={(e) => {
                e.preventDefault();
                if (typeof window !== 'undefined' && (window as any).Tawk_API?.toggle) {
                  (window as any).Tawk_API.toggle();
                }
              }}
              className="group inline-flex items-center justify-center gap-1.5 bg-[#020C16] text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-[#1D92FB] transition-all duration-300"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Live Chat</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
            
            <a
              href="https://calendly.com/adnanghaffar/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-1.5 bg-white text-[#020C16] px-4 py-2.5 rounded-lg text-sm font-medium border border-gray-200 hover:border-[#1D92FB] hover:text-[#1D92FB] transition-all duration-300"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Schedule Call</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Social proof - Minimal */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-1.5">
              {[1, 2, 3].map((i) => (
                <div 
                  key={i} 
                  className="w-6 h-6 rounded-full bg-gradient-to-br from-[#1D92FB] to-[#F7E022] border border-white shadow-sm"
                />
              ))}
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 text-[#F7E022] fill-current" />
              <span className="text-xs font-medium text-[#020C16]">4.9</span>
              <span className="text-xs text-gray-400">(200+ reviews)</span>
            </div>
            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-gray-400" />
              <span className="text-xs text-gray-500">24h response</span>
            </div>
          </div>
        </div>

        {/* Right Side - Mobile Image - Clean placement */}
        <div className="w-full md:w-2/5 lg:w-2/5 relative flex justify-center md:justify-end">
          <div className="relative">
            {/* Main Image - Clean mockup */}
            <div className="relative z-10">
              <Image
                src="/cta-mobile.png"
                alt="Mobile interface"
                width={320}
                height={380}
                className="w-full max-w-[240px] md:max-w-[260px] lg:max-w-[280px] h-auto object-contain drop-shadow-xl"
                priority
              />
            </div>

            {/* Minimal floating indicator */}
            <div className="absolute -top-3 -right-3 bg-white rounded-lg shadow-lg px-2.5 py-1.5 z-20 hidden md:flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-[10px] font-medium text-[#020C16]">Live now</span>
            </div>

            {/* Response time badge - Minimal */}
            <div className="absolute -bottom-2 -left-2 bg-white rounded-lg shadow-lg px-2.5 py-1.5 z-20 hidden md:flex items-center gap-1.5">
              <Users className="w-3 h-3 text-[#1D92FB]" />
              <span className="text-[10px] font-medium text-[#020C16]">5 min avg. reply</span>
            </div>
          </div>
        </div>
      </div>

      {/* Simple CSS for subtle animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}