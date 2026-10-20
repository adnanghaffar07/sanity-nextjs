// Careers page. The sections are in @/components/careers; the job cards come
// from "Job Openings" in Sanity.

import type { Metadata } from "next";
import { getJobOpenings } from "@/sanity/lib/careers";
import CareersHero from "@/components/careers/CareersHero";
import CareersIntro from "@/components/careers/CareersIntro";
import OpenRoles from "@/components/careers/OpenRoles";
import PerksSection from "@/components/careers/PerksSection";

// Refreshed every 5 minutes, or right away via the /api/revalidate webhook.
export const revalidate = 300;

const TITLE = "Careers at CodeAutomation | Join Our Team";
const DESCRIPTION =
  "Join Code Automation to work with world-class developers, explore open roles, and grow in AI and software with flexible benefits and career advancement.";
const SHARE_IMAGE = { url: "/thankyou.jpg", width: 1200, height: 630, alt: "CodeAutomation" };

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/career" },
  openGraph: { type: "website", url: "/career", title: TITLE, description: DESCRIPTION, images: [SHARE_IMAGE] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [SHARE_IMAGE.url] },
};

export default async function CareersPage() {
  const jobs = await getJobOpenings();

  return (
    <div>
      <CareersHero />
      <CareersIntro />
      <OpenRoles jobs={jobs} />
      <PerksSection />
    </div>
  );
}
