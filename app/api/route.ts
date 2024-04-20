import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "This is for testing purpose to check working of APIs",
  });
}
