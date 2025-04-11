export default {
    name: 'youtubeEmbed',
    type: 'object',
    title: 'YouTube Embed',
    fields: [
      {
        name: 'url',
        type: 'url',
        title: 'YouTube Video URL',
        validation: (Rule: any) =>
          Rule.uri({
            scheme: ['http', 'https']
          })
      }
    ],
    preview: {
      select: {
        url: 'url'
      },
      prepare({ url }: { url: string }) {
        return {
          title: 'YouTube Video',
          subtitle: url
        };
      }
    }
  };
  