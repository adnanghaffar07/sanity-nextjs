// /app/api/send-newsletter/route.ts
import { client } from '@/sanity/lib/client';
import { v4 as uuidv4 } from 'uuid';
import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

async function fetchRecipients(groups: string[]) {
  const queries = groups.map(
    (group) => `*[_type == '${group}' && isUnsubscribed != true]{ name, email }`
  );

  const results = await Promise.all(queries.map((q) => client.fetch(q)));
  return Array.from(new Map(results.flat().map((r) => [r.email, r])).values());
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      subject,
      headline,
      introText,
      offerPrice,
      offerDetails,
      projectsList,
      pricingTable,
      recipientGroups,
    } = body;

    // 1. Fetch recipients
    const recipients = await fetchRecipients(recipientGroups);
    if (!recipients.length) {
      return NextResponse.json({ message: 'No recipients found' }, { status: 200 });
    }

    // 2. Save newsletter content in Sanity
    const newsletterId = uuidv4();
    await client.create({
      _type: 'newsletter',
      _id: newsletterId,
      subject,
      headline,
      introText,
      offerPrice,
      offerDetails,
      projectsList,
        pricingTable: pricingTable.map((item: any) => ({
    ...item,
    _key: uuidv4(),
  })),
      recipientGroups,
    });

    // 3. Set up Nodemailer
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 4. Send emails (batch if needed)
    const sendBatch = async (batch: any[]) => {
            await Promise.all(batch.map(async (recipient) => {
            try {
                await transporter.sendMail({
                    from: `"CodeAutomation.ai LLC" <${process.env.EMAIL_USER}>`,
                    to: recipient.email,
                    subject: subject,
                    html: `
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>${subject}</title>
                        <style>
                            body { font-family: 'Arial', sans-serif; margin: 0; padding: 0; background-color: #f4f7fc; color: #333; }
                            .email-container { max-width: 650px; margin: 0 auto; background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); }
                            .email-header { color: #1e7bcc; padding: 12px; text-align: center; }
                            .email-header h1 { margin: 0; padding: 10px; font-size: 28px; font-weight: 700; color: #1a73e8; }
                            .email-body { padding: 30px; font-size: 16px; line-height: 1.8; color: #555; }
                            .highlight { color: #0a66c2; font-weight: bold; }
                            .cta-button { display: inline-block; padding: 10px 24px; background-color: #f7e022; color: #000; font-size: 16px; font-weight: bold; text-decoration: none; border-radius: 6px; margin-top: 25px; margin-bottom: 15px; transition: background-color 0.3s ease; }
                            .cta-button:hover { background-color: #e0c81a; }
                            .pricing-table { width: 100%; border-collapse: collapse; margin-top: 30px; }
                            .pricing-table td, .pricing-table th { padding: 15px; text-align: left; border: 1px solid #ddd; }
                            .pricing-table th { background-color: #0a66c2; color: white; }
                            .pricing-table .highlight-cell { font-weight: bold; color: #1e7bcc; }
       .email-footer {
    background-color: rgb(252, 252, 252);
    padding: 20px;
    text-align: center;
    font-size: 14px;
    color: #888;
}

.social-icons {
    display: flex;
    justify-content: center;
    gap: 10px; /* Adds spacing between icons */
    margin-bottom: 10px;
}

.social-icons a {
    display: inline-block;
}

.social-icons img {
    width: 30px;
    height: 30px;
}

.unsubscribe {
    font-size: 12px;
    color: #666;
    margin-top: 10px;
}

.unsubscribe a {
    color: #0a66c2;
    text-decoration: none;
}

                        </style>
                    </head>
                 <body>
  <div class="email-container">
    <div class="email-header">
      <h1>${headline}</h1>
    </div>

    <div class="email-body">
      <p>Hi ${recipient.name},</p>
      <p>${introText}</p>

      <h3>${offerPrice}</h3>
      <p>${offerDetails}</p>

      ${
        projectsList && projectsList.length
          ? `
        <h3>Recent Projects:</h3>
        <ul>
          ${projectsList.map((project: any) => `<li>${project}</li>`).join('')}
        </ul>
        <a href="https://codeautomation.ai/case-studies" target="_blank" class="cta-button">See More Projects</a>
        `
          : ''
      }

      ${
        pricingTable && pricingTable.length
          ? `
        <h3>Pricing:</h3>
        <table class="pricing-table">
          <tr>
            <th>Service</th>
            <th>One-Time Cost</th>
            <th>Monthly Cost</th>
          </tr>
          ${pricingTable
            .map(
              (item: { service: any; setupCost: any; monthlyCost: any }) => `
            <tr>
              <td>${item.service}</td>
              <td class="highlight-cell">${item.setupCost}</td>
              <td class="highlight-cell">${item.monthlyCost}</td>
            </tr>
          `
            )
            .join('')}
        </table>
        <p>This pricing is available for a limited time. Secure your app development today!</p>
        `
          : ''
      }

      <p>We’d love to discuss how we can make your app a reality. Let’s set up a quick call. When would be a good time for you?</p>
    <div style="display: flex; gap: 10px; justify-content: center; margin: 30px 0;">
  <a href="https://calendly.com/adnanghaffar" target="_blank"
     style="display: inline-block; padding: 10px 24px; background-color: #1a73e8; color: #ffffff; font-size: 16px; font-weight: bold; text-decoration: none; border-radius: 6px;">
    Let’s Get Started
  </a>
  <a href="https://app.gohighlevel.com/v2/preview/pdNP7Pan14BkCUeYWecw?notrack=true" target="_blank"
     style="display: inline-block; padding: 10px 24px; background-color: #f7e022; color: #000000; font-size: 16px; font-weight: bold; text-decoration: none; border-radius: 6px;">
    Claim Your Offer
  </a>
</div>


    <!-- Footer Section -->
    <div class="email-footer">
      <div class="social-icons">
        <a href="https://www.facebook.com/Codeautomationai/" target="_blank">
          <img src="https://codeautomation.ai/facebook.png" alt="Facebook">
        </a>
        <a href="https://www.instagram.com/codeautomation.ai/" target="_blank">
          <img src="https://codeautomation.ai/instagram.png" alt="Instagram">
        </a>
        <a href="https://twitter.com/codeautomation" target="_blank">
          <img src="https://codeautomation.ai/twitter.png" alt="Twitter">
        </a>
        <a href="https://www.linkedin.com/company/codeautomationai/" target="_blank">
          <img src="https://codeautomation.ai/linkedin.png" alt="LinkedIn">
        </a>
      </div>

      <p>&copy; ${new Date().getFullYear()} CodeAutomation.ai LLC. All Rights Reserved.</p>

      <p class="unsubscribe">
        Don't want to receive these emails? 
        <a href="https://codeautomation.ai/api/unsubscribe?email=${recipient.email}" style="color: #0a66c2;">
          Unsubscribe
        </a>.
      </p>
    </div>
  </div>
</body>

                    </html>
                    `,
                });
            } catch (error) {
                console.error(`Failed to send email to ${recipient.email}:`, error);
            }
        }));
    };

    const BATCH_SIZE = 10;
    for (let i = 0; i < recipients.length; i += BATCH_SIZE) {
      await sendBatch(recipients.slice(i, i + BATCH_SIZE));
    }

    console.log(
  `📧 Successfully attempted sending to ${recipients.length} recipients:\n`,
  recipients.map((r) => r.email).join(', ')
);

    return NextResponse.json({ message: 'Newsletter sent and saved.' }, { status: 200 });
  } catch (error) {
    console.error('SendNewsletter API Error:', error);
    return NextResponse.json({ message: 'Failed to send or save' }, { status: 500 });
  }
}
