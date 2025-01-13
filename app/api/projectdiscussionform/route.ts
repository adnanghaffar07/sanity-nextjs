import nodemailer from "nodemailer";
import fetch from "node-fetch";

const CALENDLY_API_KEY = process.env.CALENDLY_API_KEY;
const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
const AIRTABLE_TABLE_NAME = "CA Booking Reminder"; // Replace with your table name

export async function POST(request: any): Promise<any> {
  console.log("POST handler triggered.");
  try {
    const completeFormData = await request.formData();
    console.log("Form data received:", completeFormData);

    const name = completeFormData.get("name") as string;
    const email = completeFormData.get("email") as string;
    const number = completeFormData.get("number") as string;
    const looking = completeFormData.get("looking") as string;
    const message = completeFormData.get("message") as string;
    const pageName = completeFormData.get("pagename") as string;

    console.log("Parsed form data:", { name, email, number, looking, message, pageName });

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "mailto:adnan@codeautomation.dev",
        pass: "hmwk rlwe ylfv jakg",  // Replace with environment variables in production
      },
    });

    // Email for the team
    const mailOptions = {
      from: "mailto:adnan@codeautomation.dev",
      to: ["mailto:ayesha@codeautomation.dev"],
      subject: `CA Website Contact form - ${pageName} page`,
      html: `<!DOCTYPE html>
        <html lang="en">
          <body>
            <h1>Project Discussion Form</h1>
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Contact Number: ${number}</p>
            <p>Looking For: ${looking}</p>
            <p>Message: ${message}</p>
          </body>
        </html>`,
    };

    const teamResponse = await transporter.sendMail(mailOptions);
    console.log("Team email sent successfully:", teamResponse);

    const hasMeeting = await checkMeetingExists(email);

    if (!hasMeeting) {
      console.log("No meeting found for this email. Proceeding to add reminder email to Airtable...");

      // Add reminder to Airtable with a timestamp for 5 minutes later
      const reminderTimestamp = new Date();
      reminderTimestamp.setMinutes(reminderTimestamp.getMinutes() + 5);

      await addEmailToAirtable({
        Name: name,
        Email: email,
        Subject: "Don’t Forget to Schedule Your Meeting!",
        Body: `
          <!DOCTYPE html>
          <html lang="en">
            <body>
              <h1>Let’s Connect, ${name}!</h1>
              <p>We noticed you haven’t scheduled a meeting with us yet. Let’s discuss your project and bring your vision to life!</p>
              <a href="https://calendly.com/adnanghaffar/30min?timezone=America/New_York">Schedule a Meeting Now</a>
            </body>
          </html>`,
        ReminderTimestamp: reminderTimestamp.toISOString(), // Store the timestamp
      });
      console.log("Reminder email added to Airtable.");

    } else {
      console.log("Meeting already exists for this email. No action needed.");
    }

    return Response.json({ message: "Emails handled successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error handling POST request:", error);
    return Response.json({ message: "Error handling emails" }, { status: 500 });
  }
}

// Function to check if the email exists in any scheduled event
async function checkMeetingExists(email: string): Promise<boolean> {
  console.log("Checking meeting existence for email:", email);
  try {
    const userUri = await getUserId();
    console.log("Calendly user URI fetched:", userUri);

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
    console.log("Calendly meeting check response:", data);

    return data.collection && data.collection.length > 0;
  } catch (error) {
    console.error("Error fetching Calendly data:", error);
    return false;
  }
}

// Function to add email to Airtable
async function addEmailToAirtable(emailData: {
  Name: string;
  Email: string;
  Subject: string;
  Body: string;
  ReminderTimestamp: string; // Store reminder timestamp
}) {
  console.log("Adding email to Airtable:", emailData);

  const response = await fetch(
    `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/tblrMLGwSsOnZ17kO`, // Use table ID
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: {
          Name: emailData.Name,
          Email: emailData.Email,
          Looking: emailData.Subject,
          Message: emailData.Body,
          ReminderTimestamp: emailData.ReminderTimestamp, // Ensure this field is correctly set
        },
      }),
    }
  );

  console.log("Airtable response status:", response.status);
  const responseBody = await response.text();
  console.log("Airtable response body:", responseBody);

  if (!response.ok) {
    console.error("Failed to add email to Airtable:", responseBody);
    throw new Error(`Failed to add email to Airtable: ${responseBody}`);
  }

  const data = JSON.parse(responseBody);
  console.log("Airtable API response:", data);
}

// Function to get Calendly user ID
async function getUserId(): Promise<string> {
  console.log("Fetching Calendly user ID...");
  try {
    const response = await fetch("https://api.calendly.com/users/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${CALENDLY_API_KEY}`,
      },
    });

    console.log("Calendly user ID response status:", response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Failed to fetch user ID:", errorText);
      throw new Error(`Failed to fetch user ID: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Calendly user data:", data);

    return data.resource.uri;
  } catch (error) {
    console.error("Error in getUserId:", error);
    throw new Error("Unable to retrieve user ID from Calendly");
  }
}












