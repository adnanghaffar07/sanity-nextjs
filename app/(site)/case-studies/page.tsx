import type { Metadata } from "next";
import { getCaseStudyCards } from "@/sanity/lib/case-studies";
import CaseStudiesHero from "@/components/case-studies/CaseStudiesHero";
import CaseStudyGrid from "@/components/case-studies/CaseStudyGrid";

export const revalidate = 300;

const TITLE = "AI Software Development Case Studies | Proven Client Success Stories";
const DESCRIPTION =
  "Explore CodeAutomation.ai's case studies featuring real results from AI and automation solutions that improve efficiency, reduce costs, and drive growth.";
const PAGE_URL = "https://codeautomation.ai/case-studies";
const SHARE_IMAGE = "https://codeautomation.ai/thankyou.jpg";
const GRID_ID = "gridSection";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["CodeAutomation", "software development company", "software development services"],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: SHARE_IMAGE, width: 1200, height: 630, alt: "CodeAutomation Logo" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [SHARE_IMAGE] },
};

export default async function CaseStudiesPage() {
  const cards = await getCaseStudyCards();

  return (
    <>
      <CaseStudiesHero gridId={GRID_ID} />
      <CaseStudyGrid id={GRID_ID} cards={cards} />
    </>
  );
}
