import Image from "next/image";
import Link from "next/link";
import heroImage from "@/public/technologies.jpg";

const BOOK_A_CALL_URL = "https://calendly.com/adnanghaffar/codeautomation?utm_source=website&utm_campaign=services";

export default function TechnologiesHero() {
  return (
    <div className="flex overflow-hidden relative flex-col pb-12 w-full font-light text-white lg:min-h-[700px] max-md:max-w-full">
      <Image src={heroImage} alt="" fill priority sizes="100vw" className="object-cover" />
      <div className="absolute top-0 left-0 w-full h-full bg-[#020C16] opacity-75" aria-hidden />
      <div className="flex relative flex-col items-center lg:px-20 px-5 lg:pt-12 lg:pb-0 pt-48 pb-36 w-full max-md:px-5 max-md:max-w-full flex-grow">
        <div className="lg:absolute lg:top-[300px]">
          <h1 className="lg:text-4xl text-2xl font-bold text-center capitalize max-lg:mt-0 max-md:max-w-full">
            Technology
          </h1>
          <p className="lg:text-2xl text-center mt-4 max-w-7xl lg:px-32">
            We offer only well-recognized and time-tested technologies to bring advancement to any of your business
            goals.
          </p>
          <div className="flex flex-col sm:flex-row mx-auto pt-8 space-y-6 sm:space-y-0 sm:space-x-5 items-center justify-center">
            <Link
              href="/case-studies"
              className="bg-[#1d92fb] text-white py-3 px-5 font-semibold rounded-lg shadow-lg text-center w-full sm:w-48"
            >
              Our Case Studies
            </Link>
            <a
              href={BOOK_A_CALL_URL}
              className="bg-[#f7e022] text-black font-semibold py-3 px-5 rounded-lg shadow-lg text-center w-full sm:w-48"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule a Call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
