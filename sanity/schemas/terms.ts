// schemas/terms.ts
export default {
  name: 'terms',
  title: 'Terms and Conditions',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
    },
    {
      name: 'heroText',
      title: 'Hero Text',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Body Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'lastUpdated',
      title: 'Last Updated',
      type: 'datetime',
    },
  ],
}
