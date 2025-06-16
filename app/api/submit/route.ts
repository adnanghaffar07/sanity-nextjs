import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, phoneNumber, work, appType, recaptcha_value} = await req.json();

    // Check ReCAPTCHA
    if (!recaptcha_value) {
      return NextResponse.json({ message: "ReCAPTCHA verification failed." }, { status: 400 });
    }

    // Skip if phone number is from Pakistan
    if (phoneNumber && phoneNumber.startsWith("+92")) {
      return NextResponse.json({ message: "Form submitted successfully, but data will not be stored." }, { status: 200 });
    }

    // Check for job/internship spam
    const combinedText = `${work} ${appType}`.toLowerCase();
    if (combinedText.includes("job") || combinedText.includes("internship")) {
      return NextResponse.json({ message: "Submission ignored (job/internship detected)." }, { status: 200 });
    }

    // Keyword → Service map
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

    const result = await client.create({
      _type: "fbMetaLead",
      name,
      phoneNumber,
      email,
      work,
      appType,
      clientType,
      creationDate: new Date(),
    });

    return NextResponse.json({ message: "Form submitted successfully", result }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ message: "Error submitting form", error }, { status: 500 });
  }
}
