const services = {
  name: "services",
  title: "Services",
  type: "document",
  fields: [
    {
      name: "serviceTitleBaner",
      title: "Service Banner Title",
      type: "string",
    },
    {
      name: "urlPath",
      title: "URL Path",
      type: "string",
    },
    {
      name: "serviceDesceBaner",
      title: "Service Banner Description",
      type: "text",
    },
    {
      name: "bannerimage",
      title: "Banner Image",
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
      name: "bannervideo",
      title: "Banner Video",
      type: "file",
      options: {
        accept: "video/mp4",
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "ourApproach",
      title: "Our Approach",
      type: "text",
    },

    {
      name: "howWeAchieve",
      title: "How We Achieve",
      type: "array",
      of: [{ type: "string" }],
    },

    {
      name: "ourApproachImg",
      title: "Our Approach Image",
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
      name: "whatWeOffer",
      title: "What We Offer",
      type: "text",
    },

    {
      name: "ourOffers",
      title: "Our Offers",
      type: "array",
      of: [{ type: "string" }],
    },

    {
      name: "offerImg",
      title: "What We Offer Image",
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
      name: "chooseCA",
      title: "Why Choose CodeAutomation For",
      type: "string",
    },

    {
      name: "chosseCAFor",
      title: "Choose CA For",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "quality",
              title: "CA Quality",
              type: "string",
            },
            {
              name: "description",
              title: "Quality Description",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "carddescription",
      title: "Card Description",
      type: "string",
    },
    {
      name: "cardicon",
      title: "Card Icon",
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
};

export default services;
