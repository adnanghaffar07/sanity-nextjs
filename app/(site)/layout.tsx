import type { Metadata } from "next";
import React, { Suspense } from "react";
// import { Inter } from "next/font/google";
import "../globals.css";
import HomeNavigationContainer from "./components/home-navigation-container";
import { GoogleTagManager } from "@next/third-parties/google";

// import FooterContainer from "./components/footer-container";
// import FormDisplay from "./components/FormDisplay";
// import ScrollToTop from "./components/ScrollToTop";
const FooterContainer = React.lazy(
  () => import("./components/footer-container")
);
const FormDisplay = React.lazy(() => import("./components/FormDisplay"));
const ScrollToTop = React.lazy(() => import("./components/ScrollToTop"));

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
  // get all og our pages
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-MJG35754" />
      <body>
        <div className="flex flex-col bg-white relative">
          <HomeNavigationContainer />
          {children}
          <Suspense fallback={<div>Loading form...</div>}>
            <div className="lg:max-w[506px] ml-auto mr-auto -mb-32 relative z-10 lg:px-0 px-5">
              <FormDisplay />
            </div>
          </Suspense>
          <Suspense fallback={<div>Loading footer...</div>}>
            <FooterContainer />
          </Suspense>
          <Suspense fallback={<div>Loading scroll-to-top...</div>}>
            <ScrollToTop />
          </Suspense>
        </div>
      </body>
    </html>
  );
}
