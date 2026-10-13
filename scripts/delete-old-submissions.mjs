// Deletes the old per-form submission documents (contactForm, fbMetaLead, lead,
// mobileServiceHero, paymentPropsal) once they have been copied into
// "formSubmission".
//
// Run AFTER the code that writes to formSubmission is deployed:
//   1. npx sanity exec scripts/copy-old-submissions.mjs --with-user-token -- --apply
//      (copies anything the old site saved before the deploy)
//   2. npx sanity dataset export production backup-before-deleting-old-submissions.tar.gz
//   3. npx sanity exec scripts/delete-old-submissions.mjs --with-user-token            (dry run)
//   4. npx sanity exec scripts/delete-old-submissions.mjs --with-user-token -- --apply
//
// It refuses to delete anything if even one old document hasn't been copied.

import sanityCli from "sanity/cli";

const { getCliClient } = sanityCli;
const APPLY = process.argv.includes("--apply");
const client = getCliClient({ apiVersion: "2024-03-14" });

const OLD_TYPES = ["contactForm", "fbMetaLead", "lead", "mobileServiceHero", "paymentPropsal"];

const { old, copied } = await client.fetch(
  `{
    "old": *[_type in $types]{ _id, _type },
    "copied": *[_type == "formSubmission" && defined(legacy.id)]{ "ids": [legacy.id] + coalesce(legacy.duplicates, []) }.ids[]
  }`,
  { types: OLD_TYPES }
);

const copiedIds = new Set(copied);
const baseId = (id) => id.replace(/^drafts\./, "");
const notCopied = old.filter((doc) => !copiedIds.has(baseId(doc._id)));

const perType = {};
for (const doc of old) perType[doc._type] = (perType[doc._type] ?? 0) + 1;
console.log("Old documents:", perType, `total ${old.length}`);

if (notCopied.length) {
  console.error(`\n${notCopied.length} old documents are not in Form Submissions yet, so nothing was deleted.`);
  console.error("Run scripts/copy-old-submissions.mjs with --apply first, then run this again.");
  process.exit(1);
}

if (!APPLY) {
  console.log('\nAll of them are copied. Dry run: add "-- --apply" to delete them permanently (export a backup first).');
} else {
  for (let i = 0; i < old.length; i += 100) {
    const tx = client.transaction();
    old.slice(i, i + 100).forEach((doc) => tx.delete(doc._id));
    await tx.commit();
  }
  console.log(`Deleted ${old.length} old documents. Form Submissions are unchanged.`);
}
