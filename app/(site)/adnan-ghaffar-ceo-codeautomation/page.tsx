import type { Metadata } from "next";
import Image from "next/image";
import heroImage from "@/public/google-scholar.jpg";
import CeoProfile from "@/components/ceo/CeoProfile";
import CeoLeadership from "@/components/ceo/CeoLeadership";
import CeoExpertise from "@/components/ceo/CeoExpertise";
import CeoResearch from "@/components/ceo/CeoResearch";
import CeoMedia from "@/components/ceo/CeoMedia";
import CeoVision from "@/components/ceo/CeoVision";

const TITLE = "Adnan Ghaffar CEO of CodeAutomation AI Software Company USA";
const DESCRIPTION =
  "Learn about Adnan Ghaffar, Founder and CEO of CodeAutomation, a Chicago based AI software development and business automation company delivering scalable AI solutions.";
const PAGE_URL = "https://codeautomation.ai/adnan-ghaffar-ceo-codeautomation";
const SHARE_IMAGE = "https://codeautomation.ai/thankyou.jpg";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["CodeAutomation", "software development company", "software development services"],
  alternates: { canonical: PAGE_URL },
  openGraph: { type: "website", url: PAGE_URL, title: TITLE, description: DESCRIPTION, images: [{ url: SHARE_IMAGE, width: 1200, height: 630, alt: "CodeAutomation Logo" }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [SHARE_IMAGE] },
};

export default function CeoPage() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex overflow-hidden relative flex-col pb-12 w-full font-light text-white lg:min-h-[700px] max-md:max-w-full">
        <Image src={heroImage} alt="Google Scholar Hero" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-black opacity-60" />
        <div className="relative flex flex-col items-center px-5 pt-48 pb-36 w-full lg:px-20 lg:pt-12 flex-grow">
          <div className="lg:absolute lg:top-[300px] text-center lg:w-8/12 mx-auto">
            <h1 className="text-2xl font-bold capitalize lg:text-4xl">About the CEO</h1>
          </div>
        </div>
      </div>
      <CeoProfile />
      <CeoLeadership />
      <CeoExpertise />
      <CeoResearch />
      <CeoMedia />
      <CeoVision />
    </div>
  );
}
