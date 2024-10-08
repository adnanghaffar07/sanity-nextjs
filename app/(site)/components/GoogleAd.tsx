// GoogleTagManager.js
"use client";
import { useEffect } from 'react';

const GoogleAd = () => {
  useEffect(() => {
   const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-11436659671');
    `;
    document.head.appendChild(script2);
  }, []);

  return null;
};

export default GoogleAd;
