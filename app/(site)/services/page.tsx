import type { Metadata } from "next";
import { getServiceListingCards } from "@/sanity/lib/service-listing";
import ServicesHero from "@/components/services/overview/ServicesHero";
import ServiceDirectory from "@/components/services/overview/ServiceDirectory";
import ServiceHighlights from "@/components/services/overview/ServiceHighlights";

export const revalidate = 300;

const TITLE = "Software Development, AI & Automation Services | CodeAutomation";
const DESCRIPTION =
  "Explore Code Automation services, an AI development company offering AI agents and business automation solutions to streamline operations and scale your business.";
const PAGE_URL = "https://codeautomation.ai/services";
const SHARE_IMAGE = "https://codeautomation.ai/thankyou.jpg";

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

const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": PAGE_URL,
  url: PAGE_URL,
  name: "AI Automation & Software Development Services",
  description:
    "CodeAutomation offers a full suite of AI automation, custom software development, CRM integration, and digital transformation services for businesses across the USA, UK, and Canada.",
  provider: {
    "@type": "Organization",
    name: "CodeAutomation",
    url: "https://codeautomation.ai",
    address: { "@type": "PostalAddress", addressLocality: "Chicago", addressRegion: "IL", addressCountry: "US" },
  },
  areaServed: ["US", "GB", "CA"],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.6", bestRating: "5", worstRating: "1", ratingCount: "214" },
};

export default async function ServicesPage() {
  const services = await getServiceListingCards();

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }} />
      <ServicesHero />
      <ServiceDirectory services={services} />
      <ServiceHighlights />
    </div>
  );
}
