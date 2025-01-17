import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

interface SanityWebhookBody {
  pageType: string;
  title: string;
  slug: string;
  introductionheading: string;
}

export async function POST(req: NextRequest) {
  const secret = process.env.SANITY_WEBHOOK_SECRET;

  // Verify the webhook secret
  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${secret}`) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = (await req.json()) as SanityWebhookBody;

    // Check if the webhook is for a blog
    if (body?.pageType === "blogs") {
      const { title, slug, introductionheading } = body;

      // Hardcoded email for now
      const recipientEmail = "ayesha@codeautomation.dev";

      // Send email notification
      await sendEmail({
        to: recipientEmail,
        subject: `New Blog Published: ${title}`,
        text: `A new blog titled "${title}" has been published.\n\nCheck it out here: https://codeautomation.ai/blogs/${slug}\n\nDescription: ${introductionheading}`,
        html: `
          <p>A new blog titled <strong>${title}</strong> has been published.</p>
          <p>Check it out here: <a href="https://codeautomation.ai/blogs/${slug}" target="_blank">Read Blog</a></p>
          <p>Description: ${introductionheading}</p>
        `,
      });

      return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
    }

    return NextResponse.json({ message: "No action taken" }, { status: 400 });
  } catch (error) {
    console.error("Error handling webhook:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

// Helper function to send email
async function sendEmail({
  to,
  subject,
  text,
  html,
}: {
  to: string;
  subject: string;
  text: string;
  html: string;
}) {
  const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER, // Set in environment variables
        pass: process.env.EMAIL_PASS, // Set in environment variables
      },
    });

  await transporter.sendMail({
    from: `"CodeAutomation.ai LLC" <${process.env.EMAIL_USER}>`, // Sender address
    to, 
    subject, // Subject line
    text, // Plain text body
    html, // HTML body
  });
}
