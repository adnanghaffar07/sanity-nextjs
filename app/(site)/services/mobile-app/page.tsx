'use client';
import React from "react";
import Image from "next/image";
import MobileForm from "../../components/mobile-service-form";
import FloatingConsultButton from "../../components/FloatingConsultantButton";
import PortfolioSection from "../../components/MobilePortfolioSection";
import WhyChoose from "../../components/MobileServiceWhyChoose";
import CategoryTabs from "../../components/MobileServiceApps";
import FaqSection from "../../components/MobileServiceFaq";
import { useState } from 'react';
import QuoteModal from "../../components/MobileQuoteModal";
import LiveChatTawk from "../../components/LiveChatTawk";
import MobileIndustries from "../../components/Mobile-App-Industries";

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

const stats = [
  {
    icon: "/industries.png", // replace with your image path
    number: "15+",
    label: "Industries Served",
  },
  {
    icon: "/clients.png",
    number: "80+",
    label: "Global Clients",
  },
  {
    icon: "/projects.png",
    number: "100+",
    label: "Successful Project",
  },
  {
    icon: "/experience.png",
    number: "10+",
    label: "Years of Experience",
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
  const [showNotification, setShowNotification] = useState(true);
  const [isFloatingDrawerOpen, setIsFloatingDrawerOpen] = useState(false);



  return (
    <section>
      <LiveChatTawk />
      <div className="relative w-full font-light text-white overflow-hidden pb-12 lg:min-h-[700px]">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/mobile-app-bg.png"
          alt="Services"
        />

        <div className="relative z-10 px-4 sm:px-6 md:px-16 lg:px-24 mt-32 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start min-h-[60vh]">
          {/* Left - Image */}
          <div className="hidden md:flex justify-center items-end">
            <img
              className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[450px] lg:-mb-[180px]"
              src="/mobile-banner-image.png"
              alt="Banner"
            />
          </div>

          {/* Middle - Text */}
          <div className="text-white space-y-6 text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Custom Mobile App Development Services
            </h1>
            <p className="text-base sm:text-lg md:text-xl">
              We help entrepreneurs and businesses turn <span className="font-semibold">APP</span> ideas into reality.
            </p>

            <div className="grid grid-cols-1 gap-4 text-sm">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <div className="w-8 h-8 text-yellow-400">
                    <Image src={feature.icon ?? "/default-icon.png"} alt={feature.tag} width={52} height={52} />
                  </div>
                  <div>
                    <span className="inline-block bg-[#F7E022] text-black font-medium text-xs px-2 py-0.5 rounded">
                      {feature.tag}
                    </span>
                    <span className="ml-2 text-white">— {feature.description}</span>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="tel:+18505584691"
              className="text-lg sm:text-xl mt-6 flex font-bold items-center justify-center space-x-2 text-white hover:text-yellow-400 transition-colors"
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

            <div className="mt-2 flex flex-row items-center justify-center space-x-3 text-white text-base">
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
                className="hover:text-yellow-400 underline transition-colors mb-2  text-center sm:text-left"
              >
                Start A Live Chat
              </a>
              <span className="sm:inline">|</span>
              <button
                onClick={() => setIsModalOpen(true)}
                className="hover:text-yellow-400 mb-2 underline transition-colors text-left"
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
      <section className="bg-[#001E6B] py-10">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-white">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center sm:flex-row sm:text-left sm:items-center sm:space-x-4"
              >
                {/* Icon */}
                <img
                  src={stat.icon}
                  alt={stat.label}
                  className="h-12 w-12 object-contain mb-2 sm:mb-0"
                />

                {/* Text */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold">{stat.number}</h3>
                  <p className="text-sm">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Industries We Serve */}
      <MobileIndustries />
      {/* Notification */}

      {!isModalOpen && !isFloatingDrawerOpen && showNotification && (
        <div className="fixed bottom-6 left-6 z-[9999] bg-white rounded-2xl shadow-lg border border-gray-200 p-5 w-[250px] sm:w-[360px]">
          {/* ❌ Close Button */}
          <button
            onClick={() => setShowNotification(false)}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl"
            aria-label="Close"
          >
            &times;
          </button>

          {/* Header */}
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Need Help?</h3>

          {/* Body */}
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            Talk to our team. Start a chat or schedule a call now.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
            <button
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).Tawk_API?.toggle) {
                  (window as any).Tawk_API.toggle();
                } else {
                  alert("Chat is loading, please try again shortly.");
                }
              }}
              className="bg-[#1D92FB] hover:bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-lg transition"    >
              💬 Start Chat
            </button>

            <a
              href="https://cal.com/adnan-ghaffar/mobile-service"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 hover:bg-yellow-500 text-black text-sm font-medium py-2 px-4 rounded-lg text-center shadow-md transition"
            >
              Book a Meeting
            </a>
          </div>
        </div>

      )}

      {/* Sticky Floating Button */}
      <FloatingConsultButton
        isModalOpen={isModalOpen}
        setIsFloatingDrawerOpen={setIsFloatingDrawerOpen}
      />


      <section
        className="bg-[url('/what-we-do.png')] bg-cover bg-center py-16 px-4 lg:px-20 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Our Services
        </h2>
        <h3 className="text-lg text-white mb-10">What We Do</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center max-w-7xl mx-auto">
          {/* Left services */}
          <div className="space-y-10 text-right">
            {servicesLeft.map((service, index) => (
              <div
                key={index}
                className="flex md:flex-row-reverse items-start space-x-4 md:space-x-reverse"
              >
                <Image
                  src={service.icon ?? "/default-icon.png"}
                  alt={service.title}
                  width={30}
                  height={30}
                />
                <div className="text-left md:text-right space-y-3">
                  <h4 className="font-bold text-white text-lg">{service.title}</h4>
                  <p className="text-white text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Center Phone Image */}
          <div className="flex justify-center">
            <Image
              src="/mobile-service.png"
              alt="Mobile App Preview"
              width={280}
              height={600}
              className="mx-auto"
            />
          </div>

          {/* Right services */}
          <div className="space-y-10 text-left">
            {servicesRight.map((service, index) => (
              <div key={index} className="flex items-start space-x-4">
                <Image src={service.icon ?? "/default-icon.png"} alt={service.title} width={30} height={30} />
                <div className="space-y-3">
                  <h4 className="font-bold text-white text-lg">{service.title}</h4>
                  <p className="text-white text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <a
            href="https://cal.com/adnan-ghaffar/mobile-service"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1D92FB] hover:bg-blue-700 hover:text-white bg-white font-semibold px-8 py-3 rounded-md transition duration-300"
          >
            Schedule a Call
          </a>
        </div>
      </section>

      {/* How we DO Section */}
      <section className="py-20 bg-white text-center px-4">
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

      <PortfolioSection />
      {/* Expert in Android & iOS App Development Services */}
      <section className="py-16 px-4 bg-white max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Expert in Android & iOS App Development Services
        </h2>
        <p className="text-gray-600 max-w-4xl mx-auto mb-12">
          With over 13 years of hands-on experience, CodeAutomation has delivered mobile app solutions across a wide range of industries.
          From Healthcare and Fintech to AR/VR, Logistics, Real Estate and IoT, our expertise spans diverse verticals.
          We adapt quickly to your market needs and showcase proven results with apps tailored to each domain’s unique challenges.
          Whether it’s an enterprise-grade app or a nimble startup MVP, we bring deep industry knowledge to fuel your success.
        </p>

        <h3 className="text-xl md:text-2xl font-semibold mb-10">Mobile App Categories</h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-left text-sm md:text-base">
          {Object.entries(categories).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-semibold mb-3">{category}</h4>
              <ul className="space-y-0">
                {items.map((item) => (
                  <li key={item.label} className="flex items-center space-x-2">
                    <Image
                      src={`/${item.icon}`}
                      alt={item.label}
                      width={30}
                      height={30}
                      className="shrink-0 h-16 object-contain"
                    />
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-gray-700 mt-12 font-bold">
          Our cross-platform app development approach ensures scalable, secure, and user-friendly apps across these categories.
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-8 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-md font-semibold">
          LET’S TALK
        </button>
      </section>
      <WhyChoose />
      {/* TEch STack */}
      <section className="py-16 px-4 bg-white max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Cutting-Edge Tech Stack to Power Your Mobile App
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          We leverage these technologies to deliver mobile apps that are scalable, secure, and tailored to your startup’s needs
          combining native performance with cross-platform flexibility to maximize reach and ROI.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-left text-sm md:text-base">
          {Object.entries(techCategories).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-6">
                {items.map((item) => (
                  <li key={item.name} className="flex items-center gap-3">
                    <Image
                      src={`/${item.icon}`}
                      alt={item.name}
                      width={20}
                      height={20}
                      className="shrink-0"
                    />
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-8 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-md font-semibold">
          LET’S TALK
        </button>
      </section>
      <CategoryTabs />
      {/* Call to Action */}
      <section className="relative py-20 px-4 max-w-7xl mx-auto flex justify-center">
        {/* Container Box */}
        <div className="relative bg-[#DAEEFF] rounded-2xl shadow-lg max-w-6xl w-full flex flex-col md:flex-row px-8 py-12 overflow-hidden z-10">

          {/* Top-left floating image */}
          <Image
            src="/vector-top.png"
            alt="Top left shape"
            width={200}
            height={200}
            className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3"
          />

          {/* Bottom-left floating image */}
          <Image
            src="/vector-bottom.png"
            alt="Bottom left shape"
            width={600}
            height={600}
            className="absolute bottom-0 left-0 -translate-x-1/3 translate-y-1/3"
          />

          {/* Left Content */}
          <div className="flex-1 z-10 md:py-10 pl-10">
            <h2 className="text-2xl md:text-3xl max-w-sm font-bold mb-4">
              Don’t Let Your Competitors Get Ahead While You Wait
            </h2>
            <h3 className="text-xl max-w-sm font-bold">Limited slots available — claim your free consultation now.</h3>
            <p className="text-gray-600 mb-6 max-w-md">
              Our calendar fills up fast because startups trust us to deliver fast, reliable results.      </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (typeof window !== 'undefined' && (window as any).Tawk_API?.toggle) {
                    (window as any).Tawk_API.toggle(); // Open/close the widget
                  } else {
                    console.warn('Tawk_API not ready yet.');
                  }
                }}
                className="bg-[#1D92FB] text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
              >
                Start Live Chat
              </a>
              <a
                href="https://cal.com/adnan-ghaffar/mobile-service"
                target="_blank"
                className="bg-[#F7E022] text-black px-6 py-3 cursor-pointer rounded-md font-semibold hover:bg-yellow-300 transition"
                rel="noopener noreferrer"
              >
                Talk to an Expert Now
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Image (outside the container, overlaps downward) */}
        <div className="absolute bottom-0 right-32 translate-y-1/12 hidden md:block z-10">
          <Image
            src="/cta-mobile.png"
            alt="Mobile device"
            width={500}
            height={400}
            className="h-[500px] object-contain"
          />
        </div>
      </section>
      {/* Faq Section */}
      <FaqSection />

    </section >

  );
}
