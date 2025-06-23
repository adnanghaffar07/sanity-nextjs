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
      name: 'introText',
      title: 'Introductory Text',
      type: 'text',
      validation: (Rule: Rule) => Rule.required().error('Introductory text is required'),
    },
    {
      name: 'contentBlocks',
      title: 'Content Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'heading',
              title: 'Heading',
              type: 'string',
              validation: (Rule: Rule) => Rule.required().error('Heading is required'),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              validation: (Rule: Rule) => Rule.required().error('Description is required'),
            },
          ],
          preview: {
            select: {
              title: 'heading',
              subtitle: 'description',
            },
            prepare(selection: { title: string; subtitle: string }) {
              const { title, subtitle } = selection;
              return {
                title: title || 'Untitled Section',
                subtitle: subtitle ? subtitle.substring(0, 50) + (subtitle.length > 50 ? '...' : '') : 'No description',
              };
            },
          },
        },
      ],
      validation: (Rule: Rule) =>
        Rule.required().min(1).error('At least one content section is required'),
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
          preview: {
            select: {
              title: 'service',
              subtitle: 'setupCost',
            },
            prepare(selection: { title: string; subtitle: string }) {
              return {
                title: selection.title || 'New Service',
                subtitle: selection.subtitle ? `Setup: ${selection.subtitle}` : 'No setup cost',
              };
            },
          },
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
      validation: (Rule: Rule) =>
        Rule.required().min(1).error('At least one recipient group must be selected'),
    },
  ],
  preview: {
    select: {
      title: 'subject',
      subtitle: 'introText',
    },
    prepare(selection: { title: string; subtitle: string }) {
      return {
        title: selection.title,
        subtitle: selection.subtitle ? selection.subtitle.substring(0, 50) + '...' : 'No intro text',
      };
    },
  },
};