import { serverClient } from "@/sanity/lib/sanity/serverClient";
import { NextRequest, NextResponse } from "next/server";

const serviceKeywordMap: Record<string, string> = {
  mobile: "app",
  android: "app",
  ios: "app",
  software: "software",
  web: "web",
  ecommerce: "ecommerce",
  shopify: "shopify",
  ai: "ai",
  ml: "ml",
  marketing: "marketing",
  seo: "seo",
  design: "design",
  logo: "design",
  branding: "design",
};

function detectClientType(text: string): string {
  const lowerText = text.toLowerCase();
  for (const keyword in serviceKeywordMap) {
    if (lowerText.includes(keyword)) {
      return serviceKeywordMap[keyword];
    }
  }
  return "other";
}

async function deletePakistaniMeetings() {
  try {
    const meetingIds = await serverClient.fetch(
      `*[_type == "calendlyMeeting" && array::join(notes, " ") match "*+92*"]._id`
    );

    if (meetingIds.length > 0) {
      console.log("🗑️ Deleting Pakistani meetings:", meetingIds);
      await serverClient.delete(meetingIds);
    }
  } catch (error) {
    console.error("❌ Error deleting Pakistani meetings:", error);
  }
}

async function processMeeting(meetingData: any) {
  const {
    name = "Unknown",
    email = "Unknown",
    scheduled_event = {},
    questions_and_answers = [],
  } = meetingData;

  const notes = questions_and_answers.map((q: any) => q.answer).filter(Boolean);
  const combinedNotesText = notes.join(" ");
  const clientType = detectClientType(combinedNotesText);

  const meetingDoc = {
    _type: "calendlyMeeting",
    name,
    email,
    meetingStart: scheduled_event?.start_time || "Unknown",
    meetingEnd: scheduled_event?.end_time || "Unknown",
    notes,
    eventName: scheduled_event?.name || "Unknown",
    clientType,
  };

  console.log("📤 Creating document in Sanity:", meetingDoc);

  return serverClient.create(meetingDoc);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("📥 Calendly Webhook Body:", JSON.stringify(body, null, 2));

    if (body.event === "invitee.created" && body.payload) {
      await processMeeting(body.payload);

      // Temporarily comment this out for testing
       await deletePakistaniMeetings();
    } else {
      console.log("❗ Unexpected event type or missing payload");
    }

    return NextResponse.json({ message: "Webhook processed successfully" });
  } catch (error) {
    console.error("❌ Error processing Calendly webhook:", error);
    return NextResponse.json({ message: "Error processing webhook" }, { status: 500 });
  }
}
