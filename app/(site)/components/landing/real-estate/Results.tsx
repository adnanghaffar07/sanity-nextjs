import React from "react";

const RealEstateResults = () => {
  const results = [
    {
      metric: "90 sec",
      metricLabel: "Average AI lead response time vs. 2–4 hours manually",
      quote: "We stopped losing deals to faster competitors the week the AI agent went live.",
      attribution: "Property management company, Chicago IL",
      variant: "light",
    },
    {
      metric: "60%",
      metricLabel: "Reduction in manual operations time",
      quote: "Our ops team went from 12 people to 7 — while handling 40% more properties.",
      attribution: "Residential real estate operator, Texas",
      variant: "dark",
    },
    {
      metric: "$0",
      metricLabel: "Manual data entry cost per month — fully automated",
      quote: "Nobody enters data into our CRM anymore. It just happens.",
      attribution: "Commercial RE brokerage, New York",
      variant: "dark",
    },
    {
      metric: "4 min",
      metricLabel: "To process a lease application — down from 2+ hours",
      quote: "The lease automation alone paid for everything in the first month.",
      attribution: "Multifamily property manager, Florida",
      variant: "light",
    },
  ];

  return (
    <section id="results" className="relative py-24 md:py-32 bg-gradient-to-b from-white to-gray-50/50 overflow-hidden">
      {/* Premium Background Elements - Blue theme */}
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #3498db 1px, transparent 0)`,
        backgroundSize: '50px 50px',
        opacity: 0.03
      }} />
      
      {/* Soft Theme Color Glows - Blue & Yellow */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-[#3498db]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-[#f7e022]/10 rounded-full blur-[140px]" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          {/* Premium Eyebrow - Blue */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#3498db]" />
            <span className="text-[#3498db] text-sm font-semibold tracking-[0.2em] uppercase">
              Results
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#3498db]" />
          </div>
          
          {/* Headline - Blue accent */}
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            What happens when real estate
            <br />
            <span className="relative inline-block mt-3">
              <span className="relative z-10 text-[#3498db]">companies automate</span>
              <div className="absolute bottom-2 left-0 right-0 h-3 bg-[#3498db]/20 -z-0" />
            </span>
          </h2>
          
          <p className="text-gray-500 mt-4 text-lg">
            Real results from real clients
          </p>
        </div>
        
        {/* 2x2 Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {results.map((result, index) => (
            <div
              key={index}
              className={`
                group relative rounded-2xl p-8 md:p-10 transition-all duration-500 hover:-translate-y-1
                ${result.variant === "light" 
                  ? "bg-white border border-gray-100 hover:border-[#3498db]/30 hover:shadow-xl hover:shadow-[#3498db]/5" 
                  : "bg-black border border-white/10 hover:border-[#3498db]/30 hover:shadow-2xl hover:shadow-[#3498db]/10"
                }
              `}
            >
              {/* Decorative Quote Mark - Blue tint */}
              <div className={`
                absolute top-6 right-6 text-7xl font-serif select-none
                ${result.variant === "light" ? "text-[#3498db]/10" : "text-white/5"}
              `}>
                &quot;
              </div>
              
              {/* Accent Line - Top - Blue */}
              <div className={`
                absolute top-0 left-8 right-8 h-0.5 rounded-full
                ${result.variant === "light" 
                  ? "bg-gradient-to-r from-transparent via-[#3498db]/50 to-transparent" 
                  : "bg-gradient-to-r from-transparent via-[#3498db]/30 to-transparent"
                }
                opacity-0 group-hover:opacity-100 transition-opacity duration-500
              `} />
              
              {/* Metric Section */}
              <div className="mb-5">
                <div className={`
                  text-4xl md:text-6xl font-bold tracking-tight mb-2
                  ${result.variant === "light" ? "text-gray-900" : "text-white"}
                `}>
                  {result.metric}
                </div>
                <div className={`
                  text-sm font-medium leading-relaxed
                  ${result.variant === "light" ? "text-gray-500" : "text-gray-400"}
                `}>
                  {result.metricLabel}
                </div>
              </div>
              
              {/* Quote Section with Quote Icon - Blue */}
              <div className="relative mb-6 mt-6">
                <svg 
                  className={`
                    absolute -top-2 -left-2 w-6 h-6
                    ${result.variant === "light" ? "text-[#3498db]/30" : "text-[#3498db]/20"}
                  `} 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className={`
                  text-lg md:text-xl leading-relaxed font-medium pl-7
                  ${result.variant === "light" ? "text-gray-700" : "text-gray-200"}
                `}>
                  {result.quote}
                </p>
              </div>
              
              {/* Attribution Section - Blue accent */}
              <div className={`
                flex items-center gap-3 pt-5 mt-2 border-t
                ${result.variant === "light" ? "border-gray-100" : "border-white/10"}
              `}>
                <div className={`
                  w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0
                  ${result.variant === "light" 
                    ? "bg-[#3498db]/10 text-[#3498db]" 
                    : "bg-[#3498db]/10 text-[#3498db]"
                  }
                `}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className={`
                  text-sm font-medium
                  ${result.variant === "light" ? "text-gray-500" : "text-gray-400"}
                `}>
                  — {result.attribution}
                </div>
              </div>
              
              {/* Hover Gradient Overlay - Blue */}
              <div className={`
                absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none
                ${result.variant === "light" 
                  ? "bg-gradient-to-br from-[#3498db]/5 via-transparent to-transparent" 
                  : "bg-gradient-to-br from-[#3498db]/5 via-transparent to-transparent"
                }
              `} />
              
              {/* Bottom Accent Line on Hover - Blue */}
              <div className={`
                absolute bottom-0 left-8 right-8 h-0.5 rounded-full
                ${result.variant === "light" 
                  ? "bg-gradient-to-r from-transparent via-[#3498db] to-transparent" 
                  : "bg-gradient-to-r from-transparent via-[#3498db] to-transparent"
                }
                opacity-0 group-hover:opacity-100 transition-opacity duration-500
              `} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealEstateResults;