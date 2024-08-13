import React from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollAnimation from "../components/ScrollAnimation";
import { urlForImage } from "@/sanity/lib/image";
import { client } from "../../../sanity/lib/client";

async function getData() {
  const query = `*[_type == 'logicalServices'] | order(_createdAt asc)`;
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
      <div className="flex overflow-hidden relative flex-col pb-12 w-full font-light text-white lg:min-h-[700px] max-md:max-w-full">
        <img
          className="absolute top-0 left-0 object-cover inset-0 size-full"
          src="/bg-services.jpg"
          alt="Services"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#020C16] opacity-65"></div>
        <div className="flex relative flex-col items-center lg:px-20 px-5 lg:pt-12 lg:pb-0 pt-48 pb-36 w-full max-md:px-5 max-md:max-w-full flex-grow">
          <div className="lg:absolute lg:top-[300px]">
            <div className="lg:text-4xl text-2xl font-bold text-center capitalize max-lg:mt-0 max-md:max-w-full">
              <h2 className="title capitalize">Our Services</h2>
            </div>
            <div className="lg:text-2xl text-center mt-4 max-md:max-w-full lg:px-32">
              CodeAutomation.ai provides comprehensive software development,
              testing, and automation solutions to enable digital transformation
              for enterprises globally
            </div>
          </div>
        </div>
      </div>

      <ScrollAnimation>
        <section className="flex flex-col items-center px-4 py-8 sm:py-24 w-full text-center text-black bg-zinc-100 max-md:px-5 max-md:max-w-full">
          <h2 className="text-2xl sm:text-5xl tracking-tight capitalize leading-[28px] sm:leading-[61px] max-md:max-w-full container mx-auto">
            Your Partner for all your digital needs
          </h2>

          <p className="mt-5 mb-2 text-xs sm:text-xl leading-4 sm:leading-7 max-w-[1080px] container mx-auto">
            As a custom software development company, we offer a wide range of
            technological solutions including but not limited to web development
            services, SaaS services, and app development services. Our teams of
            experts have the required knowledge and experience to deliver
            bespoke solutions in network infrastructure, cloud computing, custom
            software solutions, cybersecurity solutions, and so on.
          </p>
        </section>
      </ScrollAnimation>

      {/* Services Card */}
      <section className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-[40px] sm:gap-[80px] 2xl:gap-[120px] max-w-[1440px] my-12 sm:my-40 mx-auto">
        {data.map((service) => (
          <ScrollAnimation key={service._id}>
            <Link
              href={`/services/${service.urlPath}`}
              className="flex flex-col relative w-[276px] sm:w-[348px] h-[143px] sm:h-[175px]"
            >
              <div className="z-10 px-3.5 w-10 sm:w-20 h-10 sm:h-20 bg-white rounded-full absolute flex justify-center items-center right-2 sm:right-5 -top-6 sm:-top-14 drop-shadow-serviceCard">
                {service.cardIcon && (
                  <img
                    src={urlForImage(service.cardIcon).toString()}
                    loading="lazy"
                    alt="service-icon"
                    className="w-10 sm:w-[54px] h-10 sm:h-[54px] object-contain"
                  />
                )}
              </div>

              <div
                className={`flex gap-2.5 ${
                  service.urlPath.length > 22
                    ? "py-0 sm:py-4"
                    : " py-5 sm:py-10 "
                } pl-5 text-black rounded-lg sm:rounded-3xl shadow-lg backdrop-blur-[6.5px] bg-[#D7D7D7] bg-opacity-30 w-[276px] sm:w-[348px] h-[143px] sm:h-[175px]`}
              >
                <div className="flex flex-col grow shrink-0 w-fit">
                  <h3
                    className={`text-base sm:text-xl font-medium leading-6 ${
                      service.urlPath.length > 22
                        ? "max-w-[200px] sm:max-w-[250px]"
                        : ""
                    }`}
                  >
                    {service.serviceCardTitle}
                  </h3>

                  <p
                    className={`${
                      service.urlPath.length > 22 ? "mt-1 sm:mt-4" : "mt-4"
                    } text-[15px] sm:text-sm font-light leading-4  max-w-[230px] sm:max-w-[274px]`}
                  >
                    {service.serviceDesc}
                  </p>
                </div>

                <img
                  src={"/service-card-right-arrow.png"}
                  alt="arrow-icon"
                  className="z-10 shrink-0 self-end mt-8 aspect-square w-[36px] sm:w-[53px] absolute -right-4 top-5 sm:-right-7"
                />
              </div>
            </Link>
          </ScrollAnimation>
        ))}
      </section>

      <ScrollAnimation>
        <section className="relative overflow-hidden px-4 xl:px-2 max-w-[1440px] 2xl:mx-auto">
          <div className="flex flex-col xl:flex-row items-center justify-center xl:gap-20 2xl:gap-22">
            <div className="flex flex-col justify-center mt-10 md:mt-24 text-left">
              <h2 className="text-xl sm:text-3xl md:text-5xl 2xl:text-5xl leading-[28px] md:leading-[60px] text-sky-950 z-20">
                Trusted Partner To Your <br /> Success And Growth
              </h2>
              <p className="self-end sm:mt-10 xl:mt-10 text-xs sm:text-xl leading-4 sm:leading-7 text-black max-w-[270px] sm:max-w-[570px] z-20">
                Codeautomation has a global presence and takes pride in its
                ability to deliver effective and innovative solutions for
                businesses. It takes a meticulous approach and ensures the
                highest level of service and support to its clients. Our team of
                experts is committed to providing.
              </p>
            </div>

            <div className="w-[190px] sm:w-[280px] md:w-[420px] lg:w-[570px]">
              <Image
                src="/business-and growth-1.png"
                alt="Trusted Partner Image"
                width={570}
                height={570}
                loading="lazy"
                className="w-full aspect-square"
              />
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <div className="pt-24 sm:pt-32 relative 2xl:container 2xl:mx-auto overflow-x-hidden">
        <div className="bg-[#1D92FB] opacity-15 w-[734px] h-[734px] rounded-full absolute -left-[600px] md:-left-[500px] -top-20 flex items-center justify-center z-0">
          <div className="bg-white w-[584px] h-[584px] rounded-full"></div>
        </div>

        <ScrollAnimation>
          <div className="flex justify-center items-center flex-wrap xl:flex-nowrap xl:px-2 gap-12 sm:gap-28 xl:gap-5 2xl:gap-10 pt-4">
            {growthCardsArr.length &&
              growthCardsArr.map((card, i) => {
                return (
                  <div
                    className="flex flex-col relative w-[286px] sm:w-[314px] h-[144px] md:h-[158px]"
                    key={i}
                  >
                    <div className="flex flex-col grow">
                      <div className="flex z-10 justify-center items-center self-end px-4 bg-white rounded-full h-[58px] sm:h-[87px] w-[58px] sm:w-[87px] max-md:mr-2.5 absolute right-0 sm:right-5 -top-6 sm:-top-10 md:-top-12 drop-shadow-serviceCard">
                        <img
                          loading="lazy"
                          src={card.imgSrc}
                          alt="icon"
                          className="w-full aspect-square"
                        />
                      </div>
                      <div className="flex flex-col justify-center px-4 h-full text-black bg-[#EDECEC] rounded-lg sm:rounded-3xl shadow-sm backdrop-blur-[6.5px]">
                        <div className="text-lg font-medium leading-5">
                          {card.title}
                        </div>
                        <div className="mt-2.5 text-xs font-light tracking-normal leading-4 text-justify max-w-[246px]">
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
            <h2 className="mx-auto text-2xl sm:text-3xl md:text-5xl text-center capitalize leading-[28px] sm:leading-[61px] text-sky-950 max-w-[1120px]">
              Steps we Take to Make Your Project Successful
            </h2>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="flex flex-wrap xl:flex-nowrap gap-10 xl:gap-5 2xl:gap-10 justify-center items-center mt-12 text-black mb-[114px] mx-4">
              <div className="flex flex-col justify-center bg-[#EDECEC] rounded-3xl shadow-sm z-10 relative w-[234px] h-[196px]">
                <div className="z-10 flex justify-center items-center px-5 mt-0 text-3xl font-semibold tracking-tight leading-4 text-justify whitespace-nowrap bg-white rounded-full h-[62px] w-[62px] absolute -right-2 -top-4 drop-shadow-serviceCard">
                  01
                </div>
                <div className="flex flex-col pl-4 mt-2">
                  <div className="text-base font-medium leading-6 pt-6">
                    Understanding
                    <br />
                    Client Goals
                  </div>
                  <div className="mt-5 text-xs font-light tracking-normal leading-4  max-w-[200px]">
                  We align our design with the client&apos;s goals and vision through in-depth discussions and insights.
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center bg-[#EDECEC] rounded-3xl shadow-sm z-10 relative w-[234px] h-[196px]">
                <div className="z-10 flex justify-center items-center self-end px-3.5 mt-0 text-3xl font-semibold tracking-tight leading-4 text-justify whitespace-nowrap bg-white rounded-full h-[62px] w-[62px] absolute -right-2 -top-4 drop-shadow-serviceCard">
                  02
                </div>
                <div className="flex flex-col pl-4 mt-2">
                  <div className="text-base font-medium leading-6 pt-6">
                    Thorough Research & Analysis
                  </div>
                  <div className="mt-4 text-xs font-light tracking-normal leading-4  max-w-[200px]">
                  We conduct research to understand the industry and audience, ensuring our design is relevant and effective.
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center bg-[#EDECEC] rounded-3xl shadow-sm z-10 relative w-[234px] h-[196px]">
                <div className="z-10 flex justify-center items-center self-end px-4 mt-0 text-3xl font-semibold tracking-tight leading-4 text-justify whitespace-nowrap bg-white rounded-full h-[62px] w-[62px] absolute -right-2 -top-4 drop-shadow-serviceCard">
                  03
                </div>
                <div className="flex flex-col pl-4 mt-2">
                  <div className="text-base font-medium leading-6 pt-6">
                    Concept Development & Iteration
                  </div>
                  <div className="mt-5 text-xs font-light tracking-normal leading-4  max-w-[200px]">
                  We create and refine design concepts based on client feedback to meet their vision.
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center bg-[#EDECEC] rounded-3xl shadow-sm z-10 relative w-[234px] h-[196px]">
                <div className="z-10 flex justify-center items-center self-end px-3 mt-0 text-3xl font-semibold tracking-tight leading-4 text-justify whitespace-nowrap bg-white rounded-full h-[62px] w-[62px] absolute -right-2 -top-4 drop-shadow-serviceCard">
                  04
                </div>
                <div className="flex flex-col pl-4 mt-2">
                  <div className="text-base font-medium leading-6 pt-6">
                    Attention to Details & Quality Assurance
                  </div>
                  <div className="mt-4 text-xs font-light tracking-normal leading-4  max-w-[200px]">
                  We ensure high quality and attention to detail through rigorous checks.
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center bg-[#EDECEC] rounded-3xl shadow-sm z-10 relative w-[234px] h-[196px]">
                <div className="z-10 flex justify-center items-center self-end px-3.5 mt-0 text-3xl font-semibold tracking-tight leading-4 text-justify whitespace-nowrap bg-white rounded-full h-[62px] w-[62px] absolute -right-2 -top-4 drop-shadow-serviceCard">
                  05
                </div>
                <div className="flex flex-col pl-4 mt-2">
                  <div className="text-base font-medium leading-6 pt-6">
                    Timely Delivery & Client Satisfaction
                  </div>
                  <div className="mt-5 text-xs font-light tracking-normal leading-4  max-w-[200px]">
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
