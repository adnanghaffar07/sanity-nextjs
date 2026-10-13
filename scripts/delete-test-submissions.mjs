// Deletes test form submissions: any submission whose name or email contains
// "ayesha" or "codeautomation" (the team's own test entries).
//
//   npx sanity exec scripts/delete-test-submissions.mjs --with-user-token            (dry run: lists them)
//   npx sanity exec scripts/delete-test-submissions.mjs --with-user-token -- --apply
//
// Deleting cannot be undone: export a backup first
//   npx sanity dataset export production backup-before-deleting-tests.tar.gz

import sanityCli from "sanity/cli";

const { getCliClient } = sanityCli;
const APPLY = process.argv.includes("--apply");
const client = getCliClient({ apiVersion: "2024-03-14" });

const TYPES = ["contactForm", "fbMetaLead", "lead", "mobileServiceHero", "paymentPropsal", "formSubmission"];
const MATCH = ["ayesha", "codeautomation"];

const docs = await client.fetch(
  `*[_type in $types && (
    count($words[lower(^.name) match "*" + @ + "*"]) > 0 ||
    count($words[lower(^.email) match "*" + @ + "*"]) > 0
  )]{ _id, _type, name, email, "at": coalesce(submittedAt, submitted_at, createdAt, _createdAt) } | order(_type asc, at desc)`,
  { types: TYPES, words: MATCH }
);

const perType = {};
for (const doc of docs) {
  perType[doc._type] = (perType[doc._type] ?? 0) + 1;
  console.log([doc._type, doc.name ?? "", doc.email ?? "", String(doc.at).slice(0, 10)].join(" | "));
}
console.log("\nPer type:", perType, `\nTotal: ${docs.length}`);

if (!APPLY) {
  console.log('\nDry run. Add "-- --apply" to delete these permanently (export a backup first).');
} else {
  for (let i = 0; i < docs.length; i += 100) {
    const tx = client.transaction();
    docs.slice(i, i + 100).forEach((doc) => tx.delete(doc._id));
    await tx.commit();
  }
  console.log(`Deleted ${docs.length} test submissions.`);
}
