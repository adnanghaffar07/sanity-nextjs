import React from 'react'
import CaseStudy from '../components/CaseStudiesMain'
export const metadata = {
  title: "Software Development Company in the USA | CodeAutomation",
  description:
    "CodeAutomation.ai is a leading software development company specialized in custom software development services. Schedule a Call & build with experts.",
  keywords: [
    "CodeAutomation",
    "software development company",
    "software development services",
  ],
  alternates: {
    canonical: "https://codeautomation.ai/case-studies",
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