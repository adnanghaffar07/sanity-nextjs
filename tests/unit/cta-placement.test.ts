import { describe, expect, it } from "vitest";
import type { PortableTextBlock } from "sanity";
import { splitForCta } from "@/components/blog/cta-placement";

let key = 0;
const block = (text: string, style = "normal", extra: Partial<PortableTextBlock> = {}): PortableTextBlock => ({
  _type: "block",
  _key: `b${++key}`,
  style,
  children: [{ _type: "span", _key: `s${key}`, text, marks: [] }],
  ...extra,
});
const paragraph = (characters: number) => block("x".repeat(characters));
const bold = (text: string) => ({ ...block(text), children: [{ _type: "span", _key: `s${++key}`, text, marks: ["strong"] }] });
const listItem = (text: string, style = "normal") => block(text, style, { listItem: "bullet", level: 1 });

describe("splitForCta (blog banner placement)", () => {
  it("puts the banner at the end of a short article", () => {
    const body = [paragraph(500), block("Heading", "h2"), paragraph(500)];
    expect(splitForCta(body)).toEqual([body, []]);
  });

  it("splits before the first heading after enough text, not an earlier one", () => {
    const early = block("Early heading", "h2");
    const later = block("Later heading", "h2");
    const body = [paragraph(1000), early, paragraph(3000), later, paragraph(1000)];
    const [before, after] = splitForCta(body);
    expect(after[0]).toBe(later);
    expect(before).toHaveLength(3);
  });

  it("counts text shown above the body (the introduction)", () => {
    const heading = block("Heading", "h2");
    const [, after] = splitForCta([paragraph(100), heading, paragraph(100)], "x".repeat(3600));
    expect(after[0]).toBe(heading);
  });

  it("treats a paragraph written entirely in bold as a heading", () => {
    const subtitle = bold("Why it matters");
    const [, after] = splitForCta([paragraph(4000), subtitle, paragraph(500)]);
    expect(after[0]).toBe(subtitle);
  });

  it("never splits a list, even when its items are styled as headings", () => {
    const body = [paragraph(4000), listItem("Item one", "h3"), listItem("Item two", "h3"), block("Next section", "h2")];
    const [before, after] = splitForCta(body);
    expect(after[0].style).toBe("h2");
    expect(before.at(-1)?.listItem).toBe("bullet");
  });

  it("without headings, uses a paragraph break after twice the text, outside lists", () => {
    const body = [paragraph(7000), listItem("a".repeat(400)), listItem("b"), paragraph(50), paragraph(50)];
    const [before, after] = splitForCta(body);
    expect(before).toHaveLength(3);
    expect(after[0].listItem).toBeUndefined();
  });
});
