"use client";

/**
 * Deferred GTM bootstrap only. Meta, TikTok, Ads, Leadsy, Supabase pixel, etc.
 * belong in the GTM container — see docs/google-tag-manager-scripts.md.
 * No marketing preconnects here (avoids >4 / unused preconnect Lighthouse warnings).
 */

import { useEffect } from "react";
import Cookies from "js-cookie";
import { shouldLoadMarketingScripts } from "./marketingScriptRoutes";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-MJG35754";
const COOKIE_KEY = "cookieConsent";

const IDLE_TIMEOUT_MS = 3500;
const FALLBACK_LOAD_DELAY_MS = 2000;

declare global {
  interface Window {
    __codeautomationMarketingScripts?: boolean;
  }
}

function injectInlineScript(id: string, code: string) {
  if (document.getElementById(id)) return;

  const script = document.createElement("script");
  script.id = id;
  script.defer = true;
  script.textContent = code;

  document.head.appendChild(script);
}

function loadScripts() {
  if (window.__codeautomationMarketingScripts) return;

  window.__codeautomationMarketingScripts = true;

  injectInlineScript(
    "gtm-inline",
    `(function(w,d,s,l,i){
      w[l]=w[l]||[];
      w[l].push({
        'gtm.start': new Date().getTime(),
        event:'gtm.js'
      });

      var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),
          dl=l!='dataLayer' ? '&l='+l : '';

      j.async=true;
      j.defer=true;
      j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;

      f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${GTM_ID}');`
  );
}

function hasMarketingConsent() {
  return (
    process.env.NEXT_PUBLIC_FORCE_MARKETING_SCRIPTS === "true" ||
    Cookies.get(COOKIE_KEY) === "true"
  );
}

function scheduleLoad() {
  if (window.__codeautomationMarketingScripts) return;

  let idleHandle: number | undefined;
  let timeoutHandle: number | undefined;

  const load = () => {
    loadScripts();
  };

  const ric =
    "requestIdleCallback" in window
      ? window.requestIdleCallback?.bind(window)
      : null;

  if (typeof ric === "function") {
    idleHandle = ric(load, {
      timeout: IDLE_TIMEOUT_MS,
    });
  } else {
    timeoutHandle = window.setTimeout(
      load,
      FALLBACK_LOAD_DELAY_MS
    );
  }

  return () => {
    if (
      idleHandle !== undefined &&
      typeof window.cancelIdleCallback === "function"
    ) {
      window.cancelIdleCallback(idleHandle);
    }

    if (timeoutHandle !== undefined) {
      window.clearTimeout(timeoutHandle);
    }
  };
}

export default function MarketingScripts() {
  useEffect(() => {
    if (!shouldLoadMarketingScripts()) return;

    if (hasMarketingConsent()) {
      return scheduleLoad();
    }

    const onConsent = () => {
      scheduleLoad();
    };

    window.addEventListener(
      "cookieConsentAccepted",
      onConsent
    );

    return () => {
      window.removeEventListener(
        "cookieConsentAccepted",
        onConsent
      );
    };
  }, []);

  return null;
}