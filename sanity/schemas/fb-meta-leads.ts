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
    { name: 'bookingTime', title: 'Booking Time', type: 'string' },

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
    {
      name: 'estimatedBudget',
      title: 'What is your estimated budget?',
      type: 'string',
    },
    {
      name: 'projectStartTime',
      title: 'When do you want to start the project?',
      type: 'string',
    },
    {
      name: 'preferredContactMethod',
      title: 'How would you prefer we contact you?',
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
