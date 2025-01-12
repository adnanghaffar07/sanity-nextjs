import { client } from "@/sanity/lib/client";
import { NextRequest, NextResponse } from "next/server";

// Function to save meeting to Sanity
async function saveToSanity(meetingData: any) {
  const { name, email, notes, start_time, end_time } = meetingData;

  const meetingDocument = {
    _type: "calendlyMeeting",
    name,
    email,
    notes: notes ? [notes] : [],
    meetingStart: start_time,
    meetingEnd: end_time,
  };

  try {
    const response = await client.create(meetingDocument);
    console.log("Meeting saved to Sanity:", response);
  } catch (error) {
    console.error("Error saving meeting to Sanity:", error);
  }
}

// Webhook handler
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    console.log("Webhook Payload:", body);

    // Check if this is an invitee.created event
    if (body.event === "invitee.created") {
      const meetingData = {
        name: body.payload.invitee.name,
        email: body.payload.invitee.email,
        notes: body.payload.questions_and_answers
          ?.map((qa: any) => qa.answer)
          .join(", "),
        start_time: body.payload.scheduled_event.start_time, // Correct field access for start_time
        end_time: body.payload.scheduled_event.end_time,     // Correct field access for end_time
      };

      // Save meeting data to Sanity
      await saveToSanity(meetingData);
    } else {
      console.log("Unhandled event type:", body.event);
    }

    return NextResponse.json({ message: "Event processed successfully" });
  } catch (error: any) {
    console.error("Error processing webhook:", error);
    return NextResponse.json(
      { message: "Error processing webhook", error: error.message },
      { status: 500 }
    );
  }
}
