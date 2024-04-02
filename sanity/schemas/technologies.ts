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
        name: "techLogos",
        title: "Technology Logos Image",
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
  