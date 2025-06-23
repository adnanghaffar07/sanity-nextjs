import { serverClient } from "@/sanity/lib/sanity/serverClient";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, contact_number, looking, message, recaptcha_value } = await req.json();

    // ✅ ReCAPTCHA check
    if (!recaptcha_value) {
      return NextResponse.json({ message: "ReCAPTCHA verification failed." }, { status: 400 });
    }

    // ✅ Normalize contact number and block +92 / +91 / 92 / 91
    const cleanedNumber = contact_number.replace(/\s|-/g, "").trim(); // remove spaces/dashes

    const isBlockedCountry =
      cleanedNumber.startsWith("+92") ||
      cleanedNumber.startsWith("92") ||
      cleanedNumber.startsWith("+91") ||
      cleanedNumber.startsWith("91");

    if (isBlockedCountry) {
      return NextResponse.json({
        message: "Form submitted successfully, but data will not be stored due to restricted region.",
      }, { status: 200 });
    }

    // ✅ Block job/internship spam
    const combinedText = `${looking} ${message}`.toLowerCase();
    if (combinedText.includes("job") || combinedText.includes("internship")) {
      return NextResponse.json({ message: "Submission ignored (job/internship detected)." }, { status: 200 });
    }

    // ✅ Service keyword → type mapping
    const serviceKeywordMap: Record<string, string> = {
      mobile: "app",
      android: "app",
      ios: "app",
      software: "software",
      web: "web",
      ecommerce: "ecommerce",
      shopify: "shopify",
      ai: "ai",
      ml: "ml",
      marketing: "marketing",
      seo: "seo",
      design: "design",
      logo: "design",
      branding: "design",
    };

    function detectClientType(text: string): string {
      const lowerText = text.toLowerCase();
      for (const keyword in serviceKeywordMap) {
        if (lowerText.includes(keyword)) {
          return serviceKeywordMap[keyword];
        }
      }
      return "Other";
    }

    const clientType = detectClientType(combinedText);

    // ✅ Save to Sanity
    const result = await serverClient.create({
      _type: "contactForm",
      name,
      contact_number,
      email,
      looking,
      message,
      clientType,
      submitted_at: new Date().toISOString(),
    });

    return NextResponse.json({ message: "Form submitted successfully", result }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ message: "Error submitting form", error }, { status: 500 });
  }
}
