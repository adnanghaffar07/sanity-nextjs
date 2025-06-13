export default {
  name: 'fbMetaLead',
  title: 'FB Meta Leads',
  type: 'document',
  fields: [
    // 🔹 Basic Contact Info
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'email', title: 'Email', type: 'string' },
    { name: 'phoneNumber', title: 'Phone Number', type: 'string' },

    // 🔹 Business Info
    { name: 'companyName', title: 'Company Name', type: 'string' },
    { name: 'work', title: 'Work', type: 'string' }, // ✅ New: Work field

    // 🔹 Meta Campaign Info
    { name: 'campaignName', title: 'Campaign Name', type: 'string' },
    { name: 'creationDate', title: 'Creation Date', type: 'date' },
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
    // 🔹 Lead Qualification Questions
    {
      name: 'appType',
      title: 'What type of app do you need?',
      type: 'string',
    },
    {
      name: 'appStage',
      title: 'What stage are you at with your app idea?',
      type: 'string',
    },
    // 🔹 Opt-Out Field
    {
      name: 'isUnsubscribed',
      title: 'Unsubscribed',
      type: 'boolean',
      initialValue: false, // ✅ Better than default
    },
  ],
};
