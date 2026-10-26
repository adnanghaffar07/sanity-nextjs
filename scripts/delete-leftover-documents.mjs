// Deletes leftover documents whose types no longer have a schema, so Studio
// shows them as "unknown type" and nothing on the website reads them:
//   Expertise, Services, cpyrighttext, nav  (2024 starter content)
//   testimonail                             (2024, misspelled old testimonial type)
//   metaLead                                (May 2025 Meta leads, now stored as "formSubmission")
//
//   npx sanity exec scripts/delete-leftover-documents.mjs --with-user-token                 (dry run)
//   npx sanity exec scripts/delete-leftover-documents.mjs --with-user-token -- --apply      (delete)
//
// Both runs write a JSON copy of every document to backups/ first. The metaLead
// documents hold people's contact details, so keep that file private.
// Deleting cannot be undone: also export a full backup before --apply
//   npx sanity dataset export production backup-before-deleting-leftovers.tar.gz

import fs from "node:fs";
import path from "node:path";
import sanityCli from "sanity/cli";

const { getCliClient } = sanityCli;
const APPLY = process.argv.slice(2).includes("--apply");
const LEFTOVER_TYPES = ["Expertise", "Services", "cpyrighttext", "nav", "testimonail", "metaLead"];
const client = getCliClient({ apiVersion: "2025-02-19" }).withConfig({ perspective: "raw" });

// Published and draft documents, plus anything else that still references them.
const docs = await client.fetch(`*[_type in $types] | order(_type asc, _createdAt asc)`, { types: LEFTOVER_TYPES });
const ids = docs.map((d) => d._id);
const referencedBy = await client.fetch(
  `*[!(_type in $types) && references($ids)]{ _id, _type, "title": coalesce(title, name, _id) }`,
  { types: LEFTOVER_TYPES, ids },
);

for (const type of LEFTOVER_TYPES) {
  const ofType = docs.filter((d) => d._type === type);
  console.log(`\n${type}: ${ofType.length}`);
  for (const d of ofType) console.log(`  ${d._id}  created ${d._createdAt.slice(0, 10)}`);
}

if (docs.length === 0) {
  console.log("\nNothing to delete.");
  process.exit(0);
}

const backupDir = path.resolve("backups");
fs.mkdirSync(backupDir, { recursive: true });
const backupFile = path.join(backupDir, `leftover-documents-${new Date().toISOString().replace(/[:.]/g, "-")}.json`);
fs.writeFileSync(backupFile, JSON.stringify(docs, null, 2));
console.log(`\nBackup of ${docs.length} documents: ${backupFile}`);

if (referencedBy.length > 0) {
  console.log("\nStopped: these documents still reference the leftovers, so deleting would break them:");
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
