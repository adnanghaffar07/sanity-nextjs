import { submitToGoogle } from "@/lib/googleIndexing";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    console.log("Received webhook payload:", data);
    const baseUrl = "https://codeautomation.ai";
    let url: string = "";

    if (data._type === "portfolio") {
      // Ensure portfolio documents have both slug and pageType.
      if (!data.slug) {
        return NextResponse.json({ error: "Missing slug for portfolio document" }, { status: 400 });
      }
      if (!data.pageType) {
        return NextResponse.json({ error: "Missing pageType for portfolio document" }, { status: 400 });
      }
      // Build URL based on portfolio pageType
      switch (data.pageType) {
        case "caseStudy":
          url = `${baseUrl}/case-studies/${data.slug}`;
          break;
        case "valueBlueprint":
          url = `${baseUrl}/value-blueprints/${data.slug}`;
          break;
        case "blogs":
          url = `${baseUrl}/blogs/${data.slug}`;
          break;
        default:
          // Fallback if an unexpected pageType is provided.
          url = `${baseUrl}/${data.slug}`;
          break;
      }
    } else if (data._type === "logicalServices") {
      // For logicalServices, use the provided urlPath.
      if (!data.urlPath) {
        return NextResponse.json({ error: "Missing urlPath for logicalServices document" }, { status: 400 });
      }
      // If the urlPath does not start with a slash, add it.
      url = `${baseUrl}/services${data.urlPath.startsWith("/") ? data.urlPath : `/${data.urlPath}`}`;
    } else if (data.url) {
      // Allow direct URL submissions.
      url = data.url;
    } else {
      return NextResponse.json({ error: "Unsupported document type or missing URL data" }, { status: 400 });
    }

    console.log("Submitting URL for indexing:", url);
    const result = await submitToGoogle(url);
    return NextResponse.json({ success: true, result }, { status: 200 });
    
  } catch (error) {
    console.error("Error submitting URL:", error);
    return NextResponse.json({ error: "Failed to submit URL for indexing" }, { status: 500 });
  }
}
