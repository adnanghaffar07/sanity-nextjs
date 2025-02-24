import createImageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'

import { dataset, projectId } from '../env'
const imageBuilder = createImageUrlBuilder({
  projectId: projectId || 'ld8m6d0z',
  dataset: dataset || 'production',
})

export const urlForImage = (source: Image) => {
  return imageBuilder?.image(source).auto('format').fit('max').url()
}
