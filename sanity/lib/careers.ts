// Open job openings for /career. Fetched on the server and cached; publishing
// in Studio refreshes it through the /api/revalidate webhook (tag "careers"),
// otherwise after 5 minutes.

import { client } from "./client";
import { CAREERS_TYPE, DEFAULT_JOB_LOCATION } from "@/sanity/schemas/careers-constants";

export interface JobOpening {
  _id: string;
  title: string;
  description?: string;
  location: string;
}

const JOB_OPENINGS_QUERY = `*[_type == $type && defined(jobTitleBaner)] | order(_createdAt asc){
  _id,
  "title": jobTitleBaner,
  "description": descJobTitle,
  "location": coalesce(location, $defaultLocation)
}`;

export async function getJobOpenings(): Promise<JobOpening[]> {
  try {
    const jobs = await client.fetch<JobOpening[] | null>(
      JOB_OPENINGS_QUERY,
      { type: CAREERS_TYPE, defaultLocation: DEFAULT_JOB_LOCATION },
      { next: { revalidate: 300, tags: [CAREERS_TYPE] } }
    );
    return jobs ?? [];
  } catch (error) {
    console.error("Loading job openings failed:", error);
    return [];
  }
}
