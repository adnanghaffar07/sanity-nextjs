import React from 'react'
import Hero from '@/components/landing/car-detailing/Hero'
import Problem from '@/components/landing/car-detailing/Problem'
import Services from '@/components/landing/car-detailing/Services'
import HowItWorks from '@/components/landing/car-detailing/HowItWorks'
import WhyUs from '@/components/landing/car-detailing/WhyUs'
import Pricing from '@/components/landing/car-detailing/Pricing'
import Testimonials from '@/components/landing/car-detailing/Testimonials'
import Faq from '@/components/landing/car-detailing/Faq'

// Metadata for SEO
export const metadata = {
  title: 'CodeAutomation.ai | Done-For-You Marketing for Car Detailing Businesses',
  description: 'We help car detailing businesses across the USA get more bookings, automate follow-ups, and build a fully booked calendar — without lifting a finger. Meta Ads, Google Maps, CRM, and content creation.',
  keywords: 'car detailing marketing, detailing business marketing, auto detailer SEO, car detailing leads, detailing CRM, Google Maps for detailers',
  authors: [{ name: 'CodeAutomation.ai' }],
  openGraph: {
    title: 'CodeAutomation.ai | Get Your Detailing Business Booked Solid',
    description: 'Done-for-you marketing for car detailing businesses. Meta Ads, Google Maps, CRM Automation & Content Creation. Results in 30 days.',
    url: 'https://codeautomation.ai/car-detailing-marketing',
    siteName: 'CodeAutomation.ai',
    images: [
      {
        url: 'https://codeautomation.ai/ceramic-banner.webp',
        width: 1200,
        height: 630,
        alt: 'CodeAutomation.ai - Detailing Marketing',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CodeAutomation.ai | Done-For-You Detailing Marketing',
    description: 'Get more bookings, automate follow-ups, and build a fully booked calendar.',
    images: ['https://codeautomation.ai/ceramic-banner.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://codeautomation.ai/car-detailing-marketing',
  },
}

const Page = () => {
  return (
    <div>
      <Hero />
      <Problem />
      <Services />
      <HowItWorks />
      <WhyUs />
      <Pricing />
      <Testimonials />
      <Faq />
    </div>
  )
}

export default Page