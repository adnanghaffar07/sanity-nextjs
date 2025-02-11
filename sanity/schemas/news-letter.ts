export default {
  name: 'newsletter',
  title: 'Newsletter',
  type: 'document',
  fields: [
    {
      name: 'subject',
      title: 'Subject',
      type: 'string',
    },
    {
      name: 'headline',
      title: 'Headline',
      type: 'string',
    },
    {
      name: 'introText',
      title: 'Introductory Text',
      type: 'text',
    },
    {
      name: 'offerPrice',
      title: 'Offer Price',
      type: 'string',
    },
    {
      name: 'offerDetails',
      title: 'Offer Details',
      type: 'text',
    },
    {
      name: 'projectsList',
      title: 'Recent Projects',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'pricingTable',
      title: 'Pricing Table',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'service', title: 'Service', type: 'string' },
            { name: 'setupCost', title: 'One-Time Cost', type: 'string' },
            { name: 'monthlyCost', title: 'Monthly Cost', type: 'string' },
          ],
        },
      ],
    },
    {
      name: 'recipientGroups',
      title: 'Recipient Groups',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'All Contacts', value: 'contactForm' },
          { title: 'All Calendly Meetings', value: 'calendlyMeeting' },
          { title: 'All Testing', value: 'testing' },
        ],
        layout: 'checkbox', // Displays checkboxes for multiple selections
      },
    },
  ],
};
