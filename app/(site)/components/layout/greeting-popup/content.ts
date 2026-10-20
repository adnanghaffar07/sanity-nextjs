// Fixed content and timings of the greeting (newsletter sign-up) popup.

import handshakeImage from "@/public/greeting-popup/handshake.jpg";
import logoImage from "@/public/greeting-popup/logo.png";

export const POPUP_CONTENT = {
  title: "Sign Up For News And Updates",
  image: { src: handshakeImage, alt: "greeting popup" },
  logo: { src: logoImage, alt: "logo" },
} as const;

/** Set once the popup has been closed, so it isn't shown again. */
export const SEEN_STORAGE_KEY = "hasVisited";

export const TIMINGS = {
  /** After page load, before the popup's code is even downloaded. */
  mountDelayMs: 8000,
  /** After mounting, before the popup appears. */
  showDelayMs: 300,
  /** After appearing, before the open animation starts. */
  animateDelayMs: 300,
  /** Length of the close animation. */
  closeAnimationMs: 500,
  /** After a successful submission, before the popup closes. */
  closeAfterSuccessMs: 4000,
  /** How long the status message stays visible. */
  messageVisibleMs: 8000,
} as const;

export function hasSeenPopup(): boolean {
  try {
    return localStorage.getItem(SEEN_STORAGE_KEY) !== null;
  } catch {
    return false; // storage blocked (private mode, etc.)
  }
}

export function markPopupSeen(): void {
  try {
    localStorage.setItem(SEEN_STORAGE_KEY, "true");
  } catch {
    // storage blocked: the popup may show again on the next visit
  }
}
