"use client";

// A Sanity image through next/image. The Sanity CDN does the resizing and
// format conversion (the loader below), so these images don't use Vercel's
// image optimization. Without `fill`, the pixel size is read from the asset id
// so the browser reserves the right space.

import Image, { type ImageLoader } from "next/image";
import type { Image as SanityImageSource } from "sanity";
import { imageDimensions, isSvgImage, urlForImage } from "@/sanity/lib/image";

const sanityLoader: ImageLoader = ({ src, width, quality }) => `${src}&w=${width}&q=${quality ?? 75}`;

interface SanityImageProps {
  image?: (SanityImageSource & { alt?: string }) | null;
  alt?: string;
  sizes: string;
  className?: string;
  fill?: boolean;
  priority?: boolean;
}

export default function SanityImage({ image, alt, sizes, className, fill, priority }: SanityImageProps) {
  if (!image?.asset?._ref) return null;
  const size = fill ? null : imageDimensions(image);
  if (!fill && !size) return null;
  const svg = isSvgImage(image);

  return (
    <Image
      src={urlForImage(image)}
      loader={svg ? undefined : sanityLoader}
      unoptimized={svg}
      alt={image.alt || alt || ""}
      sizes={sizes}
      className={className}
      priority={priority}
      {...(fill ? { fill: true } : { width: size!.width, height: size!.height })}
    />
  );
}
