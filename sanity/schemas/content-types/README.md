# Blog Post, Case Study, Value Blueprint

| Type | Address | Tabs |
|---|---|---|
| **Blog Post** | `/blogs/<address>` | Article · Images · Extra sections · SEO |
| **Case Study** | `/case-studies/<address>` | Top of page · About & overview · Features & technology · Challenges & results · Card · SEO |
| **Value Blueprint** | `/value-blueprints/<address>` | Page content · Card · SEO |
| **Case Study Order** (one document) | — | Card order of the case study grid |

- Each type has **only** the fields its page on the website displays (down to the
  sub-fields of the SEO / social objects), with plain-language names. To add a field,
  first make the page template display it.
- Field definitions shared between the types live in `shared-fields.ts`; `reuse.ts`
  picks from them and sets the labels, tabs and help text per type. The field names
  are those of the original combined "portfolio" type the content was copied from.
- **Case study cards** (the `/case-studies` grid and the home page) come from each
  case study's **Card** tab. *Filter tabs* sets which tabs show it; turning the card
  off hides it. The order is set by dragging in **Case Study Order → Card order**;
  case studies not in that list are shown first, newest first.
- **Value blueprints** that existed before kept their document id as their address,
  so old links stay the same; `legacyId` keeps them working if the address changes.

Queries used by the website are in `sanity/lib/content.ts`.

## History

These types replaced the old combined `portfolio` type (55 fields for three kinds of
page) and the unused `blogSub` type. The content was copied across and the old
documents deleted with one-time scripts (see git history).
