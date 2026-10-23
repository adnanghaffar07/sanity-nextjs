// Opens or closes the Tawk.to chat window (loaded by LiveChatTawk).
// Returns false while the widget is still loading.

type TawkWindow = Window & { Tawk_API?: { toggle?: () => void } };

export function toggleLiveChat(): boolean {
  const tawk = typeof window === "undefined" ? undefined : (window as TawkWindow).Tawk_API;
  if (!tawk?.toggle) return false;
  tawk.toggle();
  return true;
}
