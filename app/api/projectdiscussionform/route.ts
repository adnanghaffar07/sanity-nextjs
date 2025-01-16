import nodemailer from "nodemailer";
import fetch from "node-fetch";

const CALENDLY_API_KEY = process.env.CALENDLY_API_KEY || "";
const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY || "";
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID || "";

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

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER, // Set in environment variables
        pass: process.env.EMAIL_PASS, // Set in environment variables
      },
    });

    const teamMailOptions = {
      from: process.env.EMAIL_USER,
      to:  ["adnan@codeautomation.dev", "liza@codeautomation.dev", "josh.atkins@codeautomation.dev", "huda@codeautomation.dev"],
      subject: `CA Website Contact Form - ${pageName} Page`,
      html: `
        <html>
          <body style="font-family: Arial, sans-serif; background-color: #f4f4f9; color: #333; margin: 0; padding: 0;">
            <div style="max-width: 600px; margin: 30px auto; padding: 20px; background-color: #fff; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
              <h1 style="font-size: 28px; color: #4CAF50; text-align: center; margin-bottom: 20px;">Project Discussion Form</h1>
              <p style="font-size: 16px; margin: 10px 0;"><strong>Name:</strong> ${name}</p>
              <p style="font-size: 16px; margin: 10px 0;"><strong>Email:</strong> ${email}</p>
              <p style="font-size: 16px; margin: 10px 0;"><strong>Contact Number:</strong> ${number}</p>
              <p style="font-size: 16px; margin: 10px 0;"><strong>Looking For:</strong> ${looking}</p>
              <p style="font-size: 16px; margin: 10px 0;"><strong>Message:</strong> ${message}</p>
              <div style="margin-top: 20px; text-align: center;">
                <p style="font-size: 14px; color: #777;">Thank you for reaching out!</p>
              </div>
            </div>
          </body>
        </html>
      `
    };
    
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for reaching out!",
      html: `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <style>
              body { font-family: Arial, sans-serif; background-color: #f9f9f9; margin: 0; padding: 0; }
              .email-container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); overflow: hidden; }
              .header { background-color: #007bff; padding: 20px; color: #ffffff; text-align: center; }
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
                <h1>Thank You for Reaching Out!</h1>
              </div>
              <div class="content">
                <h2>Dear ${name},</h2>
                <p>We appreciate you taking the time to contact us. Your message is important to us, and our team will review it shortly.</p>
                <p>Meanwhile, feel free to explore our website or schedule a call with us directly. We look forward to connecting with you soon.</p>
                <div class="cta">
                  <a href="https://calendly.com/adnanghaffar/30min?timezone=America/New_York" target="_blank">Schedule a Call</a>
                </div>
                <p>If you have any additional questions or concerns, don’t hesitate to reach out via email or phone.</p>
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
          <div style="max-width: 600px; margin: 30px auto; padding: 20px; background-color: #fff; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
            <h1 style="font-size: 28px; color: #FF9800; text-align: center; margin-bottom: 20px;">Reminder: Schedule Your Meeting, ${name}!</h1>
            <p style="font-size: 18px; margin: 15px 0; line-height: 1.6;">Hi ${name},</p>
            <p style="font-size: 18px; margin: 15px 0; line-height: 1.6;">We noticed you haven’t scheduled a meeting with us yet. We want to make sure we connect at a time that works best for you!</p>
            <p style="font-size: 18px; margin: 15px 0; line-height: 1.6;">Please <a href="https://calendly.com/adnanghaffar/30min?timezone=America/New_York" style="color: #FF9800; text-decoration: none; font-weight: bold;">click here</a> to book your time with us.</p>
            <div style="margin-top: 30px; text-align: center;">
              <p style="font-size: 14px; color: #777;">We look forward to speaking with you soon!</p>
              <p style="font-size: 14px; color: #777;">Best regards,</p>
              <p style="font-size: 14px; color: #777;">The CA Team</p>
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
