import Image from "next/image";
import heroImage from "@/public/career.jpg";

export default function CareersHero() {
  return (
    <div className="flex overflow-hidden relative flex-col pb-12 w-full font-light text-white lg:min-h-[700px] max-md:max-w-full">
      <Image src={heroImage} alt="" fill priority sizes="100vw" className="object-cover" />
      <div className="absolute top-0 left-0 w-full h-full bg-[#020C16] opacity-75" aria-hidden />
      <div className="flex relative flex-col items-center lg:px-20 px-5 lg:pt-12 lg:pb-0 pt-48 pb-36 w-full max-md:px-5 max-md:max-w-full flex-grow">
        <div className="lg:absolute lg:top-[300px]">
          <h1 className="lg:text-4xl title text-2xl font-bold text-center max-lg:mt-0 lg:w-8/12 mx-auto">
            Be a part of our next story
          </h1>
          <p className="lg:text-2xl text-base text-center mt-4 max-md:max-w-full lg:px-32">
            Join our team and be part of the next success story in CodeAutomation careers. Unlock your potential
            today!
          </p>
        </div>
      </div>
    </div>
  );
}
