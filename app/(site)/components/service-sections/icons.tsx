// Maps the icon names editors pick in Sanity (see ICON_OPTIONS in
// sanity/schemas/service-page/shared.ts) to lucide-react components.

import * as Lucide from "lucide-react";
import type { LucideIcon } from "lucide-react";

export function getIcon(name?: string, fallback: LucideIcon = Lucide.CircleCheck): LucideIcon {
  if (!name) return fallback;
  const icon = (Lucide as unknown as Record<string, LucideIcon | undefined>)[name];
  return icon ?? fallback;
}

export function Icon({
  name,
  className,
  fallback,
}: {
  name?: string;
  className?: string;
  fallback?: LucideIcon;
}) {
  const Cmp = getIcon(name, fallback);
  return <Cmp className={className} aria-hidden />;
}
