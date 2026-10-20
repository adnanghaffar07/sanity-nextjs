"use client";

import React from "react";

const SocialProofBar = () => {
  const stats = [
    {
      value: "350+",
      label: "Projects delivered",
    },
    {
      value: "8 yrs",
      label: "In business",
    },
    {
      value: "14+",
      label: "Industries served",
    },
    {
      value: "150k+",
      label: "Bugs detected & fixed",
    },
    {
      value: "4.9★",
      label: "Clutch rating",
    },
  ];

  return (
    <div className="relative w-full bg-black border-y border-white/5 overflow-hidden">
      {/* Premium subtle gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/3 via-transparent to-amber-500/3" />
      
      {/* Animated subtle shimmer - premium touch */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-[100%] animate-[shimmer_8s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-12" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 md:py-16">
        
        {/* Stats Row - True 5-column layout */}
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-8 lg:flex-nowrap">
          {stats.map((stat, index) => (
            <React.Fragment key={index}>
              {/* Stat Item */}
              <div className="flex-1 text-center min-w-[120px]">
                {/* Value - Large and bold */}
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 tracking-tight">
                  {stat.value}
                </div>
                {/* Label - Subtle and clean */}
                <div className="text-gray-500 text-sm md:text-base font-medium tracking-wide">
                  {stat.label}
                </div>
              </div>
              
              {/* Thin Vertical Divider - Only between items, not after last */}
              {index < stats.length - 1 && (
                <div className="hidden lg:block w-px h-10 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Add custom animation for shimmer effect */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%) rotate(12deg);
          }
          100% {
            transform: translateX(200%) rotate(12deg);
          }
        }
      `}</style>
    </div>
  );
};

export default SocialProofBar;