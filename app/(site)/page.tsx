import Link from "next/link";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import HomePageSlider from "./components/HomePageSlider";
const Testimonials = dynamic(() => import("./components/Testimonials"), {
  ssr: false,
});
const Faqs = dynamic(() => import("./components/Faqs"), {
  suspense: true,
});
import ScrollAnimation from "./components/ScrollAnimation";
import CoreExpertise from "./components/Expertise-home";
import HomePageForm from "./components/Homepage-form";
import CaseStudiesHome from "./components/CaseStudies-Home";
import TechnologiesSection from "./components/HomePage-Tech";
import Script from "next/script";
import HeroVideo from "./components/HeroSectionVideo";
import Image from "next/image";
import StatsSection from "./components/StatsSection";
import CtaWithStats from "./components/CTAwithstats";

// StatItem Component
const StatItem = ({
  imageSrc,
  text,
  alt,
  classname
}: {
  imageSrc: string;
  text: string;
  alt: string;
  classname?: string;
}) => (
  <div className={`flex flex-col py-4 text-lg font-light leading-6  text-center w-[290px] xl:w-[270px] 2xl:w-[270px] h-[220px] transition-shadow ease-in-out duration-500 ${classname}`}>
    <img
      loading="lazy"
      src={imageSrc}
      alt={alt}
      className="self-center aspect-square w-14 sm:w-16 xl:w-[72px]"
    />
    <div className="mt-6 max-w-[325px]">{text}</div>
  </div>
);

export default function Home() {
  const stats = [
    {
      imageSrc: "/stats1.png",
      alt: "Software Development",
      text: "We are trusted by 200 global clients and offer innovative software solutions tailored to specific needs and markets",
    },
    {
      imageSrc: "/stats2.png",
      alt: "Software Development Company - Completed projects",
      text: "Completed 350+ projects, showcasing expertise in providing creative software products globally",
    },
    {
      imageSrc: "/stats3.png",
      alt: "Software Development Solutions USA - Completed projects",
      text: "We professionally assessed 300 apps to assure high-quality and reliable software solutions for our clients",
    },
    {
      imageSrc: "/stats4.png",
      alt: "Software Development Solutions USA - Bugs Detected",
      text: "Over 150k bugs have been addressed, ensuring clients' software solutions are reliable and trustworthy",
    },
  ];

  return (
    <div>
      {/* Structured Data for Webpage */}
      <Script
        id="structured-data-webpage"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          {
            "@context": "http://schema.org",
            "@graph": [
              {
                "@type": "Webpage",
                "name": "Software Development Company in the USA | CodeAutomation",
                "headline": "Software Development Company in the USA",
                "url": "https://codeautomation.ai/",
                "@id": "https://codeautomation.ai/",
                "inLanguage": "en-US",
                "datePublished": "2024-10-17",
                "description": "CodeAutomation.ai is a leading software development company specialized in custom software development services. Schedule a Call & build with experts.",
                "image": "https://codeautomation.ai/logo.svg",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "Software Development Company in the USA"
                },
                "isPartOf": {
                  "@type": "WebSite",
                  "@id": "https://codeautomation.ai/#website"
                },
                "mainEntity": [{"@id": "https://codeautomation.ai/#service"}],
                "hasPart": {"@id": "https://codeautomation.ai/#creativeworkseries"}
              },
              {
                "@type": "CreativeWorkSeries",
                "@id": "https://codeautomation.ai/#creativeworkseries",
                "isPartOf": {"@id": "https://codeautomation.ai/#webpage"},
                "name": "Software Development Company in the USA | CodeAutomation",
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "bestRating": "5",
                  "ratingValue": "4.9",
                  "reviewCount": "49",
                  "url": "https://maps.app.goo.gl/waAVkpmb1ETqvfUU6"
                }
              },
              {
                "@type": "Service",
                "@id": "https://codeautomation.ai/#service",
                "mainEntityOfPage": {"@id": "https://codeautomation.ai/#webpage"},
                "name": "Software Development Company in the USA | CodeAutomation",
                "serviceType": ["Software Development Company in the USA"],
                "image": "https://codeautomation.ai/logo.svg",
                "provider": {
                  "@type": "Organization",
                  "url": "https://codeautomation.ai/",
                  "name": "Software Development Company in the USA",
                  "mainEntityOfPage": {"@id": "https://codeautomation.ai/#webpage"}
                },
                "areaServed": {
                  "@type": "AdministrativeArea",
                  "name": "https://maps.app.goo.gl/waAVkpmb1ETqvfUU6"
                },
                "audience": {
                  "@type": "Audience",
                  "name": "Software Development Company | CodeAutomation"
                }
              }
            ]
          }
          `,
        }}
      />
      {/* Structured Data for Website Organization */}
      <Script
        id="structured-data-website-organization"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          [
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://codeautomation.ai/#website",
              "headline": "Software Development Company",
              "name": "CodeAutomation",
              "description": "CodeAutomation.ai is a leading software development company specialized in custom software development services. Schedule a Call & build with experts.",
              "url": "https://codeautomation.ai/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://codeautomation.ai?s={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://codeautomation.ai/#Organization",
              "name": "CodeAutomation",
              "url": "https://codeautomation.ai/",
              "sameAs": [],
              "logo": {
                "@type": "ImageObject",
                "url": "https://codeautomation.ai/logo.svg",
                "width": "1800",
                "height": "1200"
              }
            }
          ]
          `,
        }}
      />
      <div className="flex overflow-hidden relative flex-col pb-12 w-full font-light text-white lg:min-h-[700px] max-md:max-w-full">
        <HeroVideo />
        <div className="absolute top-0 left-0 w-full h-full bg-[#020C16] opacity-75"></div>
        <div className="flex relative flex-col items-center lg:px-20 px-5 pt-12 w-full max-md:px-5 max-md:max-w-full flex-grow">
          <div className="lg:absolute top-[270px] lg:top-[220px] 2xl:top-[270px] max-lg:mt-36 w-full px-2 md:px-8 xl:px-10">
            <HomePageSlider />
            <div className="flex flex-col sm:flex-row mx-auto pt-8 space-y-6 sm:space-y-0 sm:space-x-5 items-center justify-center">
              <Link
                href="/case-studies"
                className="bg-[#1d92fb] text-white  py-3 px-5 font-semibold rounded-lg shadow-lg text-center w-full sm:w-48"
              >
                Our Case Studies
              </Link>
              <Link
                href="https://calendly.com/adnanghaffar"
                className="bg-[#f7e022]  text-black  font-semibold py-3 px-5 rounded-lg shadow-lg text-center w-full sm:w-48"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule a Call
              </Link>
            </div>
            {/* Clutch and Trustpilot section - displayed in a row */}
            <div className="flex justify-center items-center gap-8 mt-12">
              <a
                href="https://clutch.co/profile/codeautomationai#highlights"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center"
              >
                <Image
                  src="/Clutch.png"
                  alt="clutch-icon"
                  width={130}
                  height={40}
                />
              </a>
              <a
                href="https://www.trustpilot.com/review/codeautomation.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center"
              >
                <Image
                  src="/Trustpilot.png"
                  alt="Trustpilot-icon"
                  width={130}
                  height={40}
                  className="mb-3"
                />
              </a>
              <a
                href="/forbes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center"
              >
                <Image
                  src="/forbes.png"
                  alt="Forbes-icon"
                  width={130}
                  height={40}
                  className="mb-3"
                />
              </a>
              <a
                href="/google-scholar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center"
              >
                <Image
                  src="/Google_Scholar_logo.png"
                  alt="Google_Scholar_logo-icon"
                  width={60}
                  height={10}
                  className="mb-3"
                />
              </a>
            </div>
          </div>

        </div>
      </div>
      <StatsSection/>
      <ScrollAnimation>
        <section className="relative flex justify-center items-center px-6 md:px-16 md:py-16 py-10">
          <div className="absolute inset-0 bg-[#1D92FB]"></div>
          <div className="relative z-10">
            <div className="max-w-[1920px] mx-auto">
              <div className="flex flex-col items-center justify-center text-center mb-6">
                <h1 className="text-2xl md:text-4xl text-white font-semibold mb-4">
                  Why Our Software Development Trusted by Industry Leaders
                </h1>
                <h3 className="text-lg md:text-2xl text-white font-medium max-w-4xl text-[#3C3C3C]">
                  Businesses trust us for our top-notch software development
                  services, proven expertise, and reliable solutions tailored to
                  their needs
                </h3>
              </div>

              <div className="flex gap-14 flex-wrap justify-center max-w-full md:max-w-[800px] mx-auto 2xl:max-w-full">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-xl pt-0 p-4 transform transition-transform duration-300 ease-in-out hover:scale-105"
                  >
                    <StatItem
                      imageSrc={stat.imageSrc}
                      text={stat.text}
                      alt={stat.alt}
                      classname="font-semibold text-gray-700"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>
      <div className="max-w-full mx-auto relative max-w-[1920px]">
        <img
          loading="lazy"
          src="/ellipse-1.png"
          className="w-40 absolute left-0 top-0 lg:block hidden"
          alt="ellipse"
        />
        <img
          loading="lazy"
          src="/ellipse-1.png"
          className="absolute left-0 top-0 w-40 lg:hidden block"
          alt="ellipse"
        />
        {/* <ScrollAnimation> */}
        <div className="px-6 md:px-16 mt-16 max-w-[1534px] mx-auto">
          <div className="flex flex-col md:flex-row gap-5 pb-16">
            {/* Left Content Column */}
            <div className="md:w-[58%]">
              <CoreExpertise />

              <p className="text-xl font-medium text-left mt-12">
                Partner with us to access unmatched expertise and support
                in these areas, empowering your business with advanced
                technologies and driving your growth to new heights.
              </p>

              <div className="mt-12 max-w-[450px]">
                <a
                  href="/technologies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#F7E022] rounded-lg shadow-md font-medium text-base lg:text-lg xl:text-xl"
                >
                  <span>Explore Our Technologies</span>
                  <img
                    loading="lazy"
                    src="/btn-arrow.svg"
                    className="w-[22px] h-[26.8px]"
                    alt="arrow-icon"
                  />
                </a>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="md:w-[38%] mt-6 md:mt-0">
              <HomePageForm />
            </div>
          </div>
        </div>
        {/* </ScrollAnimation> */}
        <ScrollAnimation>
          <div className="relative flex justify-center items-center py-10 mx-auto px-6 lg:px-10">
            <div className="absolute inset-0 bg-[#001E6B]"></div>
            <div className="relative z-10 max-w-7xl mx-auto">
              {/* Section Heading */}
              <h3 className="text-2xl md:text-4xl text-center text-white font-semibold mb-4">
                Complete End-to-End Software Development Services
              </h3>

              {/* Section Description */}
              <p className="text-lg xl:text-xl text-white text-center max-w-4xl mx-auto mb-16">
                Over years of experience, we know that all businesses work within
                a specific software and hardware setup. We offer a wide range of
                software development services that are available to suit the
                specific requirements for your product. Check out our services
                below.{" "}
              </p>

              {/* Services Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left px:6 md:px-16 ">
                <div className="flex bg-white p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                  <div className="mr-6 flex-shrink-0">
                    <img
                      src="/end-to-end-1.png"
                      alt="Custom Software Development Services Company USA"
                      className="w-16 h-16"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">
                      Custom Software Development
                    </h3>
                    <p className="text-md text-gray-700">
                      Custom Software Solutions To Power Innovation And Efficiency
                      In Your Business.
                    </p>
                  </div>
                </div>

                <div className="flex bg-white p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                  <div className="mr-6 flex-shrink-0">
                    <img
                      src="end-to-end-2.png"
                      alt="Offshore Software Development Services Company USA"
                      className="w-16 h-16"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">
                      Offshore Software Development
                    </h3>
                    <p className="text-md text-gray-700">
                      Ensure premium results, coupled with seamless project
                      management by the leverage of cost-effective offshore
                      development services to hire top global talent.
                    </p>
                  </div>
                </div>

                <div className="flex bg-white p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                  <div className="mr-6 flex-shrink-0">
                    <img
                      src="end-to-end-3.png"
                      alt="Enterprise Software Development Services Company USA"
                      className="w-16 h-16"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">
                      Enterprise Software Development
                    </h3>
                    <p className="text-md text-gray-700">
                      Scalable, secure enterprise solutions that enhance
                      productivity and support complex business operations.
                    </p>
                  </div>
                </div>

                <div className="flex bg-white p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                  <div className="mr-6 flex-shrink-0">
                    <img
                      src="/end-to-end-4.png"
                      alt="Software Integration Services Company USA"
                      className="w-16 h-16"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">
                      Software Integration
                    </h3>
                    <p className="text-md text-gray-700">
                      Software application alignment with a single point-to-point
                      connection removing data silos and optimizing business
                      workflow
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation>
          <div className="py-16 px-6 md:px-16 max-w-7xl mx-auto">
            <div className="mx-auto flex flex-col lg:flex-row items-center gap-12">
              {/* Image */}
              <div className="lg:w-[50%] md:px-4">
                <Image
                  src="/who-we-ar.jpeg"
                  alt="Software Development Company"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                />
              </div>

              {/* Text Content */}
              <div className="lg:w-[50%] ">
                <h4 className="xl:text-4xl lg:text-3xl text-[#3C3C3C] text-3xl font-semibold">
                  Who We Are
                </h4>
                <p className="xl:mt-11 lg:text-lg text-base text-[#3C3C3C] mt-5 max-md:max-w-full tracking-normal">
                  We are a leading IT software development company specializing
                  in crafting and managing high-performing remote software
                  engineering teams. Since our inception, we have dedicated
                  ourselves to delivering tailored software solutions and
                  exceptional service to our clients. Our commitment to
                  excellence and innovation drives our mission to empower
                  businesses with cutting-edge technology and reliable support.
                  <br />
                  <br />
                  We are a high-performing IT Software Development Company
                  founded in 2018 and we build & manage dedicated software
                  development teams, which is based on your specific business
                  needs. From day one, we have committed to delivering custom
                  software solutions and exceptional service way beyond the
                  industry standard. Our commitment to excellence and
                  innovation, pushing us to not only help businesses grow with
                  the true cutting-edge technology but also ensuring that we
                  source/develop products/applications through thorough R&D
                  providing cutting-edge technology and reliable support.
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <section className="relative px-6 py-10 md:px-16 md:py-16">
            {/* <div className="absolute inset-0 bg-[#1D92FB] opacity-20"></div> */}
            <div className="justify-center text-center relative z-10 pb-10 max-w-7xl mx-auto" >
              <div>
                <h3 className="justify-center text-center text-3xl font-bold text-[#3C3C3C] mb-4 mx-auto max-w-3xl">
                  Why Choose Us for Your Software Development Services?
                </h3>
                <p className=" justify-center text-center text-lg font-medium text-[#3C3C3C] mx-auto max-w-4xl">
                  Outsource with us for real experience in custom software
                  development and top-line software solutions that will bring
                  innovative results to your business.
                </p>
              </div>
            </div>

            <div className="relative flex flex-col md:flex-row items-center justify-between z-10 max-w-7xl mx-auto">
              <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 md:pl-12 ">
                <div className="space-y-8">
                  {[
                    {
                      number: 1,
                      title: "Proven Expertise",
                      description:
                        "With extensive experience in delivering top-tier software development services, we bring a wealth of knowledge to every project, ensuring high-quality outcomes tailored to your business needs.",
                    },
                    {
                      number: 2,
                      title: "Customized Solutions",
                      description:
                        "We recognize that no two businesses are the same so a custom fit solution is paramount. Through custom software development, our experienced team of technologists builds to your exact specifications.",
                    },
                    {
                      number: 3,
                      title: "Agile Approach",
                      description:
                        "Our agile development process ensures flexibility, faster delivery, and continuous improvement, allowing us to adapt to changing needs and deliver superior results.",
                    },
                    {
                      number: 4,
                      title: "Dedicated Support",
                      description:
                        "From concept to completion, our dedicated support team is with you every step of the way, providing expert guidance and ensuring seamless project execution.",
                    },
                    {
                      number: 5,
                      title: "Global Reach",
                      description:
                        "Being able to provide both onshore as well as offshore development which enables access to international resources and maintaining quality with high efficiency.",
                    },
                    {
                      number: 6,
                      title: "Client-Centric Focus",
                      description:
                        "We Care About Your Winning. We work side-by-side with our clients to help them realize their vision bringing software to life that benefits the business.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="relative flex items-start">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-[#1D92FB] text-white font-bold">
                          {item.number}
                        </div>
                        {index < 5 && (
                          <div className="absolute left-5 top-16 h-10 border-l-4 border-[#1D92FB]" />
                        )}
                      </div>
                      <div className="ml-8">
                        <h3 className="text-xl font-semibold text-[#1D92FB]">
                          {item.title}
                        </h3>
                        <p className="text-[#3C3C3C] mt-2">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:w-1/2 flex justify-center">
                <Image
                  src="/choose-us.png"
                  alt="Software Development Services"
                  height={600}
                  width={400}
                  className="w-3/4 rounded-lg shadow-lg z-10 md:mt-0 mt-6"
                  priority={false} // default: lazy load
                />
              </div>
            </div>
          </section>
        </ScrollAnimation>
        <ScrollAnimation>
        <CtaWithStats/>
        </ScrollAnimation>
        <ScrollAnimation>
          <div className="flex flex-col self-center w-full mx-auto py-6 md:py-16 px-6 lg:px-10">
            <h4 className="self-center text-center font-bold text-[#3C3C3C] xl:text-4xl lg:text-3xl text-2xl max-w-[1582px] mx-auto">
              Transformative Software Development Case Studies
            </h4>
            <p className="lg:mt-8 mt-4 text-lg md:text-xl font-medium text-center text-[#3C3C3C] lg:px-10 md:px-5 max-w-[1582px] mx-auto">
              Explore the impactful results of our expertise in software
              development. Each project in our portfolio reflects our commitment
              to excellence. Discover how we&rsquo;ve driven success for
              businesses like yours through our detailed case studies.
            </p>
            <Suspense fallback={<div>Loading Our Work Section...</div>}>
              <CaseStudiesHome />
            </Suspense>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="relative max-md:max-w-full md:px-16 px-6 md:py-16 py-6">
            {/* Background layer with color and opacity */}
            <div className="absolute inset-0 bg-[#001E6B]"></div>

            <div className="relative flex gap-5 max-md:flex-col max-md:gap-0 max-w-7xl mx-auto">
              <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full self-center md:px-4">
                <div className="flex flex-col text-white max-md:mt-10 max-md:max-w-full">
                  <h3 className="xl:text-4xl lg:text-3xl text-3xl font-medium max-md:max-w-full">
                    Our Development Approach
                  </h3>
                  <div className="xl:mt-11 lg:text-xl text-base mt-5 max-md:max-w-full xl:pr-36 tracking-normal">
                    <p>
                      At CodeAutomation, we blend collaboration, creativity, and
                      precision to deliver exceptional results. Our unique
                      project execution combines advanced technology with a
                      personal touch, driven by our certified experts. We focus
                      on crafting innovative solutions that empower businesses
                      to achieve their growth objectives in the digital age.{" "}
                      <br />
                      <br />
                      Here at CodeAutomation, we mix collaboration with
                      creativity and precision to achieve remarkable results.
                      Business Excellence- Our efficient project execution uses
                      a mix of high-end technology combined with the human
                      touch; driven by our certified experts. We focus on
                      crafting innovative solutions that empower businesses to
                      achieve their growth objectives in the digital age.{" "}
                    </p>
                  </div>
                  <div className="flex items-start self-stretch pr-8 text-base xl:text-xl lg:text-lg font-medium whitespace-nowrap max-w-[450px] max-md:pr-5 mt-12">
                    <Link
                      href="/services"
                      className="cursor flex overflow-hidden relative gap-2 px-6 py-3 items-center text-black bg-[#F7E022] rounded-lg shadow-md"
                    >
                      <p className="relative grow self-center">
                        Launch Your Software
                      </p>
                      <img
                        loading="lazy"
                        src="/btn-arrow.svg"
                        className="w-[22px] h-[26.8px] text-black"
                        alt="arrow icon"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="md:w-5/12 w-full md:mt-0 mt-6">
                <img
                  src="/distinctive.png"
                  className="object-cover"
                  alt="Software Development Service USA"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="overflow-hidden w-full md:py-16 py-6">
            <div className="flex animate-marquee space-x-6 md:space-x-12">
              {[...Array(2)].map((_, i) => ( // duplicate items for infinite loop
                [
                  {
                    title: "Project Initiation",
                    text: "Our team of development, UX design, and analysis experts can assist in creating new product concepts or improving existing performance.",
                    icon: "/4.png",
                  },
                  {
                    title: "Design",
                    text: "Our talented design team creates visually appealing digital user experiences to solve practical issues and enhance key business metrics.",
                    icon: "/3.png",
                  },
                  {
                    title: "Development",
                    text: "We create efficient, secure apps for your company, by product strategy, assembling a skilled team, and starting coding to give your brand a competitive edge.",
                    icon: "/development-icon.svg",
                  },
                  {
                    title: "Automate",
                    text: "Product testing, also known as consumer or comparative testing, measures a product’s characteristics or capabilities to develop goods that meet specific technical criteria.",
                    icon: "/automate-icon.svg",
                  },
                  {
                    title: "Launch",
                    text: "The final product is launched after client approval, fostering growth for both companies. Our industry continuously improves, and we ensure project safety.",
                    icon: "/6.png",
                  },
                  {
                    title: "Archives and Artifacts",
                    text: "You are the project owner, entitled to our as-built documentation, specifications, test scripts, and release scripts for future analysis or development.",
                    icon: "/5.png",
                  },
                ].map((item, index) => (
                  <div
                    key={`${i}-${index}`}
                    className="flex flex-col items-start p-6 min-w-[300px] border border-blue-400 bg-[#FAFAFA] rounded-md shadow-xl hover:shadow-2xl transition-shadow duration-300"
                  >
                    <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full border border-gray-300 shadow mb-4">
                      <img src={item.icon} alt={item.title} className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-semibold text-blue-500 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">{item.text}</p>
                  </div>
                ))
              ))}
            </div>
          </div>


        </ScrollAnimation>

        <div className="flex flex-col bg-[#F3F3F3] py-16 px-6 relative  overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/testimonial.png"
              alt="Testimonials background"
              fill
              className="object-cover"
              priority={false} // ✅ let it lazy load
            />
          </div>
          <ScrollAnimation>
            <div className="relative z-10 flex flex-col items-center">
              <h3 className="w-full xl:text-4xl text-2xl font-medium text-white text-center">
                Trusted by Industry Leaders
              </h3>
              <p className="self-center md:mt-6 mt-3 lg:text-xl text-lg text-center text-white max-w-4xl mx-auto">
                Let us show you how our services have helped clients with custom
                software development. These client reviews will tell you why our
                amazing solutions & support set us apart.
              </p>
            </div>

            <div className="mx-auto">
              <Suspense fallback={<p>Loading Testimonials Section...</p>}>
                <Testimonials />
              </Suspense>
            </div>
          </ScrollAnimation>
        </div>

        <ScrollAnimation>
          <TechnologiesSection />
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="flex gap-5 max-md:flex-wrap lg:px-10 lg:py-16 py-8 md:px-5 w-full mx-auto relative">
            <img
              loading="lazy"
              src="/ellipse-2.png"
              className="w-[260px] absolute right-0 top-[30px]"
              alt="ellipse"
            />
            <div className="flex flex-col flex-1 px-5 text-xl ml-8 relative z-10 xl:container xl:mx-auto">
              <h2 className="xl:text-4xl lg:text-3xl text-3xl font-medium text-black max-md:max-w-full mt-4 text-center">
                Our FAQs
              </h2>
              <Suspense fallback={<p>Loading FAQs Section...</p>}>
                <Faqs />
              </Suspense>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}
