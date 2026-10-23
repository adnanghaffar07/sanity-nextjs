import { Fragment } from "react";
import SanityImage from "@/components/ui/SanityImage";
import type { TechLogo } from "@/sanity/lib/value-blueprints";

// The workflow's tools: steps joined with "+", alternatives within a step with "or".
export default function BlueprintWorkflow({ heading, steps }: { heading: string | null; steps: TechLogo[][] }) {
  return (
    <div className="px-6 md:px-16 py-10 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">{heading}</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {steps.map((step, stepIndex) => (
            <Fragment key={stepIndex}>
              {stepIndex > 0 && <span className="mb-6 text-lg">+</span>}
              <div className="flex flex-wrap justify-center items-center gap-2">
                {step.map((logo, logoIndex) => (
                  <Fragment key={`${logo._id}-${logoIndex}`}>
                    {logoIndex > 0 && <span className="mb-6 text-sm">or</span>}
                    <div className="flex flex-col items-center">
                      <div className="bg-white border border-[#0a8ffc] shadow-md p-3 rounded-full flex items-center justify-center w-16 h-16 transition duration-300 ease-in-out hover:border-[#F7E022] hover:scale-110">
                        <SanityImage image={logo.image} alt={logo.heading ?? ""} sizes="64px" className="h-8 w-auto object-contain" />
                      </div>
                      <h3 className="text-sm font-semibold text-center mt-4">{logo.heading}</h3>
                    </div>
                  </Fragment>
                ))}
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
