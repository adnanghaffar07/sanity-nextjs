const cpyrighttext = {
    name: 'cpyrighttext',
    title: 'Copy Right Text',
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

export default cpyrighttext;