import type { Metadata } from "next";
import dynamic from "next/dynamic";
import "@/app/globals.css";

import ConditionalNavigation from "@/components/layout/ConditionalNavigation";
import ConditionalFooter from "@/components/layout/ConditionalFooter";
import AttributionCapture from "@/components/layout/AttributionCapture";


/* ----------------------------- */
/* Dynamic Client Islands Only   */
/* ----------------------------- */

const CookieConsent = dynamic(
  () => import("@/components/layout/CookieConsent"),
  {
    ssr: false,
    loading: () => null,
  }
);

const VisitorTracker = dynamic(
  () => import("@/components/layout/VisitorTracker"),
  {
    ssr: false,
    loading: () => null,
  }
);

const DeferredFormDisplay = dynamic(
  () => import("@/components/forms/DeferredFormDisplay"),
  {
    ssr: false,
    loading: () => null,
  }
);

const DeferredScrollToTop = dynamic(
  () => import("@/components/layout/DeferredScrollToTop"),
  {
    ssr: false,
    loading: () => null,
  }
);

const DelayedGreetingPopup = dynamic(
  () => import("@/components/layout/greeting-popup/DelayedGreetingPopup"),
  {
    ssr: false,
    loading: () => null,
  }
);

const MarketingScripts = dynamic(
  () => import("@/components/layout/MarketingScripts"),
  {
    ssr: false,
    loading: () => null,
  }
);

/* ----------------------------- */
/* Metadata                      */
/* ----------------------------- */

export const metadata: Metadata = {
  metadataBase: new URL("https://codeautomation.ai"),

  title: "Custom Software & AI Development Company | CodeAutomation.ai",

  description:
    "Naperville, IL-based AI agent and custom software development company. Trusted by 200+ global clients. Book a free strategy session today.",

  keywords: [
    "CodeAutomation",
    "software development company",
    "software development services",
    "AI development company",
    "custom software development",
  ],

  // No site-wide canonical/og:url: each page sets its own (a shared one told
  // search engines that every page without its own was a copy of the home page).

  openGraph: {
    type: "website",
    title: "Custom Software & AI Development Company | CodeAutomation.ai",
    description:
      "Naperville, IL-based AI agent and custom software development company.",
    images: [
      {
        url: "https://codeautomation.ai/thankyou.jpg",
        width: 1200,
        height: 630,
        alt: "CodeAutomation",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Custom Software & AI Development Company | CodeAutomation.ai",
    description:
      "Naperville, IL-based AI agent and custom software development company.",
    images: ["https://codeautomation.ai/thankyou.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

/* ----------------------------- */
/* Layout                        */
/* ----------------------------- */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* ----------------------------- */}
      {/* Favicons                      */}
      {/* ----------------------------- */}

      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link
        rel="icon"
        type="image/png"
        href="/favicon-32x32.png"
        sizes="32x32"
      />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      {/* Lightweight DNS Hint Only */}
      <link rel="dns-prefetch" href="https://accounts.google.com" />

      {/* ----------------------------- */}
      {/* Main App                      */}
      {/* ----------------------------- */}

      <div className="relative flex min-h-screen flex-col bg-white">
        {/* SERVER COMPONENTS */}
        <ConditionalNavigation />

        {/* MAIN CONTENT */}
        <main className="flex-1">{children}</main>
        <DeferredFormDisplay />
        <ConditionalFooter />

        {/* ----------------------------- */}
        {/* Deferred Client Components    */}
        {/* ----------------------------- */}

        {/* Loads after hydration */}
        <VisitorTracker />
        {/* Remembers UTM tags / referrer for the forms */}
        <AttributionCapture />

        {/* User interaction / delayed */}
        <CookieConsent />

       
        {/* Tiny utility */}
        <DeferredScrollToTop />

        {/* Delayed popup */}
        <DelayedGreetingPopup />

        {/* Marketing / GTM / Pixels */}
        <MarketingScripts />
      </div>
    </>
  );
}