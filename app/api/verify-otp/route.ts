import { serverClient } from "@/sanity/lib/sanity/serverClient";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
  try {
    const { email, otp } = await req.json(); // Expecting email and OTP here

    console.log("Received email:", email);
    console.log("Received OTP:", otp);

    if (!email || !otp) {
      return NextResponse.json({ success: false, message: "Email and OTP are required." }, { status: 400 });
    }

    // Fetch user document from Sanity by email
    const user = await serverClient.fetch(`*[_type == "user" && email == $email][0]`, { email });

    if (!user) {
      return NextResponse.json({ success: false, message: "User not found." }, { status: 404 });
    }

    const { otp: storedOtp, otpExpiration } = user;

    console.log(`Stored OTP for ${email}: ${storedOtp}`);
    console.log(`OTP Expiration for ${email}: ${otpExpiration}`);

    if (!storedOtp || !otpExpiration) {
      return NextResponse.json({ success: false, message: "OTP expired or invalid." }, { status: 400 });
    }

    // Check if OTP has expired
    const currentTime = new Date();
    if (new Date(otpExpiration) < currentTime) {
      return NextResponse.json({ success: false, message: "OTP has expired." }, { status: 400 });
    }

    // Verify OTP
    if (storedOtp !== otp) {
      return NextResponse.json({ success: false, message: "Invalid OTP." }, { status: 400 });
    }

    // OTP is correct, remove it from the Sanity document
    await serverClient.patch(user._id).set({ otp: null, otpExpiration: null }).commit();

    console.log(`OTP for ${email} verified successfully and removed from Sanity.`);

    return NextResponse.json({ success: true, message: "OTP verified successfully." });
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return NextResponse.json({ success: false, message: "Failed to verify OTP." }, { status: 500 });
  }
}
