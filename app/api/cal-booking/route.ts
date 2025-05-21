import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const phoneNumber =
      body.payload?.responses?.phoneNumber?.value ||
      body.payload?.userFieldsResponses?.phoneNumber?.value;
    const bookingUid = body.payload?.uid;

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

    return NextResponse.json({
      status: 'Booking allowed – no cancellation needed',
      phoneNumber,
    });
  } catch (error) {
    console.error('❌ Webhook error:', error);
    return NextResponse.json(
      { status: 'Internal server error', error },
      { status: 500 }
    );
  }
}