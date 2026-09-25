import type { LucideIcon } from "lucide-react";
import {
  BrainCircuit,
  DatabaseZap,
  Zap,
  UserRoundCheck,
  Languages,
  ShieldCheck,
} from "lucide-react";

// Confirm with the business before publishing: these are presented as
// standards the chatbots are built to align with, not formal certifications.
const COMPLIANCE_STANDARDS = ["GDPR", "CCPA", "HIPAA", "SOC 2"];

const CAPABILITIES: {
  icon: LucideIcon;
  title: string;
  description: string;
  compliance?: string[];
}[] = [
  {
    icon: BrainCircuit,
    title: "Understand context",
    description: "Handle follow-ups, typos, and everyday language.",
  },
  {
    icon: DatabaseZap,
    title: "Answer from your data",
    description: "Stay accurate and on-brand.",
  },
  {
    icon: Zap,
    title: "Take action",
    description: "Book, update, and look up records in your tools.",
  },
  {
    icon: UserRoundCheck,
    title: "Hand off to humans",
    description: "Escalate with the full conversation attached.",
  },
  {
    icon: Languages,
    title: "Speak multiple languages",
    description: "Serve customers in their preferred language.",
  },
  {
    icon: ShieldCheck,
    title: "Protect your data",
    description: "Encrypted handling and role-based access.",
    compliance: COMPLIANCE_STANDARDS,
  },
];

export default function CapabilitiesSection() {
  return (
    <section className="relative overflow-hidden bg-[#0B1F33] text-white">
      {/* Background accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[#1D92FB] opacity-10 blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#7cc0ff]">
            Capabilities
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
            What Our Conversational AI Chatbots Can Do
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CAPABILITIES.map(({ icon: Icon, title, description, compliance }) => (
            <div
              key={title}
              className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-7 hover:bg-white/[0.08] hover:border-[#1D92FB]/50 transition-colors"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1D92FB]/15 text-[#1D92FB] group-hover:bg-[#1D92FB] group-hover:text-white transition-colors">
                <Icon className="w-6 h-6" aria-hidden />
              </span>
              <h3 className="mt-5 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-[15px] leading-7 text-gray-300">
                {description}
              </p>

              {compliance && (
                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Compliance standards
                  </p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {compliance.map((standard) => (
                      <li
                        key={standard}
                        className="flex items-center gap-1.5 rounded-full border border-[#f7e022]/40 bg-[#f7e022]/10 px-3 py-1 text-xs font-semibold text-[#f7e022]"
                      >
                        <ShieldCheck className="w-3.5 h-3.5" aria-hidden />
                        {standard}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
