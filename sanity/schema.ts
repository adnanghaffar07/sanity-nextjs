import { type SchemaTypeDefinition } from 'sanity'
import careers from './schemas/careers-job'
import blog from './schemas/blog-sub-page'
import services from './schemas/services'
import technologies from './schemas/technologies'
import newServices from './schemas/new-ServicePage'
import { logicalServices, subServiceSchema } from './schemas/logical-services'



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [services, blog, careers, technologies, newServices, logicalServices, subServiceSchema],
}
