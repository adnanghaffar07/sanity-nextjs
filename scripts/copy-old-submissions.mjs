// Copies submissions from the old per-form document types into the single
// "formSubmission" type. The old documents are not changed or deleted.
//
//   npx sanity exec scripts/copy-old-submissions.mjs --with-user-token            (dry run: counts only)
//   npx sanity exec scripts/copy-old-submissions.mjs --with-user-token -- --apply
//   add "--show 5" to print 5 merged submissions
//   add "--fix-forms" to re-assign the form (and company) of already-copied submissions
//
// • contactForm        → the form it came from (see websiteForm() below):
//                        contact page, greeting popup, marketing audit, hero form,
//                        or the contact form (footer & home page)
// • fbMetaLead         → "Facebook lead", or "Meta lead (entered manually)" for those
//                        typed in on the former /meta-leads page
// • lead               → "Mobile app: free quote" / "free consultation" (by its source)
// • mobileServiceHero  → "Mobile app: hero form"
// • paymentPropsal     → "Plan registration"
// Meeting bookings (calendlyMeeting) are not form submissions and stay as they are.
// The old forms saved most submissions 2–3 times; copies of the same person
// within 10 minutes are merged into one submission (all old ids are recorded).
// Safe to run again: already-copied submissions are skipped (fixed ids).

import sanityCli from "sanity/cli";

const { getCliClient } = sanityCli;
const APPLY = process.argv.includes("--apply");
const client = getCliClient({ apiVersion: "2024-03-14" });

const CLIENT_TYPES = new Set(["web", "design", "seo", "app", "software", "ecommerce", "shopify", "ai", "ml", "marketing", "other"]);
const MERGE_WINDOW_MS = 10 * 60 * 1000;

const text = (v) => {
  if (v == null) return undefined;
  const s = String(v).trim();
  return s && s !== "—" && s !== "Unknown" ? s : undefined;
};
const url = (v) => {
  const s = text(v);
  if (!s) return undefined;
  try {
    const u = new URL(s);
    return u.protocol.startsWith("http") ? u.toString() : undefined;
  } catch {
    return undefined;
  }
};
const details = (pairs) =>
  Object.entries(pairs)
    .map(([label, value]) => [label, text(Array.isArray(value) ? value.join("\n") : value)])
    .filter(([, value]) => value)
    .map(([label, value], i) => ({ _key: `d${i}`, label, value }));
const clientType = (v) => (CLIENT_TYPES.has(text(v)) ? text(v) : undefined);

const CONTACT_PAGE_INQUIRIES = new Set(["Consulting", "Service Inquiry", "Career", "Others"]);

/**
 * Which website form an old contactForm document came from. The old forms
 * didn't record it, but each one saved its data in a recognisable way.
 * (The footer and home page forms saved identical data: one shared form.)
 */
function websiteForm(d) {
  const message = d.message ?? "";
  const pageUrl = url(d.page_name);
  const path = pageUrl ? new URL(pageUrl).pathname.replace(/\/+$/, "") : undefined;
  if (/^(Newsletter subscription via popup|Popup form submission)/.test(message)) return "greeting-popup";
  if (path === "/contact" || CONTACT_PAGE_INQUIRIES.has(d.clientType) || /\n\nCompany: /.test(message)) return "contact-page";
  if (path?.startsWith("/services/marketing-automation-services")) return "marketing-audit";
  if (path) return "hero-form"; // only the hero form sent a full page URL
  return "contact-form"; // page name only ("Home", "Career", …) or nothing
}

// When duplicates are merged, the most specific form wins (the duplicate
// copies made by /api/lead have no tell-tale signs of their form).
const FORM_PRIORITY = ["contact-page", "greeting-popup", "marketing-audit", "hero-form", "contact-form"];

// Each old type → the new document's fields.
const MAPPERS = {
  contactForm: (d) => {
    // The contact page appended "Company: …" to the message.
    const [, body, company] = (d.message ?? "").match(/^([\s\S]*?)\n\nCompany: (.*)$/) ?? [];
    return {
      form: websiteForm(d),
      name: text(d.name),
      email: text(d.email)?.toLowerCase(),
      phone: text(d.contact_number),
      company: text(company),
      lookingFor: text(d.looking),
      message: text(company ? body : d.message),
      clientType: clientType(d.clientType),
      page: { url: url(d.page_name) },
      details: details({ Page: url(d.page_name) ? undefined : d.page_name }),
      submittedAt: d.submitted_at || d._createdAt,
    };
  },
  fbMetaLead: (d) => ({
    // Only the manual entry page saved a "work" field.
    form: d.work !== undefined ? "meta-lead-manual" : "facebook-lead",
    name: text(d.name),
    email: text(d.email)?.toLowerCase(),
    phone: text(d.phoneNumber),
    company: text(d.companyName),
    lookingFor: text(d.appType) ?? text(d.peopleInterestedIn),
    details: details({
      Campaign: d.campaignName,
      "Lead created": d.creationDate,
      Date: d.date,
      Work: d.work,
      "Interested in": d.peopleInterestedIn,
      "App type": d.appType,
      "App stage": d.appStage,
      "Estimated budget": d.estimatedBudget,
      "Project start": d.projectStartTime,
      "Preferred contact": d.preferredContact,
    }),
    submittedAt: d._createdAt,
  }),
  lead: (d) => ({
    form: /floating|consult/i.test(d.source ?? "") ? "mobile-consultation" : "mobile-quote",
    name: text(d.name),
    email: text(d.email)?.toLowerCase(),
    phone: text(d.phone),
    message: text(d.message),
    clientType: "app",
    details: details({ Source: d.source }),
    submittedAt: d.submittedAt || d._createdAt,
  }),
  mobileServiceHero: (d) => ({
    form: "mobile-service-hero",
    name: text(d.name),
    email: text(d.email)?.toLowerCase(),
    phone: text(d.contact_number),
    lookingFor: text(d.looking),
    message: text(d.message),
    clientType: "app",
    submittedAt: d.submittedAt || d._createdAt,
  }),
  paymentPropsal: (d) => ({
    form: "registration",
    name: text(d.name),
    email: text(d.email)?.toLowerCase(),
    phone: text(d.phone),
    lookingFor: text(d.package),
    message: text(d.details),
    details: details({ Package: d.package }),
    submittedAt: d.createdAt || d._createdAt,
  }),
};

const filled = (doc) => Object.values(doc).filter((v) => v != null && v !== "" && !(Array.isArray(v) && !v.length)).length;

const rank = (form) => (FORM_PRIORITY.includes(form) ? FORM_PRIORITY.indexOf(form) : -1);

/** Merge copies of the same submission: the fullest one wins, gaps filled from the others. */
function merge(group) {
  const sorted = [...group].sort((a, b) => filled(b.doc) - filled(a.doc) || (b.doc.message?.length ?? 0) - (a.doc.message?.length ?? 0));
  const doc = { ...sorted[0].doc };
  for (const { doc: other } of sorted.slice(1)) {
    for (const [key, value] of Object.entries(other)) {
      const current = doc[key];
      const empty = current == null || current === "" || (Array.isArray(current) && !current.length) || (key === "page" && !current?.url);
      if (empty && value != null) doc[key] = value;
      if (key === "clientType" && (current === "other" || !current) && value && value !== "other") doc[key] = value;
    }
  }
  doc.submittedAt = group.map((g) => g.doc.submittedAt).sort()[0];
  doc.form = group.map((g) => g.doc.form).sort((a, b) => rank(a) - rank(b))[0];
  return { primary: sorted[0], duplicates: sorted.slice(1), doc };
}

function groupDuplicates(items) {
  const byPerson = new Map();
  for (const item of items) {
    const who = `${item.type}|${(item.doc.email ?? item.doc.phone ?? item.id).toLowerCase()}|${(item.doc.name ?? "").toLowerCase()}`;
    byPerson.set(who, [...(byPerson.get(who) ?? []), item]);
  }
  const groups = [];
  for (const list of byPerson.values()) {
    list.sort((a, b) => Date.parse(a.doc.submittedAt) - Date.parse(b.doc.submittedAt));
    let current = [];
    for (const item of list) {
      const last = current[current.length - 1];
      if (last && Date.parse(item.doc.submittedAt) - Date.parse(last.doc.submittedAt) > MERGE_WINDOW_MS) {
        groups.push(current);
        current = [];
      }
      current.push(item);
    }
    if (current.length) groups.push(current);
  }
  return groups;
}

const types = Object.keys(MAPPERS);
const old = await client.fetch(`*[_type in $types && !(_id in path("drafts.**"))]`, { types });
const items = old.map((d) => ({ id: d._id, type: d._type, isUnsubscribed: d.isUnsubscribed === true, doc: MAPPERS[d._type](d) }));
const groups = groupDuplicates(items);

const existingDocs = await client.fetch(`*[_type == "formSubmission" && defined(legacy.id)]{ _id, form, company, message }`);
const existing = new Map(existingDocs.map((d) => [d._id, d]));
const toCreate = [];
const toFix = [];
for (const group of groups) {
  const { primary, duplicates, doc } = merge(group);
  const _id = `formSubmission-legacy-${primary.id}`;
  const current = existing.get(_id);
  if (current) {
    const changes = Object.fromEntries(
      ["form", "company", "message"].filter((key) => doc[key] !== undefined && doc[key] !== current[key]).map((key) => [key, doc[key]])
    );
    if (Object.keys(changes).length) toFix.push({ _id, changes });
    continue;
  }
  toCreate.push({
    _id,
    _type: "formSubmission",
    ...doc,
    isUnsubscribed: group.some((g) => g.isUnsubscribed),
    legacy: { type: primary.type, id: primary.id, ...(duplicates.length ? { duplicates: duplicates.map((d) => d.id) } : {}) },
  });
}

const perForm = {};
for (const doc of toCreate) perForm[doc.form] = (perForm[doc.form] ?? 0) + 1;
console.table(perForm);
console.log(`Old documents: ${items.length} → submissions: ${groups.length} (duplicates merged: ${items.length - groups.length}).`);
console.log(`Already copied: ${groups.length - toCreate.length}. To create now: ${toCreate.length}.`);

if (process.argv.includes("--fix-forms")) {
  const moves = {};
  for (const { changes } of toFix) if (changes.form) moves[changes.form] = (moves[changes.form] ?? 0) + 1;
  console.log(`
Already-copied submissions to update: ${toFix.length}. New form for those that move:`);
  console.table(moves);
  if (APPLY) {
    for (let i = 0; i < toFix.length; i += 100) {
      const tx = client.transaction();
      toFix.slice(i, i + 100).forEach(({ _id, changes }) => tx.patch(_id, (patch) => patch.set(changes)));
      await tx.commit({ visibility: "async" });
    }
    console.log(`Updated ${toFix.length} submissions.`);
  }
}

const showIndex = process.argv.indexOf("--show");
if (showIndex > -1) {
  const merged = toCreate.filter((d) => d.legacy.duplicates?.length).slice(0, Number(process.argv[showIndex + 1]) || 3);
  console.log(JSON.stringify(merged, null, 2));
}

if (!APPLY) {
  console.log('\nDry run. Add "-- --apply" to create them.');
} else {
  for (let i = 0; i < toCreate.length; i += 100) {
    const tx = client.transaction();
    toCreate.slice(i, i + 100).forEach((doc) => tx.createIfNotExists(doc));
    await tx.commit({ visibility: "async" });
    console.log(`  ${Math.min(i + 100, toCreate.length)}/${toCreate.length}`);
  }
  console.log("Done. The old documents are unchanged.");
}
