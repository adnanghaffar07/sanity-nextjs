import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

// npm test             unit tests (tests/unit): fast, no network, nothing is saved or sent
// npm run test:smoke   checks a running site (tests/smoke), see tests/smoke/site.test.ts
export default defineConfig({
  resolve: { alias: { "@": fileURLToPath(new URL(".", import.meta.url)) } },
  test: { include: ["tests/**/*.test.ts"], environment: "node" },
});
