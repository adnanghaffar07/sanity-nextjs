// Instead Of, Benefits, Tech Stack, FAQ and Final CTA sections.

import type { ComponentType, CSSProperties } from "react";
import * as SimpleIcons from "react-icons/si";
import * as TablerIcons from "react-icons/tb";
import { CircleX, CircleCheck, ArrowRight, ArrowDown, Plus, Cpu } from "lucide-react";
import type { Image as SanityImageValue } from "sanity";
import { urlForImage } from "@/sanity/lib/image";
import { getBrand } from "@/sanity/schemas/service-page/brands";
import type { LinkMap, SpLink } from "./links";
import { Icon } from "./icons";
import {
  Button,
  RichText,
  SanityImage,
  SectionHeader,
  SectionShell,
  SmartLink,
  toPlainText,
  hasImage,
  type SpButton,
  type SpImageValue,
} from "./primitives";

type Base = { links: LinkMap; anchorId?: string };

// ── Instead of → You get ─────────────────────────────────────────────────────

export type InsteadOfData = {
  eyebrow?: string;
  heading?: string;
  intro?: unknown;
  leftLabel?: string;
  rightLabel?: string;
  rows?: { _key: string; insteadOf?: string; youGet?: unknown }[];
};

export function InsteadOfSection({ data, links, anchorId }: { data: InsteadOfData } & Base) {
  const left = data.leftLabel || "Instead of";
  const right = data.rightLabel || "You get";
  return (
    <SectionShell anchorId={anchorId} className="bg-[#F7F9FC]">
      <div className="max-w-5xl mx-auto px-5 md:px-10 py-16 md:py-24">
        <SectionHeader eyebrow={data.eyebrow} heading={data.heading} intro={data.intro} links={links} />
        <div aria-hidden className="hidden md:grid grid-cols-[1fr_auto_1fr] gap-6 mt-12 px-6 text-sm font-semibold uppercase tracking-wider">
          <span className="text-gray-400">{left}</span>
          <span className="w-10" />
          <span className="text-[#1D92FB]">{right}</span>
        </div>
        <ul className="mt-6 md:mt-4 space-y-4">
          {(data.rows || []).map((row) => (
            <li
              key={row._key}
              className="grid md:grid-cols-[1fr_auto_1fr] items-center gap-3 md:gap-6 rounded-3xl bg-white p-4 sm:p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 rounded-2xl bg-gray-50 px-4 py-3">
                <CircleX className="w-5 h-5 shrink-0 text-gray-400" aria-hidden />
                <p className="text-gray-500">
                  <span className="md:hidden text-xs font-semibold uppercase tracking-wider text-gray-400 block">{left}</span>
                  <span className="line-through decoration-gray-300">{row.insteadOf}</span>
                </p>
              </div>
              <span className="flex justify-center text-[#1D92FB]" aria-hidden>
                <ArrowRight className="hidden md:block w-10 h-6" />
                <ArrowDown className="md:hidden w-5 h-5" />
              </span>
              <div className="flex items-center gap-3 rounded-2xl bg-[#EAF4FF] px-4 py-3">
                <CircleCheck className="w-5 h-5 shrink-0 text-[#1D92FB]" aria-hidden />
                <p className="font-semibold text-black">
                  <span className="md:hidden text-xs font-semibold uppercase tracking-wider text-[#1D92FB] block">{right}</span>
                  <RichText value={row.youGet} links={links} inline />
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}

// ── Benefits ─────────────────────────────────────────────────────────────────

export type BenefitsData = {
  eyebrow?: string;
  heading?: string;
  intro?: unknown;
  image?: SpImageValue;
  items?: { _key: string; icon?: string; title?: string; description?: unknown }[];
};

export function BenefitsSection({ data, links, anchorId }: { data: BenefitsData } & Base) {
  const withImage = hasImage(data.image);
  return (
    <SectionShell anchorId={anchorId} className="bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <SectionHeader eyebrow={data.eyebrow} heading={data.heading} intro={data.intro} links={links} align="left" />
            {withImage && (
              <SanityImage
                image={data.image}
                width={1040}
                height={780}
                sizes="(min-width: 640px) 512px, 100vw"
                className="mt-8 w-full max-w-lg h-auto mx-auto lg:mx-0 rounded-3xl shadow-lg"
              />
            )}
          </div>
          <ul className="space-y-4">
            {(data.items || []).map((item) => (
              <li
                key={item._key}
                className="group flex items-start gap-5 rounded-3xl border border-gray-100 bg-[#F7F9FC] p-5 sm:p-6 hover:bg-white hover:shadow-lg hover:border-[#1D92FB]/30 transition-all duration-300"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-[#1D92FB] shadow-sm group-hover:bg-[#1D92FB] group-hover:text-white transition-colors">
                  <Icon name={item.icon} className="w-6 h-6" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-black">{item.title}</h3>
                  <RichText value={item.description} links={links} className="mt-1 text-[15px] leading-7 text-gray-600" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionShell>
  );
}

// ── Tech stack ───────────────────────────────────────────────────────────────

type BrandIcon = ComponentType<{ className?: string; style?: CSSProperties }>;
// Fallback for items saved with the earlier "brand icon key" field (e.g. SiOpenai).
const legacyBrandIcon = (key?: string): BrandIcon | undefined => {
  if (!key) return undefined;
  return (
    (SimpleIcons as unknown as Record<string, BrandIcon>)[key] ||
    (TablerIcons as unknown as Record<string, BrandIcon>)[key]
  );
};

export type TechStackData = {
  eyebrow?: string;
  heading?: string;
  intro?: unknown;
  categories?: {
    _key: string;
    icon?: string;
    title?: string;
    items?: {
      _key: string;
      brand?: string;
      title?: string;
      logo?: SanityImageValue;
      link?: SpLink;
      /** Legacy fields from the first version of this section. */
      brandIcon?: string;
      brandColor?: string;
    }[];
  }[];
};

export function TechStackSection({ data, links, anchorId }: { data: TechStackData } & Base) {
  return (
    <SectionShell anchorId={anchorId} className="bg-[#F7F9FC]">
      <div className="max-w-6xl mx-auto px-5 md:px-10 py-16 md:py-24">
        <SectionHeader eyebrow={data.eyebrow} heading={data.heading} intro={data.intro} links={links} />
        <div className="mt-12 overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm divide-y divide-gray-100">
          {(data.categories || []).map((cat) => (
            <div key={cat._key} className="grid md:grid-cols-[220px_1fr] gap-4 md:gap-8 items-center px-5 sm:px-8 py-6">
              <h3 className="flex items-center gap-3 text-base font-bold text-black">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EAF4FF] text-[#1D92FB]">
                  <Icon name={cat.icon} fallback={Cpu} className="w-5 h-5" />
                </span>
                {cat.title}
              </h3>
              <ul className="flex flex-wrap gap-3">
                {(cat.items || []).map((tech) => {
                  // Picked brand → uploaded logo → legacy icon key → generic icon.
                  const brand = getBrand(tech.brand);
                  const logo = !brand && tech.logo?.asset ? urlForImage(tech.logo).toString() : undefined;
                  const Legacy = !brand && !logo ? legacyBrandIcon(tech.brandIcon) : undefined;
                  const name = tech.title || brand?.name;
                  if (!name) return null;
                  return (
                    <li key={tech._key}>
                      <SmartLink
                        link={tech.link}
                        links={links}
                        className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3.5 py-2 text-sm font-medium text-gray-800 hover:border-[#1D92FB]/40 hover:shadow-sm transition"
                      >
                        {brand ? (
                          <brand.icon className="w-5 h-5 shrink-0" style={{ color: brand.color }} aria-hidden />
                        ) : logo ? (
                          <img src={logo} alt="" className="w-5 h-5 shrink-0 object-contain" loading="lazy" />
                        ) : Legacy ? (
                          <Legacy className="w-5 h-5 shrink-0" style={{ color: tech.brandColor || "#1D92FB" }} />
                        ) : (
                          <Cpu className="w-5 h-5 shrink-0 text-[#1D92FB]" aria-hidden />
                        )}
                        {name}
                      </SmartLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

// ── FAQ ──────────────────────────────────────────────────────────────────────

export type FaqData = {
  eyebrow?: string;
  heading?: string;
  addSchema?: boolean;
  items?: { _key: string; question?: string; answer?: unknown }[];
};

export function FaqSection({ data, links, anchorId }: { data: FaqData } & Base) {
  const items = (data.items || []).filter((i) => i.question);
  const jsonLd =
    data.addSchema !== false && items.length
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map((i) => ({
            "@type": "Question",
            name: i.question,
            acceptedAnswer: { "@type": "Answer", text: toPlainText(i.answer) },
          })),
        }
      : null;

  return (
    <SectionShell anchorId={anchorId} className="bg-white">
      {jsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      )}
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionHeader eyebrow={data.eyebrow} heading={data.heading} links={links} align="left" />
            </div>
          </div>
          <div className="lg:col-span-8 space-y-3">
            {items.map((item, i) => (
              <details
                key={item._key}
                open={i === 0}
                className="group rounded-2xl border border-gray-200 bg-white open:border-[#1D92FB]/40 open:bg-[#F7F9FC] open:shadow-sm transition-colors"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 sm:px-6 py-5 [&::-webkit-details-marker]:hidden">
                  <h3 className="text-base sm:text-lg font-semibold text-black">{item.question}</h3>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EAF4FF] text-[#1D92FB] transition-transform duration-300 group-open:rotate-45 group-open:bg-[#1D92FB] group-open:text-white">
                    <Plus className="w-4 h-4" aria-hidden />
                  </span>
                </summary>
                <RichText value={item.answer} links={links} className="px-5 sm:px-6 pb-5 -mt-1 text-[15px] leading-7 text-gray-600" />
              </details>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

// ── Final CTA ────────────────────────────────────────────────────────────────

export type FinalCtaData = {
  heading?: string;
  headingHighlight?: string;
  text?: unknown;
  listTitle?: string;
  items?: { _key: string; icon?: string; title?: string }[];
  button?: SpButton;
};

export function FinalCtaSection({ data, links, anchorId }: { data: FinalCtaData } & Base) {
  const items = data.items || [];
  const cols = items.length >= 3 ? "sm:grid-cols-3" : items.length === 2 ? "sm:grid-cols-2" : "";
  return (
    <SectionShell anchorId={anchorId} className="relative overflow-hidden bg-[#0B1F33] text-white">
      <div aria-hidden className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#1D92FB] opacity-20 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -right-24 h-96 w-96 rounded-full bg-[#f7e022] opacity-10 blur-3xl" />
      <div className="relative max-w-5xl mx-auto px-5 md:px-10 py-16 md:py-24 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          {data.heading}
          {data.headingHighlight && (
            <>
              {" "}
              <span className="text-[#f7e022]">{data.headingHighlight}</span>
            </>
          )}
        </h2>
        <RichText
          value={data.text}
          links={links}
          className="mt-6 text-base sm:text-lg leading-8 text-gray-300 max-w-3xl mx-auto"
          linkClassName="font-medium text-[#7cc0ff] underline underline-offset-2 hover:text-white"
        />
        {items.length > 0 && (
          <>
            {data.listTitle && (
              <p className="mt-10 text-sm font-semibold uppercase tracking-wider text-[#7cc0ff]">{data.listTitle}</p>
            )}
            <ul className={`mt-5 grid ${cols} gap-4 text-left`}>
              {items.map((item) => (
                <li key={item._key} className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1D92FB] text-white">
                    <Icon name={item.icon} className="w-5 h-5" />
                  </span>
                  <span className="font-medium leading-6 text-white">{item.title}</span>
                </li>
              ))}
            </ul>
          </>
        )}
        {data.button?.label && (
          <div className="mt-10">
            <Button button={data.button} links={links} defaultStyle="accent" icon="CalendarCheck" className="px-6 sm:px-8 py-4 text-base sm:text-lg shadow-xl" />
          </div>
        )}
      </div>
    </SectionShell>
  );
}
