// Removes fields from the Service Summary document that the website never shows
// and that are no longer in the schema: unused images, the per-card
// "Key Benefits:" label (the page has its own), and the old social card
// settings (Next.js never used them; two were saved under misspelled names).
//
//   npx sanity exec scripts/cleanup-service-summary.mjs --with-user-token                  (dry run)
//   npx sanity exec scripts/cleanup-service-summary.mjs --with-user-token -- --apply       (remove)
//
// Both runs save a JSON copy of the document to backups/ first.

import fs from "node:fs";
import path from "node:path";
import sanityCli from "sanity/cli";

const { getCliClient } = sanityCli;
const APPLY = process.argv.slice(2).includes("--apply");
const client = getCliClient({ apiVersion: "2024-03-14" });

const UNUSED_PATHS = [
  "introductionSection.introImage",
  "projectManagement.techImage",
  "projectCycleSection.projectCycleImg",
  "callToActionSection.callToActionImg",
  "specialOffersSection.offerImg",
  "facebool",
  "twitterhMeta",
  "facebookCards",
  "twitterCards",
  "linkedInCards",
  "pinterestCards",
  "whatsappCards",
  "telegramCards",
];

const get = (obj, dotted) => dotted.split(".").reduce((o, k) => o?.[k], obj);

const docs = await client.fetch(`*[_type == "serviceSummary"]`);
if (docs.length === 0) process.exit(console.log("No Service Summary document.") ?? 0);

const backupDir = path.resolve("backups");
fs.mkdirSync(backupDir, { recursive: true });
const backupFile = path.join(backupDir, `service-summary-${new Date().toISOString().replace(/[:.]/g, "-")}.json`);
fs.writeFileSync(backupFile, JSON.stringify(docs, null, 2));
console.log(`Backup: ${backupFile}\n`);

const tx = client.transaction();
let total = 0;
for (const doc of docs) {
  const paths = UNUSED_PATHS.filter((p) => get(doc, p) !== undefined);
  for (const option of doc.detailSection?.detailInd ?? []) {
    if (option.benefits !== undefined && option._key) paths.push(`detailSection.detailInd[_key=="${option._key}"].benefits`);
  }
  console.log(`${doc._id}: ${paths.length ? paths.join("\n  ") : "nothing to remove"}`);
  if (paths.length) tx.patch(doc._id, (p) => p.unset(paths));
  total += paths.length;
}

if (!APPLY || total === 0) {
  console.log(total ? '\nDry run. Add "-- --apply" to remove these fields.' : "");
  process.exit(0);
}
await tx.commit();
console.log(`\nRemoved ${total} fields.`);
