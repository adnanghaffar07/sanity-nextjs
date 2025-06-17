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

    // Send to internal team
    await transporter.sendMail({
      from: `"Meta Lead Bot" <${process.env.EMAIL_USER}>`,
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

    // Send Thank You to client
    // await transporter.sendMail({
    //   from: `"CodeAutomation" <${process.env.EMAIL_USER}>`,
    //   to: clientEmail,
    //   subject: 'Thank You for Contacting CodeAutomation!',
    //   html: `
    //     <div>
    //       <h2>Thanks ${body.name || ''}!</h2>
    //       <p>We've received your request. We'll be in touch soon.</p>
    //       <a href="https://calendly.com/adnanghaffar">📅 Book a Meeting</a>
    //     </div>
    //   `,
    // });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Webhook handler error:', error);
    return NextResponse.json({ success: false, error: 'Webhook handling failed' }, { status: 500 });
  }
}
