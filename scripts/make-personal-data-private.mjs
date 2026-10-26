// Moves documents that hold personal data to "private." IDs. The dataset is
// public, but Sanity never serves a document whose ID contains a dot to
// unauthenticated requests, so after this they are readable only with a
// token (Studio, the website's server code). New documents of these types are
// already created with private IDs (privateId() in sanity/lib/server-client.ts).
//
//   formSubmission, user, visitor, resumeSubmission
//
// Each document is copied to "private.<old id>" (same fields and creation
// date) and the old one is deleted. Users also lose the old "token" field.
//
//   npx sanity exec scripts/make-personal-data-private.mjs --with-user-token                 (dry run)
//   npx sanity exec scripts/make-personal-data-private.mjs --with-user-token -- --apply      (move)
//   npx sanity exec scripts/make-personal-data-private.mjs --with-user-token -- --revert backups/<file>.json
//
// Both the dry run and --apply write a JSON copy of every document to backups/
// first. That file contains personal data: keep it private and delete it once
// you no longer need it. Safe to run again: documents already moved are skipped.

import fs from "node:fs";
import path from "node:path";
import sanityCli from "sanity/cli";

const { getCliClient } = sanityCli;
const args = process.argv.slice(2);
const APPLY = args.includes("--apply");
const REVERT_FILE = args.includes("--revert") ? args[args.indexOf("--revert") + 1] : null;
const TYPES = ["formSubmission", "user", "visitor", "resumeSubmission"];
const PREFIX = "private.";
const BATCH = 100;
const client = getCliClient({ apiVersion: "2025-02-19" }).withConfig({ perspective: "raw" });

// Copy of a document for a create mutation: system fields Sanity sets itself are dropped.
const copy = ({ _rev, _updatedAt, ...doc }) => doc;

async function inBatches(items, label, addToTransaction) {
  for (let start = 0; start < items.length; start += BATCH) {
    const tx = client.transaction();
    for (const item of items.slice(start, start + BATCH)) addToTransaction(tx, item);
    await tx.commit({ visibility: "async" });
    console.log(`  ${label}: ${Math.min(start + BATCH, items.length)} / ${items.length}`);
  }
}

if (REVERT_FILE) {
  const originals = JSON.parse(fs.readFileSync(REVERT_FILE, "utf8"));
  console.log(`Restoring ${originals.length} documents from ${REVERT_FILE}`);
  await inBatches(originals, "restored", (tx, doc) => tx.createOrReplace(copy(doc)).delete(PREFIX + doc._id));
  console.log("Done: the documents are back at their original IDs.");
  process.exit(0);
}

// Every published document of these types that hasn't been moved yet (none have drafts).
const docs = [];
for (const type of TYPES) {
  let lastId = "";
  for (;;) {
    const page = await client.fetch(
      `*[_type == $type && _id in path("*") && _id > $lastId] | order(_id asc)[0...2000]`,
      { type, lastId },
    );
    if (page.length === 0) break;
    docs.push(...page);
    lastId = page[page.length - 1]._id;
  }
  console.log(`${type}: ${docs.filter((d) => d._type === type).length} to move`);
}

if (docs.length === 0) {
  console.log("\nNothing to move: all documents already have private IDs.");
  process.exit(0);
}

const referencedBy = await client.fetch(`count(*[!(_type in $types) && references($ids)])`, {
  types: TYPES,
  ids: docs.map((d) => d._id),
});
if (referencedBy > 0) {
  console.log(`\nStopped: ${referencedBy} other documents reference these, and moving would break those links.`);
  process.exit(1);
}

const backupDir = path.resolve("backups");
fs.mkdirSync(backupDir, { recursive: true });
const backupFile = path.join(backupDir, `personal-data-before-private-ids-${new Date().toISOString().replace(/[:.]/g, "-")}.json`);
fs.writeFileSync(backupFile, JSON.stringify(docs));
console.log(`\nBackup of ${docs.length} documents (contains personal data, keep it private): ${backupFile}`);

if (!APPLY) {
  console.log('\nDry run. Add "-- --apply" to move them (export a full backup first:');
  console.log("  npx sanity dataset export production backup-before-private-ids.tar.gz)");
  process.exit(0);
}

console.log("\nMoving:");
await inBatches(docs, "moved", (tx, doc) => {
  const moved = { ...copy(doc), _id: PREFIX + doc._id };
  if (doc._type === "user") delete moved.token;
  tx.createOrReplace(moved).delete(doc._id);
});
console.log(`\nDone: ${docs.length} documents now have private IDs. To undo: --revert ${backupFile}`);
