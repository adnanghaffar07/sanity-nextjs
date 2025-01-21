import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";

interface SanityWebhookBody {
  pageType: string;
  title: string;
  slug: string;
  introductionheading: string;
  heroimage: {
    _type: string;
    alt: string;
    asset: {
      _type: string;
      _ref: string;
    };
  };
}

type Recipient = {
  name: string;
  email: string;
};

// Initialize Sanity image builder
const builder = imageUrlBuilder(client);

function urlForImage(source: any) {
  return source ? builder.image(source).url() : "";
}

async function fetchRecipients() {
  const contactFormQuery = `*[_type == 'contactForm' && isUnsubscribed != true]{ name, email }`;
  const calendlyQuery = `*[_type == 'calendlyMeeting' && isUnsubscribed != true]{ name, email }`;

  try {
    const [formData, calendlyData] = await Promise.all([
      client.fetch(contactFormQuery),
      client.fetch(calendlyQuery),
    ]);
    const allRecipients = [...formData, ...calendlyData];
    return Array.from(new Map(allRecipients.map((r) => [r.email, r])).values()); // Deduplicate by email
  } catch (error) {
    console.error("Error fetching recipients:", error);
    return [];
  }
}

export async function POST(req: NextRequest) {
  const secret = process.env.SANITY_WEBHOOK_SECRET;
  // Verify authorization
  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${secret}`) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = (await req.json()) as SanityWebhookBody;

    if (body?.pageType === "blogs") {
      const { title, slug, introductionheading, heroimage } = body;
      const imageUrl = urlForImage(heroimage.asset);

      // Fetch recipients
      const recipients = await fetchRecipients();
      if (recipients.length === 0) {
        return NextResponse.json({ message: "No recipients found" }, { status: 200 });
      }

      // Configure email transporter
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const emailPromises = recipients.map((recipient) =>
        transporter
          .sendMail({
            from: `"CodeAutomation.ai LLC" <${process.env.EMAIL_USER}>`,
            to: recipient.email,
            subject: `🚀 ${title}`,
            html: `
     <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Blog Published</title>
  <style>
    body {
      font-family: 'Arial', serif;
      margin: 0;
      padding: 0;
      background-color: #f4f7fc;
      color: #333;
    }

    .email-container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    }

    .email-header {
      color:rgb(30, 123, 204);
      padding: 6px;
    }

    .email-header h1 {
      margin: 0;
      padding: 6px;
      font-size: 32px;
      font-weight: 400;
    }

    .email-image img {
      width: 100%;
      height: auto;
      border-radius: 8px;
    }

    .email-body {
      padding: 10px;
    }

    .email-body h2 {
      font-size: 28px;
      color: #0a66c2;
      margin-bottom: 20px;
    }

    .email-body p {
      font-size: 16px;
      line-height: 1.8;
      color: #555;
      margin: 20px 0;
    }

    .email-button {
      display: inline-block;
      padding: 10px 20px;
      background-color: #f7e022;
      color: rgb(0, 0, 0);
      font-size: 14px;
      font-weight: bold;
      text-decoration: none;
      border-radius: 6px;
      margin-top: 20px;
      transition: background-color 0.3s ease;
    }

   .cta-buttons {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      margin-top: 30px;
      margin-bottom: 30px;
    }

    .cta-button1 a {
      padding: 10px 20px;
      background-color: #1d92fb;
      color: #ffffff;
      font-size: 14px;
      font-weight: bold;
      text-decoration: none;
      border-radius: 6px;
      transition: background-color 0.3s ease;
    }

    .cta-button1 a:hover {
      background-color: #0a66c2;
    }

    .cta-button2 a {
      padding: 10px 36px;
      background-color: #f7e022;
      color: rgb(0, 0, 0);
      font-size: 14px;
      font-weight: bold;
      text-decoration: none;
      border-radius: 6px;
      transition: background-color 0.3s ease;
    }

    .cta-button2 a:hover {
      background-color: #e0c81a;
    }

    .email-footer {
      background-color: rgb(252, 252, 252);
      padding: 20px;
      text-align: center;
      font-size: 14px;
      color: #888;
    }
      .social-icons {
      margin-bottom: 10px
    }

    .social-icons a {
      display: inline-block;
      margin: 0 10px;
      text-decoration: none;
      margin-bottom: 10px
    }

    .social-icons img {
      width: 30px;
      height: 30px;
    }

    .unsubscribe {
      font-size: 12px;
      color: #666;
      margin-top: 10px;
    }

    .unsubscribe a {
      color: rgb(220, 221, 221);
      text-decoration: none;
    }

    /* Responsive Design */
    @media only screen and (max-width: 600px) {
      .email-container {
        width: 100%;
        padding: 15px;
      }

      .cta-buttons {
        flex-direction: column;
        gap: 15px;
      }
        .cta-button1 {
 width: 200px;
 margin-bottom: 20px
    }

    .cta-button2 {
     width: 200px

    }

      .email-header h1 {
        font-size: 28px;
      }
    }
  </style>
</head>
<body>
  <div class="email-container">
    <!-- Header Section -->
    <div class="email-header">
      <h2>${title}</h2>
    </div>

    <!-- Hero Image Section -->
    <div class="email-image">
      <img src="${imageUrl}" alt="${heroimage.alt}">
    </div>

    <!-- Blog Content Section -->
    <div class="email-body">
      <p>${introductionheading}</p>
      <a href="https://codeautomation.ai/blogs/${slug}" target="_blank" class="email-button">Read the Blog</a>
    </div>

    <!-- Company Info & Call to Action Section -->
    <div class="email-body">
      <p>
        At CodeAutomation.ai, we specialize in transforming businesses through cutting-edge AI solutions that drive efficiency, innovation, and growth. Our expertise spans from automation tools to custom AI applications tailored to your unique needs. By partnering with us, you’ll unlock the potential to streamline operations and accelerate progress, allowing your company to stay ahead of the competition.
      </p>

      <!-- Call to Action Buttons -->
      <div class="cta-buttons">
        <div class="cta-button1">
          <a href="https://codeautomation.ai/services" target="_blank">Explore AI Solutions</a>
        </div>
        <div class="cta-button2">
          <a href="https://calendly.com/adnanghaffar" target="_blank">Schedule a Call</a>
        </div>
      </div>
    </div>

    <!-- Footer Section -->
    <div class="email-footer">
      <div class="social-icons">
        <a href="https://www.facebook.com/Codeautomationai/" target="_blank" style="margin-right: 10px;">
          <img src="https://codeautomation.ai/facebook.png" alt="Facebook" style="width: 24px; height: 24px;">
        </a>
        <a href="https://www.instagram.com/codeautomation.ai/" target="_blank" style="margin-right: 10px;">
          <img src="https://codeautomation.ai/instagram.png" alt="Instagram" style="width: 24px; height: 24px;">
        </a>
        <a href="https://twitter.com/codeautomation" target="_blank">
          <img src="https://codeautomation.ai/twitter.png" alt="Twitter" style="width: 24px; height: 24px;>
        </a>
        <a href="https://www.linkedin.com/company/codeautomationai/" target="_blank">
          <img src="https://codeautomation.ai/linkedin.png" alt="LinkedIn" style="width: 24px; height: 24px;>
        </a>
      </div>

      <p>&copy; ${new Date().getFullYear()} CodeAutomation.ai LLC. All Rights Reserved.</p>
      <p class="unsubscribe">Don't want to receive these emails? <a href="http://localhost:3000/api/unsubscribe?email=${recipient.email}" style="color: #0a66c2;">Unsubscribe</a>.</p>
    </div>
  </div>
</body>
</html>
          `,
          })
          .catch((error) => {
            console.error(`Failed to send email to ${recipient.email}:`, error.message);
            return { email: recipient.email, error: error.message };
          })
      );

      const emailResults = await Promise.all(emailPromises);
      const failedEmails = emailResults.filter((result: any) => result?.error);

      console.log(`Failed emails: ${failedEmails.map((e: any) => e.email)}`);

      return NextResponse.json(
        { message: "Emails processed", failedEmails },
        { status: 200 }
      );
    }

    return NextResponse.json({ message: "No action taken" }, { status: 400 });
  } catch (error) {
    console.error("Error handling webhook:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
