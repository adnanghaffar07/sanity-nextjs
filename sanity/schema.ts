import { type SchemaTypeDefinition } from 'sanity'
import careers from './schemas/careers-job'
import blog from './schemas/blog-sub-page'
import services from './schemas/services'
import technologies from './schemas/technologies'



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [services, blog, careers, technologies],
}
