// Last step of moving away from the old "portfolio" (blogs / case studies /
// blueprints), "blogSub" (Blog Sub Page) and "popup" (greeting popup) types.
// Two separate steps, each a dry run unless "--apply" is added:
//
// 1. Before deploying the code that removes the old schemas:
//    npx sanity exec scripts/retire-old-content-types.mjs --with-user-token -- --create-order --apply
//    Creates the "Case Study Order" document with the card order taken from
//    the old CaseStudyInfo list, so the grid order stays exactly the same.
//
// 2. After that code is live and checked, and after a backup:
//    npx sanity dataset export production backup-before-retiring-portfolio.tar.gz
//    npx sanity exec scripts/retire-old-content-types.mjs --with-user-token -- --delete-old --apply
//    Permanently deletes every "portfolio", "blogSub" and "popup" (greeting popup)
//    document (published and drafts).
//    Nothing on the website reads them any more (their content now lives in the
//    new types, and the popup content in the code).

import sanityCli from "sanity/cli";

const { getCliClient } = sanityCli;

const args = new Set(process.argv.slice(2));
const APPLY = args.has("--apply");
const client = getCliClient({ apiVersion: "2024-03-14" });

const slugFromUrl = (url = "") =>
  url.trim().replace(/^https?:\/\/[^/]+/, "").replace(/^\/?(case-studies\/)?/, "").replace(/\/+$/, "");

if (args.has("--create-order")) {
  const { legacyCards, caseStudies, existing } = await client.fetch(`{
    "legacyCards": *[_type == "portfolio" && title == "CaseStudyInfo"] | order(_updatedAt desc)[0].cardItemsList[].url,
    "caseStudies": *[_type == "caseStudy" && !(_id in path("drafts.**"))]{ _id, slug },
    "existing": defined(*[_id == "caseStudiesPage"][0])
  }`);
  if (existing) {
    console.log("The Case Study Order already exists: nothing to do.");
  } else {
    const idBySlug = new Map(caseStudies.map((c) => [c.slug, c._id]));
    const ids = [...new Set((legacyCards || []).map((url) => idBySlug.get(slugFromUrl(url))).filter(Boolean))];
    const missing = (legacyCards || []).filter((url) => !idBySlug.has(slugFromUrl(url)));
    console.log(`Card order: ${ids.length} case studies, in the current order.`);
    if (missing.length) console.log("⚠ Cards with no matching case study (left out):", missing);
    const doc = {
      _id: "caseStudiesPage",
      _type: "caseStudiesPage",
      cardOrder: ids.map((id, i) => ({ _key: `card${i}`, _type: "reference", _ref: id })),
    };
    if (APPLY) {
      await client.createIfNotExists(doc);
      console.log("Created and published the Case Study Order.");
    } else console.log('Dry run. Add "--apply" to create it.');
  }
}

if (args.has("--delete-old")) {
  const ids = await client.fetch(`*[_type in ["portfolio", "blogSub", "popup"]]._id`);
  const referenced = await client.fetch(`count(*[!(_type in ["portfolio", "blogSub", "popup"]) && references($ids)])`, { ids });
  console.log(`Old documents: ${ids.length} (portfolio + blogSub + popup, including drafts).`);
  if (referenced) {
    console.log(`⚠ ${referenced} other documents still reference them. Not deleting.`);
    process.exit(1);
  }
  if (APPLY) {
    for (let i = 0; i < ids.length; i += 50) {
      const tx = client.transaction();
      ids.slice(i, i + 50).forEach((id) => tx.delete(id));
      await tx.commit();
    }
    console.log(`Deleted ${ids.length} documents.`);
  } else console.log('Dry run. Add "--apply" to delete them permanently (export a backup first).');
}

if (!args.has("--create-order") && !args.has("--delete-old")) {
  console.log("Add --create-order or --delete-old (see the top of this file).");
}
