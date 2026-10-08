// "Add as a preferred source on Google" badge for blog posts.
//   variant="floating" → tablets/desktop (md+): fixed bottom-left, raised above
//                        the bottom edge so it sits nearer eye level.
//   variant="inline"   → phones only: first item in the article column (right
//                        after the featured image), left-aligned with the text.
// Bottom-right is kept free for the chat widget and scroll-to-top button.

import Image from "next/image";

const PREFERRED_SOURCE_URL = "https://www.google.com/preferences/source?q=codeautomation.ai";

function BadgeLink({ className, sizes }: { className: string; sizes: string }) {
  return (
    <a
      href={PREFERRED_SOURCE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Add CodeAutomation as a preferred source on Google"
      className={`block rounded-xl ring-1 ring-black/5 transition-transform duration-300 ${className}`}
    >
      <Image
        src="/Add as a Preferred Source on Google 1.png"
        alt="Add as a preferred source on Google"
        width={2168}
        height={725}
        sizes={sizes}
        className="h-auto w-full rounded-xl"
      />
    </a>
  );
}

export default function PreferredSourceBadge({ variant }: { variant: "floating" | "inline" }) {
  if (variant === "inline") {
    return (
      <div className="md:hidden mb-6">
        <BadgeLink className="w-[180px] shadow-sm" sizes="180px" />
      </div>
    );
  }
  return (
    <div className="hidden md:block fixed bottom-28 left-6 z-40">
      <BadgeLink className="w-[210px] shadow-lg hover:-translate-y-0.5 hover:shadow-xl" sizes="210px" />
    </div>
  );
}
