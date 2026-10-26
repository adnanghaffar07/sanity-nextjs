// Sanity project settings shared by the website, the Studio and the CLI.
// The dataset is public, so these are not secrets.

// API behaviour is pinned to this date (https://www.sanity.io/docs/api-versioning).
// Since 2025-02-19 queries return only published documents unless a client
// asks for drafts explicitly.
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-02-19";
export const dataset = "production";
export const projectId = "ld8m6d0z";
export const useCdn = true;
