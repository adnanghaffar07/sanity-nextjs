import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { serverClient } from '@/sanity/lib/sanity/serverClient';

type ContactPageRequestBody = {
  name: string;
  email: string;
  phone: string;
  inquiryType: string;
  company: string;
  message: string;
  page_url?: string;
};

export async function POST(request: Request) {
  try {
    const body: ContactPageRequestBody = await request.json();
    const { name, email, phone, inquiryType, company, message, page_url } = body;

    if (!name || !email || !phone || !inquiryType || !company || !message) {
      return NextResponse.json({ error: 'All required fields must be filled.' }, { status: 400 });
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('EMAIL_USER / EMAIL_PASS are not configured');
      return NextResponse.json({ error: 'Email service is not configured.' }, { status: 500 });
    }

    const sanitizedPageUrl = page_url?.trim() || 'https://codeautomation.ai/contact';
    const pageLabel = sanitizedPageUrl.replace(/^https?:\/\//, '');

    await serverClient.create({
      _type: 'contactForm',
      name,
      contact_number: phone,
      email,
      looking: inquiryType,
      message,
      clientType: inquiryType,
      page_name: sanitizedPageUrl,
      submitted_at: new Date().toISOString(),
    });

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"CodeAutomation.ai" <${process.env.EMAIL_USER}>`,
      to: 'adnan@codeautomation.dev',
      subject: `New Contact Page Submission - ${name}`,
      html: `
      <div style="font-family:Arial,Helvetica,sans-serif;color:#111;line-height:1.6;">
        <h2 style="color:#0f172a;">New Contact Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
        <p><strong>Page URL:</strong> <a href="${sanitizedPageUrl}" target="_blank" rel="noreferrer">${pageLabel}</a></p>
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
      </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    try {
      const leadResponse = await fetch(new URL('/api/lead', request.url).toString(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          what_are_you_looking_for: inquiryType,
          inquiry_type: inquiryType,
          page_url: sanitizedPageUrl,
          message: `${message}\n\nCompany: ${company}`,
        }),
      });

      if (!leadResponse.ok) {
        const leadError = await leadResponse.text();
        console.warn('GHL lead submission issue:', leadError);
      }
    } catch (ghlError) {
      console.warn('GHL submission failed:', ghlError);
    }

    return NextResponse.json({ success: true, message: 'Contact submission received.' }, { status: 201 });
  } catch (error) {
    console.error('Contact page submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit contact form. Please try again later.' },
      { status: 500 }
    );
  }
}
