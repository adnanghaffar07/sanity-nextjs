// GoHighLevel → website webhook for Facebook (Meta) lead-ad leads: emails the
// team and sends the lead a welcome email. GoHighLevel must send
// "Authorization: Bearer <GHL_SECRET_TOKEN>" (the same token as /api/ghl-fbmeta).
// Mail goes through the site's sender (EMAIL_USER / EMAIL_PASS env variables).

import { NextResponse } from "next/server";
import { sendEmail, teamEmailHtml } from "@/lib/forms/server/emails";
import { hasBearerSecret } from "@/lib/security/request";

const TEAM = ["roia@codeautomation.dev", "adnan@codeautomation.dev", "katrina@codeautomation.dev"];
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const CLIENT_SUBJECT = "Tired of Searching Right Development Team? Guaranteed Quality, Delivered as Promised!";

const clientHtml = () => `
  <div style="font-family: 'Segoe UI', Tahoma, sans-serif; background-color: #f4f4f4; padding: 40px 0;">
    <table width="100%" style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; box-shadow: 0 4px 16px rgba(0,0,0,0.1); overflow: hidden;">
      <!-- Header -->
      <tr>
        <td style="background-color: #1d92fb; padding: 24px 40px; text-align: center;">
          <h1 style="color: #ffffff; font-size: 24px; margin: 0;">Thanks for Connecting with CodeAutomation!</h1>
        </td>
      </tr>

      <!-- Body -->
      <tr>
        <td style="padding: 32px 40px; color: #333;">
          <p style="font-size: 16px; line-height: 1.6;">
            We’re excited to learn more about your goals and how our team at <strong>CodeAutomation.ai</strong> can support your vision.
          </p>
          <p style="font-size: 16px; line-height: 1.6;">
            Our mission is to help businesses like yours build reliable, scalable, and innovative digital solutions that drive growth and success.
          </p>
          <p style="font-size: 16px; line-height: 1.6;">
            Let’s schedule a quick chat to discuss your needs and how we can work together to bring your ideas to life.
          </p>

          <!-- Call to Action -->
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://calendly.com/adnanghaffar/codeautomation?utm_source=website&utm_campaign=services" style="padding: 14px 28px; background: #1d92fb; color: white; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 16px; display: inline-block;">
              Book a Quick Call
            </a>
          </div>

          <p style="font-size: 14px; color: #555; margin-top: 30px;">
            Have any questions? Just reply to this email — our team is happy to help.
          </p>
          <p style="font-size: 14px; margin-top: 8px;">
            Best regards,<br/>
            <strong>The CodeAutomation Team</strong>
          </p>
        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="background:rgb(223, 223, 223); padding: 20px; text-align: center;">
          <div style="margin-bottom: 10px;">
            <a href="https://www.facebook.com/tlillard.kio.39" target="_blank" style="margin: 0 8px;">
              <img src="https://codeautomation.ai/facebook.png" alt="Facebook" width="24" />
            </a>
            <a href="https://www.instagram.com/codeautomation.ai/" target="_blank" style="margin: 0 8px;">
              <img src="https://codeautomation.ai/instagram.png" alt="Instagram" width="24" />
            </a>
            <a href="https://twitter.com/codeautomation" target="_blank" style="margin: 0 8px;">
              <img src="https://codeautomation.ai/twitter.png" alt="Twitter" width="24" />
            </a>
            <a href="https://www.linkedin.com/company/codeautomationai/" target="_blank" style="margin: 0 8px;">
              <img src="https://codeautomation.ai/linkedin.png" alt="LinkedIn" width="24" />
            </a>
          </div>
          <div style="font-size: 12px; color: #333;">
            &copy; ${new Date().getFullYear()} CodeAutomation.ai LLC. All Rights Reserved.<br/>
            <a href="https://codeautomation.ai" style="color: #1d92fb; text-decoration: none;">Visit our website</a>
          </div>
        </td>
      </tr>
    </table>
  </div>
`;

export async function POST(req: Request) {
  if (!hasBearerSecret(req, "GHL_SECRET_TOKEN")) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const text = (value: unknown) => (typeof value === "string" ? value.trim().slice(0, 300) : "");
    const lead = {
      name: text(body.name),
      email: text(body.email),
      phone: text(body.phoneNumber),
      company: text(body.companyName),
      appType: text(body.appType),
      budget: text(body.estimatedBudget),
    };
    const validEmail = EMAIL_PATTERN.test(lead.email);

    // teamEmailHtml escapes every value, so lead data can't inject HTML.
    await sendEmail({
      to: TEAM,
      replyTo: validEmail ? lead.email : undefined,
      subject: `New Meta lead${lead.name ? ` — ${lead.name}` : ""}`,
      fromName: "Meta Lead Bot",
      html: teamEmailHtml({
        formTitle: "Meta lead",
        rows: [
          { label: "Name", value: lead.name },
          { label: "Email", value: lead.email },
          { label: "Phone", value: lead.phone },
          { label: "Company", value: lead.company },
          { label: "App type", value: lead.appType },
          { label: "Estimated budget", value: lead.budget },
        ],
        studioUrl: "https://codeautomation.ai/studio/structure/form-submissions;facebook-lead",
      }),
    });

    if (validEmail) await sendEmail({ to: lead.email, subject: CLIENT_SUBJECT, html: clientHtml() });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Meta lead webhook failed:", error);
    return NextResponse.json({ success: false, error: "Webhook handling failed" }, { status: 500 });
  }
}
