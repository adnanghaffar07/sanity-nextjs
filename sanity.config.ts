// Sanity Studio for codeautomation.ai, served at /studio (app/studio/[[...index]]).

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {codeInput} from '@sanity/code-input'

import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schema'
import {structure} from './sanity/structure'
import StudioLogo from './sanity/components/StudioLogo'
import {CASE_STUDY_ORDER_ID} from './sanity/schemas/content-types'
import {HOME_PAGE_ID} from './sanity/schemas/home-page'
import {RESUME_SUBMISSION_TYPE} from './sanity/schemas/resume-submission'
import {TECHNOLOGY_ORDER_ID} from './sanity/schemas/technologies'
import {SERVICE_SUMMARY_TYPE} from './sanity/schemas/service-summary'
import {VALUE_BLUEPRINTS_PAGE_TYPE} from './sanity/schemas/value-blueprints-page'

// One-of-a-kind settings documents: editable, but never created, duplicated or deleted.
const SINGLETON_TYPES = new Set<string>([HOME_PAGE_ID, CASE_STUDY_ORDER_ID, TECHNOLOGY_ORDER_ID, SERVICE_SUMMARY_TYPE, VALUE_BLUEPRINTS_PAGE_TYPE])
// Read-only archives: can be viewed and deleted, never created.
const ARCHIVE_TYPES = new Set<string>([RESUME_SUBMISSION_TYPE])

export default defineConfig({
  title: 'CodeAutomation',
  icon: StudioLogo,
  basePath: '/studio',
  projectId,
  dataset,
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
    // "Vision" tab: run GROQ queries against the dataset.
    visionTool({defaultApiVersion: apiVersion}),
  ],
})

