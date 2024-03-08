const bannercontent = {
    name: 'bannercontent',
    title: 'Banner Content',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
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