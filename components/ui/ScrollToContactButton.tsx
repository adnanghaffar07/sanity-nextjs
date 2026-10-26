"use client";

import type { ReactNode } from "react";

// Smooth-scrolls to the page's contact form (the element with id "contact-box").
export default function ScrollToContactButton({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <button
      type="button"
      onClick={() => document.getElementById("contact-box")?.scrollIntoView({ behavior: "smooth" })}
      className={className}
    >
      {children}
    </button>
  );
}
