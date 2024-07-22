const valueBlueprints = {
    name: "valueBlueprints",
    title: "Value BluePrints",
    type: "document",
    fields: [
      // General Page Fields
   
      {
        name: "heroImage",
        title: "Hero Image",
        type: "image",
        options: { hotspot: true },
        fields: [
          {
            name: "alt",
            title: "Alt",
            type: "string",
          },
        ],
      },
      {
        name: "title",
        title: "Title",
        type: "string",
      },
      
      // Introduction Section
      {
        name: "introductionSection",
        title: "Introduction Section",
        type: "object",
        fields: [
          {
            name: "introHeading",
            title: "Intro Heading",
            type: "string",
          },
          {
            name: "introDesc",
            title: "Intro Description",
            type: "text",
          },
          {
            name: "introImage",
            title: "Intro Image",
            type: "image",
            options: { hotspot: true },
            fields: [
              {
                name: "alt",
                title: "Alt",
                type: "string",
              },
            ],
          },
        ],
      },
  
      // Tools and Technology Section
      {
        name: "toolsTechSection",
        title: "Tools and Technology Section",
        type: "object",
        fields: [
          {
            name: "toolsTechHeading",
            title: "Tools and Tech Heading",
            type: "string",
          },
          {
            name: "toolsTechDesc",
            title: "Tools and Tech Desc",
            type: "text",
          },
          {
            "name": "toolsTech",
            "title": "Tools and Tech",
            "type": "array",
            "of": [
              {
                "type": "object",
                "fields": [
                  {
                    "name": "heading",
                    "title": "Heading",
                    "type": "string"
                  },
                  {
                    name: "images",
                    title: "Images",
                    type: "array",
                    of: [{ type: "reference", to: [{ type: "techLogos" }] }] // Reference techLogos schema here
                  }
                ]
              }
            ]
          }
          ,
          {
            name: "techImage",
            title: "Tech Image",
            type: "image",
            options: { hotspot: true },
            fields: [
              {
                name: "alt",
                title: "Alt",
                type: "string",
              },
            ],
          },
        ],
      },
  
  
      // Project cycle
      {
        name: "projectCycleSection",
        title: "Project Cycle Section",
        type: "object",
        fields: [
          {
            name: "projectCycleHaeding",
            title: "Project Cycle Heading",
            type: "string",
          },
  
          {
            name: "projectCycle",
            title: "Project Cycle stages",
            type: "array",
            of: [
              {
                type: "object",
                fields: [
                  {
                    name: "heading",
                    title: "Heading",
                    type: "string",
                  },
                  {
                    name: "detail",
                    title: "Detail",
                    type: "string",
                  },
                  {
                    name: "projectImage",
                    title: "Project Image",
                    type: "image",
                    options: { hotspot: true },
                    fields: [
                      {
                        name: "alt",
                        title: "Alt",
                        type: "string",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "projectCycleImg",
            title: "Project Cycle Image",
            type: "image",
            options: { hotspot: true },
            fields: [
              {
                name: "alt",
                title: "Alt",
                type: "string",
              },
            ],
          },
        ],
      },
  
      // Service Delivery Options
      {
        name: "deliveryOptionSection",
        title: "Delivery Option Section",
        type: "object",
        fields: [
          {
            name: "deliveryOptionHaeding",
            title: "Delivery Option Heading",
            type: "string",
          },
  
          {
            name: "deliveryOption",
            title: "Service Delivery Options",
            type: "array",
            of: [
              {
                type: "object",
                fields: [
                  {
                    name: "heading",
                    title: "Heading",
                    type: "string",
                  },
                  {
                    name: "detail",
                    title: "Detail",
                    type: "string",
                  },
                  {
                    name: "deliveryImage",
                    title: "Image",
                    type: "image",
                    options: { hotspot: true },
                    fields: [
                      {
                        name: "alt",
                        title: "Alt",
                        type: "string",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "deliveryImg",
            title: "Delivery Image",
            type: "image",
            options: { hotspot: true },
            fields: [
              {
                name: "alt",
                title: "Alt",
                type: "string",
              },
            ],
          },
        ],
      },
  
  
  
      // Summary Section
      {
        name: "summarySection",
        title: "Summary Section",
        type: "object",
        fields: [
          {
            name: "summaryHeading",
            title: "Summary Heading",
            type: "string",
          },
          {
            name: "summaryMessage",
            title: "Summary Message",
            type: "text",
          },
          {
            name: "summaryImg",
            title: "Summary Image",
            type: "image",
            options: { hotspot: true },
            fields: [
              {
                name: "alt",
                title: "Alt",
                type: "string",
              },
            ],
          },
        ],
      },
  
      // Call to Action Section
      {
        name: "callToActionSection",
        title: "Call To Action Section",
        type: "object",
        fields: [
          {
            name: "callToActionHeading",
            title: "Heading",
            type: "string",
          },
          {
            name: "callToAction",
            title: "Call To Action",
            type: "text",
          },
          {
            name: "callToActionImg",
            title: "Call to Action Image",
            type: "image",
            options: { hotspot: true },
            fields: [
              {
                name: "alt",
                title: "Alt",
                type: "string",
              },
            ],
          },
        ],
      },
      
      // Special Offers Section
      {
        name: "specialOffersSection",
        title: "Special Offers Section",
        type: "object",
        fields: [
          {
            name: "offerHeading",
            title: "Offer Heading",
            type: "string",
          },
          {
            name: "specialOffer",
            title: "Special Offer",
            type: "text",
          },
          {
            name: "offerImg",
            title: "Offer Image",
            type: "image",
            options: { hotspot: true },
            fields: [
              {
                name: "alt",
                title: "Alt",
                type: "string",
              },
            ],
          },
        ],
      },

      // Web SEO Metadata
      {
        name: "webSeoMetadata",
        title: "Web SEO Metadata",
        type: "object",
        fields: [
          {
            name: "title",
            title: "Title",
            type: "string",
          },
          {
            name: "description",
            title: "Description",
            type: "text",
          },
          {
            name: "keywords",
            title: "Keywords",
            type: "array",
            of: [{ type: "string" }],
          },
        ],
      },
  

  
          // Open Graph Protocol (OGP)

          {
            name: 'facebook',
            title: 'Facebook Meta',
            type: 'object',
            fields: [
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
                    name: 'url',
                    title: 'URL',
                    type: 'url',
                },
                {
                    name: 'image',
                    title: 'Image',
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                },
                {
                    name: 'type',
                    title: 'Type',
                    type: 'string',
                },
            ],
        },

        // Twitter Cards
        {
            name: 'twitterhMeta',
            title: 'Twitter Meta',
            type: 'object',
            fields: [
                {
                    name: 'title',
                    title: 'Twitter Title',
                    type: 'string',
                },
                {
                    name: 'description',
                    title: 'Description',
                    type: 'text',
                },
                {
                    name: 'url',
                    title: 'URL',
                    type: 'url',
                },
                {
                    name: 'image',
                    title: 'Image',
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                },
            ],
        },

        // LinkedIn Cards
        {
            name: "linkedInCards",
            title: "LinkedIn Cards",
            type: "object",
            fields: [
                {
                    name: "linkedInTitle",
                    title: "Title",
                    type: "string",
                },
                {
                    name: "linkedInDescription",
                    title: "Description",
                    type: "text",
                },
                {
                    name: "linkedInImage",
                    title: "Image",
                    type: "image",
                    options: { hotspot: true },
                },
                {
                    name: "linkedInUrl",
                    title: "Url",
                    type: "string",
                },
            ],
        },


        // Pinterest Cards
        {
            name: "pinterestCards",
            title: "Pinterest Cards",
            type: "object",
            fields: [
                {
                    name: "pinterestTitle",
                    title: "Title",
                    type: "string",
                },
                {
                    name: "pinterestDescription",
                    title: "Description",
                    type: "text",
                },

                {
                    name: "pinterestUrl",
                    title: "Url",
                    type: "string",
                },
            ],
        },


        // WhatsApp  Cards
        {
            name: "whatsappCards",
            title: "Whatsapp Cards",
            type: "object",
            fields: [
                {
                    name: "whatsappTitle",
                    title: "Title",
                    type: "string",
                },
                {
                    name: "whatsappDescription",
                    title: "Description",
                    type: "text",
                },

                {
                    name: "whatsappUrl",
                    title: "Url",
                    type: "string",
                },
            ],
        },


        // Telegram  Cards
        {
            name: "telegramCards",
            title: "Telegram Cards",
            type: "object",
            fields: [
                {
                    name: "telegramTitle",
                    title: "Title",
                    type: "string",
                },
                {
                    name: "telegramDescription",
                    title: "Description",
                    type: "text",
                },

                {
                    name: "telegramUrl",
                    title: "Url",
                    type: "string",
                },
            ],
        },
  
  


    ],
  }
  
  export default valueBlueprints;  