// Moves the home page testimonials and FAQs (old "testimonial" and "faq"
// documents) into the single "Home Page" document, in the order the website
// showed them (most recently edited first).
//
//   npx sanity exec scripts/move-home-content.mjs --with-user-token                       (dry run)
//   npx sanity exec scripts/move-home-content.mjs --with-user-token -- --apply            (create Home Page)
//   npx sanity exec scripts/move-home-content.mjs --with-user-token -- --delete-old --apply
//      (afterwards, with a backup: deletes the old documents once Home Page has them all)

import sanityCli from "sanity/cli";

const { getCliClient } = sanityCli;
const args = new Set(process.argv.slice(2));
const APPLY = args.has("--apply");
const client = getCliClient({ apiVersion: "2024-03-14" });

const { testimonials, faqs, drafts, existing } = await client.fetch(`{
  "testimonials": *[_type == "testimonial" && !(_id in path("drafts.**"))] | order(_updatedAt desc){ _id, name, designation, content, image },
  "faqs": *[_type == "faq" && !(_id in path("drafts.**"))] | order(_updatedAt desc){ _id, title, content },
  "drafts": count(*[_type in ["testimonial", "faq"] && _id in path("drafts.**")]),
  "existing": *[_id == "homePage"][0]{ "testimonials": count(testimonials), "faqs": count(faqs) }
}`);

const trim = (value) => (typeof value === "string" ? value.trim() : undefined);
const key = (id) => id.replace(/[^a-zA-Z0-9]/g, "").slice(0, 12);

const homePage = {
  _id: "homePage",
  _type: "homePage",
  testimonials: testimonials.map((t) => ({
    _key: key(t._id),
    _type: "testimonial",
    name: trim(t.name),
    role: trim(t.designation),
    quote: trim(t.content),
    ...(t.image?.asset ? { photo: t.image } : {}),
  })),
  faqs: faqs.map((f) => ({ _key: key(f._id), _type: "faq", question: trim(f.title), answer: trim(f.content) })),
};

console.log(`Testimonials: ${testimonials.length} · FAQs: ${faqs.length} · unpublished drafts (not moved): ${drafts}`);
homePage.testimonials.forEach((t, i) => console.log(`  testimonial ${i + 1}: ${t.name} — ${t.role}`));
homePage.faqs.forEach((f, i) => console.log(`  faq ${i + 1}: ${f.question}`));

if (args.has("--delete-old")) {
  const copied = existing && existing.testimonials >= testimonials.length && existing.faqs >= faqs.length;
  if (!copied) {
    console.error("\nThe Home Page document doesn't contain them all yet, so nothing was deleted. Run with --apply first.");
    process.exit(1);
  }
  const ids = await client.fetch(`*[_type in ["testimonial", "faq"]]._id`);
  if (!APPLY) {
    console.log(`\nDry run: ${ids.length} old documents would be deleted. Add "--apply" (export a backup first).`);
  } else {
    const tx = client.transaction();
    ids.forEach((id) => tx.delete(id));
    await tx.commit();
    console.log(`\nDeleted ${ids.length} old testimonial/FAQ documents.`);
  }
} else if (existing) {
  console.log(`\nThe Home Page document already exists (${existing.testimonials} testimonials, ${existing.faqs} FAQs); not overwritten.`);
} else if (!APPLY) {
  console.log('\nDry run. Add "--apply" to create the Home Page document.');
} else {
  await client.createIfNotExists(homePage);
  console.log("\nCreated and published the Home Page document. The old documents are unchanged.");
}
