# codeautomation.ai

The CodeAutomation website: a Next.js 14 (App Router) site with its content in
Sanity. Sanity Studio is part of the same app at `/studio`. Deployed on Vercel.

## Getting started

Requires Node 24.

```bash
npm install
npm run dev        # http://localhost:3000, Studio at http://localhost:3000/studio
npm run build      # production build (fails if Sanity can't be reached, so a page is never shipped empty)
npm run lint
```

Create `.env.local` with the variables below (ask a teammate for the values).

## Project structure

```
app/
  (site)/            public website pages (the "(site)" folder is not part of the URL;
                     it gives these pages the site header and footer, which /studio must not get)
  studio/            Sanity Studio, mounted at /studio
  api/               API routes: forms, auth, webhooks, revalidation, tracking
  admin/, meta-leads/  internal tools for the team
components/          React components, grouped by page or area (blog, services, layout, ui, ...)
lib/
  forms/             every website form: field definitions, client helper, server handling (see lib/forms/README.md)
  security/          request checks (same-site, rate limit) and password hashing
sanity/
  env.ts             project id, dataset, API version
  schemas/           content types edited in Studio
  structure.ts       Studio sidebar
  lib/               data loaders the pages use (one file per area), clients and image helpers
scripts/             one-off content migration and cleanup scripts (each has a dry run)
public/              static images and files
```

Conventions:

- Pages are server components that load their content through a typed loader in `sanity/lib`
  and pass it to components. Client components are used only where something is interactive.
- Import with the `@/` alias, e.g. `@/components/blog/BlogBody`, `@/sanity/lib/blog`.
- Sanity images are rendered with `components/ui/SanityImage`, which uses the Sanity CDN for resizing.

## Content updates

Pages are cached and refreshed every 5 minutes. Publishing in Studio refreshes them
immediately through the Sanity webhook to `/api/revalidate`; its filter and the list of
document types are documented at the top of `app/api/revalidate/route.ts`.

## Environment variables

| Variable | Used for |
| --- | --- |
| `SANITY_API_TOKEN` | Server-side Sanity reads and writes (form submissions, users) |
| `SANITY_REVALIDATE_SECRET` | Signature check for the Sanity publish webhook |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET_KEY` | Cloudflare Turnstile captcha on forms |
| `GHL_API_KEY` | GoHighLevel CRM sync for form submissions |
| `EMAIL_USER`, `EMAIL_PASS` | Team notification and auto-reply emails |
| `JWT_SECRET`, `GOOGLE_CLIENT_ID` | Pricing page sign-in |
| `GOOGLE_CLIENT_EMAIL`, `GOOGLE_PRIVATE_KEY` | Google Indexing API |
| `CAL_API_KEY`, `CAL_WEBHOOK_SECRET` | Cal.com booking webhook |
| `VISITOR_DASHBOARD_PASSWORD` | `/admin/visitors` |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager |
| `FORMS_DRY_RUN` | Set to `1` locally to test forms without sending emails or CRM updates |

## Further reading

- `lib/forms/README.md`: how forms are validated, stored and sent on
- `sanity/schemas/service-page/README.md`: the section-based service page builder
