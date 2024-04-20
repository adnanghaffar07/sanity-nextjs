
// Define logicalServices schema
// const logicalServices = {
//   name: "logicalServices",
//   title: "Logical Services", 
//   type: "document",
//   fields: [
//     {
//       name: "urlPathGeneral",
//       title: "URL Path General Page",
//       type: "string",
//     },
//     {
//       name: "heroImageGeneral",
//       title: "Hero Image General",
//       type: "image",
//       options: { hotspot: true },
//       fields: [
//         {
//           name: "alt",
//           title: "Alt",
//           type: "string",
//         },
//       ],
//     },
//     {
//       name: "serviceTitleBannerGeneral",
//       title: "Service Banner Title General",
//       type: "string",
//     },
//     {
//       name: "serviceDescBannerGeneral",
//       title: "Service Banner Description General",
//       type: "string",
//     },
//     {
//       name: "introGeneralHeading",
//       title: "Introduction General Heading",
//       type: "string",
//     },
//     {
//       name: "introGeneralDesc",
//       title: "Introduction General Desription",
//       type: "text",
//     },
//     {
//       name: "introImage",
//       title: "Intro Image General",
//       type: "image",
//       options: { hotspot: true },
//       fields: [
//         {
//           name: "alt",
//           title: "Alt",
//           type: "string",
//         },
//       ],
//     },
//     {
//       name: "toolsTechGeneralHeading",
//       title: "Tools and Technology General Heading",
//       type: "string",
//     },
//     {
//       name: "toolsTechGeneral",
//       title: "Tools and Technology General",
//       type: "array",
//       of: [
//         {
//           type: "object",
//           fields: [
//             {
//               name: "heading",
//               title: "Heading",
//               type: "string",
//             },
//             {
//               name: "detail",
//               title: "Detail",
//               type: "string",
//             },
//             {
//               name: "image",
//               title: "Image",
//               type: "image",
//               options: {
//                 hotspot: true,
//               },
//             },
//           ],
//         },
//       ],
//     },

//     {
//       name: "techImage",
//       title: "Tech Image General",
//       type: "image",
//       options: { hotspot: true },
//       fields: [
//         {
//           name: "alt",
//           title: "Alt",
//           type: "string",
//         },
//       ],
//     },
//     {
//       name: "exampleServiceHeading",
//       title: "Example Service Heading",
//       type: "string",
//     },

//     {
//       name: "exampleServicesGeneral",
//       title: "Example of Service General",
//       type: "array",
//       of: [
//         {
//           type: "object",
//           fields: [
//             {
//               name: "heading",
//               title: "Heading",
//               type: "string",
//             },
//             {
//               name: "detail",
//               title: "Detail",
//               type: "string",
//             },
//           ],
//         },
//       ],
//     },

//     {
//       name: "exampleServiceImg",
//       title: "Example Service Image",
//       type: "image",
//       options: { hotspot: true },
//       fields: [
//         {
//           name: "alt",
//           title: "Alt",
//           type: "string",
//         },
//       ],
//     },
//     {
//       name: "offerHeading",
//       title: "Offer Heading",
//       type: "string",
//     },
//     {
//       name: "specialOfferGeneral",
//       title: "Special Offers General",
//       type: "text",
//     },

//     {
//       name: "offerImg",
//       title: "Offer Image",
//       type: "image",
//       options: { hotspot: true },
//       fields: [
//         {
//           name: "alt",
//           title: "Alt",
//           type: "string",
//         },
//       ],
//     },
//     {
//       name: "summaryHeading",
//       title: "Summary Heading",
//       type: "string",
//     },
//     {
//       name: "summaryMessageGeneral",
//       title: "Summary Message About General Service",
//       type: "text",
//     },
//     {
//       name: "summaryImg",
//       title: "Summary Image",
//       type: "image",
//       options: { hotspot: true },
//       fields: [
//         {
//           name: "alt",
//           title: "Alt",
//           type: "string",
//         },
//       ],
//     },
//     {
//       name: "callToActionHeading",
//       title: "Call To Action Heading",
//       type: "string",
//     },
//     {
//       name: "callToActionGeneral",
//       title: "Call To Action General",
//       type: "text",
//     },
//     {
//       name: "callToActionImg",
//       title: "Call to Action Img",
//       type: "image",
//       options: { hotspot: true },
//       fields: [
//         {
//           name: "alt",
//           title: "Alt",
//           type: "string",
//         },
//       ],
//     },



const logicalServices = {
  name: "logicalServices",
  title: "Logical Services",
  type: "document",
  fields: [
    // General Page Fields

    {
      name: "urlPath",
      title: "URL Path",
      type: "string",
    },
    {
      name: "serviceCardTitle",
      title: "Service Card Title",
      type: "string",
    },
    {
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "serviceTitle",
      title: "Service Title",
      type: "string",
    },
    {
      name: "serviceDesc",
      title: "Service Description",
      type: "string",
    },


    // Introduction Section
    {
      name: "introductionSection",
      title: "Introduction Section",
      type: "object",
      fields: [
        {
          name: "introHeading",
          title: "Intro Heading",
          type: "string",
        },
        {
          name: "introDesc",
          title: "Intro Description",
          type: "text",
        },
        {
          name: "introImage",
          title: "Intro Image",
          type: "image",
          options: { hotspot: true },
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

    // Tools and Technology Section
    {
      name: "toolsTechSection",
      title: "Tools and Technology Section",
      type: "object",
      fields: [
        {
          name: "toolsTechHeading",
          title: "Tools and Tech Heading",
          type: "string",
        },
        {
          name: "toolsTechDesc",
          title: "Tools and Tech Desc",
          type: "text",
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
                  name: "image",
                  title: "Image",
                  type: "image",
                  options: { hotspot: true },
                },
              ],
            },
          ],
        },
        {
          name: "techImage",
          title: "Tech Image",
          type: "image",
          options: { hotspot: true },
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

    // Example Services Section
    {
      name: "exampleServicesSection",
      title: "Example Services Section",
      type: "object",
      fields: [
        {
          name: "exampleServiceHeading",
          title: "Example Service Heading",
          type: "string",
        },
        {
          name: "exampleServicedesc",
          title: "Example Service Desc",
          type: "text",
        },
        {
          name: "exampleService",
          title: "Example of Service",
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
              ],
            },
          ],
        },
        {
          name: "exampleServiceImg",
          title: "Example Service Image",
          type: "image",
          options: { hotspot: true },
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

// Project cycle
    {
      name: "projectCycleSection",
      title: "Project Cycle Section",
      type: "object",
      fields: [
        {
          name: "projectCycleHaeding",
          title: "Project Cycle Heading",
          type: "string",
        },

        {
          name: "projectCycle",
          title: "Project Cycle stages",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "detail",
                  title: "Detail",
                  type: "string",
                },
                {
                  name: "image",
                  title: "Image",
                  type: "image",
                  options: { hotspot: true },
                },
              ],
            },
          ],
        },
        {
          name: "projectCycleImg",
          title: "Project Cycle Image",
          type: "image",
          options: { hotspot: true },
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

    // Service Delivery Options
    {
      name: "deliveryOptionSection",
      title: "Delivery Option Section",
      type: "object",
      fields: [
        {
          name: "deliveryOptionHaeding",
          title: "Delivery Option Heading",
          type: "string",
        },

        {
          name: "deliveryOption",
          title: "Service Delivery Options",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "detail",
                  title: "Detail",
                  type: "string",
                },
                {
                  name: "image",
                  title: "Image",
                  type: "image",
                  options: { hotspot: true },
                },
              ],
            },
          ],
        },
        {
          name: "deliveryImg",
          title: "Delivery Image",
          type: "image",
          options: { hotspot: true },
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


    // Special Offers Section
    {
      name: "specialOffersSection",
      title: "Special Offers Section",
      type: "object",
      fields: [
        {
          name: "offerHeading",
          title: "Offer Heading",
          type: "string",
        },
        {
          name: "specialOffer",
          title: "Special Offer",
          type: "text",
        },
        {
          name: "offerImg",
          title: "Offer Image",
          type: "image",
          options: { hotspot: true },
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

    // Summary Section
    {
      name: "summarySection",
      title: "Summary Section",
      type: "object",
      fields: [
        {
          name: "summaryHeading",
          title: "Summary Heading",
          type: "string",
        },
        {
          name: "summaryMessage",
          title: "Summary Message",
          type: "text",
        },
        {
          name: "summaryImg",
          title: "Summary Image",
          type: "image",
          options: { hotspot: true },
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

    // Call to Action Section
    {
      name: "callToActionSection",
      title: "Call To Action Section",
      type: "object",
      fields: [
        {
          name: "callToActionHeading",
          title: "Heading",
          type: "string",
        },
        {
          name: "callToAction",
          title: "Call To Action",
          type: "text",
        },
        {
          name: "callToActionImg",
          title: "Call to Action Image",
          type: "image",
          options: { hotspot: true },
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
    {
      name: "contactSection",
      title: "Contact Us Section",
      type: "object",
      fields: [
        {
          name: "contactUsHeading",
          title: "Heading",
          type: "string",
        },
        {
          name: "contactUsDesc",
          title: "Desc",
          type: "string",
        },
        {
          name: "contactEmail",
          title: "Email",
          type: "email",
        },        
        {
          name: "contactPhone",
          title: "Phone Number",
          type: "string",
          // validation: (Rule:any) =>
          //   Rule.custom((value:any) => {
          //     // Regular expression to match a phone number with optional country code
          //     const phoneRegex = /^\+?\d{1,3}[- ]?\d{3,}$/;
          //     if (!phoneRegex.test(value)) {
          //       return 'Please enter a valid phone number.';
          //     }
          //     return true;
          //   }),
        },
        {
          name: "contactLink",
          title: "Link",
          type: "string",
          // validation: (Rule:any) =>
          //   Rule.custom((value:any) => {
          //     // Regular expression to match a URL
          //     const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
          //     if (!urlRegex.test(value)) {
          //       return 'Please enter a valid URL.';
          //     }
          //     return true;
          //   }),
        },        
        
        {
          name: "contactImg",
          title: "Contact Image",
          type: "image",
          options: { hotspot: true },
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
    {
      name: "subServiceHeading",
      title: "Sub Service Card Section Heading",
      type: "string",
    },

    {
      name: "subServices",
      type: "array",
      title: "Sub Services",
      of: [{ type: "reference", to: [{ type: "subService" }] }],
    },
    // Web SEO Metadata
    {
      name: "webSeoMetadata",
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

    // Open Graph Protocol (OGP)
    {
      name: "openGraphProtocol",
      title: "Open Graph Protocol (OGP)",
      type: "object",
      fields: [
        {
          name: "ogTitle",
          title: "Title",
          type: "string",
        },
        {
          name: "ogDescription",
          title: "Description",
          type: "text",
        },
        {
          name: "ogImage",
          title: "Image",
          type: "image",
          options: { hotspot: true },
        },
      ],
    },

    // Twitter Cards
    {
      name: "twitterCards",
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
      ],
    },
    // Social Media
    {
      name: "socialMedia",
      title: "Social Media",
      type: "object",
      fields: [
        {
          name: "socialTitle",
          title: "Title",
          type: "string",
        },
        {
          name: "socailDesc",
          title: "Description",
          type: "text",
        },
        {
          name: "socialImage",
          title: "Image",
          type: "image",
          options: { hotspot: true },
        },
      ],
    },
  ],
}



// Define subService schema
const subServiceSchema = {
  name: "subService",
  type: "document",
  title: "Sub Service",
  fields: [
    {
      name: "urlPathSub",
      title: "URL Path Sub",
      type: "string",
    },
    {
      name: "heroImageSub",
      title: "Hero Image Sub",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "serviceCardSub",
      title: "Sub Service Card",
      type: "string",
    },
    {
      name: "serviceTitleSub",
      title: "Sub Service Title",
      type: "string",
    },
    {
      name: "serviceDescSub",
      title: "Sub Service Description",
      type: "string",
    },


    // Introduction Section
    {
      name: "introductionSubSection",
      title: "Introduction Sub Section",
      type: "object",
      fields: [
        {
          name: "introHeading",
          title: "Intro Heading",
          type: "string",
        },
        {
          name: "introDesc",
          title: "Intro Description",
          type: "text",
        },
        {
          name: "introImage",
          title: "Intro Image",
          type: "image",
          options: { hotspot: true },
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

    // Tools and Technology Section
    {
      name: "toolsTechSubSection",
      title: "Tools and Technology Sub Section",
      type: "object",
      fields: [
        {
          name: "toolsTechHeading",
          title: "Tools and Tech Heading",
          type: "string",
        },
        {
          name: "toolsTechDesc",
          title: "Tools and Tech Desc",
          type: "text",
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
                  name: "image",
                  title: "Image",
                  type: "image",
                  options: { hotspot: true },
                },
              ],
            },
          ],
        },
        {
          name: "techImage",
          title: "Tech Image",
          type: "image",
          options: { hotspot: true },
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
      // Example Services Section
      {
        name: "exampleServicesSubSection",
        title: "Example Services Section",
        type: "object",
        fields: [
          {
            name: "exampleServiceHeading",
            title: "Example Service Heading",
            type: "string",
          },
          {
            name: "exampleServicedesc",
            title: "Example Service Desc",
            type: "text",
          },
          {
            name: "exampleService",
            title: "Example of Service",
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
                ],
              },
            ],
          },
          {
            name: "exampleServiceImg",
            title: "Example Service Image",
            type: "image",
            options: { hotspot: true },
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
  
    // Projecy Cycle
    {
      name: "projectCycleSubSection",
      title: "Project Cycle Sub Section",
      type: "object",
      fields: [
        {
          name: "projectCycleHaeding",
          title: "Project Cycle Heading",
          type: "string",
        },

        {
          name: "projectCycle",
          title: "Project Cycle stages",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "detail",
                  title: "Detail",
                  type: "string",
                },
                {
                  name: "image",
                  title: "Image",
                  type: "image",
                  options: { hotspot: true },
                },
              ],
            },
          ],
        },
        {
          name: "projectCycleImg",
          title: "Project Cycle Image",
          type: "image",
          options: { hotspot: true },
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

    
    // Service Delivery Options
    {
      name: "deliveryOptionSubSection",
      title: "Delivery Option Sub Section",
      type: "object",
      fields: [
        {
          name: "deliveryOptionHaeding",
          title: "Delivery Option Heading",
          type: "string",
        },

        {
          name: "deliveryOption",
          title: "Service Delivery Options",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "detail",
                  title: "Detail",
                  type: "string",
                },
                {
                  name: "image",
                  title: "Image",
                  type: "image",
                  options: { hotspot: true },
                },
              ],
            },
          ],
        },
        {
          name: "deliveryImg",
          title: "Delivery Image",
          type: "image",
          options: { hotspot: true },
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

    // Special Offers Section
    {
      name: "specialOffersSubSection",
      title: "Special Offers Sub Section",
      type: "object",
      fields: [
        {
          name: "offerHeading",
          title: "Offer Heading",
          type: "string",
        },
        {
          name: "specialOffer",
          title: "Special Offer",
          type: "text",
        },
        {
          name: "offerImg",
          title: "Offer Image",
          type: "image",
          options: { hotspot: true },
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

    // Summary Section
    {
      name: "summarySubSection",
      title: "Summary Section Sub",
      type: "object",
      fields: [
        {
          name: "summaryHeading",
          title: "Summary Heading",
          type: "string",
        },
        {
          name: "summaryMessage",
          title: "Summary Message",
          type: "text",
        },
        {
          name: "summaryImg",
          title: "Summary Image",
          type: "image",
          options: { hotspot: true },
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

    // Call to Action Section
    {
      name: "callToActionSubSection",
      title: "Call To Action Sub Section",
      type: "object",
      fields: [
        {
          name: "callToActionHeading",
          title: "Heading",
          type: "string",
        },
        {
          name: "callToAction",
          title: "Call To Action",
          type: "text",
        },
        {
          name: "callToActionImg",
          title: "Call to Action Image",
          type: "image",
          options: { hotspot: true },
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
    {
      name: "contactSubSection",
      title: "Contact Us Sub Section",
      type: "object",
      fields: [
        {
          name: "contactUsHeading",
          title: "Heading",
          type: "string",
        },
        {
          name: "contactUsDesc",
          title: "Desc",
          type: "string",
        },
        {
          name: "contactEmail",
          title: "Email",
          type: "email",
        },        
        {
          name: "contactPhone",
          title: "Phone Number",
          type: "string",
          // validation: (Rule:any) =>
          //   Rule.custom((value:any) => {
          //     // Regular expression to match a phone number with optional country code
          //     const phoneRegex = /^\+?\d{1,3}[- ]?\d{3,}$/;
          //     if (!phoneRegex.test(value)) {
          //       return 'Please enter a valid phone number.';
          //     }
          //     return true;
          //   }),
        },
        {
          name: "contactLink",
          title: "Link",
          type: "string",
          // validation: (Rule:any) =>
          //   Rule.custom((value:any) => {
          //     // Regular expression to match a URL
          //     const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
          //     if (!urlRegex.test(value)) {
          //       return 'Please enter a valid URL.';
          //     }
          //     return true;
          //   }),
        },        
        
        {
          name: "contactImg",
          title: "Contact Image",
          type: "image",
          options: { hotspot: true },
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
      // Open Graph Protocol (OGP)
      {
        name: "openGraphProtocolSub",
        title: "Open Graph Protocol (OGP)",
        type: "object",
        fields: [
          {
            name: "ogTitle",
            title: "Title",
            type: "string",
          },
          {
            name: "ogDescription",
            title: "Description",
            type: "text",
          },
          {
            name: "ogImage",
            title: "Image",
            type: "image",
            options: { hotspot: true },
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
        ],
      },
      // Social Media
      {
        name: "socialMediaSub",
        title: "Social Media",
        type: "object",
        fields: [
          {
            name: "socialTitle",
            title: "Title",
            type: "string",
          },
          {
            name: "socailDesc",
            title: "Description",
            type: "text",
          },
          {
            name: "socialImage",
            title: "Image",
            type: "image",
            options: { hotspot: true },
          },
        ],
      },

  ],
};




export { logicalServices, subServiceSchema };