import { afterEach, describe, expect, it } from "vitest";
import { escapeHtml, hasBearerSecret, rateLimit, sameSiteRequest } from "@/lib/security/request";

const request = (headers: Record<string, string>) => new Request("https://codeautomation.ai/api/forms", { method: "POST", headers });

describe("sameSiteRequest", () => {
  it("accepts our own pages", () => {
    expect(sameSiteRequest(request({ origin: "https://codeautomation.ai" }))).toBe(true);
    expect(sameSiteRequest(request({ referer: "https://www.codeautomation.ai/contact" }))).toBe(true);
  });

  it("accepts the deployment's own host (Vercel previews)", () => {
    expect(sameSiteRequest(request({ origin: "https://preview-abc.vercel.app", host: "preview-abc.vercel.app" }))).toBe(true);
  });

  it("rejects other sites and requests without an origin", () => {
    expect(sameSiteRequest(request({ origin: "https://evil.example" }))).toBe(false);
    expect(sameSiteRequest(request({}))).toBe(false);
  });
});

describe("hasBearerSecret", () => {
  afterEach(() => {
    delete process.env.TEST_WEBHOOK_SECRET;
  });

  it("accepts only the exact secret", () => {
    process.env.TEST_WEBHOOK_SECRET = "s3cret";
    expect(hasBearerSecret(request({ authorization: "Bearer s3cret" }), "TEST_WEBHOOK_SECRET")).toBe(true);
    expect(hasBearerSecret(request({ authorization: "Bearer wrong" }), "TEST_WEBHOOK_SECRET")).toBe(false);
    expect(hasBearerSecret(request({}), "TEST_WEBHOOK_SECRET")).toBe(false);
  });

  it("rejects everything when the secret is not configured", () => {
    expect(hasBearerSecret(request({ authorization: "Bearer " }), "TEST_WEBHOOK_SECRET")).toBe(false);
    expect(hasBearerSecret(request({ authorization: "Bearer undefined" }), "TEST_WEBHOOK_SECRET")).toBe(false);
  });
});

describe("rateLimit", () => {
  it("allows the limit, then blocks, per key", () => {
    const key = `test:${Math.random()}`;
    expect([1, 2, 3].map(() => rateLimit(key, 3, 60_000))).toEqual([true, true, true]);
    expect(rateLimit(key, 3, 60_000)).toBe(false);
    expect(rateLimit(`${key}:other`, 3, 60_000)).toBe(true);
  });
});

describe("escapeHtml", () => {
  it("escapes markup", () => {
    expect(escapeHtml(`<script>alert("x")</script> & 'y'`)).toBe("&lt;script&gt;alert(&quot;x&quot;)&lt;/script&gt; &amp; &#39;y&#39;");
  });
});
