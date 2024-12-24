// app/api/contact/submit/route.ts
import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
  try {
    const { name, email, contact_number, looking, message, recaptcha_value, page_name } = await req.json();

    // Verify the ReCAPTCHA response with Google
    if (!recaptcha_value) {
      return NextResponse.json({ message: 'ReCAPTCHA verification failed.' }, { status: 400 });
    }

    // Create a new form submission document in Sanity
    const result = await client.create({
      _type: 'contactForm',
      name,
      contact_number,
      email,
      looking,
      message,
      recaptcha_value,
      page_name,
      submitted_at: new Date().toISOString(),
    });

    return NextResponse.json({ message: 'Form submitted successfully', result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error submitting form', error }, { status: 500 });
  }
}
