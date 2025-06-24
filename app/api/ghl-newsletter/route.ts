import { v4 as uuidv4 } from 'uuid';
import { NextRequest, NextResponse } from 'next/server';
import { serverClient } from '@/sanity/lib/sanity/serverClient';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const {
            subject,
            introText,
            contentBlocks,
            offerPrice,
            offerDetails,
            projectsList,
            pricingTable,
            recipientGroups,
        } = body;

        // 1. Save newsletter content in Sanity
        const newsletterId = uuidv4();
        await serverClient.create({
            _type: 'newsletter',
            _id: newsletterId,
            subject,
            introText,
            contentBlocks: contentBlocks.map((item: any) => ({
                ...item,
                _key: uuidv4(),
            })),
            offerPrice,
            offerDetails,
            projectsList,
            pricingTable: pricingTable.map((item: any) => ({
                ...item,
                _key: uuidv4(),
            })),
            recipientGroups,
        });

        // 2. Create GHL Email HTML
        const ghlEmailHTML = `
      <html>
        <body style="font-family: Arial, sans-serif; padding: 20px;">
          <h1>${subject}</h1>
          <p>${introText}</p>
          ${contentBlocks
                .map(
                    (block: any) => `
            <h2>${block.heading}</h2>
            <p>${block.description}</p>`
                )
                .join('')}
          <h3>${offerPrice}</h3>
          <p>${offerDetails}</p>
          <p><strong>Projects:</strong></p>
          <ul>
            ${projectsList.map((p: string) => `<li>${p}</li>`).join('')}
          </ul>
          <h3>Pricing:</h3>
          <table border="1" cellpadding="10">
            <tr><th>Service</th><th>Setup Cost</th><th>Monthly Cost</th></tr>
            ${pricingTable
                .map(
                    (row: any) =>
                        `<tr><td>${row.service}</td><td>${row.setupCost}</td><td>${row.monthlyCost}</td></tr>`
                )
                .join('')}
          </table>
        </body>
      </html>
    `;
        // 3. Send Email via Go High Level
        const ghlResponse = await fetch('https://rest.gohighlevel.com/v1/emails/send', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${process.env.GHL_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                locationId: process.env.GHL_LOCATION_ID,
                subject: subject,
                html: ghlEmailHTML,
                toAll: true,
            }),
        });

        const ghlData = await ghlResponse.json();
        if (!ghlResponse.ok) {
            console.error('❌ GHL Error:', ghlData);
            throw new Error('Failed to send email via GHL');
        }

        console.log('✅ GHL Email Sent:', ghlData);

        return NextResponse.json({ message: 'Newsletter sent and saved.' }, { status: 200 });
    } catch (error) {
        console.error('SendNewsletter API Error:', error);
        return NextResponse.json({ message: 'Failed to send or save' }, { status: 500 });
    }
}
