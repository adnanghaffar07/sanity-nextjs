"use client";

import React, { useEffect, useRef, useState } from "react";
import CalendlyProjectForm from "./CalendlyProjectFooterForm";

declare global {
  interface Window {
    Calendly: any;
  }
}

const CalendlyForm: React.FC = () => {
  const calendlyWidgetRef = useRef<HTMLDivElement | null>(null);
  const [widgetHeight, setWidgetHeight] = useState<number>(860);
  const [widgetWidth, setWidgetWidth] = useState<string>("86%");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setWidgetHeight(860);
        setWidgetWidth("100%");
      } else if (window.innerWidth <= 1023) {
        setWidgetHeight(860);
        setWidgetWidth("100%");
      } else {
        setWidgetHeight(860);
        setWidgetWidth("86%");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial dimensions based on current window size

    const calendlyScriptId = "calendly-widget-script";
    const existingScript = document.getElementById(calendlyScriptId);

    if (!existingScript) {
      const script = document.createElement("script");
      script.id = calendlyScriptId;
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        if (
          calendlyWidgetRef.current &&
          !calendlyWidgetRef.current.hasChildNodes()
        ) {
          try {
            window.Calendly.initInlineWidget({
              url: "https://calendly.com/adnanghaffar/30min?timezone=America/New_York",
              parentElement: calendlyWidgetRef.current,
            });
          } catch (error) {
            console.error("Error initializing Calendly widget:", error);
          }
        }
      };

      script.onerror = () => {
        console.error("Failed to load Calendly script.");
      };
    } else {
      if (
        calendlyWidgetRef.current &&
        !calendlyWidgetRef.current.hasChildNodes()
      ) {
        try {
          window.Calendly.initInlineWidget({
            url: "https://calendly.com/adnanghaffar/30min?timezone=America/New_York",
            parentElement: calendlyWidgetRef.current,
          });
        } catch (error) {
          console.error("Error initializing Calendly widget:", error);
        }
      }
    }

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative flex flex-col w-full mx-auto max-md:max-w-full">
      <div className="absolute inset-0 bg-[#1D92FB] opacity-10"></div>
      <div className="relative px-6 xl:px-8 2xl:px-16 py-6 md:py-16 flex justify-center">
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-20 2xl:gap-32 max-w-7xl mx-auto">
          {/* Left Side: Form */}
          <div className="flex flex-col w-full lg:w-[45%] self-center md:pb-0 pb-10 md:ml-24">
            <div className="flex flex-col text-black mt-10 mb-10 md:mt-0 max-w-full md:ml-3">
              <h3 className="text-2xl md:text-3xl text-left font-bold leading-[52px] mb-4 text-[#3C3C3C]">
                Ready to innovate your business?
              </h3>
              <p className="text-lg text-left text-[#3C3C3C] mb-10 leading-[32px] max-w-full">
                We are here! Let’s kick-off our journey to success!
              </p>
              <div className="max-w-[500px]">
                <CalendlyProjectForm />
              </div>
            </div>
          </div>

          {/* Right Side: Calendar */}
          <div className="flex flex-col w-full lg:w-[50%] ">
            <div className="flex flex-col flex-end">
              <div className="text-2xl md:text-3xl text-left font-semibold leading-[52px] text-[#3C3C3C]">
                Book a meeting
              </div>
              {/* <div className="flex gap-3 items-start mt-4 whitespace-nowrap">
                                <img
                                    loading="lazy"
                                    src="/Phone-form.png"
                                    className="object-contain w-5"
                                />
                                <div>850-558-4691</div>
                            </div> */}
              {/* <div className="flex gap-3 items-start mt-4 whitespace-nowrap">
                                <img
                                    loading="lazy"
                                    src="/maik-form.png"
                                    className="object-contain w-5"
                                />
                                <div>info@codeautomation.ai</div>
                            </div> */}
              {/* <div className="flex gap-3 items-center mt-4">
                                <img
                                    loading="lazy"
                                    src="/Call-form.png"
                                    className="object-contain w-5"
                                />
                                <div>30 min</div>
                            </div> */}

              <div
                ref={calendlyWidgetRef}
                id="calendly-inline-widget"
                className="mt-4 p-2 bg-white rounded-3xl"
                style={{ height: `${widgetHeight}px`, maxWidth: widgetWidth }}
              >
                {/* Calendly Inline Widget will be injected here */}
              </div>
              {/* <p className="text-lg text-left text-[#3C3C3C] mt-4 leading-[32px]">
                * US and Canada, exceptions apply
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendlyForm;
