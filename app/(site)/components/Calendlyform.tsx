"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import CalendlyProjectForm from "./CalendlyProjectFooterForm";
import { client } from "@/sanity/lib/client";

declare global {
  interface Window {
    Calendly: any;
  }
}

const CalendlyForm: React.FC = () => {
  const calendlyWidgetRef = useRef<HTMLDivElement | null>(null);
  const [widgetWidth, setWidgetWidth] = useState<string>("86%");

  const handleCalendlyEvent = useCallback(async (event: MessageEvent) => {
    if (event.data.event !== "calendly.event_scheduled") return;

    const { uri: eventUri } = event.data.payload.event;
    const { uri: inviteeUri } = event.data.payload.invitee;
    const token = process.env.NEXT_PUBLIC_CALENDLY_API_KEY;

    if (!token) {
      console.error("API token is missing.");
      return;
    }

    try {
      // Fetch event and invitee data concurrently
      const [eventResponse, inviteeResponse] = await Promise.all([
        fetch(eventUri, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }),
        fetch(inviteeUri, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }),
      ]);

      if (!eventResponse.ok || !inviteeResponse.ok) {
        console.error(
          "Error fetching event or invitee data",
          eventResponse.status,
          eventResponse.statusText
        );
        return;
      }

      const eventData = await eventResponse.json();
      const inviteeData = await inviteeResponse.json();

      const notes = inviteeData?.resource?.questions_and_answers?.map(
        (q: any) => q.answer
      ) || [];

      const bookingData = {
        _type: "calendlyMeeting",
        name: inviteeData?.resource?.name || "Unknown",
        email: inviteeData?.resource?.email || "Unknown",
        meetingStart: eventData?.resource?.start_time || null,
        meetingEnd: eventData?.resource?.end_time || null,
        notes,
      };

      // Send data to Sanity
      const sanityResponse = await client.create(bookingData);
      if (!sanityResponse) {
        console.error("Failed to create document in Sanity");
      }
    } catch (error) {
      console.error("Error processing Calendly event data:", error);
    }
  }, []);

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
          window.addEventListener("message", handleCalendlyEvent);
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
        window.addEventListener("message", handleCalendlyEvent);
      }
    }

    return () => {
      window.removeEventListener("message", handleCalendlyEvent);
    };
  }, [handleCalendlyEvent]);

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
              <div className="text-2xl md:text-3xl text-left leading-[52px] text-[#3C3C3C] font-poppins">
                Book a Meeting
              </div>

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
