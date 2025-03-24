"use client";

import PreventCopy from "@/app/(site)/components/PreventCopy";
import { StudioProvider, defineConfig } from "sanity"; // ✅ Use defineConfig
import { deskTool } from "sanity/desk";

const sanityConfig = defineConfig({
  projectId: "ld8m6d0z",
  dataset: "production",
  apiVersion: "2024-03-14",
  basePath: "/studio",
  plugins: [deskTool()], // Add any required plugins
});

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <StudioProvider config={sanityConfig}> {/* ✅ Use the correct config */}
      <PreventCopy />
      {children}
    </StudioProvider>
  );
}
