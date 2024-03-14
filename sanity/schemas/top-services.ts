const services = {
    name: 'Services',
    title: 'Our Top Services',
    type: 'document',
    fields: [
 
        {
            title: 'Services',
            name: 'Services',
            type: 'array',
            of: [{ type: 'string' }]
        }
    ]
};

export default services;