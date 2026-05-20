import nodemailer from "nodemailer";

export async function POST(request: Request): Promise<Response> {
  try {
    const body = await request.json();

    const { name, email, company, phone } = body;

    if (!name || !email || !company) {
      return new Response(
        JSON.stringify({
          error: "Missing required fields",
        }),
        { status: 400 }
      );
    }

    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // =========================
    // EMAIL TO TEAM
    // =========================

    const teamMailOptions = {
      from: `"CodeAutomation" <${process.env.EMAIL_USER}>`,
      to: ["adnan@codeautomation.dev"],
      subject: `New Real Estate Audit Request — ${company}`,
      html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8" />
      </head>
      <body style="font-family: Arial, sans-serif; background:#f9fafb; padding:40px;">
        
        <div style="max-width:600px; margin:auto; background:white; border-radius:16px; padding:32px; border:1px solid #e5e7eb;">
          
          <div style="margin-bottom:24px;">
            <span style="background:#3498db; color:white; padding:6px 12px; border-radius:999px; font-size:12px;">
              Real Estate Audit Lead
            </span>
          </div>

          <h2 style="margin:0 0 24px; color:#111827;">
            New Audit Form Submission
          </h2>

          <div style="margin-bottom:18px;">
            <strong>Name:</strong><br/>
            ${name}
          </div>

          <div style="margin-bottom:18px;">
            <strong>Email:</strong><br/>
            ${email}
          </div>

          <div style="margin-bottom:18px;">
            <strong>Company:</strong><br/>
            ${company}
          </div>

          <div style="margin-bottom:18px;">
            <strong>Phone:</strong><br/>
            ${phone || "Not provided"}
          </div>

          <hr style="border:none; border-top:1px solid #e5e7eb; margin:24px 0;" />

          <p style="font-size:13px; color:#6b7280;">
            Submitted from the Real Estate Tech landing page.
          </p>

        </div>

      </body>
      </html>
      `,
    };

    // =========================
    // EMAIL TO USER
    // =========================

    const userMailOptions = {
      from: `"CodeAutomation" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your Free Automation Audit Request Has Been Received",
      html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8" />
      </head>
      <body style="font-family: Arial, sans-serif; background:#f9fafb; padding:40px;">
        
        <div style="max-width:600px; margin:auto; background:white; border-radius:16px; padding:40px; border:1px solid #e5e7eb;">

          <h1 style="font-size:28px; color:#111827; margin-bottom:20px;">
            Hi ${name},
          </h1>

          <p style="font-size:16px; line-height:1.7; color:#4b5563;">
            Thank you for requesting your free real estate automation audit.
          </p>

          <p style="font-size:16px; line-height:1.7; color:#4b5563;">
            Our team is reviewing your submission and will contact you within 24 hours with the next steps.
          </p>

          <div style="background:#f3f4f6; border-radius:12px; padding:20px; margin:30px 0;">
            <strong style="color:#111827;">
              What you'll receive:
            </strong>

            <ul style="margin-top:12px; color:#4b5563; line-height:1.8;">
              <li>Workflow automation opportunities</li>
              <li>Time-saving recommendations</li>
              <li>ROI improvement suggestions</li>
              <li>A custom automation roadmap</li>
            </ul>
          </div>

          <a
            href="https://calendly.com/adnanghaffar/codeautomation"
            target="_blank"
            style="
              display:inline-block;
              background:#3498db;
              color:white;
              text-decoration:none;
              padding:14px 22px;
              border-radius:10px;
              font-weight:600;
            "
          >
            Schedule a Call
          </a>

          <hr style="border:none; border-top:1px solid #e5e7eb; margin:32px 0;" />

          <p style="font-size:14px; color:#6b7280;">
            CodeAutomation.ai
          </p>

        </div>

      </body>
      </html>
      `,
    };

    // Send emails
    await transporter.sendMail(teamMailOptions);
    await transporter.sendMail(userMailOptions);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Emails sent successfully",
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("API Route Error:", error);

    return new Response(
      JSON.stringify({
        success: false,
        error: "Internal Server Error",
      }),
      { status: 500 }
    );
  }
}