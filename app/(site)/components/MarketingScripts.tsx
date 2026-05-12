"use client";

/**
 * Deferred GTM bootstrap only. Meta, TikTok, Ads, Leadsy, Supabase pixel, etc.
 * belong in the GTM container — see docs/google-tag-manager-scripts.md.
 * No marketing preconnects here (avoids >4 / unused preconnect Lighthouse warnings).
 */

import { useEffect } from "react";
import { shouldLoadMarketingScripts } from "./marketing-script-routes";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-MJG35754";

declare global {
  interface Window {
    __codeautomationMarketingScripts?: boolean;
  }
}

function injectInlineScript(id: string, code: string) {
  if (document.getElementById(id)) return;
  const s = document.createElement("script");
  s.id = id;
  s.defer = true;
  s.textContent = code;
  document.head.appendChild(s);
}

function loadScripts() {
  if (window.__codeautomationMarketingScripts) return;
  window.__codeautomationMarketingScripts = true;

  injectInlineScript(
    "gtm-inline",
    `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.defer=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`
  );
}

/** Idle budget + max wait so pixels still run if the main thread stays busy (long tasks, animations). */
const IDLE_TIMEOUT_MS = 2800;

export default function MarketingScripts() {
  useEffect(() => {
    if (!shouldLoadMarketingScripts()) return;

    const load = () => {
      loadScripts();
    };

    let idleHandle: number | undefined;
    let timeoutHandle: ReturnType<typeof globalThis.setTimeout> | undefined;

    const ric = window.requestIdleCallback?.bind(window);
    if (typeof ric === "function") {
      idleHandle = ric(load, { timeout: IDLE_TIMEOUT_MS });
    } else {
      timeoutHandle = globalThis.setTimeout(load, 2000);
    }

    return () => {
      if (idleHandle !== undefined) {
        window.cancelIdleCallback?.(idleHandle);
      }
      if (timeoutHandle !== undefined) {
        globalThis.clearTimeout(timeoutHandle);
      }
    };
  }, []);

  return null;
}
