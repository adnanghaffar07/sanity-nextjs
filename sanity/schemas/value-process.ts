const valueDiscoveryProcessPage = {
    name: "valueDiscoveryProcessPage",
    title: "Value Discovery Process Page",
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
            ],
        },
        // Value Discovery Section
        {
            name: "discoverynSection",
            title: "Value Discovery Section",
            type: "object",
            fields: [
                {
                    name: "heading",
                    title: "Heading",
                    type: "string",
                },
                {
                    name: "description",
                    title: "Description",
                    type: "text",
                },
            ],
        },
        
        // Efficient Knowledge Acquisition Section
        {
            name: "knowledgeAcquisitionSection",
            title: "Efficient Knowledge Acquisition Section",
            type: "object",
            fields: [
                {
                    name: "heading",
                    title: "Heading",
                    type: "string",
                },
                {
                    name: "description",
                    title: "Description",
                    type: "text",
                },
                {
                    name: "sources",
                    title: "Sources",
                    type: "array",
                    of: [
                        {
                            type: "object",
                            fields: [
                                {
                                    name: "sourceTitle",
                                    title: "Source Title",
                                    type: "string",
                                },
                                {
                                    name: "sourceDetail",
                                    title: "Source Detail",
                                    type: "string",
                                },
                            ],
                        },
                    ],
                },
                {
                    name: "stepsHeading",
                    title: "Heading",
                    type: "string",
                },
                {
                    name: "steps",
                    title: "Steps",
                    type: "array",
                    of: [
                        {
                            type: "object",
                            fields: [
                                {
                                    name: "stepTitle",
                                    title: "Step Title",
                                    type: "string",
                                },
                                {
                                    name: "stepDetail",
                                    title: "Step Detail",
                                    type: "text",
                                },
                            ],
                        },
                    ],
                },
                {
                    name: "example",
                    title: "Example",
                    type: "object",
                    fields: [
                        {
                            name: "exampleTitle",
                            title: "Example Title",
                            type: "string",
                        },
                        {
                            name: "exampleDetail",
                            title: "Example Detail",
                            type: "text",
                        },
                    ],
                },
            ],
        },
        // Voice of the Customer (VOC) Section
        {
            name: "vocSection",
            title: "Voice of the Customer Section",
            type: "object",
            fields: [
                {
                    name: "heading",
                    title: "Heading",
                    type: "string",
                },
                {
                    name: "description",
                    title: "Description",
                    type: "text",
                },
                {
                    name: "methods",
                    title: "Methods",
                    type: "array",
                    of: [
                        {
                            type: "object",
                            fields: [
                                {
                                    name: "methodTitle",
                                    title: "Method Title",
                                    type: "string",
                                },
                                {
                                    name: "methodDetail",
                                    title: "Method Detail",
                                    type: "string",
                                },
                            ],
                        },
                    ],
                },
                {
                    name: "example",
                    title: "Example",
                    type: "object",
                    fields: [
                        {
                            name: "exampleTitle",
                            title: "Example Title",
                            type: "string",
                        },
                        {
                            name: "exampleDetail",
                            title: "Example Detail",
                            type: "text",
                        },
                    ],
                },
            ],
        },
        // DMAIC and DMADV Section
        {
            name: "dmaicDmadSection",
            title: "DMAIC and DMADV Section",
            type: "object",
            fields: [
                {
                    name: "heading",
                    title: "Heading",
                    type: "string",
                },
                {
                    name: "description",
                    title: "Description",
                    type: "text",
                },
                {
                    name: "dmaic",
                    title: "DMAIC",
                    type: "object",
                    fields: [
                        {
                            name: "dmaicHeading",
                            title: "DMAIC Heading",
                            type: "string",
                        },
                        {
                            name: "dmaicSteps",
                            title: "DMAIC Steps",
                            type: "array",
                            of: [
                                {
                                    type: "object",
                                    fields: [
                                        {
                                            name: "step",
                                            title: "Step",
                                            type: "string",
                                        },
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
                            name: "exampleTitle",
                            title: "Example Title",
                            type: "string",
                        },
                        {
                            name: "exampleDetail",
                            title: "Example Detail",
                            type: "text",
                        },

                    ],
                },
                {
                    name: "dmadv",
                    title: "DMADV",
                    type: "object",
                    fields: [
                        {
                            name: "dmadvHeading",
                            title: "DMADV Heading",
                            type: "string",
                        },
                        {
                            name: "dmadvSteps",
                            title: "DMADV Steps",
                            type: "array",
                            of: [
                                {
                                    type: "object",
                                    fields: [
                                        {
                                            name: "step",
                                            title: "Step",
                                            type: "string",
                                        },
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
                            name: "exampleTitle",
                            title: "Example Title",
                            type: "string",
                        },
                        {
                            name: "exampleDetail",
                            title: "Example Detail",
                            type: "text",
                        },

                    ],
                },
            ],
        },
        // Identifying Value Opportunities Section
        {
            name: "valueOpportunitiesSection",
            title: "Identifying Value Opportunities Section",
            type: "object",
            fields: [
                {
                    name: "heading",
                    title: "Heading",
                    type: "string",
                },
                {
                    name: "description",
                    title: "Description",
                    type: "text",
                },
                {
                    name: "opportunities",
                    title: "Opportunities",
                    type: "array",
                    of: [
                        {
                            type: "object",
                            fields: [
                                {
                                    name: "opportunityTitle",
                                    title: "Opportunity Title",
                                    type: "string",
                                },
                                {
                                    name: "opportunityDetail",
                                    title: "Opportunity Detail",
                                    type: "text",
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        // Guidance for Web Development and Imagery Section
        {
            name: "webDevelopmentImagerySection",
            title: "Guidance for Web Development and Imagery Section",
            type: "object",
            fields: [
                {
                    name: "heading",
                    title: "Heading",
                    type: "string",
                },
                {
                    name: "description",
                    title: "Description",
                    type: "text",
                },
                {
                    name: "guidancePoints",
                    title: "Guidance Points",
                    type: "array",
                    of: [
                        {
                            type: "object",
                            fields: [
                                {
                                    name: "pointTitle",
                                    title: "Point Title",
                                    type: "string",
                                },
                                {
                                    name: "pointDetail",
                                    title: "Point Detail",
                                    type: "text",
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        // Call to Action (CTA) Section
        {
            name: "ctaSection",
            title: "Call to Action Section",
            type: "object",
            fields: [
                {
                    name: "ctaHeading",
                    title: "Call to Action Heading",
                    type: "string",
                },
                {
                    name: "ctaText",
                    title: "Call to Action Text",
                    type: "text",
                },
            ],
        },
        // Conclusion Section
        {
            name: "conclusionSection",
            title: "Conclusion Section",
            type: "object",
            fields: [
                {
                    name: "conclusionHeading",
                    title: "Conclusion Heading",
                    type: "string",
                },
                {
                    name: "conclusionText",
                    title: "Conclusion Text",
                    type: "text",
                },
                {
                    name: "inquiryHeading",
                    title: "Inquiry Text",
                    type: "string",
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

export default valueDiscoveryProcessPage;