// schema/contactForm.js

export default {
    name: 'contactForm',
    title: 'Contact Form Submissions',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'contact_number',
        title: 'Contact Number',
        type: 'string',
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
      },
      {
        name: 'looking',
        title: 'Looking For',
        type: 'string',
      },
      {
        name: 'message',
        title: 'Message',
        type: 'text',
      },
      {
        name: 'page_name',
        title: 'Page Name',
        type: 'string',
      },
      {
        name: 'recaptcha_value',
        title: 'ReCAPTCHA Value',
        type: 'string',
      },
      {
        name: 'submitted_at',
        title: 'Submitted At',
        type: 'datetime',
        options: {
          dateFormat: 'YYYY-MM-DD',
          timeFormat: 'HH:mm',
          calendarTodayLabel: 'Today',
        },
      },
      {
        name: "isUnsubscribed",
        title: "Unsubscribed",
        type: "boolean",
        default: false,
      }
    ],
  };
  