// "Hero with Form": dark photo background, heading + buttons on the left and
// the site's existing lead form (HeroContactForm) on the right — the same
// layout as the legacy service pages.

import HeroContactForm from "../HeroContactForm";
import type { LinkMap } from "./links";
import { Button, RichText, SectionShell, hasImage, imageUrl, type SpButton, type SpImageValue } from "./primitives";

// Light-text badge artwork, designed for this dark background.
const REVIEW_BADGES = [
  { src: "/google-logo.png", alt: "Google Reviews", href: "https://g.page/r/CVDpezkiN96NEAE/review" },
  { src: "/designrush-logo.png", alt: "DesignRush", href: "https://www.designrush.com/agency/profile/codeautomation" },
  { src: "/clutch-logo.png", alt: "Clutch", href: "https://clutch.co/profile/codeautomationai" },
];

export type HeroFormData = {
  heading?: string;
  subheading?: unknown;
  primaryButton?: SpButton;
  secondaryButton?: SpButton;
  backgroundImage?: SpImageValue;
  showReviewBadges?: boolean;
  formHeading?: string;
  formSubheading?: string;
  formStyle?: "default" | "blue";
};

export function HeroFormSection({
  data,
  links,
  anchorId,
  pageTitle,
}: {
  data: HeroFormData;
  links: LinkMap;
  anchorId?: string;
  pageTitle?: string;
}) {
  const bg = hasImage(data.backgroundImage) ? imageUrl(data.backgroundImage) : undefined;
  return (
    <SectionShell
      anchorId={anchorId}
      // Exactly 700px tall on desktop; flexible height on smaller screens.
      className="relative flex flex-col overflow-hidden w-full text-white bg-[#020C16] lg:h-[700px]"
    >
      {bg && (
        // Plain <img> so the photo covers the section at any size (same as legacy pages).
        <img
          src={bg}
          alt={data.backgroundImage?.alt || ""}
          className="absolute inset-0 size-full object-cover"
          fetchPriority="high"
        />
      )}
      <div aria-hidden className="absolute inset-0 bg-[#020C16] opacity-65" />

      <div className="relative flex grow items-center w-full px-5 lg:px-20 pt-40 pb-12 lg:pt-32 lg:pb-16">
        <div className="w-full max-w-[1600px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            {/* LEFT */}
            <div className="flex flex-col justify-center gap-6 lg:w-1/2 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">{data.heading}</h1>
              <RichText
                value={data.subheading}
                links={links}
                className="text-base lg:text-xl leading-8 font-light text-white/90"
                linkClassName="font-medium text-[#7cc0ff] underline underline-offset-2 hover:text-white"
              />
              {(data.primaryButton?.label || data.secondaryButton?.label) && (
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 pt-2 items-center justify-center lg:justify-start">
                  <Button button={data.primaryButton} links={links} defaultStyle="primary" className="w-full sm:w-auto" />
                  <Button button={data.secondaryButton} links={links} defaultStyle="accent" className="w-full sm:w-auto" />
                </div>
              )}
              {data.showReviewBadges !== false && (
                <div className="flex flex-wrap items-center gap-6 pt-4 justify-center lg:justify-start">
                  {REVIEW_BADGES.map((badge) => (
                    <a
                      key={badge.alt}
                      href={badge.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-90 hover:opacity-100 transition"
                    >
                      <img src={badge.src} alt={badge.alt} className="h-8 sm:h-10 w-auto object-contain" />
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* RIGHT: lead form */}
            <div id="contact-box" className="flex justify-center lg:justify-end lg:items-center lg:w-1/2 scroll-mt-28">
              <HeroContactForm
                variant={data.formStyle === "blue" ? "blue" : "default"}
                pageName={pageTitle}
                heading={data.formHeading}
                subheading={data.formSubheading}
              />
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

// ── Hero Banner (same dark photo hero, no form) ─────────────────────────────

export type HeroBannerData = {
  heading?: string;
  subheading?: unknown;
  primaryButton?: SpButton;
  secondaryButton?: SpButton;
  backgroundImage?: SpImageValue;
  showReviewBadges?: boolean;
  alignment?: "center" | "left";
};

export function HeroBannerSection({
  data,
  links,
  anchorId,
}: {
  data: HeroBannerData;
  links: LinkMap;
  anchorId?: string;
}) {
  const bg = hasImage(data.backgroundImage) ? imageUrl(data.backgroundImage) : undefined;
  const left = data.alignment === "left";
  // Phones are always centred; "left" applies from tablet width up.
  const textAlign = left ? "text-center md:text-left items-center md:items-start" : "text-center items-center";
  const rowAlign = left ? "justify-center md:justify-start" : "justify-center";

  return (
    <SectionShell
      anchorId={anchorId}
      // Exactly 700px tall on desktop; flexible height on smaller screens.
      className="relative flex flex-col overflow-hidden w-full text-white bg-[#020C16] lg:h-[700px]"
    >
      {bg && (
        <img
          src={bg}
          alt={data.backgroundImage?.alt || ""}
          className="absolute inset-0 size-full object-cover"
          fetchPriority="high"
        />
      )}
      <div aria-hidden className="absolute inset-0 bg-[#020C16] opacity-65" />

      <div className="relative flex grow items-center w-full px-5 lg:px-20 pt-40 pb-16 lg:pt-32 lg:pb-16">
        <div className="w-full max-w-[1400px] mx-auto">
          <div className={`flex flex-col gap-6 ${textAlign} ${left ? "max-w-3xl" : "max-w-4xl mx-auto"}`}>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">{data.heading}</h1>
            <RichText
              value={data.subheading}
              links={links}
              className="text-base lg:text-xl leading-8 font-light text-white/90"
              linkClassName="font-medium text-[#7cc0ff] underline underline-offset-2 hover:text-white"
            />
            {(data.primaryButton?.label || data.secondaryButton?.label) && (
              <div className={`flex flex-col sm:flex-row gap-4 sm:gap-5 pt-2 w-full sm:w-auto ${rowAlign}`}>
                <Button button={data.primaryButton} links={links} defaultStyle="primary" className="w-full sm:w-auto" />
                <Button button={data.secondaryButton} links={links} defaultStyle="accent" className="w-full sm:w-auto" />
              </div>
            )}
            {data.showReviewBadges !== false && (
              <div className={`flex flex-wrap items-center gap-6 pt-4 ${rowAlign}`}>
                {REVIEW_BADGES.map((badge) => (
                  <a
                    key={badge.alt}
                    href={badge.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-90 hover:opacity-100 transition"
                  >
                    <img src={badge.src} alt={badge.alt} className="h-8 sm:h-10 w-auto object-contain" />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
