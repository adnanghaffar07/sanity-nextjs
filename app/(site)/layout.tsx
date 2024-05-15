import type { Metadata } from "next";
import Head from "next/head"; // Import Head
import "../globals.css";
import HomeNavigationContainer from "./components/home-navigation-container";
import FooterContainer from "./components/footer-container";
import ProjectDiscussionContainer from "./components/project-discussion-form";

export const metadata: Metadata = {
  title: "Code Automation - Custom Software and Mobile Development Company in USA",
  description: "Custom Software and Mobile Development Company in USA",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Head>
          {/* Add Clarity tracking code here */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "mc90zj5o4h");
              `,
            }}
          />
        </Head>
        <div className="flex flex-col bg-white relative">
          <HomeNavigationContainer />
          {children}
          <div className="lg:max-w[506px] ml-auto mr-auto -mb-32 relative z-10 lg:px-0 px-5">
            <ProjectDiscussionContainer />
          </div>
          <FooterContainer />
        </div>
      </body>
    </html>
  );
}
