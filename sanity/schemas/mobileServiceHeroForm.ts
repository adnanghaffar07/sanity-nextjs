// schemas/lead.ts
export default {
  name: 'mobileServiceHero',
  title: 'Mobile Service Hero Form',
  type: 'document',
  fields: [
    { name: 'name', type: 'string' },
    { name: 'email', type: 'string' },
    { name: 'contact_number', type: 'string' },
    { name: 'looking', type: 'string' },
    { name: 'message', type: 'text' },
    { name: 'source', type: 'string' },
    { name: 'submittedAt', type: 'datetime' },
  ],
};
