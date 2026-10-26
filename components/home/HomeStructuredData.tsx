// schema.org structured data for the home page, rendered on the server.
// One connected graph: WebSite + Organization + WebPage + Service.

import type { HomeFaq } from "@/sanity/lib/home";

const SITE = "https://codeautomation.ai";
const ID = {
  website: `${SITE}/#website`,
  organization: `${SITE}/#organization`,
  webpage: `${SITE}/#webpage`,
  service: `${SITE}/#service`,
  rating: `${SITE}/#creativeworkseries`,
};

export default function HomeStructuredData({
  title,
  description,
  faqs,
}: {
  title: string;
  description: string;
  faqs: HomeFaq[];
}) {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": ID.website,
        url: `${SITE}/`,
        name: "CodeAutomation.ai",
        publisher: { "@id": ID.organization },
        inLanguage: "en-US",
      },
      {
        "@type": "Organization",
        "@id": ID.organization,
        name: "Code Automation",
        url: SITE,
        logo: `${SITE}/logo.svg`,
        description:
          "AI agent development company specializing in custom AI agents, AI business automation, and AI workflow automation for businesses across the USA, UK, and Canada.",
        founder: {
          "@type": "Person",
          name: "Adnan Ghaffar",
          jobTitle: "CEO & Founder",
          sameAs: ["https://www.linkedin.com/in/adnanghaffar"],
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "50 S Main Street, Suite 200, Office 233",
          addressLocality: "Naperville",
          addressRegion: "IL",
          postalCode: "60540",
          addressCountry: "US",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-815-614-8480",
          contactType: "sales",
          areaServed: ["US", "UK", "CA"],
          availableLanguage: ["English"],
        },
        sameAs: [
          "https://www.linkedin.com/company/codeautomationai/",
          "https://twitter.com/codeautomation",
          "https://clutch.co/profile/codeautomationai",
          "https://www.trustpilot.com/review/codeautomation.ai",
        ],
        numberOfEmployees: { "@type": "QuantitativeValue", value: 70 },
        foundingDate: "2018",
      },
      {
        "@type": "WebPage",
        "@id": ID.webpage,
        url: `${SITE}/`,
        name: title,
        description,
        inLanguage: "en-US",
        datePublished: "2024-10-17",
        image: `${SITE}/logo.svg`,
        isPartOf: { "@id": ID.website },
        about: { "@id": ID.organization },
        mainEntity: { "@id": ID.service },
        hasPart: { "@id": ID.rating },
      },
      {
        "@type": "CreativeWorkSeries",
        "@id": ID.rating,
        name: "Software Development Company in the USA | CodeAutomation",
        isPartOf: { "@id": ID.webpage },
        aggregateRating: {
          "@type": "AggregateRating",
          bestRating: 5,
          ratingValue: 4.9,
          reviewCount: 49,
          url: "https://maps.app.goo.gl/waAVkpmb1ETqvfUU6",
        },
      },
      {
        "@type": "Service",
        "@id": ID.service,
        name: "Software Development Company in the USA | CodeAutomation",
        serviceType: "Software Development",
        image: `${SITE}/logo.svg`,
        provider: { "@id": ID.organization },
        mainEntityOfPage: { "@id": ID.webpage },
        areaServed: ["US", "UK", "CA"].map((code) => ({ "@type": "Country", name: code })),
        audience: { "@type": "BusinessAudience", name: "Businesses" },
      },
      ...(faqs.length
        ? [
            {
              "@type": "FAQPage",
              "@id": `${SITE}/#faq`,
              isPartOf: { "@id": ID.webpage },
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <script
      type="application/ld+json"
      // Escape "<" so content can never close the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }}
    />
  );
}
