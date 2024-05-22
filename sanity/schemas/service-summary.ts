const serviceSummary = {
    name: "serviceSummary",
    title: "Service Summary",
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
            name: "pageTitle",
            title: "Page Title",
            type: "string",
        },
        {
            name: "pageDesc",
            title: "Description",
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


        {
            name: 'detailSection',
            title: 'Detail Section',
            type: 'object',
            fields: [
                {
                    name: "heading",
                    title: "Heading",
                    type: "string",
                },
                {
                    name: 'detailInd',
                    title: 'Individual Detail',
                    type: 'array',
                    of: [
                        {
                            type: 'object',
                            fields: [
                                {
                                    name: 'title',
                                    title: 'Title',
                                    type: 'string',
                                },
                                {
                                    name: 'smDescription',
                                    title: 'Small Description',
                                    type: 'string',
                                },
                                {
                                    name: 'description',
                                    title: 'Description',
                                    type: 'text',
                                },
                                {
                                    name: 'keyBenefits',
                                    title: 'Key Benefits',
                                    type: 'array',
                                    of: [
                                        {
                                            type: 'string',
                                        },
                                    ],
                                },
                            ],
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
                                    "name": "detail",
                                    "title": "Detail",
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

        // Example Section
        {
            name: "exampleSection",
            title: "Example Section",
            type: "object",
            fields: [
                {
                    name: "heading",
                    title: "Example Heading",
                    type: "string",
                },
                {
                    name: "exampledesc",
                    title: "Example Desc",
                    type: "text",
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
                                    name: "detail",
                                    title: "Detail",
                                    type: "string",
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
                                    name: "detail",
                                    title: "Detail",
                                    type: "string",
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
            name: 'OpenGraphMeta',
            title: 'Open Graph Meta',
            type: 'object',
            fields: [
              {
                name: 'ogTitle',
                title: 'OG Title',
                type: 'string',
              },
              {
                name: 'ogDescription',
                title: 'OG Description',
                type: 'text',
              },
              {
                name: 'ogUrl',
                title: 'OG URL',
                type: 'url',
              },
              {
                name: 'ogImage',
                title: 'OG Image',
                type: 'image',
                options: {
                  hotspot: true,
                },
              },
              {
                name: 'ogType',
                title: 'OG Type',
                type: 'string',
                description: 'Type of the webpage for Open Graph meta tag',
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
              {
                name: 'type',
                title: 'Type',
                type: 'string',
              },
            ],
          },



        // Facebook Cards
        {
            name: "facebookCards",
            title: "Facebook Cards",
            type: "object",
            fields: [
                {
                    name: "facebookTitle",
                    title: "Title",
                    type: "string",
                },
                {
                    name: "facebookDescription",
                    title: "Description",
                    type: "text",
                },
                {
                    name: "facebookImage",
                    title: "Image",
                    type: "image",
                    options: { hotspot: true },
                },
                {
                    name: "facebookUrl",
                    title: "Url",
                    type: "string",
                },
                {
                    name: "facebookType",
                    title: "Type",
                    type: "string",
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
                {
                    name: "linkedInType",
                    title: "Type",
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
                {
                    name: "pinterestType",
                    title: "Type",
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
                {
                    name: "whatsappType",
                    title: "Type",
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
                {
                    name: "telegramType",
                    title: "Type",
                    type: "string",
                },
            ],
        },



        // Social Media
        {
            name: "socialMedia",
            title: "Social Media",
            type: "object",
            fields: [
                {
                    name: "socialTitle",
                    title: "Title",
                    type: "string",
                },
                {
                    name: "socailDesc",
                    title: "Description",
                    type: "text",
                },
                {
                    name: "socialImage",
                    title: "Image",
                    type: "image",
                    options: { hotspot: true },
                },
            ],
        },
    ],
}

export default serviceSummary;