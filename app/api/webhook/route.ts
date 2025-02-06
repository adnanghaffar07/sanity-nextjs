import { client } from "@/sanity/lib/client";
import { NextRequest, NextResponse } from "next/server";

// Function to extract phone number from questions_and_answers
function extractPhoneNumber(questions_and_answers: any[]): string {
  if (!questions_and_answers || questions_and_answers.length === 0) {
    return "";
  }

  for (const q of questions_and_answers) {
    if (q.answer) {
      let answer = q.answer.trim().replace(/\s+/g, ""); // Remove spaces
      if (/^\d+$/.test(answer)) {
        // If it's a number but missing '+', assume it's an international number
        if (!answer.startsWith("+")) {
          answer = "+" + answer; // Add '+' if missing
        }
        return answer;
      }
    }
  }
  return "";
}

// Function to delete meetings with Pakistani numbers
async function deletePakistaniMeetings() {
  try {
    // Fetch meetings with Pakistani numbers
    const meetings = await client.fetch(
      `*[_type == "calendlyMeeting"] { _id, notes }`
    );

    // Filter IDs of meetings that contain a +92 number
    const meetingIds = meetings
      .filter((meeting: { notes: string[]; }) =>
        meeting.notes?.some((note: string) => note.startsWith("+92"))
      )
      .map((meeting: { _id: any; }) => meeting._id);

    if (meetingIds.length === 0) {
      console.log("✅ No Pakistani meetings found.");
      return;
    }

    // Delete the filtered meetings
    const response = await client.delete(meetingIds);

    console.log("🗑️ Deleted Pakistani meetings:", response);
  } catch (error) {
    console.error("❌ Error deleting Pakistani meetings:", error);
  }
}



// Function to process and save to Sanity
async function processMeeting(meetingData: any) {
  const {
    name = "Unknown",
    email = "Unknown",
    scheduled_event = {},
    questions_and_answers = [],
  } = meetingData;

  const meetingDocument = {
    _type: "calendlyMeeting",
    name,
    email,
    meetingStart: scheduled_event?.start_time || "Unknown",
    meetingEnd: scheduled_event?.end_time || "Unknown",
    notes: questions_and_answers.map((q: any) => q.answer).filter(Boolean),
    eventName: scheduled_event?.name || "Unknown",
  };

  try {
    const response = await client.create(meetingDocument);

    console.log("✅ Saved to Sanity:", response);

    // Run cleanup after storing
    await deletePakistaniMeetings();
  } catch (error) {
    console.error("❌ Error saving to Sanity:", error);
    throw error;
  }
}

// Webhook handler
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
