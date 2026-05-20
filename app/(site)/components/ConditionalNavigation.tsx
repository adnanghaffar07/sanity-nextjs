/**
 * Client-only: `usePathname()` is not available in Server Components without
 * middleware/header plumbing; keep this shell tiny so the layout stays mostly RSC.
 */
"use client";

import { usePathname } from "next/navigation";
import HomeNavigationContainer from './home-navigation-container';

export default function ConditionalNavigation() {
  const pathname = usePathname();

  // Hide navigation only for /services/mobile-app (not /services/mobile-app-development-services)
  if (pathname?.match(/^\/services\/mobile-app(?:\/|$)/)) {
    return null;
  }
  if (pathname?.match(/^\/services\/marketing-automation-services(?:\/|$)/)) {
    return null;
  }
   if (pathname?.match(/real-estate-ai-automation(?:\/|$)/)) {
    return null;
  }
  return <HomeNavigationContainer />;
}
