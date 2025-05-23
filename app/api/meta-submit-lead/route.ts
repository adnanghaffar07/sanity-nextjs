import { client } from '@/sanity/lib/client';
import { NextResponse } from 'next/server';


export async function POST(req: Request) {
  try {
    const body = await req.json();

    const lead = {
      _type: 'fbMetaLead',
      name: body.name,
      email: body.email,
      companyName: body.companyName,
      campaignName: body.campaignName,
      creationDate: body.creationDate,
      phoneNumber: body.phoneNumber,
      date: body.creationDate, // ✅ handle the new date field
      bookingTime: body.bookingTime, // ✅ handle the new bookingTime field
    };

    await client.create(lead);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error submitting lead:', error);
    return NextResponse.json({ success: false, error: 'Failed to submit lead' }, { status: 500 });
  }
}
