const newServices = {
  name: "newServices",
  title: "New Services",
  type: "document",
  fields: [

    //---->Service General Pages Data Model


    {
      name: "urlPathGeneralPage",
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
      name: "serviceTitleBanerGeneral",
      title: "Service Banner Title General",
      type: "string",
    },
    {
      name: "serviceDesceBanerGeneral",
      title: "Service Banner Description General",
      type: "text",
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
      of: [ {
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
      },],
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
    // {
    //   name: "exampleServices",
    //   title: "Example of Service",
    //   type: "array",
    //   of: [{ type: "string" }],
    // },

    {
      name: "specialOfferGeneral",
      title: "Special Offers General",
      type: "text",
    },
    {
      name: "summaryMessageGeneral",
      title: "Summary Message About General Service",
      type: "string",
    },
    {
      name: "callToActionGeneral",
      title: "Call To Action General",
      type: "string",
    },

    //---->Service Child Pages Data Model

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
      type: "text",
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
      of: [ {
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
      },],
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
      type: "string",
    },
    {
      name: "callToActionSub",
      title: "Call To Action Sub",
      type: "string",
    },



  ],
};

export default newServices;
