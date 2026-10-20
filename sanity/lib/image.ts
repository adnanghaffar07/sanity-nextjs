import createImageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'

import { dataset, projectId } from '@/sanity/env'

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || 'ld8m6d0z',
  dataset: dataset || 'production',
})

export const urlForImage = (source: Image) => {
  if (!source || !('asset' in source) || !source.asset?._ref) {
    console.warn("Invalid image source passed to urlForImage:", source)
    return "/thankyou.png" // fallback image
  }

  return imageBuilder.image(source).auto('format').fit('max').url()
}

/** Pixel size of a Sanity image, read from its asset id ("image-<hash>-564x564-jpg"). */
export const imageDimensions = (source?: Image | null): { width: number; height: number } | null => {
  const ref = source?.asset?._ref
  const match = ref?.match(/-(\d+)x(\d+)-[a-z0-9]+$/)
  return match ? { width: Number(match[1]), height: Number(match[2]) } : null
}

/** SVGs skip next/image optimization (it rejects them) and are served straight from the Sanity CDN. */
export const isSvgImage = (source?: Image | null): boolean => Boolean(source?.asset?._ref?.endsWith('-svg'))
