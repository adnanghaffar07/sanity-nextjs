export default {
    name: 'paymentPlanUI',
    title: 'Payment Plan',
    type: 'document',
    fields: [
        {
            name: 'heading',
            title: 'Heading',
            type: 'string',
        },
        {
            name: 'subHeading',
            title: 'Sub Heading',
            type: 'string',
        },
        {
            name: 'callToActionButton',
            title: 'Call to Action Button',
            type: 'string',
        },
        {
            name: 'callToActionLink',
            title: 'Call to Action Link',
            type: 'url',
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
                    name: 'featureIncluded',
                    title: 'Features Included',
                    type: 'array',
                    of: [{ type: 'string' }],
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
        // Features section
        {
            name: 'features',
            title: 'Features',
            type: 'document',
            fields: [
                {
                    name: "title",
                    title: "Title",
                    type: "string",
                },
                {
                    name: "description",
                    title: "Description",
                    type: "string",
                },
                {
                    name: 'featuresList',
                    title: 'Features List',
                    type: 'array',
                    of: [
                        {
                            name: 'feature',
                            title: 'Feature',
                            type: 'object',
                            fields: [
                                {
                                    name: 'name',
                                    title: 'Feature Name',
                                    type: 'string',
                                },
                                {
                                    name: 'basic',
                                    title: 'Basic Plan',
                                    type: 'object',
                                    fields: [
                                        {
                                            name: 'included',
                                            title: 'Included',
                                            type: 'boolean'
                                        },
                                        {
                                            name: 'description',
                                            title: 'Description',
                                            type: 'string'
                                        }
                                    ]
                                },
                                {
                                    name: 'standard',
                                    title: 'Standard Plan',
                                    type: 'object',
                                    fields: [
                                        {
                                            name: 'included',
                                            title: 'Included',
                                            type: 'boolean'
                                        },
                                        {
                                            name: 'description',
                                            title: 'Description',
                                            type: 'string'
                                        }
                                    ]
                                },
                                {
                                    name: 'enterprise',
                                    title: 'Enterprise Plan',
                                    type: 'object',
                                    fields: [
                                        {
                                            name: 'included',
                                            title: 'Included',
                                            type: 'boolean'
                                        },
                                        {
                                            name: 'description',
                                            title: 'Description',
                                            type: 'string'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "pricing",
                    title: "Pricing",
                    type: "object",
                    fields: [
                        {
                            name: "basicPrice",
                            title: "Basic Plan Price",
                            type: "number",
                        },
                        {
                            name: "standardPrice",
                            title: "Standard Plan Price",
                            type: "number",
                        },
                        {
                            name: "enterprisePrice",
                            title: "Enterprise Plan Price",
                            type: "number",
                        },
                    ],
                },
            ],
        },

    ],
};
