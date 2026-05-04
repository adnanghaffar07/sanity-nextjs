import { NextResponse } from "next/server";

const WEBHOOK_URL = "https://n8n.srv1425590.hstgr.cloud/webhook/ca-call-retell";

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    if (!payload?.firstName || !payload?.email || !payload?.phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const webhookResponse = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!webhookResponse.ok) {
      return NextResponse.json(
        { error: "Webhook rejected request" },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to submit lead" },
      { status: 500 },
    );
  }
}
