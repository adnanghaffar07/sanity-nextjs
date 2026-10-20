/** Client-only: pathname-based footer swap (same constraint as ConditionalNavigation). */
"use client";

import { usePathname } from "next/navigation";
import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';
import MobileAppFooter from '@/components/services/mobile-app/MobileAppFooter';
import RealEstateFooter from "@/components/landing/real-estate/Footer";

const SiteFooter = dynamic(() => import('./SiteFooter'), { suspense: true });

export default function ConditionalFooter() {
  const pathname = usePathname();

  // Show custom footer for /services/mobile-app and /services/marketing-automation-services
  if (
    pathname?.match(/^\/services\/mobile-app(?:\/|$)/) ||
    pathname?.includes('/marketing-automation-services')
  ) {
    return <MobileAppFooter />;
  }

  if (
    pathname?.match('/real-estate-ai-automation')
  ) {
    return <RealEstateFooter />;
  }

  return (
    <Suspense fallback={null}>
      <SiteFooter />
    </Suspense>
  );
}
