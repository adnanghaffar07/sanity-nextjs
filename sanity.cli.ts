import { defineCliConfig } from "sanity/cli";
import { dataset, projectId } from "./sanity/env";

// Same project/dataset as the website, so CLI commands (import, export, exec)
// work without setting environment variables first.
export default defineCliConfig({
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || projectId,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || dataset,
  },
});
