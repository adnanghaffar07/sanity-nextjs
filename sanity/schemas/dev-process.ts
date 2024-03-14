const devProcess = {
    name: 'devProcess',
    title: 'Our Development Process',
    type: 'document',
    fields: [
   
        {
            name: 'devProcess',
            title: 'Steps',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'title',
                            title: 'Title',
                            type: 'string'
                        },
                    
                        {
                            name: 'description',
                            title: 'Description',
                            type: 'string'
                        },
                    ]
                }
            ]
        }
    ]
};

export default devProcess;
