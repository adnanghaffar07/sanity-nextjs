// Deletes the leftover "services" and "newServices" documents. Their schemas
// were removed and nothing on the website reads them; service pages now use
// the "servicePage" type.
//
//   npx sanity exec scripts/delete-old-services.mjs --with-user-token                 (dry run)
//   npx sanity exec scripts/delete-old-services.mjs --with-user-token -- --apply      (delete)
//
// Both runs write a JSON copy of every document to backups/ first.
// Deleting cannot be undone: also export a full backup before --apply
//   npx sanity dataset export production backup-before-deleting-old-services.tar.gz

import fs from "node:fs";
import path from "node:path";
import sanityCli from "sanity/cli";

const { getCliClient } = sanityCli;
const APPLY = process.argv.slice(2).includes("--apply");
const OLD_TYPES = ["services", "newServices"];
const client = getCliClient({ apiVersion: "2024-03-14" });

// Published and draft documents, plus anything else that still references them.
const docs = await client.fetch(`*[_type in $types]`, { types: OLD_TYPES });
const ids = docs.map((d) => d._id);
const referencedBy = await client.fetch(
  `*[!(_type in $types) && references($ids)]{ _id, _type, "title": coalesce(title, name, _id) }`,
  { types: OLD_TYPES, ids },
);

// Banner title and URL path, whichever variant (general / sub page) the document uses.
const label = (d) => {
  const title = d.serviceTitleBaner ?? d.serviceTitleBanerGeneral ?? d.serviceTitleBanerSub ?? "";
  const url = d.urlPath ?? d.urlPathGeneralPage ?? d.urlPathSubPage;
  return [title, url?.current ?? url].filter(Boolean).join("  /");
};

for (const type of OLD_TYPES) {
  const ofType = docs.filter((d) => d._type === type);
  console.log(`\n${type}: ${ofType.length}`);
  for (const d of ofType) console.log(`  ${d._id}  ${label(d)}`);
}

if (docs.length === 0) {
  console.log("\nNothing to delete.");
  process.exit(0);
}

const backupDir = path.resolve("backups");
fs.mkdirSync(backupDir, { recursive: true });
const backupFile = path.join(backupDir, `old-services-${new Date().toISOString().replace(/[:.]/g, "-")}.json`);
fs.writeFileSync(backupFile, JSON.stringify(docs, null, 2));
console.log(`\nBackup of ${docs.length} documents: ${backupFile}`);

if (referencedBy.length > 0) {
  console.log("\nStopped: these documents still reference the old services, so deleting would break them:");
  for (const r of referencedBy) console.log(`  ${r._type}  ${r._id}  ${r.title}`);
  process.exit(1);
}

if (!APPLY) {
  console.log('\nDry run. Add "-- --apply" to delete these permanently (export a full backup first).');
  process.exit(0);
}

const tx = client.transaction();
for (const id of ids) tx.delete(id);
await tx.commit();
console.log(`\nDeleted ${ids.length} documents.`);
