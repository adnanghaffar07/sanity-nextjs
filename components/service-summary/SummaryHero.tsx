import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { urlForImage } from "@/sanity/lib/image";
import type { ServiceSummaryContent } from "@/sanity/lib/service-summary";
import { modelIcon, modelId } from "./model-id";

// Dark hero: title and introduction on the left, the hero image fading in
// behind them, and the engagement models on a white card on the right.
export default function SummaryHero({ data }: { data: ServiceSummaryContent }) {
  const paragraphs = (data.intro?.text ?? "").split(/\n+/).map((p) => p.trim()).filter(Boolean);
  const models = data.options?.items ?? [];

  return (
    <section className="relative isolate overflow-hidden bg-[#061A3A] text-white">
      {data.heroImage?.asset && (
        <div aria-hidden className="absolute inset-y-0 right-0 -z-10 w-full lg:w-[62%]">
          <Image
            src={urlForImage(data.heroImage)}
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 62vw, 100vw"
            className="object-cover"
          />
          {/* Fade the image into the navy: from the top on phones, from the left on large screens. */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#061A3A]/40 via-[#061A3A]/85 to-[#061A3A] lg:bg-gradient-to-r lg:from-[#061A3A] lg:via-[#061A3A]/50 lg:to-transparent" />
        </div>
      )}

      <div className="max-w-7xl mx-auto px-5 md:px-10 pt-32 md:pt-40 pb-16 md:pb-24 grid gap-12 lg:grid-cols-[minmax(0,1fr)_400px] xl:grid-cols-[minmax(0,1fr)_440px] lg:gap-16 items-center">
        <div className="max-w-2xl">
          <h1 className="text-[34px] sm:text-5xl lg:text-[56px] font-bold leading-[1.08] tracking-tight">{data.pageTitle}</h1>
          {data.pageDesc && <p className="mt-5 text-lg sm:text-xl font-medium text-[#6CBBFF]">{data.pageDesc}</p>}
          <div className="mt-8 space-y-4 text-base sm:text-[17px] leading-7 sm:leading-8 text-white/75">
            {paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        {models.length > 0 && (
          <nav
            aria-labelledby="ways-to-work"
            className="rounded-3xl bg-white text-[#061A3A] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] p-6 sm:p-8"
          >
            <h2 id="ways-to-work" className="text-lg font-semibold">
              Ways to work with us
            </h2>
            <ul className="mt-3 divide-y divide-slate-100">
              {models.map((model) => {
                const Icon = modelIcon(model.title);
                return (
                  <li key={model._key}>
                    <a
                      href={`#${modelId(model.title)}`}
                      className="group flex items-center gap-4 py-3.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D92FB]"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EAF4FF] text-[#1D92FB] transition-colors group-hover:bg-[#1D92FB] group-hover:text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-semibold group-hover:text-[#1D92FB] transition-colors">{model.title}</span>
                        <span className="block mt-0.5 text-sm text-slate-500">{model.subtitle}</span>
                      </span>
                      <ArrowDown
                        aria-hidden
                        className="h-4 w-4 shrink-0 text-slate-300 transition-all group-hover:text-[#1D92FB] group-hover:translate-y-0.5"
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </div>
    </section>
  );
}
