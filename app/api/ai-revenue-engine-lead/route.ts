import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const WEBHOOK_URL = "https://n8n.srv1425590.hstgr.cloud/webhook/ca-call-retell";

type LeadPayload = {
  firstName?: string;
  lastName?: string;
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
  [key: string]: unknown;
};

function splitName(fullName: string): { firstName: string; lastName: string } {
  const parts = fullName.trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return { firstName: "", lastName: "" };
  if (parts.length === 1) return { firstName: parts[0], lastName: "" };
  return { firstName: parts[0], lastName: parts.slice(1).join(" ") };
}

function normalizePhone(phone: string): string {
  const trimmed = phone.trim();
  if (!trimmed) return "";
  return trimmed.startsWith("+") ? trimmed : `+${trimmed}`;
}

function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  try {
    const payload: LeadPayload = await request.json();

    const hasName = Boolean(String(payload?.firstName || payload?.name || "").trim());
    if (!hasName || !payload?.email || !payload?.phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const safeEmail = String(payload.email).trim().toLowerCase();
    const safePhone = normalizePhone(String(payload.phone));
    const fullName = String(payload.name || "").trim();
    const derivedFromFullName = splitName(fullName);
    const firstName = String(payload.firstName || "").trim() || derivedFromFullName.firstName;
    const lastName = String(payload.lastName || "").trim() || derivedFromFullName.lastName;

    if (!process.env.GHL_API_KEY) {
      return NextResponse.json(
        { error: "GHL_API_KEY is missing in server environment" },
        { status: 500 },
      );
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return NextResponse.json(
        { error: "Email credentials are missing in server environment" },
        { status: 500 },
      );
    }

    const ghlPayload = {
      firstName,
      lastName,
      email: safeEmail,
      phone: safePhone,
      source: "website",
      tags: ["ai revenue engine lead"],
      customField: {
        form_name: "AI Revenue Engine Lead",
        company: String(payload.company || ""),
        message: String(payload.message || ""),
      },
    };

    const ghlResponse = await fetch("https://rest.gohighlevel.com/v1/contacts/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GHL_API_KEY}`,
      },
      body: JSON.stringify(ghlPayload),
    });

    const ghlData = await ghlResponse.json().catch(() => ({}));
    if (!ghlResponse.ok) {
      return NextResponse.json(
        {
          error: "Failed to send lead to GHL",
          details: (ghlData as { message?: string; error?: string })?.message || "Unknown GHL error",
        },
        { status: 502 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const payloadRows = Object.entries(payload)
      .map(([key, value]) => {
        const displayValue =
          typeof value === "object" && value !== null
            ? JSON.stringify(value)
            : String(value ?? "");
        return `<tr><td style="padding:8px;border:1px solid #e2e8f0;"><strong>${escapeHtml(key)}</strong></td><td style="padding:8px;border:1px solid #e2e8f0;">${escapeHtml(displayValue)}</td></tr>`;
      })
      .join("");

    const emailPromise = transporter.sendMail({
      from: `"CodeAutomation Website" <${process.env.EMAIL_USER}>`,
      to: "adnan@codeautomation.dev",
      replyTo: safeEmail,
      subject: `New AI Revenue Engine Lead - ${firstName || "Unknown"} ${lastName || ""}`.trim(),
      html: `
        <div style="font-family:Arial,sans-serif;color:#0f172a;">
          <h2 style="margin-bottom:12px;">New AI Revenue Engine Lead</h2>
          <table style="border-collapse:collapse;width:100%;max-width:800px;background:#fff;">
            ${payloadRows}
          </table>
          <p style="margin-top:12px;color:#64748b;">Sent from CodeAutomation.ai</p>
        </div>
      `,
    });

    const webhookPromise = fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const [emailResult, webhookResult] = await Promise.allSettled([emailPromise, webhookPromise]);

    const warnings: string[] = [];
    if (emailResult.status === "rejected") {
      console.error("AI lead email send failed:", emailResult.reason);
      warnings.push("team-email-failed");
    }

    if (webhookResult.status === "rejected") {
      console.error("AI lead webhook call failed:", webhookResult.reason);
      warnings.push("webhook-failed");
    } else if (!webhookResult.value.ok) {
      console.error("AI lead webhook rejected:", webhookResult.value.status);
      warnings.push("webhook-rejected");
    }

    const contactId =
      (ghlData as { contact?: { id?: string }; id?: string; contact_id?: string })?.contact?.id ||
      (ghlData as { id?: string })?.id ||
      (ghlData as { contact_id?: string })?.contact_id;

    return NextResponse.json({ ok: true, contactId, warnings });
  } catch (error) {
    console.error("ai-revenue-engine-lead submit error:", error);
    return NextResponse.json(
      { error: "Failed to submit lead" },
      { status: 500 },
    );
  }
}
