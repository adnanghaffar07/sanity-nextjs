// The article body (Sanity rich text): headings, lists, links, images, code
// blocks and YouTube videos.

import Link from "next/link";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "sanity";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import SanityImage from "@/components/ui/SanityImage";
import type { BlogImage } from "@/sanity/lib/blog";

const YOUTUBE_ID = /(?:\?v=|\/embed\/|\.be\/)([\w-]{11})/;

const components: PortableTextComponents = {
  marks: {
    link: ({ value, children }) => {
      const href: string = value?.href ?? "";
      const external = href.startsWith("http");
      return (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "nofollow noopener noreferrer" : undefined}
          className="text-blue-600 font-light underline"
        >
          {children}
        </a>
      );
    },
    internalLink: ({ value, children }) => <Link href={`/blogs/${value?.slug}`}>{children}</Link>,
  },
  types: {
    image: ({ value }: { value: BlogImage }) => (
      <SanityImage
        image={value}
        alt="Blog post image"
        sizes="(min-width: 1024px) 976px, 100vw"
        className="object-cover w-full h-auto rounded-2xl"
      />
    ),
    code: ({ value }: { value: { code?: string; language?: string } }) => (
      <div className="my-6">
        <SyntaxHighlighter language={value.language || "javascript"} style={dracula}>
          {value.code ?? ""}
        </SyntaxHighlighter>
      </div>
    ),
    youtubeEmbed: ({ value }: { value: { url?: string } }) => {
      const videoId = value.url?.match(YOUTUBE_ID)?.[1];
      if (!videoId) return <p className="text-red-500">Invalid YouTube URL</p>;
      return (
        <div className="my-8 w-full aspect-video relative">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full rounded-xl border-none"
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc ml-5 space-y-2 my-4">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal ml-5 space-y-2 my-4">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="ml-3 text-gray-700">{children}</li>,
    number: ({ children }) => <li className="ml-3 text-gray-700">{children}</li>,
  },
  block: {
    h1: ({ children }) => <h1 className="text-3xl md:text-4xl font-bold mt-8 mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl md:text-3xl font-semibold mt-8 mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl md:text-2xl font-semibold mt-6 mb-3">{children}</h3>,
    h4: ({ children }) => <h4 className="text-lg md:text-xl font-medium mt-5 mb-3">{children}</h4>,
    normal: ({ children }) => <p className="text-gray-700 leading-relaxed mb-4">{children}</p>,
  },
};

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

export default function BlogBody({ value }: { value: PortableTextBlock[] }) {
  return (
    <div className="prose prose-lg max-w-none">
      <PortableText value={value} components={components} />
    </div>
  );
}
