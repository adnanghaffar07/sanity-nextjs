import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { AiOutlinePaperClip } from "react-icons/ai";
import { AiFillFlag } from "react-icons/ai";


interface Props {
  jobpost: any; 
}


const CareerPost: React.FC<Props> = ({ jobpost }) => {

  return (
    <div className="flex flex-col  max-md:ml-0 max-md:w-full">
    <div className="flex flex-col grow px-5 pb-6 mx-auto w-full bg-gray-200 rounded-3xl shadow-sm backdrop-blur-[6.5px] max-md:mt-10 relative">
      <div className="flex z-10 gap-5 justify-between items-start mt-0">
        <div className="flex-auto self-end mt-10 text-2xl font-medium leading-6 text-black max-md:mt-10">
        {jobpost.jobTitleBaner}
        </div>
        <div className="flex flex-col flex-1 justify-center self-start absolute -top-10 right-5">
          <div className="flex justify-center items-center px-4 w-20 h-20 bg-white rounded-full shadow shadow-slate-500 border border-slate-300">
            <img
              loading="lazy"
              src="/Group 983.svg"
              className="w-full aspect-[1.09]"
            />
          </div>
        </div>
      </div>
      <div className="mt-3 text-sm font-light text-black">
        <ul className='list-disc text-sm font-light mb-5 pl-5'>
        {jobpost.descJobTitle}
        </ul>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <AiFillFlag size={24} />
          <div className="text-sm">Model Town,<br /> Lahore</div>
        </div>
        <Link href={`/${jobpost._id}`} className="underline hover:no-underline my-auto text-[#0A8FFC] text-sm">
  Read More
</Link>

      </div>
    </div>
  </div>
  )
}

export default CareerPost