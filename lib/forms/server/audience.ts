// Who receives newsletters and blog-post emails, and unsubscribing.
// Form submissions live in "formSubmission"; meeting bookings in "calendlyMeeting".

import { serverClient } from "@/sanity/lib/sanity/serverClient";
import { NEWSLETTER_AUDIENCES, formsInAudience } from "../catalog";

type Recipient = { name?: string; email: string };

const FORM_AUDIENCE_GROUPS: Record<string, string> = NEWSLETTER_AUDIENCES;

function dedupe(recipients: Recipient[]): Recipient[] {
  const byEmail = new Map<string, Recipient>();
  for (const recipient of recipients) {
    const key = recipient.email?.trim().toLowerCase();
    if (key && !byEmail.has(key)) byEmail.set(key, { ...recipient, email: recipient.email.trim() });
  }
  return [...byEmail.values()];
}

/**
 * Recipients for the newsletter groups chosen in the content machine
 * ("contactForm" = website forms, "fbMetaLead" = Facebook / Meta leads,
 * "calendlyMeeting" = meeting bookings, "testing" = test list).
 */
export async function recipientsForGroups(groups: string[]): Promise<Recipient[]> {
  const forms = groups.flatMap((group) => (group in FORM_AUDIENCE_GROUPS ? formsInAudience(FORM_AUDIENCE_GROUPS[group]) : []));
  const otherTypes = groups.filter((group) => group === "calendlyMeeting" || group === "testing");
  if (!forms.length && !otherTypes.length) return [];

  const recipients = await serverClient.fetch<Recipient[]>(
    `*[isUnsubscribed != true && defined(email) && (
      (_type == "formSubmission" && form in $forms) || _type in $otherTypes
    )]{ name, email }`,
    { forms, otherTypes }
  );
  return dedupe(recipients);
}

/**
 * Recipients of a blog-post email: people who filled in a website form or
 * booked a meeting, interested in one of the given services.
 */
export async function recipientsForServices(clientTypes: string[]): Promise<Recipient[]> {
  const recipients = await serverClient.fetch<Recipient[]>(
    `*[isUnsubscribed != true && defined(email) && clientType in $clientTypes && (
      (_type == "formSubmission" && form in $forms) || _type == "calendlyMeeting"
    )]{ name, email }`,
    { clientTypes, forms: formsInAudience("website") }
  );
  return dedupe(recipients);
}

/** Marks every submission and booking with this email (any letter case) as unsubscribed. Returns how many. */
export async function unsubscribe(email: string): Promise<number> {
  const ids = await serverClient.fetch<string[]>(
    `*[_type in ["formSubmission", "calendlyMeeting"] && lower(email) == lower($email)]._id`,
    { email: email.trim() }
  );
  if (!ids.length) return 0;
  const transaction = serverClient.transaction();
  ids.forEach((id) => transaction.patch(id, (patch) => patch.set({ isUnsubscribed: true })));
  await transaction.commit();
  return ids.length;
}
