// import nodemailer from "nodemailer";

// export async function POST(request: any): Promise<any> {
//   const completeFormData = await request.formData();
//   const name = completeFormData.get("name");
//   const email = completeFormData.get("email");
//   const number = completeFormData.get("number");
//   const looking = completeFormData.get("looking");
//   const subscribe = completeFormData.get("subscribe");
//   const pageName = completeFormData.get("pagename");
//   const transporter = nodemailer.createTransport({
//     name: "SMTP",
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: "umaid@codeautomation.dev",
//       pass: "ohqgvbhpwfcjbevh",
//     },
//   });

//   const mailOptions = {
//     from: "umaid@codeautomation.dev",
//     to: ["umaid@codeautomation.ai"],
//     // to: ["adnan@codeautomation.dev", "jason@codeautomation.dev"],
//     subject: `CA Website Greeting Popup form - ${pageName} page`,
//     html: `
//     <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <style>
//   body { font-family: Arial, sans-serif; }
//   h2 { color: #333; }
//   p { margin-bottom: 10px; }
//   .data-table {
//     width: 100%;
//     border-collapse: collapse;
//     table-layout: fixed; /* Ensures the table respects the specified column widths */
//   }
//   .data-table th, .data-table td {
//     border: 1px solid #ddd;
//     padding: 8px;
//     text-align: left; /* Left-aligns text in both columns */
//   }
//   .data-table th {
//     background-color: #f2f2f2;
//     width: 30%; /* Specifies the width of the first column */
//   }
//   .data-table td {
//     width: 70%; /* Specifies the width of the second column */
//   }
// </style>
// </head>
// <body>
// <h2>Greeting Pop-up Form</h2>
// <table class="data-table">
//   <tr><th>Name</th><td>${name}</td></tr>
//   <tr><th>Email</th><td>${email}</td></tr>
//   <tr><th>Contact Number</th><td>${number}</td></tr>
//   <tr><th>Looking For</th><td>${looking}</td></tr>
//   <tr><th>Subscribed for Newsletter</th><td>${subscribe}</td></tr>
// </table>
// </body>
// </html>
// `,
//   };

//   try {
//     const checkResponse = await transporter.sendMail(mailOptions);
//     return Response.json(
//       { message: "Resume uploaded and email sent successfully" },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error sending email:", error);
//     return Response.json(
//       { message: "Error in sending email" },
//       { status: 500 }
//     );
//   }
// }

import nodemailer from "nodemailer";

export async function POST(request: any): Promise<any> {
  const completeFormData = await request.formData();

  const name = completeFormData.get("name");
  const email = completeFormData.get("email");
  const number = completeFormData.get("number");
  const looking = completeFormData.get("looking");
  const subscribe = completeFormData.get("subscribe");
  const pageName = completeFormData.get("pagename");

  const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    secure: false,
    auth: {
      user: "75f6c8001@smtp-brevo.com",
      pass: "KVvb5cOUnwqmx3Gy",
    },
  });

  const mailOptions = {
    from: "umaid@codeautomation.dev",
    to: ["adnan@codeautomation.dev"],
    subject: `CA Website Greeting Popup form - ${pageName} page`,
    html: `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
  body { font-family: Arial, sans-serif; }
  h2 { color: #333; }
  p { margin-bottom: 10px; }
  .data-table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed; /* Ensures the table respects the specified column widths */
  }
  .data-table th, .data-table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left; /* Left-aligns text in both columns */
  }
  .data-table th {
    background-color: #f2f2f2;
    width: 30%; /* Specifies the width of the first column */
  }
  .data-table td {
    width: 70%; /* Specifies the width of the second column */
  }
</style>
</head>
<body>
<h2>Greeting Pop-up Form</h2>
<table class="data-table">
  <tr><th>Name</th><td>${name}</td></tr>
  <tr><th>Email</th><td>${email}</td></tr>
  <tr><th>Contact Number</th><td>${number}</td></tr>
  <tr><th>Looking For</th><td>${looking}</td></tr>
  <tr><th>Subscribed for Newsletter</th><td>${subscribe}</td></tr>
</table>
</body>
</html>
`,
  };

  try {
    await transporter.sendMail(mailOptions);

    if (subscribe === "true") {
      const brevoApiKey =
        "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";

      const checkContactResponse = await fetch(
        `https://api.sendinblue.com/v3/contacts/${email}`,
        {
          method: "GET",
          headers: {
            "api-key": brevoApiKey,
            "Content-Type": "application/json",
          },
        }
      );

      if (checkContactResponse.status === 404) {
        const contactData = {
          email: email,
          attributes: {
            FIRSTNAME: name,
          },
          listIds: [5],
          updateEnabled: false,
        };

        const addContactResponse = await fetch(
          "https://api.sendinblue.com/v3/contacts",
          {
            method: "POST",
            headers: {
              "api-key": brevoApiKey,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(contactData),
          }
        );

        const addContactResult = await addContactResponse.json();

        if (!addContactResponse.ok) {
          console.error("Error adding contact:", addContactResult);
          throw new Error(
            addContactResult.message || "Error adding contact to Brevo"
          );
        }
      } else if (!checkContactResponse.ok) {
        const checkContactResult = await checkContactResponse.json();
        console.error("Error checking contact:", checkContactResult);
        throw new Error(
          checkContactResult.message || "Error checking contact in Brevo"
        );
      }

      const transactionalEmailData = {
        to: [{ email: email, name: name }],
        templateId: 2,
        params: {
          FIRSTNAME: name,
        },
      };

      const sendEmailResponse = await fetch(
        "https://api.sendinblue.com/v3/smtp/email",
        {
          method: "POST",
          headers: {
            "api-key": brevoApiKey,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(transactionalEmailData),
        }
      );

      const sendEmailResult = await sendEmailResponse.json();

      if (!sendEmailResponse.ok) {
        console.error("Error sending email:", sendEmailResult);
        throw new Error(
          sendEmailResult.message || "Error sending thank-you email"
        );
      }
    }

    return new Response(
      JSON.stringify({ message: "Form submitted and email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ message: "Error in processing the request" }),
      { status: 500 }
    );
  }
}
