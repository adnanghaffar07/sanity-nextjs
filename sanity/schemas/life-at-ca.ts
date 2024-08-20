// schemas/pageSection.js
export default {
    name: 'lifeatCA',
    title: 'Life at CA',
    type: 'document',
    fields: [
      {
        name: 'bannerImage',
        title: 'Banner Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'teamMembers',
        title: 'Team Members',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'name',
                title: 'Name',
                type: 'string',
              },
              {
                name: 'title',
                title: 'Title',
                type: 'string',
              },
              {
                name: 'imageUrl',
                title: 'Image URL',
                type: 'image',
                options: {
                  hotspot: true,
                },
              },
            ]
          }
        ]
      },
      {
        name: 'introText',
        title: 'Introduction Text',
        type: 'text',
      },
      {
        name: 'mainImage',
        title: 'Main Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'middleText',
        title: 'Middle Text',
        type: 'text',
      },
      {
        name: 'imageSections',
        title: 'Image Sections',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'images',
                title: 'Images',
                type: 'array',
                of: [
                  {
                    type: 'image',
                    options: {
                      hotspot: true,
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'conclusionText',
        title: 'Conclusion Text',
        type: 'text',
      },
    ],
  };
  