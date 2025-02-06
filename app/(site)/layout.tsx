import type { Metadata } from "next";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import Image from "next/image"; // ✅ Import Next.js Image
import Script from "next/script";
import "../globals.css";
import HomeNavigationContainer from "./components/home-navigation-container";
import CookieConsent from "./components/CookieConsent";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// Dynamically Imported Components
const GoogleTagManagerClient = dynamic(
  () => import("./components/GoogleTagManagerClient"),
  { ssr: false }
);
const FooterContainer = dynamic(() => import("./components/footer-container"), {
  suspense: true,
});
const FormDisplay = dynamic(() => import("./components/FormDisplay"), {
  suspense: true,
});
const ScrollToTop = dynamic(() => import("./components/ScrollToTop"), {
  suspense: true,
});
const GreetingPopup = dynamic(() => import("./components/GreetingPopup"), {
  suspense: true,
});

// Metadata
export const metadata: Metadata = {
  title: "Software Development Company in the USA | CodeAutomation",
  description:
    "CodeAutomation.ai is a leading software development company specialized in custom software development services. Schedule a Call & build with experts.",
  keywords: [
    "CodeAutomation",
    "software development company",
    "software development services",
  ],
  alternates: {
    canonical: "https://codeautomation.ai",
  },
  openGraph: {
    type: "website",
    url: "https://codeautomation.ai",
    title: "Software Development Company in the USA | CodeAutomation",
    description:
      "CodeAutomation.ai is a leading software development company specialized in custom software development services. Schedule a Call & build with experts.",
    images: [
      {
        url: "https://codeautomation.ai/thankyou.jpg",
        width: 1200,
        height: 630,
        alt: "CodeAutomation Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Company in the USA | CodeAutomation",
    description:
      "CodeAutomation.ai is a leading software development company specialized in custom software development services. Schedule a Call & build with experts.",
    images: ["https://codeautomation.ai/thankyou.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Favicon Fix */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>
        {/* ✅ Google Tag Manager */}
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=AW-11436659671" />
        <Script strategy="afterInteractive" id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11436659671');
          `}
        </Script>

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MJG35754"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* ✅ Page Content */}
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

        {/* ✅ Google Tag Manager Client */}
        <GoogleTagManagerClient gtmId="GTM-MJG35754" />

        {/* ✅ LinkedIn Partner Tag Fix */}
        <Script strategy="afterInteractive" id="linkedin-tag">
          {`
            window._linkedin_partner_id = "7913033";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
            (function(l) {
              if (!l){
                window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
                window.lintrk.q=[];
              }
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript";
              b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b,s);
            })(window.lintrk);
          `}
        </Script>
        <noscript>
          <Image
            src="https://px.ads.linkedin.com/collect/?pid=7913033&fmt=gif"
            alt=""
            width={1}
            height={1}
            style={{ display: "none" }}
          />
        </noscript>

        {/* ✅ JSON-LD Structured Data Fix */}
        <Script type="application/ld+json" strategy="afterInteractive" id="json-ld">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "WebPage",
            name: "Code Automation",
            headline: "Software Development Company in the USA | CodeAutomation",
            url: "https://codeautomation.ai/",
            inLanguage: "en-US",
            datePublished: "2024-08-20",
            description:
              "CodeAutomation.ai is a leading software development company specialized in custom software development services. Schedule a Call & build with experts.",
            image: "https://codeautomation.ai/logo.svg",
            isPartOf: {
              "@type": "WebSite",
              url: "https://codeautomation.ai/",
            },
            mainEntity: [
              { "@type": "Organization", name: "Code Automation" },
            ],
            aggregateRating: {
              "@type": "AggregateRating",
              bestRating: "5",
              ratingValue: "4.9",
              reviewCount: "100",
            },
          })}
        </Script>
      </body>
    </html>
  );
}
