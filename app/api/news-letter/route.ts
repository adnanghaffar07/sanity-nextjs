import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

async function fetchRecipients(groups: string[]) {
    const queries = groups.map(group => `*[_type == '${group}' && isUnsubscribed != true]{ name, email }`);

    try {
        const results = await Promise.all(queries.map(query => client.fetch(query)));
        return Array.from(new Map(results.flat().map((r) => [r.email, r])).values()); // Deduplicate
    } catch (error) {
        console.error("Error fetching recipients:", error);
        return [];
    }
}
export async function POST(req: NextRequest) {
    const secret = process.env.NEWS_LETTER_SECRET;
    const authHeader = req.headers.get("authorization");

    if (authHeader !== `Bearer ${secret}`) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    try {
        // Parse the request body as JSON
        const { subject, recipientGroups, headline, introText, offerPrice, offerDetails, projectsList, pricingTable } = await req.json();

        // Validate that the required fields are present in the request body
        if (!subject || !headline || !introText || !offerPrice || !offerDetails || !projectsList || !pricingTable) {
            return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
        }

        // Fetch recipients
        const recipients = await fetchRecipients(recipientGroups);
        if (recipients.length === 0) {
            return NextResponse.json({ message: "No recipients found" }, { status: 200 });
        }

        // Set up email transporter
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Send emails to recipients
        await Promise.all(recipients.map(async (recipient) => {
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
                                <h3>Special Offer: Get Your Mobile App for ${offerPrice}</h3>
                                <p>${offerDetails}</p>
                                <h3>Recent Projects:</h3>
                                <ul>
                                    ${projectsList.map((project: any) => `<li>${project}</li>`).join('')}
                                </ul>
                                      <a href="https://codeautomation.ai/case-studies" target="_blank" class="cta-button">See More Projects</a>

                                <h3>Pricing:</h3>
                                <table class="pricing-table">
                                    <tr>
                                        <th>Service</th>
                                        <th>One-Time Cost</th>
                                        <th>Monthly Cost</th>
                                    </tr>
                                    ${pricingTable.map((item: { service: any; setupCost: any; monthlyCost: any; }) => `
                                        <tr>
                                            <td>${item.service}</td>
                                            <td class="highlight-cell">${item.setupCost}</td>
                                            <td class="highlight-cell">${item.monthlyCost}</td>
                                        </tr>
                                    `).join('')}
                                </table>
                                 <p>This pricing is available for a limited time. Secure your app development today!</p>
      <p>I’d love to discuss how we can make your app a reality. Let’s set up a quick call, when would be a good time for you?</p>
      <a href="https://calendly.com/adnanghaffar" target="_blank" class="cta-button">Let’s Get Started</a>
      <p>Looking forward to hearing from you!</p>
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
                        </div>
                    </body>
                    </html>
                    `,
                });
            } catch (error) {
                console.error(`Failed to send email to ${recipient.email}:`, error);
            }
        }));

        return NextResponse.json({ message: "Emails sent successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error processing the request:", error);
        return NextResponse.json({ message: "Failed to send emails" }, { status: 500 });
    }
}
