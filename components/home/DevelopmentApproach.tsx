import Image from "next/image";
import Link from "next/link";
import arrowIcon from "@/public/btn-arrow.svg";
import approachImage from "@/public/distinctive.png";

export default function DevelopmentApproach() {
  return (
    <div className="relative max-md:max-w-full md:px-16 px-6 md:py-16 py-6">
      <div className="absolute inset-0 bg-[#001E6B]" aria-hidden />

      <div className="relative flex gap-5 max-md:flex-col max-md:gap-0 max-w-7xl mx-auto">
        <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full self-center md:px-4">
          <div className="flex flex-col text-white max-md:mt-10 max-md:max-w-full">
            <h2 className="xl:text-4xl lg:text-3xl text-3xl font-medium max-md:max-w-full">Our Development Approach</h2>
            <div className="xl:mt-11 lg:text-xl text-base mt-5 max-md:max-w-full xl:pr-36 tracking-normal">
              <p>
                At CodeAutomation, we combine collaboration, creativity, and technical precision to deliver outstanding
                results. Every project we undertake is driven by a deep understanding of our clients’ goals, ensuring
                that our solutions are not only innovative but also strategically aligned with their business
                objectives. Our certified experts bring a perfect balance of expertise and passion, enabling us to craft
                solutions that truly make an impact.{" "}
                <br />
                <br />
                We believe that business excellence stems from the seamless integration of advanced technology and the
                human touch. Our project execution model emphasizes efficiency, transparency, and quality at every stage.
                By leveraging the latest tools and methodologies, we empower businesses to achieve sustainable growth and
                stay ahead in the ever-evolving digital landscape.{" "}
              </p>
            </div>
            <div className="flex items-start self-stretch pr-8 text-base xl:text-xl lg:text-lg font-medium whitespace-nowrap max-w-[450px] max-md:pr-5 mt-12">
              <Link
                href="/services"
                className="cursor flex overflow-hidden relative gap-2 px-6 py-3 items-center text-black bg-[#F7E022] rounded-lg shadow-md"
              >
                <span className="relative grow self-center">Launch Your Software</span>
                <Image src={arrowIcon} alt="" className="w-[22px] h-[26.8px] text-black" />
              </Link>
            </div>
          </div>
        </div>
        <div className="md:w-5/12 w-full md:mt-0 mt-6">
          <Image src={approachImage} alt="Software Development Service USA" className="object-cover" sizes="(min-width: 768px) 42vw, 100vw" />
        </div>
      </div>
    </div>
  );
}
