// Studio sidebar: "Form submissions" first (all, new, per form), then every
// other document type as before.

import type { StructureResolver } from "sanity/structure";
import { EnvelopeIcon } from "@sanity/icons";
import { FORMS, FORM_IDS } from "../lib/forms/catalog";
import { FORM_SUBMISSION_TYPE } from "./schemas/form-submission";

const NEWEST_FIRST = [{ field: "submittedAt", direction: "desc" as const }];

export const structure: StructureResolver = (S) => {
  const submissions = (title: string, filter: string, params: Record<string, string> = {}) =>
    S.documentList()
      .title(title)
      .schemaType(FORM_SUBMISSION_TYPE)
      .filter(`_type == "${FORM_SUBMISSION_TYPE}" && ${filter}`)
      .params(params)
      .defaultOrdering(NEWEST_FIRST);

  return S.list()
    .title("Content")
    .items([
      S.listItem()
        .id("form-submissions")
        .title("Form submissions")
        .icon(EnvelopeIcon)
        .child(
          S.list()
            .title("Form submissions")
            .items([
              S.listItem().id("all").title("All submissions").child(submissions("All submissions", "true")),
              S.listItem().id("new").title("New (not followed up)").child(submissions("New", 'status == "new"')),
              S.divider(),
              ...FORM_IDS.map((id) =>
                S.listItem().id(id).title(FORMS[id].title).child(submissions(FORMS[id].title, "form == $form", { form: id }))
              ),
            ])
        ),
      S.divider(),
      ...S.documentTypeListItems().filter((item) => item.getId() !== FORM_SUBMISSION_TYPE),
    ]);
};
