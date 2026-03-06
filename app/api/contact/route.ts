import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, company, phone, industry, tools, challenge } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !company || !industry || !challenge) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email credentials
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Missing email credentials in environment variables');
      return NextResponse.json(
        { error: 'Email service is not properly configured' },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: 'adnan@codeautomation.dev',
      replyTo: email,
      subject: `New Marketing Automation Consultation Request from ${firstName} ${lastName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #020C16 0%, #1d92fb 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #020C16; }
            .value { color: #666; margin-top: 5px; padding: 8px; background: white; border-radius: 5px; }
            .badge { display: inline-block; background: #1d92fb; color: white; padding: 3px 8px; border-radius: 12px; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2 style="margin:0">New Consultation Request</h2>
              <p style="margin:5px 0 0; opacity:0.9">Marketing Automation Audit</p>
            </div>
            
            <div class="content">
              <div class="field">
                <div class="label">👤 Name</div>
                <div class="value">${firstName} ${lastName}</div>
              </div>
              
              <div class="field">
                <div class="label">📧 Email</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              
              <div class="field">
                <div class="label">🏢 Company</div>
                <div class="value">${company}</div>
              </div>
              
              ${phone ? `
              <div class="field">
                <div class="label">📞 Phone</div>
                <div class="value"><a href="tel:${phone}">${phone}</a></div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="label">🏭 Industry</div>
                <div class="value"><span class="badge">${industry}</span></div>
              </div>
              
              ${tools ? `
              <div class="field">
                <div class="label">🔧 Current Tools</div>
                <div class="value">${tools}</div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="label">💬 Marketing Challenge</div>
                <div class="value" style="white-space: pre-line;">${challenge}</div>
              </div>
            </div>
            
            <!-- Auto-reply info -->
            <div style="margin-top: 20px; padding: 15px; background: #f0f7ff; border-left: 4px solid #1d92fb; border-radius: 5px;">
              <p style="margin:0; color:#020C16; font-size: 14px;">
                ⚡ An auto-reply has been sent to ${email} confirming receipt.
                <br><br>
                <strong>Next steps:</strong> A team member will reach out within 24 hours.
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send auto-reply to the user
    const autoReplyOptions = {
      from: `"CodeAutomation.ai" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Thank You for Contacting CodeAutomation.ai',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #020C16 0%, #1d92fb 100%); color: white; padding: 30px; text-align: center; }
            .content { padding: 30px; background: #f9f9f9; }
            .button { display: inline-block; background: #1d92fb; color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; margin-top: 20px; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin:0">Thank You!</h1>
            </div>
            
            <div class="content">
              <p>Hello ${firstName},</p>
              
              <p>Thank you for reaching out to <strong>CodeAutomation.ai</strong>. We've received your consultation request and are excited to learn more about your marketing automation goals.</p>
              
              <p><strong>What happens next?</strong></p>
              
              <ul>
                <li>One of our automation specialists will review your request within <strong>24 hours</strong></li>
                <li>We'll prepare initial thoughts based on your industry and challenges</li>
                <li>You'll receive an email to schedule your free strategy call</li>
              </ul>
              
              <p>In the meantime, feel free to:</p>
              <ul>
                <li>Book a call directly: <a href="https://calendly.com/adnanghaffar/30min">Schedule here</a></li>
                <li>Call us: <a href="tel:+18505584691">+1 850 558 4691</a></li>
                <li>Browse our case studies: <a href="https://codeautomation.ai/case-studies">View success stories</a></li>
              </ul>
              
              <div style="text-align: center;">
                <a href="https://calendly.com/adnanghaffar/30min" class="button">Book Your Strategy Call Now</a>
              </div>
            </div>
            
            <div class="footer">
              <p>© 2024 CodeAutomation.ai. All rights reserved.</p>
              <p>This is an automated response. If you need immediate assistance, please call us directly.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(autoReplyOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
