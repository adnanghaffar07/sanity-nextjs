import { serverClient } from "@/sanity/lib/sanity/serverClient";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Function to send email using Nodemailer
async function sendEmail(formData: any) {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER, // Your email address
                pass: process.env.EMAIL_PASS, // Your email password or app password
            },
        });

        const mailOptions = {
            from: `"CODEAUTOMATION PAYMENT PROPSAL" <${process.env.EMAIL_USER}>`,
            to: "adnan@codeautomation.dev", // Change this to your team's email
            subject: "New Propsal Form Submission",
            html: `
        <h2>New Propsal Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Name:</strong> ${formData.package}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Details:</strong> ${formData.details}</p>
      `,
        };

        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");
    } catch (error) {
        console.error("Error sending email:", error);
    }
}

export async function POST(req: Request) {
    try {
        const formData = await req.json();

        // Store in Sanity
        await serverClient.create({
            _type: "paymentPropsal",
            ...formData,
            createdAt: new Date().toISOString(),
        });

        // Send Email Notification
        await sendEmail(formData);

        return NextResponse.json({ message: "Success" }, { status: 200 });
    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
}
