import nodemailer from "nodemailer";

export async function POST(request: any): Promise<any> {
  const completeFormData = await request.formData();

  const name = completeFormData.get("name");
  const email = completeFormData.get("email");
  const number = completeFormData.get("number");
  const looking = completeFormData.get("looking");
  const message = completeFormData.get("message");
  const pageName = completeFormData.get("pagename");

  const transporter = nodemailer.createTransport({
    name: "SMTP",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "umaid@codeautomation.dev",
      pass: "ohqgvbhpwfcjbevh",
    },
  });

  const mailOptions = {
    from: "umaid@codeautomation.dev",
    to: ["adnan@codeautomation.dev"],
    subject: `CA Website Contact form - ${pageName} page`,
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
<h2>Project Discussion Form</h2>
<table class="data-table">
  <tr><th>Name</th><td>${name}</td></tr>
  <tr><th>Email</th><td>${email}</td></tr>
  <tr><th>Contact Number</th><td>${number}</td></tr>
  <tr><th>Looking For</th><td>${looking}</td></tr>
  <tr><th>Message</th><td>${message}</td></tr>
</table>
</body>
</html>
`,
  };

  try {
    const checkResponse = await transporter.sendMail(mailOptions);
    return Response.json(
      { message: "Resume uploaded and email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return Response.json(
      { message: "Error in sending email" },
      { status: 500 }
    );
  }
}
