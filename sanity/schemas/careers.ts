// Job openings shown as cards on /career. Field names are the stored keys
// (including the original "jobTitleBaner" spelling), so they must not change.

import { defineField, defineType } from "sanity";
import { CaseIcon } from "@sanity/icons";
import { CAREERS_TYPE, DEFAULT_JOB_LOCATION } from "./careers-constants";

export const careers = defineType({
  name: CAREERS_TYPE,
  title: "Job Openings",
  type: "document",
  icon: CaseIcon,
  fields: [
    defineField({
      name: "jobTitleBaner",
      title: "Job title",
      type: "string",
      description: "E.g. \"Senior React Developer\".",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "descJobTitle",
      title: "Short description",
      type: "text",
      rows: 3,
      description: "One or two sentences shown on the job card.",
      validation: (rule) => [
        rule.required(),
        rule.max(220).warning("Keep it short so the card doesn't get too tall."),
      ],
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      initialValue: DEFAULT_JOB_LOCATION,
      description: `Shown on the job card. Use a comma to split it over two lines, e.g. "${DEFAULT_JOB_LOCATION}".`,
    }),
  ],
  orderings: [
    { title: "Newest first", name: "createdDesc", by: [{ field: "_createdAt", direction: "desc" }] },
  ],
  preview: {
    select: { title: "jobTitleBaner", location: "location" },
    prepare: ({ title, location }) => ({
      title: title || "Untitled job",
      subtitle: location || DEFAULT_JOB_LOCATION,
    }),
  },
});
