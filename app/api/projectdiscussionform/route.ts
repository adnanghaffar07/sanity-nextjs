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

    // Email to team
    const teamMailOptions = {
      from: process.env.EMAIL_USER,
      to: ["adnan@codeautomation.dev", "ayesha@codeautomation.dev"],
      subject: `CA Website Contact Form - ${pageName} Page`,
      html: `
        <html>
          <body style="font-family: Arial, sans-serif; background-color: #f4f4f9; color: #333;">
            <div style="max-width: 600px; margin: 30px auto; padding: 20px; background-color: #fff; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
              <h1 style="font-size: 28px; color: #4CAF50; text-align: center;">Project Discussion Form</h1>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Contact Number:</strong> ${number}</p>
              <p><strong>Looking For:</strong> ${looking}</p>
              <p><strong>Message:</strong> ${message}</p>
              <p style="font-size: 14px; color: #777;">Thank you for reaching out!</p>
            </div>
          </body>
        </html>
      `,
    };

    // Email to user
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: determineSubject(looking), // Dynamic subject based on multiple categories
      html: `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <style>
          body { font-family: Arial, sans-serif; background-color: #f9f9f9; margin: 0; padding: 0; }
          .email-container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); overflow: hidden; }
          .header { background-color: #007bff; font-size: 24px; padding: 18px; color: #ffffff; text-align: center; }
          .header h1 { margin: 0; font-size: 24px; }
          .content { padding: 20px; color: #333333; line-height: 1.6; }
          .cta { text-align: center; margin: 20px 0; }
          .cta a { text-decoration: none; padding: 10px 20px; background-color: #007bff; color: #ffffff; border-radius: 5px; font-size: 16px; }
          .cta a:hover { background-color: #0056b3; }
          .footer { background-color: #f1f1f1; text-align: center; padding: 10px; font-size: 12px; color: #666666; }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            ${getCategoriesHeader(looking)}
          </div>
          <div class="content">
            <h2>Dear ${name},</h2>
            <p>Your message is important to us, and our team will review it promptly. We’ll get back to you within 24 hours.</p>
            <p>In the meantime, feel free to explore our website or schedule a meeting with CodeAutomation at your convenience.</p>
            <div class="cta">
              <a href="https://calendly.com/adnanghaffar/30min?timezone=America/New_York" target="_blank">Schedule a Meeting</a>
            </div>
            <p>If you have any further questions or concerns, don’t hesitate to contact us via email or phone. We’re here to help!</p>
          </div>
          <div class="footer">© 2025 CodeAutomation. All Rights Reserved.</div>
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
