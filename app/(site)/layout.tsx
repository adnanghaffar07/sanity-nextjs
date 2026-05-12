import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Script from "next/script";
import "../globals.css";

import ConditionalNavigation from "./components/ConditionalNavigation";
import ConditionalFooter from "./components/ConditionalFooter";

/**
 * PERFORMANCE-OPTIMIZED PUBLIC ROOT LAYOUT
 *
 * Improvements:
 * - Reduced hydration
 * - Delayed non-critical UI
 * - Removed unnecessary Suspense wrappers
 * - Better script strategies
 * - Smaller initial JS
 * - Better SEO handling
 * - Route-safe marketing loading
 * - Better Core Web Vitals
 */

/* ----------------------------- */
/* Dynamic Client Islands Only   */
/* ----------------------------- */

const CookieConsent = dynamic(
  () => import("./components/CookieConsent"),
  {
    ssr: false,
    loading: () => null,
  }
);

const VisitorTracker = dynamic(
  () => import("./components/VisitorTracker"),
  {
    ssr: false,
    loading: () => null,
  }
);

const DeferredFormDisplay = dynamic(
  () => import("./components/DeferredFormDisplay"),
  {
    ssr: false,
    loading: () => null,
  }
);

const DeferredScrollToTop = dynamic(
  () => import("./components/DeferredScrollToTop"),
  {
    ssr: false,
    loading: () => null,
  }
);

const DelayedGreetingPopup = dynamic(
  () => import("./components/DelayedGreetingPopup"),
  {
    ssr: false,
    loading: () => null,
  }
);

const MarketingScripts = dynamic(
  () => import("./components/MarketingScripts"),
  {
    ssr: false,
    loading: () => null,
  }
);

/* ----------------------------- */
/* Structured Data               */
/* ----------------------------- */

const SITE_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      name: "CodeAutomation",
      image: "https://www.codeautomation.ai/logo.png",
      url: "https://www.codeautomation.ai",
      telephone: "+1-815-614-8480",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Office 254, 1755 Park St Suite 200",
        addressLocality: "Naperville",
        addressRegion: "IL",
        postalCode: "60563",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "41.7906",
        longitude: "-88.1535",
      },
      openingHours: "Mo-Fr 09:00-17:00",
      sameAs: [
        "https://www.linkedin.com/company/codeautomation",
        "https://www.facebook.com/codeautomation",
      ],
    },
    {
      "@type": "WebSite",
      name: "CodeAutomation",
      url: "https://codeautomation.ai",
    },
    {
      "@type": "WebPage",
      name: "Code Automation",
      headline: "Software Development Company in the USA | CodeAutomation",
      url: "https://codeautomation.ai/",
      inLanguage: "en-US",
      datePublished: "2024-08-20",
      description:
        "Naperville, IL-based AI agent and custom software development company. Trusted by 200+ global clients.",
      image: "https://codeautomation.ai/thankyou.jpg",
      isPartOf: {
        "@type": "WebSite",
        url: "https://codeautomation.ai/",
      },
      mainEntity: [
        {
          "@type": "Organization",
          name: "CodeAutomation",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        bestRating: "5",
        ratingValue: "4.9",
        reviewCount: "100",
      },
    },
  ],
};

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

  alternates: {
    canonical: "https://codeautomation.ai",
  },

  openGraph: {
    type: "website",
    url: "https://codeautomation.ai",
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
      {/* Structured Data               */}
      {/* ----------------------------- */}

      <Script
        id="site-structured-data"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(SITE_JSON_LD)}
      </Script>

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