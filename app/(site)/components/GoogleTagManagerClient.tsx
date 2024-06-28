"use client";
import { useEffect } from "react";

const GoogleTagManagerClient = ({ gtmId }: { gtmId: string }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [gtmId]);

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      ></iframe>
    </noscript>
  );
};

export default GoogleTagManagerClient;
