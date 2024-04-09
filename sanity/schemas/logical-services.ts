// Define subService schema
const subServiceSchema = {
    name: "subService",
    type: "document",
    title: "Sub Service",
    fields: [
      {
        name: "urlPathSubPage",
        title: "URL Path Sub Page",
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
            name: "serviceTitleBanerSub",
            title: "Service Banner Title Sub",
            type: "string",
          },
          {
            name: "serviceDesceBanerSub",
            title: "Service Banner Description Sub",
            type: "string",
          },
          {
            name: "introductionSub",
            title: "Service Introduction Sub",
            type: "text",
          },
          {
            name: "toolsTechSub",
            title: "Tools and Technology Sub",
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
            name: "exampleServicesSub",
            title: "Example of Service Sub",
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
            name: "specialOfferSub",
            title: "Special Offers Sub",
            type: "text",
          },
          {
            name: "summaryMessageSub",
            title: "Summary Message About Sub Service",
            type: "text",
          },
          {
            name: "callToActionSub",
            title: "Call To Action Sub",
            type: "text",
          },
      // Add more fields for sub-service content if needed
    ],
  };
  
  // Define subServicePage schema
//   const subServicePageSchema = {
//     name: "subServicePage",
//     type: "document",
//     title: "Sub Service Page",
//     fields: [
//         {
//             name: "urlPathSubPage",
//             title: "URL Path Sub Page",
//             type: "string",
//           },
//           {
//             name: "heroImageSub",
//             title: "Hero Image Sub",
//             type: "image",
//             options: { hotspot: true },
//             fields: [
//               {
//                 name: "alt",
//                 title: "Alt",
//                 type: "string",
//               },
//             ],
//           },
//           {
//             name: "serviceTitleBanerSub",
//             title: "Service Banner Title Sub",
//             type: "string",
//           },
//           {
//             name: "serviceDesceBanerSub",
//             title: "Service Banner Description Sub",
//             type: "text",
//           },
//           {
//             name: "introductionSub",
//             title: "Service Introduction Sub",
//             type: "text",
//           },
//           {
//             name: "toolsTechSub",
//             title: "Tools and Technology Sub",
//             type: "array",
//             of: [
//               {
//                 type: "object",
//                 fields: [
//                   {
//                     name: "heading",
//                     title: "Heading",
//                     type: "string",
//                   },
//                   {
//                     name: "detail",
//                     title: "Detail",
//                     type: "string",
//                   },
//                 ],
//               },
//             ],
//           },
//           {
//             name: "exampleServicesSub",
//             title: "Example of Service Sub",
//             type: "array",
//             of: [
//               {
//                 type: "object",
//                 fields: [
//                   {
//                     name: "heading",
//                     title: "Heading",
//                     type: "string",
//                   },
//                   {
//                     name: "detail",
//                     title: "Detail",
//                     type: "string",
//                   },
//                 ],
//               },
//             ],
//           },
//           {
//             name: "specialOfferSub",
//             title: "Special Offers Sub",
//             type: "text",
//           },
//           {
//             name: "summaryMessageSub",
//             title: "Summary Message About Sub Service",
//             type: "string",
//           },
//           {
//             name: "callToActionSub",
//             title: "Call To Action Sub",
//             type: "string",
//           },
//       // Add more fields for sub-service page content if needed
//     ],
//   };
  
  // Define logicalServices schema
  const logicalServices = {
    name: "logicalServices",
    title: "Logical Services", // Add a title for the logical services schema
    type: "document",
    fields: [
      // Service General Pages Data Model
     
          {
            name: "urlPathGeneral",
            title: "URL Path General Page",
            type: "string",
          },
        {
          name: "heroImageGeneral",
          title: "Hero Image General",
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
          name: "serviceTitleBannerGeneral",
          title: "Service Banner Title General",
          type: "string",
        },
        {
          name: "serviceDescBannerGeneral",
          title: "Service Banner Description General",
          type: "string",
        },
        {
          name: "introductionGeneral",
          title: "Service Introduction General",
          type: "text",
        },
        {
          name: "toolsTechGeneral",
          title: "Tools and Technology General",
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
          name: "exampleServicesGeneral",
          title: "Example of Service General",
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
          name: "specialOfferGeneral",
          title: "Special Offers General",
          type: "text",
        },
        {
          name: "summaryMessageGeneral",
          title: "Summary Message About General Service",
          type: "text",
        },
        {
          name: "callToActionGeneral",
          title: "Call To Action General",
          type: "text",
        },
        {
            name: "subServices",
            type: "array",
            title: "Sub Services",
            of: [{ type: "reference", to: [{ type: "subService" }] }],
          },
        ],
      }



  export { logicalServices, subServiceSchema };