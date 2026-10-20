// Technologies page. The sections are in ./components/technologies; the
// categories and logos come from "Technologies" in Sanity, ordered by the
// "Technology Order" document.

import type { Metadata } from "next";
import { getTechCategories } from "@/sanity/lib/technologies";
import TechnologiesHero from "../components/technologies/TechnologiesHero";
import TechStackIntro from "../components/technologies/TechStackIntro";
import TechCategorySection from "../components/technologies/TechCategorySection";

// Refreshed every 5 minutes, or right away via the /api/revalidate webhook.
export const revalidate = 300;

const TITLE = "Technologies | CodeAutomation";
const DESCRIPTION =
  "We offer only well-recognized and time-tested technologies to bring advancement to any of your business goals.";
const SHARE_IMAGE = { url: "/thankyou.jpg", width: 1200, height: 630, alt: "CodeAutomation" };

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/technologies" },
  openGraph: { type: "website", url: "/technologies", title: TITLE, description: DESCRIPTION, images: [SHARE_IMAGE] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [SHARE_IMAGE.url] },
};

export default async function TechnologiesPage() {
  const categories = await getTechCategories();

  return (
    <div>
      <TechnologiesHero />
      <TechStackIntro />
      {categories.map((category, index) => (
        <TechCategorySection key={category._id} category={category} side={index % 2 === 0 ? "left" : "right"} />
      ))}
    </div>
  );
}
