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
  const contactFormQuery = `*[_type == 'contactForm']{ name, email }`;
  const calendlyQuery = `*[_type == 'calendlyMeeting']{ name, email }`;

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
    const skipEmails = req.url.includes("skipEmails=true"); // Check for skipEmails flag in URL

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
  background-color: white; /* White background */
  color: black; /* Black text */
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  border: 1px solid #333; /* Optional border for better visibility */
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
                  <img src="${imageUrl}" alt="${heroimage.alt}" style="width: 100%; max-width: 600px; height: auto; margin-bottom: 10px; border-radius: 15px; overflow: hidden;">
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
          })
          .catch((error) => {
            console.error(`Failed to send email to ${recipient.email}:`, error.message);
            return { email: recipient.email, error: error.message };
          })
      );

      const emailResults = await Promise.all(emailPromises);
      const failedEmails = emailResults.filter((result:any) => result?.error);

      console.log(`Failed emails: ${failedEmails.map((e:any) => e.email)}`);

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
