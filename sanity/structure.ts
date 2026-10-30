// Studio sidebar: "Home Page", "Adnan Ghaffar Page" and "Form submissions" first, then every other
// document type.

import type { StructureResolver } from "sanity/structure";
import { EnvelopeIcon, HomeIcon, UserIcon } from "@sanity/icons";
import { FORMS, FORM_IDS } from "@/lib/forms/catalog";
import { FORM_SUBMISSION_TYPE } from "./schemas/form-submission";
import { HOME_PAGE_ID } from "./schemas/home-page";
import { ADNAN_GHAFFAR_PAGE_ID } from "./schemas/adnan-ghaffar-page";

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
      // A single document: opens straight into the editor.
      S.listItem()
        .id(HOME_PAGE_ID)
        .title("Home Page")
        .icon(HomeIcon)
        .child(S.document().schemaType(HOME_PAGE_ID).documentId(HOME_PAGE_ID).title("Home Page")),
      S.listItem()
        .id(ADNAN_GHAFFAR_PAGE_ID)
        .title("Adnan Ghaffar Page")
        .icon(UserIcon)
        .child(S.document().schemaType(ADNAN_GHAFFAR_PAGE_ID).documentId(ADNAN_GHAFFAR_PAGE_ID).title("Adnan Ghaffar Page")),
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
      ...S.documentTypeListItems().filter((item) => ![FORM_SUBMISSION_TYPE, HOME_PAGE_ID, ADNAN_GHAFFAR_PAGE_ID].includes(item.getId() ?? "")),
    ]);
};
