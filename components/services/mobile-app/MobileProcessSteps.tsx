import Image from "next/image";
import { QuoteButton } from "./MobileAppConsult";
import step1Icon from "@/public/step1.png";
import step2Icon from "@/public/step2.png";
import step3Icon from "@/public/step3.png";
import step4Icon from "@/public/step4.png";

const STEPS = [
  {
    title: "Requirements Analysis",
    description: "We start by understanding your vision, gathering detailed requirements, and brainstorming creative solutions to build a solid foundation for your app.",
    icon: step1Icon,
  },
  {
    title: "App Storyboard Design",
    description: "Our talented designers create visually captivating app screens that reflect your brand’s identity, ensuring user-centric designs that exceed expectations.",
    icon: step2Icon,
  },
  {
    title: "Development",
    description: "Our experienced developers bring your design to life, building a fully functional app and keeping you updated throughout every stage of the process.",
    icon: step3Icon,
  },
  {
    title: "QA & Deployment",
    description: "Our QA team ensures a seamless, bug-free experience, while our DevOps experts handle deployment on both the App Store and Google Play for a smooth, successful launch.",
    icon: step4Icon,
  },
];

// "How We Do It": the four project steps and a "Let's talk" button.
export default function MobileProcessSteps() {
  return (
    <section className="py-10 md:py-20 bg-white text-center px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How We Do It</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        Our clear and transparent process turns your ideas into successful mobile apps, guiding you every step of the way.
      </p>

      <ol className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {STEPS.map((step, index) => (
          <li key={step.title} className="bg-white border-t-2 border-b-2 border-[#0A8FFC] rounded-xl shadow-lg hover:shadow-xl transition py-10 px-6 text-left">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm text-gray-500">Step {index + 1}</p>
              <Image src={step.icon} alt={step.title} sizes="64px" className="object-contain h-8 w-auto" />
            </div>
            <h3 className="font-semibold text-[#0A8FFC] mb-2">{step.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
          </li>
        ))}
      </ol>

      <QuoteButton className="bg-[#1D92FB] hover:bg-blue-600 cursor-pointer text-white font-semibold px-8 py-3 mt-10 rounded-md transition duration-300">
        LET’S TALK
      </QuoteButton>
    </section>
  );
}
