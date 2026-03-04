'use client';

import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';
import MobileAppFooter from './MobileAppFooter';

const FooterContainer = dynamic(() => import('./footer-container'), { suspense: true });

export default function ConditionalFooter() {
  const pathname = usePathname();

  // Show custom footer for mobile app service page
  if (pathname?.includes('/services/mobile-app')) {
    return <MobileAppFooter />;
  }

  return (
    <Suspense fallback={<div className="h-[300px] bg-gray-100 animate-pulse" />}>
      <FooterContainer />
    </Suspense>
  );
}
