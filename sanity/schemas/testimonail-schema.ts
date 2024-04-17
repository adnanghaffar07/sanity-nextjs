const testimonial = {
  name: "testimonial",
  title: "Testimonials",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "designation",
      title: "Designation",
      type: "string",
    },
    // {
    //     name: 'slug',
    //     title: 'slug',
    //     type: 'slug',
    //     options: { source: 'name'}
    // },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    // {
    //   name: "url",
    //   title: "URL",
    //   type: "url",
    // },
    {
      name: "content",
      title: "Content",
      type: "string",
    },
  ],
};

export default testimonial;
