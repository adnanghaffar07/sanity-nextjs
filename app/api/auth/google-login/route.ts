import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { OAuth2Client } from "google-auth-library"; // Correct import
import { serverClient } from "@/sanity/lib/sanity/serverClient";

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!;
const JWT_SECRET = process.env.JWT_SECRET!;

export async function POST(req: Request) {
  try {
    const { tokenId } = await req.json();

    if (!tokenId) {
      return NextResponse.json({ success: false, error: "No token provided" }, { status: 400 });
    }

    // Verify Google token
    const authClient = new OAuth2Client(GOOGLE_CLIENT_ID);
    const ticket = await authClient.verifyIdToken({
      idToken: tokenId,
      audience: GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    if (!payload) {
      return NextResponse.json({ success: false, error: "Google verification failed" }, { status: 401 });
    }

    const { email, name, picture, sub } = payload;

    // Check if the user exists in Sanity
    const query = `*[_type == "user" && email == $email][0]`;
    const existingUser = await serverClient.fetch(query, { email });

    let userId = existingUser?._id;


    if (!existingUser) {
      // Create new user in Sanity
      const newUser = {
        _type: "user",
        email,
        name,
        googleId: sub,
      };

      const createdUser = await serverClient.create(newUser);
      userId = createdUser._id;
    }

    // Generate JWT Token
    const authToken = jwt.sign({ userId, email }, JWT_SECRET, { expiresIn: "30d" });

    return NextResponse.json({ success: true, token: authToken });

  } catch (error) {
    console.error("Google Login Error:", error);
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
  }
}
