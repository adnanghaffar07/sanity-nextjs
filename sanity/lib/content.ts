// Filters for Blog Posts, Case Studies and Value Blueprints.

export const BLOG_FILTER = `_type == "blogPost"`;
export const CASE_STUDY_FILTER = `_type == "caseStudy"`;
export const VALUE_BLUEPRINT_FILTER = `_type == "valueBlueprint"`;

/** If two documents share an address, the newest one is shown. */
export const NEWEST_FIRST = `_createdAt desc`;
