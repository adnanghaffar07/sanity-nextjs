'use client';

import React from 'react';
import MarketingAutomationHero from '@/components/services/marketing-automation/MarketingAutomationHero';
import PainPointsSection from '@/components/services/marketing-automation/PainPointsSection';
import ServicesSection from '@/components/services/marketing-automation/ServicesSection';
import ChannelCoverageSection from '@/components/services/marketing-automation/ChannelCoverageSection';
import TechStackSection from '@/components/services/marketing-automation/TechStackSection';
import ProcessSection from '@/components/services/marketing-automation/ProcessSection';
import ResultsSection from '@/components/services/marketing-automation/ResultsSection';
import WhyChooseUsSection from '@/components/services/marketing-automation/WhyChooseUsSection';
import IndustriesSection from '@/components/services/marketing-automation/IndustriesSection';
import CTABannerSection from '@/components/services/marketing-automation/CTABannerSection';
import LiveChatTawk from '@/components/layout/LiveChatTawk';
import MarketingHeader from '@/components/services/marketing-automation/Header';
import ContactFormSection from '@/components/services/marketing-automation/ContactFormSection';
import StatsSection from '@/components/sections/StatsSection';

export default function MarketingAutomationPage() {
  return (
    <div className="w-full bg-white">
      {/* Header */}
      <MarketingHeader />
      <LiveChatTawk />

      {/* Hero Section */}
      <MarketingAutomationHero />
      <StatsSection />
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
