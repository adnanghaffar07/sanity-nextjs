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
import {CASE_STUDY_ORDER_ID} from './sanity/schemas/content-types'
import {HOME_PAGE_ID} from './sanity/schemas/home-page'
import {RESUME_SUBMISSION_TYPE} from './sanity/schemas/resume-submission'
import {TECHNOLOGY_ORDER_ID} from './sanity/schemas/technologies'

// One-of-a-kind settings documents: editable, but never created, duplicated or deleted.
const SINGLETON_TYPES = new Set<string>([HOME_PAGE_ID, CASE_STUDY_ORDER_ID, TECHNOLOGY_ORDER_ID])
// Read-only archives: can be viewed and deleted, never created.
const ARCHIVE_TYPES = new Set<string>([RESUME_SUBMISSION_TYPE])

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  document: {
    newDocumentOptions: (prev) =>
      prev.filter((item) => !SINGLETON_TYPES.has(item.templateId) && !ARCHIVE_TYPES.has(item.templateId)),
    actions: (prev, {schemaType}) => {
      if (SINGLETON_TYPES.has(schemaType))
        return prev.filter(({action}) => action && ['publish', 'discardChanges', 'restore'].includes(action))
      if (ARCHIVE_TYPES.has(schemaType)) return prev.filter(({action}) => action === 'delete')
      return prev
    },
  },
  plugins: [
    structureTool({structure}),
    codeInput(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
})

