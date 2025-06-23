"use client";

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import CalendlyProjectForm from "./CalendlyProjectFooterForm";

const CalendlyForm: React.FC = () => {
  const calendarSectionRef = useRef<HTMLDivElement | null>(null);
  const [showCal, setShowCal] = useState(false);

  // Dynamically import only when needed
  const Cal = dynamic(() => import("@calcom/embed-react").then(mod => mod.default), {
    ssr: false,
    loading: () => <div className="h-[790px] w-full bg-gray-100 animate-pulse" />,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setShowCal(true); // trigger loading
          observer.disconnect();
        }
      },
      {
        rootMargin: "300px", // preload before it's in full view
      }
    );

    if (calendarSectionRef.current) {
      observer.observe(calendarSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative flex flex-col w-full mx-auto max-md:max-w-full" ref={calendarSectionRef}>
      <div className="absolute inset-0 bg-[#1D92FB] opacity-10" />
      <div className="relative px-6 xl:px-8 2xl:px-16 py-6 md:py-16 flex justify-center">
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-20 2xl:gap-32 max-w-7xl mx-auto">
          {/* Left Side: Form */}
          <div className="flex flex-col w-full lg:w-[45%] self-center md:pb-0 pb-10 md:ml-24">
            <div className="flex flex-col text-black mt-10 mb-10 md:mt-0 max-w-full md:ml-3">
              <div className="max-w-[500px]">
                <CalendlyProjectForm />
              </div>
            </div>
          </div>

          {/* Right Side: Lazy-loaded Calendar */}
          <div className="flex flex-col w-full lg:w-[50%]">
            <div className="flex flex-col items-start md:items-end w-full">
              <div id="calendar-scroll-target" className="h-0" />
              {showCal && (
                <Cal
                  namespace="30min"
                  calLink="adnan-ghaffar/30min"
                  style={{ width: "100%", height: "790px", overflow: "scroll" }}
                  config={{ layout: "month_view", theme: "auto" }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendlyForm;
