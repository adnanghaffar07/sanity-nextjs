
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
// import { Inter } from "next/font/google";
import "../globals.css";
import HomeNavigationContainer from "./components/home-navigation-container";
// import { GoogleTagManager } from "@next/third-parties/google";
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
// const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title:
    "Code Automation - Custom Software and Mobile Development Company in USA",
  description: "Custom Software and Mobile Development Company in USA",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <GoogleTagManager gtmId="GTM-MJG35754" /> */}
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
          {children}
          <Suspense fallback={<p>Loading form...</p>}>
            <div className="lg:max-w[506px] ml-auto mr-auto -mb-12 relative z-10 lg:px-0 px-5">
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
      </body>
    </html>
  );
}