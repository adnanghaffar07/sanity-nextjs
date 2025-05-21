"use client";

import React, { useEffect, useRef } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import CalendlyProjectForm from "./CalendlyProjectFooterForm";

const CalendlyForm: React.FC = () => {
  const calendarSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });

      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#1d92fb" },
          dark: { "cal-brand": "#1d92fb" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });

      // Wait for DOM to mount and detect slot container
      const interval = setInterval(() => {
        const slotContainer = document.querySelector(
          '[data-cal-com-event-type-container]'
        );
        if (slotContainer) {
          const observer = new MutationObserver(() => {
            const scrollTarget = document.getElementById("calendar-scroll-target");
            if (scrollTarget) {
              scrollTarget.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          });

          observer.observe(slotContainer, {
            childList: true,
            subtree: true,
          });

          clearInterval(interval);
        }
      }, 500);

      return () => clearInterval(interval);
    })();
  }, []);

  return (
    <div className="relative flex flex-col w-full mx-auto max-md:max-w-full">
      <div className="absolute inset-0 bg-[#1D92FB] opacity-10"></div>
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

          {/* Right Side: Calendar */}
          <div className="flex flex-col w-full lg:w-[50%]">
            <div className="flex flex-col items-start md:items-end w-full">
              {/* Scroll Target */}
              <div id="calendar-scroll-target" className="h-0" />

              <Cal
                namespace="30min"
                calLink="adnan-ghaffar/30min"
                style={{ width: "100%", height: "790px", overflow: "scroll" }}
                config={{ layout: "month_view", theme: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendlyForm;
