import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://codeautomation.ai/services/mobile-app",
  },
};

export default function MobileAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
import React from "react";

export default function MobileAppLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
