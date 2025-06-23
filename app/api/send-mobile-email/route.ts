import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { name, email, contact_number, looking, message } = await req.json();

        // ✅ Configure transporter
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // ✅ Compose email
        const mailOptions = {
            from: `"CA Website Mobile Service Form" <${process.env.TEAM_EMAIL_USER}>`,
            to: ["ayesha@codeautomation.dev"], // 💡 Add your team emails here
            subject: `New Contact Form Submission - ${name}`,
            html: `
        <h2>New Mobile Service Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact Number:</strong> ${contact_number}</p>
        <p><strong>Looking For:</strong> ${looking}</p>
        <p><strong>Message:</strong><br/>${message}</p>
        <p style="margin-top:20px;font-size:0.9rem;color:gray;">Sent from CodeAutomation.ai</p>
      `,
        };

        // ✅ Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "Email sent to team successfully." }, { status: 200 });

    } catch (error) {
        console.error("Failed to send email:", error);
        return NextResponse.json({ message: "Failed to send email.", error }, { status: 500 });
    }
}
