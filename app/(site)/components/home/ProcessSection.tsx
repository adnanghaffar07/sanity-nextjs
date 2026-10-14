import React from "react";
import type { LucideIcon } from "lucide-react";
import {
  Lightbulb,
  PenTool,
  Code2,
  Workflow,
  Rocket,
  FolderArchive,
} from "lucide-react";

interface Step {
  title: string;
  text: string;
  icon: LucideIcon;
}

// The delivery process, in order.
const steps: Step[] = [
  {
    title: "Project Initiation",
    text: "Our team of development, UX design, and analysis experts can assist in creating new product concepts or improving existing performance.",
    icon: Lightbulb,
  },
  {
    title: "Design",
    text: "Our talented design team creates visually appealing digital user experiences to solve practical issues and enhance key business metrics.",
    icon: PenTool,
  },
  {
    title: "Development",
    text: "We create efficient, secure apps for your company, by product strategy, assembling a skilled team, and starting coding to give your brand a competitive edge.",
    icon: Code2,
  },
  {
    title: "Automate",
    text: "Product testing, also known as consumer or comparative testing, measures a product’s characteristics or capabilities to develop goods that meet specific technical criteria.",
    icon: Workflow,
  },
  {
    title: "Launch",
    text: "The final product is launched after client approval, fostering growth for both companies. Our industry continuously improves, and we ensure project safety.",
    icon: Rocket,
  },
  {
    title: "Archives and Artifacts",
    text: "You are the project owner, entitled to our as-built documentation, specifications, test scripts, and release scripts for future analysis or development.",
    icon: FolderArchive,
  },
];

export default function ProcessSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 md:py-20">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#1D92FB]">
            Our Process
          </span>
          <h2 className="mt-3 text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight text-black">
            From Idea to Launch, Step by Step
          </h2>
        </div>

        {/* Swipeable row on phones; 2 columns on tablets; 3×2 grid on desktop */}
        <ol className="mt-10 md:mt-14 -mx-6 px-6 sm:mx-0 sm:px-0 flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 overflow-x-auto sm:overflow-visible snap-x snap-mandatory pb-4 sm:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {steps.map(({ title, text, icon: Icon }, i) => (
            <li
              key={title}
              className="group relative w-[82%] sm:w-auto shrink-0 snap-start"
            >
              <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-gray-100 bg-[#F7F9FC] p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#1D92FB]/30 hover:bg-white hover:shadow-xl">
                {/* Top accent that fills on hover */}
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#1D92FB] to-[#7cc0ff] transition-transform duration-500 group-hover:scale-x-100"
                />

                <div className="flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#1D92FB] shadow-sm ring-1 ring-gray-100 transition-colors duration-300 group-hover:bg-[#1D92FB] group-hover:text-white group-hover:ring-[#1D92FB]">
                    <Icon className="w-7 h-7" aria-hidden />
                  </span>
                  <span
                    aria-hidden
                    className="text-5xl font-extrabold leading-none text-gray-200/80 transition-colors duration-300 group-hover:text-[#EAF4FF]"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Step {i + 1}
                </p>
                <h3 className="mt-1 text-xl font-bold text-black">{title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-gray-600">{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
