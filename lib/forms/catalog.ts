// Every form whose submissions are stored as one
// "Form Submission" document type in Sanity. Shared by the website, the API
// and Sanity Studio, so it must stay free of server-only imports.

export const FORMS = {
  // Website forms
  "hero-form": { title: "Hero form (home & service pages)", audience: "website" },
  // The same form appears next to the booking calendar (footer) and on the home page.
  "contact-form": { title: "Contact form (footer & home page)", audience: "website" },
  "greeting-popup": { title: "Greeting popup", audience: "website" },
  "contact-page": { title: "Contact page", audience: "website" },
  "marketing-audit": { title: "Marketing automation audit", audience: "website" },
  "mobile-quote": { title: "Mobile app: free quote", audience: "website" },
  "mobile-consultation": { title: "Mobile app: free consultation", audience: "website" },
  "mobile-service-hero": { title: "Mobile app: hero form", audience: "website" },
  "ai-revenue-engine": { title: "AI Revenue Engine", audience: "website" },
  "real-estate-audit": { title: "Real estate automation audit", audience: "website" },
  registration: { title: "Plan registration", audience: "website" },
  // Internal / webhooks
  // Entered by hand on the internal /meta-leads page
  "meta-lead-manual": { title: "Meta lead (entered manually)", audience: "facebook" },
  "facebook-lead": { title: "Facebook lead (from GoHighLevel)", audience: "facebook" },
} as const;

export type FormId = keyof typeof FORMS;

export const FORM_IDS = Object.keys(FORMS) as FormId[];

export const isFormId = (value: unknown): value is FormId =>
  typeof value === "string" && value in FORMS;

/**
 * Newsletter audiences stored as form submissions. The keys are the group names
 * already used on newsletter documents (they used to be document types), so old
 * newsletters keep working. Meetings ("calendlyMeeting") stay their own type.
 */
export const NEWSLETTER_AUDIENCES = {
  contactForm: "website",
  fbMetaLead: "facebook",
} as const;

export const formsInAudience = (audience: string): FormId[] =>
  FORM_IDS.filter((id) => FORMS[id].audience === audience);

/** Service interest categories, used to target blog-post emails. */
export const CLIENT_TYPES = [
  { title: "Website Development", value: "web" },
  { title: "Design", value: "design" },
  { title: "Search Engine Optimization", value: "seo" },
  { title: "Mobile App Development", value: "app" },
  { title: "Software Development", value: "software" },
  { title: "E-commerce Solutions", value: "ecommerce" },
  { title: "Shopify Development", value: "shopify" },
  { title: "AI & Automation", value: "ai" },
  { title: "ML & Automation", value: "ml" },
  { title: "Digital Marketing", value: "marketing" },
  { title: "Other", value: "other" },
] as const;

export type ClientType = (typeof CLIENT_TYPES)[number]["value"];

const CLIENT_TYPE_KEYWORDS: [string, ClientType][] = [
  ["mobile", "app"],
  ["android", "app"],
  ["ios", "app"],
  ["app", "app"],
  ["shopify", "shopify"],
  ["ecommerce", "ecommerce"],
  ["e-commerce", "ecommerce"],
  ["seo", "seo"],
  ["marketing", "marketing"],
  ["machine learning", "ml"],
  ["ai", "ai"],
  ["automation", "ai"],
  ["design", "design"],
  ["logo", "design"],
  ["branding", "design"],
  ["software", "software"],
  ["web", "web"],
];

/** Best guess of the service someone is interested in, from what they wrote. */
export function detectClientType(...texts: (string | undefined)[]): ClientType {
  const text = texts.filter(Boolean).join(" ").toLowerCase();
  for (const [keyword, type] of CLIENT_TYPE_KEYWORDS) {
    if (new RegExp(`\\b${keyword}\\b`).test(text)) return type;
  }
  return "other";
}
