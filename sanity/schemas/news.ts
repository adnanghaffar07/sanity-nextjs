// schemas/news.js
export default {
    name: "news",
    type: "document",
    title: "News",
    fields: [
    
          { name: "title", type: "string", title: "Title" },
          { name: "subtitle", type: "text", title: "Subtitle" },
          {
            name: "backgroundImage",
            type: "image",
            title: "Background Image",
            options: {
              hotspot: true, // Enables cropping and focal point selection
            },
            fields: [
              { name: "alt", type: "string", title: "Alternative Text" },
            ],
          },
          { name: "articleTitle", type: "string", title: "Article Title" },
          { name: "articleSubtitle", type: "text", title: " Article Subtitle" },
      {
        name: "articles",
        type: "array",
        title: "Articles",
        of: [
          {
            type: "object",
            fields: [
              { name: "title", type: "string", title: "Title" },
              { name: "description", type: "text", title: "Description" },
              {
                name: "image",
                type: "image",
                title: "Image",
                options: {
                  hotspot: true,
                },
                fields: [
                  { name: "alt", type: "string", title: "Alternative Text" },
                ],
              },
              { name: "date", type: "date", title: "Date" },
              { name: "author", type: "string", title: "Author" },
            ],
          },
        ],
      },
      { name: "techTitle", type: "string", title: "Tech Title" },
      { name: "techSubtitle", type: "text", title: " Tech Subtitle" },
      {
        name: "latestTechnologies",
        type: "array",
        title: "Latest Technologies",
        of: [
          {
            type: "object",
            fields: [
              { name: "title", type: "string", title: "Title" },
              { name: "description", type: "text", title: "Description" },
            ],
          },
        ],
      },
    
    ],
  };
  