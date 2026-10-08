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

1. Studio → **Service Page (New)** → Create.
2. **URL** tab: use exactly the legacy slug (e.g. `ai-agent`). For a sub-service,
   pick the parent Service Page and use the sub-service slug.
3. **Page Sections** tab → *Add item* → pick sections from the preview grid.
4. **SEO** and **Services Listing** tabs: fill in meta + listing card.
5. Publish. The new page now replaces the legacy one at that URL and on /services.

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
