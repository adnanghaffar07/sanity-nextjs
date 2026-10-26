import { beforeEach, describe, expect, it, vi } from "vitest";

const { unsubscribe } = vi.hoisted(() => ({ unsubscribe: vi.fn(async (_email: string) => 1) }));
vi.mock("@/lib/forms/server/audience", () => ({ unsubscribe }));

const { GET, POST } = await import("@/app/api/unsubscribe/route");

const url = (email: string) => `https://codeautomation.ai/api/unsubscribe?email=${encodeURIComponent(email)}`;

describe("/api/unsubscribe", () => {
  beforeEach(() => unsubscribe.mockClear());

  it("opening the link only shows a confirmation button (mail scanners open every link)", async () => {
    const res = GET(new Request(url("a@b.co")));
    expect(res.status).toBe(200);
    expect(await res.text()).toContain('<form method="post">');
    expect(unsubscribe).not.toHaveBeenCalled();
  });

  it("the button (POST) unsubscribes", async () => {
    const res = await POST(new Request(url("a@b.co"), { method: "POST" }));
    expect(res.status).toBe(200);
    expect(unsubscribe).toHaveBeenCalledWith("a@b.co");
  });

  it("escapes the address it shows", async () => {
    const html = await GET(new Request(url("<script>x</script>@b.co"))).text();
    expect(html).not.toContain("<script>x");
  });

  it("rejects a link without an address", async () => {
    expect(GET(new Request("https://codeautomation.ai/api/unsubscribe")).status).toBe(400);
  });
});
