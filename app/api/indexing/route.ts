import { submitToGoogle } from "@/lib/googleIndexing";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    console.log("Received webhook payload:", data);
    const baseUrl = "https://codeautomation.ai";
    let url: string = "";

    if (["blogPost", "caseStudy", "valueBlueprint"].includes(data._type)) {
      // The document type decides the path.
      if (!data.slug) {
        return NextResponse.json({ error: `Missing slug for ${data._type} document` }, { status: 400 });
      }
      const section = { blogPost: "blogs", caseStudy: "case-studies", valueBlueprint: "value-blueprints" }[data._type as string];
      url = `${baseUrl}/${section}/${data.slug}`;
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
