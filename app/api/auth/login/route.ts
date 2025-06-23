import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { serverClient } from "@/sanity/lib/sanity/serverClient";

export async function POST(req: Request) {
  const { email, password } = await req.json();
  
  // Fetch the user by email
  const user = await serverClient.fetch(`*[_type == "user" && email == $email][0]`, { email });

  // If user is not found, return an error
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  // Generate a JWT token
  const token = jwt.sign({ email }, process.env.JWT_SECRET!, { expiresIn: "30d" });

  // Optionally, update user data with the token
  await serverClient.patch(user._id).set({ token }).commit();

  // Prepare the response and set the token as a cookie
  const response = NextResponse.json({ success: true });
  response.cookies.set("authToken", token, { httpOnly: true, secure: true, maxAge: 30 * 24 * 60 * 60 });

  return response;
}
