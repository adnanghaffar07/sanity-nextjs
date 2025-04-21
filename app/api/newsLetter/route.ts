import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

// List of failed emails
const failedEmails = [
    "uday@zeroik.com",
    "alexmachnizh@gmail.com",
    "rprincebenjamin@gmail.com",
    "ksteele@wwpfirm.com",
    "gabealmanza1996@gmail.com",
    "tm@adsoink.com",
    "hussnyaibrahim@yahoo.com",
    "felipebecher@pet-express-delivery.com",
    "puotkuony@gmail.com",
    "amzad2589@gmail.com",
    "citycf11@gmail.com",
    "pleasantgrovebengals@yahoo.com",
    "ramondeleon987@hotmail.com",
];

async function fetchRecipients() {
    const contactFormQuery = `*[_type == 'testing' && isUnsubscribed != true]{ name, email }`;
    const calendlyQuery = `*[_type == 'testing' && isUnsubscribed != true]{ name, email }`;

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
        // Fetch recipients
        const recipients = await fetchRecipients();
        if (recipients.length === 0) {
            return NextResponse.json({ message: "No recipients found" }, { status: 200 });
        }

        // Filter recipients to include only the failed emails
        const failedRecipients = recipients.filter((recipient) =>
            failedEmails.includes(recipient.email)
        );

        if (failedRecipients.length === 0) {
            return NextResponse.json({ message: "No failed recipients to send email to" }, { status: 200 });
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

        // Send email to each failed recipient
        const emailPromises = failedRecipients.map((recipient) =>
            transporter.sendMail({
                from: `"CodeAutomation.ai LLC" <${process.env.EMAIL_USER}>`,
                to: recipient.email,
                subject: "🚀 Get Your Mobile App Developed for Just $1,344 – Limited-Time Offer!",
                html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Special Offer: Get Your Mobile App Developed</title>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f7fc;
      color: #333;
    }

    .email-container {
      max-width: 650px;
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    }

    .email-header {
      color: #1e7bcc;
      padding: 12px;
      text-align: center;
    }

    .email-header h1 {
      margin: 0;
      padding: 10px;
      font-size: 28px;
      font-weight: 700;
      color: #1a73e8;
    }

    .email-body {
      padding: 30px;
      font-size: 16px;
      line-height: 1.8;
      color: #555;
    }

    .highlight {
      color: #0a66c2;
      font-weight: bold;
    }

    .cta-button {
      display: inline-block;
      padding: 10px 24px;
      background-color: #f7e022;
      color: #000;
      font-size: 16px;
      font-weight: bold;
      text-decoration: none;
      border-radius: 6px;
      margin-top: 25px;
      margin-bottom: 15px;
      transition: background-color 0.3s ease;
    }

    .cta-button:hover {
      background-color: #e0c81a;
    }

    .pricing-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 30px;
    }

    .pricing-table td, .pricing-table th {
      padding: 15px;
      text-align: left;
      border: 1px solid #ddd;
    }

    .pricing-table th {
      background-color: #0a66c2;
      color: white;
    }

    .pricing-table .highlight-cell {
      font-weight: bold;
      color: #1e7bcc;
    }

    .social-icons {
      margin-top: 20px;
      margin-bottom: 20px;
      text-align: center;
    }

    .social-icons a {
      display: inline-block;
      margin: 0 10px;
      text-decoration: none;
    }

    .social-icons img {
      width: 30px;
      height: 30px;
    }

    .email-footer {
      background-color: #f9f9f9;
      padding: 25px;
      text-align: center;
      font-size: 14px;
      color: #888;
    }

    .unsubscribe {
      font-size: 12px;
      color: #666;
      margin-top: 10px;
    }

    .unsubscribe a {
      color: #0a66c2;
      text-decoration: none;
    }

    /* Responsive Design */
    @media only screen and (max-width: 600px) {
      .email-container {
        width: 100%;
        padding: 15px;
      }

      .email-header h1 {
        font-size: 26px;
      }

      .cta-button {
        width: 100%;
        text-align: center;
      }
    }
  </style>
</head>
<body>
  <div class="email-container">
    <!-- Header Section -->
    <div class="email-header">
      <h1>Get Your Mobile App Developed for Just $1,344 – Limited-Time Offer!</h1>
    </div>

    <!-- Email Body Section -->
    <div class="email-body">
      <p>Hi ${recipient.name},</p>
      <p>Are you looking to build a custom mobile app without breaking the bank? For a limited time, you can get your mobile app developed for just <span class="highlight">$1,344!</span></p>

      <h3>What’s Included?</h3>
      <ul>
        <li>Full mobile app development (iOS & Android)</li>
        <li>Seamless UI/UX design</li>
        <li>End-to-end testing & quality assurance</li>
        <li>Ongoing support & maintenance</li>
      </ul>

      <h3>Recent Projects We’ve Delivered:</h3>
      <ul>
        <li>Court Trax – Real-time offender monitoring</li>
        <li>Yakka – Social networking app</li>
        <li>NorthBin – eCommerce platform</li>
        <li>getDandy – Online reputation management</li>
      </ul>

      <a href="https://codeautomation.ai/case-studies" target="_blank" class="cta-button">See More Projects</a>

      <h3>Special Pricing – Limited Offer</h3>
      <table class="pricing-table">
        <tr>
          <th>Service</th>
          <th>One-Time Cost</th>
          <th>Monthly Cost</th>
        </tr>
        <tr>
          <td>Mobile App Development & Support</td>
          <td class="highlight-cell">$599 (Setup)</td>
          <td class="highlight-cell">$1,344</td>
        </tr>
        <tr>
          <td>Web App Development & Support</td>
          <td class="highlight-cell">—</td>
          <td class="highlight-cell">$799</td>
        </tr>
        <tr>
          <td>UI/UX Design (Web & Mobile)</td>
          <td class="highlight-cell">—</td>
          <td class="highlight-cell">$199</td>
        </tr>
        <tr>
          <td>Testing (Web & Mobile)</td>
          <td class="highlight-cell">—</td>
          <td class="highlight-cell">$150</td>
        </tr>
      </table>

      <p>This pricing is available for a limited time. Secure your app development today!</p>
      <p>I’d love to discuss how we can make your app a reality. Let’s set up a quick call, when would be a good time for you?</p>
      <a href="https://calendly.com/adnanghaffar" target="_blank" class="cta-button">Let’s Get Started</a>
      <p>Looking forward to hearing from you!</p>
    </div>

    <!-- Footer Section -->
    <div class="email-footer">
      <div class="social-icons">
        <a href="https://www.facebook.com/Codeautomationai/" target="_blank">
          <img src="https://codeautomation.ai/facebook.png" alt="Facebook">
        </a>
        <a href="https://www.instagram.com/codeautomation.ai/" target="_blank">
          <img src="https://codeautomation.ai/instagram.png" alt="Instagram">
        </a>
        <a href="https://twitter.com/codeautomationai" target="_blank">
          <img src="https://codeautomation.ai/twitter.png" alt="Twitter">
        </a>
      </div>

      <p class="unsubscribe">If you no longer wish to receive these emails, you can <a href="https://codeautomation.ai/unsubscribe" target="_blank">unsubscribe here</a>.</p>
    </div>
  </div>
</body>
</html>
`,
            })
        );

        // Await sending of all emails
        await Promise.all(emailPromises);

        return NextResponse.json({ message: "Emails sent successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error processing the request:", error);
        return NextResponse.json({ message: "Failed to send emails" }, { status: 500 });
    }
}
