// /app/api/delete-fbmeta-spam/route.ts
import { NextResponse } from 'next/server';
import { serverClient } from '@/sanity/lib/sanity/serverClient';

const spamEmails = [
  "harshror1@icloud.com",
  "Adel_hyey@yahoo.com",
  "saintinal.lj@mail.com",
  "Timeall546@gnqil.cim",
];

export async function DELETE() {
  try {
    // Step 1: Fetch all fbMetaLead documents with matching emails
    const query = `*[_type == "fbMetaLead" && email in $emails]{_id, email}`;
    const leadsToDelete = await serverClient.fetch(query, {
      emails: spamEmails,
    });

    if (leadsToDelete.length === 0) {
      return NextResponse.json({ message: 'No matching emails found.' });
    }

    // Step 2: Delete each matching document
    const deletionPromises = leadsToDelete.map((lead: { _id: string }) =>
      serverClient.delete(lead._id)
    );
    await Promise.all(deletionPromises);

    return NextResponse.json({
      message: `Deleted ${leadsToDelete.length} leads.`,
      deletedEmails: leadsToDelete.map((l:any) => l.email),
    });
  } catch (error) {
    console.error("Error deleting leads:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
