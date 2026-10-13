'use client';

// Tawk.to live chat widget. next/script injects it after the page has loaded,
// so it can be rendered anywhere in the page (a <head> here broke hydration).

import Script from 'next/script';

export default function LiveChatTawk() {
  return (
    <Script
      id="tawkto-widget"
      strategy="lazyOnload"
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
  );
}
