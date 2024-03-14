const workWithUs = {
    name: 'workWithUs',
    title: 'Why Work With Us',
    type: 'document',
    fields: [
        {
            name: 'heading',
            title: 'Heading',
            type: 'string'
        },
        {
            name: 'achievements',
            title: 'Achievements',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'Work',
                            title: 'Title',
                            type: 'string'
                        },
                        {
                            name: 'image',
                            title: 'Image',
                            type: 'image'
                        },
                        {
                            name: 'numberOfClients',
                            title: 'Numbers',
                            type: 'number'
                        },
                    ]
                }
            ]
        }
    ]
};

export default workWithUs;

