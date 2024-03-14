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
            name: 'resposibilities', 
            title: 'Key Responsibilities',
            type: 'array', 
            of: [{type: 'block'}]
          },

          {
            name: 'requirements', 
            title: 'Requirements',
            type: 'array', 
            of: [{type: 'block'}]
          },
          
          {
            name: 'qualification', 
            title: 'Qualification',
            type: 'array', 
            of: [{type: 'block'}]
          },


    ]
};

export default careers;
