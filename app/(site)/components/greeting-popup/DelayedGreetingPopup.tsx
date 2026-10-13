"use client";

// Loads the greeting popup 8s after page load, so it doesn't compete with the
// page's main content. Visitors who already closed it never download it.

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { TIMINGS, hasSeenPopup } from "./content";

const GreetingPopup = dynamic(() => import("./GreetingPopup"), { ssr: false });

export default function DelayedGreetingPopup() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (hasSeenPopup()) return;
    const timer = window.setTimeout(() => setReady(true), TIMINGS.mountDelayMs);
    return () => window.clearTimeout(timer);
  }, []);

  return ready ? <GreetingPopup /> : null;
}
