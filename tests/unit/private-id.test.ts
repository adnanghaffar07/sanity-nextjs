import { describe, expect, it } from "vitest";
import { privateId } from "@/sanity/lib/server-client";

describe("privateId (documents with personal data)", () => {
  it('starts with "private." so Sanity hides it from unauthenticated requests', () => {
    expect(privateId()).toMatch(/^private\.[0-9a-f-]{36}$/);
  });

  it("is unique", () => {
    const ids = new Set(Array.from({ length: 1000 }, privateId));
    expect(ids.size).toBe(1000);
  });
});
