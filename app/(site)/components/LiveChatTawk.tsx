'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function LiveChatTawk() {
  useEffect(() => {
    // Optional: ensure global reference is accessible
    (window as any).Tawk_API = (window as any).Tawk_API || {};
  }, []);

  return (
    <head>
  <Script
      id="tawkto-widget"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
          (function () {
            var s1 = document.createElement("script"),
                s0 = document.getElementsByTagName("script")[0];
            s1.async = true;
            s1.src = 'https://embed.tawk.to/68596b10c081ee1912d02d76/1iuekkkt5';
            s1.charset = 'UTF-8';
            s1.setAttribute('crossorigin', '*');
            s0.parentNode.insertBefore(s1, s0);
          })();
        `,
      }}
    />
    </head>
  
  );
}
