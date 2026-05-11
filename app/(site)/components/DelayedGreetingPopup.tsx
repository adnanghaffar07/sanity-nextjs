"use client";

/**
 * Defers mounting the greeting popup bundle until 8s after load so the main thread
 * and React hydration stay focused on LCP content first (requirement #10).
 */
import dynamic from "next/dynamic";
import { Suspense, useEffect, useState } from "react";

const GreetingPopup = dynamic(() => import("./GreetingPopup"), { ssr: false });

const MOUNT_DELAY_MS = 8000;

export default function DelayedGreetingPopup() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setReady(true), MOUNT_DELAY_MS);
    return () => window.clearTimeout(t);
  }, []);

  if (!ready) return null;

  return (
    <Suspense fallback={null}>
      <GreetingPopup />
    </Suspense>
  );
}
