import {createClient} from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import {SanityImageSource} from '@sanity/image-url/lib/types/types'

export const client = createClient({
  projectId: 'zmt8ovh1',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
})
const builder = imageUrlBuilder(client)

export function urlForImage(source: SanityImageSource) {
  return builder.image(source)
}
