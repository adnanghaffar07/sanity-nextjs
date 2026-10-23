import Image from "next/image";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import growthImage from "@/public/business-and growth-1.png";
import visionIcon from "@/public/services-icon-vision.png";
import expertIcon from "@/public/services-icon-expert.png";
import processIcon from "@/public/services-icon-process.png";
import accelerationIcon from "@/public/services-icon-acceleration.png";

const GROWTH_CARDS = [
  { icon: visionIcon, title: "Vision to Reality", description: "We leverage the latest technological trends to bring your vision to reality." },
  {
    icon: expertIcon,
    title: "Dedicated Experts",
    description: "Partner with our world-class team of technology experts to attain highest level of service and support.",
  },
  {
    icon: processIcon,
    title: "Process Driven",
    description: "Ensuring consistency, precision, and transparency in our projects using an experienced processed driven approach.",
  },
  {
    icon: accelerationIcon,
    title: "Digital Acceleration",
    description: "Transforming the digital landscape for our clients by leveraging the latest technologies and innovative solutions.",
  },
];

const PROJECT_STEPS = [
  { title: "Understanding Client Goals", text: "We align our design with the client's goals and vision through in-depth discussions and insights." },
  { title: "Thorough Research & Analysis", text: "We conduct research to understand the industry and audience, ensuring our design is relevant and effective." },
  { title: "Concept Development & Iteration", text: "We create and refine design concepts based on client feedback to meet their vision." },
  { title: "Attention to Details & Quality Assurance", text: "We ensure high quality and attention to detail through rigorous checks." },
  { title: "Timely Delivery & Client Satisfaction", text: "We deliver projects on time while focusing on exceeding client expectations." },
];

// The sections below the service cards on /services: "Trusted Partner",
// the four growth cards and the five project steps.
export default function ServiceHighlights() {
  return (
    <>
      <ScrollAnimation>
        <section className="relative overflow-hidden px-6 md:px-16 max-w-7xl mx-auto">
          <div className="flex flex-col xl:flex-row items-center justify-center xl:gap-20 2xl:gap-22">
            <div className="flex flex-col justify-center mt-10 md:mt-24 text-center xl:text-left w-full">
              <h2 className="text-3xl md:text-5xl leading-8 md:leading-[60px] text-black">
                Trusted Partner To Your <br /> Success And Growth
              </h2>
              <p className="mt-6 sm:mt-10 text-lg leading-7 text-black mx-auto xl:mx-0 max-w-full sm:max-w-[570px] z-20">
                Codeautomation has a global presence and takes pride in its ability to deliver effective and innovative
                solutions for businesses. It takes a meticulous approach and ensures the highest level of service and
                support to its clients. Our team of experts is committed to providing.
              </p>
            </div>
            <div className="w-full sm:w-[280px] md:w-[420px] lg:w-[670px] mt-10 sm:mt-16">
              <Image src={growthImage} alt="Trusted Partner Image" sizes="(min-width: 640px) 570px, 100vw" className="w-full h-auto max-w-[570px] mx-auto" />
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <div className="bg-[#1D92FB] opacity-15 w-[734px] h-[734px] rounded-full absolute -left-[660px] md:-left-[560px] bottom-120 flex items-center justify-center z-0">
        <div className="bg-white w-[584px] h-[584px] rounded-full" />
      </div>

      <div className="pt-24 sm:pt-32 md:px-16 relative 2xl:container 2xl:mx-auto overflow-x-hidden">
        <ScrollAnimation>
          <div className="flex justify-center items-center flex-wrap xl:flex-nowrap xl:px-2 gap-12 sm:gap-28 xl:gap-5 2xl:gap-10 pt-4">
            {GROWTH_CARDS.map((card) => (
              <div key={card.title} className="flex flex-col relative w-[280px] sm:w-[314px] h-[164px]">
                <div className="flex z-10 justify-center items-center px-4 bg-white rounded-full h-[58px] sm:h-[87px] w-[58px] sm:w-[87px] max-md:mr-2.5 absolute right-0 sm:right-5 -top-6 sm:-top-10 md:-top-12 drop-shadow-serviceCard">
                  <Image src={card.icon} alt="" sizes="56px" className="w-full h-auto object-cover" />
                </div>
                <div className="flex flex-col justify-center px-4 h-full text-black bg-[#EDECEC] rounded-lg sm:rounded-3xl shadow-sm backdrop-blur-[6.5px]">
                  <h3 className="text-lg font-medium leading-5">{card.title}</h3>
                  <p className="mt-2.5 text-sm font-light leading-5 max-w-[246px]">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollAnimation>

        <div className="2xl:container 2xl:mx-auto mt-14 sm:mt-16 md:mt-20 xl:mt-24">
          <ScrollAnimation>
            <h2 className="mx-auto text-3xl md:text-5xl text-center mb-6 capitalize leading-7 text-black max-w-[1120px]">
              Steps we Take to Make Your Project Successful
            </h2>
          </ScrollAnimation>
          <ScrollAnimation>
            <ol className="flex flex-wrap xl:flex-nowrap gap-10 xl:gap-5 2xl:gap-10 justify-center items-center mt-12 text-black mb-[114px]">
              {PROJECT_STEPS.map((step, index) => (
                <li key={step.title} className="flex flex-col justify-center bg-[#EDECEC] rounded-3xl shadow-sm z-10 relative w-[234px] h-[196px]">
                  <span className="flex justify-center items-center text-3xl font-semibold tracking-tight leading-4 bg-white rounded-full h-[62px] w-[62px] absolute -right-2 -top-7 drop-shadow-serviceCard">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex flex-col px-4 mt-2">
                    <h3 className="text-base font-medium leading-6">{step.title}</h3>
                    <p className="mt-3 text-sm font-light tracking-normal leading-5 max-w-[200px]">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </ScrollAnimation>
        </div>
      </div>
    </>
  );
}
