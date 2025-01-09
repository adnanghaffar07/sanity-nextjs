import nodemailer from "nodemailer";
import fetch from "node-fetch";
import sgMail from '@sendgrid/mail';  // Import SendGrid

const CALENDLY_API_KEY = process.env.CALENDLY_API_KEY;
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY  || "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";  // Add SendGrid API key to environment variables

sgMail.setApiKey(SENDGRID_API_KEY);  // Set SendGrid API Key

export async function POST(request: any): Promise<any> {
  const completeFormData = await request.formData();

  const name = completeFormData.get("name") as string;
  const email = completeFormData.get("email") as string;
  const number = completeFormData.get("number") as string;
  const looking = completeFormData.get("looking") as string;
  const message = completeFormData.get("message") as string;
  const pageName = completeFormData.get("pagename") as string;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "adnan@codeautomation.dev",
      pass: "hmwk rlwe ylfv jakg",  // Replace with environment variables in production
    },
  });

  // Email for the team
  const mailOptions = {
    from: "adnan@codeautomation.dev",
    to: "ayesha@codeautomation.dev",
    subject: `CA Website Contact form - ${pageName} page`,
    html: `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <style>
            body { font-family: Arial, sans-serif; background-color: #f9f9f9; margin: 0; padding: 0; }
            .email-container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); overflow: hidden; padding: 20px; }
            .header { background-color: #007bff; color: #ffffff; padding: 15px; text-align: center; border-radius: 8px 8px 0 0; }
            .header h2 { margin: 0; font-size: 20px; }
            .content { padding: 20px; color: #333333; line-height: 1.6; }
            .data-table { width: 100%; border-collapse: collapse; margin: 20px 0; }
            .data-table th, .data-table td { border: 1px solid #ddd; padding: 12px; text-align: left; }
            .data-table th { background-color: rgb(154, 220, 231); color: #333; width: 30%; font-weight: bold; }
            .data-table td { width: 70%; color: #555; }
            .footer { background-color: #f1f1f1; text-align: center; padding: 10px; font-size: 12px; color: #666666; border-radius: 0 0 8px 8px; }
          </style>
        </head>
        <body>
          <div class="email-container">
            <div class="header">
              <h2>Project Discussion Form</h2>
            </div>
            <div class="content">
              <p>Here are the details submitted:</p>
              <table class="data-table">
                <tr><th>Name</th><td>${name}</td></tr>
                <tr><th>Email</th><td>${email}</td></tr>
                <tr><th>Contact Number</th><td>${number}</td></tr>
                <tr><th>Looking For</th><td>${looking}</td></tr>
                <tr><th>Message</th><td>${message}</td></tr>
              </table>
              <p>Thank you for reaching out! If you have any questions or require further assistance, feel free to contact us.</p>
            </div>
            <div class="footer">© 2024 CodeAutomation. All Rights Reserved.</div>
          </div>
        </body>
      </html>
    `,
  };

  // Email confirmation to the user
  const immediateMailOptions = {
    from: "adnan@codeautomation.dev",
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
            <div class="footer">© 2024 CodeAutomation. All Rights Reserved.</div>
          </div>
        </body>
      </html>
    `,
  };

  try {
    console.log("Sending email to the team...");
    const teamResponse = await transporter.sendMail(mailOptions);
    console.log("Team email response:", teamResponse);

    console.log("Sending confirmation email to the user...");
    const userResponse = await transporter.sendMail(immediateMailOptions);
    console.log("User email response:", userResponse);

    // Function to check if the email exists in any scheduled event
    const checkMeetingExists = async (email: string): Promise<boolean> => {
      try {
        const userUri = await getUserId(); // Retrieve the user URI dynamically
        const response = await fetch(
          `https://api.calendly.com/scheduled_events?invitee_email=${email}&user=${encodeURIComponent(userUri)}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${CALENDLY_API_KEY}`,
            },
          }
        );
        const data = await response.json();
        // console.log("Calendly API Response:", data);
        return data.collection && data.collection.length > 0;
      } catch (error) {
        console.error("Error fetching Calendly data:", error);
        return false;
      }
    };

    const hasMeeting = await checkMeetingExists(email);

    if (!hasMeeting) {
      console.log("No meeting found for this email. Setting a reminder email...");

      // Create and send the reminder email after 5 minutes using SendGrid
      setTimeout(async () => {
        try {
        const reminderMailOptions = {
          to: email,
          from: "adnan@codeautomation.dev",
          subject: "Don’t Forget to Schedule Your Meeting!",
          html: `
            <!DOCTYPE html>
            <html lang="en">
              <head>
                <style>
                  body { font-family: Arial, sans-serif; background-color: #f9f9f9; margin: 0; padding: 0; }
                  .email-container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); overflow: hidden; padding: 20px; text-align: center; }
                  .header { background-color: #007bff; color: #ffffff; padding: 20px; border-radius: 8px 8px 0 0; }
                  .header h2 { margin: 0; font-size: 24px; }
                  .content { padding: 20px; color: #333333; line-height: 1.6; }
                  .cta-button { display: inline-block; margin-top: 20px; padding: 15px 25px; background-color: #28a745; color: #ffffff; text-decoration: none; font-size: 18px; font-weight: bold; border-radius: 5px; }
                  .cta-button:hover { background-color: #218838; }
                  .footer { background-color: #f1f1f1; text-align: center; padding: 10px; font-size: 12px; color: #666666; border-radius: 0 0 8px 8px; margin-top: 20px; }
                </style>
              </head>
              <body>
                <div class="email-container">
                  <div class="header"><h2>Let’s Connect, ${name}!</h2></div>
                  <div class="content">
                    <p>We noticed you haven’t scheduled a meeting with us yet. Let’s discuss your project and bring your vision to life!</p>
                    <p>Click the button below to schedule a time that works for you:</p>
                    <a href="https://calendly.com/adnanghaffar/30min?timezone=America/New_York" class="cta-button">Schedule a Meeting Now</a>
                  </div>
                  <div class="footer">
                    Need help or have questions? Contact us anytime at <a href="mailto:adnan@codeautomation.dev">adnan@codeautomation.dev</a>.
                  </div>
                </div>
              </body>
            </html>
          `,
        };

        await sgMail.send(reminderMailOptions);
        console.log("Reminder email sent to the user after 5 minutes.");
      } catch (error:any) {
        console.error("Error sending emails:", error);
        if (error.response) {
          console.error("SendGrid error response:", error.response.body);
        }
        return Response.json({ message: "Error in sending emails" }, { status: 500 });
      }
    }, 100000); // 5 minutes in milliseconds
      console.log("Meeting found for this email. No reminder needed.");
    }

    return Response.json({ message: "Emails sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending emails:", error);
    return Response.json({ message: "Error in sending emails" }, { status: 500 });
  }
}

// Implement the getUserId function
async function getUserId(): Promise<string> {
  try {
    const response = await fetch("https://api.calendly.com/users/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${CALENDLY_API_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch user ID: ${response.statusText}`);
    }

    const data = await response.json();
    return data.resource.uri; // Example: "https://api.calendly.com/users/USER_ID"
  } catch (error) {
    console.error("Error in getUserId:", error);
    throw new Error("Unable to retrieve user ID from Calendly");
  }
}