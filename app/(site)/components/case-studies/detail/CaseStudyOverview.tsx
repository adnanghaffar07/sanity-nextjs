import SanityImage from "@/components/ui/SanityImage";
import type { CaseStudy } from "@/sanity/lib/case-studies";
import { accentTint } from "./accent";

// "About This Project" and "Overview" with key facts and the overview image.
export default function CaseStudyOverview({ study }: { study: CaseStudy }) {
  return (
    <div className="flex overflow-hidden flex-col items-center px-6 md:px-16 pt-10 md:pt-16 max-w-7xl mx-auto">
      <div className="text-2xl leading-none text-slate-900">INTRODUCTION</div>
      <h2 className="mt-8 md:text-5xl text-2xl text-center font-semibold leading-none text-slate-900">About This Project</h2>
      <p className="mt-11 text-xl leading-8 text-center text-slate-900 w-[724px] max-md:mt-10 max-md:max-w-full">
        {study.projectscopecontent}
      </p>
      <div className="md:self-end mt-16 w-full max-w-[1328px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col pb-10 md:pb-16 w-[59%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col text-slate-900 max-md:max-w-full max-md:items-center max-md:text-center">
                <div className="text-2xl leading-none">GET STARTED</div>
                <h2 className="mt-6 md:text-5xl text-2xl font-semibold leading-none">Overview</h2>
                <p className="mt-6 text-xl leading-8 max-md:max-w-full">{study.briefdescription}</p>
              </div>
              <div className="flex flex-wrap gap-8 items-center self-start mt-8 font-medium max-md:max-w-full">
                {study.briefitemsarray?.map((item) => (
                  <div key={item._key} className="flex items-start self-stretch my-auto w-[232px]">
                    <div
                      className="flex shrink-0 rounded-full h-[79px] w-[79px]"
                      style={{ backgroundColor: accentTint(study.color, "#C6C5C5") }}
                    />
                    <div className="flex flex-col mt-2.5">
                      <div className="self-start -ml-10 text-xl text-neutral-500">{item.heading}</div>
                      <div className="text-lg -ml-10 tracking-wide text-black">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
            <SanityImage
              image={study.primaryimage}
              alt="intro"
              sizes="(min-width: 768px) 41vw, 100vw"
              className="object-contain grow w-full rounded-2xl aspect-[0.75] max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
