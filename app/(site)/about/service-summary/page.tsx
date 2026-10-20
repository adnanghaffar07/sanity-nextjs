// Service Summary page (/about/service-summary): how clients can work with us.
// The sections are in @/components/service-summary; the content comes from
// "Service Summary" in Sanity.

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { urlForImage } from "@/sanity/lib/image";
import { getServiceSummary } from "@/sanity/lib/service-summary";
import SummaryHero from "@/components/service-summary/SummaryHero";
import EngagementModels from "@/components/service-summary/EngagementModels";
import ProjectTimeline from "@/components/service-summary/ProjectTimeline";
import ToolsAndPayments from "@/components/service-summary/ToolsAndPayments";
import ClosingSection from "@/components/service-summary/ClosingSection";

// Refreshed every 5 minutes, or right away via the /api/revalidate webhook.
export const revalidate = 300;

const PATH = "/about/service-summary";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getServiceSummary();
  const title = data?.seo?.title || data?.pageTitle || "Service Summary | CodeAutomation";
  const description = data?.seo?.description || data?.pageDesc;
  const image = data?.heroImage?.asset ? urlForImage(data.heroImage) : "/thankyou.jpg";

  return {
    title,
    description,
    keywords: data?.seo?.keywords,
    alternates: { canonical: PATH },
    openGraph: {
      type: "website",
      url: PATH,
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export default async function ServiceSummaryPage() {
  const data = await getServiceSummary();
  if (!data) notFound();

  return (
    <div>
      <SummaryHero data={data} />
      {data.options && <EngagementModels options={data.options} />}
      <ProjectTimeline cycle={data.cycle} />
      <ToolsAndPayments tools={data.tools} payments={data.payments} />
      <ClosingSection summary={data.summary} cta={data.cta} offer={data.offer} />
    </div>
  );
}
