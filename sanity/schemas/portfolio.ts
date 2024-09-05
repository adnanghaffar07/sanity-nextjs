const portfolioSchema = {
  name: "portfolio",
  title: "Case Studies",
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
      name: "color",
      title: "Color",
      type: "string",
    },
    {
      name: "pageType", // New field for page type
      title: "Page Type",
      type: "string",
      options: {
        list: [
          { title: "Case Study", value: "caseStudy" },
          { title: "Value Blueprint", value: "valueBlueprint" },
          { title: "Blogs", value: "blogs" },

        ],
      },
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
      name: "blogheading",
      title: "Blog Heading",
      type: "string",
    },
        // Button
        {
          name: "button",
          title: "Button",
          type: "object",
          fields: [
            {
              name: 'buttonText',
              type: 'string',
              title: ' Button Text',
            },
            {
              name: 'buttonUrl',
              type: 'url',
              title: ' Button URL',
            },
          ]
        },
    {
      name: "introductionheading",
      title: "Introduction Heading",
      type: "string",
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
      name: "features",
      title: "Features Section",
      type: "object",
      fields: [

        {
          name: "description",
          title: "Description",
          type: "string",
        }, 
        {
          name: "featureslist",
          title: "Features List",
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

                {
                  name: "logoImage",
                  title: "Logo",
                  type: "image",
                },

                {
                  name: "images",
                  title: "Image",
                  type: "image",
                },
              ],
            },
          ],
        },

        {
          name: 'feature',
          title: 'features',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'text',
                  title: 'Text',
                  type: 'string',           
                     },

              ],
            },
          ],
        }
        
      ],
    },

    {
      name: "projectscopeheading",
      title: "Project Scope Heading",
      type: "string",
    },

    {
      name: "projectscopecontent",
      title: "Project Scope Content",
      type: "string",
    },

{
      name: 'projectGoalsSection',
      title: 'Project Goals Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        
       
        {
          name: 'goals',
          title: 'Goals',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                },
                {
                  name: 'description',
                  title: 'Description',
                  type: 'string',
                },
              ],
            },
          ],
        },
      ],
    },    

    {
      name: "toolsandtechusedtitle",
      title: "Tools & Technologies Title",
      type: "string",
    },
    {
      name: "toolsandtechdescription",
      title: "Tools & Technologies Description",
      type: "string",
    },

    {
      name: "toolsandtechusedheading",
      title: "Tools & Technologies Used Heading",
      type: "string",
    },
    {
      name: "toolstechlist",
      title: "Tools Tech List",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "categories",
              title: "Categories",
              type: "object",
              fields: [
                {
                  name: "firstCat",
                  title: "First Category",
                  type: "array",
                  of: [{ type: "reference", to: [{ type: "techLogos" }] }],
                },
                {
                  name: "secondCat",
                  title: "Second Category",
                  type: "array",
                  of: [{ type: "reference", to: [{ type: "techLogos" }] }],
                },
                {
                  name: "thirdCat",
                  title: "Third Category",
                  type: "array",
                  of: [{ type: "reference", to: [{ type: "techLogos" }] }],
                },
                {
                  name: "forthCat",
                  title: "Forth Category",
                  type: "array",
                  of: [{ type: "reference", to: [{ type: "techLogos" }] }],
                },
                {
                  name: "fifthCat",
                  title: "Fifth Category",
                  type: "array",
                  of: [{ type: "reference", to: [{ type: "techLogos" }] }],
                },
                {
                  name: "SixthCat",
                  title: "Sixth Category",
                  type: "array",
                  of: [{ type: "reference", to: [{ type: "techLogos" }] }],
                },
                {
                  name: "SevenCat",
                  title: "Seven Category",
                  type: "array",
                  of: [{ type: "reference", to: [{ type: "techLogos" }] }],
                },
              ],
            },
          ],
        },
      ],
    },


   

    {
      name: "applicationtestingheading",
      title: "Application Testing Heading",
      type: "string",
    },

    {
      name: "applicationtestingdescription",
      title: "Application Testing Description",
      type: "string",
    },

    {
      name: "typeoftestingheading",
      title: "Type of Testing Heading",
      type: "string",
    },

    {
      name: "testingimage",
      title: "Testing Image",
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
      name: "typeoftestinglist",
      title: "Type of Testing List",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
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
      name: "challengesfacedheading",
      title: "Challenges Faced Heading",
      type: "string",
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
      name: "ourapproachheading",
      title: "Our Approach Heading",
      type: "string",
    },

    {
      name: "ourapproach",
      title: "Our Approach",
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
      name: "criticalPrerequisitesSection",
      title: "Critical Prerequisites Section",
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
          type: "text",
        },
        {
          name: "prerequisites",
          title: "Critical Prerequisites",
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
                  name: "details",
                  title: "Details",
                  type: "array",
                  of: [
                    {
                      type: "object",
                      fields: [
                        {
                          name: "subheading",
                          title: "Subheading",
                          type: "string",
                        },
                        {
                          name: "content",
                          title: "Content",
                          type: "string",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },    

    {
      name: "resultsheading",
      title: "Results Heading",
      type: "string",
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
      name: "conclusionheading",
      title: "Conclusion Heading",
      type: "string",
    },

    {
      name: "conclusion",
      title: "Conclusion",
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
      name: "operatingsystem",
      title: "Operating System",
      type: "string",
    },

    {
      name: "projectoverviewtitle",
      title: "Project Overview Title",
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
      name: "projectoverview",
      title: "Project Overview Section",
      type: "object",
      fields: [

        {
          name: "heading",
          title: "Heading",
          type: "string",
        },
        {
          name: "detail",
          title: "Detail",
          type: "string",
        }, 
        
        {
          name: "projectoverviewdetail",
          title: "Project Overview Details",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "heading",
                  title: "Card Heading",
                  type: "string",
                },

                {
                  name: "detail",
                  title: "Card description",
                  type: "string",
                },
                {
                  name: "leftcolor",
                  title: "Left Color",
                  type: "string",
                },

                {
                  name: "rightcolor",
                  title: "Right Color",
                  type: "string",
                },
              ],
            },
          ],
        },
      ],
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

    {
      name: "caseStudiesToolsSection",
      title: "Tools and Technology  Section",
      type: "object",
      fields: [

        {
          name: "toolImage",
          title: "Image",
          type: "image",
          options: { hotspot: true },
        },

        {
          name: "toolsTech",
          title: "Tools and Tech",
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
                  name: "detail",
                  title: "Detail",
                  type: "string",
                },
                {
                  name: "images",
                  title: "Images",
                  type: "array",
                  of: [{ type: "reference", to: [{ type: "techLogos" }] }], // Reference techLogos schema here
                },
              ],
            },
          ],
        },
      ],
    },
        // Web SEO Meta data
        {
          name: "webSeoMetadataSub",
          title: "Web SEO Metadata",
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "description",
              title: "Description",
              type: "text",
            },
            {
              name: "keywords",
              title: "Keywords",
              type: "array",
              of: [{ type: "string" }],
            },
          ],
        },
 
    
        // Twitter Cards
        {
          name: "twitterCardsSub",
          title: "Twitter Cards",
          type: "object",
          fields: [
            {
              name: "twitterTitle",
              title: "Title",
              type: "string",
            },
            {
              name: "twitterDescription",
              title: "Description",
              type: "text",
            },
            {
              name: "twitterImage",
              title: "Image",
              type: "image",
              options: { hotspot: true },
            },
            {
              name: "twitterUrl",
              title: "Url",
              type: "string",
            },
            {
              name: "twitterType",
              title: "Type",
              type: "string",
            },
    
    
          ],
        },
    
    
        // Facebook Cards
        {
          name: "facebookCardsSub",
          title: "Facebook Cards",
          type: "object",
          fields: [
            {
              name: "facebookTitle",
              title: "Title",
              type: "string",
            },
            {
              name: "facebookDescription",
              title: "Description",
              type: "text",
            },
            {
              name: "facebookImage",
              title: "Image",
              type: "image",
              options: { hotspot: true },
            },
            {
              name: "facebookUrl",
              title: "Url",
              type: "string",
            },
            {
              name: "facebookType",
              title: "Type",
              type: "string",
            },
          ],
        },
    
    
        // LinkedIn Cards
        {
          name: "linkedInCardsSub",
          title: "LinkedIn Cards",
          type: "object",
          fields: [
            {
              name: "linkedInTitle",
              title: "Title",
              type: "string",
            },
            {
              name: "linkedInDescription",
              title: "Description",
              type: "text",
            },
            {
              name: "linkedInImage",
              title: "Image",
              type: "image",
              options: { hotspot: true },
            },
            {
              name: "linkedInUrl",
              title: "Url",
              type: "string",
            },
            {
              name: "linkedInType",
              title: "Type",
              type: "string",
            },
            {
              name: "siteName",
              title: "Site Name",
              type: "string",
            },
          ],
        },
    
    
    
        // Pinterest Cards
        {
          name: "pinterestCardsSub",
          title: "Pinterest Cards",
          type: "object",
          fields: [
            {
              name: "pinterestTitle",
              title: "Title",
              type: "string",
            },
            {
              name: "pinterestDescription",
              title: "Description",
              type: "text",
            },
    
            {
              name: "pinterestUrl",
              title: "Url",
              type: "string",
            },
            {
              name: "pinterestType",
              title: "Type",
              type: "string",
            },
          ],
        },
    
    
        // WhatsApp  Cards
        {
          name: "whatsappCardsSub",
          title: "Whatsapp Cards",
          type: "object",
          fields: [
            {
              name: "whatsappTitle",
              title: "Title",
              type: "string",
            },
            {
              name: "whatsappDescription",
              title: "Description",
              type: "text",
            },
    
            {
              name: "whatsappUrl",
              title: "Url",
              type: "string",
            },
            {
              name: "whatsappType",
              title: "Type",
              type: "string",
            },
          ],
        },
    
    
        // Telegram  Cards
        {
          name: "telegramCardsSub",
          title: "Telegram Cards",
          type: "object",
          fields: [
            {
              name: "telegramTitle",
              title: "Title",
              type: "string",
            },
            {
              name: "telegramDescription",
              title: "Description",
              type: "text",
            },
    
            {
              name: "telegramUrl",
              title: "Url",
              type: "string",
            },
            {
              name: "telegramType",
              title: "Type",
              type: "string",
            },
          ],
        },
    
    
    

  ],
};

export default portfolioSchema;
