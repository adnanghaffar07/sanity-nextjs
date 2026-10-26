import { CheckCircle, Cpu, Play, Workflow } from "lucide-react";
import { ACTIVATION_PROGRESS, CONSULTATION_URL, type Phase } from "./data";
import PhaseHeader from "./PhaseHeader";

const STATUS_BADGE = {
  completed: "bg-gradient-to-r from-[#00C9A7] to-[#00A3FF] text-white",
  active: "bg-gradient-to-r from-[#00A3FF] to-[#7B61FF] text-white animate-pulse",
  pending: "bg-gray-100 text-gray-400",
};

const STATUS_TEXT = { completed: "text-gray-900", active: "text-[#00A3FF]", pending: "text-gray-600" };

// Step 2: the n8n workflow picks up the submission.
export default function ActivationPhase({ phase }: { phase: Phase }) {
  return (
    <div className="p-6">
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <PhaseHeader phase={phase} />
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-[#00C9A7]/10 to-[#00A3FF]/10 border border-[#00C9A7]/20 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <div className="p-1.5 bg-gradient-to-r from-[#00C9A7] to-[#00A3FF] rounded mr-2">
                  <Workflow className="w-3.5 h-3.5 text-white" />
                </div>
                <h5 className="text-sm font-bold text-gray-900">n8n Workflow Engine</h5>
              </div>
              <p className="text-sm text-gray-700 mb-3">Instantly detects submissions and triggers automation—zero manual intervention.</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Response Time", value: "< 1s" },
                  { label: "Success Rate", value: "99.9%" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white rounded-lg p-2.5 border border-[#00C9A7]/20">
                    <div className="text-xs text-gray-500">{stat.label}</div>
                    <div className="text-base font-bold text-[#00C9A7]">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-4 text-white">
              <h5 className="text-sm font-bold mb-2">Hands Off, No Stress</h5>
              <p className="text-gray-300 text-xs mb-3">Focus on strategy while we handle execution.</p>
              <div className="space-y-1.5">
                {["No manual follow-up needed", "24/7 automated processing"].map((point) => (
                  <div key={point} className="flex items-center">
                    <CheckCircle className="w-3 h-3 text-[#00C9A7] mr-2" />
                    <span className="text-xs">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200 rounded-lg p-4 h-full">
          <div className="flex items-center mb-4">
            <div className="p-1.5 bg-gradient-to-r from-[#00A3FF] to-[#7B61FF] rounded mr-2">
              <Cpu className="w-3.5 h-3.5 text-white" />
            </div>
            <h5 className="text-sm font-bold text-gray-900">Workflow Progress</h5>
          </div>
          <div className="space-y-3">
            {ACTIVATION_PROGRESS.map((step, index) => (
              <div key={step.label} className="flex items-center">
                <div className={`w-6 h-6 rounded-lg mr-3 flex items-center justify-center ${STATUS_BADGE[step.status]}`}>
                  {step.status === "completed" ? <CheckCircle className="w-2.5 h-2.5" /> : index + 1}
                </div>
                <span className={`flex-1 text-xs font-medium ${STATUS_TEXT[step.status]}`}>{step.label}</span>
              </div>
            ))}
          </div>
          <a
            href={CONSULTATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full mt-6 bg-gray-900 hover:bg-gray-800 text-white py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center"
          >
            <Play className="w-3 h-3 inline mr-1.5" />
            Request Demo
          </a>
        </div>
      </div>
    </div>
  );
}
