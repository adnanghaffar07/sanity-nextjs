import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import MobileForm from "../../components/mobile-service-form";
import FloatingConsultButton from "../../components/FloatingConsultantButton";
import PortfolioSection from "../../components/MobilePortfolioSection";


export default function HeroSection() {

  const categories = {
    "On Demand": [
      { icon: "delivery.png", label: "Delivery Apps" },
      { icon: "grocery.png", label: "Grocery Delivery" },
      { icon: "ecommerce-delivery.png", label: "E-commerce Delivery" },
      { icon: "laundry.png", label: "Laundry Services" },
      { icon: "concierge.png", label: "Concierge Services" },
    ],
    Services: [
      { icon: "salon.png", label: "Beauty & Salon Booking" },
      { icon: "healthcare.png", label: "Healthcare Management" },
      { icon: "logistics.png", label: "Logistics Coordination" },
      { icon: "transport.png", label: "Transportation Apps" },
      { icon: "real-estate.png", label: "Real Estate Platforms" },
    ],
    Others: [
      { icon: "education.png", label: "Education Apps" },
      { icon: "fitness.png", label: "Fitness Trackers" },
      { icon: "freelancer.png", label: "Freelancer Marketplaces" },
      { icon: "ecommerce.png", label: "E-commerce Solutions" },
      { icon: "p2p.png", label: "Peer-to-Peer Networks" },
    ],
    Marketplace: [
      { icon: "services.png", label: "Service Marketplaces" },
      { icon: "rental.png", label: "Rental Platforms" },
      { icon: "social.png", label: "Social Media Apps" },
      { icon: "dating.png", label: "Dating Applications" },
    ],
    Solutions: [
      { icon: "ondemand.png", label: "On Demand Apps" },
      { icon: "consultation.png", label: "Consultation" },
      { icon: "pharmacy.png", label: "Pharmacy Delivery" },
      { icon: "pickup.png", label: "Pickup & Delivery" },
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

  return (
    <section className="relative w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/mobile-app-bg.jpeg")' }}>
      <div className="relative z-10 px-6 md:px-16 lg:px-24 mt-24 grid grid-cols-1 lg:grid-cols-3 gap-10 items-center min-h-[90vh]">
        {/* Left - Video or Image */}
        <div className="flex justify-center items-center">
          <video
            className="w-[300px] md:w-[400px] lg:w-[450px]"
            src="/banner video.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        {/* Middle - Text Content */}
        <div className="text-white space-y-6 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl text-center text-white font-bold">
            Custom Mobile App Development Services
          </h1>
          <p className="text-lg md:text-xl text-center">
            We help entrepreneurs and businesses turn <span className="font-semibold">APP</span> ideas into reality.
          </p>

          <div className="grid grid-cols-1 gap-4 text-sm">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-2"
              >
                <div className="w-5 h-5 mt-1 text-yellow-400">
                  <Image src={feature.icon ?? "/default-icon.png"} alt={feature.tag} width={30} height={30} />
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
          <a href="tel:+18505584691" className="text-xl mt-6 flex items-center text-white space-x-2 hover:text-yellow-400 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-white"
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

        </div>

        {/* Right - Contact Form */}
        <MobileForm />
      </div>

      {/* Sticky Floating Button */}
      <FloatingConsultButton />

      <section className="bg-white py-16 px-4 lg:px-20 text-center">
        <h3 className="text-lg text-gray-600 mb-1">Our Services</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-10">
          What We Do
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center max-w-7xl mx-auto">
          {/* Left services */}
          <div className="space-y-10 text-right">
            {servicesLeft.map((service, index) => (
              <div
                key={index}
                className="flex flex-row-reverse items-start space-x-4 space-x-reverse"
              >
                <Image
                  src={service.icon ?? "/default-icon.png"}
                  alt={service.title}
                  width={30}
                  height={30}
                />
                <div className="text-right">
                  <h4 className="font-bold text-[#001E6B] text-lg">{service.title}</h4>
                  <p className="text-gray-700 text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Center Phone Image */}
          <div className="flex justify-center">
            <Image
              src="/mobile-service.jpeg"
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
                <div>
                  <h4 className="font-bold text-[#001E6B] text-lg">{service.title}</h4>
                  <p className="text-gray-700 text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <a
            href="#contact-box"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>
      {/* How We DO IT Section */}
      <section className="bg-[#002366] text-white py-20 px-4 lg:px-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Do It</h2>
        <p className="max-w-3xl mx-auto text-sm md:text-base mb-16">
          Our clear and transparent process turns your ideas into successful mobile apps, guiding you every step of the way.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center max-w-7xl mx-auto">
          {/* Left side */}
          <div className="space-y-16 text-right col-span-12 lg:col-span-3">
            {leftSteps.map((step, index) => (
              <div key={index}>
                <h4 className="font-bold text-lg">{step.title}</h4>
                <p className="text-sm text-gray-200">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="relative flex justify-center col-span-12 lg:col-span-6">
            <img
              src="/how-we-do.png"
              alt="Process Preview"
              width={400}
              height={800}
              className="mx-auto"
            />
          </div>

          {/* Right side */}
          <div className="space-y-16 text-left col-span-12 lg:col-span-3">
            {rightSteps.map((step, index) => (
              <div key={index}>
                <h4 className="font-bold text-lg">{step.title}</h4>
                <p className="text-sm text-gray-200">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        {/* CTA Button */}
        <div className="mt-16">
          <a
            href="#contact-box"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-full transition duration-300"
          >
            LET’S TALK
          </a>
        </div>
      </section>
      <PortfolioSection />
       <section className="py-16 px-4 bg-white max-w-7xl mx-auto text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Expert in Android & iOS App Development Services
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto mb-12">
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
            <ul className="space-y-3">
              {items.map((item) => (
                <li key={item.label} className="flex items-center space-x-2">
                  <Image
                    src={`/icons/${item.icon}`}
                    alt={item.label}
                    width={20}
                    height={20}
                    className="shrink-0"
                  />
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="text-gray-700 mt-12 font-medium">
        Our cross-platform app development approach ensures scalable, secure, and user-friendly apps across these categories.
      </p>

      <button className="mt-8 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-md font-semibold">
        LET’S TALK
      </button>
    </section>
    </section>

  );
}
