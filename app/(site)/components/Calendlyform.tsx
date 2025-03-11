"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import CalendlyProjectForm from "./CalendlyProjectFooterForm";

declare global {
  interface Window {
    Calendly: any;
  }
}

const CalendlyForm: React.FC = () => {
  const calendlyWidgetRef = useRef<HTMLDivElement | null>(null);
  const [widgetWidth, setWidgetWidth] = useState<string>("86%");

  useEffect(() => {
    const calendlyScriptId = "calendly-widget-script";
    const existingScript = document.getElementById(calendlyScriptId);

    if (!existingScript) {
      const script = document.createElement("script");
      script.id = calendlyScriptId;
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        if (window.Calendly && calendlyWidgetRef.current) {
          window.Calendly.initInlineWidget({
            url: "https://calendly.com/adnanghaffar/30min?timezone=America/New_York",
            parentElement: calendlyWidgetRef.current,
          });
        }
      };

      script.onerror = () => {
        console.error("Failed to load Calendly script.");
      };
    } else {
      // Initialize Calendly widget if the script is already loaded
      if (window.Calendly && calendlyWidgetRef.current) {
        window.Calendly.initInlineWidget({
          url: "https://calendly.com/adnanghaffar/30min?timezone=America/New_York",
          parentElement: calendlyWidgetRef.current,
        });
      }
    }

  },[]);

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
            <div className="flex flex-col flex-center md:flex-end">
              <h3 className="text-2xl md:text-3xl text-left leading-[52px] text-[#3C3C3C] font-poppins">
                Book a Meeting
              </h3>

              <div
                ref={calendlyWidgetRef}
                className="mt-4 p-2 bg-white shadow-lg shadow-slate-500 rounded-[24px] max-md:px-5 border border-slate-300"
                style={{
                  height: "860px",
                  maxWidth: widgetWidth,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendlyForm;
