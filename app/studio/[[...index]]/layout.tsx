import type { Metadata } from "next";
import { metadata as studioMetadata } from "next-sanity/studio";

// Sanity's recommended Studio page settings (no indexing, mobile viewport),
// with our own browser tab title.
export { viewport } from "next-sanity/studio";

export const metadata: Metadata = { ...studioMetadata, title: "CodeAutomation Studio" };

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
