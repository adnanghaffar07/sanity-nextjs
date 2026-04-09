import { NextRequest, NextResponse } from 'next/server';

type LeadRequestBody = {
  name?: string;
  phone?: string;
  email?: string;
  what_are_you_looking_for?: string;
  message?: string;
};

// Validate required fields
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

// Simple email validation
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Split name into firstName and lastName
function splitName(fullName: string): { firstName: string; lastName: string } {
  const trimmedName = fullName.trim();
  const parts = trimmedName.split(/\s+/);

  if (parts.length === 0) {
    return { firstName: '', lastName: '' };
  }

  if (parts.length === 1) {
    return { firstName: parts[0], lastName: '' };
  }

  // First part is firstName, rest is lastName
  return {
    firstName: parts[0],
    lastName: parts.slice(1).join(' '),
  };
}

function normalizePhone(phone: string): string {
  const trimmedPhone = phone.trim();
  if (!trimmedPhone) return '';
  return trimmedPhone.startsWith('+') ? trimmedPhone : `+${trimmedPhone}`;
}

export async function POST(req: NextRequest) {
  try {
    // Verify API key exists
    if (!process.env.GHL_API_KEY) {
      console.error('GHL_API_KEY environment variable is not set');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Parse request body
    let body: LeadRequestBody;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { error: 'Invalid JSON body' },
        { status: 400 }
      );
    }

    // Extract form fields
    const { name, phone, email, what_are_you_looking_for, message } = body;

    // Validate form data
    const validationErrors = validateFormData({ name, email, phone });
    if (validationErrors.length > 0) {
      console.warn('Validation errors:', validationErrors);
      return NextResponse.json(
        { error: 'Validation failed', details: validationErrors },
        { status: 400 }
      );
    }

    const safeName = (name ?? '').trim();
    const safeEmail = (email ?? '').trim().toLowerCase();
    const safePhone = (phone ?? '').trim();

    // Split name into firstName and lastName
    const { firstName, lastName } = splitName(safeName);
    const normalizedPhone = normalizePhone(safePhone);

    // Prepare GHL API payload
    const ghlPayload = {
      firstName: firstName,
      lastName: lastName,
      email: safeEmail,
      phone: normalizedPhone,
      source: 'website',
      tags: ['website lead'],
      customField: {
        what_are_you_looking_for: what_are_you_looking_for?.trim() || '',
        message: message?.trim() || '',
      },
    };

    console.log('Sending lead to GHL:', {
      firstName,
      lastName,
      email: ghlPayload.email,
      phone: ghlPayload.phone,
      source: ghlPayload.source,
      tags: ghlPayload.tags,
    });

    // Send to GHL API
    const ghlResponse = await fetch(
      'https://rest.gohighlevel.com/v1/contacts/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.GHL_API_KEY}`,
        },
        body: JSON.stringify(ghlPayload),
      }
    );

    // Handle GHL API response
    let ghlData: any = null;
    try {
      ghlData = await ghlResponse.json();
    } catch {
      ghlData = { message: 'Unable to parse GHL response' };
    }

    if (!ghlResponse.ok) {
      console.error('GHL API Error:', {
        status: ghlResponse.status,
        statusText: ghlResponse.statusText,
        error: ghlData,
      });

      return NextResponse.json(
        {
          error: 'Failed to create contact in GHL',
          details: ghlData.message || ghlData.error || 'Unknown error',
        },
        { status: 502 }
      );
    }

    console.log('Lead successfully created in GHL:', {
      contactId: ghlData?.id || ghlData?.contact_id,
      email: safeEmail,
      name: `${firstName} ${lastName}`,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Lead successfully created',
        contactId: ghlData?.id || ghlData?.contact_id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('API Error:', error instanceof Error ? error.message : error);

    return NextResponse.json(
      {
        error: 'Internal server error',
        message:
          error instanceof Error ? error.message : 'An unexpected error occurred',
      },
      { status: 500 }
    );
  }
}
