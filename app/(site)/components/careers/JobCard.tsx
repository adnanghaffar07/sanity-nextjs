import Image from "next/image";
import { AiFillFlag } from "react-icons/ai";
import type { JobOpening } from "@/sanity/lib/careers";
import jobIcon from "@/public/Group 983.svg";

export default function JobCard({ job }: { job: JobOpening }) {
  // "Model Town, Lahore" → two lines, as the design shows it.
  const [place, ...rest] = job.location.split(",");
  const region = rest.join(",").trim();

  return (
    <article className="flex flex-col max-md:ml-0 max-md:w-full">
      <div className="relative flex flex-col p-5 text-black mx-auto rounded-lg sm:rounded-3xl shadow-lg backdrop-blur-[6.5px] bg-[#D7D7D7] bg-opacity-30 w-[300px] sm:w-[368px] flex-1">
        <div className="flex z-10 gap-5 justify-between items-start mt-0">
          <h3 className="flex-auto self-end mt-5 text-2xl font-medium leading-6 text-black">{job.title}</h3>
          <div className="flex flex-col flex-1 justify-center self-start absolute -top-10 right-5">
            <div className="flex justify-center items-center px-4 w-20 h-20 bg-white rounded-full shadow shadow-slate-500 border border-slate-300">
              <Image src={jobIcon} alt="" className="w-full h-auto aspect-[1.09]" />
            </div>
          </div>
        </div>
        {job.description && (
          <div className="mt-3 text-sm font-light text-black">
            <p className="text-sm font-light mb-5 pl-5">{job.description}</p>
          </div>
        )}
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <AiFillFlag size={24} aria-hidden />
            <div className="text-sm">
              {place}
              {region && (
                <>
                  ,<br /> {region}
                </>
              )}
            </div>
          </div>
          <div className="text-[#0A8FFC] text-sm font-semibold">Open Role</div>
        </div>
      </div>
    </article>
  );
}
