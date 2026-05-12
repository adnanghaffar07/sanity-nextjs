# Google Tag Manager: single source for marketing scripts

Third-party tags (Meta Pixel, TikTok, Google Ads, analytics helpers, etc.) should live in **one GTM container** instead of hard-coded snippets in the Next.js app. The site now loads **only the GTM bootstrap** from `MarketingScripts` (idle-deferred, production-only), which keeps preconnect usage low and avoids duplicate pixels.

## What runs from code vs GTM

| Responsibility | Where |
|----------------|--------|
| GTM container (`gtm.js`) | `app/(site)/components/MarketingScripts.tsx` |
| Meta Pixel, TikTok, GA4, Google Ads, LinkedIn, Clarity, Leadsy, Supabase pixel, Sendinblue, etc. | GTM tags (you configure) |
| `dataLayer.push` for forms / conversions | Your React code (keep pushing events; GTM listens) |

Optional: set `NEXT_PUBLIC_GTM_ID=GTM-XXXX` to override the default container ID in non-fork deployments.

**Before you deploy** this code change, add equivalent tags in GTM for anything you still need. Until GTM fires those tags, Meta/TikTok/Supabase/Leadsy will not load from the app anymore.

### IDs previously in code (for GTM migration)

| Vendor | Value |
|--------|--------|
| GTM | `GTM-MJG35754` (or `NEXT_PUBLIC_GTM_ID`) |
| Meta Pixel | `1394365178720204` |
| TikTok | `D0N3L93C77U7M2KJ8B60` |
| Leadsy | `data-pid="3XiQNYrZNQluAGac"`, `data-version="062024"`, script `https://r2.leadsy.ai/tag.js` |
| Supabase pixel | Edge URL `https://yrmeqjvgjltkgdiwvhhu.supabase.co/functions/v1/pixel`, `data-site="px_13fdc02db8347e58"` |

## Migrate each vendor into GTM

1. Open [Google Tag Manager](https://tagmanager.google.com/) → your container (`GTM-MJG35754` or your ID).
2. For each former hard-coded script, create a tag:
   - **Google Tag (GA4)** or **Google Ads Conversion Tracking** — use the official GTM tag types (they load `gtag` once; avoid adding a second standalone `gtag.js` in React).
   - **Meta Pixel** — tag type “Facebook Pixel”, Pixel ID `1394365178720204` (or your current ID), trigger “All Pages” (or Consent Initialization + page view as you prefer).
   - **TikTok** — “TikTok Pixel” template or **Custom HTML** with TikTok’s base code; Pixel ID `D0N3L93C77U7M2KJ8B60` (verify in TikTok Events Manager).
   - **Leadsy** — Custom HTML with their snippet (`tag.js` + `data-pid` / `data-version`). If Lighthouse showed CORS errors to `wvbknd.leadsy.ai`, that is a **vendor/domain allowlist** issue: fix with Leadsy support or remove the tag until resolved (GTM cannot fix CORS).
   - **Supabase Edge “pixel”** — Custom HTML with the same inline loader you had before, **only** if your Supabase project allows your production origin and returns 200/403 is resolved server-side.
3. Use **one** trigger for “marketing” tags where possible, e.g. **Consent Initialization** (Consent Mode v2) + **DOM Ready** or **Window Loaded**, and add **Tag sequencing** so consent / GTM loads before dependent tags.
4. Publish the workspace.

## Reduce Lighthouse noise

- **Deprecated APIs (Attribution Reporting / Fledge)** — reported from third-party scripts (GTM/gtag, ad networks). They do not come from your app code; update tags when vendors ship non-deprecated paths, or accept until browsers finalize APIs.
- **Preconnect “max 4”** — do not add many `preconnect` links for ad domains; GTM will open connections when tags fire. The app no longer injects a batch of marketing preconnects.
- **Cache TTL on third parties** — you cannot set cache headers for `facebook.net`, etc.; ignore for scoring or use fewer/heavier tags.

## Verify

1. [Tag Assistant](https://tagassistant.google.com/) connected to your site.
2. GTM **Preview** mode: confirm tags fire once per page, no duplicate PageView / Ads hits.
3. Chrome DevTools **Network**: filter `googletagmanager.com` — one `gtm.js`, then tags GTM injects.

## Consent (recommended)

Wire your cookie banner to push consent to `dataLayer` before marketing tags fire, and use GTM’s **Consent Mode** templates so Meta/Google tags respect accept/decline. `MarketingScripts` does not replace a CMP; it only defers when the container loads.
