// Cal.com booking webhook: cancels bookings made with a Pakistani (+92) or
// Indian (+91) phone number. Other bookings are left as they are.
// Cal.com must have a webhook secret set; it is checked against CAL_WEBHOOK_SECRET.
import { NextResponse } from 'next/server';
import { createHmac, timingSafeEqual } from 'node:crypto';

function validCalSignature(rawBody: string, signature: string | null): boolean {
  const secret = process.env.CAL_WEBHOOK_SECRET?.trim();
  if (!secret) {
    console.error('CAL_WEBHOOK_SECRET is not set: rejecting the Cal.com webhook.');
    return false;
  }
  if (!signature) return false;
  const expected = Buffer.from(createHmac('sha256', secret).update(rawBody).digest('hex'));
  const sent = Buffer.from(signature.trim());
  return sent.length === expected.length && timingSafeEqual(sent, expected);
}

export async function POST(req: Request) {
  const rawBody = await req.text();
  if (!validCalSignature(rawBody, req.headers.get('x-cal-signature-256'))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    const body = JSON.parse(rawBody);
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

    return NextResponse.json({ status: 'Booking allowed', phoneNumber });
  } catch (error) {
    console.error('❌ Webhook error:', error);
    return NextResponse.json(
      { status: 'Internal server error', error: (error as any).message || error },
      { status: 500 }
    );
  }
}
