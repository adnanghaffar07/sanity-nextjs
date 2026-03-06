import React from "react";
import {
  HeartPulse,
  Coins,
  ShoppingCart,
  Building2,
  GraduationCap,
  Truck,
  Home,
  Utensils,
  ArrowRight,
  Sparkles,
  Globe2,
  Briefcase,
  CheckCircle
} from 'lucide-react';

const IndustriesSection = () => {
  const industries = [
    { 
      icon: HeartPulse, 
      name: "Healthcare", 
      desc: "Patient journeys & HIPAA-compliant automation",
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      features: ["HIPAA compliant", "Patient journeys", "Appointment automation"]
    },
    { 
      icon: Coins, 
      name: "FinTech", 
      desc: "Compliance-ready lead nurturing & onboarding",
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      features: ["Compliance-ready", "Lead nurturing", "Secure onboarding"]
    },
    { 
      icon: ShoppingCart, 
      name: "eCommerce", 
      desc: "Cart recovery, retention & lifecycle marketing",
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      features: ["Cart recovery", "Retention", "Lifecycle marketing"]
    },
    { 
      icon: Building2, 
      name: "SaaS & B2B", 
      desc: "Trial-to-paid, upsell & churn prevention flows",
      color: "from-orange-400 to-orange-600",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      features: ["Trial conversion", "Upsell flows", "Churn prevention"]
    },
    { 
      icon: GraduationCap, 
      name: "EdTech", 
      desc: "Enrollment funnels & student engagement flows",
      color: "from-red-400 to-red-600",
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
      features: ["Enrollment funnels", "Student engagement", "Course completion"]
    },
    { 
      icon: Truck, 
      name: "Logistics", 
      desc: "Partner onboarding & freight lead generation",
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-600",
      features: ["Partner onboarding", "Lead generation", "Freight automation"]
    },
    { 
      icon: Home, 
      name: "Real Estate", 
      desc: "Property inquiry nurturing & agent workflows",
      color: "from-indigo-400 to-indigo-600",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600",
      features: ["Property nurturing", "Agent workflows", "Inquiry management"]
    },
    { 
      icon: Utensils, 
      name: "F&B & Hospitality", 
      desc: "Reservation automation & loyalty programs",
      color: "from-pink-400 to-pink-600",
      bgColor: "bg-pink-50",
      iconColor: "text-pink-600",
      features: ["Reservation automation", "Loyalty programs", "Guest engagement"]
    },
  ];

  const stats = [
    { value: "16+", label: "Industries Served", icon: Briefcase },
    { value: "200+", label: "Global Clients", icon: Globe2 },
    { value: "98%", label: "Industry Coverage", icon: CheckCircle },
  ];

  return (
    <section className="relative py-24 px-4 overflow-hidden bg-white">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1d92fb]/5 via-transparent to-[#f7e022]/5"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" 
           style={{ 
             backgroundImage: `radial-gradient(circle at 1px 1px, #1d92fb 1px, transparent 0)`,
             backgroundSize: '40px 40px'
           }}>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-40 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-40 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#1d92fb]/10 border border-[#1d92fb]/20 rounded-full px-4 py-2 mb-6">
            <Globe2 className="w-4 h-4 text-[#1d92fb]" />
            <span className="text-sm font-semibold text-[#1d92fb] tracking-wide">INDUSTRIES WE SERVE</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#020C16] mb-6 tracking-tight">
            Marketing Automation Expertise<br />
            <span className="text-[#1d92fb]">Across Every Sector</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We bring industry-specific knowledge to every engagement — understanding the unique 
            compliance, buyer journey, and conversion dynamics of your market.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div key={idx} className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md border border-gray-100">
                <div className="w-10 h-10 bg-[#1d92fb]/10 rounded-full flex items-center justify-center">
                  <IconComponent className="w-5 h-5 text-[#1d92fb]" />
                </div>
                <div>
                  <span className="text-xl font-bold text-[#020C16]">{stat.value}</span>
                  <span className="ml-2 text-sm text-gray-600">{stat.label}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {industries.map((industry, idx) => {
            const IconComponent = industry.icon;
            
            return (
              <div 
                key={idx} 
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                {/* Hover background */}
                <div className={`absolute inset-0 ${industry.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  {/* Icon with colored background */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 ${industry.bgColor} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-7 h-7 ${industry.iconColor}`} strokeWidth={1.5} />
                  </div>
                  
                  <h4 className="text-xl font-bold text-[#020C16] mb-2 group-hover:text-[#1d92fb] transition-colors">
                    {industry.name}
                  </h4>
                  
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">
                    {industry.desc}
                  </p>

                  {/* Feature tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {industry.features.map((feature, i) => (
                      <span 
                        key={i} 
                        className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600 group-hover:bg-white transition-colors"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute bottom-2 right-2 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#1d92fb]/30 rounded-br-lg"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Industry Expertise Showcase */}
        <div className="bg-gradient-to-r from-[#020C16] to-[#1d92fb] rounded-3xl p-8 md:p-12 shadow-2xl mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Deep Industry Knowledge, Tailored Solutions
              </h3>
              <p className="text-white/80 leading-relaxed mb-6">
                We don't just know marketing automation — we understand the unique challenges 
                and opportunities in your specific industry. From healthcare compliance to 
                eCommerce seasonality, we build systems that work for your market.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "HIPAA compliance",
                  "GDPR ready",
                  "PCI compliant",
                  "SOC2 certified"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-white/70">
                    <CheckCircle className="w-4 h-4 text-[#f7e022]" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                {industries.slice(0, 4).map((industry, i) => {
                  const IconComponent = industry.icon;
                  return (
                    <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <IconComponent className="w-6 h-6 text-[#f7e022] mx-auto mb-2" />
                      <span className="text-sm font-medium text-white">{industry.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <button 
            onClick={() => {
              const contactSection = document.getElementById('contact-box');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="group inline-flex items-center gap-3 bg-[#020C16] text-white px-8 py-4 rounded-full font-bold hover:bg-[#1d92fb] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span>Discuss Your Industry Needs</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-sm text-gray-500 mt-4">
            No matter your industry, we have the expertise to help.
          </p>
        </div>

        {/* Industry badges */}
        <div className="flex flex-wrap justify-center items-center gap-4 mt-12 pt-8 border-t border-gray-200">
          {industries.map((industry, idx) => (
            <span 
              key={idx} 
              className="px-4 py-2 bg-gray-50 rounded-full text-sm text-gray-700 border border-gray-200 hover:border-[#1d92fb] hover:bg-[#1d92fb]/5 transition-colors cursor-default"
            >
              {industry.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;