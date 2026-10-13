// One document type for every form submission on the website (and the
// GoHighLevel Facebook-lead webhook). Written by lib/forms/server; editors only change
// the follow-up status, notes and newsletter flags.

import { defineField, defineType } from "sanity";
import { EnvelopeIcon } from "@sanity/icons";
import { CLIENT_TYPES, FORMS, FORM_IDS } from "../../lib/forms/catalog";

export const FORM_SUBMISSION_TYPE = "formSubmission";

const SUBMISSION_STATUSES = [
  { title: "New", value: "new" },
  { title: "Contacted", value: "contacted" },
  { title: "Qualified", value: "qualified" },
  { title: "Closed", value: "closed" },
  { title: "Spam", value: "spam" },
];

const readOnly = true;

export const formSubmission = defineType({
  name: FORM_SUBMISSION_TYPE,
  title: "Form Submission",
  type: "document",
  icon: EnvelopeIcon,
  groups: [
    { name: "submission", title: "Submission", default: true },
    { name: "source", title: "Where it came from" },
    { name: "crm", title: "GoHighLevel" },
  ],
  fields: [
    defineField({
      name: "status",
      title: "Follow-up status",
      type: "string",
      group: "submission",
      initialValue: "new",
      options: { list: SUBMISSION_STATUSES, layout: "radio", direction: "horizontal" },
    }),
    defineField({
      name: "form",
      title: "Form",
      type: "string",
      group: "submission",
      readOnly,
      options: { list: FORM_IDS.map((id) => ({ title: FORMS[id].title, value: id })) },
    }),
    defineField({ name: "submittedAt", title: "Submitted", type: "datetime", group: "submission", readOnly }),

    defineField({ name: "name", title: "Name", type: "string", group: "submission", readOnly }),
    defineField({ name: "email", title: "Email", type: "string", group: "submission", readOnly }),
    defineField({ name: "phone", title: "Phone", type: "string", group: "submission", readOnly }),
    defineField({ name: "company", title: "Company", type: "string", group: "submission", readOnly }),
    defineField({ name: "lookingFor", title: "Looking for", type: "string", group: "submission", readOnly }),
    defineField({ name: "message", title: "Message", type: "text", rows: 5, group: "submission", readOnly }),
    defineField({
      name: "details",
      title: "Other answers",
      description: "Answers to questions only this form asks (budget, industry, package…).",
      type: "array",
      group: "submission",
      readOnly,
      of: [
        {
          type: "object",
          name: "answer",
          fields: [
            { name: "label", title: "Question", type: "string" },
            { name: "value", title: "Answer", type: "text", rows: 2 },
          ],
          preview: { select: { title: "label", subtitle: "value" } },
        },
      ],
    }),
    defineField({
      name: "notes",
      title: "Internal notes",
      type: "text",
      rows: 3,
      group: "submission",
      description: "For the team. Not sent anywhere.",
    }),

    defineField({
      name: "clientType",
      title: "Interested in",
      type: "string",
      group: "submission",
      description: "Used to pick who receives blog-post emails. Guessed from what they wrote; change it if it's wrong.",
      options: { list: CLIENT_TYPES.map(({ title, value }) => ({ title, value })), layout: "dropdown" },
    }),
    defineField({
      name: "newsletterOptIn",
      title: "Asked for the newsletter",
      type: "boolean",
      group: "submission",
      readOnly,
    }),
    defineField({
      name: "isUnsubscribed",
      title: "Unsubscribed from emails",
      type: "boolean",
      group: "submission",
      initialValue: false,
    }),

    // ── Where it came from ─────────────────────────────────────────────────────
    defineField({
      name: "page",
      title: "Page",
      type: "object",
      group: "source",
      readOnly,
      fields: [
        { name: "url", title: "Submitted on (URL)", type: "url" },
        { name: "title", title: "Page title", type: "string" },
      ],
    }),
    defineField({
      name: "attribution",
      title: "How they found the site",
      type: "object",
      group: "source",
      readOnly,
      fields: [
        { name: "landingPage", title: "First page visited", type: "url" },
        { name: "referrer", title: "Came from (referrer)", type: "url" },
        { name: "utmSource", title: "UTM source", type: "string" },
        { name: "utmMedium", title: "UTM medium", type: "string" },
        { name: "utmCampaign", title: "UTM campaign", type: "string" },
        { name: "utmTerm", title: "UTM term", type: "string" },
        { name: "utmContent", title: "UTM content", type: "string" },
        { name: "gclid", title: "Google Ads click id", type: "string" },
        { name: "fbclid", title: "Facebook click id", type: "string" },
      ],
    }),

    // ── GoHighLevel ────────────────────────────────────────────────────────────
    defineField({
      name: "crm",
      title: "GoHighLevel",
      type: "object",
      group: "crm",
      readOnly,
      fields: [
        {
          name: "status",
          title: "Sync status",
          type: "string",
          options: { list: ["synced", "failed", "skipped"] },
        },
        { name: "contactId", title: "Contact id", type: "string" },
        { name: "error", title: "Error", type: "text", rows: 2 },
        { name: "syncedAt", title: "Synced at", type: "datetime" },
      ],
    }),

    defineField({
      name: "legacy",
      title: "Copied from",
      type: "object",
      hidden: true,
      readOnly,
      fields: [
        { name: "type", type: "string" },
        { name: "id", type: "string" },
        // Duplicate old documents merged into this one (the old forms saved each submission 2–3 times).
        { name: "duplicates", type: "array", of: [{ type: "string" }] },
      ],
    }),
  ],
  orderings: [
    { title: "Newest first", name: "submittedDesc", by: [{ field: "submittedAt", direction: "desc" }] },
  ],
  preview: {
    select: { name: "name", email: "email", form: "form", submittedAt: "submittedAt", status: "status" },
    prepare: ({ name, email, form, submittedAt, status }: Record<string, string | undefined>) => {
      const date = submittedAt ? new Date(submittedAt).toLocaleDateString("en-GB") : "";
      const formTitle = form && form in FORMS ? FORMS[form as keyof typeof FORMS].title : form;
      return {
        title: name || email || "No name",
        subtitle: [status === "new" ? "● New" : null, formTitle, date].filter(Boolean).join(" · "),
      };
    },
  },
});
