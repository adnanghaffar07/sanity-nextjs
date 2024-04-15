// import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: any): Promise<any> {
  const completeFormData = await request.formData();

  const formTitle = completeFormData.get("title");
  //   const formFile = completeFormData.get("file");
  const fileBuffer = completeFormData.get("fileBuffer");
  const fileName = completeFormData.get("fileName");
  console.log("_______first step inside backend");
  //   const fileType = completeFormData.get("fileType");
  //   const fileData = Buffer.from(fileBuffer, "base64");

  //   console.log("________title__received_____:", formTitle);
  //   console.log("________fileBuffer__received_____:", fileData);

  // const readFile = (file: any) => {
  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       resolve(reader.result);
  //     };
  //     reader.onerror = () => {
  //       reject(reader.error);
  //     };
  //     reader.readAsArrayBuffer(file);
  //   });
  // };
  //   console.log("_______readfile::::::", readFile(formFile));
  //   console.log("______data in api from F.E._____", fileType);
  //   console.log("______file-buffer-F.E._____", fileBuffer);
  //   console.log(
  //     "______updated-buffer:::::::_____",
  //     fileBuffer.slice(fileBuffer.indexOf(",") + 1)
  //   );

  //   const buffer = await new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       resolve(Buffer.from(reader.result as ArrayBuffer));
  //     };
  //     reader.onerror = reject;
  //     reader.readAsArrayBuffer(formFile);
  //   });

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
    to: "umaid@codeautomation.dev",
    subject: `Resume Uploaded for ${formTitle}`,
    // text: `Text for new resume, resume for position of ${formTitle}`,
    attachments: [
      {
        filename: fileName,
        content: fileBuffer.slice(fileBuffer.indexOf(",") + 1),
        encoding: "base64",
      },
    ],
  };

  try {
    console.log("_______second step inside backend and final try block");
    const checkResponse = await transporter.sendMail(mailOptions);
    console.log("_____checkResponse______", checkResponse);
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

  //   if (formTitle) {
  //     return Response.json({ message: "Success from B.E." });
  //   } else {
  //     return Response.json({ message: "Error from B.E." });
  //   }
}
