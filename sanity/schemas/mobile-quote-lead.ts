// schemas/lead.ts
export default {
  name: 'lead',
  title: 'Mobile Service Request a Quote Leads',
  type: 'document',
  fields: [
    { name: 'name', type: 'string', title: 'Name' },
    { name: 'email', type: 'string', title: 'Email' },
    { name: 'phone', type: 'string', title: 'Phone' },
    { name: 'message', type: 'text', title: 'Message' },
    { name: 'source', type: 'string', title: 'Source' },
    { name: 'submittedAt', type: 'datetime', title: 'Submitted At' },
  ],
};
