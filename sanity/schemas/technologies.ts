const technologies = {
    name: "technologies",
    title: "Technologies",
    type: "document",
    fields: [
      {
        name: "techname",
        title: "Technology Title",
        type: "string",
      },
  
      {
        name: "techDesc",
        title: "Technology Description",
        type: "string",
      },
  
      {
        "name": "techLogos",
        "title": "Technology Logo",
        "type": "array",
        "of": [
          {
            "type": "object",
            "fields": [
              {
                "name": "heading",
                "title": "Heading",
                "type": "string"
              },
              {
                name: "images",
                title: "Images",
                type: "array",
                of: [{ type: "reference", to: [{ type: "techLogos" }] }] // Reference techLogos schema here
              }
            ]
          }
            ] 
      },
      
      {
        name: "techImage",
        title: "Technology Image",
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
  };
  
  export default technologies;
  