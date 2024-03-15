const blog = {
    name: 'blogSub',
    title: 'Blog(Sub Page)',
    type: 'document',
    fields: [
   
        {
            name: 'blogTitleBaner',
            title: 'Blog Title Banner',
            type: 'string'
        },
        {
            name: 'Image',
            title: 'Image',
            type: 'image'
        },

     {
            name: 'topBlogDescription',
            title: 'Top Description',
            type: 'text'
        },

        {
            name: 'lowerDescription',
            title: 'Lower Description',
            type: 'text'
        },

        {
            name: 'blogDetailTitle',
            title: 'Blog Detail Title',
            type: 'text'
        },


        {
            name: 'blogDetail', 
            title: 'Blog Detail',
            type: 'array', 
            of: [{type: 'block'}]
          },


    ]
};

export default blog;
