// Updates the custom fields of the GoHighLevel template contact used in email
// campaigns. Callers must send "Authorization: Bearer <GHL_SECRET_TOKEN>".
import { NextResponse, type NextRequest } from "next/server";
import { hasBearerSecret } from "@/lib/security/request";

const GHL_BASE_URL = "https://rest.gohighlevel.com/v1";
// The GoHighLevel contact whose custom fields feed the campaign emails.
const TEMPLATE_CONTACT_ID = "EApVJokLBBwpbKqFOMCf";

// Request body key → GoHighLevel custom field ID.
const CUSTOM_FIELDS: Record<string, string> = {
  email_subject: "fsuDLj5QW1XWFuiJuEDN",
  intro_text: "mBI8dlptFYkDyFZg3gFU",
  offer_price: "fXmH2I28XHMKp54omGvm",
  offer_details: "iDmbMBAz6EbdVrdTGH2h",
  content_heading_1: "fEF6Ikvzboz8qiZmczuZ",
  content_description_1: "iJroViCFHMnWZBeDelMc",
  content_heading_2: "axmWypGyDiuOjtMio8Rj",
  content_description_2: "wYmuzjXpbW2nVZaC7O0z",
  project_1: "2lnNLOuM1UahrjMtoncf",
  project_2: "wrrVv7FfjSVsgkadlg80",
  project_3: "vJjXtyDh5dkEiQzGhY5T",
};

export async function POST(req: NextRequest) {
  if (!hasBearerSecret(req, "GHL_SECRET_TOKEN")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const values = (await req.json()) as Record<string, unknown>;
    const res = await fetch(`${GHL_BASE_URL}/contacts/${TEMPLATE_CONTACT_ID}`, {
      method: "PUT",
      headers: { Authorization: `Bearer ${process.env.GHL_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        email: values.email,
        customField: Object.entries(CUSTOM_FIELDS).map(([key, id]) => ({ id, value: values[key] || "" })),
      }),
    });

    if (!res.ok) console.error("GoHighLevel contact update failed:", res.status, await res.text());
    // Always 200 with "updated": the caller reads that flag, as before.
    return NextResponse.json({ status: res.ok ? "success" : "error", updated: res.ok, contactId: TEMPLATE_CONTACT_ID });
  } catch (error) {
    console.error("Updating GoHighLevel values failed:", error);
    return NextResponse.json({ error: "Failed to update contact" }, { status: 500 });
  }
}
