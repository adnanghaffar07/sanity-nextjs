import Image from "next/image";

// Full-bleed hero background photo (the page's LCP image, so it loads first).
export default function HeroBackground() {
  return (
    <Image
      src="/ca-banner.jpg"
      alt=""
      fill
      priority
      sizes="100vw"
      className="absolute top-0 left-0 w-full h-full object-cover"
    />
  );
}
