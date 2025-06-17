import { client } from '@/sanity/lib/client';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const authHeader = req.headers.get('authorization');
  const token = authHeader?.split(' ')[1];

  // ✅ Check Bearer Token
  if (token !== process.env.GHL_SECRET_TOKEN) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await req.json();

    const lead = {
      _type: 'fbMetaLead',
      name: body.name || '',
      email: body.email || '',
      phoneNumber: body.phoneNumber || '',
      companyName: body.companyName || '',
      work: body.work || '',
      campaignName: body.campaignName || '',
      creationDate: new Date().toISOString().split('T')[0], // YYYY-MM-DD
      appType: body.appType || '',
    };

    const result = await client.create(lead);

    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error('Sanity Error:', error);
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}
