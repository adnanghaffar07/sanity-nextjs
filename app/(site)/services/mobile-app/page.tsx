'use client';
import React from "react";
import Image from "next/image";
import MobileForm from "../../components/mobile-service-form";
import FloatingConsultButton from "../../components/FloatingConsultantButton";
import PortfolioSection from "../../components/MobilePortfolioSection";
import WhyChoose from "../../components/MobileServiceWhyChoose";
import CategoryTabs from "../../components/MobileServiceApps";
import FaqSection from "../../components/MobileServiceFaq";
import { useState, useEffect } from 'react';
import QuoteModal from "../../components/MobileQuoteModal";
import LiveChatTawk from "../../components/LiveChatTawk";
import MobileIndustries from "../../components/Mobile-App-Industries";
import TechStackSection from "../../components/MobileServiceTechStackSection";
import StatsSection from "../../components/StatsSection";
import Testimonials from "../../components/MobileTestimonials";
import FreeTrial from "../../components/MobileFreeTrial";
import MobileAppHeader from "../../components/MobileAppHeader";
import CtaSection from "../../components/CTASection";

const categories = {
  "On Demand": [
    { icon: "demand-1.png", label: "Delivery Apps" },
    { icon: "demand-2.png", label: "Grocery Delivery" },
    { icon: "demand-3.png", label: "E-commerce Delivery" },
    { icon: "demand-4.png", label: "Laundry Services" },
    { icon: "demand-5.png", label: "Concierge Services" },
  ],
  Services: [
    { icon: "srvc-1.png", label: "Beauty & Salon Booking" },
    { icon: "srvc-2.png", label: "Healthcare Management" },
    { icon: "srvc-3.png", label: "Logistics Coordination" },
    { icon: "srvc-4.png", label: "Transportation Apps" },
    { icon: "srvc-5.png", label: "Real Estate Platforms" },
  ],
  Others: [
    { icon: "other-1.png", label: "Education Apps" },
    { icon: "other-2.png", label: "Fitness Trackers" },
    { icon: "other-3.png", label: "Freelancer Marketplaces" },
    { icon: "other-4.png", label: "E-commerce Solutions" },
    { icon: "other-5.png", label: "Peer-to-Peer Networks" },
  ],
  Marketplace: [
    { icon: "market-1.png", label: "Service Marketplaces" },
    { icon: "market-2.png", label: "Rental Platforms" },
    { icon: "market-3.png", label: "Social Media Apps" },
    { icon: "market-4.png", label: "Dating Applications" },
  ],
  Solutions: [
    { icon: "solution-1.png", label: "On Demand Apps" },
    { icon: "solution-2.png", label: "Consultation" },
    { icon: "solution-3.png", label: "Pharmacy Delivery" },
    { icon: "solution-4.png", label: "Pickup & Delivery" },
  ],
};
const leftSteps = [
  {
    title: "Development",
    description:
      "Our experienced developers bring your design to life, building a fully functional app and keeping you updated throughout every stage of the process.",
  },
  {
    title: "QA & Deployment",
    description:
      "Our QA team ensures a seamless, bug-free experience, while our DevOps experts handle deployment on both the App Store and Google Play for a smooth, successful launch.",
  },
];
const steps = [
  {
    step: "Step 1",
    title: "Requirements Analysis",
    description:
      "We start by understanding your vision, gathering detailed requirements, and brainstorming creative solutions to build a solid foundation for your app.",
    icon: "/step1.png", // Replace with your icon path
  },
  {
    step: "Step 2",
    title: "App Storyboard Design",
    description:
      "Our talented designers create visually captivating app screens that reflect your brand’s identity, ensuring user-centric designs that exceed expectations.",
    icon: "/step2.png",
  },
  {
    step: "Step 3",
    title: "Development",
    description:
      "Our experienced developers bring your design to life, building a fully functional app and keeping you updated throughout every stage of the process.",
    icon: "/step3.png",
  },
  {
    step: "Step 4",
    title: "QA & Deployment",
    description:
      "Our QA team ensures a seamless, bug-free experience, while our DevOps experts handle deployment on both the App Store and Google Play for a smooth, successful launch.",
    icon: "/step4.png",
  },
];

const rightSteps = [
  {
    title: "Requirements Analysis",
    description:
      "We start by understanding your vision, gathering detailed requirements, and brainstorming creative solutions to build a solid foundation for your app.",
  },
  {
    title: "App Storyboard Design",
    description:
      "Our talented designers create visually captivating app screens that reflect your brand’s identity, ensuring user-centric designs that exceed expectations.",
  },
];
const features = [
  {
    icon: "/app-1.png",
    tag: "Affordable Pricing",
    description: "Get quality apps at prices that fit your budget."
  },
  {
    icon: "/app-2.png",
    tag: "Timely Delivery",
    description: "We deliver on time, every time—no compromises."
  },
  {
    icon: "/app-3.png",
    tag: "Error-Free",
    description: "Thorough testing ensures smooth, bug-free apps."
  },
  {
    icon: "/app-4.png",
    tag: "Quick Turnaround",
    description: "Rapid releases and updates with minimal downtime."
  },
  {
    icon: "/app-5.png",
    tag: "Confidentiality",
    description: "Your ideas are safe with our NDA protection."
  },
  {
    icon: "/app-6.png",
    tag: "Easily",
    description: "A dedicated manager keeps your project on track."
  },
  {
    icon: "/app-7.png",
    tag: "Beautiful Design",
    description: "Intuitive, beautiful designs for a great user experience."
  },
];
const servicesLeft = [
  {
    title: "Conceptualization & Strategy",
    description:
      "We turn your business goals into a strategic roadmap for a successful app.",
    icon: "/mobile-1.png",
  },
  {
    title: "UI/UX Design",
    description:
      "Our team creates intuitive, engaging interfaces for a seamless user experience.",
    icon: "/mobile-2.png",
  },
  {
    title: "Development & Coding",
    description:
      "Robust, scalable mobile apps built for top performance and future growth.",
    icon: "/mobile-3.png",
  },
];

const servicesRight = [
  {
    title: "Testing & Quality Assurance",
    description:
      "Rigorous testing ensures an error-free, high-performance app before launch.",
    icon: "/mobile-4.png",
  },
  {
    title: "Deployment & Launch",
    description:
      "Smooth, timely deployment to the App Store and Google Play.",
    icon: "/mobile-5.png",
  },
  {
    title: "Post-Launch Support",
    description:
      "Ongoing support to keep your app updated and performing at its best.",
    icon: "/mobile-6.png",
  },
];
const techCategories = {
  Languages: [
    { icon: "lang-1.png", name: "Swift" },
    { icon: "lang-2.png", name: "Kotlin" },
    { icon: "lang-3.png", name: "Java" },
    { icon: "lang-4.png", name: "JavaScript (React Native)" },
    { icon: "lang-5.png", name: "Dart (Flutter)" },
  ],
  Frameworks: [
    { icon: "frame-1.png", name: "Xcode" },
    { icon: "frame-2.png", name: "Android Studio" },
    { icon: "frame-3.png", name: "React Native" },
    { icon: "frame-4.png", name: "Flutter" },
    { icon: "frame-5.png", name: "Node.js" },
  ],
  Databases: [
    { icon: "db-1.png", name: "MongoDB" },
    { icon: "db-2.png", name: "MySQL" },
    { icon: "db-3.png", name: "MS SQL" },
    { icon: "db-4.png", name: "PostgreSQL" },
  ],
  Backend: [
    { icon: "frame-5.png", name: "Node.js" },
    { icon: "back-1.png", name: "GraphQL" },
    { icon: "back-2.png", name: "Laravel" },
    { icon: "lang-3.png", name: "Core Java" },
  ],
};


export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [isFloatingDrawerOpen, setIsFloatingDrawerOpen] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 5000); // 👈 3 seconds delay

    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      <MobileAppHeader />
      <LiveChatTawk />
      <div className="relative w-full font-light text-white overflow-hidden pb-12 md:pb-0 lg:min-h-[700px] pt-[80px] md:pt-[100px]">
        {/* Background */}
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/mobile-app-bg.png"
          alt="Services"
        />

        {/* Heading */}
        <h1 className="relative z-10 text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center pt-10">
          Custom Mobile App Development Services
        </h1>

        {/* Main Grid */}
        <div className="relative z-10 px-4 sm:px-6 md:px-10 2xl:px-20 mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4 2xl:gap-10 items-start">

          {/* Left - Image (Desktop Only) */}
          <div className="hidden md:flex justify-center">
            <img
              className=" md:h-[400px] lg:h-[600px] object-contain"
              src="/mobile-banner-image.png"
              alt="Banner"
            />
          </div>

          {/* Middle - Text */}
          <div className="text-white space-y-3 text-center lg:text-left">
            <p className="lg:text-center text-left sm:text-lg md:text-xl">
              We help entrepreneurs and businesses turn <span className="font-semibold">APP</span> ideas into reality.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 gap-4 text-sm">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-2 text-left"
                >
                  <div className="w-8 h-8 md:mb-2 text-yellow-400 flex-shrink-0">
                    <Image
                      src={feature.icon ?? "/default-icon.png"}
                      alt={feature.tag}
                      width={52}
                      height={52}
                      className="-mt-1"
                    />
                  </div>
                  <div>
                    <span className="inline-block text-center bg-[#F7E022] text-black w-[120px] font-medium text-xs px-2 py-0.5 rounded">
                      {feature.tag}
                    </span>
                    <span className="ml-2 text-white">— {feature.description}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Phone */}
            <a
              href="tel:+18505584691"
              className="text-lg sm:text-xl mt-4 flex font-bold items-center justify-center space-x-2 text-white hover:text-yellow-400 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 sm:w-8 h-6 sm:h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.16 3.49a1 1 0 01-.27 1.09l-1.47 1.47a16.018 16.018 0 006.36 6.36l1.47-1.47a1 1 0 011.09-.27l3.49 1.16a1 1 0 01.68.95V19a2 2 0 01-2 2h-1c-9.39 0-17-7.61-17-17V5z"
                />
              </svg>
              <span>+1-850-558-4691</span>
            </a>

            {/* Chat & Quote */}
            <div className="mt-1 flex flex-row items-center justify-center space-x-3 text-white text-base">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (typeof window !== 'undefined' && (window as any).Tawk_API?.toggle) {
                    (window as any).Tawk_API.toggle();
                  } else {
                    console.warn('Tawk_API not ready yet.');
                  }
                }}
                className="hover:text-yellow-400 underline transition-colors mb-2"
              >
                Start A Live Chat
              </a>
              <span className="hidden sm:inline">|</span>
              <button
                onClick={() => setIsModalOpen(true)}
                className="hover:text-yellow-400 mb-2 underline transition-colors"
              >
                Request a Free Quote
              </button>
            </div>

            <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </div>

          {/* Right - Contact Form */}
          <section id="form" className="w-full">
            <MobileForm />
          </section>
        </div>
      </div>

      {/* Stats Section */}
      <StatsSection />
      {/* Industries We Serve */}
      <div id="industries">
        <MobileIndustries />
      </div>
      {/* Notification */}
    {!isModalOpen && !isFloatingDrawerOpen && showNotification && (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 sm:left-6 sm:translate-x-0 z-[9999] w-[300px] sm:w-[320px]">
        {/* Main Card - Clean & Minimal */}
        <div className="relative bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            {/* Status Indicator */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#1D92FB] to-blue-400"></div>
            
            {/* Close Button */}
            <button
                onClick={() => setShowNotification(false)}
                className="absolute top-3 right-3 w-6 h-6 rounded-full text-gray-400 hover:text-gray-600 flex items-center justify-center transition-colors"
                aria-label="Close"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <div className="p-4">
                {/* Header - Compact */}
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-[#1D92FB] flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900">Get expert help</h3>
                        <p className="text-xs text-gray-500">Response in <span className="text-green-600">&lt;2min</span></p>
                    </div>
                </div>

                {/* Action Buttons - Horizontal */}
                <div className="flex items-center gap-2">
                    {/* Chat Button */}
                    <button
                        onClick={() => {
                            if (typeof window !== "undefined" && (window as any).Tawk_API?.toggle) {
                                (window as any).Tawk_API.toggle();
                                setShowNotification(false);
                            }
                        }}
                        className="flex-1 flex items-center justify-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium py-2 px-3 rounded-lg transition-colors"
                    >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <span>Chat</span>
                    </button>

                    {/* Meeting Button */}
                    <a
                        href="https://calendly.com/adnanghaffar/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setShowNotification(false)}
                        className="flex-1 flex items-center justify-center gap-1.5 bg-[#1D92FB] hover:bg-blue-600 text-white text-xs font-medium py-2 px-3 rounded-lg transition-colors"
                    >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>Schedule</span>
                    </a>
                </div>

                {/* Footer - Compact */}
                <div className="flex items-center justify-between mt-3 pt-2 border-t border-gray-100">
                    <div className="flex items-center gap-1.5">
                        <div className="flex -space-x-1">
                            <div className="w-5 h-5 rounded-full bg-[#1D92FB]/10 border border-white flex items-center justify-center">
                                <span className="text-[8px] font-medium text-[#1D92FB]">JD</span>
                            </div>
                            <div className="w-5 h-5 rounded-full bg-purple-100 border border-white flex items-center justify-center">
                                <span className="text-[8px] font-medium text-purple-600">AK</span>
                            </div>
                        </div>
                        <span className="text-xs text-gray-500">Online</span>
                    </div>
                    <span className="text-xs text-gray-400">Free consult</span>
                </div>
            </div>
        </div>
    </div>
)}

{/* Simple Animation */}
<style jsx>{`
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translate(-50%, 10px);
        }
        to {
            opacity: 1;
            transform: translate(-50%, 0);
        }
    }
    
    @media (min-width: 640px) {
        @keyframes slideUp {
            from {
                opacity: 0;
                transform: translate(0, 10px);
            }
            to {
                opacity: 1;
                transform: translate(0, 0);
            }
        }
    }
    
    .fixed {
        animation: slideUp 0.3s ease-out forwards;
    }
`}</style>

      {/* Sticky Floating Button */}
      <FloatingConsultButton
        isModalOpen={isModalOpen}
        setIsFloatingDrawerOpen={setIsFloatingDrawerOpen}
      />
      <section
        id="services"
        className="bg-[url('/what-we-do.jpeg')] bg-cover bg-center py-10 md:py-16 px-4 lg:px-20 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Our Services
        </h2>
        <h3 className="text-lg text-white mb-6 md:mb-10">What We Do</h3>
        <div className="hidden md:flex flex-col gap-10 items-center max-w-7xl mx-auto">
          {/* Left services */}
          <div className="flex flex-col md:flex-row text-right gap-6">
            {servicesLeft.map((service, index) => (
              <div
                key={index}
                className="flex flex-row items-start space-x-4"
              >
                <Image
                  src={service.icon ?? "/default-icon.png"}
                  alt={service.title}
                  width={90}
                  height={60}
                  className="md:block hidden h-12 w-12 objetct-contain"
                />
                <div className="text-left space-y-1">
                  <h4 className="font-bold text-white text-lg">{service.title}</h4>
                  <p className="text-white text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Center Phone Image */}
          <div className="flex justify-center">
            <Image
              src="/process-img-home.png"
              alt="Mobile App Preview"
              width={1000}
              height={100}
              className="mx-auto h-8 w-[300px] md:h-[250px] md:w-[1000px] object-contain"
            />
          </div>

          {/* Right services */}
          <div className="flex flex-col md:flex-row text-right gap-6 mb-10">
            {servicesRight.map((service, index) => (
              <div
                key={index}
                className="flex flex-row items-start space-x-4"
              >
                <Image
                  src={service.icon ?? "/default-icon.png"}
                  alt={service.title}
                  width={60}
                  height={60}
                  className="md:block hidden h-12 w-12 objetct-contain"
                />

                <div className="text-left space-y-1">
                  <h4 className="font-bold text-white text-lg">{service.title}</h4>
                  <p className="text-white text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Mobile View */}
        <div className="md:hidden flex-col gap-10 items-center max-w-7xl mx-auto">
          {/* Center Phone Image */}
          <div className="md:hidden flex justify-center">
            <Image
              src="/process-img-home.png"
              alt="Mobile App Preview"
              width={1000}
              height={300}
              className="mx-auto mb-6 h-16 w-[300px] md:h-[250px] md:w-[1000px] object-contain"
            />
          </div>

          <div className="flex flex-row gap-4">
            {/* Left services */}
            <div className="flex flex-col md:flex-row text-right gap-6">
              {servicesLeft.map((service, index) => (
                <div
                  key={index}
                  className="flex flex-row items-start space-x-4"
                >
                  <Image
                    src={service.icon ?? "/default-icon.png"}
                    alt={service.title}
                    width={60}
                    height={60}
                    className="md:block hidden"
                  />
                  <div className="text-left space-y-1">
                    <h4 className="font-bold text-white text-sm">{service.title}</h4>
                    <p className="text-white text-xs">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Right services */}
            <div className="flex flex-col md:flex-row text-right gap-6">
              {servicesRight.map((service, index) => (
                <div
                  key={index}
                  className="flex flex-row items-start space-x-4"
                >
                  <Image
                    src={service.icon ?? "/default-icon.png"}
                    alt={service.title}
                    width={60}
                    height={60}
                    className="md:block hidden"
                  />

                  <div className="text-left space-y-1">
                    <h4 className="font-bold text-white text-sm">{service.title}</h4>
                    <p className="text-white text-xs">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <a
            href="https://calendly.com/adnanghaffar/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1D92FB] hover:bg-blue-700 hover:text-white bg-white font-semibold px-8 py-3 rounded-md transition duration-300"
          >
            Schedule a Call
          </a>
        </div>
      </section>

      {/* How we DO Section */}
      <section className="py-10 md:py-20 bg-white text-center px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          How We Do It
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Our clear and transparent process turns your ideas into successful mobile apps,
          guiding you every step of the way.
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white border-t-2 border-b-2 border-[#0A8FFC] rounded-xl shadow-lg hover:shadow-xl transition py-10 px-6 text-left"
            >
              {/* Step number + Icon */}
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm text-gray-500">{step.step}</p>
                <img src={step.icon} alt={step.title} className="object-contain h-8" />
              </div>

              {/* Step title */}
              <h3 className="font-semibold text-[#0A8FFC] mb-2">{step.title}</h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#1D92FB] hover:bg-blue-600 cursor-pointer text-white font-semibold px-8 py-3 mt-10 rounded-md transition duration-300"
        >
          LET’S TALK
        </button>
      </section>

      <div id="portfolio">
        <PortfolioSection />
      </div>
      <WhyChoose />
      <TechStackSection />
      <CategoryTabs />
      <FreeTrial />
     <CtaSection/>
      <Testimonials />
      {/* Faq Section */}
      <FaqSection />
    </>
  );
}
