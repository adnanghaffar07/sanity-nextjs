import Link from "next/link";
import React, { Suspense } from "react";
import HomePageSlider from "./components/HomePageSlider";
const Testimonials = React.lazy(() => import("./components/Testimonials"));
const OurWorkSection = React.lazy(() => import("./components/OurWorkSection"));
const Faqs = React.lazy(() => import("./components/Faqs"));

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
          <source src="/hero-sec-video.webm" type="video/mp4" />
        </video>

        <div className="absolute top-0 left-0 w-full h-full bg-[#020C16] opacity-75"></div>
        <div className="flex relative flex-col items-center lg:px-20 px-5 pt-12 w-full max-md:px-5 max-md:max-w-full flex-grow">
          <div className="lg:absolute top-[250px] lg:top-[220px] 2xl:top-[250px] max-lg:mt-36 w-full px-2 md:px-8 xl:px-10">
            <HomePageSlider />
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 text-base mt-10 lg:mt-auto max-md:max-w-full text-center max-w-[1400px]">
            <div className="flex flex-col flex-1 items-center mt-1.5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/789bfcc0ff0740879ffd9bb8daac0f8ec8d0cba214fd374e4e36ffb26087e184?apiKey=ce12b64a678e4e2a868af6b5dfd766b9&"
                className="self-center aspect-[1.12] w-[65px]"
              />
              {/* {bannerbox1content.map((bannerbox1content) => (
                <div className="box-content text-wrap leading-[40px] mt-8" key={bannerbox1content._id}>
                    {bannerbox1content.name}
                </div>
              ))} */}
              {/* {bannerbox1content.content} */}
              <div className="self-stretch lg:mt-11 mt-3 text-wrap text-justify">
                We are trusted by 200 global clients and offer innovative
                software solutions tailored to specific needs and markets
              </div>
            </div>
            <div className="flex flex-col flex-1 items-center mt-1">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd11565216251ba7edf5d297e866d2f669890e35a17a2a5f0451e15e47a8f1e0?apiKey=ce12b64a678e4e2a868af6b5dfd766b9&"
                className="self-center aspect-square w-[58px]"
              />
              <div className="lg:mt-11 mt-3  text-wrap text-justify">
                Completed 350+ projects, showcasing expertise in providing
                creative software products globally
              </div>
            </div>
            <div className="flex flex-col flex-1 items-center text-justify">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4dba27be0f0ef0e7f2222766f9380cd600d6c52ecf6d4faf7f8c09b0bf153bd?apiKey=ce12b64a678e4e2a868af6b5dfd766b9&"
                className="self-center aspect-square w-[58px]"
              />
              <div className="lg:mt-11 mt-3  text-wrap text-justify">
                We professionally assessed 300 apps to assure high-quality and
                reliable software solutions for our clients
              </div>
            </div>
            <div className="flex flex-col flex-1 items-center">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d94d3acf8211d9d93fa767bd062c760909c92d44aa2ffe4184b9e68836f0611?apiKey=ce12b64a678e4e2a868af6b5dfd766b9&"
                className="self-center aspect-[0.89] w-[52px]"
              />
              <div className="lg:mt-11 mt-3  text-wrap text-justify">
                Over 150k bugs have been addressed, ensuring that our
                clients&rsquo; software solutions are reliable and trustworthy
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollAnimation>
        <div className="flex justify-center items-center lg:px-10 md:px-5 lg:py-16 py-16 w-full text-black bg-[#F3F3F3] leading-[100%] max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col w-full max-w-[1582px] max-md:my-10 max-md:max-w-full">
            <div className="self-center xl:text-4xl lg:text-3xl text-3xl font-medium max-md:max-w-full">
              Our Top Services
            </div>

            <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 xl:mt-12 text-xl font-bold whitespace-nowrap max-md:flex-wrap mt-10 max-md:max-w-full">
              <div className="text-center py-4 px-6 bg-white rounded-lg shadow-md max-md:p-3">
                Web Development
              </div>
              <div className="text-center py-4 px-6 bg-white rounded-lg shadow-md max-md:p-3">
                Mobile App Development
              </div>
              <div className="text-center py-4 px-6 bg-white rounded-lg shadow-md max-md:p-3">
                QA Automation Testing
              </div>
              <div className="text-center py-4 px-6 bg-white rounded-lg shadow-md max-md:p-3">
                AI/ML Services
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
      <div className="max-w-full mx-auto relative">
        <img
          loading="lazy"
          src="/ellipse-1.png"
          className="aspect-[1.22] absolute left-0 top-0 lg:block hidden"
        />
        <img
          loading="lazy"
          src="/ellipse-1.png"
          className="absolute left-0 top-0 w-40 lg:hidden block"
        />
        <ScrollAnimation>
          <div className="flex flex-col self-center mt-16 w-full max-w-[1624px]  mx-auto max-md:mt-10 max-md:max-w-full">
            <div className="max-md:max-w-full lg:px-10 px-5 relative">
              <div className="flex gap-5 pb-16 max-md:flex-col max-md:gap-0 max-md:">
                <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full self-center">
                  <div className="flex flex-col text-black max-md:mt-10 max-md:max-w-full">
                    <div className="xl:text-4xl lg:text-3xl text-3xl font-medium max-md:max-w-full">
                      Our Core Expertise
                    </div>
                    <div className="xl:mt-11 lg:text-xl text-base font-light mt-5 max-md:max-w-full xl:pr-36 tracking-normal">
                      <p>
                        Scale up with the team of more than 70 dedicated
                        <span className="font-extrabold ml-1">
                          software engineers
                        </span>{" "}
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
                        <div className="relative grow self-center">
                          Explore Our Technologies
                        </div>
                        <img
                          loading="lazy"
                          src="/btn-arrow.svg"
                          className="w-[22px] h-[26.8px]" // Adjust the width and height
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow pr-4 pb-3.5 w-full bg-sky-500 rounded-3xl max-md:mt-10 max-md:max-w-full">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/73846796fe711256ba598c1f188a0e34c785ed0201b7ea9e6ebc86ca1250f52f?apiKey=ce12b64a678e4e2a868af6b5dfd766b9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/73846796fe711256ba598c1f188a0e34c785ed0201b7ea9e6ebc86ca1250f52f?apiKey=ce12b64a678e4e2a868af6b5dfd766b9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/73846796fe711256ba598c1f188a0e34c785ed0201b7ea9e6ebc86ca1250f52f?apiKey=ce12b64a678e4e2a868af6b5dfd766b9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/73846796fe711256ba598c1f188a0e34c785ed0201b7ea9e6ebc86ca1250f52f?apiKey=ce12b64a678e4e2a868af6b5dfd766b9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/73846796fe711256ba598c1f188a0e34c785ed0201b7ea9e6ebc86ca1250f52f?apiKey=ce12b64a678e4e2a868af6b5dfd766b9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/73846796fe711256ba598c1f188a0e34c785ed0201b7ea9e6ebc86ca1250f52f?apiKey=ce12b64a678e4e2a868af6b5dfd766b9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/73846796fe711256ba598c1f188a0e34c785ed0201b7ea9e6ebc86ca1250f52f?apiKey=ce12b64a678e4e2a868af6b5dfd766b9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/73846796fe711256ba598c1f188a0e34c785ed0201b7ea9e6ebc86ca1250f52f?apiKey=ce12b64a678e4e2a868af6b5dfd766b9&"
                      className="z-10 mt-0 w-full aspect-[0.78] max-md:max-w-full"
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
            <div className="w-full xl:text-4xl lg:text-3xl text-3xl font-medium text-black max-md:max-w-full max-md:text-4xl lg:pt-20 pt-16 text-center">
              Why Work With Us
            </div>
            <div className="px-px mt-14 w-full max-md:mt-10 max-md:max-w-full">
              <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 max-md:flex-col">
                <div className="flex flex-col max-md:ml-0 max-md:w-full">
                  <div className="flex grow gap-2.5 items-center pr-5 w-full text-black whitespace-nowrap bg-white rounded-md shadow shadow-slate-400">
                    <div className="bg-[#F3F3F3] rounded-md p-3 h-full flex-col justify-center flex h-100">
                      <img
                        loading="lazy"
                        srcSet="/Group-17-1.svg"
                        className="self-stretch max-w-full aspect-[0.9] w-[68px]"
                      />
                    </div>
                    <div className="flex flex-col flex-1 self-stretch my-auto">
                      <div className="text-lg font-medium leading-6 uppercase">
                        Global Client
                      </div>
                      <div className="xl:text-5xl font-extrabold lg:text-4xl md:text-4xl text-5xl flex">
                        200+
                      </div>
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
                      />
                    </div>
                    <div className="flex flex-col flex-1 self-stretch my-auto">
                      <div className="text-lg font-medium leading-6 uppercase">
                        Projects
                      </div>
                      <div className="xl:text-5xl font-extrabold lg:text-4xl md:text-4xl text-5xl flex">
                        350+
                      </div>
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
                      />
                    </div>
                    <div className="flex flex-col flex-1 self-stretch my-auto">
                      <div className="text-lg font-medium leading-6 uppercase">
                        Apps tested
                      </div>
                      <div className="xl:text-5xl font-extrabold lg:text-4xl md:text-4xl text-5xl flex">
                        300+
                      </div>
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
                      />
                    </div>
                    <div className="flex flex-col flex-1 self-stretch my-auto">
                      <div className="text-lg font-medium leading-6 uppercase">
                        Bugs Resolved
                      </div>
                      <div className="xl:text-5xl font-extrabold lg:text-4xl md:text-4xl text-5xl flex">
                        150<span className="text-3xl self-end">k</span>+
                      </div>
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
                    <div className="xl:text-4xl lg:text-3xl text-3xl font-medium max-md:max-w-full">
                      Our Distinctive Way
                    </div>
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
                        <div className="relative grow self-center">
                          Explore Our Services
                        </div>
                        <img
                          loading="lazy"
                          src="/btn-arrow.svg"
                          className="w-[22px] h-[26.8px]" // Adjust the width and height
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="md:w-5/12 w-full">
                  <img
                    src="/img-our-distinctive-way.jpg"
                    className="object-cover size-full"
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
                    <div className="flex-auto self-end mt-10 text-2xl font-medium leading-6 text-black max-md:mt-10">
                      Project Initiation
                    </div>
                    <div className="flex flex-col flex-1 justify-center self-start absolute -top-10 right-5">
                      <div className="flex justify-center items-center px-4 w-20 h-20 bg-white rounded-full shadow shadow-slate-500 border border-slate-300">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e06a953d2b12819c328b7856df7297b2c237c518892fa897eafb85e00ced39e?"
                          className="w-full aspect-[1.09]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 text-sm font-light text-justify text-black">
                    Our team of development, UX design, and analysis experts can
                    assist in creating new product concepts or improving
                    existing performance.
                  </div>
                </div>
              </div>
              <div className="flex flex-col  max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow px-7 pb-7 mx-auto w-full bg-gray-200 rounded-3xl shadow-sm backdrop-blur-[6.5px] max-md:pl-5 max-md:mt-10 relative">
                  <div className="flex z-10 gap-5 justify-between items-start mt-0">
                    <div className="self-end mt-10 text-2xl font-medium leading-6 text-black max-md:mt-10">
                      Design
                    </div>
                    <div className="flex justify-center items-center self-start px-5 w-20 h-20 bg-white rounded-full shadow shadow-slate-500 border border-slate-300 max-md:pl-5 absolute -top-10 right-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e27351cdef1346bafe3d18f5e0c002c781d6f5cfc694e39225cd3b6a00874e5?"
                        className="w-full aspect-[1.04]"
                      />
                    </div>
                  </div>
                  <div className="mt-3 text-sm font-light text-justify text-black">
                    Our talented design team creates visually appealing digital
                    user experiences to solve practical issues and enhance key
                    business metrics.
                  </div>
                </div>
              </div>
              <div className="flex flex-col  max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow pb-6 w-full bg-gray-200 rounded-3xl shadow-sm backdrop-blur-[6.5px] max-md:mt-10 relative">
                  <div className="flex z-10 justify-center items-center self-end px-5 w-20 h-20 bg-white rounded-full shadow shadow-slate-500 border border-slate-300 max-md:pr-5 absolute -top-10 right-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/0fb7a8838ae43aeb6e3fda9b3773993bee23b60d69788543a0e8c918cd4ef36f?"
                      className="w-full aspect-[1.02]"
                    />
                  </div>
                  <div className="flex flex-col px-7 text-black max-md:px-5">
                    <div className="text-2xl font-medium leading-6 mt-10">
                      Development
                    </div>
                    <div className="mt-3 text-sm font-light text-justify">
                      We create efficient, secure apps for your company, by a
                      product strategy, assembling a skilled team, and starting
                      coding to give your brand a competitive edge.
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col  max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow pb-6 w-full bg-gray-200 rounded-3xl shadow-sm backdrop-blur-[6.5px] max-md:mt-10 relative">
                  <div className="flex z-10 justify-center items-center self-end px-4 w-20 h-20 bg-white rounded-full shadow shadow-slate-500 border border-slate-300 absolute -top-10 right-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6b42f096ae127b6c0db8f6a7b08b39c23b22179ce2b09c3d355129d25549fee?"
                      className="w-full aspect-[1.02]"
                    />
                  </div>
                  <div className="flex flex-col px-5 text-black">
                    <div className="text-2xl font-medium leading-6 mt-10">
                      Automate
                    </div>
                    <div className="mt-3 text-sm font-light text-justify">
                      Product testing, also known as consumer or comparative
                      testing, measures a product&rsquo;s characteristics or
                      capabilities to develop goods that meet specific technical
                      criteria.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col  max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow pb-6 w-full bg-gray-200 rounded-3xl shadow-sm backdrop-blur-[6.5px] max-md:mt-10 relative">
                  <div className="flex z-10 justify-center items-center self-end px-8 w-20 h-20 bg-white rounded-full shadow shadow-slate-500 border border-slate-300 max-md:px-5 absolute -top-10 right-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/959a6985ac95c743a93b95368cfb330ff373e0725372de8195d6270929065ba6?"
                      className="w-full aspect-[0.58]"
                    />
                  </div>
                  <div className="flex flex-col pr-3.5 pl-7 text-black max-md:pl-5">
                    <div className="text-2xl font-medium leading-6 mt-10">
                      Launch
                    </div>
                    <div className="mt-3 text-sm font-light text-justify">
                      The final product is launched after client approval,
                      fostering growth for both companies. Our industry
                      continuously improves, and we ensure project safety.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col  max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow pb-6 w-full bg-gray-200 rounded-3xl shadow-sm backdrop-blur-[6.5px] max-md:mt-10 relative">
                  <div className="flex z-10 justify-center items-center self-end px-5 w-20 h-20 bg-white rounded-full shadow shadow-slate-500 border border-slate-300 absolute -top-10 right-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/19a903a5ee526b51ff93d213159f9d2866831e839a1d122133e785207a4f1b59?"
                      className="w-full aspect-[1.02]"
                    />
                  </div>
                  <div className="flex flex-col px-7 text-black max-md:px-5">
                    <div className="text-2xl font-medium leading-6 mt-10">
                      Archives and Artifacts
                    </div>
                    <div className="mt-3 text-sm font-light text-justify">
                      You are the project owner, entitled to our as-built
                      documentation, specifications, test scripts, and release
                      scripts for future analysis or development.
                    </div>
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
          />
          <ScrollAnimation>
            <div className="w-full xl:text-4xl text-3xl font-medium text-black text-center">
              Our Testimonials
            </div>
            <div className="self-center md:mt-6 mt-3 lg:text-2xl text-xl text-center text-black">
              Discover what our clients are saying about CodeAutomation
            </div>
            <div className="mx-auto">
              <Suspense fallback={<div>Loading Testimonials Section...</div>}>
                <Testimonials />
              </Suspense>

              <div className="flex justify-center text-base xl:text-xl lg:text-xl font-medium whitespace-nowrap mt-4">
                {/* <Link
                  href="https://clutch.co/profile/codeautomationai#highlights"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor flex overflow-hidden relative gap-2.5 px-8 py-3 items-center bg-[#F7E022] rounded-lg shadow-md"
                >
                  <div className="relative grow self-center">
                    Check out Clutch
                  </div>
                  <img
                    loading="lazy"
                    src="/btn-arrow.svg"
                    className="w-[22px] h-[26.8px]"
                    alt="Arrow icon"
                  />
                </Link> */}

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
                      className="w-20"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <img
                      src="/rating-stars.svg"
                      // src="/rating-stars1.svg"
                      alt="ratings"
                      className="w-24 bg-red-600"
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
          />
        </div>

        <ScrollAnimation>
          <div className="flex gap-5 max-md:flex-wrap lg:px-10 lg:py-16 py-8 md:px-5 w-full mx-auto relative">
            <img
              loading="lazy"
              src="/ellipse-2.png"
              className="aspect-[1.22] absolute right-0 top-80"
            />
            <div className="flex flex-col flex-1 px-5 text-xl ml-8 relative z-10 xl:container xl:mx-auto">
              <div className="xl:text-4xl lg:text-3xl text-3xl font-medium text-black max-md:max-w-full mt-4 text-center">
                Our FAQs
              </div>
              <Suspense fallback={<div>Loading FAQs Section...</div>}>
                <Faqs />
              </Suspense>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}
