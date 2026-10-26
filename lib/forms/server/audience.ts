// Who receives blog-post emails, and unsubscribing.
// Recipients come from website form submissions ("formSubmission").

import { serverClient } from "@/sanity/lib/server-client";
import { formsInAudience } from "@/lib/forms/catalog";

type Recipient = { name?: string; email: string };

function dedupe(recipients: Recipient[]): Recipient[] {
  const byEmail = new Map<string, Recipient>();
  for (const recipient of recipients) {
    const key = recipient.email?.trim().toLowerCase();
    if (key && !byEmail.has(key)) byEmail.set(key, { ...recipient, email: recipient.email.trim() });
  }
  return [...byEmail.values()];
}

/**
 * Recipients of a blog-post email: people who filled in a website form,
 * interested in one of the given services.
 */
export async function recipientsForServices(clientTypes: string[]): Promise<Recipient[]> {
  const recipients = await serverClient.fetch<Recipient[]>(
    `*[isUnsubscribed != true && defined(email) && clientType in $clientTypes && (
      _type == "formSubmission" && form in $forms
    )]{ name, email }`,
    { clientTypes, forms: formsInAudience("website") }
  );
  return dedupe(recipients);
}

/** Marks every submission with this email (any letter case) as unsubscribed. Returns how many. */
export async function unsubscribe(email: string): Promise<number> {
  const ids = await serverClient.fetch<string[]>(
    `*[_type == "formSubmission" && lower(email) == lower($email)]._id`,
    { email: email.trim() }
  );
  if (!ids.length) return 0;
  const transaction = serverClient.transaction();
  ids.forEach((id) => transaction.patch(id, (patch) => patch.set({ isUnsubscribed: true })));
  await transaction.commit();
  return ids.length;
}
