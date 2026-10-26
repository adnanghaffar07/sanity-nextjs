import type { ServiceSummaryContent } from "@/sanity/lib/service-summary";

// The project cycle, numbered because the steps happen in this order:
// a connected column on phones, a grid on tablets, a connected row on wide screens.
export default function ProjectTimeline({ cycle }: { cycle?: ServiceSummaryContent["cycle"] }) {
  const steps = cycle?.steps ?? [];
  if (steps.length === 0) return null;

  return (
    <section className="relative overflow-hidden bg-[#EAF4FF]">
      <div aria-hidden className="pointer-events-none absolute -left-40 top-1/3 h-80 w-80 rounded-full bg-[#1D92FB]/10 blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-24">
        <h2 className="max-w-2xl text-3xl sm:text-4xl font-bold tracking-tight text-[#061A3A]">{cycle?.heading}</h2>

        <ol className="relative mt-12 grid gap-10 md:grid-cols-2 md:gap-x-10 md:gap-y-12 lg:grid-cols-3 xl:grid-cols-6 xl:gap-6">
          {/* Connecting line: down the left on phones, across the top on wide screens. */}
          <span
            aria-hidden
            className="absolute left-5 top-2 bottom-2 w-px bg-[#1D92FB]/30 md:hidden xl:block xl:left-0 xl:right-0 xl:top-5 xl:bottom-auto xl:h-px xl:w-auto"
          />
          {steps.map((step, index) => (
            <li key={step._key} className="relative grid grid-cols-[40px_minmax(0,1fr)] gap-5 md:block">
              <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#061A3A] text-sm font-semibold text-white ring-8 ring-[#EAF4FF]">
                {index + 1}
              </span>
              <div className="md:mt-5 xl:mt-6">
                <h3 className="text-lg font-semibold text-[#061A3A]">{step.heading}</h3>
                <p className="mt-2 text-[15px] leading-7 text-slate-600">{step.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
