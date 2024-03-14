const bannercontent = {
    name: 'bannercontent',
    title: 'Banner Content',
    type: 'document',
    fields: [
        {
            name: 'content',
            title: 'Content',
            type: 'string'
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: "block" }]
        },
    ]
};

export default bannercontent;