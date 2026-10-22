// GoHighLevel → website webhook for Facebook (Meta) lead-ad leads.
// Saves them as "Facebook lead" form submissions (not sent back to GoHighLevel).

import { NextRequest, NextResponse } from "next/server";
import { recordSubmission } from "@/lib/forms/server/process";
import { hasBearerSecret } from "@/lib/security/request";

export async function POST(req: NextRequest) {
  // GoHighLevel sends "Authorization: Bearer <GHL_SECRET_TOKEN>".
  if (!hasBearerSecret(req, "GHL_SECRET_TOKEN")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { id } = await recordSubmission(
      "facebook-lead",
      {
        fields: {
          name: body.name,
          email: body.email,
          phone: body.phoneNumber,
          company: body.companyName,
          lookingFor: body.appType || body.peopleInterestedIn,
        },
        details: {
          Campaign: body.campaignName,
          Date: body.date,
          "Interested in": body.peopleInterestedIn,
          "App type": body.appType,
          "App stage": body.appStage,
          "Estimated budget": body.estimatedBudget,
          "Project start": body.projectStartTime,
          "Preferred contact": body.preferredContact,
        },
      },
      { extra: { isUnsubscribed: body.isUnsubscribed === true } }
    );
    return NextResponse.json({ success: true, data: { _id: id } });
  } catch (error) {
    console.error("Facebook lead webhook failed:", error);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
