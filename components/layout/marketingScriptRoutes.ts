/**
 * GTM bootstrap runs on production builds only (tags inside GTM are your
 * Meta/TikTok/Ads/etc.). Set NEXT_PUBLIC_FORCE_MARKETING_SCRIPTS=true to test
 * locally. Injection stays idle-deferred in `MarketingScripts`.
 */
export function shouldLoadMarketingScripts(): boolean {
  if (process.env.NEXT_PUBLIC_FORCE_MARKETING_SCRIPTS === "true") {
    return true;
  }
  return process.env.NODE_ENV === "production";
}
