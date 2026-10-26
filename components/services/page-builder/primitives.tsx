// Shared building blocks for the Service Page section components.

import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import type { Image as SanityImageValue } from "sanity";
import { PortableText, type PortableTextBlock, type PortableTextComponents } from "@portabletext/react";
import { isSvgImage, urlForImage } from "@/sanity/lib/image";
import { resolveLink, type LinkMap, type SpLink } from "./links";
import { Icon } from "./icons";

// ── Rich text ────────────────────────────────────────────────────────────────

type TextBlock = { children?: { text?: string }[] } | null | undefined;

// Rich-text fields arrive as an array of blocks (or, in old content, a plain string).
const blocksOf = (value: unknown): TextBlock[] => (Array.isArray(value) ? value : []);
const blockText = (block: TextBlock) => (block?.children ?? []).map((span) => span?.text ?? "").join("");

export const hasRichText = (value: unknown) => blocksOf(value).some((block) => blockText(block).trim() !== "");

export const toPlainText = (value: unknown): string =>
  Array.isArray(value) ? blocksOf(value).map(blockText).join(" ").trim() : typeof value === "string" ? value : "";

type RichTextProps = {
  value: unknown;
  links: LinkMap;
  /** Render paragraphs inline (no <p>), for short text inside other elements. */
  inline?: boolean;
  className?: string;
  /** Link colour; use a light one on dark backgrounds. */
  linkClassName?: string;
};

export function RichText({
  value,
  links,
  inline = false,
  className = "",
  linkClassName = "font-medium text-[#1D92FB] underline underline-offset-2 hover:text-blue-700",
}: RichTextProps) {
  if (!hasRichText(value)) return null;

  const components: PortableTextComponents = {
    block: {
      normal: ({ children }) =>
        inline ? <>{children} </> : <p className="[&:not(:first-child)]:mt-4">{children}</p>,
    },
    list: {
      bullet: ({ children }) => <ul className="mt-3 list-disc space-y-1.5 pl-5">{children}</ul>,
      number: ({ children }) => <ol className="mt-3 list-decimal space-y-1.5 pl-5">{children}</ol>,
    },
    marks: {
      internalLink: ({ value: mark, children }) => {
        const resolved = resolveLink(
          { linkType: "internal", reference: mark?.reference, path: mark?.path },
          links
        );
        if (!resolved) return <>{children}</>;
        return (
          <Link href={resolved.href} className={linkClassName}>
            {children}
          </Link>
        );
      },
      externalLink: ({ value: mark, children }) => {
        if (!mark?.href) return <>{children}</>;
        const newTab = mark.openInNewTab !== false;
        return (
          <a
            href={mark.href}
            className={linkClassName}
            target={newTab ? "_blank" : undefined}
            rel={newTab ? "noopener noreferrer" : undefined}
          >
            {children}
          </a>
        );
      },
    },
  };

  const Wrapper = inline ? "span" : "div";
  return (
    <Wrapper className={className}>
      <PortableText value={value as PortableTextBlock[]} components={components} />
    </Wrapper>
  );
}

// ── Links & buttons ──────────────────────────────────────────────────────────

/** Wraps children in a link when `link` resolves; otherwise renders `fallback` tag. */
export function SmartLink({
  link,
  links,
  className,
  children,
  fallbackAs = "div",
}: {
  link?: SpLink;
  links: LinkMap;
  className?: string;
  children: ReactNode;
  fallbackAs?: "div" | "span" | "li";
}) {
  const resolved = resolveLink(link, links);
  if (!resolved) {
    const Tag = fallbackAs;
    return <Tag className={className}>{children}</Tag>;
  }
  if (resolved.external) {
    return (
      <a href={resolved.href} target={resolved.target} rel={resolved.rel} className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={resolved.href} target={resolved.target} rel={resolved.rel} className={className}>
      {children}
    </Link>
  );
}

export type SpButton = { label?: string; link?: SpLink; style?: "primary" | "accent" | "outline" };

const BUTTON_STYLES: Record<string, string> = {
  primary: "bg-[#1D92FB] text-white hover:bg-blue-600 shadow-lg",
  accent: "bg-[#f7e022] text-black hover:bg-yellow-400 shadow-lg",
  outline: "border border-current bg-transparent hover:bg-black/5",
};

export function Button({
  button,
  links,
  icon,
  className = "",
  defaultStyle = "primary",
}: {
  button?: SpButton;
  links: LinkMap;
  icon?: string;
  className?: string;
  defaultStyle?: "primary" | "accent" | "outline";
}) {
  if (!button?.label) return null;
  const resolved = resolveLink(button.link, links);
  if (!resolved) return null;
  const style = BUTTON_STYLES[button.style || defaultStyle] ?? BUTTON_STYLES.primary;
  const cls = `inline-flex items-center justify-center gap-2 text-center sm:whitespace-nowrap rounded-lg px-6 py-3 font-semibold transition-colors ${style} ${className}`;
  const content = (
    <>
      {icon && <Icon name={icon} className="h-5 w-5 shrink-0" />}
      {button.label}
    </>
  );
  return resolved.external ? (
    <a href={resolved.href} target={resolved.target} rel={resolved.rel} className={cls}>
      {content}
    </a>
  ) : (
    <Link href={resolved.href} target={resolved.target} rel={resolved.rel} className={cls}>
      {content}
    </Link>
  );
}

// ── Headers & images ─────────────────────────────────────────────────────────

export function SectionHeader({
  eyebrow,
  heading,
  intro,
  links,
  dark = false,
  align = "center",
  as: HeadingTag = "h2",
}: {
  eyebrow?: string;
  heading?: string;
  intro?: unknown;
  links: LinkMap;
  dark?: boolean;
  align?: "center" | "left";
  as?: "h1" | "h2";
}) {
  if (!heading && !eyebrow) return null;
  const alignCls = align === "center" ? "text-center mx-auto" : "text-center lg:text-left";
  return (
    <div className={`max-w-3xl ${alignCls}`}>
      {eyebrow && (
        <span className={`text-sm font-semibold uppercase tracking-wider ${dark ? "text-[#7cc0ff]" : "text-[#1D92FB]"}`}>
          {eyebrow}
        </span>
      )}
      {heading && (
        <HeadingTag className={`mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight ${dark ? "text-white" : "text-black"}`}>
          {heading}
        </HeadingTag>
      )}
      <RichText
        value={intro}
        links={links}
        className={`mt-5 text-base sm:text-lg leading-7 ${dark ? "text-gray-300" : "text-gray-700"}`}
        linkClassName={dark ? "font-medium text-[#7cc0ff] underline underline-offset-2" : undefined}
      />
    </div>
  );
}

// `url` is only used by the dev preview page (local sample images).
export type SpImageValue = { asset?: { _ref?: string }; alt?: string; url?: string } | undefined;

export const hasImage = (image: SpImageValue) => Boolean(image?.asset?._ref || image?.url);

// A value with an asset reference is a real Sanity image (crop/hotspot included).
const asSanityImage = (image: SpImageValue) => (image?.asset?._ref ? (image as SanityImageValue) : null);

export const imageUrl = (image: SpImageValue) => {
  const sanityImage = asSanityImage(image);
  return sanityImage ? urlForImage(sanityImage).toString() : image?.url;
};

export function SanityImage({
  image,
  width,
  height,
  sizes,
  className,
  priority,
}: {
  image: SpImageValue;
  width: number;
  height: number;
  sizes: string;
  className?: string;
  priority?: boolean;
}) {
  const src = imageUrl(image);
  if (!src) return null;
  return (
    <Image
      src={src}
      alt={image?.alt || ""}
      width={width}
      height={height}
      sizes={sizes}
      priority={priority}
      unoptimized={isSvgImage(asSanityImage(image))}
      className={className}
    />
  );
}

/** Wraps a section with its optional anchor id. */
export function SectionShell({
  anchorId,
  className,
  children,
}: {
  anchorId?: string;
  className: string;
  children: ReactNode;
}) {
  return (
    <section id={anchorId || undefined} className={`scroll-mt-28 ${className}`}>
      {children}
    </section>
  );
}
