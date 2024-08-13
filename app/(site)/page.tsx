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

export default function Home() {
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
        >
          <source src="/hero-sec-video.webm" type="video/webm" />
          <source src="/hero-sec-video.mp4" type="video/mp4" />
        </video>

        <div className="absolute top-0 left-0 w-full h-full bg-[#020C16] opacity-75"></div>
        <div className="flex relative flex-col items-center lg:px-20 px-5 pt-12 w-full max-md:px-5 max-md:max-w-full flex-grow">
          <div className="lg:absolute top-[250px] lg:top-[220px] 2xl:top-[250px] max-lg:mt-36 w-full px-2 md:px-8 xl:px-10">
            <HomePageSlider />
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 text-base mt-10 lg:mt-auto max-md:max-w-full text-center max-w-[1400px]">
            <div className="flex flex-col flex-1 items-center mt-1.5">
              <img
                loading="eager"
                src="/global-trust.svg"
                className="self-center aspect-[1.12] w-[65px]"
                alt="Global trust"
              />
              <p className="lg:mt-11 mt-3">
                We are trusted by 200 global clients and offer innovative
                software solutions tailored to specific needs and markets
              </p>
            </div>
            <div className="flex flex-col flex-1 items-center mt-1">
              <img
                loading="eager"
                src="/project-completion.svg"
                className="self-center aspect-square w-[58px]"
                alt="Project completion"
              />
              <p className="lg:mt-11 mt-3">
                Completed 350+ projects, showcasing expertise in providing
                creative software products globally
              </p>
            </div>
            <div className="flex flex-col flex-1 items-center">
              <img
                loading="eager"
                src="/quality-assurance.svg"
                className="self-center aspect-square w-[58px]"
                alt="Quality assurance"
              />
              <p className="lg:mt-11 mt-3">
                We professionally assessed 300 apps to ensure high-quality and
                reliable software solutions for our clients
              </p>
            </div>
            <div className="flex flex-col flex-1 items-center">
              <img
                loading="eager"
                src="/bug-fixing.svg"
                className="self-center aspect-[0.89] w-[52px]"
                alt="Bug fixing"
              />
              <p className="lg:mt-11 mt-3">
                Over 150k bugs have been addressed, ensuring that our
                clients&rsquo; software solutions are reliable and trustworthy
              </p>
            </div>
          </div>
        </div>
      </div>
      <ScrollAnimation>
        <div className="flex justify-center items-center lg:px-10 md:px-5 lg:py-16 py-16 w-full text-black bg-[#F3F3F3] leading-[100%] max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col w-full max-w-[1582px] max-md:my-10 max-md:max-w-full">
            <h1 className="self-center xl:text-4xl lg:text-3xl text-3xl font-medium max-md:max-w-full">
              Our Top Services
            </h1>

            <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 xl:mt-12 text-xl font-bold whitespace-nowrap max-md:flex-wrap mt-10 max-md:max-w-full">
              <p className="text-center py-4 px-6 bg-white rounded-lg shadow-md max-md:p-3">
                Web Development
              </p>
              <p className="text-center py-4 px-6 bg-white rounded-lg shadow-md max-md:p-3">
                Mobile App Development
              </p>
              <p className="text-center py-4 px-6 bg-white rounded-lg shadow-md max-md:p-3">
                QA Automation Testing
              </p>
              <p className="text-center py-4 px-6 bg-white rounded-lg shadow-md max-md:p-3">
                AI/ML Services
              </p>
            </div>
          </div>
        </div>
      </ScrollAnimation>
      <div className="max-w-full mx-auto relative">
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
          <div className="flex flex-col self-center mt-16 w-full max-w-[1624px]  mx-auto max-md:mt-10 max-md:max-w-full">
            <div className="max-md:max-w-full lg:px-10 px-5 relative">
              <div className="flex gap-5 pb-16 max-md:flex-col max-md:gap-0 max-md:">
                <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full self-center">
                  <div className="flex flex-col text-black max-md:mt-10 max-md:max-w-full">
                    <h2 className="xl:text-4xl lg:text-3xl text-3xl font-medium max-md:max-w-full">
                      Our Core Expertise
                    </h2>
                    <div className="xl:mt-11 lg:text-xl text-base font-light mt-5 max-md:max-w-full xl:pr-36 tracking-normal">
                      <p>
                        Scale up with the team of more than 70 dedicated
                        <span className="font-extrabold ml-1">
                          software engineers{" "}
                        </span>
                        who are perfectly time-zone matched with you and have
                        knowledge across a diverse variety of more than 100
                        technologies. Whether you seek automation specialists or
                        expert mobile and web development professionals,
                        we&apos;re here to serve your business needs.
                      </p>
                      <p>
                        As your strategic partners, we&apos;re dedicated to
                        providing your business with outstanding knowledge and a
                        strong desire to see you succeed. Begin your journey to
                        a more promising future by empowering your business with
                        advanced technologies, professional advice, and
                        unmatched support.
                      </p>
                    </div>
                    <div className="flex items-start self-stretch pr-8 text-base xl:text-xl lg:text-lg font-medium whitespace-nowrap max-w-[450px]  max-md:pr-5 mt-12">
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
                <div className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow pr-4 pb-3.5 w-full bg-sky-500 rounded-3xl max-md:mt-10 max-md:max-w-full">
                    <img
                      loading="lazy"
                      src="/our-core-expertise-section.webp"
                      className="z-10 mt-0 w-full max-md:max-w-full"
                      alt="core expertise"
                      width={"570"}
                      height={"730"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation>
          <div className="flex flex-col self-center w-full mx-auto max-md:max-w-full bg-[#F3F3F3] lg:py-16 py-16 lg:px-10 px-5">
            <h2 className="self-center font-medium text-black xl:text-4xl lg:text-3xl text-3xl max-w-[1582px] mx-auto">
              Our Work
            </h2>
            <p className="lg:mt-8 mt-4 text-xl font-light text-center text-black lg:px-10 md:px-5 max-w-[1582px] mx-auto">
              Explore the tangible results of our dedication and proficiency in
              our portfolio. Each project is a testament to our commitment to
              excellence. Check out our case studies and witness how we&rsquo;ve
              helped businesses like yours succeed.
            </p>
            <Suspense fallback={<div>Loading Our Work Section...</div>}>
              <OurWorkSection />
            </Suspense>
          </div>
        </ScrollAnimation>
        <ScrollAnimation>
          <div className="flex flex-col lg:px-10 px-5  mx-auto max-w-[1582px]">
            <h2 className="w-full xl:text-4xl lg:text-3xl text-3xl font-medium text-black max-md:max-w-full max-md:text-4xl lg:pt-20 pt-16 text-center">
              Why Work With Us
            </h2>
            <div className="px-px mt-14 w-full max-md:mt-10 max-md:max-w-full">
              <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 max-md:flex-col">
                <div className="flex flex-col max-md:ml-0 max-md:w-full">
                  <div className="flex grow gap-2.5 items-center pr-5 w-full text-black whitespace-nowrap bg-white rounded-md shadow shadow-slate-400">
                    <div className="bg-[#F3F3F3] rounded-md p-3 h-full flex-col justify-center flex h-100">
                      <img
                        loading="lazy"
                        srcSet="/Group-17-1.svg"
                        className="self-stretch max-w-full aspect-[0.9] w-[68px]"
                        alt="global clients"
                      />
                    </div>
                    <div className="flex flex-col flex-1 self-stretch my-auto">
                      <h3 className="text-lg font-medium leading-6 uppercase">
                        Global Client
                      </h3>
                      <p className="xl:text-5xl font-extrabold lg:text-4xl md:text-4xl text-5xl flex">
                        200+
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col max-md:ml-0 max-md:w-full">
                  <div className="flex grow gap-2.5 items-center pr-5 w-full text-black whitespace-nowrap bg-white rounded-md shadow shadow-slate-400">
                    <div className="bg-[#F3F3F3] rounded-md p-3 h-full flex flex-col justify-center">
                      <img
                        loading="lazy"
                        srcSet="/Group-22-4.svg"
                        className="self-stretch max-w-full aspect-[0.9] w-[68px]"
                        alt="projects"
                      />
                    </div>
                    <div className="flex flex-col flex-1 self-stretch my-auto">
                      <h3 className="text-lg font-medium leading-6 uppercase">
                        Projects
                      </h3>
                      <p className="xl:text-5xl font-extrabold lg:text-4xl md:text-4xl text-5xl flex">
                        350+
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col max-md:ml-0 max-md:w-full">
                  <div className="flex grow gap-2.5 items-center pr-5 w-full text-black whitespace-nowrap bg-white rounded-md shadow shadow-slate-400">
                    <div className="bg-[#F3F3F3] rounded-md p-3 h-full flex flex-col justify-center">
                      <img
                        loading="lazy"
                        srcSet="/Group-27-3.svg"
                        className="self-stretch max-w-full aspect-[0.9] w-[68px]"
                        alt="App testing"
                      />
                    </div>
                    <div className="flex flex-col flex-1 self-stretch my-auto">
                      <h3 className="text-lg font-medium leading-6 uppercase">
                        Apps tested
                      </h3>
                      <p className="xl:text-5xl font-extrabold lg:text-4xl md:text-4xl text-5xl flex">
                        300+
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col max-md:ml-0 max-md:w-full">
                  <div className="flex grow gap-2.5 items-center pr-5 w-full text-black whitespace-nowrap bg-white rounded-md shadow shadow-slate-400">
                    <div className="bg-[#F3F3F3] rounded-md p-3 h-full flex flex-col justify-center">
                      <img
                        loading="lazy"
                        srcSet="/Group-28-2.svg"
                        className="self-stretch max-w-full aspect-[0.9] w-[68px]"
                        alt="Bug Fixing"
                      />
                    </div>
                    <div className="flex flex-col flex-1 self-stretch my-auto">
                      <h3 className="text-lg font-medium leading-6 uppercase">
                        Bugs Resolved
                      </h3>
                      <p className="xl:text-5xl font-extrabold lg:text-4xl md:text-4xl text-5xl flex">
                        150<span className="text-3xl self-end">k</span>+
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
        <div className="flex flex-col self-center mt-16 w-full max-w-[1624px]  mx-auto max-md:mt-10 max-md:max-w-full">
          <ScrollAnimation>
            <div className="max-md:max-w-full lg:px-10 px-5 relative">
              <div className="flex gap-5 pb-16 max-md:flex-col max-md:gap-0 max-md:">
                <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full self-center">
                  <div className="flex flex-col text-black max-md:mt-10 max-md:max-w-full">
                    <h2 className="xl:text-4xl lg:text-3xl text-3xl font-medium max-md:max-w-full">
                      Our Distinctive Way
                    </h2>
                    <div className="xl:mt-11 lg:text-xl text-base font-light mt-5 max-md:max-w-full xl:pr-36 tracking-normal">
                      <p>
                        Work with CodeAutomation, where collaboration,
                        creativity, and precision intersect. Our unique approach
                        to project execution blends cutting-edge technology with
                        a human touch. Our specialized experts with top
                        certifications aim to develop innovative options that
                        assist companies in achieving growth goals in the
                        digital era.
                      </p>
                    </div>
                    <div className="flex items-start self-stretch pr-8 text-base xl:text-xl lg:text-lg font-medium whitespace-nowrap max-w-[450px]  max-md:pr-5 mt-12">
                      <Link
                        href="/services"
                        className="cursor flex overflow-hidden relative gap-2 px-6 py-3 items-center bg-[#F7E022] rounded-lg shadow-md"
                      >
                        <p className="relative grow self-center">
                          Explore Our Services
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
                <div className="md:w-5/12 w-full">
                  <img
                    src="/img-our-distinctive-way.webp"
                    className="object-cover size-full"
                    alt="Our Distinctive way"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="grid xl:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 lg:px-10 px-10 lg:mt-11 w-full max-md:mt-10 max-md:max-w-full mb-40">
              <div className="flex flex-col  max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow px-5 pb-6 mx-auto w-full bg-gray-200 rounded-3xl shadow-sm backdrop-blur-[6.5px] max-md:mt-10 relative">
                  <div className="flex z-10 gap-5 justify-between items-start mt-0">
                    <h3 className="flex-auto self-end mt-10 text-2xl font-medium leading-6 text-black max-md:mt-10">
                      Project Initiation
                    </h3>
                    <div className="flex flex-col flex-1 justify-center self-start absolute -top-10 right-5">
                      <div className="flex justify-center items-center px-4 w-20 h-20 bg-white rounded-full shadow shadow-slate-500 border border-slate-300">
                        <img
                          loading="lazy"
                          src="/project-initiation.svg"
                          className="w-full aspect-[1.09]"
                          alt="Project Initiation"
                        />
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-sm font-light text-justify text-black">
                    Our team of development, UX design, and analysis experts can
                    assist in creating new product concepts or improving
                    existing performance.
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
                        src="/design-icon.svg"
                        className="w-full aspect-[1.04]"
                        alt="Design"
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
                      alt="Development"
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
                      alt="automate"
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
                  <div className="flex z-10 justify-center items-center self-end px-6 w-20 h-20 bg-white rounded-full shadow shadow-slate-500 border border-slate-300 max-md:px-5 absolute -top-10 right-5">
                    <img
                      loading="lazy"
                      src="/launch-icon.svg"
                      className="w-full aspect-[0.58]"
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
                      src="/archives-icon.svg"
                      className="w-full aspect-[1.02]"
                      alt="Archives"
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
        </div>

        <div className="flex flex-col bg-[#F3F3F3] py-16 relative overflow-hidden">
          <img
            loading="lazy"
            srcSet="/icon-quote-start.svg"
            className="absolute top-10 -left-2 w-24 h-24 z-20"
            alt="quote-icon"
          />
          <ScrollAnimation>
            <h2 className="w-full xl:text-4xl text-3xl font-medium text-black text-center">
              Our Testimonials
            </h2>
            <p className="self-center md:mt-6 mt-3 lg:text-2xl text-xl text-center text-black">
              Discover what our clients are saying about CodeAutomation
            </p>
            <div className="mx-auto">
              <Suspense fallback={<p>Loading Testimonials Section...</p>}>
                <Testimonials />
              </Suspense>

              <div className="flex justify-center text-base xl:text-xl lg:text-xl font-medium whitespace-nowrap mt-4">
                <Link
                  href="https://clutch.co/profile/codeautomationai#highlights"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex bg-white py-1 px-2 rounded-lg gap-2 border-2 border-blue-500 hover:shadow-lg shadow-2xl hover:border-2 hover:border-transparent transition-all duration-500 ease-in-out"
                >
                  <div className="text-center flex flex-col gap-1">
                    <p className="text-xs text-gray-400">REVIEWED ON</p>
                    <img
                      src="/clutch-icon.svg"
                      alt="clutch-icon"
                      width={80}
                      height={22}
                      // className="h-auto"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <img
                      src="/rating-stars.svg"
                      alt="ratings"
                      width={96}
                      height={18}
                      className="bg-red-600"
                    />
                    <p className="text-xs text-gray-400">8 REVIEWS</p>
                  </div>
                </Link>
              </div>
            </div>
          </ScrollAnimation>
          <img
            loading="lazy"
            srcSet="/icon-quote-end.svg"
            className="absolute bottom-10 -right-3 w-24 h-24 z-20"
            alt="quote-icon"
          />
        </div>

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
