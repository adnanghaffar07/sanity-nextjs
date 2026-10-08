import { spLink, spButton, spRichText, spImage } from "./shared";
import { SECTION_TYPES } from "./sections";
import { servicePage } from "./servicePage";

// All schema types for the new section-based Service Page.
export const servicePageTypes = [
  servicePage,
  spLink,
  spButton,
  spRichText,
  spImage,
  ...SECTION_TYPES,
];
