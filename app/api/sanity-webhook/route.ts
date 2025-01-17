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

// Helper function to build image URLs
function urlForImage(source: any) {
  if (!source) {
    console.error("Image source is undefined or null");
    return '';
  }
  return builder.image(source).url(); // Ensure it returns a fully qualified URL
}

async function getFormData() {
  const queryValue = `*[_type == 'testing']{
    name,
    email
  }`;

  try {
    const fetchData = await client.fetch(queryValue);
    return fetchData || [];
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

async function getCalendlyData() {
  const queryValue = `*[_type == 'testing']{
    name,
    email
  }`;

  try {
    const fetchData = await client.fetch(queryValue);
    return fetchData || [];
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export async function POST(req: NextRequest) {
  const secret = process.env.SANITY_WEBHOOK_SECRET;
  const calendlyData = await getCalendlyData();
  const formData = await getFormData();

  console.log(calendlyData, "Calendly Emails Fetched");
  console.log(formData, "Form Emails Fetched");

  // Verify the webhook secret
  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${secret}`) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = (await req.json()) as SanityWebhookBody;

    // Check if the webhook is for a blog
    if (body?.pageType === "blogs") {
      const { title, slug, introductionheading, heroimage } = body;

      // Get the image URL from the hero image reference
      const imageUrl = urlForImage(heroimage.asset); // Access image URL via Sanity's image builder

      // Combine recipients from both sources
      const allRecipients: Recipient[] = [
        ...calendlyData.map((item: Recipient) => ({ name: item.name, email: item.email })),
        ...formData.map((item: Recipient) => ({ name: item.name, email: item.email })),
      ];

      // Remove duplicates by email
      const uniqueRecipients: Recipient[] = Array.from(
        new Map(allRecipients.map((item) => [item.email, item])).values()
      );

      // Send email to each recipient
      for (const recipient of uniqueRecipients) {
        console.log(`Sending email to ${recipient.name} at ${recipient.email}`);

        const emailContent = {
          to: recipient.email,
          subject: `🚀 ${title}`,
          text: `Hi ${recipient.name},\n\nA new blog titled "${title}" has been published.\n\nCheck it out here: https://codeautomation.ai/blogs/${slug}\n\nDescription: ${introductionheading}`,
          html: `
            <!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>New Blog Published</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  background-color: #f9f9f9;
                  color: #333;
                }
                .email-container {
                  max-width: 600px;
                  margin: 20px auto;
                  background-color: #ffffff;
                  border-radius: 8px;
                  overflow: hidden;
                  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }
                .email-header {
                  text-align: center;
                  padding: 20px;
                  background-color: #ffffff;
                }
                .email-header img {
                  max-width: 150px;
                  height: auto;
                }
                .email-image {
                  text-align: center;
                }
                .email-image img {
                  width: 100%;
                  max-width: 600px;
                  height: auto;
                }
                .email-body {
                  padding: 20px;
                }
                .email-body h2 {
                  font-size: 22px;
                  color: #333;
                  text-align: center;
                }
                .email-body p {
                  font-size: 16px;
                  line-height: 1.6;
                  margin: 15px 0;
                  text-align: center;
                }
                .email-button {
                  display: block;
                  width: max-content;
                  margin: 20px auto;
                  padding: 10px 20px;
                  background-color: #0073e6;
                  color: white;
                  text-decoration: none;
                  border-radius: 5px;
                  font-weight: bold;
                }
                .email-footer {
                  text-align: center;
                  padding: 10px;
                  font-size: 12px;
                  color: #666;
                }
              </style>
            </head>
            <body>
              <div class="email-container">
                <div class="email-image">
                  <img src="${imageUrl}" alt="${heroimage.alt}" style="width: 100%; max-width: 600px; height: auto; margin-bottom: 20px; border-radius: 15px; overflow: hidden;">
                </div>
                <div class="email-body">
                  <h2>${title}</h2>
                  <p>${introductionheading}</p>
                  <a class="email-button" href="https://codeautomation.ai/blogs/${slug}" target="_blank">Read the Blog</a>
                </div>
                <div class="email-footer">
                  <p>&copy; ${new Date().getFullYear()} CodeAutomation.ai LLC. All Rights Reserved.</p>
                </div>
              </div>
            </body>
            </html>
          `,
        };

        await sendEmail(emailContent);
      }

      return NextResponse.json({ message: "Emails sent successfully" }, { status: 200 });
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
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"CodeAutomation.ai LLC" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    text,
    html,
  });
}
