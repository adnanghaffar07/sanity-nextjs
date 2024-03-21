import React from "react";
import HeroSectionComponent from "../components/HeroSectionComponent";
import ServiceCard from "../components/ServiceCard";
import Image from "next/image";

const servicesArr = [
  {
    imageSrc: "/service-card-ad.png",
    title: "App Development",
    description:
      "Explore the realm of automation and artificial intelligence with our Robotic Research services. Our team of experts delves into cutting....",
    iconSrc: "/service-card-right-arrow.png",
    linkUrl: "app-development",
  },
  {
    imageSrc: "/service-card-ai.png",
    title: "AI/ML Services",
    description:
      "CodeAutomation offers customized solutions, advanced technology, and seamless integration to optimize data potential and drive success, leveraging AI and ML for optimal results....",
    iconSrc: "/service-card-right-arrow.png",
    linkUrl: "ai-ml-services",
  },
  {
    imageSrc: "/service-card-aiheadless-cms.png",
    title: "Headless - CMS",
    description:
      "Transform your content management system with our Customized Headless CMS development solutions.",
    iconSrc: "/service-card-right-arrow.png",
    linkUrl: "headless-cms",
  },
  {
    imageSrc: "/service-card-sd.png",
    title: "Software Development",
    description:
      "Rely on our Software Development services to build robust, scalable, and custom software solutions that address your unique needs. With expertise in various programming....",
    iconSrc: "/service-card-right-arrow.png",
    linkUrl: "software-development",
  },
  {
    imageSrc: "/service-card-wd.png",
    title: "Web Development",
    description:
      "Leverage the power of data with our Data & Web Scraping services. We help you extract valuable information from websites and various sources.....",
    iconSrc: "/service-card-right-arrow.png",
    linkUrl: "web-development",
  },
  {
    imageSrc: "/service-card-qa.png",
    title: "QA Automation Testing",
    description:
      "Comprehensive and meticulous, our QA Manual Testing services ensure your software is thoroughly evaluated and meets the highest quality standards....",
    iconSrc: "/service-card-right-arrow.png",
    linkUrl: "qa-automation-testing",
  },
  {
    imageSrc: "/service-card-qa-manual.png",
    title: "QA Manual Testing",
    description:
      "Comprehensive and meticulous, our QA Manual Testing services ensure your software is thoroughly evaluated and meets the highest quality standards. Our....",
    iconSrc: "/service-card-right-arrow.png",
    linkUrl: "qa-manual-testing",
  },
  {
    imageSrc: "/service-card-dm.png",
    title: "Digital Marketing",
    description:
      "Boost your online presence and reach your target audience effectively with our Digital Marketing services. Our experienced digital marketers develop comprehensive....",
    iconSrc: "/service-card-right-arrow.png",
    linkUrl: "digital-marketing",
  },
  {
    imageSrc: "/service-card-dws.png",
    title: "Data & Web Scraping",
    description:
      "Leverage the power of data with our Data & Web Scraping services. We help you extract valuable information from websites and various sources, providing you with accurate and....",
    iconSrc: "/service-card-right-arrow.png",
    linkUrl: "data-and-web-scraping",
  },
  {
    imageSrc: "/service-card-ui.png",
    title: "UI/UX Design",
    description:
      "Deliver an exceptional user experience with our UI/UX Design services. Our talented designers combine aesthetics and functionality to create intuitive and visually appealing....",
    iconSrc: "/service-card-right-arrow.png",
    linkUrl: "ui-and-ux-design",
  },
  {
    imageSrc: "/service-card-ba.png",
    title: "Business Automation",
    description:
      "Streamline and optimize your operations with our Business Automation services. We leverage the power of technology to automate repetitive tasks, workflows....",
    iconSrc: "/service-card-right-arrow.png",
    linkUrl: "business-automation",
  },
  {
    imageSrc: "/service-card-rr.png",
    title: "Robotic Research",
    description:
      "Explore the realm of automation and artificial intelligence with our Robotic Research services. Our team of experts delves into cutting-edge technologies like robotic....",
    iconSrc: "/service-card-right-arrow.png",
    linkUrl: "robotic-research",
  },
  {
    imageSrc: "/service-card-crm.png",
    title: "CRM Integration & Development Services",
    description:
      "Boost productivity and customer engagement with our expert CRM integration solutions. Tailored to your business, we automate processes and ensure data flow effortlessly in Salesforce, SugarCRM and Civi....",
    iconSrc: "/service-card-right-arrow.png",
    linkUrl: "crm-integration",
  },
];

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

const Services = () => {
  return (
    <>
      <HeroSectionComponent
        title='"Our Services"'
        content="CodeAutomation.ai provides comprehensive software development,
      testing, and automation solutions to enable digital transformation for
      enterprises globally."
        image="/bg-services.png"
      />

      <section className="flex flex-col items-center px-4 py-8 sm:py-24 w-full text-center text-black bg-zinc-100 max-md:px-5 max-md:max-w-full">
        <h2 className="text-2xl sm:text-5xl tracking-tight capitalize leading-[28px] sm:leading-[61px] max-md:max-w-full container mx-auto">
          Your Partner for all your digital needs
        </h2>

        <p className="mt-5 mb-2 text-xs sm:text-xl leading-4 sm:leading-7 max-w-[1080px] container mx-auto">
          As a custom software development company, we offer a wide range of
          technological solutions including but not limited to web development
          services, SaaS services, and app development services. Our teams of
          experts have the required knowledge and experience to deliver bespoke
          solutions in network infrastructure, cloud computing, custom software
          solutions, cybersecurity solutions, and so on.
        </p>
      </section>

      <section className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-[40px] sm:gap-[80px] 2xl:gap-[120px] max-w-[1440px] my-12 sm:my-40 mx-auto">
        {servicesArr.length &&
          servicesArr.map((card, i) => {
            return (
              <div key={i}>
                <ServiceCard
                  imageSrc={card.imageSrc}
                  title={card.title}
                  description={card.description}
                  iconSrc={card.iconSrc}
                  linkUrl={card.linkUrl}
                />
              </div>
            );
          })}
      </section>

      <section className="relative overflow-hidden px-4 xl:px-2 max-w-[1440px] 2xl:mx-auto">
        <div className="bg-[#1D92FB] opacity-15 w-[207px] h-[207px] rounded-full absolute -right-36 top-[160px] sm:top-[250px] md:top-[600px] xl:top-20 z-10"></div>

        <div className="flex flex-col xl:flex-row items-center justify-center xl:gap-10 2xl:gap-10">
          <div className="w-[190px] sm:w-[280px] md:w-[420px] lg:w-[570px]">
            <Image
              src="/business-and-growth.png"
              alt="Trusted Partner Image"
              width={570}
              height={570}
              loading="lazy"
              className="w-full aspect-square"
            />
          </div>

          <div className="flex flex-col justify-center mt-10 md:mt-24 text-right">
            <h2 className="text-xl sm:text-3xl md:text-5xl 2xl:text-5xl leading-[28px] md:leading-[60px] text-sky-950 z-20">
              Trusted Partner To Your <br /> Success And Growth
            </h2>
            <p className="self-end sm:mt-10 xl:mt-10 text-xs sm:text-xl leading-4 sm:leading-7 text-black max-w-[270px] sm:max-w-[570px] z-20">
              Codeautomation has a global presence and takes pride in its
              ability to deliver effective and innovative solutions for
              businesses. It takes a meticulous approach and ensures the highest
              level of service and support to its clients. Our team of experts
              is committed to providing.
            </p>
          </div>
        </div>
      </section>

      <div className="pt-24 sm:pt-32 relative 2xl:container 2xl:mx-auto overflow-x-hidden">
        <div className="bg-[#1D92FB] opacity-15 w-[734px] h-[734px] rounded-full absolute -left-[600px] md:-left-[500px] -top-20 flex items-center justify-center z-0">
          <div className="bg-white w-[584px] h-[584px] rounded-full"></div>
        </div>

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

        <div className="2xl:container 2xl:mx-auto mt-14 sm:mt-16 md:mt-20 xl:mt-24">
          <h2 className="ml-10 xl:ml-5 2xl:ml-20 text-2xl sm:text-3xl md:text-5xl capitalize leading-[28px] sm:leading-[61px] text-sky-950 max-w-[1120px]">
            Steps we Take to Make Your Project Successful
          </h2>

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
                <div className="mt-5 text-xs font-light tracking-normal leading-4 text-justify max-w-[200px]">
                  We prioritize understanding the client&apos;s goals and vision to
                  create a design that perfectly aligns with their expectations&rsquo;
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
                <div className="mt-4 text-xs font-light tracking-normal leading-4 text-justify max-w-[200px]">
                  We prioritize understanding the client&apos;s goals and vision to
                  create a design that perfectly aligns with their expectations&rsquo;
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
                <div className="mt-5 text-xs font-light tracking-normal leading-4 text-justify max-w-[200px]">
                  We prioritize understanding the client&apos;s goals and vision to
                  create a design that perfectly aligns with their expectations.
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
                <div className="mt-4 text-xs font-light tracking-normal leading-4 text-justify max-w-[200px]">
                  We prioritize understanding the client&apos;s goals and vision to
                  create a design that perfectly aligns with their expectations.
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
                <div className="mt-5 text-xs font-light tracking-normal leading-4 text-justify max-w-[200px]">
                  We prioritize understanding the client&apos;s goals and vision to
                  create a design that perfectly aligns with their expectations.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
