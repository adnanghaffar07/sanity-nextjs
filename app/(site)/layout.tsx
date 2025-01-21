import type { Metadata } from "next";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import Head from "next/head";
import "../globals.css";
import HomeNavigationContainer from "./components/home-navigation-container";
import CookieConsent from "./components/CookieConsent";
import Script from "next/script";



const GoogleTagManagerClient = dynamic(
  () => import("./components/GoogleTagManagerClient"),
  {
    ssr: false,
  }
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

export const metadata: Metadata = {
  title: "Software Development Company in the USA | CodeAutomation",
  description:
    "CodeAutomation.ai is a leading software development company specialized in custom software development services. Schedule a Call & build with experts.",
  keywords: [
    "CodeAutomation",
    "software development company",
    "software development services",
    "software development services",
  ],
  alternates: {
    canonical: "https://codeautomation.ai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* General Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content="Software Development Company in the USA | CodeAutomation" />
        <meta name="description" content="CodeAutomation.ai is a leading software development company specialized in custom software development services. Schedule a Call & build with experts." />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://codeautomation.ai/" />
        <meta property="og:title" content="Software Development Company in the USA | CodeAutomation" />
        <meta property="og:description" content="CodeAutomation.ai is a leading software development company specialized in custom software development services. Schedule a Call & build with experts." />
        <meta property="og:image" content="https://codeautomation.ai/thankyou.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://codeautomation.ai/" />
        <meta name="twitter:title" content="Software Development Company in the USA | CodeAutomation" />
        <meta name="twitter:description" content="CodeAutomation.ai is a leading software development company specialized in custom software development services. Schedule a Call & build with experts." />
        <meta name="twitter:image" content="https://codeautomation.ai/thankyou.jpg" />
        {/* Title */}
        <title>Software Development Company in the USA | CodeAutomation</title>

        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />


        <link
          rel="preload"
          href="/hero-sec-video.webm"
          as="video"
          type="video/webm"
        />
        <link
          rel="preload"
          href="/hero-sec-video.mp4"
          as="video"
          type="video/mp4"
        />

        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1960013544428790');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1960013544428790&ev=PageView&noscript=1"
          />
        </noscript>

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@graph": [
              {
                "@type": "Webpage",
                Name: "Code Automation",
                headline:
                  "Software Development Company in the USA | CodeAutomation",
                url: "https://codeautomation.ai/",
                "@id": "https://codeautomation.ai/",
                inLanguage: "en-US",
                datePublished: "2024-08-20",
                description:
                  "CodeAutomation.ai is a leading software development company specialized in custom software development services. Schedule a Call & build with experts.",
                image: "https://codeautomation.ai/logo.svg",
                speakable: { "@type": "SpeakableSpecification" },
                potentialAction: {
                  "@type": "SearchAction",
                  target: "Software Development Company USA",
                },
                isPartOf: {
                  "@type": "WebSite",
                  "@id": "https://codeautomation.ai/",
                },
                mainEntity: [{ "@id": "https://codeautomation.ai/" }],
                hasPart: { "@id": "https://codeautomation.ai/" },
              },
              {
                "@type": "CreativeWorkSeries",
                "@id": "https://codeautomation.ai/",
                isPartOf: { "@id": "https://codeautomation.ai/" },
                name: "Software Development Company USA",
                aggregateRating: {
                  "@type": "AggregateRating",
                  bestRating: "5",
                  ratingValue: "4.9",
                  reviewCount: "100",
                  url: "https://maps.app.goo.gl/j7mxdT34Z8Yg1FyU6",
                },
              },
              {
                "@type": "Service",
                "@id": "https://codeautomation.ai/",
                mainEntityOfPage: { "@id": "https://codeautomation.ai/" },
                name: "Software Development Company in the USA | CodeAutomation",
                serviceType: ["Software Development Company"],
                image: "https://codeautomation.ai/who-we-are.png",
                provider: {
                  "@type": "Organization",
                  url: "https://codeautomation.ai/",
                  Name: "Code Automation",
                  mainEntityOfPage: { "@id": "https://codeautomation.ai/" },
                },
                areaServed: {
                  "@type": "AdministrativeArea",
                  name: "https://maps.app.goo.gl/j7mxdT34Z8Yg1FyU6",
                },
                audience: {
                  "@type": "Audience",
                  name: "Software Development Company USA",
                },
              },
              {
                "@type": "AggregateRating",
                bestRating: "5",
                ratingValue: "5",
                reviewCount: "9",
                url: "https://clutch.co/profile/codeautomationai",
              },
            ],
          })}
        </script>
      </Head>




      {/* Google Tag Manager */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-11436659671"
      />
      <Script strategy="afterInteractive" id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-11436659671');
        `}
      </Script>

      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=GTM-MJG35754`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <div className="flex flex-col bg-white relative">
          <HomeNavigationContainer />
          <CookieConsent />
          {children}
          <Suspense fallback={<p>Loading form...</p>}>
            <div>
              <FormDisplay />
            </div>
          </Suspense>
          <Suspense fallback={<p>Loading footer...</p>}>
            <FooterContainer />
          </Suspense>
          <Suspense fallback={<p>Loading scroll-to-top...</p>}>
            <ScrollToTop />
          </Suspense>
          <Suspense fallback={<p>Loading...</p>}>
            <GreetingPopup />
          </Suspense>
        </div>
        <GoogleTagManagerClient gtmId="GTM-MJG35754" />
        {/* Add LinkedIn Partner Tag just before closing body */}
        <script type="text/javascript">
          {`
            _linkedin_partner_id = "7913033";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          `}
        </script>
        <script type="text/javascript">
          {`
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
              s.parentNode.insertBefore(b, s);
            })(window.lintrk);
          `}
        </script>
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }} alt="" src="https://px.ads.linkedin.com/collect/?pid=7913033&fmt=gif" />
        </noscript>
      </body>
    </html>
  );
}
