import React from "react";
import { 
  Award,
  Globe,
  Target,
  Zap,
  Code2,
  BarChart3,
  Shield,
  Clock,
  Users,
  Trophy,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Medal,
  Briefcase,
  Cpu,
  Star
} from 'lucide-react';

const WhyChooseUsSection = () => {
  const badges = [
    { 
      icon: Trophy, 
      title: "Clutch Top-Rated", 
      desc: "Consistently recognised for delivery quality and client satisfaction across 50+ reviews.",
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-600",
      metric: "4.9",
      metricLabel: "⭐ rating"
    },
    { 
      icon: Award, 
      title: "Forbes-Featured Leadership", 
      desc: "Our CEO Adnan Ghaffar is a recognised AI and automation thought leader in the industry.",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      metric: "Forbes",
      metricLabel: "featured"
    },
    { 
      icon: Globe, 
      title: "200+ Global Clients", 
      desc: "Trusted by businesses across 16+ industries and multiple continents, from startups to enterprises.",
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
      metric: "16+",
      metricLabel: "industries"
    },
  ];

  const differentiators = [
    { 
      icon: Target, 
      title: "Strategy-First, Not Tool-First", 
      desc: "We start with your business goals, not with a platform recommendation. Technology follows strategy.",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    { 
      icon: Cpu, 
      title: "AI-Native from Day One", 
      desc: "We integrate AI at every layer — from predictive lead scoring to intelligent optimization and personalization.",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    { 
      icon: Code2, 
      title: "Full-Stack Engineering Capability", 
      desc: "With 70+ engineers across 100+ technologies, we can build what off-the-shelf platforms can't.",
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    },
    { 
      icon: BarChart3, 
      title: "Transparent, Outcome-Focused Reporting", 
      desc: "Every engagement includes clear dashboards linking automation activity to pipeline impact and revenue.",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600"
    },
    { 
      icon: Shield, 
      title: "NDA-Protected & Confidential", 
      desc: "Your business logic, customer data, and automation blueprints are protected with strict NDA agreements.",
      bgColor: "bg-red-100",
      iconColor: "text-red-600"
    },
    { 
      icon: Clock, 
      title: "Your Time Zone, Your Pace", 
      desc: "Dedicated account managers and development teams that align to your working hours across all time zones.",
      bgColor: "bg-indigo-100",
      iconColor: "text-indigo-600"
    },
  ];

  const stats = [
    { value: "70+", label: "Engineers", icon: Users },
    { value: "100+", label: "Technologies", icon: Code2 },
    { value: "16+", label: "Industries", icon: Briefcase },
    { value: "8+", label: "Years", icon: Medal },
  ];

  return (
    <section className="relative py-24 px-4 overflow-hidden bg-white">
      {/* Clean background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1d92fb]/5 via-transparent to-transparent"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" 
           style={{ 
             backgroundImage: `radial-gradient(circle at 1px 1px, #1d92fb 1px, transparent 0)`,
             backgroundSize: '32px 32px'
           }}>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header - Matching exactly */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#1d92fb]/10 border border-[#1d92fb]/20 rounded-full px-4 py-2 mb-6">
            <Medal className="w-4 h-4 text-[#1d92fb]" />
            <span className="text-sm font-semibold text-[#1d92fb] tracking-wide">WHY CODEAUTOMATION.AI</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#020C16] mb-4 tracking-tight">
            Built by Engineers Who<br />
            <span className="text-[#1d92fb]">Understand Marketing</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Most agencies hand you a platform login. We build you a system. Our team combines 
            deep marketing strategy expertise with full-stack engineering capability.
          </p>
        </div>

        {/* Stats Bar - Smaller, matching achievement stats style */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#1d92fb]/10 rounded-xl mb-3">
                  <IconComponent className="w-5 h-5 text-[#1d92fb]" />
                </div>
                <div className="text-xl font-bold text-[#020C16] mb-1">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Trust Badges - Matching card sizes exactly */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {badges.map((badge, idx) => {
            const IconComponent = badge.icon;
            
            return (
              <div 
                key={idx} 
                className="group relative bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 overflow-hidden"
              >
                {/* Light hover background - FIXED: no gradient, just subtle tint */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${badge.bgColor}/30 rounded-xl`}></div>
                
                <div className="relative z-10">
                  {/* Header with icon and metric - matching Pain Points layout */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 ${badge.bgColor} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`w-6 h-6 ${badge.iconColor}`} />
                    </div>
                    
                    {/* Metric badge */}
                    <div className="text-right">
                      <span className="text-2xl font-bold text-[#020C16]">{badge.metric}</span>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mt-0.5">{badge.metricLabel}</p>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-bold text-[#020C16] mb-2">
                    {badge.title}
                  </h4>
                  
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {badge.desc}
                  </p>
                                  </div>
              </div>
            );
          })}
        </div>

        {/* Differentiators Section Header - Smaller */}
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-[#020C16] mb-2">What Makes Us Different</h3>
          <p className="text-md text-gray-500">
            Six core principles that guide everything we build
          </p>
        </div>

        {/* Differentiators Grid - Matching card sizes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {differentiators.map((diff, idx) => {
            const IconComponent = diff.icon;
            
            return (
              <div 
                key={idx} 
                className="group relative bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                {/* Light background on hover - FIXED: no color change on text */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${diff.bgColor}/30 rounded-xl`}></div>
                
                <div className="relative z-10 flex gap-3">
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-10 h-10 ${diff.bgColor} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-5 h-5 ${diff.iconColor}`} />
                  </div>
                  
                  <div>
                    <h4 className="text-base font-bold text-[#020C16] mb-1">
                      {diff.title}
                    </h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {diff.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Leadership Section - Streamlined */}
        <div className="bg-gradient-to-r from-[#020C16] to-[#1d92fb] rounded-xl p-6 shadow-xl mb-16">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="md:w-1/5 flex justify-center">
              <div className="w-20 h-20 bg-white/10 rounded-xl flex items-center justify-center">
                <Users className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <div className="md:w-4/5">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-[#f7e022]" />
                <span className="text-xs font-semibold text-[#f7e022] tracking-wide">LEADERSHIP</span>
              </div>
              
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                Led by Adnan Ghaffar — Forbes-Featured AI & Automation Expert
              </h3>
              
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                With over 8 years of experience in marketing automation and AI, Adnan has helped 
                200+ businesses transform their marketing operations.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-1.5 text-white/70">
                  <CheckCircle className="w-3.5 h-3.5 text-[#f7e022]" />
                  <span className="text-xs">8+ years</span>
                </div>
                <div className="flex items-center gap-1.5 text-white/70">
                  <CheckCircle className="w-3.5 h-3.5 text-[#f7e022]" />
                  <span className="text-xs">Forbes-featured</span>
                </div>
                <div className="flex items-center gap-1.5 text-white/70">
                  <CheckCircle className="w-3.5 h-3.5 text-[#f7e022]" />
                  <span className="text-xs">200+ clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA - Matching exactly */}
        <div className="text-center">
          <button 
            onClick={() => {
              const contactSection = document.getElementById('contact-box');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="group inline-flex items-center gap-2 bg-[#020C16] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1d92fb] transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <Zap className="w-5 h-5" />
            <span>Work With Our Team</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-sm text-gray-500 mt-4">
            Join 200+ businesses already automating with us.
          </p>
        </div>

        {/* Trust badges - Matching exactly */}
        <div className="flex flex-wrap justify-center items-center gap-6 mt-12 pt-8 border-t border-gray-200">
          {[
            { text: "Enterprise-grade security", icon: Shield },
            { text: "NDA protected", icon: Award },
            { text: "24/7 support", icon: Clock },
            { text: "Results guaranteed", icon: Target },
          ].map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div key={idx} className="flex items-center gap-2 text-gray-600">
                <IconComponent className="w-4 h-4 text-[#1d92fb]" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;