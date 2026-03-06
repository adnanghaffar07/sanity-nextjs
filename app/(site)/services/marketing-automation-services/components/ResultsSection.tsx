import React from "react";
import { 
  TrendingUp,
  Clock,
  Mail,
  Zap,
  ArrowRight,
  CheckCircle,
  Target,
  Users,
  BarChart3,
  Award,
  Sparkles
} from 'lucide-react';

const ResultsSection = () => {
  const results = [
    { 
      stat: "3×", 
      title: "More Leads Converted", 
      description: "Automated nurturing converts 3× more leads than manual follow-up processes.",
      icon: TrendingUp,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      statColor: "text-blue-600"
    },
    { 
      stat: "67%", 
      title: "Reduction in Manual Tasks", 
      description: "Marketing teams reclaim hours every week by eliminating repetitive work.",
      icon: Clock,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      statColor: "text-purple-600"
    },
    { 
      stat: "45%", 
      title: "Increase in Email Open Rates", 
      description: "Behaviorally triggered emails dramatically outperform batch-and-blast campaigns.",
      icon: Mail,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      statColor: "text-green-600"
    },
    { 
      stat: "80%", 
      title: "Faster Lead Response", 
      description: "Instant automated responses mean no lead ever waits more than 60 seconds.",
      icon: Zap,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      statColor: "text-orange-600"
    },
  ];

  const achievements = [
    { label: "Active Clients", value: "150+", icon: Users },
    { label: "Campaigns Managed", value: "500+", icon: Target },
    { label: "Avg. ROI Increase", value: "3.5×", icon: BarChart3 },
    { label: "Years Experience", value: "8+", icon: Award },
  ];

  return (
    <section className="relative py-24 px-4 overflow-hidden bg-white">
      {/* Background with subtle gradient */}
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
            <BarChart3 className="w-4 h-4 text-[#1d92fb]" />
            <span className="text-sm font-semibold text-[#1d92fb] tracking-wide">PROVEN RESULTS</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#020C16] mb-4 tracking-tight">
            The Numbers Behind<br />
            <span className="text-[#1d92fb]">Our Automation</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Industry benchmarks from businesses that have implemented intelligent marketing automation with the right partner.
          </p>
        </div>

        {/* Results Grid - Matching card sizes exactly */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {results.map((result, idx) => {
            const IconComponent = result.icon;
            
            return (
              <div 
                key={idx} 
                className="group relative bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 overflow-hidden"
              >
                {/* Light hover background - FIXED: removed gradient that was turning icons white */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${result.iconBg}/30 rounded-xl`}></div>
                
                <div className="relative z-10">
                  {/* Header with icon and stat - matching Pain Points layout */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 ${result.iconBg} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`w-6 h-6 ${result.iconColor}`} strokeWidth={1.5} />
                    </div>
                    
                    {/* Stat - now with proper color that doesn't change on hover */}
                    <div className="text-right">
                      <span className={`text-2xl font-bold ${result.statColor}`}>
                        {result.stat}
                      </span>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mt-0.5">improvement</p>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-[#020C16] mb-2">
                    {result.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {result.description}
                  </p>

                  {/* Quick action indicator - matching Pain Points style */}
                  {/* <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-7 h-7 bg-[#1d92fb]/10 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-3.5 h-3.5 text-[#1d92fb]" />
                    </div>
                  </div> */}
                </div>
              </div>
            );
          })}
        </div>

        {/* Achievement Stats - Matching trust indicators style */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((item, idx) => {
            const IconComponent = item.icon;
            
            return (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#1d92fb]/10 rounded-xl mb-3">
                  <IconComponent className="w-5 h-5 text-[#1d92fb]" />
                </div>
                <div className="text-xl font-bold text-[#020C16] mb-1">{item.value}</div>
                <div className="text-xs text-gray-500">{item.label}</div>
              </div>
            );
          })}
        </div>

        {/* Testimonial Section - Streamlined */}
        <div className="bg-gradient-to-r from-[#020C16] to-[#1d92fb] rounded-xl p-8 shadow-xl mb-16">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-2/3">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[#f7e022] fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-base text-white/90 leading-relaxed mb-3">
                "The automation systems they built transformed our lead generation. We're now converting 
                3× more leads with half the manual effort."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Sarah Johnson</p>
                  <p className="text-xs text-white/70">CMO, TechGrowth Inc.</p>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/3 flex justify-center">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-2">
                  <Sparkles className="w-6 h-6 text-[#f7e022]" />
                </div>
                <p className="text-2xl font-bold text-white">98%</p>
                <p className="text-xs text-white/70">Client satisfaction</p>
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
            <span>Get Your Custom ROI Projection</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-sm text-gray-500 mt-4">
            Free consultation • No commitment • 24h response
          </p>
        </div>

        {/* Trust indicators - Matching exactly */}
        <div className="flex flex-wrap justify-center items-center gap-8 mt-12 pt-8 border-t border-gray-200">
          {[
            { text: "Data-driven approach", icon: BarChart3 },
            { text: "Proven track record", icon: Award },
            { text: "Industry benchmarks", icon: Target },
            { text: "Real results", icon: TrendingUp },
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

export default ResultsSection;