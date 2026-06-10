import React from 'react'
import CaseStudy from '../components/CaseStudiesMain'
export const metadata = {
  title: "AI Software Development Case Studies | Proven Client Success Stories",
  description:
    "Explore CodeAutomation.ai's case studies featuring real results from AI and automation solutions that improve efficiency, reduce costs, and drive growth.",
  keywords: [
    "CodeAutomation",
    "software development company",
    "software development services",
  ],
  alternates: {
    canonical: "https://codeautomation.ai/case-studies",
  },
  openGraph: {
    type: "website",
    url: "https://codeautomation.ai/case-studies",
    title: "AI Software Development Case Studies | Proven Client Success Stories",
    description:
      "Explore CodeAutomation.ai's case studies featuring real results from AI and automation solutions that improve efficiency, reduce costs, and drive growth.",
    images: [
      {
        url: "https://codeautomation.ai/thankyou.jpg",
        width: 1200,
        height: 630,
        alt: "CodeAutomation Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Software Development Case Studies | Proven Client Success Stories",
    description:
      "Explore CodeAutomation.ai's case studies featuring real results from AI and automation solutions that improve efficiency, reduce costs, and drive growth.",
    images: ["https://codeautomation.ai/thankyou.jpg"],
  },
};
const page = () => {
  return (
    <div>
      <CaseStudy />
    </div>
  )
}

export default page