import Image from "next/image";
import Script from "next/script";
import ScrollAnimation from "../components/ScrollAnimation";
import ServicesHeroSection from "./components/ServicesHeroSection";
import { urlForImage } from "@/sanity/lib/image";
import { client } from "../../../sanity/lib/client";
import ServicesCard from "../components/Services-Cards";

export const metadata = {
  title: "Software Development, AI & Automation Services | CodeAutomation",
  description:
    "Explore Code Automation services, an AI development company offering AI agents and business automation solutions to streamline operations and scale your business.",
  keywords: [
    "CodeAutomation",
    "software development company",
    "software development services",
  ],
  alternates: {
    canonical: "https://codeautomation.ai/services", // ✅ Fixes the canonical error
  },
  openGraph: {
    type: "website",
    url: "https://codeautomation.ai/services",
    title: "Software Development, AI & Automation Services | CodeAutomation",
    description:
      "Explore Code Automation services, an AI development company offering AI agents and business automation solutions to streamline operations and scale your business.",
    images: [
      {
        url: "https://codeautomation.ai/thankyou.jpg",
        width: 1200,
        height: 630,
        alt: "CodeAutomation Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development, AI & Automation Services | CodeAutomation",
    description:
      "Explore Code Automation services, an AI development company offering AI agents and business automation solutions to streamline operations and scale your business.",
    images: ["https://codeautomation.ai/thankyou.jpg"],
  },
};

const SERVICES_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://codeautomation.ai/services",
  url: "https://codeautomation.ai/services",
  name: "AI Automation & Software Development Services",
  description:
    "CodeAutomation offers a full suite of AI automation, custom software development, CRM integration, and digital transformation services for businesses across the USA, UK, and Canada.",
  provider: {
    "@type": "Organization",
    name: "CodeAutomation",
    url: "https://codeautomation.ai",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chicago",
      addressRegion: "IL",
      addressCountry: "US",
    },
  },
  areaServed: ["US", "GB", "CA"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.6",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "214",
  },
};

async function getData() {
  const query = `*[_type == "logicalServices"] | order(_createdAt asc){
    _id,
    urlPath,
    serviceCardTitle,
    serviceDesc,
    cardIcon
  }`;
  try {
    const fetchData = await client.fetch(query);
    return fetchData || [];
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

const growthCardsArr = [
  {
    imgSrc: "/services-icon-vision.png",
    title: "Vision to Reality",
    description:
      "We leverage the latest technological trends to bring your vision to reality.",
  },
  {
    imgSrc: "/services-icon-expert.png",
    title: "Dedicated Experts",
    description:
      "Partner with our world-class team of technology experts to attain highest level of service and support.",
  },
  {
    imgSrc: "/services-icon-process.png",
    title: "Process Driven",
    description:
      "Ensuring consistency, precision, and transparency in our projects using an experienced processed driven approach.",
  },
  {
    imgSrc: "services-icon-acceleration.png",
    title: "Digital Acceleration",
    description:
      "Transforming the digital landscape for our clients by leveraging the latest technologies and innovative solutions.",
  },
];

const Services = async () => {
  const data = await getData();

  return (
    <div>
      <Script
        id="services-structured-data"
        type="application/ld+json"
        strategy="lazyOnload"
      >
        {JSON.stringify(SERVICES_JSON_LD)}
      </Script>
      <ServicesHeroSection />

      <ScrollAnimation>
        <section className="flex flex-col items-center px-4 py-8 sm:py-24 w-full text-center text-black bg-blue-50 max-md:px-5 max-md:max-w-full">
          <h3 className="text-2xl sm:text-5xl tracking-tight font-semibold capitalize leading-[28px] sm:leading-[61px] max-md:max-w-full container mx-auto">
            Your Partner for all your digital needs
          </h3>

          <p className="mt-5 mb-2 text-lg sm:text-xl leading-7 text-gray-900 max-w-6xl mx-auto text-center mx-auto">
            As a custom software development company, we offer a wide range of
            technological solutions including but not limited to web development
            services, SaaS services, and app development services. Our teams of
            experts have the required knowledge and experience to deliver
            bespoke solutions in network infrastructure, cloud computing, custom
            software solutions, cybersecurity solutions, and so on.
          </p>
        </section>
      </ScrollAnimation>
      <ServicesCard data={data} />
      <ScrollAnimation>
        <section className="relative overflow-hidden px-6 md:px-16 max-w-7xl mx-auto">
          <div className="flex flex-col xl:flex-row items-center justify-center xl:gap-20 2xl:gap-22">
            {/* Text Section */}
            <div className="flex flex-col justify-center mt-10 md:mt-24 text-center xl:text-left w-full">
              <h2 className="text-3xl md:text-5xl leading-8 md:leading-[60px] text-black">
                Trusted Partner To Your <br /> Success And Growth
              </h2>
              <p className="mt-6 sm:mt-10 text-lg leading-7 text-black mx-auto xl:mx-0 max-w-full sm:max-w-[570px] z-20">
                Codeautomation has a global presence and takes pride in its ability to deliver
                effective and innovative solutions for businesses. It takes a meticulous
                approach and ensures the highest level of service and support to its clients.
                Our team of experts is committed to providing.
              </p>
            </div>

            {/* Image Section */}
            <div className="w-full sm:w-[280px] md:w-[420px] lg:w-[670px] mt-10 sm:mt-16">
              <Image
                src="/business-and growth-1.png"
                alt="Trusted Partner Image"
                width={570}
                height={570}
                loading="lazy"
                className="w-full max-w-[570px] mx-auto"
              />
            </div>
          </div>
        </section>

      </ScrollAnimation>
      <div className="bg-[#1D92FB] opacity-15 w-[734px] h-[734px] rounded-full absolute -left-[660px] md:-left-[560px] bottom-120 flex items-center justify-center z-0">
        <div className="bg-white w-[584px] h-[584px] rounded-full"></div>
      </div>
      <div className="pt-24 sm:pt-32 md:px-16 relative 2xl:container 2xl:mx-auto overflow-x-hidden">
        <ScrollAnimation>
          <div className="flex justify-center items-center flex-wrap xl:flex-nowrap xl:px-2 gap-12 sm:gap-28 xl:gap-5 2xl:gap-10 pt-4">
            {growthCardsArr.length &&
              growthCardsArr.map((card, i) => {
                return (
                  <div
                    className="flex flex-col  relative w-[280px] sm:w-[314px] h-[164px]"
                    key={i}
                  >
                    <div className="flex flex-col grow">
                      <div className="flex z-10  justify-center items-center self-end px-4 bg-white rounded-full h-[58px] sm:h-[87px] w-[58px] sm:w-[87px] max-md:mr-2.5 absolute right-0 sm:right-5 -top-6 sm:-top-10 md:-top-12 drop-shadow-serviceCard">
                        <img
                          loading="lazy"
                          src={card.imgSrc}
                          alt="icon"
                          className="w-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col justify-center px-4 h-full text-black bg-[#EDECEC] rounded-lg sm:rounded-3xl shadow-sm backdrop-blur-[6.5px]">
                        <div className="text-lg font-medium leading-5">
                          {card.title}
                        </div>
                        <div className="mt-2.5 text-sm font-light leading-5 max-w-[246px]">
                          {card.description}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </ScrollAnimation>

        <div className="2xl:container 2xl:mx-auto mt-14 sm:mt-16 md:mt-20 xl:mt-24">
          <ScrollAnimation>
            <h2 className="mx-auto text-3xl md:text-5xl text-center mb-6 capitalize leading-7 text-black max-w-[1120px]">
              Steps we Take to Make Your Project Successful
            </h2>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="flex flex-wrap xl:flex-nowrap gap-10 xl:gap-5 2xl:gap-10 justify-center items-center mt-12 text-black mb-[114px]">
              <div className="flex flex-col justify-center bg-[#EDECEC] rounded-3xl shadow-sm relative w-[224px] h-[200px]">
                <div className="flex justify-center items-center px-5 mt-0 text-3xl font-semibold tracking-tight leading-4 text-justify whitespace-nowrap bg-white rounded-full h-[62px] w-[62px] absolute -right-2 -top-7 drop-shadow-serviceCard">
                  01
                </div>
                <div className="flex flex-col px-4 mt-2">
                  <div className="text-base font-medium leading-6">
                    Understanding
                    <br />
                    Client Goals
                  </div>
                  <div className="mt-3 text-sm font-light tracking-normal leading-5  max-w-[200px]">
                    We align our design with the client&apos;s goals and vision through in-depth discussions and insights.
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center bg-[#EDECEC] rounded-3xl shadow-sm z-10 relative w-[234px] h-[196px]">
                <div className="flex justify-center items-center px-5 mt-0 text-3xl font-semibold tracking-tight leading-4 text-justify whitespace-nowrap bg-white rounded-full h-[62px] w-[62px] absolute -right-2 -top-8 drop-shadow-serviceCard">
                  02
                </div>
                <div className="flex flex-col px-4 mt-2">
                  <div className="text-base font-medium leading-6">
                    Thorough Research & Analysis
                  </div>
                  <div className="mt-3 text-sm font-light tracking-normal leading-5  max-w-[200px]">
                    We conduct research to understand the industry and audience, ensuring our design is relevant and effective.
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center bg-[#EDECEC] rounded-3xl shadow-sm z-10 relative w-[234px] h-[196px]">
                <div className="flex justify-center items-center px-5 mt-0 text-3xl font-semibold tracking-tight leading-4 text-justify whitespace-nowrap bg-white rounded-full h-[62px] w-[62px] absolute -right-2 -top-7 drop-shadow-serviceCard">
                  03
                </div>
                <div className="flex flex-col px-4 mt-2">
                  <div className="text-base font-medium leading-6">
                    Concept Development & Iteration
                  </div>
                  <div className="mt-3 text-sm font-light tracking-normal leading-5  max-w-[200px]">
                    We create and refine design concepts based on client feedback to meet their vision.
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center bg-[#EDECEC] rounded-3xl shadow-sm z-10 relative w-[234px] h-[196px]">
                <div className="flex justify-center items-center px-5 mt-0 text-3xl font-semibold tracking-tight leading-4 text-justify whitespace-nowrap bg-white rounded-full h-[62px] w-[62px] absolute -right-2 -top-7 drop-shadow-serviceCard">
                  04
                </div>
                <div className="flex flex-col px-4 mt-2">
                  <div className="text-base font-medium leading-6">
                    Attention to Details & Quality Assurance
                  </div>
                  <div className="mt-3 text-sm font-light tracking-normal leading-5  max-w-[200px]">
                    We ensure high quality and attention to detail through rigorous checks.
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center bg-[#EDECEC] rounded-3xl shadow-sm z-10 relative w-[234px] h-[196px]">
                <div className="flex justify-center items-center px-5 mt-0 text-3xl font-semibold tracking-tight leading-4 text-justify whitespace-nowrap bg-white rounded-full h-[62px] w-[62px] absolute -right-2 -top-7 drop-shadow-serviceCard">
                  05
                </div>
                <div className="flex flex-col px-4 mt-2">
                  <div className="text-base font-medium leading-6">
                    Timely Delivery & Client Satisfaction
                  </div>
                  <div className="mt-3 text-sm font-light tracking-normal leading-5  max-w-[200px]">
                    We deliver projects on time while focusing on exceeding client expectations.
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default Services;
