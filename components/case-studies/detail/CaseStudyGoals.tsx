import SanityImage from "@/components/ui/SanityImage";
import type { CaseStudy } from "@/sanity/lib/case-studies";
import { accentTint } from "./accent";

// "Project Goals": one icon and sentence per goal, on the accent colour.
export default function CaseStudyGoals({ goals, color }: { goals: NonNullable<CaseStudy["projectGoalsSection"]>; color: string | null }) {
  return (
    <div className="px-6 md:px-16 py-10 md:py-16 mx-auto" style={{ backgroundColor: accentTint(color, "#05BD4B") }}>
      <div className="flex flex-col justify-center items-center bg-white rounded-2xl max-w-7xl mx-auto min-h-[412px] shadow-[0px_16px_32px_rgba(109,70,189,0.05)] max-md:px-5 max-md:max-w-full">
        <h2 className="md:text-4xl text-2xl font-semibold text-slate-900 mt-6">{goals.title}</h2>
        <div className="flex flex-wrap gap-10 justify-center items-start mt-7 text-xl leading-9 text-neutral-800 max-md:mt-7 max-md:max-w-full">
          {goals.goals?.map((goal) => (
            <div key={goal._key} className="flex flex-col justify-center items-center p-3 min-w-[240px] w-[314px]">
              <SanityImage image={goal.image} alt="goal" sizes="80px" className="object-contain w-20 h-auto aspect-square rounded-[500px]" />
              <div className="mt-4 text-center">{goal.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
