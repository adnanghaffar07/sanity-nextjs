// Moves the Technologies content to the cleaner schema. Run AFTER deploying the
// code that reads it (the old code sorts by "last edited", which this changes).
//
//   npx sanity exec scripts/migrate-technologies.mjs --with-user-token                      (dry run)
//   npx sanity exec scripts/migrate-technologies.mjs --with-user-token -- --apply           (migrate)
//   npx sanity exec scripts/migrate-technologies.mjs --with-user-token -- --cleanup --apply (remove old fields)
//
// --apply   1. Creates "Technology Order" with the categories in today's order.
//           2. Copies each category's old nested logo list into the flat "Technologies"
//              field, skipping empty entries and logos that no longer exist.
// --cleanup Removes the old nested list (and a stray "images" field) from categories
//           that already have the new list. Export a backup first:
//              npx sanity dataset export production backup-before-technologies-cleanup.tar.gz

import sanityCli from "sanity/cli";

const { getCliClient } = sanityCli;
const args = new Set(process.argv.slice(2));
const APPLY = args.has("--apply");
const CLEANUP = args.has("--cleanup");
const client = getCliClient({ apiVersion: "2024-03-14" });

const ORDER_ID = "technologiesPage";

const { categories, logoIds, order } = await client.fetch(`{
  "categories": *[_type == "technologies" && !(_id in path("drafts.**"))] | order(_updatedAt desc){
    _id, techname, logos, "oldRefs": techLogos[].images[]._ref, "hasOld": defined(techLogos), "hasStray": defined(images)
  },
  "logoIds": *[_type == "techLogos"]._id,
  "order": *[_id == $orderId][0]
}`, { orderId: ORDER_ID });

const existingLogos = new Set(logoIds);
const key = (id, i) => `${id.replace(/[^a-zA-Z0-9]/g, "").slice(0, 10)}${i}`;

if (CLEANUP) {
  const ready = categories.filter((c) => c.logos && (c.hasOld || c.hasStray));
  const notMigrated = categories.filter((c) => !c.logos);
  console.log(`Remove old fields from ${ready.length} categories.`);
  if (notMigrated.length) console.log(`Skipped (not migrated yet, run --apply first): ${notMigrated.map((c) => c.techname.trim()).join(", ")}`);
  if (!APPLY) process.exit(console.log('\nDry run. Add "--apply" to remove them.') ?? 0);
  const tx = client.transaction();
  for (const c of ready) tx.patch(c._id, (p) => p.unset(["techLogos", "images"]));
  await tx.commit();
  console.log("Done.");
  process.exit(0);
}

console.log(order ? "Technology Order already exists (left unchanged)." : "Create Technology Order in this order:");
if (!order) categories.forEach((c, i) => console.log(`  ${i + 1}. ${c.techname.trim()}`));

const toCopy = categories.filter((c) => !c.logos);
let dropped = 0;
const patches = toCopy.map((c) => {
  const refs = [...new Set((c.oldRefs || []).filter(Boolean))];
  const kept = refs.filter((id) => existingLogos.has(id));
  dropped += refs.length - kept.length;
  return { _id: c._id, name: c.techname.trim(), logos: kept.map((id, i) => ({ _type: "reference", _ref: id, _key: key(id, i) })) };
});
console.log(`\nCopy logo lists for ${patches.length} categories:`);
patches.forEach((p) => console.log(`  ${p.name}: ${p.logos.length} logos`));
if (dropped) console.log(`  (${dropped} links to deleted logos skipped)`);

if (!APPLY) process.exit(console.log('\nDry run. Add "--apply" to migrate.') ?? 0);

const tx = client.transaction();
if (!order) {
  tx.createIfNotExists({
    _id: ORDER_ID,
    _type: ORDER_ID,
    categoryOrder: categories.map((c, i) => ({ _type: "reference", _ref: c._id, _key: key(c._id, i) })),
  });
}
for (const p of patches) tx.patch(p._id, (patch) => patch.set({ logos: p.logos }));
await tx.commit();
console.log("\nDone. Check /technologies, then run --cleanup --apply after a backup.");
