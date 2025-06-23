"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Dynamically import the real ScrollToTop component
const ScrollToTop = dynamic(() => import("./ScrollToTop"), { ssr: false });

const DeferredScrollToTop = () => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if ("requestIdleCallback" in window) {
      (window as any).requestIdleCallback(() => setShouldRender(true));
    } else {
      // Fallback for Safari
      setTimeout(() => setShouldRender(true), 2000);
    }
  }, []);

  return shouldRender ? <ScrollToTop /> : null;
};

export default DeferredScrollToTop;
