import nodemailer from "nodemailer";
import fetch from "node-fetch";

const CALENDLY_API_KEY = process.env.CALENDLY_API_KEY || "";
const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY || "";
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID || "";

// Define categories for "looking for" field
const predefinedCategories: Record<string, string> = {
  "mobile": "Mobile App Development",
  "android": "Mobile App Development",
  "ios": "Mobile App Development",
  "software": "Software Development",
  "web": "Website Development",
  "ecommerce": "E-commerce Solutions",
  "shopify": "Shopify Development",
  "ai": "AI & Automation",
  "ml": "ML & Automation",
  "marketing": "Digital Marketing",
  "seo": "Search Engine Optimization",
};

// Function to determine subject based on "looking for" input
function determineSubject(looking: string | null): string {
  if (!looking) return "Thank You for Your Inquiry!";

  looking = looking.toLowerCase().trim(); // Normalize input

  // Extract all matching categories
  const matchedCategories = Object.keys(predefinedCategories)
    .filter(key => looking.includes(key))
    .map(key => predefinedCategories[key]);

  // If matches are found, create a custom subject
  if (matchedCategories.length > 0) {
    return `Thank You for Your Inquiry About ${matchedCategories.join(", ")}!`;
  }

  // Fallback if no match is found
  return "Thank You for Your Inquiry!";
}

// Extract matching categories for email header
function getCategoriesHeader(looking: string | null): string {
  if (!looking) return "Thank You for Reaching Out";

  looking = looking.toLowerCase().trim();

  const matchedCategories = Object.keys(predefinedCategories)
    .filter(key => looking.includes(key))
    .map(key => predefinedCategories[key]);

  return matchedCategories.length > 0 ? matchedCategories.join(", ") : "Thank You for Reaching Out";
}
export async function POST(request: Request): Promise<Response> {
  try {
    const completeFormData = await request.formData();
    const name = completeFormData.get("name") as string | null;
    const email = completeFormData.get("email") as string | null;
    const number = completeFormData.get("number") as string | null;
    const looking = completeFormData.get("looking") as string | null;
    const message = completeFormData.get("message") as string | null;
    const pageName = completeFormData.get("pagename") as string | null;

    if (!name || !email || !number || !looking || !message || !pageName) {
      return new Response(JSON.stringify({ error: "Invalid form data" }), { status: 400 });
    }

    // Determine the dynamic subject for the user's email
    const userSubject = determineSubject(looking);

    // Set up Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const teamMailOptions = {
      from: process.env.EMAIL_USER,
      to: ["ayesha@codeautomation.dev"],
      subject: `New Website Inquiry — ${pageName}`,

      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <style>
    body {
      margin: 0;
      padding: 0;
      background: #ffffff;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      color: #111827;
    }

    .wrapper {
      padding: 40px 16px;
    }

    .container {
      max-width: 680px;
      margin: auto;
    }

    .title {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 6px;
      letter-spacing: -0.2px;
    }

    .subtitle {
      font-size: 13px;
      color: #6b7280;
      margin-bottom: 24px;
    }

    .card {
      border: 1px solid #e5e7eb;
      border-radius: 14px;
      padding: 20px;
    }

    .row {
      padding: 10px 0;
      border-bottom: 1px solid #f3f4f6;
    }

    .row:last-child {
      border-bottom: none;
    }

    .label {
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #9ca3af;
      margin-bottom: 4px;
    }

    .value {
      font-size: 15px;
      color: #111827;
      word-break: break-word;
    }

    .message-box {
      margin-top: 10px;
      padding: 14px;
      background: #fafafa;
      border: 1px solid #e5e7eb;
      border-radius: 10px;
      font-size: 14px;
      line-height: 1.6;
      color: #374151;
      white-space: pre-wrap;
    }

    .footer {
      margin-top: 18px;
      font-size: 12px;
      color: #9ca3af;
      text-align: left;
    }

    .tag {
      display: inline-block;
      font-size: 12px;
      padding: 4px 10px;
      border-radius: 999px;
      background: #111827;
      color: #ffffff;
      margin-bottom: 16px;
    }
  </style>
</head>

<body>
  <div class="wrapper">
    <div class="container">

      <div class="tag">New Inquiry</div>

      <div class="title">Website Contact Submission</div>
      <div class="subtitle">Source: ${pageName} Page</div>

      <div class="card">

        <div class="row">
          <div class="label">Name</div>
          <div class="value">${name}</div>
        </div>

        <div class="row">
          <div class="label">Email</div>
          <div class="value">${email}</div>
        </div>

        <div class="row">
          <div class="label">Contact Number</div>
          <div class="value">${number}</div>
        </div>

        <div class="row">
          <div class="label">Inquiry Type</div>
          <div class="value">${looking}</div>
        </div>

        <div class="row">
          <div class="label">Message</div>
          <div class="message-box">${message}</div>
        </div>

      </div>

      <div class="footer">
        Automatically generated from CodeAutomation website form.
      </div>

    </div>
  </div>
</body>
</html>
  `,
    };
    // Email to user
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: determineSubject(looking),
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <style>
    body {
      margin: 0;
      padding: 0;
      background: #ffffff;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      color: #111827;
    }

    .wrapper {
      padding: 50px 16px;
    }

    .container {
      max-width: 600px;
      margin: auto;
    }

    .title {
      font-size: 22px;
      font-weight: 600;
      letter-spacing: -0.2px;
      margin-bottom: 14px;
    }

    .text {
      font-size: 15px;
      line-height: 1.75;
      color: #4b5563;
      margin: 12px 0;
    }

    .box {
      margin: 26px 0;
      padding: 18px 20px;
      border: 1px solid #e5e7eb;
      border-radius: 12px;
      background: #ffffff;
    }

    .box strong {
      color: #111827;
      font-weight: 600;
    }

    .cta {
      margin-top: 28px;
    }

    .btn {
      display: inline-block;
      padding: 12px 18px;
      background: #111827;
      color: #ffffff !important;
      text-decoration: none;
      font-size: 14px;
      font-weight: 500;
      border-radius: 10px;
    }

    .btn:hover {
      background: #000000;
    }

    .divider {
      margin: 32px 0;
      border: none;
      border-top: 1px solid #e5e7eb;
    }

    .footer {
      font-size: 12px;
      color: #9ca3af;
      margin-top: 30px;
    }

    .brand {
      font-weight: 600;
      color: #111827;
    }
  </style>
</head>

<body>
  <div class="wrapper">
    <div class="container">

      <div class="title">
        Hi ${name},
      </div>

      <p class="text">
        Thank you for reaching out. We have successfully received your request and our team is currently reviewing it.
      </p>

      <p class="text">
        We aim to respond within 24 hours. In most cases, you will hear back much sooner depending on the nature of your request.
      </p>

      <div class="box">
        <strong>What happens next</strong><br/><br/>
        Our team will carefully review your submission and get back to you with the next steps, recommendations, or clarifications if needed.
      </div>

      <p class="text">
        If you prefer to move faster, you can schedule a direct call with our team using the link below.
      </p>

      <div class="cta">
        <a class="btn" href="https://calendly.com/adnanghaffar/30min?timezone=America/New_York" target="_blank">
          Schedule a Meeting
        </a>
      </div>

      <hr class="divider"/>

      <p class="text">
        If your request is urgent, simply reply to this email and we will prioritize it accordingly.
      </p>

      <p class="text">
        Regards,<br/>
        <span class="brand">CodeAutomation Team</span>
      </p>

      <div class="footer">
        © 2026 CodeAutomation. All rights reserved.
      </div>

    </div>
  </div>
</body>
</html>
  `,
    };

    // Send emails
    await transporter.sendMail(teamMailOptions);
    await transporter.sendMail(userMailOptions);

    const hasMeeting = await checkMeetingExists(email);

    if (!hasMeeting) {
      const reminderTimestamp = new Date();
      reminderTimestamp.setMinutes(reminderTimestamp.getMinutes() + 5);

      await addEmailToAirtable({
        Name: name,
        Email: email,
        Looking: "Don’t Forget to Schedule Your Meeting!",
        Message: `
          <div style="max-width: 600px; margin: 30px auto; padding: 30px; background-color: #fff; border-radius: 10px; box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);">
            <h1 style="font-size: 32px; color: #1D92FB; margin-bottom: 30px; font-family: 'Poppins', sans-serif; font-weight: 500;">Hi ${name},Let's Connect</h1>
            <p style="font-size: 18px; margin: 15px 0; line-height: 1.6; color: #333; font-family: 'Poppins', sans-serif;">Hi ${name},</p>
            <p style="font-size: 18px; margin: 15px 0; line-height: 1.6; color: #333; font-family: 'Poppins', sans-serif;">We're excited to explore how we can collaborate! Booking a quick call is the best way to align our goals and move forward.</p>
            <p style="font-size: 18px; margin: 15px 0; line-height: 1.6; color: #333; font-family: 'Poppins', sans-serif;">Click the button below to pick a time that works best for you:</p>
            <div style="text-align: center; margin-top: 20px;">
              <a href="https://calendly.com/adnanghaffar/30min?timezone=America/New_York" style="background-color: #f7e022; color: #000; padding: 12px 25px; font-size: 16px; font-weight: 600; text-decoration: none; border-radius: 6px; display: inline-block; transition: background-color 0.3s;">Schedule Your Meeting</a>
            </div>
            <div style="margin-top: 40px; text-align: center; font-size: 14px; color: #777; font-family: 'Poppins', sans-serif;">
              <p style="margin: 5px 0;">We look forward to speaking with you soon!</p>
            </div>
          </div>
        `,
        ReminderTimestamp: reminderTimestamp.toISOString(),
      });
    }

    return new Response(JSON.stringify({ message: "Emails handled successfully" }), { status: 200 });
  } catch (error) {
    console.error("Error in POST handler:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}

async function checkMeetingExists(email: string): Promise<boolean> {
  try {
    const userUri = await getUserId();
    const response = await fetch(`https://api.calendly.com/scheduled_events?invitee_email=${email}&user=${encodeURIComponent(userUri)}`, {
      headers: { Authorization: `Bearer ${CALENDLY_API_KEY}` },
    });
    const data = await response.json();
    return data.collection && data.collection.length > 0;
  } catch (error) {
    console.error("Error checking Calendly events:", error);
    return false;
  }
}

async function addEmailToAirtable(emailData: {
  Name: string;
  Email: string;
  Looking: string;
  Message: string;
  ReminderTimestamp: string;
}) {
  try {
    const response = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/tblrMLGwSsOnZ17kO`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fields: emailData }),
    });

    if (!response.ok) {
      throw new Error(`Airtable error: ${await response.text()}`);
    }
  } catch (error) {
    console.error("Error adding email to Airtable:", error);
    throw error;
  }
}

async function getUserId(): Promise<string> {
  try {
    const response = await fetch("https://api.calendly.com/users/me", {
      headers: { Authorization: `Bearer ${CALENDLY_API_KEY}` },
    });

    if (!response.ok) {
      throw new Error(`Calendly user fetch error: ${await response.text()}`);
    }

    const data = await response.json();
    return data.resource.uri;
  } catch (error) {
    console.error("Error fetching Calendly user ID:", error);
    throw error;
  }
}
