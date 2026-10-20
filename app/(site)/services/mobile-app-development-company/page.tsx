import React from 'react'
import MobileApp from '@/components/services/mobile-app/MobileAppPage';

export const metadata = {
  title: "Custom Mobile App Development Services - Codeautomation",
  description:
    "We help entrepreneurs turn app ideas into scalable, secure mobile apps using native and cross-platform tech to maximize reach and ROI.",
  keywords: [
    "CodeAutomation",
    "software development company",
    "software development services",
  ],
  alternates: {
    canonical: "https://codeautomation.ai/services/mobile-app-development-company",
  },

  // Add this
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

const page = () => {
  return (
    <div>
      <MobileApp />
    </div>
  )
}

export default page