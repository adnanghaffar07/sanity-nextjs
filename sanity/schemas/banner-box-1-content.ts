const bannerbox1content = {
    name: 'bannerbox1content',
    title: 'Banner Box 1 Content',
    type: 'document',
    fields: [
       
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
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: "block" }]
        },
    
    ]
};

export default bannerbox1content;