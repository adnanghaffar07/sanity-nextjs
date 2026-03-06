import React from "react";
import { 
  Calendar,
  Phone,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Clock,
  Shield,
  Zap
} from 'lucide-react';

const CTABannerSection = () => {
  return (
    <section className="relative py-16 px-4 overflow-hidden bg-gradient-to-r from-[#020C16] to-[#1d92fb]">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{ 
               backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
               backgroundSize: '32px 32px'
             }}>
        </div>
      </div>

      {/* Subtle glow - reduced opacity and size */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#f7e022] opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Badge - smaller */}
        <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5 mb-4">
          <Zap className="w-3.5 h-3.5 text-[#f7e022]" />
          <span className="text-xs font-semibold text-white tracking-wide">READY TO AUTOMATE?</span>
        </div>

        {/* Headline - smaller */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
          Let's Build Your Marketing<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f7e022] to-white">
            Engine Together
          </span>
        </h2>

        {/* Description - smaller */}
        <p className="text-base text-white/80 mb-6 max-w-2xl mx-auto leading-relaxed">
          Book a free 30-minute strategy call. We'll audit your current marketing workflow, 
          identify your biggest automation opportunities, and outline a roadmap — 
          <span className="text-[#f7e022] font-semibold"> at no cost, no obligation.</span>
        </p>

        {/* CTA Buttons - smaller, matching other sections */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <a
            href="https://calendly.com/adnanghaffar/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#f7e022] text-[#020C16] px-6 py-3 rounded-full font-semibold hover:bg-white transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2 text-sm"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Free Strategy Call</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a
            href="tel:+18505584691"
            className="group border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm"
          >
            <Phone className="w-4 h-4" />
            <span>Call +1 850 558 4691</span>
          </a>
        </div>

        {/* Trust Indicators - smaller, matching other sections */}
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          <div className="flex items-center gap-1.5 text-white/80">
            <div className="w-5 h-5 bg-white/10 rounded-full flex items-center justify-center">
              <CheckCircle className="w-2.5 h-2.5 text-[#f7e022]" />
            </div>
            <span className="text-xs font-medium">Free consultation</span>
          </div>
          
          <div className="flex items-center gap-1.5 text-white/80">
            <div className="w-5 h-5 bg-white/10 rounded-full flex items-center justify-center">
              <Shield className="w-2.5 h-2.5 text-[#f7e022]" />
            </div>
            <span className="text-xs font-medium">No obligation</span>
          </div>
          
          <div className="flex items-center gap-1.5 text-white/80">
            <div className="w-5 h-5 bg-white/10 rounded-full flex items-center justify-center">
              <Clock className="w-2.5 h-2.5 text-[#f7e022]" />
            </div>
            <span className="text-xs font-medium">24/7 support</span>
          </div>
        </div>

        {/* Social Proof - smaller */}
        <div className="flex items-center justify-center gap-3 text-xs text-white/60">
          <div className="flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-[#f7e022]" />
            <span>200+ clients</span>
          </div>
          <div className="w-0.5 h-0.5 bg-white/40 rounded-full"></div>
          <div className="flex items-center gap-1">
            <span className="text-[#f7e022]">★</span>
            <span>4.9/5 rating</span>
          </div>
          <div className="w-0.5 h-0.5 bg-white/40 rounded-full"></div>
          <div className="flex items-center gap-1">
            <CheckCircle className="w-3.5 h-3.5 text-[#f7e022]" />
            <span>Enterprise grade</span>
          </div>
        </div>

        {/* Quick response guarantee - smaller */}
        <div className="mt-6 pt-4 border-t border-white/10">
          <p className="text-xs text-white/60">
            ⚡ Average response time: <span className="text-[#f7e022] font-semibold">&lt; 5 minutes</span> during business hours
          </p>
        </div>
      </div>

      {/* Decorative line - thinner */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </section>
  );
};

export default CTABannerSection;