// Small pieces shared by the legacy service page sections.

import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "sanity";
import { portableTextComponents } from "./portableTextComponents";
import type { NumberedItem } from "@/sanity/lib/legacy-services";

export const CONSULTATION_URL = "https://calendly.com/adnanghaffar/codeautomation?utm_source=website&utm_campaign=services";

/** The footer contact form that "scroll to" buttons point at. */
export const CONTACT_FORM_ID = "contact-box";

/** Light blue wash behind a section. */
export function Tint() {
  return <div className="absolute inset-0 bg-[#1D92FB] opacity-10 pointer-events-none" />;
}

const BANNER_BACKGROUND: CSSProperties = { backgroundImage: "url(/Container.jpeg)", backgroundSize: "cover", backgroundPosition: "center" };

/** Full-width section on the blue "Container" background image. */
export function ImageBanner({ children }: { children: ReactNode }) {
  return (
    <section className="px-6 md:px-16 py-10 md:py-16 bg-cover bg-center bg-no-repeat" style={BANNER_BACKGROUND}>
      {children}
    </section>
  );
}

/** "Book a call" link used by several banners. */
export function ConsultationLink({ children, maxWidth }: { children: ReactNode; maxWidth?: boolean }) {
  return (
    <Link
      href={CONSULTATION_URL}
      className="button"
      target="_blank"
      rel="noopener noreferrer"
      style={maxWidth ? { maxWidth: "320px" } : undefined}
    >
      {children}
    </Link>
  );
}

/** Wrapping row of fixed-width cards. */
export function CardRow({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-[20px] sm:gap-[30px] 2xl:gap-[30px] max-w-[1440px] sm:my-40" style={{ marginTop: 0, marginBottom: 0 }}>
      {children}
    </div>
  );
}

/** Rich text if the editor used it, plain text otherwise. */
export function RichOrPlain({ blocks, text }: { blocks?: PortableTextBlock[]; text?: string }) {
  return blocks?.length ? <PortableText value={blocks} components={portableTextComponents} /> : <>{text}</>;
}

/** Numbered steps joined by a vertical line. */
export function NumberedList({ items }: { items: NumberedItem[] }) {
  return (
    <div className="space-y-8">
      {items.map((item, index) => (
        <div key={index} className="relative flex items-start">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-[#1D92FB] text-white font-bold">{item.number}</div>
            {index < items.length - 1 && <div className="absolute left-5 top-16 h-10 border-l-4 border-[#1D92FB]" />}
          </div>
          <div className="ml-8">
            <h3 className="text-xl font-semibold text-[#1D92FB]">{item.title}</h3>
            <div className="text-[#3C3C3C] mt-2">
              <RichOrPlain blocks={item.descriptionBlock} text={item.description} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
