"use client";

import type { ReactNode } from "react";
import { Link as ScrollLink } from "react-scroll";

// Smooth-scrolls to the element with id `destination`.
export default function ScrollToSectionButton({
  content,
  classes,
  destination,
}: {
  content: ReactNode;
  classes?: string;
  destination: string;
}) {
  return (
    <ScrollLink to={destination} spy smooth offset={-10} duration={500} className={classes}>
      {content}
    </ScrollLink>
  );
}
