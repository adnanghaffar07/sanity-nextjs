import React from "react";
import { 
  Settings, 
  Cpu, 
  Mail, 
  Link, 
  Target, 
  BarChart3, 
  MessageSquare, 
  Code,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Zap
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Settings,
      title: "Marketing Automation Setup & Configuration",
      description: "We implement and configure leading automation platforms tailored to your business model, ensuring seamless integration with your existing stack.",
      tags: ["HubSpot", "Marketo", "ActiveCampaign", "Klaviyo"],
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Cpu,
      title: "AI-Powered Lead Nurturing Workflows",
      description: "We design intelligent multi-step nurturing sequences triggered by real user behavior, delivering personalized experiences at scale.",
      tags: ["Behavioral Triggers", "Lead Scoring", "Dynamic Content"],
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: Mail,
      title: "Email & SMS Campaign Automation",
      description: "From welcome sequences to re-engagement flows and cart abandonment recovery that converts lost visitors into loyal customers.",
      tags: ["Drip Campaigns", "A/B Testing", "SMS Automation"],
      iconBg: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: Link,
      title: "CRM Integration & Data Unification",
      description: "We connect your marketing automation platform to your CRM, eCommerce store, and analytics tools for a single source of truth.",
      tags: ["Salesforce", "Pipedrive", "Zapier", "API Integrations"],
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600"
    },
    {
      icon: Target,
      title: "Paid Advertising Automation",
      description: "We automate audience syncing and budget rules across Google Ads, Meta, and LinkedIn to maximize ROAS.",
      tags: ["Google Ads", "Meta Ads", "LinkedIn Ads", "Retargeting"],
      iconBg: "bg-red-100",
      iconColor: "text-red-600"
    },
    {
      icon: BarChart3,
      title: "Analytics, Attribution & Reporting",
      description: "We build custom dashboards that tie every campaign to actual revenue, giving you clear visibility on marketing ROI.",
      tags: ["GA4", "Looker Studio", "Custom Dashboards"],
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600"
    },
    {
      icon: MessageSquare,
      title: "AI Chatbot & Conversational Marketing",
      description: "Deploy AI-powered chatbots to qualify leads, answer questions, and book demos automatically — 24/7/365.",
      tags: ["AI Chatbots", "Lead Qualification", "WhatsApp Automation"],
      iconBg: "bg-pink-100",
      iconColor: "text-pink-600"
    },
    {
      icon: Code,
      title: "Custom Marketing Automation Development",
      description: "When off-the-shelf tools don't fit your unique requirements, we build custom automation solutions from scratch.",
      tags: ["Custom Build", "API Development", "Scalable Architecture"],
      iconBg: "bg-teal-100",
      iconColor: "text-teal-600"
    },
  ];

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Blue background with opacity */}
      <div className="absolute inset-0 bg-[#1d92fb]"></div>
      <div className="absolute inset-0 bg-white opacity-95"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" 
           style={{ 
             backgroundImage: `radial-gradient(circle at 1px 1px, #1d92fb 1px, transparent 0)`,
             backgroundSize: '32px 32px'
           }}>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header - Matching Pain Points exactly */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#1d92fb]/10 border border-[#1d92fb]/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-[#1d92fb]" />
            <span className="text-sm font-semibold text-[#1d92fb] tracking-wide">WHAT WE DO</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#020C16] mb-4 tracking-tight">
            End-to-End Marketing Automation<br />
            <span className="text-[#1d92fb]">Services That Drive Revenue</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From strategy to execution, we build intelligent automation systems that transform your marketing into a predictable growth engine.
          </p>
        </div>

        {/* Services Grid - Matching card sizes exactly */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            
            return (
              <div
                key={idx}
                className="group relative bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                {/* Light hover background */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${service.iconBg}/30 rounded-xl`}></div>
                
                <div className="relative z-10">
                  {/* Icon - exactly like Pain Points */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 ${service.iconBg} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`w-6 h-6 ${service.iconColor}`} strokeWidth={1.5} />
                    </div>
                    
                    {/* Service count/metric instead of metric badge */}
                    <div className="text-right">
                      <span className="text-2xl font-bold text-[#020C16]">{String(idx + 1).padStart(2, '0')}</span>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mt-0.5">Service</p>
                    </div>
                  </div>
                  
                  {/* Title - matching Pain Points exactly */}
                  <h3 className="text-lg font-bold text-[#020C16] mb-2">
                    {service.title}
                  </h3>
                  
                  {/* Description - matching Pain Points exactly */}
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  {/* Tags - styled to match but slightly smaller for multiple items */}
                  <div className="flex flex-wrap gap-1.5">
                    {service.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="bg-gray-50 px-2.5 py-1 rounded-full text-xs text-gray-600 border border-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Quick action indicator - matching Pain Points style */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-7 h-7 bg-[#1d92fb]/10 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-3.5 h-3.5 text-[#1d92fb]" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Feature List - Matching trust indicators style */}
        <div className="mt-16">
          <div className="flex flex-wrap justify-center items-center gap-8 pt-8 border-t border-gray-200">
            {[
              { text: "No long-term contracts", icon: CheckCircle },
              { text: "Dedicated support team", icon: CheckCircle },
              { text: "Results-based approach", icon: CheckCircle },
              { text: "Transparent reporting", icon: CheckCircle }
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 text-gray-600">
                <CheckCircle className="w-5 h-5 text-[#1d92fb]" />
                <span className="text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Integration Strip - Clean and minimal */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 mb-4">Seamlessly integrates with</p>
          <div className="flex flex-wrap justify-center items-center gap-3">
            {["HubSpot", "Salesforce", "Marketo", "Klaviyo", "ActiveCampaign", "Google Ads"].map((platform, idx) => (
              <span key={idx} className="text-xs text-gray-700 bg-white px-3 py-1.5 rounded-full shadow-sm border border-gray-100">
                {platform}
              </span>
            ))}
          </div>
        </div>

        {/* CTA - Matching Pain Points exactly */}
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
            <span>Discuss Your Needs</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-sm text-gray-500 mt-4">
            Free consultation • No commitment • 24h response
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;