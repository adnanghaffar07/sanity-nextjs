export default {
    name: "testing",
    title: "Testing",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Name",
        type: "string",
      },
      {
        name: "email",
        title: "Email",
        type: "string",
      },
      {
        name: 'notes',
        title: 'Notes',
        type: 'array',
        of: [
          {
            type: 'text', // You can change this to 'string' if it's simple text input.
          },
        ],
        description: 'Any notes provided by the user during booking.',
      },
      {
        name: "meetingStart",
        title: "Meeting Start",
        type: "datetime",
      },
      {
        name: "meetingEnd",
        title: "Meeting End",
        type: "datetime",
      },
      {
        name: "eventName",
        title: "Event Name",
        type: "string",
      },
      {
        name: "isUnsubscribed",
        title: "Unsubscribed",
        type: "boolean",
        default: false,
      }
      
    ],
  };
  