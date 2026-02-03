import createImageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'

import { dataset, projectId } from '../env'

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
