# Website forms

Every form on the site sends to **one endpoint**, and every submission is stored as
**one Sanity type**, "Form Submission" (Studio → *Form submissions*, with lists per
form and a "New (not followed up)" list).

```
form component ──submitForm()──▶ POST /api/forms ──▶ 1. validate (+ Turnstile captcha)
  (+ page URL, title, referrer,                       2. save "formSubmission" in Sanity
   first page, UTM tags, click ids)                   3. GoHighLevel · team email · auto-reply
                                                      4. store the GoHighLevel result on the document
```

Each step runs **once** per submission (the old forms created 2–3 records, contacts and emails).

| File | What |
|---|---|
| `catalog.ts` | List of forms (id, title, audience) and the service-interest guess. Shared with Studio. |
| `client/submitForm.ts` | What form components call. Adds page + attribution, pushes the GTM event for forms that did before. |
| `client/attribution.ts` | Remembers UTM tags / referrer / first page from the visit (`AttributionCapture` in the site layout). |
| `server/definitions.ts` | Per form: required fields, captcha, GoHighLevel tags, auto-reply, extra integrations. |
| `server/process.ts` | The pipeline above. `recordSubmission()` is also used by the GoHighLevel Facebook-lead webhook. |
| `server/ghl.ts` | GoHighLevel sync (v2 upsert; v1 fallback). |
| `server/emails.ts` | Team notification + the auto-reply texts. |
| `server/audience.ts` | Blog-post email recipients and unsubscribe. |
| `server/turnstile.ts`, `server/phone.ts` | Captcha check and phone formatting for GoHighLevel. |

## Adding a form

1. Add an id + title to `FORMS` in `catalog.ts`.
2. Add its settings to `FORM_DEFINITIONS` in `server/definitions.ts`.
3. In the component: `await submitForm("my-form", { fields: { name, email, phone, message }, details: { Budget: budget }, captchaToken })`.
   Standard fields go in `fields`; anything else in `details` (shown as "Other answers").

No new Sanity schema is needed.

## GoHighLevel

- **v2 (recommended):** set `GHL_PRIVATE_TOKEN` (Settings → Private Integrations; scopes: contacts write, contact tags, contact notes, locations/customFields read) and `GHL_LOCATION_ID`.
  Contacts are upserted (no duplicates), tags are added, and the full submission is added as a note.
- **Fallback:** with only `GHL_API_KEY` the old v1 API is used, as before.
- Source is `website`; tags are `website lead` (or `ai revenue engine lead`) plus one per form.
- Values also go into custom fields **if a field with that key exists** in GoHighLevel:
  `form_name, what_are_you_looking_for, inquiry_type, message, page_url, page_title, landing_page, referrer,
  utm_source, utm_medium, utm_campaign, utm_term, utm_content, gclid, fbclid, phone_raw`.
  Create the ones you want under Settings → Custom Fields (Contact) with exactly these keys.

## Testing locally

`FORMS_DRY_RUN=1` logs the Sanity document, GoHighLevel payload and email subjects instead of saving or sending.

## History

Submissions used to be spread over per-form types (`contactForm`, `fbMetaLead`, `lead`,
`mobileServiceHero`, `paymentPropsal`), each form posting to its own route. They were copied into
Form Submission (duplicates merged) and deleted; the one-off migration scripts are in git history.
`scripts/delete-test-submissions.mjs` removes the team's own test entries after testing.
