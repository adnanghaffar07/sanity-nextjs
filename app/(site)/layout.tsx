import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "../globals.css";
import HomeNavigationContainer from "./components/home-navigation-container";
import FooterContainer from "./components/footer-container";
import FormDisplay from "./components/FormDisplay";
import ScrollToTop from "./components/ScrollToTop";

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
      <body>
        <div className="flex flex-col bg-white relative">
          <HomeNavigationContainer />
          {children}
          <div className="lg:max-w[506px] ml-auto mr-auto -mb-32 relative z-10 lg:px-0 px-5">
            <FormDisplay />
          </div>
          <FooterContainer />
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
