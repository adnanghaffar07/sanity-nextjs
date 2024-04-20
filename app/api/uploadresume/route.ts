import nodemailer from "nodemailer";

export async function POST(request: any): Promise<any> {
  const completeFormData = await request.formData();

  const formTitle = completeFormData.get("title");
  const fileBuffer = completeFormData.get("fileBuffer");
  const fileName = completeFormData.get("fileName");

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
    to: "hr@codeautomation.ai",
    subject: `Resume Uploaded for ${formTitle}`,
    attachments: [
      {
        filename: fileName,
        content: fileBuffer,
        encoding: "base64",
      },
    ],
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
