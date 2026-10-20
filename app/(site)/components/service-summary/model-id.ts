import { Briefcase, Clock, FlaskConical, ReceiptText, ShieldCheck, Users, type LucideIcon } from "lucide-react";

/** Anchor id for an engagement model, e.g. "Time & Materials" → "time-materials". */
export const modelId = (title = "") =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

// An icon for each engagement model, matched on its name; anything new gets a briefcase.
const ICONS: [RegExp, LucideIcon][] = [
  [/proof of concept|poc/i, FlaskConical],
  [/time\s*&?\s*materials?/i, Clock],
  [/fixed/i, ReceiptText],
  [/managed/i, ShieldCheck],
  [/staff|augment/i, Users],
];

export const modelIcon = (title = ""): LucideIcon => ICONS.find(([pattern]) => pattern.test(title))?.[1] ?? Briefcase;
