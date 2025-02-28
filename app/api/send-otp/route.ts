import { client } from "@/sanity/lib/client";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your app password
    },
});

export async function POST(req: NextRequest) {
    try {
        const { email } = await req.json(); // Expecting email here

        if (!email) {
            return NextResponse.json({ success: false, message: "Email is required." }, { status: 400 });
        }

        // Generate OTP and set expiration time
        const otp = Math.floor(1000 + Math.random() * 9000).toString();
        const expirationTime = Date.now() + 5 * 60 * 1000; // OTP expires in 5 minutes

        // Check if a document exists for the email
        const existingUser = await client.fetch('*[_type == "user" && email == $email]', { email });

        if (existingUser.length > 0) {
            // Update the existing user's OTP and expiration time
            await client.patch(existingUser[0]._id)
                .set({
                    otp: otp,
                    otpExpiration: expirationTime
                })
                .commit();
        } else {
            // Create a new document if no user exists
            await client.create({
                _type: 'user',
                email: email,
                otp: otp,
                otpExpiration: expirationTime
            });
        }

        // Send OTP via Email
        await transporter.sendMail({
            from: `"CODEAUTOMATION" <${process.env.EMAIL_USER}>`, // Display "CODEAUTOMATION" as the sender
            to: email, // Send OTP to the provided email address
            subject: "Your OTP Code",
            text: `Your OTP code is: ${otp}. It will expire in 5 minutes.`,
        });

        return NextResponse.json({ success: true, message: "OTP sent successfully to email." });
    } catch (error) {
        console.error("Error sending OTP:", error);
        return NextResponse.json({ success: false, message: "Failed to send OTP." }, { status: 500 });
    }
}
