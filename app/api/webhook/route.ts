import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log('Received Calendly Webhook:', body);

    // Perform any action (e.g., save to Sanity CMS)
    return NextResponse.json({ message: 'Webhook received successfully' });
  } catch (error) {
    console.error('Error handling webhook:', error);
    return NextResponse.json({ message: 'Error handling webhook' }, { status: 500 });
  }
}
