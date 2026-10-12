// One-off clean-up of the Case Study and Value Blueprint documents copied by
// split-portfolio.mjs, after their fields were trimmed to what the pages display.
//
//   npx sanity exec scripts/clean-copied-fields.mjs --with-user-token            (dry run)
//   npx sanity exec scripts/clean-copied-fields.mjs --with-user-token -- --apply
//
// Removes values no page displays (so Studio shows no "unknown field" warnings):
//   Case studies: technologiesused (the Tools section always replaces it),
//     typeoftestinglist, features.description, features.feature,
//     caseStudiesToolsSection.toolImage, and empty logo references on feature blocks.
//     Where a testing list existed, "Show block titles" is switched on instead, so
//     the page looks exactly the same.
//   Value blueprints: the name/text on each card logo entry (the card only shows logos).
// Only the new documents are touched; the old `portfolio` documents keep everything.

import sanityCli from "sanity/cli";

const { getCliClient } = sanityCli;

const APPLY = process.argv.includes("--apply");
const client = getCliClient({ apiVersion: "2024-03-14" });

const { caseStudies, blueprints } = await client.fetch(`{
  "caseStudies": *[_type == "caseStudy" && (
    defined(technologiesused) || defined(typeoftestinglist) || defined(features.description) ||
    defined(features.feature) || defined(caseStudiesToolsSection.toolImage) ||
    count(features.featureslist[defined(logo)]) > 0
  )]{ _id, slug, typeoftestinglist, features, caseStudiesToolsSection, technologiesused },
  "blueprints": *[_type == "valueBlueprint" &&
    count(caseStudiesToolsSection.toolsTech[defined(heading) || defined(detail)]) > 0
  ]{ _id, slug, caseStudiesToolsSection }
}`);

const tx = client.transaction();

for (const doc of caseStudies) {
  const unset = [];
  if (doc.technologiesused) unset.push("technologiesused");
  if (doc.typeoftestinglist) unset.push("typeoftestinglist");
  if (doc.features?.description != null) unset.push("features.description");
  if (doc.features?.feature) unset.push("features.feature");
  if (doc.caseStudiesToolsSection?.toolImage) unset.push("caseStudiesToolsSection.toolImage");
  for (const block of doc.features?.featureslist || []) {
    if (block.logo) unset.push(`features.featureslist[_key=="${block._key}"].logo`);
  }

  let patch = client.patch(doc._id).unset(unset);
  if (doc.typeoftestinglist?.length) patch = patch.setIfMissing({ features: {} }).set({ "features.showTitles": true });
  tx.patch(patch);
  console.log(`case study ${doc.slug}: remove ${unset.join(", ")}${doc.typeoftestinglist?.length ? " · turn on Show block titles" : ""}`);
}

for (const doc of blueprints) {
  const unset = [];
  for (const tool of doc.caseStudiesToolsSection?.toolsTech || []) {
    for (const key of ["heading", "detail"]) {
      if (tool[key] != null) unset.push(`caseStudiesToolsSection.toolsTech[_key=="${tool._key}"].${key}`);
    }
  }
  tx.patch(client.patch(doc._id).unset(unset));
  console.log(`blueprint ${doc.slug}: remove ${unset.length} unused name/text values from the card logos`);
}

const total = caseStudies.length + blueprints.length;
if (!total) console.log("Nothing to clean.");
else if (!APPLY) {
  console.log(`\nDry run: ${caseStudies.length} case studies and ${blueprints.length} blueprints would change. Add "-- --apply" to save.`);
} else {
  await tx.commit();
  console.log(`\nSaved ${caseStudies.length} case studies and ${blueprints.length} blueprints.`);
}
