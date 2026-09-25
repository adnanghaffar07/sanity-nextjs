import { CircleX, CircleCheck, ArrowRight, ArrowDown } from "lucide-react";

const COMPARISONS = [
  {
    insteadOf: "Scripted FAQ answers",
    youGet: "Answers grounded in your own data",
  },
  {
    insteadOf: "A bot that only talks",
    youGet: "A chatbot that works inside your systems",
  },
  {
    insteadOf: "Testing in a demo",
    youGet: "Testing on real customer questions",
  },
  {
    insteadOf: "Guessing when unsure",
    youGet: "A clean handoff to a human",
  },
  {
    insteadOf: "Launch and forget",
    youGet: "Monitoring and refinement after launch",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="bg-[#F7F9FC]">
      <div className="max-w-5xl mx-auto px-5 md:px-10 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#1D92FB]">
            Why Choose Us
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-black">
            Why Businesses Choose Our AI Chatbot Development Agency
          </h2>
        </div>

        {/* Column headers (desktop) */}
        <div
          aria-hidden
          className="hidden md:grid grid-cols-[1fr_auto_1fr] gap-6 mt-12 px-6 text-sm font-semibold uppercase tracking-wider"
        >
          <span className="text-gray-400">Instead of</span>
          <span className="w-10" />
          <span className="text-[#1D92FB]">You get</span>
        </div>

        <ul className="mt-6 md:mt-4 space-y-4">
          {COMPARISONS.map(({ insteadOf, youGet }) => (
            <li
              key={youGet}
              className="grid md:grid-cols-[1fr_auto_1fr] items-center gap-3 md:gap-6 rounded-3xl bg-white p-4 sm:p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              {/* Instead of */}
              <div className="flex items-center gap-3 rounded-2xl bg-gray-50 px-4 py-3">
                <CircleX className="w-5 h-5 shrink-0 text-gray-400" aria-hidden />
                <p className="text-gray-500">
                  <span className="md:hidden text-xs font-semibold uppercase tracking-wider text-gray-400 block">
                    Instead of
                  </span>
                  <span className="line-through decoration-gray-300">
                    {insteadOf}
                  </span>
                </p>
              </div>

              <span className="flex justify-center text-[#1D92FB]" aria-hidden>
                <ArrowRight className="hidden md:block w-10 h-6" />
                <ArrowDown className="md:hidden w-5 h-5" />
              </span>

              {/* You get */}
              <div className="flex items-center gap-3 rounded-2xl bg-[#EAF4FF] px-4 py-3">
                <CircleCheck
                  className="w-5 h-5 shrink-0 text-[#1D92FB]"
                  aria-hidden
                />
                <p className="font-semibold text-black">
                  <span className="md:hidden text-xs font-semibold uppercase tracking-wider text-[#1D92FB] block">
                    You get
                  </span>
                  {youGet}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
