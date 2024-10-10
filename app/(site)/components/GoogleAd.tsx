// GoogleTagManager.js
"use client";
import { useEffect } from 'react';

const GoogleAd = () => {
  useEffect(() => {
    // Load the Google Tag Manager script asynchronously
    const script = document.createElement('script');
    script.src = "https://www.googletagmanager.com/gtag/js?id=AW-11436659671";
    script.async = true; // Ensure the script loads asynchronously
    document.head.appendChild(script); // Append the script to the document head

    // Initialize Google Tag Manager
    const initScript = document.createElement('script');
    initScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-11436659671');
    `;
    document.head.appendChild(initScript); // Append the initialization script

    // Cleanup function to remove scripts on component unmount
    return () => {
      document.head.removeChild(script);
      document.head.removeChild(initScript);
    };
  }, []);

  return null; // This component does not render any visible elements
};

export default GoogleAd;
