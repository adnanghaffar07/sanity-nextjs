import React from "react";
import { 
  Mail, 
  MessageSquare, 
  Share2, 
  Bell, 
  Users,
  ArrowRight,
  CheckCircle,
  Zap,
  Target,
  Users2,
  Sparkles,
  TrendingUp
} from 'lucide-react';

const ChannelCoverageSection = () => {
  const channels = [
    { 
      icon: Mail, 
      title: "Email Marketing", 
      desc: "Triggered campaigns, newsletters, drip sequences & re-engagement flows",
      color: "text-[#1d92fb]"
    },
    { 
      icon: MessageSquare, 
      title: "SMS & WhatsApp", 
      desc: "Instant alerts, reminders, follow-ups and conversational flows",
      color: "text-green-500"
    },
    { 
      icon: Share2, 
      title: "Social Media", 
      desc: "Automated publishing, DM responses, lead gen from LinkedIn & Meta",
      color: "text-purple-500"
    },
    { 
      icon: Bell, 
      title: "Push Notifications", 
      desc: "Web and app push for re-engagement, abandoned carts and announcements",
      color: "text-orange-500"
    },
    { 
      icon: Users, 
      title: "CRM & Sales Handoff", 
      desc: "Auto-route qualified leads to sales with full context and lead score",
      color: "text-indigo-500"
    },
  ];

  const journey = [
    { 
      step: "01", 
      title: "Prospect Visits Website", 
      desc: "Visitor behavior tracked and profile built in real time", 
      tag: "Behavioral Tracking",
      icon: Users2
    },
    { 
      step: "02", 
      title: "Lead Capture & Segmentation", 
      desc: "Form submission or chatbot interaction triggers instant segmentation", 
      tag: "Smart Segmentation",
      icon: Target
    },
    { 
      step: "03", 
      title: "Personalized Nurture Sequence", 
      desc: "Automated emails, SMS and retargeting ads based on segment and intent", 
      tag: "Multi-channel Nurture",
      icon: TrendingUp
    },
    { 
      step: "04", 
      title: "Lead Scoring & Qualification", 
      desc: "AI scoring model identifies sales-ready leads automatically", 
      tag: "AI Lead Scoring",
      icon: Zap
    },
    { 
      step: "05", 
      title: "Sales Handoff & Closed Won", 
      desc: "Warm lead passed to sales with full history, score, and recommended next step", 
      tag: "CRM Integration",
      icon: CheckCircle
    },
  ];

  return (
    <section className="relative py-24 px-4 overflow-hidden bg-white">
      {/* Subtle blue background pattern */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-[#1d92fb]/5 to-transparent"></div> */}
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" 
           style={{ 
             backgroundImage: `radial-gradient(circle at 1px 1px, #1d92fb 1px, transparent 0)`,
             backgroundSize: '40px 40px'
           }}>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#1d92fb]/10 border border-[#1d92fb]/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-[#1d92fb]" />
            <span className="text-sm font-semibold text-[#1d92fb] tracking-wide">CHANNEL COVERAGE</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#020C16] mb-6 tracking-tight">
            Automate Every Customer<br />
            <span className="text-[#1d92fb]">Touchpoint</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We automate your marketing across every channel your customers use, creating seamless experiences that drive engagement and revenue.
          </p>
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
          {channels.map((channel, idx) => {
            const IconComponent = channel.icon;
            
            return (
              <div 
                key={idx} 
                className="group relative bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                {/* Hover accent */}
                <div className="absolute inset-0 bg-[#1d92fb] opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#1d92fb]/10 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-7 h-7 ${channel.color}`} strokeWidth={1.5} />
                  </div>
                  
                  <h4 className="text-lg font-bold text-[#020C16] mb-2">{channel.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{channel.desc}</p>
                  
                  {/* Learn more indicator */}
                  {/* <div className="flex items-center gap-1 mt-4 text-[#1d92fb] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </div> */}
                </div>
              </div>
            );
          })}
        </div>

        {/* Automated Lead Journey Flow */}
        <div className="relative">
          {/* Section header */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#020C16] mb-4">Automated Lead Journey</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From first visit to closed deal — every step automated, tracked, and optimized
            </p>
          </div>

          {/* Journey steps with connecting line */}
          <div className="relative">
            {/* Desktop connecting line */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-[#1d92fb]/20 via-[#1d92fb] to-[#1d92fb]/20"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {journey.map((item, idx) => {
                const IconComponent = item.icon;
                
                return (
                  <div key={idx} className="relative">
                    {/* Step number with circle */}
                    <div className="flex flex-col items-center">
                      <div className="relative z-10 w-16 h-16 bg-white border-2 border-[#1d92fb] rounded-full flex items-center justify-center mb-4 shadow-lg">
                        <span className="text-xl font-bold text-[#1d92fb]">{item.step}</span>
                      </div>
                      
                      {/* Content card */}
                      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 w-full hover:shadow-xl transition-all duration-300 group">
                        <div className="flex justify-center mb-3">
                          <div className="w-10 h-10 bg-[#1d92fb]/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                            <IconComponent className="w-5 h-5 text-[#1d92fb]" />
                          </div>
                        </div>
                        
                        <h4 className="font-bold text-[#020C16] text-center mb-2 text-sm">{item.title}</h4>
                        <p className="text-xs text-gray-600 text-center mb-3 leading-relaxed">{item.desc}</p>
                        
                        {/* Tag */}
                        <div className="flex justify-center">
                          <span className="inline-block bg-[#1d92fb]/10 text-[#1d92fb] px-3 py-1 rounded-full text-xs font-semibold border border-[#1d92fb]/20">
                            {item.tag}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Arrow for mobile/tablet (except last) */}
                    {idx < journey.length - 1 && (
                      <div className="lg:hidden flex justify-center my-2">
                        <ArrowRight className="w-5 h-5 text-[#1d92fb] rotate-90" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact-box');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="group inline-flex items-center gap-3 bg-[#020C16] text-white px-8 py-4 rounded-full font-bold hover:bg-[#1d92fb] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Start Automating Your Customer Journey</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center items-center gap-8 mt-16 pt-8 border-t border-gray-200">
          <div className="flex items-center gap-2 text-gray-600">
            <CheckCircle className="w-5 h-5 text-[#1d92fb]" />
            <span className="text-sm">Enterprise-grade security</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <CheckCircle className="w-5 h-5 text-[#1d92fb]" />
            <span className="text-sm">99.9% uptime SLA</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <CheckCircle className="w-5 h-5 text-[#1d92fb]" />
            <span className="text-sm">GDPR compliant</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <CheckCircle className="w-5 h-5 text-[#1d92fb]" />
            <span className="text-sm">24/7 monitoring</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChannelCoverageSection;