import { NextRequest, NextResponse } from 'next/server';

const GHL_API_KEY = process.env.GHL_API_KEY!;
const GHL_BASE_URL = 'https://rest.gohighlevel.com/v1';

// Map your form keys to GHL field IDs
const CUSTOM_FIELDS_MAP: Record<string, string> = {
  email_subject: 'fsuDLj5QW1XWFuiJuEDN',
  intro_text: 'mBI8dlptFYkDyFZg3gFU',
  offer_price: 'fXmH2I28XHMKp54omGvm',
  offer_details: 'iDmbMBAz6EbdVrdTGH2h',
  content_heading_1: 'fEF6Ikvzboz8qiZmczuZ',
  content_description_1: 'iJroViCFHMnWZBeDelMc',
  content_heading_2: 'axmWypGyDiuOjtMio8Rj',
  content_description_2: 'wYmuzjXpbW2nVZaC7O0z',
  project_1: '2lnNLOuM1UahrjMtoncf',
  project_2: 'wrrVv7FfjSVsgkadlg80',
  project_3: 'vJjXtyDh5dkEiQzGhY5T',
};

export async function POST(req: NextRequest) {
  try {
    const formValues = await req.json();

    const contactId = 'EApVJokLBBwpbKqFOMCf'; //

    const customFieldUpdates = Object.entries(CUSTOM_FIELDS_MAP).map(([formKey, fieldId]) => ({
      id: fieldId,
      value: formValues[formKey] || '',
    }));

    const updateRes = await fetch(`${GHL_BASE_URL}/contacts/${contactId}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${GHL_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        customField: customFieldUpdates,
      }),
    });

    const resultText = await updateRes.text();

    return NextResponse.json({
      status: updateRes.ok ? 'success' : 'error',
      updated: updateRes.ok,
      contactId,
      response: resultText,
    });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Failed to update contact', details: error }, { status: 500 });
  }
}
