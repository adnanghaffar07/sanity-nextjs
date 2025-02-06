import { client } from "@/sanity/lib/client";
import { NextRequest, NextResponse } from "next/server";

// Function to extract phone number from questions_and_answers
function extractPhoneNumber(questions_and_answers: any[]): string {
  if (!questions_and_answers || questions_and_answers.length === 0) {
    return ""; // No questions present
  }

  for (const q of questions_and_answers) {
    if (q.answer) {
      const answer = q.answer.trim(); // Remove extra spaces
      if (/^\+\d+$/.test(answer)) {
        return answer; // Return the first valid phone number found
      }
    }
  }

  return ""; // Return empty if no valid number is found
}

// Function to process and optionally save to Sanity
async function processMeeting(meetingData: any) {
  const {
    name = "Unknown",
    email = "Unknown",
    scheduled_event = {},
    questions_and_answers = [],
  } = meetingData;

  const contact_number = extractPhoneNumber(questions_and_answers);

  // **Skip saving if the phone number starts with +92 (Pakistan)**
  if (contact_number.startsWith("+92")) {
    // console.log("Skipping document creation for Pakistani number:", contact_number);
    return; // Do NOT create the document
  }

  const meetingDocument = {
    _type: "calendlyMeeting",
    name,
    email,
    contact_number, // Include the extracted phone number
    meetingStart: scheduled_event?.start_time || "Unknown",
    meetingEnd: scheduled_event?.end_time || "Unknown",
    notes: questions_and_answers.map((q: any) => q.answer).filter(Boolean),
    eventName: scheduled_event?.name || "Unknown",
  };

  try {
    const response = await client.create(meetingDocument);
    console.log("✅ Saved to Sanity:", response);
  } catch (error) {
    console.error("❌ Error saving to Sanity:", error);
    throw error;
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("📥 Received Calendly payload:", JSON.stringify(body, null, 2));

    if (body.event === "invitee.created") {
      const { payload } = body;

      if (!payload) {
        console.error("⚠️ Payload is missing");
        return NextResponse.json({ message: "Invalid payload" }, { status: 400 });
      }

      await processMeeting(payload);
    }

    return NextResponse.json({ message: "Webhook processed successfully" });
  } catch (error: any) {
    console.error("🚨 Webhook error:", error.message);
    return NextResponse.json({ message: "Error processing webhook", error: error.message }, { status: 500 });
  }
}
