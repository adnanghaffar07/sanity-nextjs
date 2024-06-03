const portfolioSchema = {
  name: "portfolio",
  title: "Portfolio",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Sub Title",
      type: "string",
    },

    {
      name: "introductionheading",
      title: "Introduction",
      type: "string",
    },

    {
      name: "projectscopeheading",
      title: "Project Scope",
      type: "string",
    },

    {
      name: "toolsandtechusedheading",
      title: "Tools & Technologies Used",
      type: "string",
    },

   
    {
      name: "challengesfacedheading",
      title: "Challenges Faced",
      type: "string",
    },

    {
      name: "ourapproachheading",
      title: "Our Approach",
      type: "string",
    },
   
    {
      name: "resultsheading",
      title: "Results",
      type: "string",
    },
   

    {
      name: "conclusionheading",
      title: "Conclusion",
      type: "string",
    },
   
   


    {
      name: "slug",
      title: "Slug",
      type: "string",
    },
    {
      name: "group",
      title: "Group",
      type: "string",
    },

    {
      name: "heroimage",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },

    {
      name: "cardimage",
      title: "Card Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },

    {
      name: "carddescription",
      title: "Card Description",
      type: "string",
    },

    {
      name: "primaryimage",
      title: "Primary Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "briefdescription",
      title: "Brief Description",
      type: "string",
    },
    {
      name: "briefitemsarray",
      title: "Brief Items Array",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "heading",
              title: "Heading",
              type: "string",
            },
            {
              name: "value",
              title: "Value",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "secondaryimage",
      title: "Secondary Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },

    {
      name: "toolsandtechlist",
      title: "Tools And Tech List",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "heading",
              title: "Heading",
              type: "string",
            },

            {
              name: "techImage",
              title: "Tech Image",
              type: "image",
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: "alt",
                  title: "Alt",
                  type: "string",
                },
              ],
            },
          ],
        },
      ],
    },

    {
      name: "projectscopecontent",
      title: "Project Scope Content",
      type: "string",
    },

    {
      name: "operatingsystem",
      title: "Operating System",
      type: "string",
    },

    

    {
      name: "technologiesused",
      title: "Technologies Used",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "heading",
              title: "Heading",
              type: "string",
            },
            {
              name: "description",
              title: "Description",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "chanllangesfaced",
      title: "Chanllanges Faced",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "heading",
              title: "Heading",
              type: "string",
            },
            {
              name: "description",
              title: "Description",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "ourapproach",
      title: "Our aAproach",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "heading",
              title: "Heading",
              type: "string",
            },
            {
              name: "description",
              title: "Description",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "results",
      title: "Results",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "heading",
              title: "Heading",
              type: "string",
            },
            {
              name: "description",
              title: "Description",
              type: "string",
            },
          ],
        },
      ],
    },

    {
      name: "toolsfortest",
      title: "Tools For Test",
      type: "string",
    },
    {
      name: "conclusion",
      title: "Conclusion",
      type: "string",
    },

    {
      name: "cardItemsList",
      title: "Card Items List",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "cardTitle",
              title: "Card Title",
              type: "string",
            },

            {
              name: "group",
              title: "Group",
              type: "string",
            },

            {
              name: "url",
              title: "URL",
              type: "string",
            },

            {
              name: "cardImage",
              title: "Card Image",
              type: "image",
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: "alt",
                  title: "Alt",
                  type: "string",
                },
              ],
            },
            {
              name: "buttonColor",
              title: "Button Color",
              type: "string",
            },
            {
              name: "buttonLogo",
              title: "Button Logo",
              type: "image",
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: "alt",
                  title: "Alt",
                  type: "string",
                },
              ],
            },
            {
              name: "cardDescription",
              title: "Card Description",
              type: "string",
            },
          ],
        },
      ],
    },

    // {
    //   name: "sections",
    //   title: "Sections",
    //   type: "array",
    //   of: [
    //     {
    //       type: "object",
    //       fields: [
    //         {
    //           name: "heading",
    //           title: "Heading",
    //           type: "string",
    //         },
    //         {
    //           name: "content",
    //           title: "Content",
    //           type: "array",
    //           of: [{ type: "block" }],
    //         },
    //         {
    //           name: "image",
    //           title: "Image",
    //           type: "image",
    //           options: {
    //             hotspot: true,
    //           },
    //         },
    //         {
    //           name: "listItems",
    //           title: "List Items",
    //           type: "array",
    //           of: [{ type: "string" }],
    //         },
    //       ],
    //     },
    //   ],
    // },
  ],
};

export default portfolioSchema;
