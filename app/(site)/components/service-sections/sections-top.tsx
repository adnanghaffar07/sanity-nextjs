// Hero, Intro, Problem, Services Grid and Image Cards sections.

import type { ReactNode } from "react";
import { Bot, User, TriangleAlert, CircleX, CircleCheck, ArrowRight, Target } from "lucide-react";
import type { LinkMap } from "./links";
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

// ── Hero ─────────────────────────────────────────────────────────────────────

const REVIEW_LINKS = {
  google: "https://g.page/r/CVDpezkiN96NEAE/review",
  clutch: "https://clutch.co/profile/codeautomationai",
  designrush: "https://www.designrush.com/agency/profile/codeautomation",
};

const CLIENT_LOGOS = [
  { src: "/logo1.png", alt: "getdandy", height: "h-7 sm:h-8" },
  { src: "/logo2.png", alt: "Letshego", height: "h-6 sm:h-7" },
  { src: "/logo3.png", alt: "Abacus.AI", height: "h-5 sm:h-6" },
  { src: "/logo4.png", alt: "Make With Tech", height: "h-7 sm:h-9" },
  { src: "/logo5.png", alt: "innRoad", height: "h-5 sm:h-6" },
];

const Stars = () => (
  <span className="text-[11px] leading-none tracking-[1px] text-[#FBBC05]" aria-hidden>
    ★★★★★
  </span>
);

function TrustBar() {
  const chip =
    "flex items-center gap-2.5 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm hover:border-[#1D92FB]/40 hover:shadow-md transition";
  return (
    <div className="mt-16 border-t border-gray-200/70 pt-10">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">Trusted by</p>
      <ul className="mt-6 flex flex-wrap justify-center gap-y-8">
        {CLIENT_LOGOS.map((logo) => (
          <li key={logo.src} className="flex h-10 basis-1/2 sm:basis-1/3 lg:basis-1/5 items-center justify-center px-3">
            <img
              src={logo.src}
              alt={logo.alt}
              loading="lazy"
              className={`${logo.height} w-auto max-w-[140px] object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition duration-300`}
            />
          </li>
        ))}
      </ul>
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">Rated on</span>
        <ul className="flex flex-wrap items-center justify-center gap-3">
          <li>
            <a href={REVIEW_LINKS.google} target="_blank" rel="noopener noreferrer" className={chip}>
              <img src="/google.png" alt="" className="h-5 w-5" />
              <span className="flex flex-col">
                <span className="text-sm font-semibold leading-tight text-gray-800">Google Reviews</span>
                <Stars />
              </span>
            </a>
          </li>
          <li>
            <a href={REVIEW_LINKS.clutch} target="_blank" rel="noopener noreferrer" aria-label="Clutch reviews" className={chip}>
              <img src="/clutch-icon.svg" alt="Clutch" className="h-4 w-auto" />
              <Stars />
            </a>
          </li>
          <li>
            <a href={REVIEW_LINKS.designrush} target="_blank" rel="noopener noreferrer" className={chip}>
              <span className="block h-6 w-[15px] overflow-hidden">
                <img src="/designrush-logo.png" alt="" className="h-6 w-auto max-w-none" />
              </span>
              <span className="flex flex-col">
                <span className="text-sm font-semibold leading-tight text-gray-800">DesignRush</span>
                <Stars />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export type HeroData = {
  badge?: string;
  badgeIcon?: string;
  heading?: string;
  headingHighlight?: string;
  subheading?: unknown;
  highlights?: { _key: string; text?: unknown }[];
  primaryButton?: SpButton;
  secondaryButton?: SpButton;
  image?: SpImageValue;
  showTrustBar?: boolean;
};

export function HeroSection({ data, links, anchorId }: { data: HeroData } & Base) {
  const withImage = hasImage(data.image);
  return (
    <SectionShell anchorId={anchorId} className="relative overflow-hidden bg-gradient-to-b from-[#EAF4FF] via-white to-white">
      <div aria-hidden className="pointer-events-none absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-[#1D92FB] opacity-10 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute top-1/2 -left-40 w-[360px] h-[360px] rounded-full bg-[#f7e022] opacity-10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-10 pt-32 md:pt-40 pb-16 md:pb-20">
        <div className={`grid gap-12 lg:gap-16 items-center ${withImage ? "lg:grid-cols-2" : ""}`}>
          <div className={`text-center ${withImage ? "lg:text-left" : "max-w-4xl mx-auto"}`}>
            {data.badge && (
              <span className="inline-flex items-center gap-2 rounded-full bg-white border border-[#1D92FB]/20 px-4 py-1.5 text-sm font-medium text-[#1D92FB] shadow-sm">
                <Icon name={data.badgeIcon} fallback={Bot} className="w-4 h-4" />
                {data.badge}
              </span>
            )}
            <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-black">
              {data.heading}
              {data.headingHighlight && (
                <>
                  {" "}
                  <span className="text-[#1D92FB]">{data.headingHighlight}</span>
                </>
              )}
            </h1>
            <RichText
              value={data.subheading}
              links={links}
              className={`mt-5 text-base sm:text-lg leading-7 text-gray-700 max-w-xl ${withImage ? "mx-auto lg:mx-0" : "mx-auto"}`}
            />
            {!!data.highlights?.length && (
              <ul className={`mt-6 space-y-3 max-w-xl text-left ${withImage ? "mx-auto lg:mx-0" : "mx-auto"}`}>
                {data.highlights.map((h) => (
                  <li key={h._key} className="flex items-start gap-3 text-gray-800">
                    <CircleCheck className="w-5 h-5 mt-0.5 shrink-0 text-[#1D92FB]" aria-hidden />
                    <RichText value={h.text} links={links} inline className="text-base" />
                  </li>
                ))}
              </ul>
            )}
            {(data.primaryButton?.label || data.secondaryButton?.label) && (
              <div className={`mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-4 justify-center ${withImage ? "lg:justify-start" : ""}`}>
                <Button button={data.primaryButton} links={links} defaultStyle="primary" />
                <Button button={data.secondaryButton} links={links} defaultStyle="accent" />
              </div>
            )}
          </div>

          {withImage && (
            <div className="relative mx-auto w-full max-w-[560px]">
              <SanityImage
                image={data.image}
                width={1120}
                height={960}
                priority
                sizes="(min-width: 640px) 560px, 100vw"
                className="w-full h-auto rounded-3xl shadow-xl"
              />
            </div>
          )}
        </div>

        {data.showTrustBar !== false && <TrustBar />}
      </div>
    </SectionShell>
  );
}

// ── Intro ────────────────────────────────────────────────────────────────────

export type IntroData = {
  eyebrow?: string;
  heading?: string;
  body?: unknown;
  panelTitle?: string;
  panelItems?: { _key: string; icon?: string; title?: string; link?: any }[];
  notes?: { _key: string; icon?: string; title?: string }[];
};

export function IntroSection({ data, links, anchorId }: { data: IntroData } & Base) {
  const hasPanel = Boolean(data.panelItems?.length);
  return (
    <SectionShell anchorId={anchorId} className="bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-24">
        <div className={`grid gap-10 lg:gap-16 items-center ${hasPanel ? "lg:grid-cols-12" : ""}`}>
          <div className={hasPanel ? "lg:col-span-7" : "max-w-4xl mx-auto"}>
            <SectionHeader eyebrow={data.eyebrow} heading={data.heading} links={links} align={hasPanel ? "left" : "center"} />
            <RichText
              value={data.body}
              links={links}
              className={`mt-6 text-base sm:text-lg leading-8 text-gray-700 ${hasPanel ? "text-center lg:text-left" : "text-center"}`}
            />
          </div>
          {hasPanel && (
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-[#EAF4FF] p-6 sm:p-8">
                {data.panelTitle && (
                  <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">{data.panelTitle}</p>
                )}
                <ul className="mt-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-3">
                  {data.panelItems!.map((item) => (
                    <li key={item._key}>
                      <SmartLink
                        link={item.link}
                        links={links}
                        className="flex items-center gap-4 rounded-2xl bg-white px-4 py-4 shadow-sm"
                      >
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1D92FB] text-white">
                          <Icon name={item.icon} className="w-5 h-5" />
                        </span>
                        <span className="font-medium text-black">{item.title}</span>
                      </SmartLink>
                    </li>
                  ))}
                </ul>
                {!!data.notes?.length && (
                  <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                    {data.notes.map((note) => (
                      <div key={note._key} className="flex items-start gap-2 text-gray-700">
                        <Icon name={note.icon} className="w-4 h-4 mt-0.5 shrink-0 text-[#1D92FB]" />
                        {note.title}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </SectionShell>
  );
}

// ── Problem ──────────────────────────────────────────────────────────────────

export type ProblemData = {
  eyebrow?: string;
  heading?: string;
  intro?: unknown;
  image?: SpImageValue;
  /** Legacy: pages made before the image field may still have a chat example. */
  chatExample?: { _key: string; from?: "user" | "bot"; text?: string; warning?: boolean }[];
  costTitle?: string;
  costs?: { _key: string; icon?: string; title?: string }[];
  body?: unknown;
  badTitle?: string;
  badItems?: string[];
  goodTitle?: string;
  goodItems?: string[];
  closingLine?: unknown;
};

function ChatBubble({ from, warning, children }: { from?: string; warning?: boolean; children: ReactNode }) {
  if (from === "user") {
    return (
      <div className="flex justify-end items-end gap-2">
        <p className="max-w-[80%] rounded-2xl rounded-br-sm bg-[#1D92FB] px-4 py-2.5 text-white">{children}</p>
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#EAF4FF] text-[#1D92FB]">
          <User className="w-4 h-4" aria-hidden />
        </span>
      </div>
    );
  }
  return (
    <div className="flex items-end gap-2">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gray-200 text-gray-500">
        <Bot className="w-4 h-4" aria-hidden />
      </span>
      <div className="max-w-[80%]">
        <p className={`rounded-2xl rounded-bl-sm px-4 py-2.5 ${warning ? "bg-red-50 text-red-700 border border-red-200" : "bg-gray-100 text-gray-800"}`}>
          {children}
        </p>
        {warning && (
          <p className="mt-1 flex items-center gap-1 text-xs font-medium text-red-500">
            <TriangleAlert className="w-3.5 h-3.5" aria-hidden />
            Confidently wrong
          </p>
        )}
      </div>
    </div>
  );
}

export function ProblemSection({ data, links, anchorId }: { data: ProblemData } & Base) {
  const withImage = hasImage(data.image);
  // The image replaced the old chat example; keep showing a chat only for
  // older pages that have one and no image.
  const hasChat = !withImage && Boolean(data.chatExample?.length);
  const hasVisual = withImage || hasChat;
  const hasCosts = Boolean(data.costs?.length || data.costTitle || hasRichText(data.body));
  return (
    <SectionShell anchorId={anchorId} className="bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-24">
        <SectionHeader eyebrow={data.eyebrow} heading={data.heading} intro={data.intro} links={links} />

        {(hasVisual || hasCosts) && (
          <div className={`mt-12 grid gap-8 lg:gap-12 items-center ${hasVisual && hasCosts ? "lg:grid-cols-2" : ""}`}>
            {withImage && (
              <SanityImage
                image={data.image}
                width={1200}
                height={900}
                sizes="(min-width: 1024px) 560px, 100vw"
                className={`w-full h-auto rounded-3xl shadow-lg border border-gray-100 ${hasCosts ? "" : "max-w-3xl mx-auto"}`}
              />
            )}
            {hasChat && (
              <div className="rounded-3xl bg-white p-5 sm:p-7 shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-gray-500">
                    <Bot className="w-5 h-5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-black">Template Bot</p>
                    <p className="text-xs text-gray-400">Generic chatbot</p>
                  </div>
                </div>
                <div className="mt-5 space-y-4 text-sm">
                  {data.chatExample!.map((m) => (
                    <ChatBubble key={m._key} from={m.from} warning={m.warning}>
                      {m.text}
                    </ChatBubble>
                  ))}
                </div>
              </div>
            )}
            {hasCosts && (
              <div>
                {data.costTitle && <h3 className="text-xl sm:text-2xl font-bold text-black">{data.costTitle}</h3>}
                {!!data.costs?.length && (
                  <ul className="mt-6 space-y-4">
                    {data.costs.map((c) => (
                      <li key={c._key} className="flex items-center gap-4 rounded-2xl bg-white px-5 py-4 shadow-sm border border-gray-100">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-500">
                          <Icon name={c.icon} fallback={TriangleAlert} className="w-5 h-5" />
                        </span>
                        <span className="font-medium text-gray-800">{c.title}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <RichText value={data.body} links={links} className="mt-6 text-base leading-7 text-gray-700" />
              </div>
            )}
          </div>
        )}

        {(!!data.badItems?.length || !!data.goodItems?.length) && (
          <div className="mt-14 grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl bg-white p-6 sm:p-8 border border-gray-100 shadow-sm">
              {data.badTitle && <p className="text-sm font-semibold uppercase tracking-wider text-red-500">{data.badTitle}</p>}
              <ul className="mt-5 space-y-3">
                {(data.badItems || []).map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <CircleX className="w-5 h-5 mt-0.5 shrink-0 text-red-400" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-[#0B1F33] p-6 sm:p-8 text-white shadow-lg">
              {data.goodTitle && <p className="text-sm font-semibold uppercase tracking-wider text-[#7cc0ff]">{data.goodTitle}</p>}
              <ul className="mt-5 space-y-3">
                {(data.goodItems || []).map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 mt-0.5 shrink-0 text-[#1D92FB]" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              {hasRichText(data.closingLine) && (
                <p className="mt-6 flex items-center gap-2 font-semibold text-[#f7e022]">
                  <RichText value={data.closingLine} links={links} inline linkClassName="underline underline-offset-2" />
                  <ArrowRight className="w-4 h-4 shrink-0" aria-hidden />
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </SectionShell>
  );
}

// ── Services grid ────────────────────────────────────────────────────────────

export type ServicesGridData = {
  outcomeLabel?: string;
  eyebrow?: string;
  heading?: string;
  intro?: unknown;
  items?: { _key: string; icon?: string; title?: string; description?: unknown; outcome?: unknown; link?: any }[];
};

export function ServicesGridSection({ data, links, anchorId }: { data: ServicesGridData } & Base) {
  return (
    <SectionShell anchorId={anchorId} className="bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-24">
        <SectionHeader eyebrow={data.eyebrow} heading={data.heading} intro={data.intro} links={links} />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(data.items || []).map((item, i) => (
            <article
              key={item._key}
              className="group relative flex flex-col rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="flex flex-col grow p-6 sm:p-7">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF4FF] text-[#1D92FB] group-hover:bg-[#1D92FB] group-hover:text-white transition-colors">
                    <Icon name={item.icon} className="w-6 h-6" />
                  </span>
                  <span aria-hidden className="text-3xl font-bold text-gray-100 group-hover:text-[#EAF4FF] transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 text-lg sm:text-xl font-bold text-black">
                  <SmartLink link={item.link} links={links} fallbackAs="span" className="hover:text-[#1D92FB] transition-colors">
                    {item.title}
                  </SmartLink>
                </h3>
                <RichText value={item.description} links={links} className="mt-3 text-[15px] leading-7 text-gray-600" />
              </div>
              {hasRichText(item.outcome) && (
                <div className="flex items-start gap-3 bg-[#F7F9FC] border-t border-gray-100 px-6 sm:px-7 py-4">
                  <Target className="w-5 h-5 mt-0.5 shrink-0 text-[#1D92FB]" aria-hidden />
                  <p className="text-sm">
                    <span className="font-semibold text-black">{data.outcomeLabel?.trim() || "Outcome"}: </span>
                    <RichText value={item.outcome} links={links} inline className="text-gray-700" />
                  </p>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

// ── Image cards ──────────────────────────────────────────────────────────────

export type ImageCardsData = {
  eyebrow?: string;
  heading?: string;
  intro?: unknown;
  tagsLabel?: string;
  items?: { _key: string; image?: SpImageValue; icon?: string; title?: string; description?: unknown; tags?: string[]; link?: any }[];
};

export function ImageCardsSection({ data, links, anchorId }: { data: ImageCardsData } & Base) {
  return (
    <SectionShell anchorId={anchorId} className="relative overflow-hidden bg-gradient-to-b from-[#EAF4FF] to-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-24">
        <SectionHeader eyebrow={data.eyebrow} heading={data.heading} intro={data.intro} links={links} />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {(data.items || []).map((item) => (
            <article key={item._key} className="group flex flex-col rounded-3xl bg-white shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="relative p-3 pb-0">
                <div className="overflow-hidden rounded-2xl bg-gray-50 aspect-video">
                  <SanityImage
                    image={item.image}
                    width={800}
                    height={450}
                    sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                    className="aspect-video w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <span className="absolute left-7 -bottom-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1D92FB] text-white shadow-lg ring-4 ring-white">
                  <Icon name={item.icon} className="w-6 h-6" />
                </span>
              </div>
              <div className="flex flex-col grow px-6 pt-10 pb-6">
                <h3 className="text-lg sm:text-xl font-bold text-black">
                  <SmartLink link={item.link} links={links} fallbackAs="span" className="hover:text-[#1D92FB] transition-colors">
                    {item.title}
                  </SmartLink>
                </h3>
                <RichText value={item.description} links={links} className="mt-3 text-[15px] leading-7 text-gray-600 grow" />
                {!!item.tags?.length && (
                  <div className="mt-5 pt-4 border-t border-gray-100">
                    {data.tagsLabel && (
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">{data.tagsLabel}</p>
                    )}
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <li key={tag} className="rounded-full bg-[#EAF4FF] px-3 py-1 text-xs font-medium text-[#1D92FB]">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

