import { Image as ImageIcon } from "lucide-react";

// Temporary stand-in for artwork that hasn't been produced yet. The label says
// what the final image should show and its intended size, so design knows
// exactly what to deliver. Swap for <Image> once the real asset exists.
export default function ImagePlaceholder({
  label,
  size,
  className = "",
  onDark = false,
}: {
  label: string;
  size: string;
  className?: string;
  /** Use on dark/coloured backgrounds. */
  onDark?: boolean;
}) {
  const colors = onDark
    ? "border-white/40 bg-white/10 text-white"
    : "border-[#1D92FB]/40 bg-[#EAF4FF] text-[#1D92FB]";
  return (
    <div
      role="img"
      aria-label={`Placeholder: ${label}`}
      className={`flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed text-center p-6 ${colors} ${className}`}
    >
      <ImageIcon className="w-10 h-10 opacity-70" aria-hidden />
      <span className="text-sm font-semibold">{label}</span>
      <span className="text-xs opacity-80">{size}</span>
    </div>
  );
}
