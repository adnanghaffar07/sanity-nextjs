// app/api/webhook/route.ts
import { client } from '@/sanity/lib/client';
import { NextResponse } from 'next/server';

const clientTypeMap: Record<string, string> = {
  mobile: "app",
  android: "app",
  ios: "app",
  software: "software",
  web: "web",
  ecommerce: "ecommerce",
  shopify: "shopify",
  ai: "ai",
  ml: "ml",
  marketing: "marketing",
  seo: "seo",
  design: "design",
  logo: "design",
  branding: "design",
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const payload = body.payload;

    const phoneNumber =
      payload?.responses?.phoneNumber?.value ||
      payload?.userFieldsResponses?.phoneNumber?.value;

    const bookingUid = payload?.uid;

    if (!phoneNumber) {
      return NextResponse.json(
        { status: 'No phone number provided', body },
        { status: 400 }
      );
    }

    const isDisallowed =
      phoneNumber.startsWith('+92') || phoneNumber.startsWith('+91');

    if (isDisallowed) {
      if (!bookingUid) {
        return NextResponse.json(
          {
            status: 'Phone number disallowed but booking ID not found',
            phoneNumber,
          },
          { status: 400 }
        );
      }

      const cancelResponse = await fetch(
        `https://api.cal.com/v2/bookings/${bookingUid}/cancel`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.CAL_API_KEY}`,
            'cal-api-version': '2024-08-13',
          },
          body: JSON.stringify({
            cancellationReason:
              'Bookings from Pakistan or India are not accepted.',
          }),
        }
      );

      const result = await cancelResponse.json();

      if (!cancelResponse.ok) {
        console.error('❌ Failed to cancel booking:', result);
        return NextResponse.json(
          {
            status: 'Failed to cancel booking',
            error: result,
          },
          { status: cancelResponse.status }
        );
      }

      return NextResponse.json({
        status: 'Booking canceled due to disallowed region',
        phoneNumber,
        bookingUid,
        cancelResponse: result,
      });
    }

    // ✅ Extract info to save to Sanity
    const name = payload.name || payload.reschedulee?.name || '';
    const email = payload.email || payload.reschedulee?.email || '';
    const notesRaw =
      payload?.responses?.notes?.value ||
      payload?.userFieldsResponses?.notes?.value ||
      '';
    const notesArray = notesRaw
      .split('\n')
      .map((n: string) => n.trim())
      .filter(Boolean);

    const notesText = notesArray.join(' ').toLowerCase();

    const meetingStart = payload?.startTime || null;
    const meetingEnd = payload?.endTime || null;
    const eventName = payload?.eventType?.name || '';

    // 🔍 Detect clientType from notes
    let detectedType = 'other';
    for (const keyword in clientTypeMap) {
      if (notesText.includes(keyword)) {
        detectedType = clientTypeMap[keyword];
        break;
      }
    }

    // 📝 Create in Sanity
    const created = await client.create({
      _type: 'calendlyMeeting',
      clientType: detectedType,
      name,
      email,
      notes: notesArray,
      meetingStart,
      meetingEnd,
      eventName,
      isUnsubscribed: false,
    });

    return NextResponse.json({
      status: 'Booking allowed and saved to Sanity',
      phoneNumber,
      created,
    });
  } catch (error) {
    console.error('❌ Webhook error:', error);
    return NextResponse.json(
      { status: 'Internal server error', error: (error as any).message || error },
      { status: 500 }
    );
  }
}
