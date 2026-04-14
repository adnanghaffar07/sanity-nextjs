import React from 'react'

export default function Section3_Services() {
  const services = [
    {
      number: "01",
      title: "Local SEO & Google Business Profile Management",
      description: "Get found when customers search 'car detailing near me' in your city. We optimize and manage your Google Business Profile so you rank in the top 3 on Google Maps.",
      bullets: [
        "GBP full setup & optimization",
        "NAP consistency across top directories",
        "Weekly photo posts & service updates",
        "Map Pack ranking strategy"
      ]
    },
    {
      number: "02",
      title: "High-Converting Website Design",
      description: "Your website is your #1 sales tool. We build fast, mobile-first websites with dedicated service pages, click-to-call buttons, and online booking forms.",
      bullets: [
        "Mobile-first, fast-loading design",
        "Dedicated pages for ceramic coating, full detail & more",
        "Online booking form & click-to-call CTAs",
        "SEO-optimized from day one"
      ]
    },
    {
      number: "03",
      title: "Meta Ads (Facebook & Instagram)",
      description: "We run targeted before/after video campaigns that get your detailing business in front of local car owners who are ready to book.",
      bullets: [
        "Campaign strategy & setup",
        "Ad creative design (Canva + CapCut)",
        "AI voiceovers via ElevenLabs",
        "Audience targeting & zip-code focus",
        "Continuous monitoring & optimization"
      ]
    },
    {
      number: "04",
      title: "Google Ads & Local Service Ads",
      description: "Appear at the very top of Google when someone searches for detailing services. LSAs give you the 'Google Guaranteed' badge.",
      bullets: [
        "Google Search Ads setup & management",
        "Local Service Ads (Google Guaranteed badge)",
        "High-intent keyword targeting",
        "Monthly bid optimization & reporting"
      ]
    },
    {
      number: "05",
      title: "GHL CRM & Automation Setup",
      description: "Every lead gets followed up within minutes — automatically. We set up your entire GoHighLevel CRM so no lead ever falls through the cracks.",
      bullets: [
        "GHL sub-account creation & full setup",
        "Automated follow-up sequences (SMS + email)",
        "Lead pipeline & tracking system",
        "Appointment booking calendar",
        "Continuous automation optimization"
      ]
    },
    {
      number: "06",
      title: "Social Media Management & Content",
      description: "We create scroll-stopping before/after Reels, TikToks, and social posts that build your brand and keep you top-of-mind.",
      bullets: [
        "Monthly content calendar planning",
        "Before/after transformation Reels & TikToks",
        "Ad creatives & social media graphics",
        "AI voiceovers for video content"
      ]
    },
    {
      number: "07",
      title: "Reputation Management",
      description: "5-star reviews are the #1 reason customers choose one detailer over another. We automate your entire review collection process.",
      bullets: [
        "Automated review request SMS/email",
        "Google & Facebook review management",
        "Response templates for reviews",
        "Monthly reputation report"
      ]
    },
    {
      number: "08",
      title: "CRM Database Reactivation",
      description: "Your past customers are your most valuable asset. We run reactivation campaigns that bring them back in — all automated.",
      bullets: [
        "Past customer SMS/email campaigns",
        "Seasonal package promotions",
        "Maintenance reminder sequences",
        "Annual ceramic coating top-up campaigns"
      ]
    }
  ]

  return (
    <section className="py-20 md:py-28 bg-white relative">
      {/* Diagonal background design */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#3498db]/[0.03] -skew-x-12 transform origin-top-right"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-[#f7e022]/[0.03] -skew-x-12 transform origin-bottom-left"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header - Centered with flair */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#3498db]"></div>
              <span className="text-[#3498db] font-bold text-sm uppercase tracking-[0.2em]">What We Do For You</span>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#3498db]"></div>
            </div>
          </div>

          {/* Headline with consistent styling */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Everything Your Detailing Business{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#3498db]">Needs to Get Booked Solid</span>
              <svg className="absolute bottom-0 left-0 w-full h-3 -z-0" viewBox="0 0 200 10" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 5 Q 50 10 100 5 Q 150 0 200 5" stroke="#f7e022" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We handle every piece of your marketing so you can focus on delivering exceptional detailing work.
          </p>
        </div>

        {/* Services - Magazine style layout */}
        <div className="space-y-20">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`group flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-start border-b border-gray-100 pb-12 last:border-0 last:pb-0`}
            >
              {/* Left: Number and Visual Element */}
              <div className="lg:w-1/3">
                <div className="sticky top-24">
                  <div className="relative">
                    {/* Large Number */}
                    <div className="text-8xl md:text-9xl font-black text-gray-900 leading-none">
                      {service.number}
                    </div>
                    {/* Accent line */}
                    <div className={`w-16 h-1 bg-gradient-to-r from-[#3498db] to-[#f7e022] mt-4 ${idx % 2 === 0 ? '' : 'lg:ml-auto'}`}></div>
                  </div>
                </div>
              </div>

              {/* Right: Content */}
              <div className="lg:w-2/3">
                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Bullets - Grid layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-3 group/bullet">
                      <div className="relative flex-shrink-0">
                        <div className="w-5 h-5 rounded-full border-2 border-[#3498db] flex items-center justify-center group-hover/bullet:bg-[#3498db] transition-colors duration-300">
                          <svg className="w-3 h-3 text-white opacity-0 group-hover/bullet:opacity-100 transition-opacity duration-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <span className="text-gray-700 text-sm md:text-base">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-20 pt-8 border-t-2 border-gray-100">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-4xl font-black text-[#3498db]">8</div>
              <div className="text-sm text-gray-500 uppercase tracking-wide">Specialized Services</div>
            </div>
            <div className="w-px h-12 bg-gray-200 hidden md:block"></div>
            <div className="text-center">
              <div className="text-4xl font-black text-[#f7e022]">100%</div>
              <div className="text-sm text-gray-500 uppercase tracking-wide">Done For You</div>
            </div>
            <div className="w-px h-12 bg-gray-200 hidden md:block"></div>
            <div className="text-center">
              <div className="text-4xl font-black text-[#3498db]">30</div>
              <div className="text-sm text-gray-500 uppercase tracking-wide">Days to Results</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}