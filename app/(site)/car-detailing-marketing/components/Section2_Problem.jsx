import React from 'react'

export default function Section2_Problem() {
  const painPoints = [
    {
      title: "Inconsistent bookings month to month",
      description: "Some months are great, others are dead quiet. You never know what's coming next and it's stressful.",
      icon: "M12 8v4l3 3M12 2a10 10 0 1010 10 10 10 0 00-10-10z"
    },
    {
      title: "Invisible on Google Maps",
      description: "When someone searches 'car detailing near me' in your city — your competitors show up and you don't.",
      icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
    },
    {
      title: "Relying on referrals and word-of-mouth",
      description: "Referrals are great — but they're not predictable. You need a system that brings in new customers every week.",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
    },
    {
      title: "Leads that enquire but never book",
      description: "People reach out, you reply — and then they disappear. No follow-up system means lost revenue every single day.",
      icon: "M18.364 5.636L16.95 7.05m0 0a7 7 0 11-9.9 9.9 7 7 0 019.9-9.9zM12 8v4l3 3"
    },
    {
      title: "No time to run marketing yourself",
      description: "You're busy detailing cars all day. Learning Meta Ads, SEO, and CRM on top of that is simply not realistic.",
      icon: "M12 6v6m0 0v6m0-6h6m-6 0H6M4 4h16v16H4z"
    },
    {
      title: "Past customers never come back",
      description: "You do great work but clients don't rebook. No reminder system means they forget about you and go elsewhere.",
      icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          {/* Top Tag with stylized design */}
          <div className="inline-block mb-4">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#3498db]"></div>
              <span className="text-[#3498db] font-bold text-sm uppercase tracking-[0.2em]">Sound familiar</span>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#3498db]"></div>
            </div>
          </div>
          
          {/* Headline - Reduced font size */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            You&apos;re Great at Detailing. But Getting{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#3498db]">Consistent Customers</span>
              <svg className="absolute bottom-0 left-0 w-full h-3 -z-0" viewBox="0 0 200 10" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 5 Q 50 10 100 5 Q 150 0 200 5" stroke="#f7e022" strokeWidth="3" fill="none" strokeLinecap="round"/>
              </svg>
            </span>{' '}
            is a Whole Different Game.
          </h2>
          
          {/* Body Text with left border accent */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#3498db] to-[#f7e022] rounded-full"></div>
              <p className="text-base md:text-lg text-gray-600 pl-4">
                Most car detailing business owners we talk to are facing the same challenges. You&apos;re putting in the hours, 
                doing great work — but the bookings aren&apos;t consistent, the phone isn&apos;t ringing enough, 
                and every month feels like starting from zero.
              </p>
            </div>
          </div>
        </div>

        {/* Pain Points Grid - Stylized cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 md:mb-16">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-xl border border-gray-100 overflow-hidden"
            >
              {/* Decorative gradient bar at top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3498db] to-[#f7e022] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              {/* Icon with circular background */}
              <div className="relative mb-5">
                <div className="w-14 h-14 bg-gradient-to-br from-[#3498db]/10 to-[#f7e022]/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-[#3498db]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={point.icon} />
                  </svg>
                </div>
                {/* Number badge */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#f7e022] rounded-full flex items-center justify-center text-xs font-bold text-black">
                  {index + 1}
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                {point.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {point.description}
              </p>
              
              {/* Decorative dots at bottom right */}
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-6 h-6 text-[#3498db]/30" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="5" cy="5" r="2" />
                  <circle cx="12" cy="5" r="2" />
                  <circle cx="19" cy="5" r="2" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Stylized Transition Line */}
        <div className="relative">
          {/* Background decoration */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-32 h-32 bg-[#3498db]/5 rounded-full blur-3xl"></div>
          </div>
          
   {/* Content */}
<div className="relative text-center px-4 sm:px-6">
  <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-gradient-to-r from-white via-gray-50 to-white rounded-2xl sm:rounded-full px-5 py-4 sm:px-6 md:px-8 sm:py-3 md:py-4 shadow-sm border border-gray-200 max-w-full sm:max-w-none">
    
    {/* Top section on mobile - side by side on desktop */}
    <div className="flex items-center gap-2">
      <svg className="w-5 h-5 text-[#3498db] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
      <p className="text-gray-800 font-semibold text-sm md:text-base">
        These aren&apos;t detailing problems — they&apos;re <span className="text-[#3498db]">marketing problems</span>.
      </p>
    </div>
    
    {/* Arrow icon - rotates on mobile */}
    <svg className="w-5 h-5 text-[#f7e022] flex-shrink-0 transform sm:rotate-0 rotate-90" fill="currentColor" viewBox="0 0 24 24">
      <path d="M13 5l7 7-7 7M5 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
    
    {/* Bottom section on mobile - side by side on desktop */}
    <div className="flex items-center gap-2">
      <p className="text-gray-800 font-semibold text-sm md:text-base">
        <span className="text-[#f7e022]">And marketing problems have solutions.</span> Here&apos;s what we do about it.
      </p>
    </div>
    
  </div>
</div>
        </div>
      </div>
    </section>
  )
}