// Cal.com booking webhook: cancels bookings made with a Pakistani (+92) or
// Indian (+91) phone number. Other bookings are left as they are.
// Cal.com must have a webhook secret set; it is checked against CAL_WEBHOOK_SECRET.
import { NextResponse } from "next/server";
import { createHmac, timingSafeEqual } from "node:crypto";

const BLOCKED_PREFIXES = ["+92", "+91"];
const CANCELLATION_REASON = "Bookings from Pakistan or India are not accepted.";

type BookingPayload = {
  uid?: string;
  responses?: { phoneNumber?: { value?: string } };
  userFieldsResponses?: { phoneNumber?: { value?: string } };
};

function validCalSignature(rawBody: string, signature: string | null): boolean {
  const secret = process.env.CAL_WEBHOOK_SECRET?.trim();
  if (!secret) {
    console.error("CAL_WEBHOOK_SECRET is not set: rejecting the Cal.com webhook.");
    return false;
  }
  if (!signature) return false;
  const expected = Buffer.from(createHmac("sha256", secret).update(rawBody).digest("hex"));
  const sent = Buffer.from(signature.trim());
  return sent.length === expected.length && timingSafeEqual(sent, expected);
}

export async function POST(req: Request) {
  const rawBody = await req.text();
  if (!validCalSignature(rawBody, req.headers.get("x-cal-signature-256"))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const payload = (JSON.parse(rawBody) as { payload?: BookingPayload }).payload;
    const phoneNumber = payload?.responses?.phoneNumber?.value || payload?.userFieldsResponses?.phoneNumber?.value;
    if (!phoneNumber) return NextResponse.json({ status: "No phone number provided" }, { status: 400 });

    if (!BLOCKED_PREFIXES.some((prefix) => phoneNumber.startsWith(prefix))) {
      return NextResponse.json({ status: "Booking allowed" });
    }
    if (!payload?.uid) {
      return NextResponse.json({ status: "Phone number disallowed but booking ID not found" }, { status: 400 });
    }

    const cancel = await fetch(`https://api.cal.com/v2/bookings/${encodeURIComponent(payload.uid)}/cancel`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CAL_API_KEY}`,
        "cal-api-version": "2024-08-13",
      },
      body: JSON.stringify({ cancellationReason: CANCELLATION_REASON }),
    });
    if (!cancel.ok) {
      console.error("Cancelling Cal.com booking failed:", cancel.status, await cancel.text());
      return NextResponse.json({ status: "Failed to cancel booking" }, { status: 502 });
    }
    return NextResponse.json({ status: "Booking canceled due to disallowed region", bookingUid: payload.uid });
  } catch (error) {
    console.error("Cal.com webhook failed:", error);
    return NextResponse.json({ status: "Internal server error" }, { status: 500 });
  }
}
