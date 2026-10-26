// Smoke test for a running site: key pages load, redirects and removed pages
// answer correctly, and the APIs refuse what they must refuse. It only reads
// and sends requests that are rejected, so it never saves or sends anything.
//
//   npm run test:smoke                                    http://localhost:3000 (npm run dev / start)
//   SMOKE_URL=https://codeautomation.ai npm run test:smoke   (Git Bash / macOS / Linux)
//   $env:SMOKE_URL="https://codeautomation.ai"; npm run test:smoke   (PowerShell)

import { describe, expect, it } from "vitest";

const BASE = (process.env.SMOKE_URL ?? "http://localhost:3000").replace(/\/$/, "");
const ORIGIN = new URL(BASE).origin;
const TIMEOUT = 60_000;

const get = (path: string, init?: RequestInit) => fetch(BASE + path, { redirect: "manual", ...init });
const title = (html: string) => html.match(/<title>([^<]*)<\/title>/)?.[1]?.trim() ?? "";

describe(`smoke test: ${BASE}`, () => {
  it.each([
    "/",
    "/blogs",
    "/blogs/types-of-software-development-services",
    "/case-studies",
    "/value-blueprints",
    "/services",
    "/services/mobile-app",
    "/pricing",
    "/contact",
    "/technologies",
  ])("%s loads with a title", async (path) => {
    const res = await get(path);
    expect(res.status).toBe(200);
    expect(title(await res.text())).not.toBe("");
  }, TIMEOUT);

  it("unknown pages are 404, removed service pages 410", async () => {
    expect((await get("/no-such-page-smoke-test")).status).toBe(404);
    expect((await get("/services/automation-integration/n8n-automation")).status).toBe(410);
  }, TIMEOUT);

  it("the old mobile app address redirects permanently", async () => {
    const res = await get("/services/mobile-app-development-company");
    expect(res.status).toBe(308);
    expect(res.headers.get("location")).toMatch(/\/services\/mobile-app$/);
  }, TIMEOUT);

  it("robots.txt, the sitemap and Studio load", async () => {
    for (const path of ["/robots.txt", "/sitemap.xml", "/studio"]) expect((await get(path)).status, path).toBe(200);
  }, TIMEOUT);

  it("/pricing sends only the preview, never the prices", async () => {
    const html = await (await get("/pricing")).text();
    expect(html).not.toMatch(/basicPrice|standardPrice|enterprisePrice/);
    const plan = await (await get("/api/pricing/plan")).json();
    expect(plan).toEqual({ signedIn: false });
  }, TIMEOUT);

  it("forms reject other sites and missing captchas", async () => {
    const post = (origin: string) =>
      get("/api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json", Origin: origin },
        body: JSON.stringify({ form: "contact-form", fields: { name: "Smoke Test", email: "ayesha@codeautomation.dev", phone: "+18505584691" } }),
      });
    expect((await post("https://evil.example")).status).toBe(403);
    const res = await post(ORIGIN);
    expect(res.status).toBe(400);
    expect((await res.json()).error).toMatch(/captcha/i);
  }, TIMEOUT);

  it("webhooks and admin routes refuse requests without their secret", async () => {
    for (const path of ["/api/revalidate", "/api/indexing", "/api/cal-booking", "/api/update-ghl-values", "/api/ghl-fbmeta"]) {
      expect((await get(path, { method: "POST", body: "{}" })).status, path).toBe(401);
    }
    expect((await get("/api/admin/visitors")).status).toBe(401);
  }, TIMEOUT);

  it("opening an unsubscribe link only asks for confirmation", async () => {
    const res = await get("/api/unsubscribe?email=smoke-test%40example.invalid");
    expect(res.status).toBe(200);
    expect(await res.text()).toContain('<form method="post">');
  }, TIMEOUT);

  it("the Sentry sample route is gone", async () => {
    expect((await get("/api/sentry-example-api")).status).toBe(404);
  }, TIMEOUT);
});
