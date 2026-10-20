// CVs sent through the old job application form (June 2025 to April 2026).
// The form was removed, so these are a read-only archive: they can be viewed
// and deleted in Studio, but not created or edited (see sanity.config.ts).

import { defineField, defineType } from "sanity";
import { DocumentPdfIcon } from "@sanity/icons";

export const RESUME_SUBMISSION_TYPE = "resumeSubmission";

export const resumeSubmission = defineType({
  name: RESUME_SUBMISSION_TYPE,
  title: "Job Applications (archive)",
  type: "document",
  icon: DocumentPdfIcon,
  readOnly: true,
  fields: [
    defineField({ name: "title", title: "Applied for", type: "string" }),
    defineField({ name: "file", title: "CV", type: "file" }),
  ],
  orderings: [
    { title: "Newest first", name: "createdDesc", by: [{ field: "_createdAt", direction: "desc" }] },
  ],
  preview: {
    select: { title: "title", fileName: "file.asset.originalFilename", createdAt: "_createdAt" },
    prepare: ({ title, fileName, createdAt }) => ({
      title: fileName || "CV",
      subtitle: [title, createdAt?.slice(0, 10)].filter(Boolean).join(" · "),
    }),
  },
});
