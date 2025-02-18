export default {
    name: "paymentPropsal",
    title: "Payment Propsal Details",
    type: "document",
    fields: [
      { name: "name", title: "Name", type: "string" },
      { name: "package", title: "Package Name", type: "string" },
      { name: "phone", title: "Phone", type: "string" },
      { name: "email", title: "Email", type: "string" },
      { name: "details", title: "Project Details", type: "text" },
      { name: "recaptcha", title: "Recaptcha", type: "string" },
      { name: "createdAt", title: "Created At", type: "datetime", options: { default: "now" } }
    ]
  };
  