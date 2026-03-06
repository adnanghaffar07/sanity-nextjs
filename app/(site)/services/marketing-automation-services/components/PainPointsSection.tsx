import React from "react";
import { 
  Clock, 
  Puzzle, 
  GitBranch, 
  Repeat, 
  Target, 
  BarChart3,
  ArrowRight,
  AlertCircle,
  Zap
} from 'lucide-react';

const PainPointsSection = () => {
  const painPoints = [
    {
      icon: Clock,
      title: "Slow Lead Follow-Ups",
      description: "Leads go cold while your team manually sends follow-up emails. The average response window is 5 minutes — manual processes can't compete.",
      metric: "5 min",
      metricLabel: "avg. response window",
      color: "from-blue-500/20 to-blue-600/5",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Puzzle,
      title: "Disconnected Tools & Data Silos",
      description: "Your CRM, email platform, ad tools, and analytics don't talk to each other. Blind spots kill campaigns and waste budget.",
      metric: "37%",
      metricLabel: "budget wasted",
      color: "from-purple-500/20 to-purple-600/5",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: GitBranch,
      title: "Inconsistent Customer Journeys",
      description: "Every prospect gets a different experience depending on who handles them. No consistency means no predictable revenue.",
      metric: "2.5x",
      metricLabel: "lower conversion",
      color: "from-orange-500/20 to-orange-600/5",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600"
    },
    {
      icon: Repeat,
      title: "Repetitive, Low-Value Tasks",
      description: "Your team spends hours segmenting lists, scheduling emails, and building reports — time that should go toward strategy and creativity.",
      metric: "67%",
      metricLabel: "time wasted",
      color: "from-green-500/20 to-green-600/5",
      iconBg: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: Target,
      title: "Generic, One-Size-Fits-All Messaging",
      description: "Batch-and-blast campaigns drive unsubscribes, not conversions. Personalization at scale requires automation, not headcount.",
      metric: "78%",
      metricLabel: "expect personalization",
      color: "from-red-500/20 to-red-600/5",
      iconBg: "bg-red-100",
      iconColor: "text-red-600"
    },
    {
      icon: BarChart3,
      title: "No Visibility on What's Working",
      description: "Without unified reporting, you can't attribute revenue to the right campaigns or justify your marketing budget to stakeholders.",
      metric: "53%",
      metricLabel: "can't measure ROI",
      color: "from-indigo-500/20 to-indigo-600/5",
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600"
    },
  ];

  return (
    <section className="relative py-24 px-4 overflow-hidden bg-white">
      {/* Clean background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1d92fb]/5 via-transparent to-transparent"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" 
           style={{ 
             backgroundImage: `radial-gradient(circle at 1px 1px, #1d92fb 1px, transparent 0)`,
             backgroundSize: '32px 32px'
           }}>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#1d92fb]/10 border border-[#1d92fb]/20 rounded-full px-4 py-2 mb-6">
            <AlertCircle className="w-4 h-4 text-[#1d92fb]" />
            <span className="text-sm font-semibold text-[#1d92fb] tracking-wide">THE PROBLEM</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#020C16] mb-4 tracking-tight">
            Your Marketing Team Deserves Better<br />
            <span className="text-[#1d92fb]">Than Manual Work</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Most businesses are leaving revenue on the table because their marketing isn't automated.
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((point, idx) => {
            const IconComponent = point.icon;
            
            return (
              <div
                key={idx}
                className="group relative bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                {/* Light hover background */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${point.iconBg}/30 rounded-xl`}></div>
                
                <div className="relative z-10">
                  {/* Header with icon and metric */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 ${point.iconBg} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`w-6 h-6 ${point.iconColor}`} strokeWidth={1.5} />
                    </div>
                    
                    {/* Metric badge */}
                    <div className="text-right">
                      <span className="text-2xl font-bold text-[#020C16]">{point.metric}</span>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mt-0.5">{point.metricLabel}</p>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-[#020C16] mb-2">
                    {point.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
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
            <span>Ready to fix these problems?</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-sm text-gray-500 mt-4">
            Free consultation • No commitment • 24h response
          </p>
        </div>

        {/* Trust indicators */}
        <div className="flex justify-center items-center gap-8 mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#1d92fb] rounded-full"></div>
            <span className="text-sm text-gray-600">Strategy-First</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#f7e022] rounded-full"></div>
            <span className="text-sm text-gray-600">AI-Native</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#020C16] rounded-full"></div>
            <span className="text-sm text-gray-600">Results-Driven</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;