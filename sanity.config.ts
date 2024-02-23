import {defineConfig} from 'sanity';
import {structureTool} from 'sanity/structure'
// import project from './sanity/schemas/project-schema';
import schemas from './sanity/schemas';
// import {visionTool} from '@sanity/vision'

export default defineConfig({
  
    projectId: '2xjwj9rp',
    dataset: 'production',
    title: 'QA Portfolio NextJS Website',
    apiVersion: "2023-02-21",
    basePath: "/admin",
    plugins: [structureTool()],
    schema: { types: schemas }
  })
  