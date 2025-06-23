import type { Metadata } from "next";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Script from "next/script";
import "../globals.css";
import HomeNavigationContainer from "./components/home-navigation-container";
import CookieConsent from "./components/CookieConsent";
import { Inter } from "next/font/google";

// ✅ Replace Google Fonts with `next/font`
const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Makes font swap non-blocking
});

// ✅ Dynamic imports
const GoogleTagManagerClient = dynamic(() => import("./components/GoogleTagManagerClient"), { ssr: false });
const FooterContainer = dynamic(() => import("./components/footer-container"), { suspense: true });
const DeferredFormDisplay = dynamic(() => import("./components/DeferredFormDisplay"), { ssr: false, loading: () => null });
const DeferredScrollToTop = dynamic(() => import("./components/DeferredScrollToTop"), { ssr: false, loading: () => null });
const GreetingPopup = dynamic(() => import("./components/GreetingPopup"), { suspense: true, ssr: false });

export const metadata: Metadata = {
    metadataBase: new URL("https://codeautomation.ai"), // ✅ Add this line
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

        {/* ✅ JSON-LD business info */}
        <Script id="ld-business" type="application/ld+json" strategy="lazyOnload">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "CodeAutomation",
            "image": "https://www.codeautomation.ai/logo.png",
            "url": "https://www.codeautomation.ai",
            "telephone": "+1-815-614-8480",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Office 254, 1755 Park St Suite 200",
              "addressLocality": "Naperville",
              "addressRegion": "IL",
              "postalCode": "60563",
              "addressCountry": "US",
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "41.7906",
              "longitude": "-88.1535",
            },
            "openingHours": "Mo-Fr 09:00-17:00",
            "sameAs": [
              "https://www.linkedin.com/company/codeautomation",
              "https://www.facebook.com/codeautomation",
            ],
          })}
        </Script>
      </head>
      <body className={inter.className}>
        <GoogleOAuthProvider clientId="566184810144-kldie9c4qej5rh17tvedlf4g053pcdd0.apps.googleusercontent.com">
          {/* ✅ Lazy load third-party scripts post-LCP */}
          <Script id="defer-scripts" strategy="afterInteractive">
            {`
    requestIdleCallback(() => {
      // TikTok
      !function(w,d,t){w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"];ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))};};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e};ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{};ttq._i[e]=[];ttq._i[e]._u=r;ttq._t=ttq._t||{};ttq._t[e]=+new Date;ttq._o=ttq._o||{};ttq._o[e]=n||{};n=document.createElement("script");n.type="text/javascript";n.async=!0;n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};ttq.load('D0N3L93C77U7M2KJ8B60');ttq.page();

      // Facebook
      !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '1960013544428790'); fbq('track', 'PageView');

     // Google Tag (gtag.js) for G-5B9TVBY53Q
const gtagScript = document.createElement("script");
gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-5B9TVBY53Q";
gtagScript.async = true;
document.head.appendChild(gtagScript);

window.dataLayer = window.dataLayer || [];
function gtag(){ dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-5B9TVBY53Q');

    });
  `}
          </Script>

          {/* ✅ Page Content */}
          <div className="flex flex-col bg-white relative">
            <HomeNavigationContainer />
            <CookieConsent />
            {children}
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
        {/* ✅ GTM (if needed) */}
        <GoogleTagManagerClient gtmId="GTM-MJG35754" />

        {/* ✅ Additional JSON-LD */}
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
