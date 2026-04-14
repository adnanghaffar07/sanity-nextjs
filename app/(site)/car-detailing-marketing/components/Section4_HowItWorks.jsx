import React from 'react'

export default function Section4_HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Book a Free Strategy Call",
      description: "We start with a 15–30 minute call to understand your detailing business, your current situation, your goals, and your market. No pitch. No pressure. Just clarity.",
      icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    },
    {
      number: "02",
      title: "We Build Your Custom Plan",
      description: "Based on your goals and budget, we put together a tailored marketing plan specifically for your detailing business — the right services, in the right order, for your stage of growth.",
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    },
    {
      number: "03",
      title: "We Set Everything Up For You",
      description: "Our team handles the full setup — GHL CRM, Meta Ads, Google Business Profile, content creation, automation workflows. You don't touch a thing. We onboard you within 7 days of signing.",
      icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    },
    {
      number: "04",
      title: "You Get Booked. We Optimize.",
      description: "Leads start coming in. Our team monitors, optimizes, and reports on everything monthly. You focus on detailing — we focus on keeping your calendar full.",
      icon: "M13 10V3L4 14h7v7l9-11h-7z"
    }
  ]

  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#3498db]"></div>
              <span className="text-[#3498db] font-bold text-sm uppercase tracking-[0.2em]">Our Process</span>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#3498db]"></div>
            </div>
          </div>
          
       <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
  Getting Started is Simple.{' '}
  <span className="relative inline-block">
    <span className="relative z-10 text-[#3498db]">Here&apos;s How We Work.</span>
    <svg className="absolute bottom-0 left-0 w-full h-3 -z-0" viewBox="0 0 200 10" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 5 Q 50 10 100 5 Q 150 0 200 5" stroke="#f7e022" strokeWidth="3" fill="none" strokeLinecap="round"/>
    </svg>
  </span>
</h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From your first call to your first booked customer — here&apos;s exactly what happens when you work with CodeAutomation.ai.
          </p>
        </div>

        {/* Professional Vertical Timeline */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex gap-6 pb-12 last:pb-0 group">
              
              {/* Left Column - Number & Line */}
              <div className="flex flex-col items-center">
                {/* Number Circle */}
                <div className="relative z-10 w-12 h-12 bg-white border-2 border-[#3498db] rounded-full flex items-center justify-center group-hover:border-[#f7e022] group-hover:shadow-md transition-all duration-300">
                  <span className="text-sm font-bold text-gray-900">{step.number}</span>
                </div>
                
                {/* Connecting Line */}
                {idx < steps.length - 1 && (
                  <div className="w-0.5 flex-1 bg-gray-200 my-2 group-hover:bg-[#3498db]/30 transition-colors duration-300"></div>
                )}
              </div>
              
              {/* Right Column - Content */}
              <div className="flex-1 pb-8">
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                  {/* Title with Icon */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-[#3498db]/10 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#3498db]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={step.icon} />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {step.title}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

    {/* CTA Section */}
<div className="mt-12 text-center">
  <div className="inline-flex flex-col items-center gap-4">
    <div className="flex items-center gap-2 text-gray-500 text-sm">
      <span>Ready to get started?</span>
      <span>→</span>
    </div>
    
    <a 
      href="https://calendly.com/adnanghaffar/30min"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#f7e022] text-black font-semibold py-3 px-8 rounded-lg hover:bg-[#f7e022]/90 hover:shadow-lg transition-all duration-300 inline-block"
    >
      Book Your Free Strategy Call →
    </a>
  </div>
</div>
      </div>
    </section>
  )
}