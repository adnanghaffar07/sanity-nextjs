// Copies the default /adnan-ghaffar text (sanity/lib/adnan-ghaffar-defaults.ts)
// into the "Adnan Ghaffar Page" document, so Studio shows what the website
// shows. Only empty fields are filled: anything already saved is left alone.
//
//   npx sanity exec scripts/seed-adnan-ghaffar-page.mjs --with-user-token                  (dry run)
//   npx sanity exec scripts/seed-adnan-ghaffar-page.mjs --with-user-token -- --apply       (save)

import sanityCli from "sanity/cli";
import { ADNAN_GHAFFAR_DEFAULTS } from "../sanity/lib/adnan-ghaffar-defaults.ts";

const { getCliClient } = sanityCli;
const APPLY = process.argv.slice(2).includes("--apply");
const client = getCliClient({ apiVersion: "2024-03-14" });

const ID = "adnanGhaffarPage";

const values = {
  ...ADNAN_GHAFFAR_DEFAULTS,
  // Array items that are objects need a _key and _type for Studio.
  focusAreas: ADNAN_GHAFFAR_DEFAULTS.focusAreas.map((area, i) => ({ _key: `focus${i + 1}`, _type: "focusArea", ...area })),
};

const { published, draft } = await client.fetch(`{
  "published": *[_id == $id][0],
  "draft": *[_id == $draftId][0]
}`, { id: ID, draftId: `drafts.${ID}` });

const isEmpty = (v) => v == null || (typeof v === "string" && v.trim() === "") || (Array.isArray(v) && v.length === 0);
const toFill = Object.keys(values).filter((field) => isEmpty(published?.[field]));

console.log(published ? "Published document exists." : "No published document yet: it will be created.");
console.log(toFill.length ? `Fields to fill (${toFill.length}): ${toFill.join(", ")}` : "Every field already has text. Nothing to do.");
if (draft) {
  console.log("Note: an unpublished draft exists. Studio shows the draft until it is published or discarded.");
}

if (!APPLY) {
  console.log("\nDry run. Add -- --apply to save.");
} else if (toFill.length) {
  const fill = Object.fromEntries(toFill.map((field) => [field, values[field]]));
  await client
    .transaction()
    .createIfNotExists({ _id: ID, _type: ID })
    .patch(ID, (patch) => patch.setIfMissing(fill))
    .commit();
  console.log("Saved.");
}
