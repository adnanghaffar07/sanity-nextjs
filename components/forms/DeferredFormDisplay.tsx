"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

const FormDisplay = dynamic(() => import("./FormDisplay"), { ssr: false });

// Pages that don't get the site-wide "Ready to innovate your business?"
// contact form at the bottom.
const HIDDEN_PATHS = new Set([
  "/partnership-program",
  "/services/marketing-automation-services",
  "/services/ai-business-automation-solutions",
  "/services/ai-software-development-services",
  "/adnan-ghaffar",
  "/press-release",
  "/blogs",
]);
const HIDDEN_PREFIXES = ["/blogs/", "/services/marketing-automation-services/", "/real-estate-ai-automation"];

// Pages can also opt out by rendering an element with this attribute; every
// Service Page builder page does (ServicePageRenderer).
const OPT_OUT_SELECTOR = "[data-hide-footer-form]";

const hiddenByPath = (pathname: string | null) => {
  const path = pathname?.replace(/\/+$/, "") || "/";
  return HIDDEN_PATHS.has(path) || HIDDEN_PREFIXES.some((prefix) => path.startsWith(prefix));
};

/** True while the current page carries the opt-out marker. Follows client-side navigation. */
function usePageOptedOut() {
  const [optedOut, setOptedOut] = useState(true); // assume hidden until checked
  useEffect(() => {
    const check = () => setOptedOut(document.querySelector(OPT_OUT_SELECTOR) !== null);
    check();
    // On client-side navigation the old page stays on screen for a moment, so
    // watch the page instead of checking once.
    const observer = new MutationObserver(check);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);
  return optedOut;
}

const DeferredFormDisplay = () => {
  const [ready, setReady] = useState(false);
  const currentPath = usePathname();
  const optedOut = usePageOptedOut();

  // Load the form once the browser is idle, so it doesn't slow the page down.
  useEffect(() => {
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(() => setReady(true));
      return () => window.cancelIdleCallback(id);
    }
    const id = setTimeout(() => setReady(true), 2000); // fallback for Safari
    return () => clearTimeout(id);
  }, []);

  const show = ready && !optedOut && !hiddenByPath(currentPath);
  return show ? <FormDisplay /> : null;
};

export default DeferredFormDisplay;
