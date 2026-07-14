import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { isLikelyValidGhlPhone, normalizePhoneForGhl } from '@/lib/normalizePhoneForGhl';
import { serverClient } from '@/sanity/lib/sanity/serverClient';

type LeadRequestBody = {
  name?: string;
  phone?: string;
  email?: string;
  what_are_you_looking_for?: string;
  inquiry_type?: string;
  page_url?: string;
  message?: string;
};

function validateFormData(data: LeadRequestBody) {
  const errors: string[] = [];

  if (!data.name || data.name.trim() === '') {
    errors.push('Name is required');
  }

  if (!data.email || data.email.trim() === '') {
    errors.push('Email is required');
  } else if (!isValidEmail(data.email)) {
    errors.push('Valid email is required');
  }

  if (!data.phone || data.phone.trim() === '') {
    errors.push('Phone is required');
  }

  return errors;
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function splitName(fullName: string): { firstName: string; lastName: string } {
  const trimmedName = fullName.trim();
  const parts = trimmedName.split(/\s+/).filter(Boolean);

  if (parts.length === 0) {
    return { firstName: '', lastName: '' };
  }

  if (parts.length === 1) {
    return { firstName: parts[0], lastName: '' };
  }

  return {
    firstName: parts[0],
    lastName: parts.slice(1).join(' '),
  };
}

function inferClientType(lookingFor: string, message: string): string {
  const combined = `${lookingFor} ${message}`.toLowerCase();

  if (combined.includes('mobile') || combined.includes('app')) return 'app';
  if (combined.includes('shopify')) return 'shopify';
  if (combined.includes('ecommerce') || combined.includes('commerce')) return 'ecommerce';
  if (combined.includes('seo')) return 'seo';
  if (combined.includes('marketing') || combined.includes('automation')) return 'marketing';
  if (combined.includes('ai')) return 'ai';
  if (combined.includes('design') || combined.includes('branding')) return 'design';
  if (combined.includes('software') || combined.includes('web')) return 'web';

  return 'other';
}

export async function POST(req: Request) {
  try {
    let body: LeadRequestBody;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { error: 'Invalid JSON body' },
        { status: 400 }
      );
    }

    const { name, phone, email, what_are_you_looking_for, inquiry_type, page_url, message } = body;
    const validationErrors = validateFormData({ name, email, phone });

    if (validationErrors.length > 0) {
      return NextResponse.json(
        { error: 'Validation failed', details: validationErrors },
        { status: 400 }
      );
    }

    const safeName = (name ?? '').trim();
    const safeEmail = (email ?? '').trim().toLowerCase();
    const safePhone = (phone ?? '').trim();
    const safeInquiryType = (inquiry_type || what_are_you_looking_for || 'General inquiry').trim();
    const safePageUrl = (page_url || '').trim() || 'https://codeautomation.ai';
    const safeMessage = (message || '').trim();
    const { firstName, lastName } = splitName(safeName);
    const normalizedPhone = normalizePhoneForGhl(safePhone);

    const ghlPayload: Record<string, unknown> = {
      firstName,
      lastName,
      email: safeEmail,
      source: 'website',
      tags: ['website lead'],
      customField: {
        what_are_you_looking_for: safeInquiryType,
        page_url: safePageUrl,
        inquiry_type: safeInquiryType,
        message: safeMessage,
      },
    };

    if (isLikelyValidGhlPhone(normalizedPhone)) {
      ghlPayload.phone = normalizedPhone;
    } else {
      ghlPayload.customField = {
        ...(ghlPayload.customField as Record<string, string>),
        phone_raw: safePhone,
      };
    }

    let sanitySaved = false;
    try {
      await serverClient.create({
        _type: 'contactForm',
        name: safeName,
        contact_number: safePhone,
        email: safeEmail,
        looking: safeInquiryType,
        message: safeMessage || `Lead from ${safePageUrl}`,
        clientType: inferClientType(safeInquiryType, safeMessage),
        page_name: safePageUrl,
        submitted_at: new Date().toISOString(),
      });
      sanitySaved = true;
    } catch (sanityError) {
      console.error('Sanity lead save failed:', sanityError);
    }

    let emailSent = false;
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
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
          from: `"CodeAutomation.ai" <${process.env.EMAIL_USER}>`,
          to: 'adnan@codeautomation.dev',
          subject: `New website lead from ${safeName}`,
          html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
              <h2 style="margin-bottom: 8px;">New Lead Submitted</h2>
              <p><strong>Name:</strong> ${safeName}</p>
              <p><strong>Email:</strong> ${safeEmail}</p>
              <p><strong>Phone:</strong> ${safePhone}</p>
              <p><strong>Inquiry:</strong> ${safeInquiryType}</p>
              <p><strong>Page:</strong> ${safePageUrl}</p>
              <p><strong>Message:</strong><br/>${safeMessage || 'No message provided'}</p>
            </div>
          `,
        });

        emailSent = true;
      } catch (emailError) {
        console.error('Email lead delivery failed:', emailError);
      }
    } else {
      console.warn('Email credentials are not configured for lead delivery.');
    }

    let ghlSubmitted = false;
    let ghlData: Record<string, unknown> | null = null;
    if (process.env.GHL_API_KEY) {
      try {
        const ghlResponse = await fetch('https://rest.gohighlevel.com/v1/contacts/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.GHL_API_KEY}`,
          },
          body: JSON.stringify(ghlPayload),
        });

        try {
          ghlData = await ghlResponse.json();
        } catch {
          ghlData = { message: 'Unable to parse GHL response' };
        }

        if (ghlResponse.ok) {
          ghlSubmitted = true;
        } else {
          console.error('GHL API Error:', {
            status: ghlResponse.status,
            statusText: ghlResponse.statusText,
            error: ghlData,
          });
        }
      } catch (ghlError) {
        console.error('GHL lead submission failed:', ghlError);
      }
    } else {
      console.warn('GHL_API_KEY is not configured.');
    }

    if (!sanitySaved && !emailSent && !ghlSubmitted) {
      return NextResponse.json(
        { error: 'Unable to process lead submission' },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Lead processed successfully',
        contactId: (ghlData as { id?: string; contact_id?: string } | null)?.id || (ghlData as { id?: string; contact_id?: string } | null)?.contact_id,
        delivered: {
          sanity: sanitySaved,
          email: emailSent,
          ghl: ghlSubmitted,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Lead API error:', error instanceof Error ? error.message : error);

    return NextResponse.json(
      {
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'An unexpected error occurred',
      },
      { status: 500 }
    );
  }
}
