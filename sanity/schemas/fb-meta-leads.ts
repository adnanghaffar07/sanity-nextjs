// schemas/lead.js
export default {
  name: 'fbMetaLead',
  title: 'FB Meta Leads',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'email', title: 'Email', type: 'string' },
    { name: 'companyName', title: 'Company Name', type: 'string' },
    { name: 'campaignName', title: 'Campaign Name', type: 'string' },
    { name: 'creationDate', title: 'Creation Date', type: 'date' },
    { name: 'phoneNumber', title: 'Phone Number', type: 'string' },
    { name: 'date', title: 'Date', type: 'date' }, // Optional general date
    { name: 'bookingTime', title: 'Booking Time', type: 'string' }, // ✅ New time field
  ],
};
