import Link from "next/link";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import HomePageSlider from "./components/HomePageSlider";
const Testimonials = dynamic(() => import("./components/Testimonials"), {
  suspense: true,
});
const OurWorkSection = dynamic(() => import("./components/OurWorkSection"), {
  suspense: true,
});
const Faqs = dynamic(() => import("./components/Faqs"), {
  suspense: true,
});
import ScrollAnimation from "./components/ScrollAnimation";
import CoreExpertise from "./components/Expertise-home";
import ProjectDiscussionContainer from "./components/project-discussion-form";
import HomePageForm from "./components/Homepage-form";
import CaseStudiesHome from "./components/CaseStudies-Home";
import ButtonScrollToSection from "./components/ButtonScrollToSection";
import TechnologiesSection from "./components/HomePage-Tech";

const StatItem = ({
  imageSrc,
  text,
  alt,
}: {
  imageSrc: string;
  text: string;
  alt: string;
}) => (
  <div className="flex flex-col py-4 text-lg font-light leading-6  text-center w-[290px] xl:w-[270px] 2xl:w-[270px] h-[220px] transition-shadow ease-in-out duration-500">
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
      <div className="flex overflow-hidden relative flex-col pb-12 w-full font-light text-white lg:min-h-[700px] max-md:max-w-full">
        <video
          className="top-0 left-0 object-cover absolute inset-0 size-full"
          width="100%"
          height="100%"
          muted
          autoPlay
          loop
          playsInline
          preload="auto"
          poster="/hero.jpg" // Add this line
        >
          <source src="/hero-sec-video.webm" type="video/webm" />
          <source src="/hero-sec-video.mp4" type="video/mp4" />
        </video>


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
                <img
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
                <img
                  src="/Trustpilot.png"
                  alt="Trustpilot-icon"
                  width={130}
                  height={40}
                  className="mb-3"
                />
              </a>
            </div>
          </div>

        </div>
      </div>
      <ScrollAnimation>
        <section className="relative flex justify-center items-center px-6 md:px-16 md:py-16 py-10">
          <div className="absolute inset-0 bg-[#1D92FB] opacity-10"></div>
          <div className="relative z-10">
            <div className="max-w-[1920px] mx-auto">
              <div className="flex flex-col items-center justify-center text-center mb-6">
                <h2 className="text-2xl md:text-4xl font-semibold mb-4">
                  Why We&apos;re Trusted by Industry Leaders
                </h2>
                <h3 className="text-lg md:text-2xl font-medium max-w-4xl text-[#3C3C3C]">
                  Businesses trust us for our top-notch software development
                  services, proven expertise, and reliable solutions tailored to
                  their needs
                </h3>
              </div>

              <div className="flex gap-14 flex-wrap justify-center max-w-full lg:max-w-[800px] 2xl:max-w-full">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-lg pt-0 p-4 transform transition-transform duration-300 ease-in-out hover:scale-105"
                  >
                    <StatItem
                      imageSrc={stat.imageSrc}
                      text={stat.text}
                      alt={stat.alt}
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
          className="aspect-[1.22] absolute left-0 top-0 lg:block hidden"
          alt="ellipse"
        />
        <img
          loading="lazy"
          src="/ellipse-1.png"
          className="absolute left-0 top-0 w-40 lg:hidden block"
          alt="ellipse"
        />
        <ScrollAnimation>
          <div className="flex flex-col self-center mt-16 w-full mx-auto max-md:mt-10 max-md:max-w-full max-w-[1534px]">
            <div className="max-md:max-w-full px-6 md:px-16 relative">
              <div className="flex gap-5 pb-16 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full self-center">
                  <div className="flex flex-col text-black max-md:mt-10 max-md:max-w-full">
                    <CoreExpertise />

                    {/* New H2 Heading */}
                    <h2 className="text-xl font-medium text-left mt-12 ">
                      Partner with us to access unmatched expertise and support
                      in these areas, empowering your business with advanced
                      technologies and driving your growth to new heights.
                    </h2>

                    <div className="flex items-start self-stretch pr-8 text-base xl:text-xl lg:text-lg font-medium whitespace-nowrap max-w-[450px] max-md:pr-5 mt-12">
                      <Link
                        href="/technologies"
                        className="cursor flex overflow-hidden relative gap-2 px-6 py-3 items-center bg-[#F7E022] rounded-lg shadow-md"
                      >
                        <p className="relative grow self-center">
                          Explore Our Technologies
                        </p>
                        <img
                          loading="lazy"
                          src="/btn-arrow.svg"
                          className="w-[22px] h-[26.8px]"
                          alt="arrow-icon"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-[38%] max-md:ml-0 max-md:w-full mt-6">
                  <HomePageForm />
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
        <div className="relative flex justify-center items-center py-10 mx-auto px-6 lg:px-10">
          <div className="absolute inset-0 bg-[#1D92FB] opacity-10"></div>
          <div className="relative z-10 max-w-7xl mx-auto">
            {/* Section Heading */}
            <h2 className="text-2xl md:text-4xl text-center font-semibold mb-4">
              Complete End-to-End Software Development Services
            </h2>

            {/* Section Description */}
            <p className="text-lg xl:text-xl text-gray-600 text-center max-w-4xl mx-auto mb-16">
              Over years of experience, we know that all businesses work within
              a specific software and hardware setup. We offer a wide range of
              software development services that are available to suit the
              specific requirements for your product. Check out our services
              below.{" "}
            </p>

            {/* Services Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left px:6 md:px-16 ">
              <div className="flex bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
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
                  <p className="text-lg text-gray-700">
                    Custom Software Solutions To Power Innovation And Efficiency
                    In Your Business.
                  </p>
                </div>
              </div>

              <div className="flex bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
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
                  <p className="text-lg text-gray-700">
                    Ensure premium results, coupled with seamless project
                    management by the leverage of cost-effective offshore
                    development services to hire top global talent.
                  </p>
                </div>
              </div>

              <div className="flex bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
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
                  <p className="text-lg text-gray-700">
                    Scalable, secure enterprise solutions that enhance
                    productivity and support complex business operations.
                  </p>
                </div>
              </div>

              <div className="flex bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
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
                  <p className="text-lg text-gray-700">
                    Software application alignment with a single point-to-point
                    connection removing data silos and optimizing business
                    workflow
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ScrollAnimation>
          <div className="py-16 px-6 md:px-16 max-w-7xl mx-auto">
            <div className="mx-auto flex flex-col lg:flex-row items-center gap-12">
              {/* Image */}
              <div className="lg:w-[50%] md:px-4">
                <img
                  src="/who-we-are.png"
                  alt="Software Development Company"
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                />
              </div>

              {/* Text Content */}
              <div className="lg:w-[50%] ">
                <h2 className="xl:text-4xl lg:text-3xl text-3xl font-medium">
                  Who We Are
                </h2>
                <p className="xl:mt-11 lg:text-xl text-base font-light mt-5 max-md:max-w-full tracking-normal">
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
            <div className="absolute inset-0 bg-[#1D92FB] opacity-10"></div>
            <div className="justify-center text-center relative z-10 pb-10 max-w-7xl mx-auto" >
              <div>
                <h2 className="justify-center text-center text-3xl font-bold text-[#3C3C3C] mb-4 mx-auto max-w-3xl">
                  Why Choose Us for Your Software Development Services?
                </h2>
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
                <img
                  src="/choose-us.png"
                  alt="Software Development Services"
                  className="w-3/4 rounded-lg shadow-lg z-10 md:mt-0 mt-6"
                />
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Call to Action (CTA) Section */}
        <div
          className="w-full px-6 py-10 md:px-16 md:py-20 shadow-lg flex flex-col md:flex-row items-center text-white"
          style={{
            backgroundImage: "url(/Container.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
            {/* Left Content */}
            <div className="w-full md:w-1/2 text-left">
              <h2 className="mb-6 text-2xl md:text-4xl font-bold max-w-2xl">
                Want To Develop A Custom Software Solution?
              </h2>
              <div className="flex items-start self-stretch pr-8 text-base xl:text-xl lg:text-lg font-medium whitespace-nowrap max-w-[450px] max-md:pr-5 mt-12">
                <Link
                  href="https://join.skype.com/invite/crU4cXW4bttb"
                  target="_blank"
                  className="cursor flex overflow-hidden relative gap-2 px-8 py-2 items-center bg-[#F7E022] rounded-lg shadow-md"
                >
                  <p className="relative grow self-center text-black font-semibold text-lg">
                    Get Started Today
                  </p>
                </Link>
              </div>
            </div>

            {/* Right Stats */}
            <div className="w-full md:w-1/2 mt-10 md:mt-0 flex flex-wrap justify-center md:justify-end gap-8 text-center md:text-left">
              {/* Stats Items */}
              <div className="w-[45%] flex items-center">
                <img src="/cta-1.png" alt="Icon" className="w-14 h-14 mr-4" />
                <div>
                  <h3 className="text-4xl font-bold">500+</h3>
                  <p className="text-lg text-white font-light mt-2">Clients Served</p>
                </div>
              </div>
              <div className="w-[45%] flex items-center">
                <img src="/cta-2.png" alt="Icon" className="w-14 h-14 mr-4" />
                <div>
                  <h3 className="text-4xl font-bold">10+</h3>
                  <p className="text-lg text-white font-light mt-2">Years in Business</p>
                </div>
              </div>
              <div className="w-[45%] flex items-center">
                <img src="/cta-3.png" alt="Icon" className="w-14 h-14 mr-4" />
                <div>
                  <h3 className="text-4xl font-bold">350+</h3>
                  <p className="text-lg text-white font-light mt-2">Industries Served</p>
                </div>
              </div>
              <div className="w-[45%] flex items-center">
                <img src="/cta-4.png" alt="Icon" className="w-14 h-14 mr-4" />
                <div>
                  <h3 className="text-4xl font-bold">200+</h3>
                  <p className="text-lg text-white font-light mt-2">Global Clients</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <ScrollAnimation>
          <div className="flex flex-col self-center w-full mx-auto lg:py-16 py-16 lg:px-10 px-5">
            <h2 className="self-center text-center font-medium text-black xl:text-4xl lg:text-3xl text-3xl max-w-[1582px] mx-auto">
              Transformative Software Development Case Studies
            </h2>
            <p className="lg:mt-8 mt-4 text-xl font-light text-center text-black lg:px-10 md:px-5 max-w-[1582px] mx-auto">
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
            <div className="absolute inset-0 bg-[#1D92FB] opacity-10"></div>

            <div className="relative flex gap-5 max-md:flex-col max-md:gap-0 max-w-7xl mx-auto">
              <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full self-center md:px-4">
                <div className="flex flex-col text-black max-md:mt-10 max-md:max-w-full">
                  <h2 className="xl:text-4xl lg:text-3xl text-3xl font-medium max-md:max-w-full">
                    Our Development Approach
                  </h2>
                  <div className="xl:mt-11 lg:text-xl text-base font-light mt-5 max-md:max-w-full xl:pr-36 tracking-normal">
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
                      className="cursor flex overflow-hidden relative gap-2 px-6 py-3 items-center bg-[#F7E022] rounded-lg shadow-md"
                    >
                      <p className="relative grow self-center">
                        Launch Your Software
                      </p>
                      <img
                        loading="lazy"
                        src="/btn-arrow.svg"
                        className="w-[22px] h-[26.8px]"
                        alt="arrow icon"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="md:w-5/12 w-full md:mt-0 mt-6">
                <img
                  src="/distinctive.png"
                  className="object-cover size-full"
                  alt="Software Development Service USA"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="grid xl:grid-cols-3 grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto gap-10 lg:gap-12 md:px-16 px-6 md:py-16 py-6 lg:mt-11 w-full max-md:mt-10 max-md:max-w-full mb-10">
            <div className="flex flex-col  max-md:ml-0 max-md:w-full ">
              <div className="flex flex-col grow px-5 py-7  mx-auto w-full bg-gray-200 rounded-3xl shadow-sm backdrop-blur-[6.5px] max-md:mt-10 relative">
                <div className="flex z-10 gap-5  justify-between items-start mt-0">
                  <h3 className="flex-auto self-end  text-2xl font-medium leading-6 text-black ">
                    Project Initiation
                  </h3>
                  <div className="flex flex-col flex-1 justify-center self-start absolute -top-10 right-5">
                    <div className="flex justify-center items-center px-4 w-20 h-20 bg-white rounded-full shadow shadow-slate-500 border border-slate-300">
                      <img
                        loading="lazy"
                        src="/4.png"
                        className="w-full"
                        alt="Code automation Project Initiation"
                      />
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-sm font-light text-justify text-black">
                  Our team of development, UX design, and analysis experts can
                  assist in creating new product concepts or improving existing
                  performance.
                </p>
              </div>
            </div>
            <div className="flex flex-col  max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-7 pb-7 mx-auto w-full bg-gray-200 rounded-3xl shadow-sm backdrop-blur-[6.5px] max-md:pl-5 max-md:mt-10 relative">
                <div className="flex z-10 gap-5 justify-between items-start mt-0">
                  <h3 className="self-end mt-10 text-2xl font-medium leading-6 text-black max-md:mt-10">
                    Design
                  </h3>
                  <div className="flex justify-center items-center self-start px-5 w-20 h-20 bg-white rounded-full shadow shadow-slate-500 border border-slate-300 max-md:pl-5 absolute -top-10 right-5">
                    <img
                      loading="lazy"
                      src="/3.png"
                      className="w-full"
                      alt="Code Automation Software Design"
                    />
                  </div>
                </div>
                <p className="mt-3 text-sm font-light text-justify text-black">
                  Our talented design team creates visually appealing digital
                  user experiences to solve practical issues and enhance key
                  business metrics.
                </p>
              </div>
            </div>
            <div className="flex flex-col  max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow pb-6 w-full bg-gray-200 rounded-3xl shadow-sm backdrop-blur-[6.5px] max-md:mt-10 relative">
                <div className="flex z-10 justify-center items-center self-end px-5 w-20 h-20 bg-white rounded-full shadow shadow-slate-500 border border-slate-300 max-md:pr-5 absolute -top-10 right-5">
                  <img
                    loading="lazy"
                    src="/development-icon.svg"
                    className="w-full aspect-[1.02]"
                    alt="Code Automation Software Development"
                  />
                </div>
                <div className="flex flex-col px-7 text-black max-md:px-5">
                  <h3 className="text-2xl font-medium leading-6 mt-10">
                    Development
                  </h3>
                  <p className="mt-3 text-sm font-light text-justify">
                    We create efficient, secure apps for your company, by a
                    product strategy, assembling a skilled team, and starting
                    coding to give your brand a competitive edge.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col  max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow pb-6 w-full bg-gray-200 rounded-3xl shadow-sm backdrop-blur-[6.5px] max-md:mt-10 relative">
                <div className="flex z-10 justify-center items-center self-end px-4 w-20 h-20 bg-white rounded-full shadow shadow-slate-500 border border-slate-300 absolute -top-10 right-5">
                  <img
                    loading="lazy"
                    src="/automate-icon.svg"
                    className="w-full aspect-[1.02]"
                    alt="Code Automation Automate Your Business"
                  />
                </div>
                <div className="flex flex-col px-5 text-black">
                  <h3 className="text-2xl font-medium leading-6 mt-10">
                    Automate
                  </h3>
                  <p className="mt-3 text-sm font-light text-justify">
                    Product testing, also known as consumer or comparative
                    testing, measures a product&rsquo;s characteristics or
                    capabilities to develop goods that meet specific technical
                    criteria.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col  max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow pb-6 w-full bg-gray-200 rounded-3xl shadow-sm backdrop-blur-[6.5px] max-md:mt-10 relative">
                <div className="flex z-10 justify-center items-center self-end px-3 w-20 h-20 bg-white rounded-full shadow shadow-slate-500 border border-slate-300 max-md:px-5 absolute -top-10 right-5">
                  <img
                    loading="lazy"
                    src="/6.png"
                    className="w-full"
                    alt="Launch"
                  />
                </div>
                <div className="flex flex-col pr-3.5 pl-7 text-black max-md:pl-5">
                  <h3 className="text-2xl font-medium leading-6 mt-10">
                    Launch
                  </h3>
                  <p className="mt-3 text-sm font-light text-justify">
                    The final product is launched after client approval,
                    fostering growth for both companies. Our industry
                    continuously improves, and we ensure project safety.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col  max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow pb-6 w-full bg-gray-200 rounded-3xl shadow-sm backdrop-blur-[6.5px] max-md:mt-10 relative">
                <div className="flex z-10 justify-center items-center self-end px-5 w-20 h-20 bg-white rounded-full shadow shadow-slate-500 border border-slate-300 absolute -top-10 right-5">
                  <img
                    loading="lazy"
                    src="/5.png"
                    className="w-full aspect-[1.02]"
                    alt="Archives and Artifacts"
                  />
                </div>
                <div className="flex flex-col px-7 text-black max-md:px-5">
                  <h3 className="text-2xl font-medium leading-6 mt-10">
                    Archives and Artifacts
                  </h3>
                  <p className="mt-3 text-sm font-light text-justify">
                    You are the project owner, entitled to our as-built
                    documentation, specifications, test scripts, and release
                    scripts for future analysis or development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        <div className="flex flex-col bg-[#F3F3F3] py-16 relative  overflow-hidden">
          <div className="absolute inset-0 z-0 bg-[url('/Testimonials.png')] bg-cover bg-center backdrop-blur-md"></div>

          <ScrollAnimation>
            <div className="relative z-10 flex flex-col items-center">
              <h2 className="w-full xl:text-4xl text-2xl font-medium text-white text-center">
                Trusted by Industry Leaders
              </h2>
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
              className="aspect-[1.22] absolute right-0 top-80"
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
