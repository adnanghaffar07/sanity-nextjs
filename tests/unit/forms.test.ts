import { beforeEach, describe, expect, it, vi } from "vitest";

// Nothing in these tests may reach Sanity, the CRM or email.
const { saved, captchaPasses } = vi.hoisted(() => ({ saved: vi.fn(), captchaPasses: vi.fn(async (_token?: string, _ip?: string | null) => false) }));
vi.mock("@/sanity/lib/server-client", () => ({
  privateId: () => "private.test",
  serverClient: { create: saved, fetch: vi.fn(), patch: vi.fn(), transaction: vi.fn() },
}));
vi.mock("@/lib/forms/server/emails", () => ({
  TEAM_EMAIL: "team@example.invalid",
  autoReply: vi.fn(),
  sendEmail: vi.fn(() => Promise.reject(new Error("must not send email"))),
  teamEmailHtml: vi.fn(() => ""),
}));
vi.mock("@/lib/forms/server/ghl", () => ({ syncLeadToCrm: vi.fn(() => Promise.reject(new Error("must not reach the CRM"))) }));
vi.mock("@/lib/forms/server/turnstile", () => ({ verifyTurnstileToken: captchaPasses }));

const { handleFormRequest } = await import("@/lib/forms/server/process");

const valid = { name: "Test Person", email: "ayesha@codeautomation.dev", phone: "+18505584691" };

describe("POST /api/forms (handleFormRequest)", () => {
  beforeEach(() => {
    saved.mockClear();
    captchaPasses.mockClear();
  });

  it("rejects a body that isn't an object", async () => {
    expect((await handleFormRequest("nope", null)).status).toBe(400);
    expect((await handleFormRequest(null, null)).status).toBe(400);
  });

  it("rejects an unknown form", async () => {
    const result = await handleFormRequest({ form: "not-a-form", fields: valid }, null);
    expect(result).toEqual({ status: 400, body: { ok: false, error: "Unknown form." } });
  });

  it("lists the missing required fields", async () => {
    const result = await handleFormRequest({ form: "contact-form", fields: {} }, null);
    expect(result.status).toBe(400);
    expect(Object.keys((result.body as { fieldErrors: object }).fieldErrors)).toEqual(expect.arrayContaining(["name", "email", "phone"]));
  });

  it("rejects a submission whose captcha fails, before saving anything", async () => {
    const result = await handleFormRequest({ form: "contact-form", fields: valid, captchaToken: "fake" }, "1.2.3.4");
    expect(result).toEqual({ status: 400, body: { ok: false, error: "Captcha verification failed. Please try again." } });
    expect(captchaPasses).toHaveBeenCalledWith("fake", "1.2.3.4");
    expect(saved).not.toHaveBeenCalled();
  });

  it("only passes a string captcha token on", async () => {
    await handleFormRequest({ form: "contact-form", fields: valid, captchaToken: { not: "a string" } }, null);
    expect(captchaPasses).toHaveBeenCalledWith(undefined, null);
  });
});
