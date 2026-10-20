import Image from "next/image";
import { imageDimensions, isSvgImage, urlForImage } from "@/sanity/lib/image";
import type { TechLogo } from "@/sanity/lib/technologies";

// A Technology Logo at a fixed height, keeping its own width.
export default function SanityLogo({
  logo,
  height,
  className,
  alt = logo.image.alt || logo.name,
}: {
  logo: TechLogo;
  height: number;
  className: string;
  alt?: string;
}) {
  const size = imageDimensions(logo.image);
  const width = size ? Math.round((height * size.width) / size.height) : height;
  return (
    <Image
      src={urlForImage(logo.image)}
      alt={alt}
      width={width}
      height={height}
      unoptimized={isSvgImage(logo.image)}
      className={className}
    />
  );
}
