
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Software Development Company in the USA | CodeAutomation",
  description:
    "CodeAutomation.ai is a leading software development company specialized in custom software development services. Schedule a Call & build with experts.",
    keywords: [
      "CodeAutomation",
      "software development company",
      "software development services",
    ],
  
  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
