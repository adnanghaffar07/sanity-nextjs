import Image from "next/image";
import Link from "next/link";
import ExpertiseAccordion from "./ExpertiseAccordion";
import ConsultationForm from "./ConsultationForm";
import arrowIcon from "@/public/btn-arrow.svg";

// Expertise accordion with the consultation form beside it.
export default function ExpertiseSection() {
  return (
    <div className="px-6 md:px-16 mt-16 max-w-[1534px] mx-auto">
      <div className="flex flex-col md:flex-row gap-5 pb-16">
        <div className="md:w-[58%]">
          <ExpertiseAccordion />

          <p className="text-xl font-medium text-left mt-12">
            Partner with us to access unmatched expertise and support in these areas, empowering your business with
            advanced technologies and driving your growth to new heights.
          </p>

          <div className="mt-12 max-w-[450px]">
            <Link
              href="/technologies"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#F7E022] rounded-lg shadow-md font-medium text-base lg:text-lg xl:text-xl"
            >
              <span>Explore Our Technologies</span>
              <Image src={arrowIcon} alt="" className="w-[22px] h-[26.8px]" />
            </Link>
          </div>
        </div>

        <div className="md:w-[38%] mt-6 md:mt-0">
          <ConsultationForm />
        </div>
      </div>
    </div>
  );
}
