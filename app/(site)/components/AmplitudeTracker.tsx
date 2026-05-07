'use client';

import { useEffect } from 'react';
import { init, track } from '@amplitude/analytics-browser';

export default function AmplitudeTracker() {
  useEffect(() => {
    // Initialize Amplitude
    init(process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY || '8bb6e1d254360f55744b6519de879074', {
      defaultTracking: {
        pageViews: true,
      },
    });

    // Track initial page view
    track('[Amplitude] Page Viewed', {
      page_url: window.location.href,
      referrer: document.referrer,
      user_agent: navigator.userAgent,
    });
  }, []);

  return null;
}