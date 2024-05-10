const careers = {
  name: "careers",
  title: "Careers(Jobs)",
  type: "document",
  fields: [
    {
      name: "jobTitleBaner",
      title: "Job Title Banner",
      type: "string",
    },

    {
      name: "descJobTitle",
      title: "Descriptive Job Title",
      type: "string",
    },

    {
      name: "yearsofExperience",
      title: "Years of Experience",
      type: "string",
      options: {
        list: ["Experience Less than 1 year", "2-3 years Experience", "3-5 years Experience", "5-8 years Experience", "More than 10 years Experience"]
      }
    },    

    {
      name: "jobDescription",
      title: "Job Description",
      type: "text",
    },
    {
      name: "newresponsibilities",
      title: "Responsibilities",
      type: "array",
      of: [{ type: "string" }],
    },

    {
      name: "requirements",
      title: "Requirements",
      type: "array",
      of: [{ type: "string" }],
    },

    {
      name: "qualification",
      title: "Qualification",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};

export default careers;
