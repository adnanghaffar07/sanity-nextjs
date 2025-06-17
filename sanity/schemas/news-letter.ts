import { Rule } from 'sanity';

export default {
  name: 'newsletter',
  title: 'Content Machine',
  type: 'document',
  fields: [
    {
      name: 'subject',
      title: 'Subject',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().error('Subject is required'),
    },
    {
      name: 'headline',
      title: 'Headline',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().error('Headline is required'),
    },
    {
      name: 'introText',
      title: 'Introductory Text',
      type: 'text',
      validation: (Rule: Rule) => Rule.required().error('Introductory text is required'),
    },
    {
      name: 'offerPrice',
      title: 'Offer Price',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().error('Offer price is required'),
    },
    {
      name: 'offerDetails',
      title: 'Offer Details',
      type: 'text',
      validation: (Rule: Rule) => Rule.required().error('Offer details are required'),
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
          { title: 'FB Meta Leads', value: 'fbMetaLead' },
          { title: 'All Testing', value: 'testing' },

        ],
        layout: 'checkbox',
      },
    },
  ],
};
 