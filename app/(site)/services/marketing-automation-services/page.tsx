'use client';

import React, { useState, useEffect } from 'react';
import MarketingAutomationHero from './components/MarketingAutomationHero';
import PainPointsSection from './components/PainPointsSection';
import ServicesSection from './components/ServicesSection';
import ChannelCoverageSection from './components/ChannelCoverageSection';
import TechStackSection from './components/TechStackSection';
import ProcessSection from './components/ProcessSection';
import ResultsSection from './components/ResultsSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import IndustriesSection from './components/IndustriesSection';
import CTABannerSection from './components/CTABannerSection';
import ContactFormSection from './components/ContactFormSection';
import MobileAppHeader from '../../components/MobileAppHeader';
import LiveChatTawk from '../../components/LiveChatTawk';
import MarketingHeader from './components/Header';
import QuoteModal from '../../components/MobileQuoteModal';

export default function MarketingAutomationPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFloatingDrawerOpen, setIsFloatingDrawerOpen] = useState(false);

  return (
    <div className="w-full bg-white">
      {/* Header */}
      <MarketingHeader />
      <LiveChatTawk />

      {/* Hero Section */}
      <MarketingAutomationHero />

      {/* Pain Points Section */}
      <PainPointsSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Channel Coverage Section */}
      <ChannelCoverageSection />

      {/* Technology Stack Section */}
      <TechStackSection />

      {/* Process Section */}
      <ProcessSection />

      {/* Results Section */}
      <ResultsSection />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* Industries Section */}
      <IndustriesSection />

      {/* CTA Banner */}
      <CTABannerSection />

      {/* Contact Form Section */}
      <ContactFormSection />

      {/* Floating Components */}
      {/* <FloatingConsultButton setIsModalOpen={setIsModalOpen} />
      <QuoteModal
        isModalOpen={isModalOpen}
        setIsFloatingDrawerOpen={setIsFloatingDrawerOpen}
      /> */}
    </div>
  );
}
