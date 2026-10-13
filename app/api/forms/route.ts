// Single endpoint for every website form. See lib/forms/server/process.ts.

import { NextResponse } from "next/server";
import { handleFormRequest } from "@/lib/forms/server/process";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;
  const { status, body: response } = await handleFormRequest(body, ip);
  return NextResponse.json(response, { status });
}
