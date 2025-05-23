import type { Metadata } from "next";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Script from "next/script";
import "../globals.css";
import HomeNavigationContainer from "./components/home-navigation-container";
import CookieConsent from "./components/CookieConsent";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" }); // ✅ Prevent Render Blocking

// Dynamically Import Components
const GoogleTagManagerClient = dynamic(() => import("./components/GoogleTagManagerClient"), { ssr: false });
const FooterContainer = dynamic(() => import("./components/footer-container"), { suspense: true });
const FormDisplay = dynamic(() => import("./components/FormDisplay"), { suspense: true });
const ScrollToTop = dynamic(() => import("./components/ScrollToTop"), { suspense: true });
const GreetingPopup = dynamic(() => import("./components/GreetingPopup"), { suspense: true });
const GoogleFonts = dynamic(() => import("./components/GoogleFonts"), { ssr: false });


export const metadata: Metadata = {
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <GoogleFonts />
        {/* ✅ Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>

        <GoogleOAuthProvider clientId="566184810144-kldie9c4qej5rh17tvedlf4g053pcdd0.apps.googleusercontent.com">

          {/* Tiktok */}
          <Script id="tiktok-pixel" strategy="afterInteractive">
            {`
            !function (w, d, t) {
              w.TiktokAnalyticsObject=t;
              var ttq=w[t]=w[t]||[];
              ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"];
              ttq.setAndDefer=function(t,e){
                t[e]=function(){
                  t.push([e].concat(Array.prototype.slice.call(arguments,0)))
                }
              };
              for(var i=0;i<ttq.methods.length;i++) ttq.setAndDefer(ttq,ttq.methods[i]);
              ttq.instance=function(t){
                for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);
                return e
              };
              ttq.load=function(e,n){
                var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;
                ttq._i=ttq._i||{};
                ttq._i[e]=[];
                ttq._i[e]._u=r;
                ttq._t=ttq._t||{};
                ttq._t[e]=+new Date;
                ttq._o=ttq._o||{};
                ttq._o[e]=n||{};
                n=document.createElement("script");
                n.type="text/javascript";
                n.async=!0;
                n.src=r+"?sdkid="+e+"&lib="+t;
                e=document.getElementsByTagName("script")[0];
                e.parentNode.insertBefore(n,e)
              };
              ttq.load('D0N3L93C77U7M2KJ8B60');
              ttq.page();
            }(window, document, 'ttq');
          `}
          </Script>
          {/* ✅ Lazy Load Google Tag Manager */}
          <Script strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=AW-11436659671" />
          <Script strategy="lazyOnload" id="google-analytics">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-11436659671');
            `}
          </Script>

          {/* ✅ Defer Facebook Pixel */}
          <Script id="facebook-pixel" strategy="lazyOnload">
            {`
              !function(f,b,e,v,n,t,s){
                if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;
                s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)
              }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1960013544428790'); fbq('track', 'PageView');
            `}
          </Script>

          {/* ✅ Main Content */}
          <div className="flex flex-col bg-white relative">
            <HomeNavigationContainer />
            <CookieConsent />
            {children}
            <Suspense fallback={<p>Loading form...</p>}>
              <FormDisplay />
            </Suspense>
            <Suspense fallback={<p>Loading footer...</p>}>
              <FooterContainer />
            </Suspense>
            <Suspense fallback={<p>Loading scroll-to-top...</p>}>
              <ScrollToTop />
            </Suspense>
            <Suspense fallback={<p>Loading popup...</p>}>
              <GreetingPopup />
            </Suspense>
          </div>
        </GoogleOAuthProvider>

        {/* ✅ Lazy Load Google Tag Manager */}
        <GoogleTagManagerClient gtmId="GTM-MJG35754" />

        {/* ✅ JSON-LD Structured Data */}
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
