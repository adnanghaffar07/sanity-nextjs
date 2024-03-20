import React from "react";
import HeroSectionComponent from "../../components/HeroSectionComponent";
import ServiceApproachSection from "../../components/ServiceApproachSection";

const page = ({ params }: { params: { service: String } }) => {
  return (
    <>
      <HeroSectionComponent
        title='"Web development"'
        content=" A good web application comes with an elegant design and features
        that serve its purpose elegantly. The expertise of developing 200+
        apps taught out team what it takes to deliver that kind of
        excellence for their clients."
        image="/web-dev-hero-image.png"
      />

      <ServiceApproachSection
        title="Our Approach"
        description="Our approach to web development is centered around your goals and your audience. We believe that a successful website should look great, function flawlessly, and offer an exceptional user experience."
        subtitle="Here's how we achieve that"
        imageUrl="/web-dev-approach-image.png"
        imageAlt="Web development image"
        approachSteps={[
          "Understanding Your Needs",
          "Strategic Planning",
          "Custom Design",
          "Development",
          "Ongoing Support",
          "Deployment & Optimization",
          "Testing & Quality Assurance",
        ]}
        columns={true}
      />

      <ServiceApproachSection
        title="What We Offer"
        description="CodeAutomation provides a wide range of website development services, including"
        imageUrl="/service-webdev-offer-image.png"
        imageAlt="Web development image"
        approachSteps={[
          "Custom Website Development",
          "Content Management Systems (CMS)",
          "E-commerce Development",
          "Responsive Web Design",
          "Web Application Development",
          "SEO and Performance Optimization",
        ]}
        columns={false}
      />

      <div className="2xl:container 2xl:mx-auto mt-14 sm:mt-16 md:mt-20 xl:mt-44 relative 2xl:overflow-y-visible 2xl:overflow-x-hidden">
        <div className="bg-[#1D92FB] opacity-15 w-[434px] md:w-[734px] h-[434px] md:h-[734px] rounded-full absolute -left-[360px] md:-left-[570px] top-2 md:-top-72 flex items-center justify-center z-0">
          <div className="bg-white w-[354px] md:w-[584px] h-[354px] md:h-[584px] rounded-full"></div>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-5xl capitalize leading-[28px] sm:leading-[61px] text-sky-950 max-w-[1000px] mx-auto">
          Why Choose CodeAutomation for Web Development
        </h2>

        <div className="flex flex-wrap xl:flex-nowrap gap-10 xl:gap-5 2xl:gap-10 justify-center items-center mt-12 text-black mb-[114px] mx-4">
          <div className="flex flex-col justify-center bg-[#EDECEC] rounded-3xl shadow-sm z-10 relative w-[234px] h-[196px]">
            <div className="z-10 flex justify-center items-center px-5 mt-0 text-3xl font-semibold tracking-tight leading-4 text-justify whitespace-nowrap bg-white rounded-full h-[62px] w-[62px] absolute -right-2 -top-4 drop-shadow-serviceCard">
              01
            </div>
            <div className="flex flex-col pl-4 mt-2">
              <div className="text-base font-medium leading-6 mt-6">
                Skilled Team
              </div>
              <div className="mt-5 text-xs font-light tracking-normal leading-4 text-justify max-w-[200px]">
                Our web development team comprises experienced professionals
                with a strong track record of delivering outstanding websites.
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center bg-[#EDECEC] rounded-3xl shadow-sm z-10 relative w-[234px] h-[196px]">
            <div className="z-10 flex justify-center items-center self-end px-3.5 mt-0 text-3xl font-semibold tracking-tight leading-4 text-justify whitespace-nowrap bg-white rounded-full h-[62px] w-[62px] absolute -right-2 -top-4 drop-shadow-serviceCard">
              02
            </div>
            <div className="flex flex-col pl-4 mt-0">
              <div className="text-base font-medium leading-6 mt-0">
                Modern Technology
              </div>
              <div className="mt-4 text-xs font-light tracking-normal leading-4 text-justify max-w-[200px]">
                We stay current with the latest web technologies to ensure your
                site is modern, fast, and secure.
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center bg-[#EDECEC] rounded-3xl shadow-sm z-10 relative w-[234px] h-[196px]">
            <div className="z-10 flex justify-center items-center self-end px-4 mt-0 text-3xl font-semibold tracking-tight leading-4 text-justify whitespace-nowrap bg-white rounded-full h-[62px] w-[62px] absolute -right-2 -top-4 drop-shadow-serviceCard">
              03
            </div>
            <div className="flex flex-col pl-4 mt-4">
              <div className="text-base font-medium leading-6">
                Custom Solutions
              </div>
              <div className="mt-5 text-xs font-light tracking-normal leading-4 text-justify max-w-[200px]">
                We don&apos;t believe in one-size-fits-all. Your website is built
                from the ground up to suit your unique needs and objectives.
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center bg-[#EDECEC] rounded-3xl shadow-sm z-10 relative w-[234px] h-[196px]">
            <div className="z-10 flex justify-center items-center self-end px-3 mt-0 text-3xl font-semibold tracking-tight leading-4 text-justify whitespace-nowrap bg-white rounded-full h-[62px] w-[62px] absolute -right-2 -top-4 drop-shadow-serviceCard">
              04
            </div>
            <div className="flex flex-col pl-4 mt-4">
              <div className="text-base font-medium leading-6">
                User-Centric Design
              </div>
              <div className="mt-4 text-xs font-light tracking-normal leading-4 text-justify max-w-[200px]">
                User experience is a top priority. We design websites that are
                intuitive and engaging to keep visitors coming back.
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center bg-[#EDECEC] rounded-3xl shadow-sm z-10 relative w-[234px] h-[196px]">
            <div className="z-10 flex justify-center items-center self-end px-3.5 mt-0 text-3xl font-semibold tracking-tight leading-4 text-justify whitespace-nowrap bg-white rounded-full h-[62px] w-[62px] absolute -right-2 -top-4 drop-shadow-serviceCard">
              05
            </div>
            <div className="flex flex-col pl-4 mt-4">
              <div className="text-base font-medium leading-6">
                Deadline Adherence
              </div>
              <div className="mt-5 text-xs font-light tracking-normal leading-4 text-justify max-w-[200px]">
                We work diligently to meet project timelines and milestones,
                ensuring your website is delivered on schedule.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
