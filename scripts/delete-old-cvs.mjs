// Deletes the job applications archive ("resumeSubmission", June 2025 to April
// 2026) and the CV files attached to them. The application form was removed,
// and CV files can't be hidden in a public dataset: anyone listing the
// project's files could download them.
//
//   npx sanity exec scripts/delete-old-cvs.mjs --with-user-token                 (dry run)
//   npx sanity exec scripts/delete-old-cvs.mjs --with-user-token -- --apply      (delete)
//
// Deleting the files cannot be undone. Before --apply, export a full backup;
// the export includes the files themselves:
//   npx sanity dataset export production backup-before-deleting-cvs.tar.gz
// Both runs also write the application documents to backups/ (they name the
// CV files, so keep that JSON private too).
//
// A file is only deleted together with every application that uses it, and
// never if anything else uses it. Safe to run again after an interruption.

import fs from "node:fs";
import path from "node:path";
import sanityCli from "sanity/cli";

const { getCliClient } = sanityCli;
const APPLY = process.argv.slice(2).includes("--apply");
const TYPE = "resumeSubmission";
const BATCH = 100;
const client = getCliClient({ apiVersion: "2025-02-19" }).withConfig({ perspective: "raw" });

// All applications, whatever their ID (original, "private." or draft).
const docs = await client.fetch(`*[_type == $type]{ ..., "fileName": file.asset->originalFilename, "fileSize": file.asset->size }`, {
  type: TYPE,
});
const fileIds = [...new Set(docs.map((d) => d.file?.asset?._ref).filter(Boolean))];

// Files that something other than an application also uses are kept.
const otherUsers = fileIds.length
  ? await client.fetch(`*[_type != $type && references($ids)]`, { type: TYPE, ids: fileIds })
  : [];
const usedElsewhere = new Set(fileIds.filter((id) => otherUsers.some((doc) => JSON.stringify(doc).includes(`"${id}"`))));
const filesToDelete = fileIds.filter((id) => !usedElsewhere.has(id));

const totalSize = docs.reduce((sum, d) => sum + (d.fileSize ?? 0), 0);
const dates = docs.map((d) => d._createdAt).sort();
console.log(`Job applications: ${docs.length}${docs.length ? ` (${dates[0].slice(0, 10)} to ${dates.at(-1).slice(0, 10)})` : ""}`);
console.log(`CV files: ${filesToDelete.length} to delete, ${(totalSize / 1024 / 1024).toFixed(0)} MB`);
if (usedElsewhere.size) console.log(`CV files kept because other documents use them: ${usedElsewhere.size}`);

if (docs.length === 0) {
  console.log("\nNothing to delete.");
  process.exit(0);
}

const backupDir = path.resolve("backups");
fs.mkdirSync(backupDir, { recursive: true });
const backupFile = path.join(backupDir, `job-applications-${new Date().toISOString().replace(/[:.]/g, "-")}.json`);
fs.writeFileSync(backupFile, JSON.stringify(docs, null, 2));
console.log(`\nBackup of ${docs.length} application documents (not the files): ${backupFile}`);

if (!APPLY) {
  console.log('\nDry run. Export a full backup (it includes the files), then add "-- --apply" to delete permanently:');
  console.log("  npx sanity dataset export production backup-before-deleting-cvs.tar.gz");
  process.exit(0);
}

// Each unit is one file plus every application using it (or one application
// without a file), deleted in the same transaction so no file is left orphaned.
const byFile = new Map();
const units = [];
for (const doc of docs) {
  const fileId = doc.file?.asset?._ref;
  if (!fileId) units.push({ ids: [doc._id] });
  else if (byFile.has(fileId)) byFile.get(fileId).ids.push(doc._id);
  else {
    const unit = { ids: [doc._id], fileId: usedElsewhere.has(fileId) ? null : fileId };
    byFile.set(fileId, unit);
    units.push(unit);
  }
}

console.log("\nDeleting:");
let deletedDocs = 0;
let deletedFiles = 0;
for (let start = 0; start < units.length; start += BATCH) {
  const batch = units.slice(start, start + BATCH);
  const tx = client.transaction();
  for (const unit of batch) {
    unit.ids.forEach((id) => tx.delete(id));
    if (unit.fileId) tx.delete(unit.fileId);
  }
  await tx.commit({ visibility: "async" });
  deletedDocs += batch.reduce((sum, unit) => sum + unit.ids.length, 0);
  deletedFiles += batch.filter((unit) => unit.fileId).length;
  console.log(`  ${deletedDocs} / ${docs.length} applications, ${deletedFiles} / ${filesToDelete.length} files`);
}
console.log(`\nDone: deleted ${deletedDocs} applications and ${deletedFiles} CV files.`);
