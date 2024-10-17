
"use client";
import Script from "next/script";

const GoogleAdsTracking = ({ adId }: { adId: string }) => {
  return (
    <>
      {/* Google Ads Script */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${adId}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-ads-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${adId}');
          `,
        }}
      />
    </>
  );
};

export default GoogleAdsTracking;
