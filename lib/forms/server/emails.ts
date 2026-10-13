// Emails sent for a form submission: one notification to the team, and (for
// some forms) an automatic reply to the person who submitted it. The
// auto-reply texts are the ones the forms used before.

import nodemailer from "nodemailer";
import type { Transporter } from "nodemailer";

export const TEAM_EMAIL = "adnan@codeautomation.dev";
const BOOKING_URL = "https://calendly.com/adnanghaffar/codeautomation?utm_source=website&utm_campaign=services";

let transporter: Transporter | null = null;

function getTransporter(): Transporter | null {
  const { EMAIL_USER, EMAIL_PASS } = process.env;
  if (!EMAIL_USER || !EMAIL_PASS) return null;
  transporter ??= nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user: EMAIL_USER, pass: EMAIL_PASS },
  });
  return transporter;
}

export async function sendEmail(options: { to: string | string[]; subject: string; html: string; replyTo?: string; fromName?: string }) {
  const mailer = getTransporter();
  if (!mailer) throw new Error("EMAIL_USER / EMAIL_PASS are not configured");
  await mailer.sendMail({
    from: `"${options.fromName ?? "CodeAutomation"}" <${process.env.EMAIL_USER}>`,
    to: options.to,
    replyTo: options.replyTo,
    subject: options.subject,
    html: options.html,
  });
}

const escapeHtml = (value: unknown) =>
  String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

// ── Team notification ─────────────────────────────────────────────────────────

export interface TeamEmailRow {
  label: string;
  value?: string;
  /** Render the value as a link. */
  href?: string;
  /** Long text: keep line breaks. */
  multiline?: boolean;
}

export function teamEmailHtml(options: { formTitle: string; rows: TeamEmailRow[]; studioUrl?: string }) {
  const rows = options.rows
    .filter((row) => row.value)
    .map((row) => {
      const value = escapeHtml(row.value);
      const content = row.href
        ? `<a href="${escapeHtml(row.href)}" target="_blank" rel="noreferrer">${value}</a>`
        : row.multiline
          ? `<div style="white-space:pre-wrap;background:#fafafa;border:1px solid #e5e7eb;border-radius:10px;padding:12px;">${value}</div>`
          : value;
      return `<tr><td style="padding:10px 12px 10px 0;color:#6b7280;font-size:12px;text-transform:uppercase;letter-spacing:.06em;vertical-align:top;white-space:nowrap;">${escapeHtml(row.label)}</td><td style="padding:10px 0;font-size:15px;color:#111827;word-break:break-word;">${content}</td></tr>`;
    })
    .join("");

  return `<!DOCTYPE html><html lang="en"><body style="margin:0;background:#fff;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#111827;">
<div style="max-width:680px;margin:auto;padding:32px 16px;">
  <div style="display:inline-block;font-size:12px;padding:4px 10px;border-radius:999px;background:#111827;color:#fff;margin-bottom:14px;">New submission</div>
  <div style="font-size:20px;font-weight:600;margin-bottom:20px;">${escapeHtml(options.formTitle)}</div>
  <table style="width:100%;border-collapse:collapse;border:1px solid #e5e7eb;border-radius:14px;">${rows}</table>
  ${options.studioUrl ? `<p style="margin-top:18px;"><a href="${escapeHtml(options.studioUrl)}" style="color:#1d92fb;">Open in Sanity Studio</a></p>` : ""}
  <p style="margin-top:12px;font-size:12px;color:#9ca3af;">Sent automatically by the CodeAutomation website.</p>
</div></body></html>`;
}

// ── Auto-replies ──────────────────────────────────────────────────────────────

export type AutoReplyKind = "inquiry" | "marketing-audit" | "real-estate-audit" | "thank-you";

const SERVICE_CATEGORIES: Record<string, string> = {
  mobile: "Mobile App Development",
  android: "Mobile App Development",
  ios: "Mobile App Development",
  software: "Software Development",
  web: "Website Development",
  ecommerce: "E-commerce Solutions",
  shopify: "Shopify Development",
  ai: "AI & Automation",
  ml: "ML & Automation",
  marketing: "Digital Marketing",
  seo: "Search Engine Optimization",
};

function inquirySubject(lookingFor?: string) {
  const text = (lookingFor ?? "").toLowerCase();
  const matches = [...new Set(Object.keys(SERVICE_CATEGORIES).filter((k) => text.includes(k)).map((k) => SERVICE_CATEGORIES[k]))];
  return matches.length ? `Thank You for Your Inquiry About ${matches.join(", ")}!` : "Thank You for Your Inquiry!";
}

export function autoReply(kind: AutoReplyKind, person: { name: string; lookingFor?: string }) {
  const name = escapeHtml(person.name);
  switch (kind) {
    case "inquiry":
      return {
        subject: inquirySubject(person.lookingFor),
        html: `<!DOCTYPE html><html lang="en"><body style="margin:0;background:#fff;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#111827;">
<div style="padding:50px 16px;"><div style="max-width:600px;margin:auto;">
  <div style="font-size:22px;font-weight:600;letter-spacing:-0.2px;margin-bottom:14px;">Hi ${name},</div>
  <p style="font-size:15px;line-height:1.75;color:#4b5563;margin:12px 0;">Thank you for reaching out. We have successfully received your request and our team is currently reviewing it.</p>
  <p style="font-size:15px;line-height:1.75;color:#4b5563;margin:12px 0;">We aim to respond within 24 hours. In most cases, you will hear back much sooner depending on the nature of your request.</p>
  <div style="margin:26px 0;padding:18px 20px;border:1px solid #e5e7eb;border-radius:12px;"><strong style="color:#111827;">What happens next</strong><br/><br/>Our team will carefully review your submission and get back to you with the next steps, recommendations, or clarifications if needed.</div>
  <p style="font-size:15px;line-height:1.75;color:#4b5563;margin:12px 0;">If you prefer to move faster, you can schedule a direct call with our team using the link below.</p>
  <div style="margin-top:28px;"><a href="${BOOKING_URL}" target="_blank" style="display:inline-block;padding:12px 18px;background:#111827;color:#fff;text-decoration:none;font-size:14px;font-weight:500;border-radius:10px;">Schedule a Meeting</a></div>
  <hr style="margin:32px 0;border:none;border-top:1px solid #e5e7eb;"/>
  <p style="font-size:15px;line-height:1.75;color:#4b5563;margin:12px 0;">If your request is urgent, simply reply to this email and we will prioritize it accordingly.</p>
  <p style="font-size:15px;line-height:1.75;color:#4b5563;margin:12px 0;">Regards,<br/><span style="font-weight:600;color:#111827;">CodeAutomation Team</span></p>
  <div style="font-size:12px;color:#9ca3af;margin-top:30px;">© ${new Date().getFullYear()} CodeAutomation. All rights reserved.</div>
</div></div></body></html>`,
      };
    case "marketing-audit":
      return {
        subject: "Thank You for Contacting CodeAutomation.ai",
        fromName: "CodeAutomation.ai",
        html: `<!DOCTYPE html><html><body style="font-family:Arial,sans-serif;line-height:1.6;color:#333;">
<div style="max-width:600px;margin:0 auto;padding:20px;">
  <div style="background:linear-gradient(135deg,#020C16 0%,#1d92fb 100%);color:white;padding:30px;text-align:center;"><h1 style="margin:0">Thank You!</h1></div>
  <div style="padding:30px;background:#f9f9f9;">
    <p>Hello ${name},</p>
    <p>Thank you for reaching out to <strong>CodeAutomation.ai</strong>. We've received your consultation request and are excited to learn more about your marketing automation goals.</p>
    <p><strong>What happens next?</strong></p>
    <ul>
      <li>One of our automation specialists will review your request within <strong>24 hours</strong></li>
      <li>We'll prepare initial thoughts based on your industry and challenges</li>
      <li>You'll receive an email to schedule your free strategy call</li>
    </ul>
    <p>In the meantime, feel free to:</p>
    <ul>
      <li>Book a call directly: <a href="${BOOKING_URL}">Schedule here</a></li>
      <li>Call us: <a href="tel:+18505584691">+1 850 558 4691</a></li>
      <li>Browse our case studies: <a href="https://codeautomation.ai/case-studies">View success stories</a></li>
    </ul>
    <div style="text-align:center;"><a href="${BOOKING_URL}" style="display:inline-block;background:#1d92fb;color:white;padding:12px 30px;text-decoration:none;border-radius:25px;margin-top:20px;">Book Your Strategy Call Now</a></div>
  </div>
  <div style="text-align:center;padding:20px;color:#666;font-size:12px;">
    <p>© ${new Date().getFullYear()} CodeAutomation.ai. All rights reserved.</p>
    <p>This is an automated response. If you need immediate assistance, please call us directly.</p>
  </div>
</div></body></html>`,
      };
    case "real-estate-audit":
      return {
        subject: "Your Free Automation Audit Request Has Been Received",
        html: `<!DOCTYPE html><html><head><meta charset="UTF-8" /></head><body style="font-family:Arial,sans-serif;background:#f9fafb;padding:40px;">
<div style="max-width:600px;margin:auto;background:white;border-radius:16px;padding:40px;border:1px solid #e5e7eb;">
  <h1 style="font-size:28px;color:#111827;margin-bottom:20px;">Hi ${name},</h1>
  <p style="font-size:16px;line-height:1.7;color:#4b5563;">Thank you for requesting your free real estate automation audit.</p>
  <p style="font-size:16px;line-height:1.7;color:#4b5563;">Our team is reviewing your submission and will contact you within 24 hours with the next steps.</p>
  <div style="background:#f3f4f6;border-radius:12px;padding:20px;margin:30px 0;">
    <strong style="color:#111827;">What you'll receive:</strong>
    <ul style="margin-top:12px;color:#4b5563;line-height:1.8;">
      <li>Workflow automation opportunities</li><li>Time-saving recommendations</li><li>ROI improvement suggestions</li><li>A custom automation roadmap</li>
    </ul>
  </div>
  <a href="https://calendly.com/adnanghaffar/codeautomation" target="_blank" style="display:inline-block;background:#3498db;color:white;text-decoration:none;padding:14px 22px;border-radius:10px;font-weight:600;">Schedule a Call</a>
  <hr style="border:none;border-top:1px solid #e5e7eb;margin:32px 0;" />
  <p style="font-size:14px;color:#6b7280;">CodeAutomation.ai</p>
</div></body></html>`,
      };
    case "thank-you":
      return {
        subject: "Thank You for Contacting CodeAutomation!",
        html: `<div style="font-family:'Segoe UI',Tahoma,sans-serif;background-color:#f4f4f4;padding:40px 0;">
<table width="100%" style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;box-shadow:0 4px 16px rgba(0,0,0,0.1);overflow:hidden;">
  <tr><td style="background-color:#1d92fb;padding:24px 40px;text-align:center;"><h1 style="color:#ffffff;font-size:26px;margin:0;">Thank You, ${name}!</h1></td></tr>
  <tr><td style="padding:32px 40px;color:#333;">
    <p style="font-size:16px;line-height:1.6;margin-bottom:16px;">We appreciate you contacting <strong>CodeAutomation</strong>. Your inquiry has been received and our team will get in touch with you shortly.</p>
    <p style="font-size:16px;line-height:1.6;margin-bottom:24px;">In the meantime, feel free to book a 1-on-1 meeting with us at your convenience using the link below.</p>
    <div style="text-align:center;margin:30px 0;"><a href="${BOOKING_URL}" style="padding:14px 28px;background:#1d92fb;color:white;border-radius:6px;text-decoration:none;font-weight:600;font-size:16px;display:inline-block;">📅 Book a Meeting</a></div>
    <p style="margin-top:40px;font-size:14px;color:#555;">Have questions? Just reply to this email — we’re here to help!</p>
    <p style="font-size:14px;margin-top:8px;">Best regards,<br/><strong>The CodeAutomation Team</strong></p>
  </td></tr>
  <tr><td style="background:#f7e022;padding:20px;text-align:center;">
    <div style="margin-bottom:10px;">
      <a href="https://www.facebook.com/Codeautomationai/" target="_blank" style="margin:0 8px;"><img src="https://codeautomation.ai/facebook.png" alt="Facebook" width="24" /></a>
      <a href="https://www.instagram.com/codeautomation.ai/" target="_blank" style="margin:0 8px;"><img src="https://codeautomation.ai/instagram.png" alt="Instagram" width="24" /></a>
      <a href="https://twitter.com/codeautomation" target="_blank" style="margin:0 8px;"><img src="https://codeautomation.ai/twitter.png" alt="Twitter" width="24" /></a>
      <a href="https://www.linkedin.com/company/codeautomationai/" target="_blank" style="margin:0 8px;"><img src="https://codeautomation.ai/linkedin.png" alt="LinkedIn" width="24" /></a>
    </div>
    <div style="font-size:12px;color:#333;">&copy; ${new Date().getFullYear()} CodeAutomation.ai LLC. All Rights Reserved.<br/><a href="https://codeautomation.ai" style="color:#1d92fb;text-decoration:none;">Visit our website</a></div>
  </td></tr>
</table></div>`,
      };
  }
}
