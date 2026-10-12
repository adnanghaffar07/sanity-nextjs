# Service Page (New): section-based page builder

New service pages are built from reusable **sections** in Sanity Studio.
The legacy `logicalServices` / `subService` schemas and their data are **not
changed**. Legacy pages keep working, and services are migrated one by one.

## How a page is chosen

`/services/<slug>` and `/services/<parent>/<slug>`:

1. If a **published** `servicePage` exists for that URL, it is shown.
2. Otherwise the legacy page is shown (unchanged behaviour).

Unpublishing or deleting the new page falls back to the legacy page.

## Migrating a legacy service

Services and sub-services can be moved **one at a time, in any order**.

### Main service (`/services/<slug>`)

1. Studio → **Service Page (New)** → Create.
2. **Page Address** tab: use exactly the legacy address (e.g. `ai-agent`). Leave *Main service* empty.
3. **Page Content** tab → *Add item* → pick sections from the preview grid.
   If the legacy page had sub-services, add a **Sub-Services** section — it lists
   them automatically (moved and not-yet-moved ones).
4. **Google & Sharing** and **Card on Services Page** tabs: fill in.
5. Publish. The new page replaces the legacy one at that address and on /services
   (same position in the list).

### Sub-service (`/services/<main>/<slug>`)

1. Create a Service Page as above, using the legacy sub-service address (e.g. `manual-testing`).
2. **Page Address** tab → *Main service*: pick its main service — **new or old**
   (e.g. the legacy "QA Testing" service). The address stays `/services/qa-testing-services/manual-testing`.
3. Fill in the **Card** tab: it's used for the card in the main service's Sub-Services section.
4. Publish. It replaces the legacy sub-service at the same address, and its card
   replaces the legacy card in the main page's Sub-Services section.

Moving the main service later doesn't affect already-moved sub-services (the address
is the same either way).

### Rolling back

Unpublish (or delete) the new page and the legacy page is shown again at the same address.

## Interlinking

- Every descriptive text field is rich text with **Internal link** (pick any new
  or legacy service page, or type a site path like `/case-studies/heyou`) and
  **External link** annotations.
- Buttons and cards use the `spLink` type (same options).
- References are resolved at render time, so links follow pages if their URL changes.

## Files

| Where | What |
|---|---|
| `sanity/schemas/service-page/` | Schema: `servicePage`, shared types, 17 section types |
| `app/(site)/components/service-sections/` | Renderer + one component per section |
| `app/(site)/services/[service]/…/page.tsx` | Routing: new page first, legacy fallback |
| `public/section-previews/*.png` | Thumbnails shown in the Studio insert menu |
| `app/(site)/service-page-preview/` | **Dev-only** full-page preview WITH header/footer: `/service-page-preview` (all sample sections) or `/service-page-preview/<seed-name>` |
| `app/service-sections-preview/` | **Dev-only** bare preview WITHOUT header/footer, used to capture the Studio thumbnails |
| `sanity/seed/` | Test documents, e.g. `superintelligence.servicePage.json` (+ its generator script) |

## Adding a new section type

1. Add the schema in `sections.ts` (and to `SECTION_TYPES` + an insert-menu group in `servicePage.ts`).
2. Add the component and register it in `ServicePageRenderer.tsx`.
3. Add sample content in `sample-data.ts`.
4. Regenerate its thumbnail (dev server running):

```bash
"/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe" --headless=new --hide-scrollbars --window-size=1280,720 --force-device-scale-factor=0.5 --virtual-time-budget=10000 --screenshot="public/section-previews/<type>.png" "http://localhost:3000/service-sections-preview/<type>"
```
