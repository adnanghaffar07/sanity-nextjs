// GoHighLevel (LeadConnector) contact sync.
//
// v2 (preferred): set GHL_PRIVATE_TOKEN (Settings → Private Integrations, with
// contacts + locations/customFields scopes) and GHL_LOCATION_ID. Contacts are
// upserted (matched on email/phone), tags are added, values go into custom
// fields that exist in the location, and a note with the full submission is
// added to the contact.
// v1 (fallback, deprecated by GHL): GHL_API_KEY only, as before.

export interface CrmLead {
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
  companyName?: string;
  source: string;
  tags: string[];
  /** Keyed by GHL custom-field key without the "contact." prefix, e.g. page_url. */
  customFields: Record<string, string | undefined>;
  /** Full submission, added as a note on the contact. */
  note: string;
}

export interface CrmResult {
  status: "synced" | "failed" | "skipped";
  contactId?: string;
  error?: string;
}

const V2 = "https://services.leadconnectorhq.com";
const V1 = "https://rest.gohighlevel.com/v1";
const V2_VERSION = "2021-07-28";
const FIELD_CACHE_MS = 10 * 60 * 1000;

const clean = (fields: Record<string, string | undefined>) =>
  Object.fromEntries(Object.entries(fields).filter(([, v]) => v != null && v !== "")) as Record<string, string>;

// The parts of GoHighLevel responses this file reads.
type GhlResponse = { id?: string; contact?: { id?: string }; customFields?: { id?: string; fieldKey?: string }[] };

async function request(url: string, init: RequestInit & { headers: Record<string, string> }): Promise<GhlResponse> {
  const response = await fetch(url, { ...init, cache: "no-store" });
  const body = await response.json().catch(() => ({}));
  if (!response.ok) {
    const detail = (body as { message?: unknown })?.message ?? response.statusText;
    throw new Error(`GHL ${response.status}: ${typeof detail === "string" ? detail : JSON.stringify(detail)}`);
  }
  return body as GhlResponse;
}

// ── v2 ────────────────────────────────────────────────────────────────────────

let fieldCache: { at: number; ids: Map<string, string> } | null = null;

/** Map of custom-field key (without "contact.") → field id for this location. */
async function customFieldIds(headers: Record<string, string>, locationId: string) {
  if (fieldCache && Date.now() - fieldCache.at < FIELD_CACHE_MS) return fieldCache.ids;
  const body = await request(`${V2}/locations/${locationId}/customFields?model=contact`, { method: "GET", headers });
  const ids = new Map<string, string>();
  for (const field of body.customFields ?? []) {
    const key = String(field.fieldKey ?? "").replace(/^contact\./, "");
    if (key && field.id) ids.set(key, field.id);
  }
  fieldCache = { at: Date.now(), ids };
  return ids;
}

async function syncV2(lead: CrmLead, token: string, locationId: string): Promise<CrmResult> {
  const headers = {
    Authorization: `Bearer ${token}`,
    Version: V2_VERSION,
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  // Custom fields are optional extras: if the lookup fails, the note still has everything.
  let customFields: { id: string; field_value: string }[] = [];
  try {
    const ids = await customFieldIds(headers, locationId);
    customFields = Object.entries(clean(lead.customFields))
      .filter(([key]) => ids.has(key))
      .map(([key, value]) => ({ id: ids.get(key)!, field_value: value }));
  } catch (error) {
    console.warn("GHL custom field lookup failed:", error);
  }

  const contact = clean({
    locationId,
    firstName: lead.firstName,
    lastName: lead.lastName,
    email: lead.email,
    phone: lead.phone,
    companyName: lead.companyName,
    source: lead.source,
  });
  const upsert = await request(`${V2}/contacts/upsert`, {
    method: "POST",
    headers,
    body: JSON.stringify(customFields.length ? { ...contact, customFields } : contact),
  });

  const contactId: string | undefined = upsert.contact?.id;
  if (!contactId) return { status: "failed", error: "GHL upsert returned no contact id" };

  // Tags and the note are added separately so existing tags/notes are kept.
  const extras = await Promise.allSettled([
    lead.tags.length
      ? request(`${V2}/contacts/${contactId}/tags`, { method: "POST", headers, body: JSON.stringify({ tags: lead.tags }) })
      : Promise.resolve(null),
    request(`${V2}/contacts/${contactId}/notes`, { method: "POST", headers, body: JSON.stringify({ body: lead.note }) }),
  ]);
  const extraErrors = extras.flatMap((r) => (r.status === "rejected" ? [String(r.reason)] : []));
  if (extraErrors.length) console.warn("GHL tags/note failed:", extraErrors);

  return { status: "synced", contactId, error: extraErrors.join("; ") || undefined };
}

// ── v1 (fallback) ─────────────────────────────────────────────────────────────

async function syncV1(lead: CrmLead, apiKey: string): Promise<CrmResult> {
  const headers = { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" };
  const created = await request(`${V1}/contacts/`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      ...clean({
        firstName: lead.firstName,
        lastName: lead.lastName,
        email: lead.email,
        phone: lead.phone,
        companyName: lead.companyName,
        source: lead.source,
      }),
      tags: lead.tags,
      customField: clean(lead.customFields),
    }),
  });
  const contactId: string | undefined = created.contact?.id ?? created.id;
  if (contactId) {
    await request(`${V1}/contacts/${contactId}/notes/`, {
      method: "POST",
      headers,
      body: JSON.stringify({ body: lead.note }),
    }).catch((error) => console.warn("GHL v1 note failed:", error));
  }
  return { status: "synced", contactId };
}

export async function syncLeadToCrm(lead: CrmLead): Promise<CrmResult> {
  const { GHL_PRIVATE_TOKEN, GHL_LOCATION_ID, GHL_API_KEY } = process.env;
  try {
    if (GHL_PRIVATE_TOKEN && GHL_LOCATION_ID) return await syncV2(lead, GHL_PRIVATE_TOKEN, GHL_LOCATION_ID);
    if (GHL_API_KEY) return await syncV1(lead, GHL_API_KEY);
    return { status: "skipped", error: "No GoHighLevel credentials configured" };
  } catch (error) {
    console.error("GoHighLevel sync failed:", error);
    return { status: "failed", error: error instanceof Error ? error.message : String(error) };
  }
}
