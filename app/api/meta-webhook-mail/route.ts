import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const transporter = nodemailer.createTransport({
      name: "SMTP",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "ayesha@codeautomation.dev",
        pass: "brja ybzn vmbb qbzg",
      },
    });

    const teamEmail = ['ayesha@codeautomation.dev', 'adnan@codeautomation.dev', 'katrina@codeautomation.dev'];
    // const clientEmail = body.email;
    const clientEmail = body.email;
    // Send to internal team
    await transporter.sendMail({
      from: `"Meta Lead Bot" <ayesha@codeautomation.dev>`,
      to: teamEmail,
      subject: '🚨 New Lead Submitted',
      html: `
      <div style="font-family: Arial, sans-serif; background: #f9f9f9; padding: 40px;">
        <table style="max-width: 700px; margin: auto; background: #fff; border-radius: 12px; padding: 30px; box-shadow: 0 2px 12px rgba(0,0,0,0.1);">
          <tr><td colspan="2" style="text-align: center; font-size: 20px; font-weight: bold;">🚀 New Meta Lead Details</td></tr>
          <tr><td><strong>Name:</strong></td><td>${body.name || 'N/A'}</td></tr>
          <tr><td><strong>Email:</strong></td><td>${body.email || 'N/A'}</td></tr>
          <tr><td><strong>Phone Number:</strong></td><td>${body.phoneNumber || 'N/A'}</td></tr>
          <tr><td><strong>Company Name:</strong></td><td>${body.companyName || 'N/A'}</td></tr>
          <tr><td><strong>App Type:</strong></td><td>${body.appType || 'N/A'}</td></tr>
          <tr><td><strong>Estimated Budget:</strong></td><td>${body.estimatedBudget || 'N/A'}</td></tr>
          <tr><td colspan="2" style="padding-top: 20px; text-align: center;">
            <a href="https://codeautomation.sanity.studio/studio/structure/fbMetaLead" style="padding: 10px 20px; background: #1d4ed8; color: #fff; border-radius: 6px; text-decoration: none;">View in Sanity</a>
          </td></tr>
        </table>
      </div>
      `,
    });

    await transporter.sendMail({
      from: `"CodeAutomation" <${process.env.EMAIL_USER}>`,
      to: clientEmail,
      subject: 'Tired of Searching for the Right App Development Team? Guaranteed Quality, Delivered as Promised!',
      html: `
  <div style="font-family: 'Segoe UI', Tahoma, sans-serif; background-color: #f4f4f4; padding: 40px 0;">
    <table width="100%" style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; box-shadow: 0 4px 16px rgba(0,0,0,0.1); overflow: hidden;">
      <!-- Header -->
      <tr>
        <td style="background-color: #1d92fb; padding: 24px 40px; text-align: center;">
          <h1 style="color: #ffffff; font-size: 24px; margin: 0;">Thanks for Connecting with CodeAutomation!</h1>
        </td>
      </tr>

      <!-- Body -->
      <tr>
        <td style="padding: 32px 40px; color: #333;">
          <p style="font-size: 16px; line-height: 1.6;">
            We’re excited to learn more about your goals and how our team at <strong>CodeAutomation.ai</strong> can support your vision. 
          </p>
          <p style="font-size: 16px; line-height: 1.6;">
            Our mission is to help businesses like yours build reliable, scalable, and innovative digital solutions that drive growth and success. 
          </p>
          <p style="font-size: 16px; line-height: 1.6;">
            Let’s schedule a quick chat to discuss your needs and how we can work together to bring your ideas to life.
          </p>

          <!-- Call to Action -->
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://calendly.com/adnanghaffar" style="padding: 14px 28px; background: #1d92fb; color: white; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 16px; display: inline-block;">
              Book a Quick Call
            </a>
          </div>

          <p style="font-size: 14px; color: #555; margin-top: 30px;">
            Have any questions? Just reply to this email — our team is happy to help.
          </p>
          <p style="font-size: 14px; margin-top: 8px;">
            Best regards,<br/>
            <strong>The CodeAutomation Team</strong>
          </p>
        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="background:rgb(223, 223, 223); padding: 20px; text-align: center;">
          <div style="margin-bottom: 10px;">
            <a href="https://www.facebook.com/Codeautomationai/" target="_blank" style="margin: 0 8px;">
              <img src="https://codeautomation.ai/facebook.png" alt="Facebook" width="24" />
            </a>
            <a href="https://www.instagram.com/codeautomation.ai/" target="_blank" style="margin: 0 8px;">
              <img src="https://codeautomation.ai/instagram.png" alt="Instagram" width="24" />
            </a>
            <a href="https://twitter.com/codeautomation" target="_blank" style="margin: 0 8px;">
              <img src="https://codeautomation.ai/twitter.png" alt="Twitter" width="24" />
            </a>
            <a href="https://www.linkedin.com/company/codeautomationai/" target="_blank" style="margin: 0 8px;">
              <img src="https://codeautomation.ai/linkedin.png" alt="LinkedIn" width="24" />
            </a>
          </div>
          <div style="font-size: 12px; color: #333;">
            &copy; ${new Date().getFullYear()} CodeAutomation.ai LLC. All Rights Reserved.<br/>
            <a href="https://codeautomation.ai" style="color: #1d92fb; text-decoration: none;">Visit our website</a>
          </div>
        </td>
      </tr>
    </table>
  </div>
`

    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Webhook handler error:', error);
    return NextResponse.json({ success: false, error: 'Webhook handling failed' }, { status: 500 });
  }
}
