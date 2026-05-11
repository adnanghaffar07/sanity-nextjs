import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Script from "next/script";
import { Suspense } from "react";
import "../globals.css";
import ConditionalNavigation from "./components/ConditionalNavigation";
import ConditionalFooter from "./components/ConditionalFooter";

/**
 * Site segment layout (App Router "root" for public marketing pages).
 * Performance: RSC shell + deferred client islands; marketing pixels only on
 * MarketingScripts (idle-deferred pixels on all routes); merged JSON-LD; no global OAuth wrapper.
 */

const CookieConsent = dynamic(() => import("./components/CookieConsent"), {
  ssr: false,
  loading: () => null,
});
const VisitorTracker = dynamic(() => import("./components/VisitorTracker"), {
  ssr: false,
  loading: () => null,
});
const DeferredFormDisplay = dynamic(() => import("./components/DeferredFormDisplay"), {
  ssr: false,
  loading: () => null,
});
const DeferredScrollToTop = dynamic(() => import("./components/DeferredScrollToTop"), {
  ssr: false,
  loading: () => null,
});
const DelayedGreetingPopup = dynamic(() => import("./components/DelayedGreetingPopup"), {
  ssr: false,
  loading: () => null,
});
const MarketingScripts = dynamic(() => import("./components/MarketingScripts"), {
  ssr: false,
  loading: () => null,
});

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
      "@type": "WebPage",
      name: "Code Automation",
      headline: "Software Development Company in the USA | CodeAutomation",
      url: "https://codeautomation.ai/",
      inLanguage: "en-US",
      datePublished: "2024-08-20",
      description:
        "Naperville, IL-based AI agent and custom software development company. Trusted by 200+ global clients. Book a free strategy session today.",
      image: "https://codeautomation.ai/logo.svg",
      isPartOf: { "@type": "WebSite", url: "https://codeautomation.ai/" },
      mainEntity: [{ "@type": "Organization", name: "Code Automation" }],
      aggregateRating: {
        "@type": "AggregateRating",
        bestRating: "5",
        ratingValue: "4.9",
        reviewCount: "100",
      },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://codeautomation.ai"),
  title: "Custom Software & AI Development Company | CodeAutomation.ai",
  description:
    "Naperville, IL-based AI agent and custom software development company. Trusted by 200+ global clients. Book a free strategy session today.",
  keywords: ["CodeAutomation", "software development company", "software development services"],
  alternates: { canonical: "https://codeautomation.ai" },
  openGraph: {
    type: "website",
    url: "https://codeautomation.ai",
    title: "Custom Software & AI Development Company | CodeAutomation.ai",
    description:
      "Naperville, IL-based AI agent and custom software development company. Trusted by 200+ global clients. Book a free strategy session today.",
    images: [{ url: "https://codeautomation.ai/thankyou.jpg", width: 1200, height: 630, alt: "CodeAutomation Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software & AI Development Company | CodeAutomation.ai",
    description:
      "Naperville, IL-based AI agent and custom software development company. Trusted by 200+ global clients. Book a free strategy session today.",
    images: ["https://codeautomation.ai/thankyou.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      {/* Google Sign-In (LoginModal) — DNS hint only; scripts load when the modal mounts */}
      <link rel="preconnect" href="https://accounts.google.com" crossOrigin="anonymous" />

      <div className="flex flex-col bg-white relative">
        <ConditionalNavigation />
        <Suspense fallback={null}>
          <CookieConsent />
        </Suspense>
        <Suspense fallback={null}>
          <VisitorTracker />
        </Suspense>
        {children}
        <Suspense fallback={null}>
          <DeferredFormDisplay />
        </Suspense>
        <ConditionalFooter />
        <Suspense fallback={null}>
          <DeferredScrollToTop />
        </Suspense>
        <DelayedGreetingPopup />
      </div>

      {/* Single JSON-LD graph: fewer DOM nodes, same SEO payload */}
      <Script id="site-structured-data" type="application/ld+json" strategy="lazyOnload">
        {JSON.stringify(SITE_JSON_LD)}
      </Script>

      {/* Third-party pixels: after UI tree; production-gated + idle-loaded inside component */}
      <MarketingScripts />
    </>
  );
}
