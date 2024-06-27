"use client";
import { useEffect } from "react";

const GoogleTagManagerClient = ({ gtmId }: { gtmId: string }) => {
  useEffect(() => {
    const script = document.createElement("script");
    // script.async = true;
    script.defer = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [gtmId]);

  return null;
};

export default GoogleTagManagerClient;
