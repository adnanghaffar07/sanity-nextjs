"use client";

/**
 * Deferred marketing / analytics stack — runs on all routes, but only after the
 * browser is idle (requestIdleCallback), so LCP and main-thread
 * work stay prioritized. Scripts are injected dynamically (no large inline blobs
 * in the RSC layout tree). Single Meta Pixel ID (duplicate inits removed).
 */

import { useEffect } from "react";
import { shouldLoadMarketingScripts } from "./marketing-script-routes";

const GTM_ID = "GTM-MJG35754";
/** Single canonical Meta Pixel — duplicate fbq inits were removed for correctness and cost. */
const FB_PIXEL_ID = "1394365178720204";
const TIKTOK_PIXEL_ID = "D0N3L93C77U7M2KJ8B60";
declare global {
  interface Window {
    __codeautomationMarketingScripts?: boolean;
  }
}

function appendPreconnect(href: string) {
  if (document.querySelector(`link[rel="preconnect"][href="${href}"]`)) return;
  const link = document.createElement("link");
  link.rel = "preconnect";
  link.href = href;
  link.crossOrigin = "anonymous";
  document.head.appendChild(link);
}

function injectExternalScript(
  id: string,
  src: string,
  attrs?: Record<string, string>
) {
  if (document.getElementById(id)) return;
  const s = document.createElement("script");
  s.id = id;
  s.async = true;
  s.src = src;
  if (attrs) {
    for (const [k, v] of Object.entries(attrs)) {
      s.setAttribute(k, v);
    }
  }
  document.head.appendChild(s);
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

  appendPreconnect("https://www.googletagmanager.com");
  appendPreconnect("https://connect.facebook.net");
  appendPreconnect("https://analytics.tiktok.com");
  appendPreconnect("https://r2.leadsy.ai");
  appendPreconnect("https://yrmeqjvgjltkgdiwvhhu.supabase.co");

  injectExternalScript("leadsy-tag", "https://r2.leadsy.ai/tag.js", {
    "data-pid": "3XiQNYrZNQluAGac",
    "data-version": "062024",
  });

  injectInlineScript(
    "supabase-pixel-inline",
    `(function(p,i,x,e){p._pxq=p._pxq||[];var s=i.createElement('script');s.async=1;s.src='https://yrmeqjvgjltkgdiwvhhu.supabase.co/functions/v1/pixel';s.setAttribute('data-site',e);i.head.appendChild(s);})(window,document,'px','px_13fdc02db8347e58');`
  );

  injectInlineScript(
    "gtm-inline",
    `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.defer=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`
  );

  injectInlineScript(
    "tiktok-pixel-inline",
    `!function(w,d,t){w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"];ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))};};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e};ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{};ttq._i[e]=[];ttq._i[e]._u=r;ttq._t=ttq._t||{};ttq._t[e]=+new Date;ttq._o=ttq._o||{};ttq._o[e]=n||{};n=document.createElement("script");n.type="text/javascript";n.async=!0;n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};ttq.load('${TIKTOK_PIXEL_ID}');ttq.page();}(window,document,'ttq');`
  );

  injectInlineScript(
    "fb-pixel-inline",
    `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${FB_PIXEL_ID}');fbq('track','PageView');`
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
