const section = {
    name: 'section',
    title: 'Sections',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'slug',
            type: 'slug',
            options: { source: 'name'}
        },
    ]
};

export default section;