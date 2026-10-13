/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...index]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {codeInput} from '@sanity/code-input'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schema'
import {structure} from './sanity/structure'
import {CASE_STUDIES_PAGE_ID} from './sanity/schemas/content-types'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  document: {
    // The Case Study Order is a single settings document: no create/duplicate/delete.
    newDocumentOptions: (prev) => prev.filter((item) => item.templateId !== CASE_STUDIES_PAGE_ID),
    actions: (prev, {schemaType}) =>
      schemaType === CASE_STUDIES_PAGE_ID
        ? prev.filter(({action}) => action && ['publish', 'discardChanges', 'restore'].includes(action))
        : prev,
  },
  plugins: [
    structureTool({structure}),
    codeInput(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
})

