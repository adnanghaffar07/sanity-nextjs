export default {
  name: 'visitor',
  title: 'Visitor',
  type: 'document',
  fields: [
    {
      name: 'ip',
      title: 'IP Address',
      type: 'string',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'object',
      fields: [
        {
          name: 'city',
          title: 'City',
          type: 'string',
        },
        {
          name: 'region',
          title: 'Region',
          type: 'string',
        },
        {
          name: 'country',
          title: 'Country',
          type: 'string',
        },
      ],
    },
    {
      name: 'latitude',
      title: 'Latitude',
      type: 'number',
    },
    {
      name: 'longitude',
      title: 'Longitude',
      type: 'number',
    },
    {
      name: 'timestamp',
      title: 'Timestamp',
      type: 'datetime',
    },
    {
      name: 'pageUrl',
      title: 'Page URL',
      type: 'string',
    },
    {
      name: 'userAgent',
      title: 'User Agent',
      type: 'string',
    },
    {
      name: 'referrer',
      title: 'Referrer',
      type: 'string',
    },
  ],
};