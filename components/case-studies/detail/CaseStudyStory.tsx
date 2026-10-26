import type { ReactNode } from "react";
import type { CaseStudy } from "@/sanity/lib/case-studies";
import { accentTint } from "./accent";

type Points = CaseStudy["chanllangesfaced"];

function StoryCard({ heading, first, children }: { heading: string | null; first?: boolean; children: ReactNode }) {
  return (
    <div
      className={`px-6 md:px-16 py-6 max-w-7xl mx-auto bg-white rounded-2xl shadow-[0px_16px_32px_rgba(109,70,189,0.05)] ${
        first ? "" : "mt-14"
      }`}
    >
      <h3 className="text-2xl font-semibold my-4 md:my-8">{heading}:</h3>
      {children}
    </div>
  );
}

function PointList({ points }: { points: Points }) {
  return (
    <ul>
      {points?.map((point) => (
        <li key={point._key} className="text-xs md:text-lg leading-4 md:leading-8 font-light">
          <span className="text-lg font-bold">{point.heading}: </span>
          <span className="text-lg font-light">{point.description}</span>
        </li>
      ))}
    </ul>
  );
}

// Challenges, approach, results and conclusion cards on the accent colour.
export default function CaseStudyStory({ study }: { study: CaseStudy }) {
  return (
    <section className="py-6 md:py-16 px-6 md:px-16" style={{ backgroundColor: accentTint(study.color, "#05BD4B") }}>
      <StoryCard heading={study.challengesfacedheading} first>
        <PointList points={study.chanllangesfaced} />
      </StoryCard>
      <StoryCard heading={study.ourapproachheading}>
        <PointList points={study.ourapproach} />
      </StoryCard>
      <StoryCard heading={study.resultsheading}>
        <PointList points={study.results} />
      </StoryCard>
      <StoryCard heading={study.conclusionheading}>
        <p className="text-lg font-light leading-8">{study.conclusion}</p>
      </StoryCard>
    </section>
  );
}
