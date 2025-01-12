import { client } from "@/sanity/lib/client";
import { NextRequest, NextResponse } from "next/server";

// Function to save data to Sanity
async function saveToSanity(meetingData: any) {
  const {
    name = "Unknown",
    email = "Unknown",
    start_time = null,
    end_time = null,
    scheduled_event = {},
    questions_and_answers = [],
  } = meetingData;

  const notes = questions_and_answers.map((q: any) => q.answer);

  const meetingDocument = {
    _type: "calendlyMeeting",
    name,
    email,
    meetingStart: scheduled_event?.start_time,
    meetingEnd: scheduled_event?.end_time,
    notes,
    eventName: scheduled_event?.name || "Unknown",
  };

  try {
    const response = await client.create(meetingDocument);
    console.log("Saved to Sanity:", response);
  } catch (error) {
    console.error("Error saving to Sanity:", error);
    throw error;
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("Received payload:", body);

    if (body.event === "invitee.created") {
      const { payload } = body;

      if (!payload) {
        console.error("Payload is missing");
        return NextResponse.json(
          { message: "Invalid payload" },
          { status: 400 }
        );
      }

      await saveToSanity(payload);
    }

    return NextResponse.json({ message: "Webhook processed" });
  } catch (error: any) {
    console.error("Webhook error:", error.message);
    return NextResponse.json(
      { message: "Error processing webhook", error: error.message },
      { status: 500 }
    );
  }
}
