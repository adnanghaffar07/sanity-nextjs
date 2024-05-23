import nodemailer from "nodemailer";

export async function POST(request: any): Promise<any> {
  const completeFormData = await request.formData();

  const name = completeFormData.get("name");
  const purpose = completeFormData.get("purpose");
  const number = completeFormData.get("number");
  const email = completeFormData.get("email");
  const country = completeFormData.get("country");
  const city = completeFormData.get("city");
  const program = completeFormData.get("program");

  const transporter = nodemailer.createTransport({
    name: "SMTP",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "nouman@codeautomation.dev",
      pass: "bzgldjgspftyusay",
    },
  });

  const mailOptions = {
    from: "nouman@codeautomation.dev",
    to: ["adnan@codeautomation.dev", "jason@codeautomation.dev"],
    subject: `${name} contacted for partnership program`,
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
  .data-table { width: 100%; border-collapse: collapse; }
  .data-table th, .data-table td { border: 1px solid #ddd; padding: 8px; }
  .data-table th { background-color: #f2f2f2; }
</style>
</head>
<body>
<h2>Partnership Form</h2>
<table class="data-table">
  <tr><th>Name</th><td>${name}</td></tr>
  <tr><th>Email</th><td>${email}</td></tr>
  <tr><th>Contact Number</th><td>${number}</td></tr>
  <tr><th>Purpose</th><td>${purpose}</td></tr>
  <tr><th>Country</th><td>${country}</td></tr>
  <tr><th>City</th><td>${city}</td></tr>
  <tr><th>Program</th><td>${program}</td></tr>
</table>
</body>
</html>
`,
  };

  try {
    const checkResponse = await transporter.sendMail(mailOptions);
    return Response.json(
      { message: "Form submitted and email sent successfully" },
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
