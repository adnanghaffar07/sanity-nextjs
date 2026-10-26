"use client";

// The engagement models as tabs: pick one on the left, read it on the right.
// Every panel stays in the HTML (inactive ones are hidden), so all of the
// content is still indexed. Links to #model-id from the hero open that tab.

import { useCallback, useEffect, useMemo, useRef, useState, type KeyboardEvent } from "react";
import { Check } from "lucide-react";
import type { ServiceSummaryContent } from "@/sanity/lib/service-summary";
import { modelIcon, modelId } from "./model-id";

type Options = NonNullable<ServiceSummaryContent["options"]>;

export default function EngagementModels({ options }: { options: Options }) {
  const models = useMemo(() => options.items ?? [], [options.items]);
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  // Open the tab named in the URL hash (from the hero links or a shared link).
  const openFromHash = useCallback(() => {
    const index = models.findIndex((m) => modelId(m.title) === window.location.hash.slice(1));
    if (index >= 0) {
      setActive(index);
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      sectionRef.current?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    }
  }, [models]);

  useEffect(() => {
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, [openFromHash]);

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const keys: Record<string, number> = {
      ArrowDown: index + 1,
      ArrowRight: index + 1,
      ArrowUp: index - 1,
      ArrowLeft: index - 1,
      Home: 0,
      End: models.length - 1,
    };
    if (!(event.key in keys)) return;
    event.preventDefault();
    const next = (keys[event.key] + models.length) % models.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  if (models.length === 0) return null;

  return (
    <section ref={sectionRef} className="scroll-mt-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-24">
        <h2 className="max-w-2xl text-3xl sm:text-4xl font-bold tracking-tight text-[#061A3A]">{options.heading}</h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-10">
          {/* Tabs: a scrolling row on phones, a column on large screens. */}
          <div
            role="tablist"
            aria-label="Service delivery options"
            aria-orientation="vertical"
            className="-mx-5 px-5 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mx-0 lg:px-0 lg:flex-col lg:overflow-visible"
          >
            {models.map((model, index) => {
              const selected = index === active;
              const id = modelId(model.title);
              const Icon = modelIcon(model.title);
              return (
                <button
                  key={model._key}
                  ref={(el) => {
                    tabRefs.current[index] = el;
                  }}
                  id={`${id}-tab`}
                  role="tab"
                  type="button"
                  aria-selected={selected}
                  aria-controls={id}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(index)}
                  onKeyDown={(event) => onKeyDown(event, index)}
                  className={`shrink-0 flex items-center gap-3 lg:gap-4 text-left rounded-2xl px-4 py-3 lg:px-5 lg:py-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D92FB] focus-visible:ring-offset-2 ${
                    selected ? "bg-[#061A3A] text-white shadow-lg shadow-[#061A3A]/20" : "bg-[#EAF4FF] text-[#061A3A] hover:bg-[#d9ecff]"
                  }`}
                >
                  <span
                    className={`flex h-8 w-8 lg:h-10 lg:w-10 shrink-0 items-center justify-center rounded-xl ${
                      selected ? "bg-[#1D92FB] text-white" : "bg-white text-[#1D92FB]"
                    }`}
                  >
                    <Icon className="h-4 w-4 lg:h-5 lg:w-5" aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-semibold whitespace-nowrap lg:whitespace-normal">{model.title}</span>
                    <span className={`hidden lg:block mt-0.5 text-sm ${selected ? "text-white/70" : "text-slate-500"}`}>
                      {model.subtitle}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {models.map((model, index) => {
            const id = modelId(model.title);
            const Icon = modelIcon(model.title);
            return (
              <article
                key={model._key}
                id={id}
                role="tabpanel"
                aria-labelledby={`${id}-tab`}
                hidden={index !== active}
                className="relative isolate overflow-hidden rounded-3xl bg-[#061A3A] text-white p-6 sm:p-10 lg:p-12"
              >
                {/* Soft brand-blue light in the corner, and the option's icon as a large watermark. */}
                <div aria-hidden className="absolute -top-24 -right-24 -z-10 h-72 w-72 rounded-full bg-[#1D92FB]/25 blur-3xl" />
                <Icon aria-hidden className="absolute right-6 top-6 -z-10 h-24 w-24 sm:h-32 sm:w-32 text-white/[0.04]" strokeWidth={1.25} />

                <p className="text-[#F7E022] font-medium">{model.subtitle}</p>
                <h3 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight">{model.title}</h3>
                <p className="mt-5 max-w-2xl text-[17px] leading-8 text-white/80">{model.description}</p>

                {!!model.benefits?.length && (
                  <>
                    <h4 className="mt-8 font-semibold">Key benefits</h4>
                    <ul className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                      {model.benefits.map((benefit) => (
                        <li key={benefit} className="flex gap-3 text-white/90">
                          <Check className="mt-1 h-4 w-4 shrink-0 text-[#F7E022]" aria-hidden />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                <a
                  href="#contact-box"
                  className="mt-10 inline-flex items-center rounded-xl bg-[#1D92FB] px-6 py-3 font-semibold text-white hover:bg-[#1680e0] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#061A3A]"
                >
                  Discuss {(model.title ?? "this option").replace(/\s*\(.*\)$/, "")} with us
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
