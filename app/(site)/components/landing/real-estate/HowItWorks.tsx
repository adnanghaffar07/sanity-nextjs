import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Free workflow audit",
      description: "We spend 30 minutes with you mapping every manual task your team touches. We identify the 3–5 highest-impact automation opportunities in your specific business.",
    },
    {
      number: "02",
      title: "Custom build",
      description: "Our team designs and builds your automations from scratch — AI agents, workflow triggers, CRM integrations. Nothing off-the-shelf. Built to your exact process.",
    },
    {
      number: "03",
      title: "Deploy & measure",
      description: "We go live, monitor everything for 30 days, and optimize. You get weekly reports showing time saved, tasks automated, and ROI — so you always know the number.",
    },
  ];

  return (
    <section id="how-it-works" className="relative py-24 md:py-32 bg-gradient-to-b from-white to-gray-50/50 overflow-hidden">
      {/* Premium Background Elements - Blue theme */}
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #3498db 1px, transparent 0)`,
        backgroundSize: '50px 50px',
        opacity: 0.03
      }} />
      
      {/* Theme Color Glows - Blue & Yellow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#3498db]/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-[#f7e022]/5 rounded-full blur-[100px]" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          {/* Premium Eyebrow - Blue theme */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#3498db]" />
            <span className="text-[#3498db] text-sm font-semibold tracking-[0.2em] uppercase">
              How it works
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#3498db]" />
          </div>
          
          {/* Main Headline */}
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-[1.2]">
            From audit to deployed automation
            <div className="mt-3">
              <span className="relative inline-block">
                <span className="relative z-10 text-[#3498db]">in 30 days</span>
                <div className="absolute bottom-2 left-0 right-0 h-3 bg-[#3498db]/20 -z-0" />
              </span>
            </div>
          </h2>
        </div>
        
        {/* Premium Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`
                group relative
                ${index === 0 ? 'md:pl-0' : ''}
                ${index === steps.length - 1 ? 'md:pr-0' : ''}
              `}
            >
              {/* Card Container */}
              <div className={`
                h-full p-8 md:p-10 transition-all duration-300
                ${index === 0 ? 'md:pl-0' : ''}
                ${index === steps.length - 1 ? 'md:pr-0' : ''}
              `}>
                
                {/* Large Background Number - Blue tint */}
                <div className="absolute top-6 right-6 text-8xl md:text-9xl font-bold text-[#3498db]/5 group-hover:text-[#3498db]/10 transition-colors duration-300 select-none">
                  {step.number}
                </div>
                
                {/* Step Indicator - Blue theme */}
                <div className="relative z-10 mb-8">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#3498db] text-white font-bold text-xl shadow-lg shadow-[#3498db]/20">
                    {step.number}
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="relative z-10 text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#3498db] transition-colors duration-300">
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="relative z-10 text-gray-600 leading-relaxed">
                  {step.description}
                </p>
                
                {/* Decorative Line - Blue theme */}
                <div className="relative z-10 mt-8 w-12 h-0.5 bg-[#3498db]/30 group-hover:w-20 group-hover:bg-[#3498db]/60 transition-all duration-300" />
              </div>
              
              {/* Vertical Divider - Between columns */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
              )}
              
              {/* Horizontal Divider - Mobile only */}
              {index < steps.length - 1 && (
                <div className="block md:hidden w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-4" />
              )}
            </div>
          ))}
        </div>
        
        {/* Trust Indicator - Blue theme */}
        <div className="text-center mt-20 pt-8 border-t border-gray-100">
          <div className="inline-flex items-center gap-2 text-sm text-gray-500">
            <svg className="w-4 h-4 text-[#3498db]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Trusted by 200+ real estate companies</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;