/**
 * Marketing pixels (GTM, Meta, TikTok, Supabase pixel, Leadsy) run on
 * production builds only, so local `next dev` stays fast and analytics stay
 * clean. Vercel previews use NODE_ENV=production, so pixels still load there
 * for QA. Set NEXT_PUBLIC_FORCE_MARKETING_SCRIPTS=true to test locally.
 *
 * Actual script injection stays deferred inside `MarketingScripts` via
 * `requestIdleCallback` (with a timeout fallback) so LCP and main-thread work
 * stay prioritized on live.
 */
export function shouldLoadMarketingScripts(): boolean {
  if (process.env.NEXT_PUBLIC_FORCE_MARKETING_SCRIPTS === "true") {
    return true;
  }
  return process.env.NODE_ENV === "production";
}
