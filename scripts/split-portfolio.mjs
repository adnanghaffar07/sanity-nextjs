// Copies the legacy `portfolio` documents into the new Blog Post, Case Study and
// Value Blueprint types. The legacy documents are NOT changed or deleted, so
// this is safe to run again and easy to roll back (delete the new documents).
//
//   node scripts/split-portfolio.mjs            → writes sanity/seed/portfolio-split.ndjson
//                                                 (import it with the command printed at the end)
//   SANITY_WRITE_TOKEN=… node scripts/split-portfolio.mjs --write
//                                               → creates the documents directly
//   add --only=blogPost (or caseStudy / valueBlueprint) to move one type at a time
//   add --overwrite to replace new documents that already exist
//   (otherwise existing ones are left alone, so edits made in Studio are kept)
//
// What it does:
//   • pageType "blogs"          → blogPost        (id blogPost-<old id>)
//   • pageType "valueBlueprint" → valueBlueprint  (id valueBlueprint-<old id>; address = old id,
//                                                  so /value-blueprints/<old id> stays the same)
//   • no pageType               → caseStudy       (id caseStudy-<old id>), with its card from the
//                                                  old "CaseStudyInfo" card list (matched by address)
//   • the "CaseStudyInfo" document itself is not copied: its cards now live on each case study.

import fs from "node:fs";
import path from "node:path";
import { createClient } from "@sanity/client";

const args = new Set(process.argv.slice(2));
const WRITE = args.has("--write");
const OVERWRITE = args.has("--overwrite");
const ONLY = [...args].find((a) => a.startsWith("--only="))?.slice("--only=".length);
if (ONLY && !["blogPost", "caseStudy", "valueBlueprint"].includes(ONLY)) {
  console.error(`--only must be blogPost, caseStudy or valueBlueprint (got "${ONLY}")`);
  process.exit(1);
}
const OUT = path.join("sanity", "seed", ONLY ? `portfolio-split-${ONLY}.ndjson` : "portfolio-split.ndjson");

const token = process.env.SANITY_WRITE_TOKEN;
if (WRITE && !token) {
  console.error("--write needs a SANITY_WRITE_TOKEN with Editor rights (sanity.io/manage → API → Tokens).");
  process.exit(1);
}

const client = createClient({
  projectId: "ld8m6d0z",
  dataset: "production",
  apiVersion: "2024-03-14",
  useCdn: false,
  token,
  perspective: "published",
});

// Only the fields each new schema has (= the fields its page on the website
// displays). Object fields list the sub-fields to keep. Everything else stays
// on the old document only.
const SEO_BLOG = { webSeoMetadataSub: ["title", "description"], jsonLd: true };
const KEEP = {
  blogPost: {
    title: true, slug: true, blogheading: true, subtitle: true, introductionheading: true, description: true,
    heroimage: true, cardimage: true, primaryimage: true, briefdescription: true, briefitemsarray: true,
    challengesfacedheading: true, chanllangesfaced: true, conclusionheading: true, conclusion: true,
    faqSection: true, audience: true, ...SEO_BLOG,
  },
  caseStudy: {
    title: true, slug: true, subtitle: true, blogheading: true, button: true, cardimage: true, color: true,
    projectscopecontent: true, projectGoalsSection: true, briefdescription: true, briefitemsarray: true,
    primaryimage: true, toolsandtechusedheading: true,
    caseStudiesToolsSection: ["toolsTech"], features: ["showTitles", "featureslist"],
    challengesfacedheading: true, chanllangesfaced: true,
    ourapproachheading: true, ourapproach: true, resultsheading: true, results: true, conclusionheading: true,
    conclusion: true, jsonLd: true,
    webSeoMetadataSub: ["title", "description", "keywords"],
    facebookCardsSub: ["facebookType"],
    twitterCardsSub: ["twitterType"],
  },
  valueBlueprint: {
    title: true, slug: true, heroimage: true, cardimage: true, challengesfacedheading: true, chanllangesfaced: true,
    resultsheading: true, conclusionheading: true, conclusion: true, toolsandtechusedheading: true,
    toolstechlist: true, caseStudiesToolsSection: ["toolsTech"],
    webSeoMetadataSub: ["title", "description", "keywords"],
    facebookCardsSub: ["facebookTitle", "facebookDescription", "facebookUrl", "facebookType"],
    linkedInCardsSub: ["linkedInTitle", "linkedInDescription", "linkedInUrl"],
    twitterCardsSub: ["twitterTitle", "twitterDescription", "twitterUrl", "twitterType"],
    whatsappCardsSub: ["whatsappTitle", "whatsappDescription", "whatsappUrl"],
    telegramCardsSub: ["telegramTitle", "telegramDescription", "telegramUrl"],
    pinterestCardsSub: ["pinterestTitle", "pinterestDescription", "pinterestUrl"],
  },
};

const isEmpty = (v) => v == null || v === "" || (Array.isArray(v) && v.length === 0) || (typeof v === "object" && !Array.isArray(v) && Object.keys(v).filter((k) => !k.startsWith("_")).length === 0);

const pick = (doc, type) => {
  const out = { _createdAt: doc._createdAt };
  const dropped = [];
  for (const [key, value] of Object.entries(doc)) {
    if (key.startsWith("_") || isEmpty(value) || key === "pageType") continue;
    const rule = KEEP[type][key];
    if (rule === true) out[key] = value;
    else if (Array.isArray(rule)) {
      const sub = Object.fromEntries(Object.entries(value).filter(([k]) => k.startsWith("_") || rule.includes(k)));
      for (const k of Object.keys(value)) if (!k.startsWith("_") && !rule.includes(k) && !isEmpty(value[k])) dropped.push(`${key}.${k}`);
      if (!isEmpty(sub)) out[key] = sub;
    } else dropped.push(key);
  }
  return { out, dropped };
};

const cardSlug = (url = "") => url.trim().replace(/^https?:\/\/[^/]+/, "").replace(/^\/?(case-studies\/)?/, "").replace(/\/+$/, "");

const legacy = await client.fetch(`*[_type == "portfolio" && !(_id in path("drafts.**"))] | order(_createdAt asc)`);
const info = legacy.find((d) => d.title === "CaseStudyInfo");
const cards = info?.cardItemsList || [];
const cardBySlug = new Map(cards.map((card, index) => [cardSlug(card.url), { card, index }]));

const docs = [];
const report = { blogPost: 0, caseStudy: 0, valueBlueprint: 0, droppedFields: {}, caseStudiesWithoutCard: [], cardsWithoutCaseStudy: [], duplicateAddresses: [] };
const matchedCards = new Set();

for (const doc of legacy) {
  if (doc._id === info?._id) continue;
  const type = doc.pageType === "blogs" ? "blogPost" : doc.pageType === "valueBlueprint" ? "valueBlueprint" : "caseStudy";
  if (ONLY && type !== ONLY) continue;
  if (doc.pageType && !["blogs", "valueBlueprint"].includes(doc.pageType)) {
    console.warn(`Skipping ${doc._id}: unknown pageType "${doc.pageType}"`);
    continue;
  }
  const { out, dropped } = pick(doc, type);
  for (const key of dropped) report.droppedFields[`${type}.${key}`] = (report.droppedFields[`${type}.${key}`] || 0) + 1;

  const next = { ...out, _id: `${type}-${doc._id}`, _type: type, legacyId: doc._id };

  if (type === "valueBlueprint") {
    // The card only shows the logos of each tool entry.
    if (next.caseStudiesToolsSection?.toolsTech) next.caseStudiesToolsSection.toolsTech = next.caseStudiesToolsSection.toolsTech.map(({ heading, detail, ...logos }) => logos);
    // Old links were /value-blueprints/<id>; keep that as the address.
    next.slug = doc.slug || doc._id;
  }

  if (type === "caseStudy") {
    // Old pages showed feature titles only when a testing list existed: now a switch.
    if (doc.typeoftestinglist?.length) next.features = { ...(next.features || {}), showTitles: true };
    // Unused per-block logo references (never had a logo selected).
    if (next.features?.featureslist) next.features.featureslist = next.features.featureslist.map(({ logo, ...block }) => block);
    const match = cardBySlug.get(doc.slug);
    if (match) {
      const { card } = match;
      matchedCards.add(doc.slug);
      next.listing = {
        show: true,
        cardTitle: card.cardTitle,
        cardDescription: card.cardDescription,
        cardImage: card.cardImage,
        categories: (card.group || "").split(",").map((s) => s.trim().toLowerCase()).filter(Boolean),
      };
      for (const key of Object.keys(next.listing)) if (next.listing[key] == null) delete next.listing[key];
    } else {
      next.listing = { show: false };
      report.caseStudiesWithoutCard.push(`${doc.title} (/case-studies/${doc.slug})`);
    }
  }

  report[type]++;
  docs.push(next);
}

for (const [slug, { card }] of ONLY && ONLY !== "caseStudy" ? [] : cardBySlug) {
  if (!matchedCards.has(slug)) report.cardsWithoutCaseStudy.push(`${card.cardTitle} → ${card.url}`);
}
const seen = new Map();
for (const d of docs) {
  const key = `${d._type}:${d.slug}`;
  if (seen.has(key)) report.duplicateAddresses.push(`${key} (${seen.get(key)} and ${d.legacyId})`);
  else seen.set(key, d.legacyId);
}

console.log(`Blog posts:        ${report.blogPost}`);
console.log(`Case studies:      ${report.caseStudy}`);
console.log(`Value blueprints:  ${report.valueBlueprint}`);
if (Object.keys(report.droppedFields).length) console.log("Old fields not shown on the website, so not copied (they stay on the old documents):", report.droppedFields);
if (report.caseStudiesWithoutCard.length) console.log("Case studies that had no card (copied with the card hidden):\n  " + report.caseStudiesWithoutCard.join("\n  "));
if (report.cardsWithoutCaseStudy.length) console.log("⚠ Cards in CaseStudyInfo with no matching case study (NOT copied):\n  " + report.cardsWithoutCaseStudy.join("\n  "));
if (report.duplicateAddresses.length) console.log("⚠ Same address used twice (fix one in Studio):\n  " + report.duplicateAddresses.join("\n  "));

if (!WRITE) {
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, docs.map((d) => JSON.stringify(d)).join("\n") + "\n");
  console.log(`\nWrote ${docs.length} documents to ${OUT}. Import them with:`);
  console.log(`  npx sanity dataset import ${OUT.replace(/\\/g, "/")} production ${OVERWRITE ? "--replace" : "--missing"}`);
} else {
  const BATCH = 20;
  for (let i = 0; i < docs.length; i += BATCH) {
    const tx = client.transaction();
    for (const d of docs.slice(i, i + BATCH)) (OVERWRITE ? tx.createOrReplace(d) : tx.createIfNotExists(d));
    await tx.commit({ visibility: "async" });
    console.log(`  ${Math.min(i + BATCH, docs.length)}/${docs.length}`);
  }
  console.log("Done. The new documents are published; the old ones are unchanged.");
}
