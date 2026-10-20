
import React from 'react'
import RealEstateNavbar from '@/components/landing/real-estate/NavBar'
import RealEstateHeroSection from '@/components/landing/real-estate/Hero'
import SocialProofBar from '@/components/landing/real-estate/SocialProof'
import HowItWorks from '@/components/landing/real-estate/HowItWorks'
import RealEstateServices from '@/components/landing/real-estate/Services'
import RealEstateResults from '@/components/landing/real-estate/Results'
import FinalCTA from '@/components/landing/real-estate/Cta'


export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

const page = () => {
  return (
    <div>
      <RealEstateNavbar />
      <RealEstateHeroSection />
      <SocialProofBar />
      <HowItWorks />
      <RealEstateServices />
      <RealEstateResults />
      <FinalCTA />
    </div>
  )
}

export default page

