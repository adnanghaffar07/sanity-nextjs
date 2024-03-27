const careers = {
    name: 'careers',
    title: 'Careers(Jobs)',
    type: 'document',
    fields: [
   
        {
            name: 'jobTitleBaner',
            title: 'Job Title Banner',
            type: 'string'
        },

        {
            name: 'descJobTitle',
            title: 'Descriptive Job Title',
            type: 'string'
        },

        {
            name: 'jobDescription',
            title: 'Job Description',
            type: 'text'
        },

        {
          name: 'responsibilities', 
          title: 'Responsibilities',
          type: 'text'
        },
        

          {
            name: 'requirements', 
            title: 'Requirements',
            type: 'array', 
            of: [{type: 'string'}]
          },
          
          {
            name: 'qualification', 
            title: 'Qualification',
            type: 'array', 
            of: [{type: 'string'}]
          },


    ]
};

export default careers;
