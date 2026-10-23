"use client";

import { useState } from "react";
import { ArrowRight, ChevronRight, ImageIcon, Video } from "lucide-react";
import { AI_CAPABILITIES, POST_STEPS, REEL_STEPS, type Phase } from "./data";
import PhaseHeader from "./PhaseHeader";

const WORKFLOWS = {
  post: { label: "Post (4 Steps)", icon: ImageIcon, steps: POST_STEPS, active: "bg-gradient-to-r from-[#00A3FF] to-[#7B61FF] text-white shadow" },
  reel: { label: "Reel (3 Steps)", icon: Video, steps: REEL_STEPS, active: "bg-gradient-to-r from-[#FF6B82] to-[#FF4757] text-white shadow" },
};

// Step 3: the AI capabilities and the post or reel workflow steps.
export default function ProcessingPhase({ phase }: { phase: Phase }) {
  const [workflow, setWorkflow] = useState<keyof typeof WORKFLOWS>("post");
  const steps = WORKFLOWS[workflow].steps;

  return (
    <div className="p-6">
      <PhaseHeader phase={phase} className="mb-8" />

      <div className="flex justify-center mb-8">
        <div className="inline-flex bg-gradient-to-r from-[#00A3FF]/10 to-[#7B61FF]/10 p-0.5 rounded-lg">
          {(Object.keys(WORKFLOWS) as (keyof typeof WORKFLOWS)[]).map((key) => {
            const { label, icon: Icon, active } = WORKFLOWS[key];
            return (
              <button
                key={key}
                type="button"
                onClick={() => setWorkflow(key)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all flex items-center ${
                  workflow === key ? active : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <Icon className="w-3.5 h-3.5 mr-1.5" />
                {label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mb-8">
        <div className="text-center mb-6">
          <h5 className="text-base font-bold text-gray-900 mb-1">Powered by Google Gemini AI</h5>
          <p className="text-xs text-gray-600">Advanced AI for maximum impact</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {AI_CAPABILITIES.map((capability) => (
            <div key={capability.title} className="group bg-white border border-gray-200 rounded-lg p-3 hover:shadow-sm transition-all">
              <div className="flex items-center mb-2">
                <div className="p-1.5 rounded bg-gradient-to-br from-[#00A3FF]/10 to-[#7B61FF]/10 group-hover:scale-105 transition-transform mr-2">
                  <capability.icon className="w-3.5 h-3.5 text-[#00A3FF]" />
                </div>
                <h6 className="text-sm font-medium text-gray-900">{capability.title}</h6>
              </div>
              <p className="text-xs text-gray-600 mb-1.5">{capability.description}</p>
              <div className="text-xs font-medium bg-gradient-to-r from-[#00A3FF] to-[#7B61FF] bg-clip-text text-transparent">
                Impact: {capability.impact}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-[#00A3FF] via-[#7B61FF] to-[#00C9A7] transform -translate-y-1/2 hidden lg:block" />
        <div className="grid lg:grid-cols-3 gap-4">
          {steps.map((step, index) => (
            <div key={step.step} className="relative">
              <div className="group bg-white border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-all">
                <div className="flex items-center mb-3">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center mr-2.5 ${
                      step.aiPowered ? "bg-gradient-to-br from-[#00A3FF]/10 to-[#7B61FF]/10" : "bg-gray-100"
                    }`}
                  >
                    <step.icon className={`w-4 h-4 ${step.aiPowered ? "text-[#7B61FF]" : "text-gray-600"}`} />
                  </div>
                  <div>
                    <div className="flex items-center">
                      <span className="text-xs font-bold text-gray-900 mr-1.5">{step.step}</span>
                      {step.aiPowered && (
                        <span className="text-[10px] bg-gradient-to-r from-[#00A3FF] to-[#7B61FF] text-white px-1.5 py-0.5 rounded-full">AI</span>
                      )}
                    </div>
                    <h5 className="text-sm font-bold text-gray-900 mt-0.5">{step.title}</h5>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mb-3">{step.description}</p>
                <ul className="space-y-1">
                  {step.details.map((detail) => (
                    <li key={detail} className="flex items-start text-xs text-gray-600">
                      <ChevronRight className="w-3 h-3 text-[#00A3FF] mr-1 mt-0.5" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-2 transform translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="bg-gradient-to-r from-[#00A3FF] to-[#7B61FF] p-1 rounded">
                    <ArrowRight className="w-3 h-3 text-white" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
