import Image from "next/image";
import Link from "next/link";
import SanityImage from "@/components/ui/SanityImage";
import ScrollToSectionButton from "@/components/ui/ScrollToSectionButton";
import HeroContactForm from "@/components/forms/HeroContactForm";
import type { LegacyService } from "@/sanity/lib/legacy-services";
import googleLogo from "@/public/google-logo.png";
import designRushLogo from "@/public/designrush-logo.png";
import clutchLogo from "@/public/clutch-logo.png";
import { CONSULTATION_URL, CONTACT_FORM_ID } from "./primitives";

const REVIEW_BADGES = [
  { logo: googleLogo, alt: "Google Reviews", href: "https://g.page/r/CVDpezkiN96NEAE/review" },
  { logo: designRushLogo, alt: "DesignRush", href: "https://www.designrush.com/agency/profile/codeautomation" },
  { logo: clutchLogo, alt: "Clutch", href: "https://clutch.co/profile/codeautomationai" },
];

// The mobile app page also links to pricing from its hero.
const PRICING_LINK_PAGE = "mobile-app-development-services";

const yellowButton = "bg-[#f7e022] text-black font-semibold py-3 px-2 rounded-lg shadow-lg text-center w-full sm:max-w-72";

// Hero image with title, buttons and review badges on the left, contact form on the right.
export default function ServiceHero({ service }: { service: LegacyService }) {
  const { firstButton, secondButton } = service;
  const showPricing = service.urlPath === PRICING_LINK_PAGE;

  return (
    <div className="flex overflow-hidden relative flex-col w-full font-light text-white lg:min-h-[700px] max-md:max-w-full">
      <SanityImage image={service.heroImage} fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-[#020C16] opacity-65" />
      <div className="flex relative w-full items-center justify-center py-10 px-5 lg:px-20 pt-48 pb-12 lg:pt-32 lg:pb-16 max-md:max-w-full flex-grow">
        <div className="w-full max-w-[1600px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            <div className="flex flex-col justify-center gap-6 lg:w-1/2 text-center lg:text-left">
              <h1 className="lg:text-4xl text-2xl font-bold">{service.serviceTitle}</h1>
              <span className="block lg:text-xl text-base">{service.serviceDesc}</span>
              {(firstButton || secondButton || showPricing) && (
                <div className="flex flex-col sm:flex-row pt-2 space-y-6 sm:space-y-0 sm:space-x-5 items-center justify-center lg:justify-start">
                  {firstButton && (
                    <ScrollToSectionButton
                      classes="bg-[#1d92fb] text-white cursor-pointer py-3 px-2 font-semibold rounded-lg shadow-lg text-center w-full sm:min-w-48 sm:max-w-72"
                      content={firstButton.firstButtonText}
                      destination={CONTACT_FORM_ID}
                    />
                  )}
                  {secondButton?.SecondButtonUrl && (
                    <Link href={CONSULTATION_URL} className={yellowButton} target="_blank" rel="noopener noreferrer">
                      {secondButton.SecondButtonText}
                    </Link>
                  )}
                  {showPricing && (
                    <Link href="/pricing" target="_blank" rel="noopener noreferrer" className={yellowButton}>
                      View Pricing
                    </Link>
                  )}
                </div>
              )}

              <div className="flex flex-wrap items-center gap-6 pt-4 justify-center lg:justify-start">
                {REVIEW_BADGES.map((badge) => (
                  <Link key={badge.alt} href={badge.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center transition">
                    <Image src={badge.logo} alt={badge.alt} sizes="160px" className="h-8 sm:h-10 w-auto object-contain" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end lg:items-center lg:w-1/2">
              <HeroContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
