
import React from 'react'
import RealEstateNavbar from './compononets/Section1-NavBar'
import RealEstateHeroSection from './compononets/Section2-HeroSection'
import SocialProofBar from './compononets/Section3-SocialProof'
import HowItWorks from './compononets/Section4-HowitWorks'
import RealEstateServices from './compononets/Section5-Services'
import RealEstateResults from './compononets/Section6-Results'
import FinalCTA from './compononets/Section7-Cta'


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

