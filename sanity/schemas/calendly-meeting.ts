export default {
    name: "calendlyMeeting",
    title: "Calendly Meeting",
    type: "document",
    fields: [
      {
        name: "clientType",
        title: "Client Type",
        type: "string",
        options: {
          list: [
            { title: "Website Development", value: "web" },
            { title: "Design", value: "design" },
            { title: "Search Engine Optimization", value: "seo" },
            { title: "Mobile App Development", value: "app" },
            { title: "Software Development", value: "software" },
            { title: "E-commerce Solutions", value: "ecommerce" },
            { title: "Shopify Development", value: "shopify" },
            { title: "AI & Automation", value: "ai" },
            { title: "ML & Automation", value: "ml" },
            { title: "Digital Marketing", value: "marketing" },
            { title: "Other", value: "other" },
          ],
          layout: "dropdown",
        },
      },      
      {
        name: "name",
        title: "Name",
        type: "string",
      },
      {
        name: "email",
        title: "Email",
        type: "string",
      },
      {
        name: 'notes',
        title: 'Notes',
        type: 'array',
        of: [
          {
            type: 'text', // You can change this to 'string' if it's simple text input.
          },
        ],
        description: 'Any notes provided by the user during booking.',
      },
       {
        name: "phoneNumber",
        title: "Phone Number",
        type: "string",
      },
  
      {
        name: "eventName",
        title: "Event Name",
        type: "string",
      },
      {
        name: "isUnsubscribed",
        title: "Unsubscribed",
        type: "boolean",
        default: false,
      }
    ],
  };
  