// Icon Grid, Comparison, CTA Banner, Industries and Process sections.

import { CircleCheck, MessagesSquare, Workflow, ShieldCheck } from "lucide-react";
import type { LinkMap, SpLink } from "./links";
import { Icon } from "./icons";
import {
  Button,
  RichText,
  SanityImage,
  SectionHeader,
  SectionShell,
  SmartLink,
  hasRichText,
  hasImage,
  type SpButton,
  type SpImageValue,
} from "./primitives";

type Base = { links: LinkMap; anchorId?: string };
const DARK_LINK = "font-medium text-[#7cc0ff] underline underline-offset-2 hover:text-white";

// ── Icon grid ────────────────────────────────────────────────────────────────

export type IconGridData = {
  eyebrow?: string;
  heading?: string;
  intro?: unknown;
  theme?: "dark" | "light";
  items?: {
    _key: string;
    icon?: string;
    title?: string;
    description?: unknown;
    tagsLabel?: string;
    tags?: string[];
    link?: SpLink;
  }[];
};

export function IconGridSection({ data, links, anchorId }: { data: IconGridData } & Base) {
  const dark = data.theme !== "light";
  return (
    <SectionShell anchorId={anchorId} className={`relative overflow-hidden ${dark ? "bg-[#0B1F33] text-white" : "bg-[#F7F9FC]"}`}>
      {dark && (
        <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[#1D92FB] opacity-10 blur-3xl" />
      )}
      <div className="relative max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-24">
        <SectionHeader eyebrow={data.eyebrow} heading={data.heading} intro={data.intro} links={links} dark={dark} />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {(data.items || []).map((item) => (
            <SmartLink
              key={item._key}
              link={item.link}
              links={links}
              className={`group block rounded-3xl p-6 sm:p-7 transition-colors ${
                dark
                  ? "border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-[#1D92FB]/50"
                  : "border border-gray-100 bg-white shadow-sm hover:shadow-lg"
              }`}
            >
              <span className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-colors group-hover:bg-[#1D92FB] group-hover:text-white ${dark ? "bg-[#1D92FB]/15 text-[#1D92FB]" : "bg-[#EAF4FF] text-[#1D92FB]"}`}>
                <Icon name={item.icon} className="w-6 h-6" />
              </span>
              <h3 className={`mt-5 text-lg font-bold ${dark ? "" : "text-black"}`}>{item.title}</h3>
              <RichText
                value={item.description}
                links={links}
                className={`mt-2 text-[15px] leading-7 ${dark ? "text-gray-300" : "text-gray-600"}`}
                linkClassName={dark ? DARK_LINK : undefined}
              />
              {!!item.tags?.length && (
                <div className="mt-4">
                  {item.tagsLabel && (
                    <p className={`text-xs font-semibold uppercase tracking-wider ${dark ? "text-gray-400" : "text-gray-500"}`}>{item.tagsLabel}</p>
                  )}
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <li key={tag} className="flex items-center gap-1.5 rounded-full border border-[#f7e022]/40 bg-[#f7e022]/10 px-3 py-1 text-xs font-semibold text-[#b8a200]">
                        <ShieldCheck className="w-3.5 h-3.5" aria-hidden />
                        <span className={dark ? "text-[#f7e022]" : ""}>{tag}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </SmartLink>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

// ── Comparison (VS) ──────────────────────────────────────────────────────────

type ComparisonCard = { icon?: string; title?: string; description?: unknown; chooseWhen?: unknown; link?: SpLink };
export type ComparisonData = {
  eyebrow?: string;
  heading?: string;
  noteLabel?: string;
  left?: ComparisonCard;
  right?: ComparisonCard;
  footer?: unknown;
};

export function ComparisonSection({ data, links, anchorId }: { data: ComparisonData } & Base) {
  const left = data.left || {};
  const noteLabel = data.noteLabel?.trim() || "Choose it when";
  const right = data.right || {};
  return (
    <SectionShell anchorId={anchorId} className="bg-white">
      <div className="max-w-6xl mx-auto px-5 md:px-10 py-16 md:py-24">
        <SectionHeader eyebrow={data.eyebrow} heading={data.heading} links={links} />
        <div className="relative mt-12 grid md:grid-cols-2 gap-6 md:gap-10">
          <div className="flex flex-col rounded-3xl border-2 border-[#1D92FB] bg-[#EAF4FF] p-5 sm:p-9">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1D92FB] text-white shadow-lg">
              <Icon name={left.icon} fallback={MessagesSquare} className="w-7 h-7" />
            </span>
            <h3 className="mt-6 text-2xl font-bold text-black">
              <SmartLink link={left.link} links={links} fallbackAs="span" className="hover:text-[#1D92FB]">{left.title}</SmartLink>
            </h3>
            <RichText value={left.description} links={links} className="mt-3 text-base leading-7 text-gray-700 grow" />
            {hasRichText(left.chooseWhen) && (
              <div className="mt-6 flex items-start gap-3 rounded-2xl bg-white px-4 sm:px-5 py-4 shadow-sm">
                <CircleCheck className="w-5 h-5 mt-0.5 shrink-0 text-[#1D92FB]" aria-hidden />
                <p className="text-[15px] leading-6 text-gray-800">
                  <span className="font-semibold text-black">{noteLabel}</span>{" "}
                  <RichText value={left.chooseWhen} links={links} inline />
                </p>
              </div>
            )}
          </div>

          <span aria-hidden className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-14 w-14 items-center justify-center rounded-full bg-[#f7e022] text-lg font-extrabold text-black shadow-lg ring-8 ring-white">
            VS
          </span>

          <div className="flex flex-col rounded-3xl bg-[#0B1F33] p-5 sm:p-9 text-white">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#7cc0ff]">
              <Icon name={right.icon} fallback={Workflow} className="w-7 h-7" />
            </span>
            <h3 className="mt-6 text-2xl font-bold">
              <SmartLink link={right.link} links={links} fallbackAs="span" className="hover:text-[#7cc0ff]">{right.title}</SmartLink>
            </h3>
            <RichText value={right.description} links={links} className="mt-3 text-base leading-7 text-gray-300 grow" linkClassName={DARK_LINK} />
            {hasRichText(right.chooseWhen) && (
              <div className="mt-6 flex items-start gap-3 rounded-2xl bg-white/10 px-4 sm:px-5 py-4">
                <CircleCheck className="w-5 h-5 mt-0.5 shrink-0 text-[#7cc0ff]" aria-hidden />
                <p className="text-[15px] leading-6 text-gray-200">
                  <span className="font-semibold text-white">{noteLabel}</span>{" "}
                  <RichText value={right.chooseWhen} links={links} inline linkClassName={DARK_LINK} />
                </p>
              </div>
            )}
          </div>
        </div>
        <RichText value={data.footer} links={links} className="mt-10 text-center text-base sm:text-lg text-gray-700" />
      </div>
    </SectionShell>
  );
}

// ── CTA banner ───────────────────────────────────────────────────────────────

export type CtaBannerData = { heading?: string; text?: unknown; button?: SpButton; image?: SpImageValue };

export function CtaBannerSection({ data, links, anchorId }: { data: CtaBannerData } & Base) {
  const withImage = hasImage(data.image);
  return (
    <SectionShell anchorId={anchorId} className="bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-12 md:py-16">
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#1D92FB] via-[#1479d6] to-[#0B1F33] px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14 text-white shadow-2xl">
          <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border-[40px] border-white/10" />
          <div aria-hidden className="pointer-events-none absolute -left-16 -bottom-20 h-56 w-56 rounded-full bg-[#f7e022]/10 blur-2xl" />
          <div className={`relative grid gap-10 items-center ${withImage ? "lg:grid-cols-12" : ""}`}>
            <div className={withImage ? "lg:col-span-7 text-center lg:text-left" : "text-center max-w-3xl mx-auto"}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">{data.heading}</h2>
              <RichText
                value={data.text}
                links={links}
                className={`mt-5 text-base sm:text-lg leading-7 text-blue-50/90 max-w-2xl ${withImage ? "mx-auto lg:mx-0" : "mx-auto"}`}
                linkClassName="font-semibold text-white underline underline-offset-2"
              />
              {data.button?.label && (
                <div className="mt-8">
                  <Button button={data.button} links={links} defaultStyle="accent" />
                </div>
              )}
            </div>
            {withImage && (
              <div className="lg:col-span-5">
                <SanityImage
                  image={data.image}
                  width={860}
                  height={660}
                  sizes="(min-width: 640px) 448px, 100vw"
                  className="w-full max-w-md h-auto mx-auto rounded-2xl shadow-2xl ring-4 ring-white/20"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

// ── Industries ───────────────────────────────────────────────────────────────

export type IndustriesData = {
  eyebrow?: string;
  heading?: string;
  intro?: unknown;
  items?: { _key: string; icon?: string; title?: string; points?: string[]; link?: SpLink }[];
};

export function IndustriesSection({ data, links, anchorId }: { data: IndustriesData } & Base) {
  return (
    <SectionShell anchorId={anchorId} className="bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-24">
        <SectionHeader eyebrow={data.eyebrow} heading={data.heading} intro={data.intro} links={links} />
        <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {(data.items || []).map((item) => (
            <li key={item._key}>
              <SmartLink
                link={item.link}
                links={links}
                className="group relative flex h-full flex-col rounded-3xl bg-white p-6 shadow-sm border border-gray-100 hover:border-[#1D92FB]/40 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <span aria-hidden className="absolute left-0 top-0 h-1 w-12 bg-[#1D92FB] transition-all duration-300 group-hover:w-full" />
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF4FF] text-[#1D92FB] group-hover:bg-[#1D92FB] group-hover:text-white transition-colors">
                  <Icon name={item.icon} className="w-6 h-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-black">{item.title}</h3>
                <ul className="mt-3 space-y-2">
                  {(item.points || []).map((point, i) => (
                    <li key={i} className="flex items-center gap-2 text-[15px] text-gray-600">
                      <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#1D92FB]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </SmartLink>
            </li>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}

// ── Process timeline ─────────────────────────────────────────────────────────

export type ProcessData = {
  eyebrow?: string;
  heading?: string;
  intro?: unknown;
  steps?: { _key: string; icon?: string; title?: string; description?: unknown }[];
};

export function ProcessSection({ data, links, anchorId }: { data: ProcessData } & Base) {
  const steps = data.steps || [];
  // Horizontal timeline only when it fits nicely (≤5 steps, xl screens).
  const horizontal = steps.length > 0 && steps.length <= 5;
  const cols = ["", "xl:grid-cols-1", "xl:grid-cols-2", "xl:grid-cols-3", "xl:grid-cols-4", "xl:grid-cols-5"][steps.length] || "";
  return (
    <SectionShell anchorId={anchorId} className="bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-24">
        <SectionHeader eyebrow={data.eyebrow} heading={data.heading} intro={data.intro} links={links} />
        <ol className={`relative mt-14 grid gap-8 ${horizontal ? `${cols} xl:gap-6` : "max-w-3xl mx-auto"}`}>
          <span aria-hidden className={`absolute left-7 top-7 bottom-7 w-0.5 bg-gradient-to-b from-[#1D92FB] to-[#1D92FB]/10 ${horizontal ? "xl:hidden" : ""}`} />
          {horizontal && (
            <span aria-hidden className="hidden xl:block absolute top-7 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#1D92FB] via-[#1D92FB]/60 to-[#1D92FB]/20" />
          )}
          {steps.map((step, i) => (
            <li key={step._key} className={`relative flex gap-5 ${horizontal ? "xl:flex-col xl:items-center xl:text-center" : ""}`}>
              <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#1D92FB] text-xl font-bold text-white shadow-lg ring-8 ring-white">
                {i + 1}
              </span>
              <div className={`grow rounded-3xl border border-gray-100 bg-[#F7F9FC] p-5 hover:bg-[#EAF4FF] transition-colors ${horizontal ? "xl:mt-6 xl:w-full xl:p-6" : ""}`}>
                <div className={`flex items-center gap-3 ${horizontal ? "xl:flex-col xl:gap-3" : ""}`}>
                  <Icon name={step.icon} className="w-6 h-6 shrink-0 text-[#1D92FB]" />
                  <h3 className="text-lg font-bold text-black">{step.title}</h3>
                </div>
                <RichText value={step.description} links={links} className="mt-3 text-[15px] leading-7 text-gray-600" />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </SectionShell>
  );
}

