import React from "react";
import Link from "next/link";
import { AiFillFlag } from "react-icons/ai";

interface Props {
  jobpost: any;
}

const CareerPost: React.FC<Props> = ({ jobpost }) => {
  return (
    <div className="flex flex-col  max-md:ml-0 max-md:w-full h-full">
      <div className="flex flex-col p-5 text-black mx-auto rounded-lg sm:rounded-3xl shadow-lg backdrop-blur-[6.5px] bg-[#D7D7D7] bg-opacity-30 w-[300px] sm:w-[368px] h-full">
        <div className="flex z-10 gap-5 justify-between items-start mt-0">
          <div className="flex-auto self-end mt-10 text-2xl font-medium leading-6 text-black max-md:mt-10">
            {jobpost.jobTitleBaner}
          </div>
          <div className="flex flex-col flex-1 justify-center self-start absolute -top-10 right-5">
            <div className="flex justify-center items-center px-4 w-20 h-20 bg-white rounded-full shadow shadow-slate-500 border border-slate-300">
              <img
                loading="lazy"
                src="/Group 983.svg"
                alt="career icon"
                className="w-full aspect-[1.09]"
              />
            </div>
          </div>
        </div>
        <div className="mt-3 text-sm font-light text-black">
          <p className="list-disc text-sm font-light mb-5 pl-5">
            {jobpost.descJobTitle}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <AiFillFlag size={24} />
            <div className="text-sm">
              Model Town,
              <br /> Lahore
            </div>
          </div>
          <Link
            href={`/career/${jobpost._id}`}
            className="underline hover:no-underline my-auto text-[#0A8FFC] text-sm"
            aria-label={`Read more about the ${jobpost.jobTitleBaner}`}
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CareerPost;
