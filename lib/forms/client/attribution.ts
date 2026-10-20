// Remembers how a visitor arrived (first page, referrer, UTM tags, ad click ids)
// so a form submitted later, on another page, can still report it.

import type { SubmissionContext } from "@/lib/forms/types";

const STORAGE_KEY = "ca_attribution";
const MAX_AGE_MS = 30 * 24 * 60 * 60 * 1000;

type Attribution = Omit<SubmissionContext, "pageUrl" | "pageTitle"> & { capturedAt: number };

const PARAMS: [keyof Attribution, string][] = [
  ["utmSource", "utm_source"],
  ["utmMedium", "utm_medium"],
  ["utmCampaign", "utm_campaign"],
  ["utmTerm", "utm_term"],
  ["utmContent", "utm_content"],
  ["gclid", "gclid"],
  ["fbclid", "fbclid"],
];

function read(): Attribution | null {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "null") as Attribution | null;
    return stored && Date.now() - stored.capturedAt < MAX_AGE_MS ? stored : null;
  } catch {
    return null;
  }
}

function externalReferrer(): string | undefined {
  try {
    const referrer = document.referrer;
    return referrer && new URL(referrer).host !== window.location.host ? referrer : undefined;
  } catch {
    return undefined;
  }
}

/**
 * Call once per page load. Keeps the first visit's details, and replaces them
 * when the visitor comes back through a new campaign link.
 */
export function captureAttribution() {
  const params = new URLSearchParams(window.location.search);
  const campaign = Object.fromEntries(
    PARAMS.flatMap(([key, param]) => (params.get(param) ? [[key, params.get(param)!.slice(0, 300)]] : []))
  );
  const hasCampaign = Object.keys(campaign).length > 0;
  if (read() && !hasCampaign) return;

  const attribution: Attribution = {
    landingPage: window.location.href,
    referrer: externalReferrer(),
    ...campaign,
    capturedAt: Date.now(),
  };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(attribution));
  } catch {
    // storage blocked: forms still send the current page
  }
}

/** Page and attribution details to send with a form. */
export function submissionContext(): SubmissionContext {
  const { capturedAt, ...attribution } = read() ?? { capturedAt: 0, referrer: externalReferrer() };
  return { pageUrl: window.location.href, pageTitle: document.title, ...attribution };
}
