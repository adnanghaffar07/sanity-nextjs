import Link from "next/link";
import Image from "next/image";
import { Bot, CircleCheck, CalendarCheck, CirclePlay } from "lucide-react";
import { CALENDLY_URL } from "./constants";

const HIGHLIGHTS = [
  "Trained on your own content",
  "Connected to your CRM, helpdesk, and calendar",
  "Live on web, WhatsApp, social, and phone",
];

const REVIEW_LINKS = {
  google: "https://g.page/r/CVDpezkiN96NEAE/review",
  clutch: "https://clutch.co/profile/codeautomationai",
  designrush: "https://www.designrush.com/agency/profile/codeautomation",
};

// Same client logos used on the offshore development page. Heights are tuned
// per logo so they read at a similar visual size (the files have very
// different aspect ratios and text weights).
const CLIENT_LOGOS = [
  { src: "/logo1.png", alt: "getdandy", height: "h-7 sm:h-8" },
  { src: "/logo2.png", alt: "Letshego", height: "h-6 sm:h-7" },
  { src: "/logo3.png", alt: "Abacus.AI", height: "h-5 sm:h-6" },
  { src: "/logo4.png", alt: "Make With Tech", height: "h-7 sm:h-9" },
  { src: "/logo5.png", alt: "innRoad", height: "h-5 sm:h-6" },
];

function Stars() {
  return (
    <span className="text-[11px] leading-none tracking-[1px] text-[#FBBC05]" aria-hidden>
      ★★★★★
    </span>
  );
}

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#EAF4FF] via-white to-white">
      {/* Soft background accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-[#1D92FB] opacity-10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 -left-40 w-[360px] h-[360px] rounded-full bg-[#f7e022] opacity-10 blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-5 md:px-10 pt-32 md:pt-40 pb-16 md:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT: copy */}
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-white border border-[#1D92FB]/20 px-4 py-1.5 text-sm font-medium text-[#1D92FB] shadow-sm">
              <Bot className="w-4 h-4" aria-hidden />
              AI Chatbot Development
            </span>

            <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-black">
              Custom AI Chatbot Development Services in the{" "}
              <span className="text-[#1D92FB]">USA</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-7 text-gray-700 max-w-xl mx-auto lg:mx-0">
              Chatbots trained on your business data that resolve customer
              queries, qualify leads, and book appointments around the clock.
            </p>

            <ul className="mt-6 space-y-3 max-w-xl mx-auto lg:mx-0 text-left">
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-800">
                  <CircleCheck
                    className="w-5 h-5 mt-0.5 shrink-0 text-[#1D92FB]"
                    aria-hidden
                  />
                  <span className="text-base">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-4 justify-center lg:justify-start">
              <Link
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-center sm:whitespace-nowrap bg-[#1D92FB] text-white font-semibold py-3 px-5 rounded-lg shadow-lg hover:bg-blue-600 transition-colors"
              >
                <CalendarCheck className="w-5 h-5" aria-hidden />
                Book a Free Chatbot Strategy Call
              </Link>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 text-center sm:whitespace-nowrap bg-[#f7e022] text-black font-semibold py-3 px-5 rounded-lg shadow-lg hover:bg-yellow-400 transition-colors"
              >
                <CirclePlay className="w-5 h-5" aria-hidden />
                See How It Works
              </a>
            </div>
          </div>

          {/* RIGHT: visual */}
          <div className="relative mx-auto w-full max-w-[560px]">
            <Image
              src="/ai-chatbot-development-services/hero.png"
              alt="AI chatbot assistant booking a demo in a chat window, connected to Salesforce, HubSpot, Google Calendar, WhatsApp and Instagram"
              width={1120}
              height={960}
              priority
              sizes="(min-width: 1024px) 560px, (min-width: 640px) 560px, 100vw"
              className="w-full h-auto rounded-3xl shadow-xl"
            />
          </div>
        </div>

        {/* Trust bar */}
        <div className="mt-16 border-t border-gray-200/70 pt-10">
          {/* Client logos: one even row on desktop, balanced grid on smaller screens */}
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
            Trusted by
          </p>
          {/* Flex-wrap (not grid) so a partial last row is always centered */}
          <ul className="mt-6 flex flex-wrap justify-center gap-y-8">
            {CLIENT_LOGOS.map((logo) => (
              <li
                key={logo.src}
                className="flex h-10 basis-1/2 sm:basis-1/3 lg:basis-1/5 items-center justify-center px-3"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  className={`${logo.height} w-auto max-w-[140px] object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition duration-300`}
                />
              </li>
            ))}
          </ul>

          {/* Review platforms: light chips that match the hero */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
              Rated on
            </span>
            <ul className="flex flex-wrap items-center justify-center gap-3">
              <li>
                <Link
                  href={REVIEW_LINKS.google}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm hover:border-[#1D92FB]/40 hover:shadow-md transition"
                >
                  <img src="/google.png" alt="" className="h-5 w-5" />
                  <span className="flex flex-col">
                    <span className="text-sm font-semibold leading-tight text-gray-800">
                      Google Reviews
                    </span>
                    <Stars />
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href={REVIEW_LINKS.clutch}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Clutch reviews"
                  className="flex items-center gap-2.5 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm hover:border-[#1D92FB]/40 hover:shadow-md transition"
                >
                  <img src="/clutch-icon.svg" alt="Clutch" className="h-4 w-auto" />
                  <Stars />
                </Link>
              </li>
              <li>
                <Link
                  href={REVIEW_LINKS.designrush}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm hover:border-[#1D92FB]/40 hover:shadow-md transition"
                >
                  {/* Show only the purple mark from the (white-text) DesignRush logo */}
                  <span className="block h-6 w-[15px] overflow-hidden">
                    <img
                      src="/designrush-logo.png"
                      alt=""
                      className="h-6 w-auto max-w-none"
                    />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-sm font-semibold leading-tight text-gray-800">
                      DesignRush
                    </span>
                    <Stars />
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
