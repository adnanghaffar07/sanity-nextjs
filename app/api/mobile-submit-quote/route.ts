import { serverClient } from '@/sanity/lib/sanity/serverClient';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, phone, message, source } = await req.json();

    if (!name || !email || !phone || !message || !source) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    // 1. Save to Sanity
    await serverClient.create({
      _type: 'lead',
      name,
      email,
      phone,
      message,
      source,
      submittedAt: new Date().toISOString(),
    });

    // 2. Send email to team
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
         user: process.env.EMAIL_USER,
         pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"CodeAutomation.ai LLC" <${process.env.EMAIL_USER}>`,
      to: "adnan@codeautomation.dev",
      subject: 'New Quote Request',
      html: `
        <h3>New Quote Request via ${source}</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Error submitting quote:', err);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
