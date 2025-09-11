import type { Metadata } from "next";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Script from "next/script";
import "../globals.css";
import HomeNavigationContainer from "./components/home-navigation-container";
import CookieConsent from "./components/CookieConsent";
import { Inter } from "next/font/google";

// Use next/font (non-blocking with display: swap)
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

// Dynamic imports (non-SSR for heavy/3rd-party UI)
const GoogleTagManagerClient = dynamic(() => import("./components/GoogleTagManagerClient"), { ssr: false });
const FooterContainer = dynamic(() => import("./components/footer-container"), { suspense: true });
const DeferredFormDisplay = dynamic(() => import("./components/DeferredFormDisplay"), { ssr: false, loading: () => null });
const DeferredScrollToTop = dynamic(() => import("./components/DeferredScrollToTop"), { ssr: false, loading: () => null });
const GreetingPopup = dynamic(() => import("./components/GreetingPopup"), { suspense: true, ssr: false });

export const metadata: Metadata = {
  metadataBase: new URL("https://codeautomation.ai"),
  title: "Software Development Company in the USA | CodeAutomation",
  description: "CodeAutomation.ai is a leading software development company specialized in custom software development services. Schedule a Call & build with experts.",
  keywords: ["CodeAutomation", "software development company", "software development services"],
  alternates: { canonical: "https://codeautomation.ai" },
  openGraph: {
    type: "website",
    url: "https://codeautomation.ai",
    title: "Software Development Company in the USA | CodeAutomation",
    description: "CodeAutomation.ai is a leading software development company specialized in custom software development services. Schedule a Call & build with experts.",
    images: [{ url: "https://codeautomation.ai/thankyou.jpg", width: 1200, height: 630, alt: "CodeAutomation Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Company in the USA | CodeAutomation",
    description: "CodeAutomation.ai is a leading software development company specialized in custom software development services. Schedule a Call & build with experts.",
    images: ["https://codeautomation.ai/thankyou.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Preconnects - keep to the most important origins (max ~4) */}
        <link rel="preconnect" href="https://ld8m6d0z.apicdn.sanity.io" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://connect.facebook.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://analytics.tiktok.com" crossOrigin="anonymous" />

        {/* dns-prefetch as a cheap fallback */}
        <link rel="dns-prefetch" href="https://ld8m6d0z.apicdn.sanity.io" />

        {/* Preload hero/main images used above-the-fold to improve LCP. Ensure paths match what you serve. */}
        <link rel="preload" as="image" href="/who-we-are.png" />
        {/* If you have a hero background or other critical image, add it here. */}

        {/* Avoid blocking the main thread: keep embedded JSON-LD lazy */}
      </head>
      <body className={inter.className}>
        <GoogleOAuthProvider clientId="566184810144-kldie9c4qej5rh17tvedlf4g053pcdd0.apps.googleusercontent.com">

          {/*
            Defer third-party tracking until after interaction / idle to avoid blocking LCP.
            Using `afterInteractive` + requestIdleCallback keeps these off the critical path.
          */}
          <Script id="defer-tracking" strategy="afterInteractive">
            {`(function(){
  if ('requestIdleCallback' in window) {
    requestIdleCallback(initTracking, {timeout: 3000});
  } else {
    setTimeout(initTracking, 2000);
  }

  function initTracking(){
    try{
      // Load Facebook Pixel async and initialize
      var fb = document.createElement('script');
      fb.async = true;
      fb.src = 'https://connect.facebook.net/en_US/fbevents.js';
      document.head.appendChild(fb);
      fb.onload = function(){
        try{ window.fbq('init','1960013544428790'); window.fbq('track','PageView'); }catch(e){}
      }

      // Load TikTok Pixel async
      var tt = document.createElement('script');
      tt.async = true;
      tt.src = 'https://analytics.tiktok.com/i18n/pixel/events.js';
      document.head.appendChild(tt);
      tt.onload = function(){
        try{ /* initialize tiktok pixel if needed via their API */ }catch(e){}
      }
    }catch(e){console.warn('tracking init failed',e)}
  }
})();`}
          </Script>

          {/* JSON-LD (lazy load) */}
          <Script id="ld-business" type="application/ld+json" strategy="lazyOnload">
            {JSON.stringify({
              "@context": "https://schema.org",
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
              geo: { "@type": "GeoCoordinates", latitude: "41.7906", longitude: "-88.1535" },
              openingHours: "Mo-Fr 09:00-17:00",
              sameAs: ["https://www.linkedin.com/company/codeautomation","https://www.facebook.com/codeautomation"],
            })}
          </Script>

          <div className="flex flex-col bg-white relative">
            <HomeNavigationContainer />
            <CookieConsent />

            {children}

            {/* non-critical UI deferred with Suspense */}
            <Suspense fallback={null}>
              <DeferredFormDisplay />
            </Suspense>

            <Suspense fallback={<div className="h-[300px] bg-gray-100 animate-pulse" />}>
              <FooterContainer />
            </Suspense>

            <Suspense fallback={null}>
              <DeferredScrollToTop />
            </Suspense>

            <Suspense fallback={<div className="h-[250px] bg-gray-100 animate-pulse" />}>
              <GreetingPopup />
            </Suspense>
          </div>
        </GoogleOAuthProvider>

        {/* Keep GTM client as a dynamic component (non-SSR) so it doesn't block render */}
        <GoogleTagManagerClient gtmId="GTM-MJG35754" />

        {/* Additional WebPage JSON-LD - lazy */}
        <Script type="application/ld+json" strategy="lazyOnload" id="json-ld">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "WebPage",
            name: "Code Automation",
            headline: "Software Development Company in the USA | CodeAutomation",
            url: "https://codeautomation.ai/",
            inLanguage: "en-US",
            datePublished: "2024-08-20",
            description: "CodeAutomation.ai is a leading software development company specialized in custom software development services. Schedule a Call & build with experts.",
            image: "https://codeautomation.ai/logo.svg",
            isPartOf: { "@type": "WebSite", url: "https://codeautomation.ai/" },
            mainEntity: [{ "@type": "Organization", name: "Code Automation" }],
            aggregateRating: { "@type": "AggregateRating", bestRating: "5", ratingValue: "4.9", reviewCount: "100" },
          })}
        </Script>
      </body>
    </html>
  );
}
