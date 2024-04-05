const newServices = {
    name: "newServices",
    title: "New Services",
    type: "document",
    fields: [
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
        name: "introduction",
        title: "Service Introduction",
        type: "text",
      },
  
      {
        name: "exampleServices",
        title: "Example of Service",
        type: "array",
        of: [{ type: "string" }],
      },
  
      {
        name: "specialOffer",
        title: "Special Offers",
        type: "text",
      },
      {
        name: "summaryMessage",
        title: "Summary Message About Service",
        type: "string",
      },
      {
        name: "callToAction",
        title: "Call To Action",
        type: "string",
      },
    ],
  };
  
  export default newServices;
  