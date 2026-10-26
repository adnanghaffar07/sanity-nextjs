// Field definitions shared by the Blog Post, Case Study and Value Blueprint
// schemas. They keep the field names (and stored data shape) of the original
// combined "portfolio" type the content was copied from, so the page templates
// read the same data. Only fields still used by the new schemas are here.

import type { SharedField } from "./reuse";

const sharedFields: SharedField[] = [
  {
      name: 'jsonLd',
      title: 'JSON-LD Schema',
      type: 'text',
      description: 'Add structured data (schema.org) for better SEO. Example: Article, CaseStudy, etc.'
    },

  {
      name: "title",
      title: "Title",
      type: "string",
    },

  {
      name: "subtitle",
      title: "Sub Title",
      type: "string",
    },

  {
      name: "color",
      title: "Color",
      type: "string",
    },

  {
      name: "description",
      title: "Description",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading 1", value: "h1" },
            { title: "Heading 2", value: "h2" },
            { title: "Heading 3", value: "h3" },
            { title: "Heading 4", value: "h4" },
            { title: "Heading 5", value: "h5" },
            { title: "Heading 6", value: "h6" }
          ],
          lists: [{ title: "Bullet", value: "bullet" }],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Underline', value: 'underline' },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL"
                  },
                  {
                    name: "blank",
                    type: "boolean",
                    title: "Open in new tab"
                  }
                ]
              },
              {
                name: "textColor",
                type: "object",
                title: "Text Color",
                fields: [
                  {
                    name: "color",
                    type: "string",
                    title: "Color",
                    options: {
                      list: [
                        { title: "Red", value: "red" },
                        { title: "Green", value: "green" },
                        { title: "Blue", value: "blue" }
                      ]
                    }
                  }
                ]
              }
            ]
          }
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Alt",
              type: "string"
            }
          ]
        },
        {
          type: "code",
          title: "Code Snippet",
          name: "code",
          options: {
            language: "dart", // ✅ Change default to Dart
            languages: [
              { title: "JavaScript", value: "javascript" },
              { title: "TypeScript", value: "typescript" },
              { title: "Python", value: "python" },
              { title: "HTML", value: "html" },
              { title: "CSS", value: "css" },
              { title: "Dart", value: "dart" } // ✅ Dart is included
            ]
          }
        },          
        { type: 'table' }, // ✅ Add table support here
    {
      type: 'youtubeEmbed'
    }

      ]
    },

  {
      name: "audience",
      title: "Target Audience",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Mobile App Clients", value: "app" },
          { title: "Custom Software Clients", value: "software" },
          { title: "Website Development Clients", value: "web" },
          { title: "Ecommerce Business", value: "ecommerce" },
          { title: "Shopify Store", value: "shopify" },
          { title: "AI Service Clients", value: "ai" },
          { title: "Machine Learning", value: "ml" },
          { title: "Digital Marketing Clients", value: "marketing" },
          { title: "SEO-Focused Clients", value: "seo" },
          { title: "Design & Branding Clients", value: "design" }
        ],
        layout: "checkbox"
      }
    },

  {
      name: "blogheading",
      title: "Blog Heading",
      type: "string",
    },

  {
          name: "button",
          title: "Button",
          type: "object",
          fields: [
            {
              name: 'buttonText',
              type: 'string',
              title: ' Button Text',
            },
            {
              name: 'buttonUrl',
              type: 'url',
              title: ' Button URL',
            },
          ]
        },

  {
      name: "introductionheading",
      title: "Introduction Heading",
      type: "string",
    },

  {
      name: "briefdescription",
      title: "Brief Description",
      type: "string",
    },

  {
      name: "briefitemsarray",
      title: "Brief Items Array",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "heading",
              title: "Heading",
              type: "string",
            },
            {
              name: "value",
              title: "Value",
              type: "string",
            },
          ],
        },
      ],
    },

  {
      name: "projectscopecontent",
      title: "Project Scope Content",
      type: "string",
    },

  {
      name: 'projectGoalsSection',
      title: 'Project Goals Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        
       
        {
          name: 'goals',
          title: 'Goals',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                },
                {
                  name: 'description',
                  title: 'Description',
                  type: 'string',
                },
              ],
            },
          ],
        },
      ],
    },

  {
      name: "toolsandtechusedheading",
      title: "Tools & Technologies Used Heading",
      type: "string",
    },

  {
      name: "challengesfacedheading",
      title: "Challenges Faced Heading",
      type: "string",
    },

  {
      name: "chanllangesfaced",
      title: "Chanllanges Faced",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "heading",
              title: "Heading",
              type: "string",
            },
            {
              name: "description",
              title: "Description",
              type: "string",
            },
          ],
        },
      ],
    },

  {
      name: "ourapproachheading",
      title: "Our Approach Heading",
      type: "string",
    },

  {
      name: "ourapproach",
      title: "Our Approach",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "heading",
              title: "Heading",
              type: "string",
            },
            {
              name: "description",
              title: "Description",
              type: "string",
            },
          ],
        },
      ],
    },

  {
      name: "resultsheading",
      title: "Results Heading",
      type: "string",
    },

  {
      name: "results",
      title: "Results",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "heading",
              title: "Heading",
              type: "string",
            },
            {
              name: "description",
              title: "Description",
              type: "string",
            },
          ],
        },
      ],
    },

  {
      name: "conclusionheading",
      title: "Conclusion Heading",
      type: "string",
    },

  {
      name: "conclusion",
      title: "Conclusion",
      type: "string",
    },

  {
      name: "faqSection",
      title: "FAQ Section",
      type: "object",
      fields: [
        {
          name: "title",
          title: "FAQ Section Title",
          type: "string",
        },
        {
          name: "faqs",
          title: "FAQs",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "question",
                  title: "Question",
                  type: "string",
                },
                {
                  name: "answer",
                  title: "Answer",
                  type: "text",
                },
              ],
            },
          ],
        },
      ],
    },

  {
      name: "heroimage",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },

  {
      name: "cardimage",
      title: "Card Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },

  {
      name: "primaryimage",
      title: "Primary Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },

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
            {
              name: "siteName",
              title: "Site Name",
              type: "string",
            },
          ],
        },

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
];

export default sharedFields;
