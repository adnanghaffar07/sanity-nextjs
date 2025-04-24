export default {
    title: 'Block Content',
    name: 'blockContent',
    type: 'array',
    of: [
      {
        type: 'block',
        marks: {
          decorators: [
            { title: 'Strong', value: 'strong' },
            { title: 'Emphasis', value: 'em' },
          ],
          annotations: [
            {
              name: 'link',
              type: 'object',
              title: 'Link',
              fields: [
                {
                  name: 'href',
                  type: 'url',
                  title: 'URL',
                },
                {
                  name: 'openInNewTab',
                  type: 'boolean',
                  title: 'Open in new tab',
                  initialValue: true,
                },
              ],
            },
          ],
        },
      },
    ],
  }
  