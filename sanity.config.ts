import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
// import {visionTool} from '@sanity/vision'
// import {schemaTypes} from './schemaTypes'
import schemas from './sanity/schemas';

export default defineConfig({
  title: 'Sanity CA NextJS Website',
  projectId: 'lfi3kjj6',
  dataset: 'production',
  apiVersion: "2024-02-25",
  plugins: [structureTool()],
  basePath: "/admin",
  schema: { types: schemas }
})
