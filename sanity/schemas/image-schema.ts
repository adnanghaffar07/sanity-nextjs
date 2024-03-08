const image1 = {
    name: 'image1',
    title: 'Images',
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
        {
            name: 'image1',
            title: 'Image',
            type: 'image',
            options: {hotspot: true},
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }
            ]
        },
    ]
};

export default image1;