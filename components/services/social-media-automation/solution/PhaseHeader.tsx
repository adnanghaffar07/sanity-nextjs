import type { Phase } from "./data";

// "Step N of 4" heading at the top of each phase panel.
export default function PhaseHeader({ phase, className = "mb-4" }: { phase: Phase; className?: string }) {
  const Icon = phase.icon;
  return (
    <div className={`flex items-center ${className}`}>
      <div className={`w-12 h-12 bg-gradient-to-r ${phase.gradient} rounded-lg flex items-center justify-center mr-3 shadow`}>
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div>
        <div className={`text-xs font-medium mb-0.5 ${phase.accent}`}>Step {phase.number} of 4</div>
        <h4 className="text-lg font-bold text-gray-900">{phase.title}</h4>
        <p className="text-sm text-gray-600">{phase.subtitle}</p>
      </div>
    </div>
  );
}
