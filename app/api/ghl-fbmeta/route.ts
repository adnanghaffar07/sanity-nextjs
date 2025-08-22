import { serverClient } from '@/sanity/lib/sanity/serverClient';
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

      // 🔹 Contact Info
      name: body.name || '',
      email: body.email || '',
      phoneNumber: body.phoneNumber || '',
      companyName: body.companyName || '',

      // 🔹 Campaign Info
      campaignName: body.campaignName || '',
      creationDate: new Date().toISOString().split('T')[0], // YYYY-MM-DD

      // 🔹 Lead Questions
      date: body.date || '', // "Date"
      peopleInterestedIn: body.peopleInterestedIn || '', // "People are interested In"
      appType: body.appType || '', // "What Type of App Do you Need?"
      appStage: body.appStage || '', // "What Stage are you at with your app idea?"
      estimatedBudget: body.estimatedBudget || '', // "What is your Estimated Budget?"
      projectStartTime: body.projectStartTime || '', // "When do you want to Start the Project?"
      preferredContact: body.preferredContact || '', // "How would you prefer we contact you?"

      // 🔹 Opt-out
      isUnsubscribed: body.isUnsubscribed || false,
    };

    const result = await serverClient.create(lead);

    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error('Sanity Error:', error);
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}
