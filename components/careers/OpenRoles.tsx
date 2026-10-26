import Image from "next/image";
import type { JobOpening } from "@/sanity/lib/careers";
import ellipse from "@/public/ellipse-2.png";
import JobCard from "./JobCard";

// Job cards from Sanity ("Job Openings"). The section keeps its spacing and
// decoration when there are no openings, so the page layout doesn't shift.
export default function OpenRoles({ jobs }: { jobs: JobOpening[] }) {
  return (
    <div className="flex gap-5 max-md:flex-wrap lg:px-10 lg:pt-0 lg:pb-0 px-6 py-8 md:px-5 w-full mx-auto relative">
      <Image src={ellipse} alt="" className="absolute right-0 -top-36" />
      {/* A plain block here: a flex column around the wrapping card list makes Chrome
          size every card to the height of the whole list. */}
      <div className="w-full max-w-[1582px] mx-auto">
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-[80px] sm:gap-y-[50px] sm:gap-[30px] xl:gap-[70px] max-w-[1440px] sm:my-20">
          {jobs.map((job) => (
            <JobCard key={job._id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
}
