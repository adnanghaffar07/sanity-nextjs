// Where the "Ready to Automate" banner goes inside a blog post (see
// app/(site)/blogs/[slug]/page.tsx). Pure logic, so it is unit-tested.

import type { PortableTextBlock } from "sanity";

// About 800px of article text at the body font size and width. Articles
// without a heading by twice that get the banner between two paragraphs.
const CTA_MIN_CHARACTERS = 3600;
const CTA_MAX_CHARACTERS = CTA_MIN_CHARACTERS * 2;
const HEADINGS = new Set(["h1", "h2", "h3", "h4"]);

type Span = { text?: string; marks?: string[] };
const spans = (block: PortableTextBlock) => (Array.isArray(block.children) ? (block.children as Span[]) : []);
const blockText = (block: PortableTextBlock) => spans(block).map((span) => span.text ?? "").join("");

// A heading style, or a paragraph written entirely in bold (used as a heading in older posts).
const isHeading = (block: PortableTextBlock) =>
  !block.listItem &&
  (HEADINGS.has(block.style as string) ||
    (blockText(block).trim().length > 0 &&
      spans(block).every((span) => !span.text?.trim() || span.marks?.includes("strong"))));

/**
 * Splits the article where the call-to-action banner goes: at the first
 * heading after roughly 400px of reading, so the banner never sits right under
 * the title or cuts through a section (or, with no heading soon enough, between
 * two paragraphs, never inside a list). Short articles get it at the end.
 */
export function splitForCta(value: PortableTextBlock[], textBefore = ""): [PortableTextBlock[], PortableTextBlock[]] {
  let characters = textBefore.length;
  for (let index = 0; index < value.length; index++) {
    const block = value[index];
    const paragraphBreak = block._type === "block" && !block.listItem;
    if ((characters >= CTA_MIN_CHARACTERS && isHeading(block)) || (characters >= CTA_MAX_CHARACTERS && paragraphBreak)) {
      return [value.slice(0, index), value.slice(index)];
    }
    characters += blockText(block).length;
  }
  return [value, []];
}
