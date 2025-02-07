import { client } from "@/sanity/lib/client";
import { NextRequest, NextResponse } from "next/server";

// Function to delete meetings with Pakistani numbers
async function deletePakistaniMeetings() {
  try {
    // Fetch meetings that contain a Pakistani number (+92) in the notes array
    const meetingIds = await client.fetch(
      `*[_type == "calendlyMeeting" && array::join(notes, " ") match "*+92*"]._id`
    );

    if (meetingIds.length > 0) {
      await client.delete(meetingIds);
    }
  } catch (error) {
    console.error("❌ Error deleting Pakistani meetings:", error);
  }
}

// Function to process and save to Sanity
async function processMeeting(meetingData: any) {
  const { name = "Unknown", email = "Unknown", scheduled_event = {}, questions_and_answers = [] } = meetingData;

  return client.create({
    _type: "calendlyMeeting",
    name,
    email,
    meetingStart: scheduled_event?.start_time || "Unknown",
    meetingEnd: scheduled_event?.end_time || "Unknown",
    notes: questions_and_answers.map((q: any) => q.answer).filter(Boolean),
    eventName: scheduled_event?.name || "Unknown",
  });
}

// Webhook handler
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    if (body.event === "invitee.created" && body.payload) {
      await processMeeting(body.payload);
      await deletePakistaniMeetings();
    }
    return NextResponse.json({ message: "Webhook processed successfully" });
  } catch {
    return NextResponse.json({ message: "Error processing webhook" }, { status: 500 });
  }
}
