export default {
  name: "user",
  title: "User",
  type: "document",
  fields: [
    { 
      name: "email", 
      title: "Email", 
      type: "string", 
    },
    { 
      name: "name", 
      title: "Name", 
      type: "string" 
    },
    { 
      name: "password", 
      title: "Password", 
      type: "string",
      hidden: ({ document }:any) => !!document?.googleId // Hide password if Google ID exists
    },
    { 
      name: "googleId", 
      title: "Google ID", 
      type: "string" 
    },
    { 
      name: "profilePicture", 
      title: "Profile Picture", 
      type: "url" 
    },
    { 
      name: "token", 
      title: "Token", 
      type: "string", 
      hidden: true // Hide token field from Sanity Studio UI
    },
  ]
};
