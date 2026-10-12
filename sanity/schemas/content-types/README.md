# Blog Post, Case Study, Value Blueprint

These three types replace the old combined `portfolio` type ("Old: Blogs, Case
Studies & Blueprints (legacy)" in Studio), which used one long form with 55 fields
for three different kinds of page.

| New type | Was | Address | Tabs |
|---|---|---|---|
| **Blog Post** | `portfolio` with pageType "blogs" | `/blogs/<address>` | Article · Images · Extra sections · SEO |
| **Case Study** | `portfolio` with no pageType | `/case-studies/<address>` | Top of page · About & overview · Features & technology · Challenges & results · Card · SEO |
| **Value Blueprint** | `portfolio` with pageType "valueBlueprint" | `/value-blueprints/<address>` | Page content · Tools · SEO |

- Each type has **only** the fields its page on the website displays (down to the
  sub-fields of the SEO / social objects), with plain-language names. To add a field,
  first make the page template display it.
- Field names (the stored data) are the same as in `portfolio`, so documents copy
  across exactly and the page designs render both old and new documents.
- Old fields the website never displayed are not copied. They stay on the old
  `portfolio` documents, which are kept as a backup.
- **Case study cards** (the `/case-studies` grid and the home page) now live on each
  case study's **Card** tab instead of the single "CaseStudyInfo" document.
  *Filter tabs* sets the tabs it shows under. The grid keeps the existing order of the
  old CaseStudyInfo list; case studies that were never in it are shown first, newest first.
- **Value blueprints** now have a normal address. Copied ones keep their old id as
  the address, so existing links and the sitemap stay the same.

## Moving the content (one time)

`scripts/split-portfolio.mjs` copies every published `portfolio` document into the
new types. The old documents are **not changed or deleted**.

```bash
node scripts/split-portfolio.mjs
npx sanity login
npx sanity dataset import sanity/seed/portfolio-split.ndjson production --missing
```

Or, with an Editor token: `SANITY_WRITE_TOKEN=… node scripts/split-portfolio.mjs --write`.

Running it again is safe: documents that were already copied are skipped, so edits
made in Studio are kept. Add `--overwrite` (or use `--replace` on import) to copy again
over them.

## How the website chooses

`sanity/lib/content.ts` holds the shared filters. Each page reads the new type first
and falls back to the old `portfolio` document. An old document is ignored once a
new one was copied from it or uses its address. The site works before, during and
after the copy. While some case studies are still only in the old CaseStudyInfo list,
the grid keeps that list's order and replaces cards in place.

## Rolling back

Delete (or unpublish) the new documents. The website falls back to the old ones automatically.

## After the copy

- New content: create **Blog Post / Case Study / Value Blueprint**, not the legacy type.
- Webhooks (sanity.io/manage → API → Webhooks): add `blogPost`, `caseStudy`, `valueBlueprint`
  to the filters of the Google indexing and blog newsletter webhooks. Do this **after**
  the import, so the import itself doesn't trigger them 149 times.
- Once everything has been checked, the legacy documents can be removed from Studio's
  menu. Keep them in the dataset as a backup.
