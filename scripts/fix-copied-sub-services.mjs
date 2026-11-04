// Removes the AI sub-services (RAG chatbot, Google Call Centre AI, LlamaIndex)
// from five services that were made by copying "AI Software Development
// Services" and kept its sub-service list: Datadog, Sanity.io, Odoo, Kajabi and
// Snowflake. AI Software Development Services keeps them. Old addresses such as
// /services/kajabi-development-services/rag-chatbot-services then redirect to
// /services/ai-software-development-services/rag-chatbot-services (see
// app/(site)/services/[service]/[slug]/page.tsx).
//
//   npx sanity exec scripts/fix-copied-sub-services.mjs --with-user-token                  (dry run)
//   npx sanity exec scripts/fix-copied-sub-services.mjs --with-user-token -- --apply       (save)
//
// Both runs save a JSON copy of every document they would change to backups/ first.

import fs from "node:fs";
import path from "node:path";
import sanityCli from "sanity/cli";

const { getCliClient } = sanityCli;
const APPLY = process.argv.slice(2).includes("--apply");
const client = getCliClient({ apiVersion: "2024-03-14" });

const SUB_PATHS = ["rag-chatbot-services", "google-call-centre-AI", "llamalndex"];
const WRONG_PARENTS = [
  "datadog-monitoring-solutions",
  "sanity-io-cms-integration-custom-solutions",
  "odoo-erp-development-services",
  "kajabi-development-services",
  "custom-snowflake-ai-data-cloud-services",
];

const { subs, services } = await client.fetch(
  `{
    "subs": *[_type == "subService" && urlPathSub in $subPaths]{ _id, urlPathSub },
    "services": *[_type == "logicalServices" && urlPath in $parents]{ _id, _rev, urlPath, subServices }
  }`,
  { subPaths: SUB_PATHS, parents: WRONG_PARENTS }
);

// Match published and draft ids of the sub-services.
const subIds = new Set(subs.map((s) => s._id.replace(/^drafts\./, "")));
const nameOf = Object.fromEntries(subs.map((s) => [s._id.replace(/^drafts\./, ""), s.urlPathSub]));

const changes = [];
for (const doc of services) {
  const list = doc.subServices ?? [];
  const keep = list.filter((ref) => !subIds.has(ref._ref));
  const removed = list.filter((ref) => subIds.has(ref._ref));
  if (!removed.length) continue;
  console.log(`${doc._id}  /services/${doc.urlPath}`);
  console.log(`   remove: ${removed.map((r) => nameOf[r._ref]).join(", ")}   keep: ${keep.length ? keep.length + " other" : "none (list removed)"}`);
  changes.push({ doc, keep });
}
console.log(`\n${changes.length} of ${WRONG_PARENTS.length} services to change.`);

const stamp = new Date().toISOString().replace(/[:.]/g, "-");
const backup = path.join("backups", `fix-copied-sub-services-${stamp}.json`);
fs.mkdirSync("backups", { recursive: true });
fs.writeFileSync(backup, JSON.stringify(changes.map((c) => c.doc), null, 2));
console.log(`Backup of those documents: ${backup}`);

if (!APPLY) {
  console.log("\nDry run. Add -- --apply to save.");
} else if (changes.length) {
  // ifRevisionId: fail instead of overwriting if someone edited it since it was read.
  // An empty list is removed, so the page hides its sub-service section.
  const tx = client.transaction();
  for (const { doc, keep } of changes)
    tx.patch(doc._id, (p) => (keep.length ? p.set({ subServices: keep }) : p.unset(["subServices"])).ifRevisionId(doc._rev));
  await tx.commit({ visibility: "async" });
  console.log("Saved.");
}
