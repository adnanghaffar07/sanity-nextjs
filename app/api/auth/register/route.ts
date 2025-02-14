import { NextResponse } from "next/server";
import jwt from "jsonwebtoken"; // Import JWT
import { client } from "@/sanity/lib/client";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // Check if user already exists
  const existingUser = await client.fetch(`*[_type == "user" && email == $email][0]`, { email });

  if (existingUser) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }

  // Create a new user with the provided email and password
  const newUser = await client.create({
    _type: "user",
    email,
    password, // Store plain password
  });

  // Generate a JWT token after user creation
  const token = jwt.sign({ email }, process.env.JWT_SECRET!, { expiresIn: "30d" });

  // Return the success response with token
  return NextResponse.json({ success: true, user: newUser, token });
}
