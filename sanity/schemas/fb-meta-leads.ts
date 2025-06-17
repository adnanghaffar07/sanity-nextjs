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

    // 🔹 Lead Qualification Questions
    {
      name: 'appType',
      title: 'What type of app do you need?',
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
