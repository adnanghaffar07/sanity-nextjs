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
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const teamEmail = ['adnan@codeautomation.dev', 'katrina@codeautomation.dev'];
    // const clientEmail = body.email;
    const clientEmail = body.email;
    // Send to internal team
    await transporter.sendMail({
      from: `"Meta Lead Bot" <${process.env.EMAIL_USER}>`,
      to: "ayesha@codeautomation.dev",
      subject: '🚨 New Lead Submitted',
      html: `
      <div style="font-family: Arial, sans-serif; background: #f9f9f9; padding: 40px;">
        <table style="max-width: 700px; margin: auto; background: #fff; border-radius: 12px; padding: 30px; box-shadow: 0 2px 12px rgba(0,0,0,0.1);">
          <tr><td colspan="2" style="text-align: center; font-size: 20px; font-weight: bold;">🚀 New Meta Lead Details</td></tr>
          <tr><td><strong>Name:</strong></td><td>${body.name || 'N/A'}</td></tr>
          <tr><td><strong>Email:</strong></td><td>${body.email || 'N/A'}</td></tr>
          <tr><td><strong>Phone Number:</strong></td><td>${body.phoneNumber || 'N/A'}</td></tr>
          <tr><td><strong>Company Name:</strong></td><td>${body.companyName || 'N/A'}</td></tr>
          <tr><td><strong>Work:</strong></td><td>${body.work || 'N/A'}</td></tr>
          <tr><td><strong>Campaign Name:</strong></td><td>${body.campaignName || 'N/A'}</td></tr>
          <tr><td><strong>Creation Date:</strong></td><td>${body.creationDate || 'N/A'}</td></tr>
          <tr><td><strong>App Type:</strong></td><td>${body.appType || 'N/A'}</td></tr>
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
          <h1 style="color: #ffffff; font-size: 24px; margin: 0;">Let’s Build Your Dream App Together!</h1>
        </td>
      </tr>

      <!-- Body -->
      <tr>
        <td style="padding: 32px 40px; color: #333;">
          <p style="font-size: 16px; line-height: 1.6;">
            Thanks for submitting your details through our Meta campaign! You've shown interest in <strong>CodeAutomation.ai’s</strong> mobile app development services, and we’re excited to help bring your ideas to life.
          </p>
          <p style="font-size: 16px; line-height: 1.6;">
            We’re ready to discuss your vision and how we can create a high-quality, scalable mobile app that aligns with your business needs.
          </p>
          <p style="font-size: 16px; line-height: 1.6;">
            At CodeAutomation.ai, we deliver fast, reliable, and scalable mobile apps using technologies like <strong>React Native</strong>, <strong>Flutter</strong>, and <strong>AWS</strong>. We've built successful platforms such as <em>Apollo (Sports)</em>, <em>Yakka (Social)</em>, and <em>Impakt (Fitness)</em> — all engineered for growth.
          </p>
          <p style="font-size: 16px; line-height: 1.6;">
            Ready to turn your app vision into reality? Let’s discuss how we can build an app that’s fast, scalable, and tailored to your business goals.
          </p>

          <!-- Call to Action -->
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://cal.com/adnan-ghaffar/30min" style="padding: 14px 28px; background: #1d92fb; color: white; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 16px; display: inline-block;">
              Book a Quick Call
            </a>
          </div>

          <p style="font-size: 14px; color: #555; margin-top: 30px;">
            Have questions? Just reply to this email — we’re happy to help.
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
  `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Webhook handler error:', error);
    return NextResponse.json({ success: false, error: 'Webhook handling failed' }, { status: 500 });
  }
}
