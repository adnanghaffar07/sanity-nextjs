'use client';

import Image from "next/image";
import { useState } from "react";
import QuoteModal from "../../../components/MobileQuoteModal";
import Link from "next/link";
import ButtonScrollToSection from "@/app/(site)/components/ButtonScrollToSection";

const MarketingAutomationHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    {
      icon: "/app-1.png",
      tag: "Strategy-First",
      description: "Goals before tools"
    },
    {
      icon: "/app-2.png",
      tag: "AI-Native",
      description: "Built-in intelligence"
    },
    {
      icon: "/app-3.png",
      tag: "Full-Stack",
      description: "Complete control"
    },
    {
      icon: "/app-4.png",
      tag: "Results-Driven",
      description: "Revenue focused"
    },
    {
      icon: "/app-5.png",
      tag: "Transparent",
      description: "Clear reporting"
    },
    {
      icon: "/app-6.png",
      tag: "Dedicated",
      description: "Your time zone"
    },
  ];

  return (
    <div className="flex overflow-hidden relative flex-col pb-12 w-full font-light text-white lg:min-h-[700px] max-md:max-w-full">
      {/* Hero Image - You'll need to replace this with your actual image path */}
      <img
        className="top-0 left-0 object-fit absolute size-full"
        src="/market-hero.jpg" // Replace with your actual image path
        alt="AI-Powered Marketing Automation Background"
      />

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#020C16] opacity-65"></div>

      <div className="flex relative flex-col items-center lg:px-20 px-5 lg:pt-12 lg:pb-0 pt-48 pb-36 w-full max-md:px-5 max-md:max-w-full flex-grow">
        <div className="lg:absolute lg:top-[250px]">

          {/* Headline */}
          <h1 className="lg:text-4xl text-2xl font-bold text-center max-lg:mt-0 lg:w-8/12 mx-auto">
            Turn Your Marketing Into a Revenue-Generating Machine
          </h1>

          {/* Subheadline */}
          <h2 className="lg:text-xl mx-auto max-w-5xl text-base text-center mt-4 max-md:max-w-full lg:px-32">
            Stop losing leads to slow follow-ups and manual processes. We design, build, and deploy intelligent marketing automation systems that nurture prospects, convert customers, and drive growth — on autopilot.
          </h2>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row mx-auto pt-6 space-y-6 sm:space-y-0 sm:space-x-5 items-center justify-center">

            {/* Get a Free Strategy Call Button */}
            {/* <ButtonScrollToSection
              classes="bg-[#1d92fb] text-white cursor-pointer py-3 px-2 font-semibold rounded-lg shadow-lg text-center w-full sm:min-w-48 sm:max-w-72 hover:bg-blue-600 transition-colors"
              content="Get a Free Strategy Call ↗"
              key="strategy-call-button"
              destination="contact-box"
            /> */}
            {/* Explore Our Services Button */}
            <Link
              href="https://calendly.com/adnanghaffar/30min" // Update this with your actual services page URL
              className="bg-[#1d92fb] text-white cursor-pointer py-3 px-2 font-semibold rounded-lg shadow-lg text-center w-full sm:min-w-48 sm:max-w-72 hover:bg-blue-600 transition-colors"
            >
              Get a Free Strategy Call
            </Link>

            {/* Explore Our Services Button */}
            <Link
              href="/services" // Update this with your actual services page URL
              className="bg-[#f7e022] text-black font-semibold py-3 px-2 rounded-lg shadow-lg text-center w-full sm:max-w-72 hover:bg-yellow-400 transition-colors"
            >
              Explore Our Services
            </Link>

          </div>

        </div>
      </div>
    </div>
  );
};

export default MarketingAutomationHero;
