import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://codeautomation.ai/services/mobile-app",
  },
};

export default function MobileAppLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
