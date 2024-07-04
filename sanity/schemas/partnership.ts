const partnershipSchema = {
  name: "partnership",
  title: "Partnership Page",
  type: "document",
  fields: [
    {
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
    },
    {
      name: "heroSubTitle",
      title: "Hero Sub Title",
      type: "string",
    },
    {
      name: "heroImage",
      title: "Hero Image",
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
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "availableProgramSection",
      title: "Available Program Section",
      type: "object",
      fields: [
        {
          name: "partnershipTitle",
          title: "Partnership Title",
          type: "string",
        },
        {
          name: "partnershipDescription",
          title: "Partnership Description",
          type: "string",
        },
        {
          name: "partnershipImage",
          title: "Partnership Image",
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
        {
          name: "programs",
          title: "Programs",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "title",
                  title: "Title",
                  type: "string",
                },
                {
                  name: "description",
                  title: "Description",
                  type: "string",
                },
                {
                  name: "icon",
                  title: "Icon",
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
              ],
            },
          ],
        },
      ],
    },
    {
      name: "programDetails",
      title: "Program Details",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "programImage",
              title: "Program Image",
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
            {
              name: "list",
              title: "List",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      name: "topLevelItem",
                      title: "Top Level Item",
                      type: "string",
                    },
                    {
                      name: "subLevelList",
                      title: "Sub Level List",
                      type: "array",
                      of: [
                        {
                          type: "object",
                          fields: [
                            {
                              name: "subLevelItem",
                              title: "Sub Level Item",
                              type: "string",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "services",
      title: "Our Services",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "singleService",
              title: "Single Service",
              type: "array",
              of: [
                {
                  type: "string",
                },
              ],
            },
          ],
        },
      ],
    },
    // Web SEO Meta data
    {
      name: "webSeoMetadataSub",
      title: "Web SEO Metadata",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "description",
          title: "Description",
          type: "text",
        },
        {
          name: "keywords",
          title: "Keywords",
          type: "array",
          of: [{ type: "string" }],
        },
      ],
    },
 
    // Twitter Cards
    {
      name: "twitterCardsSub",
      title: "Twitter Cards",
      type: "object",
      fields: [
        {
          name: "twitterTitle",
          title: "Title",
          type: "string",
        },
        {
          name: "twitterDescription",
          title: "Description",
          type: "text",
        },
        {
          name: "twitterImage",
          title: "Image",
          type: "image",
          options: { hotspot: true },
        },
        {
          name: "twitterUrl",
          title: "Url",
          type: "string",
        },
        {
          name: "twitterType",
          title: "Type",
          type: "string",
        },
      ],
    },

    // Facebook Cards
    {
      name: "facebookCardsSub",
      title: "Facebook Cards",
      type: "object",
      fields: [
        {
          name: "facebookTitle",
          title: "Title",
          type: "string",
        },
        {
          name: "facebookDescription",
          title: "Description",
          type: "text",
        },
        {
          name: "facebookImage",
          title: "Image",
          type: "image",
          options: { hotspot: true },
        },
        {
          name: "facebookUrl",
          title: "Url",
          type: "string",
        },
        {
          name: "facebookType",
          title: "Type",
          type: "string",
        },
      ],
    },

    // LinkedIn Cards
    {
      name: "linkedInCardsSub",
      title: "LinkedIn Cards",
      type: "object",
      fields: [
        {
          name: "linkedInTitle",
          title: "Title",
          type: "string",
        },
        {
          name: "linkedInDescription",
          title: "Description",
          type: "text",
        },
        {
          name: "linkedInImage",
          title: "Image",
          type: "image",
          options: { hotspot: true },
        },
        {
          name: "linkedInUrl",
          title: "Url",
          type: "string",
        },
        {
          name: "linkedInType",
          title: "Type",
          type: "string",
        },
      ],
    },

    // Pinterest Cards
    {
      name: "pinterestCardsSub",
      title: "Pinterest Cards",
      type: "object",
      fields: [
        {
          name: "pinterestTitle",
          title: "Title",
          type: "string",
        },
        {
          name: "pinterestDescription",
          title: "Description",
          type: "text",
        },

        {
          name: "pinterestUrl",
          title: "Url",
          type: "string",
        },
        {
          name: "pinterestType",
          title: "Type",
          type: "string",
        },
      ],
    },

    // WhatsApp  Cards
    {
      name: "whatsappCardsSub",
      title: "Whatsapp Cards",
      type: "object",
      fields: [
        {
          name: "whatsappTitle",
          title: "Title",
          type: "string",
        },
        {
          name: "whatsappDescription",
          title: "Description",
          type: "text",
        },

        {
          name: "whatsappUrl",
          title: "Url",
          type: "string",
        },
        {
          name: "whatsappType",
          title: "Type",
          type: "string",
        },
      ],
    },

    // Telegram  Cards
    {
      name: "telegramCardsSub",
      title: "Telegram Cards",
      type: "object",
      fields: [
        {
          name: "telegramTitle",
          title: "Title",
          type: "string",
        },
        {
          name: "telegramDescription",
          title: "Description",
          type: "text",
        },

        {
          name: "telegramUrl",
          title: "Url",
          type: "string",
        },
        {
          name: "telegramType",
          title: "Type",
          type: "string",
        },
      ],
    },
  ],
};

export default partnershipSchema;
