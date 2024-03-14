import { type SchemaTypeDefinition } from 'sanity'
import copyrighttext from './schemas/copyrighttext-schema'
import nav from './schemas/main-nav-links-schema'
import services from './schemas/top-services'
import expertise from './schemas/expertise'
import work from './schemas/our-work'
import workWithUs from './schemas/why-work-with-us'
import distinctiveWays from './schemas/distinctive-way'
import devProcess from './schemas/dev-process'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ copyrighttext,nav, services, expertise, work, workWithUs, distinctiveWays, devProcess],
}
