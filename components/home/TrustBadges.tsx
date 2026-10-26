import Image from "next/image";

// Recognition logos under the hero stats.
const BADGES = [
  { href: "https://clutch.co/profile/codeautomationai#highlights", src: "/Clutch.png", alt: "Clutch", width: 100, height: 10, external: true },
  { href: "/adnan-ghaffar-forbes", src: "/forbes.png", alt: "Forbes", width: 130, height: 10, className: "mb-3", external: false },
  { href: "/google-scholar", src: "/Google_Scholar_logo.png", alt: "Google Scholar", width: 60, height: 10, className: "mb-3", external: false },
  {
    href: "https://www.brainzmagazine.com/executive-contributor/adnan-ghaffar",
    src: "/brainz.png",
    alt: "Brainz Magazine",
    width: 70,
    height: 40,
    className: "mb-3",
    external: true,
  },
];

export default function TrustBadges() {
  return (
    <div className="max-w-full mx-auto px-4 md:px-0 relative max-w-[1920px]">
      <div className="flex justify-center items-center gap-6 md:gap-12 my-12">
        {BADGES.map((badge) => (
          <a
            key={badge.href}
            href={badge.href}
            target="_blank"
            rel={badge.external ? "noopener noreferrer" : undefined}
            className="text-center"
          >
            <Image src={badge.src} alt={badge.alt} width={badge.width} height={badge.height} className={badge.className} />
          </a>
        ))}
      </div>
    </div>
  );
}
