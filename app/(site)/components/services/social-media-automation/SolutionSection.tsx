"use client";

import { useState } from "react";
import { CheckCircle, Infinity, Play, Sparkles } from "lucide-react";
import { CONSULTATION_URL, PHASES, type PhaseId } from "./solution/data";
import SubmissionPhase from "./solution/SubmissionPhase";
import ActivationPhase from "./solution/ActivationPhase";
import ProcessingPhase from "./solution/ProcessingPhase";
import ResultsPhase from "./solution/ResultsPhase";

const PHASE_PANELS = {
  submission: SubmissionPhase,
  activation: ActivationPhase,
  processing: ProcessingPhase,
  results: ResultsPhase,
};

// "Content's Automated Journey": four steps from form submission to scheduled
// posts, chosen with the tabs above or the step bar below the panel.
export default function SolutionSection() {
  const [activeId, setActiveId] = useState<PhaseId>("submission");
  const activePhase = PHASES.find((phase) => phase.id === activeId)!;
  const Panel = PHASE_PANELS[activeId];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F8FAFF]/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#00A3FF] mr-3" />
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-[#00A3FF]/10 to-[#7B61FF]/10 border border-[#00A3FF]/20">
              <Sparkles className="w-3 h-3 text-[#00A3FF] mr-1.5" />
              <span className="text-xs font-medium text-[#0066CC]">Complete Automation</span>
            </div>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#7B61FF] ml-3" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transform One Form Into
            <span className="block mt-2 bg-gradient-to-r from-[#00A3FF] via-[#7B61FF] to-[#00C9A7] bg-clip-text text-transparent">
              Scheduled Content Everywhere
            </span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto mb-6">
            At <span className="font-semibold text-[#0066CC]">CodeAutomation</span>, we built a fully automated social media system using
            n8n that handles everything from AI creation to multi-platform scheduling.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
            {[
              { label: "AI-Powered", dot: "bg-[#00C9A7]" },
              { label: "Zero Manual Work", dot: "bg-[#00A3FF]" },
              { label: "Multi-Platform", dot: "bg-[#7B61FF]" },
            ].map((tag) => (
              <div key={tag.label} className="flex items-center">
                <div className={`w-2 h-2 rounded-full mr-1.5 ${tag.dot}`} />
                <span>{tag.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-10 gap-4">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Content&apos;s Automated Journey</h3>
              <p className="text-sm text-gray-600">From submission to scheduled in minutes</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {PHASES.map((phase) => (
                <button
                  key={phase.id}
                  type="button"
                  onClick={() => setActiveId(phase.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center border ${
                    activeId === phase.id
                      ? `bg-gradient-to-r ${phase.gradient} text-white shadow-md border-transparent`
                      : "bg-white text-gray-600 hover:bg-gray-50 border-gray-200"
                  }`}
                >
                  <phase.icon className="w-3.5 h-3.5 mr-1.5" />
                  <span className="hidden sm:inline">{phase.title}</span>
                  <span className="sm:hidden">Step {phase.number}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <Panel phase={activePhase} />
          </div>
        </div>

        <div className="mb-12 relative">
          <div className="absolute left-0 right-0 top-1/2 h-1.5 bg-gray-200 rounded-full transform -translate-y-1/2" />
          <div className="relative flex justify-between">
            {PHASES.map((phase) => {
              const active = activeId === phase.id;
              return (
                <div key={phase.id} className="flex flex-col items-center">
                  <button
                    type="button"
                    onClick={() => setActiveId(phase.id)}
                    aria-label={phase.title}
                    className={`relative w-12 h-12 rounded-lg flex items-center justify-center mb-2.5 transition-all ${
                      active ? `bg-gradient-to-r ${phase.gradient} text-white shadow-lg scale-105` : "bg-white text-gray-600 border border-gray-200"
                    }`}
                  >
                    <phase.icon className="w-5 h-5" />
                    {active && (
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#00C9A7] rounded-full flex items-center justify-center border border-white">
                        <CheckCircle className="w-2 h-2 text-white" />
                      </div>
                    )}
                  </button>
                  <span className={`text-xs font-medium text-center ${active ? "text-gray-900" : "text-gray-600"}`}>{phase.title}</span>
                  <span className="text-[10px] text-gray-500 mt-0.5">Step {phase.number}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Future of Social Media Management</h3>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto mb-6">With CodeAutomation, you&apos;re getting a complete automation partner.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={CONSULTATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-[#00A3FF] to-[#7B61FF] hover:from-[#0066CC] hover:to-[#5A43CC] text-white px-8 py-3 rounded-lg text-sm font-medium transition-all hover:scale-[1.02] flex items-center justify-center"
            >
              <Play className="w-3.5 h-3.5 inline mr-2 group-hover:scale-110 transition-transform" />
              Request Demo
            </a>
            <a
              href={CONSULTATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-[#00A3FF] text-[#00A3FF] hover:bg-[#00A3FF]/5 px-8 py-3 rounded-lg text-sm font-medium transition-all hover:scale-[1.02] flex items-center justify-center"
            >
              <Infinity className="w-3.5 h-3.5 inline mr-2 group-hover:rotate-180 transition-transform" />
              Book a Meeting
            </a>
          </div>
          <p className="text-xs text-gray-500 mt-4">Free consultation • No commitment • Expert guidance</p>
        </div>
      </div>
    </section>
  );
}
