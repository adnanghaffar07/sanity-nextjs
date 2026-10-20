import type { LucideIcon } from "lucide-react";
import { Search, PenTool, Blocks, FlaskConical, Rocket } from "lucide-react";

const STEPS: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Search,
    title: "Discovery",
    description:
      "In a 1:1 session, we map your goals, customer journeys, and integrations, then agree on success metrics such as accuracy and resolution rate.",
  },
  {
    icon: PenTool,
    title: "Design and prototype",
    description:
      "We design conversation flows and escalation rules, and you review a working prototype.",
  },
  {
    icon: Blocks,
    title: "Build and integrate",
    description:
      "We build on the right model and connect your data, systems, and channels.",
  },
  {
    icon: FlaskConical,
    title: "Test",
    description:
      "We test with real customer questions, edge cases, and off-topic inputs to catch wrong answers before launch.",
  },
  {
    icon: Rocket,
    title: "Launch and optimize",
    description:
      "We monitor performance and refine answers as your business grows.",
  },
];

export default function ProcessSection() {
  return (
    // Target of the hero's "See How It Works" button. scroll-mt keeps the
    // heading clear of the fixed site header after the jump.
    <section id="how-it-works" className="scroll-mt-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#1D92FB]">
            How It Works
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-black">
            Our Proven Chatbot Development Process
          </h2>
        </div>

        <ol className="relative mt-14 grid gap-8 xl:grid-cols-5 xl:gap-6">
          {/* Timeline line: vertical on mobile, horizontal on desktop */}
          <span
            aria-hidden
            className="absolute left-7 top-7 bottom-7 w-0.5 bg-gradient-to-b from-[#1D92FB] to-[#1D92FB]/10 xl:hidden"
          />
          <span
            aria-hidden
            className="hidden xl:block absolute top-7 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#1D92FB] via-[#1D92FB]/60 to-[#1D92FB]/20"
          />

          {STEPS.map(({ icon: Icon, title, description }, i) => (
            <li
              key={title}
              className="relative flex gap-5 xl:flex-col xl:items-center xl:text-center"
            >
              <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#1D92FB] text-xl font-bold text-white shadow-lg ring-8 ring-white">
                {i + 1}
              </span>

              <div className="grow rounded-3xl border border-gray-100 bg-[#F7F9FC] p-5 xl:mt-6 xl:w-full xl:p-6 hover:bg-[#EAF4FF] transition-colors">
                <div className="flex items-center gap-3 xl:flex-col xl:gap-3">
                  <Icon
                    className="w-6 h-6 shrink-0 text-[#1D92FB]"
                    aria-hidden
                  />
                  <h3 className="text-lg font-bold text-black">{title}</h3>
                </div>
                <p className="mt-3 text-[15px] leading-7 text-gray-600">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
