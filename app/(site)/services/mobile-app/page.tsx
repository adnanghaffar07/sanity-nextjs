import React from "react";
import Image from "next/image";
import MobileForm from "../../components/mobile-service-form";
import FloatingConsultButton from "../../components/FloatingConsultantButton";
import PortfolioSection from "../../components/MobilePortfolioSection";
import WhyChoose from "../../components/MobileServiceWhyChoose";
import CategoryTabs from "../../components/MobileServiceApps";
import FaqSection from "../../components/MobileServiceFaq";
import ButtonScrollToSection from "../../components/ButtonScrollToSection";


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

  return (
    <section>

      <div className="flex overflow-hidden relative flex-col pb-12 w-full font-light text-white lg:min-h-[700px] max-md:max-w-full">
        <img
          className="absolute top-0 left-0 object-cover inset-0 size-full"
          src="/mobile-app-bg.jpeg"
          alt="Services"
        />
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
          <div className="text-white space-y-6 text-center md:mt-12 2xl:mt-3 lg:text-left">
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
                    <Image src={feature.icon ?? "/default-icon.png"} alt={feature.tag} width={32} height={32} />
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
            href="https://calendly.com/adnanghaffar"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1D92FB] hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-md transition duration-300"
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
          <ButtonScrollToSection
            classes="bg-[#1D92FB] hover:bg-blue-600 cursor-pointer text-white font-semibold px-8 py-3 rounded-md transition duration-300"
            content="LET’S TALK"
            key="first-button"
            destination="contact-box"
          />
        </div>
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
        <a
          href="https://calendly.com/adnanghaffar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="mt-8 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-md font-semibold">
            LET’S TALK
          </button>
        </a>
      </section>
      <WhyChoose />
      {/* TEch STack */}
      <section className="py-16 px-4 bg-white max-w-7xl mx-auto text-center">
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

        <a
          href="https://calendly.com/adnanghaffar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="mt-8 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-md font-semibold">
            LET’S TALK
          </button>
        </a>
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
                href="https://calendly.com/adnanghaffar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-[#1D92FB] text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition">
                  Get Your Free Consultation
                </button>
              </a>
              <ButtonScrollToSection
                classes="bg-[#F7E022] text-black px-6 py-3 cursor-pointer rounded-md font-semibold hover:bg-yellow-300 transition"
                content=" Talk to an Expert Now"
                key="first-button"
                destination="contact-box"
              />
            </div>
          </div>
        </div>

        {/* Mobile Image (outside the container, overlaps downward) */}
        <div className="absolute bottom-0 right-32 translate-y-1/12 hidden md:block z-20">
          <Image
            src="/cta-mobile.png"
            alt="Mobile device"
            width={240}
            height={600}
            className="h-[500px] object-contain"
          />
        </div>
      </section>
      {/* Faq Section */}
      <FaqSection />

    </section>

  );
}
