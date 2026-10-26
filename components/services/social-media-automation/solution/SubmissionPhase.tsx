"use client";

import { useEffect, useState } from "react";
import { Shield, Zap } from "lucide-react";
import { CONSULTATION_URL, FORM_FIELDS, WHY_FORM_WORKS, type Phase } from "./data";
import PhaseHeader from "./PhaseHeader";

// Step 1: the form fields, an animated completion bar and a booking card.
export default function SubmissionPhase({ phase }: { phase: Phase }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setProgress((value) => Math.min(value + 10, 100)), 200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-6">
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <PhaseHeader phase={phase} />
          <div className="grid grid-cols-2 gap-3">
            {FORM_FIELDS.map((field) => (
              <div key={field.label} className="group bg-white border border-gray-200 rounded-lg p-3 hover:border-[#00A3FF]/40 hover:shadow-xs transition-all">
                <div className="flex items-center mb-2">
                  <div className="p-1.5 rounded bg-gradient-to-br from-[#00A3FF]/10 to-[#0066CC]/10 group-hover:scale-105 transition-transform mr-2">
                    <field.icon className="w-3.5 h-3.5 text-[#00A3FF]" />
                  </div>
                  <h5 className="text-sm font-medium text-gray-900">{field.label}</h5>
                </div>
                <p className="text-xs text-gray-600">{field.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-xs font-medium text-gray-700">Form Completion</span>
              <span className="text-xs font-bold text-[#00A3FF]">{progress}%</span>
            </div>
            <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#00A3FF] to-[#7B61FF] rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>
            <p className="text-xs text-gray-500 mt-1.5">Ensures all content is on-brand and consistent</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-gradient-to-br from-[#00A3FF]/5 to-[#7B61FF]/5 border border-[#00A3FF]/20 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <div className="p-1.5 bg-gradient-to-r from-[#00A3FF] to-[#7B61FF] rounded mr-2">
                <Shield className="w-3.5 h-3.5 text-white" />
              </div>
              <h5 className="text-sm font-bold text-gray-900">Why This Works</h5>
            </div>
            <ul className="space-y-2">
              {WHY_FORM_WORKS.map((item) => (
                <li key={item} className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#00A3FF] to-[#7B61FF] rounded-full mt-1 mr-2" />
                  <span className="text-xs text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-r from-[#00A3FF] to-[#7B61FF] rounded-lg p-4 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -translate-y-8 translate-x-8" />
            <div className="relative z-10">
              <div className="flex items-center mb-2">
                <Zap className="w-4 h-4 mr-2" />
                <h5 className="text-sm font-bold">Ready to Submit?</h5>
              </div>
              <p className="text-blue-100 text-xs mb-3">Experience seamless submission to automation</p>
              <a
                href={CONSULTATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white text-[#0066CC] hover:bg-blue-50 py-2 rounded-lg text-sm font-medium transition-all hover:scale-[1.02] flex items-center justify-center"
              >
                Book a Meeting →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
