export default {
  name: 'fbMetaLead',
  title: 'FB Meta Leads',
  type: 'document',
  fields: [
    // 🔹 Date
    { 
      name: 'creationDate', 
      title: 'Date', 
      type: 'datetime' 
    },

    // 🔹 Lead Information
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'email', title: 'Email', type: 'string' },
    { name: 'phoneNumber', title: 'Phone Number', type: 'string' },
    { name: 'companyName', title: 'Company', type: 'string' },

    // 🔹 Lead Qualification Questions
    { 
      name: 'peopleInterestedIn', 
      title: 'People are interested in', 
      type: 'string' 
    },
    { 
      name: 'appType', 
      title: 'What type of app do you need?', 
      type: 'string' 
    },
    { 
      name: 'appStage', 
      title: 'What stage are you at with your app idea?', 
      type: 'string' 
    },
    { 
      name: 'estimatedBudget', 
      title: 'What is your estimated budget?', 
      type: 'string' 
    },
    { 
      name: 'projectStartTime', 
      title: 'When do you want to start the project?', 
      type: 'string' 
    },
    { 
      name: 'preferredContact', 
      title: 'How would you prefer we contact you?', 
      type: 'string' 
    },

    // 🔹 Meta Campaign Info
    { name: 'campaignName', title: 'Campaign Name', type: 'string' },

    // 🔹 Opt-Out Field
    {
      name: 'isUnsubscribed',
      title: 'Unsubscribed',
      type: 'boolean',
      initialValue: false,
    },
  ],
};
