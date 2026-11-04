// Launches /services/ai-agent-development-services in place of the old
// /services/ai-agent page (which now redirects there, see next.config.js):
//   1. Makes the new page public: visible to Google, with a card on /services.
//   2. Points every link to the old address in Sanity content (blog posts,
//      the Adnan Ghaffar page, ...) at the new one, in published documents and
//      in unpublished drafts, so publishing a draft doesn't bring the old link back.
//
//   npx sanity exec scripts/launch-ai-agent-page.mjs --with-user-token                  (dry run)
//   npx sanity exec scripts/launch-ai-agent-page.mjs --with-user-token -- --apply       (save)
//
// Both runs save a JSON copy of every document they would change to backups/ first.

import fs from "node:fs";
import path from "node:path";
import sanityCli from "sanity/cli";

const { getCliClient } = sanityCli;
const APPLY = process.argv.slice(2).includes("--apply");
const client = getCliClient({ apiVersion: "2024-03-14" });

const NEW_PAGE_ID = "servicePage-ai-agent-development-services";
const OLD_LINK = /(\/services\/ai-agent)(?![-\w])/g;
const NEW_PATH = "/services/ai-agent-development-services";

const docs = await client.fetch(
  `*[!(_type match "sanity.*") && !(_type in ["formSubmission", "resumeSubmission", "visitor", "user"])]`
);

// Every string field holding the old address, as a Sanity patch path.
const linkFields = (doc) => {
  const found = [];
  const walk = (value, at) => {
    if (typeof value === "string") {
      if (OLD_LINK.test(value)) found.push({ at, value, next: value.replace(OLD_LINK, NEW_PATH) });
      OLD_LINK.lastIndex = 0;
    } else if (Array.isArray(value)) {
      value.forEach((item, i) => walk(item, `${at}[${item?._key ? `_key=="${item._key}"` : i}]`));
    } else if (value && typeof value === "object") {
      for (const [key, item] of Object.entries(value)) if (!key.startsWith("_")) walk(item, at ? `${at}.${key}` : key);
    }
  };
  walk(doc, "");
  return found;
};

const changes = [];
for (const doc of docs) {
  const set = {};
  for (const { at, value, next } of linkFields(doc)) {
    set[at] = next;
    console.log(`link  ${doc._id}  ${at}\n      ${value}  ->  ${next}`);
  }
  if (doc._id === NEW_PAGE_ID || doc._id === `drafts.${NEW_PAGE_ID}`) {
    if (doc.seo?.noIndex !== false) set["seo.noIndex"] = false;
    if (doc.listing?.show !== true) set["listing.show"] = true;
    console.log(`page  ${doc._id}  seo.noIndex: ${doc.seo?.noIndex} -> false, listing.show: ${doc.listing?.show} -> true`);
  }
  if (Object.keys(set).length) changes.push({ doc, set });
}

const linkCount = changes.reduce((n, c) => n + Object.keys(c.set).filter((k) => !k.startsWith("seo.") && !k.startsWith("listing.")).length, 0);
console.log(`\n${changes.length} documents to change, ${linkCount} links.`);

const stamp = new Date().toISOString().replace(/[:.]/g, "-");
const backup = path.join("backups", `launch-ai-agent-page-${stamp}.json`);
fs.mkdirSync("backups", { recursive: true });
fs.writeFileSync(backup, JSON.stringify(changes.map((c) => c.doc), null, 2));
console.log(`Backup of those documents: ${backup}`);

if (!APPLY) {
  console.log("\nDry run. Add -- --apply to save.");
} else if (changes.length) {
  // ifRevisionId: skip (fail) if someone edited the document since it was read.
  const tx = client.transaction();
  for (const { doc, set } of changes) tx.patch(doc._id, (p) => p.ifRevisionId(doc._rev).set(set));
  await tx.commit({ visibility: "async" });
  console.log("Saved.");
}
