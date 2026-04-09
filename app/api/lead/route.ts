import { NextRequest, NextResponse } from 'next/server';

// Validate required fields
function validateFormData(data: any) {
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
    const body = await req.json();

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

    // Split name into firstName and lastName
    const { firstName, lastName } = splitName(name);

    // Prepare GHL API payload
    const ghlPayload = {
      firstName: firstName,
      lastName: lastName,
      email: email.toLowerCase(),
      phone: phone,
      source: 'website',
      tags: ['consultation-lead'],
      customField: {
        what_are_you_looking_for: what_are_you_looking_for || '',
        message: message || '',
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
    const ghlData = await ghlResponse.json();

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
        { status: ghlResponse.status }
      );
    }

    console.log('Lead successfully created in GHL:', {
      contactId: ghlData.id || ghlData.contact_id,
      email: email,
      name: `${firstName} ${lastName}`,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Lead successfully created',
        contactId: ghlData.id || ghlData.contact_id,
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
