import Image from "next/image";
import Link from "next/link";
import heroImage from "@/public/market-hero.jpg";

const CONSULTATION_URL = "https://calendly.com/adnanghaffar/codeautomation?utm_source=website&utm_campaign=services";

// Headline, sub-headline and two buttons over a dark hero image.
export default function MarketingAutomationHero() {
  return (
    <div className="flex overflow-hidden relative flex-col pb-12 w-full font-light text-white lg:min-h-[700px] max-md:max-w-full">
      <Image src={heroImage} alt="AI-Powered Marketing Automation Background" fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-[#020C16] opacity-65" />

      <div className="flex relative flex-col items-center lg:px-20 px-5 lg:pt-12 lg:pb-0 pt-48 pb-36 w-full max-md:max-w-full flex-grow">
        <div className="lg:absolute lg:top-[250px]">
          <h1 className="lg:text-4xl text-2xl font-bold text-center lg:w-8/12 mx-auto">
            Turn Your Marketing Into a Revenue-Generating Machine
          </h1>
          <h2 className="lg:text-xl mx-auto max-w-5xl text-base text-center mt-4 max-md:max-w-full lg:px-32">
            Stop losing leads to slow follow-ups and manual processes. We design, build, and deploy intelligent marketing
            automation systems that nurture prospects, convert customers, and drive growth — on autopilot.
          </h2>

          <div className="flex flex-col sm:flex-row mx-auto pt-6 space-y-6 sm:space-y-0 sm:space-x-5 items-center justify-center">
            <Link
              href={CONSULTATION_URL}
              className="bg-[#1d92fb] text-white cursor-pointer py-3 px-2 font-semibold rounded-lg shadow-lg text-center w-full sm:min-w-48 sm:max-w-72 hover:bg-blue-600 transition-colors"
            >
              Get a Free Strategy Call
            </Link>
            <Link
              href="/services"
              className="bg-[#f7e022] text-black font-semibold py-3 px-2 rounded-lg shadow-lg text-center w-full sm:max-w-72 hover:bg-yellow-400 transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
