// "Case Study Order": the order of the case study grid on /case-studies and the home page.
// One document only (id "caseStudiesPage"): it can't be created or deleted in
// Studio (see sanity.config.ts), only edited.

import { defineField, defineType } from "sanity";
import { OlistIcon } from "@sanity/icons";

// The type name and document id stay "caseStudiesPage" (that is what is stored).
export const CASE_STUDY_ORDER_ID = "caseStudiesPage";

export const caseStudyOrder = defineType({
  name: CASE_STUDY_ORDER_ID,
  title: "Case Study Order",
  type: "document",
  icon: OlistIcon,
  fields: [
    defineField({
      name: "cardOrder",
      title: "Card order",
      type: "array",
      description:
        "Drag to change the order of the case study cards (first = top left). Case studies not in this list are shown first, newest first. To hide a card, turn it off on the case study's Card tab.",
      of: [{ type: "reference", to: [{ type: "caseStudy" }] }],
      validation: (r) => r.unique(),
    }),
  ],
  preview: {
    select: { cards: "cardOrder" },
    prepare: ({ cards }: { cards?: unknown[] }) => ({ title: "Case Study Order", subtitle: `${cards?.length || 0} cards in order` }),
  },
});
