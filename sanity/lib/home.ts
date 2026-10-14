// Home page content from the "Home Page" document (testimonials and FAQs).
// Fetched on the server and cached; publishing in Studio refreshes it through
// the /api/revalidate webhook (tag "homePage"), otherwise after 5 minutes.

import type { Image } from "sanity";
import { client } from "./client";

export interface HomeTestimonial {
  _key: string;
  name: string;
  role?: string;
  quote: string;
  photo?: Image & { alt?: string };
}

export interface HomeFaq {
  _key: string;
  question: string;
  answer: string;
}

export interface HomePageContent {
  testimonials: HomeTestimonial[];
  faqs: HomeFaq[];
}

const HOME_PAGE_QUERY = `*[_id == "homePage"][0]{
  "testimonials": testimonials[defined(name) && defined(quote)]{ _key, name, role, quote, photo },
  "faqs": faqs[defined(question) && defined(answer)]{ _key, question, answer }
}`;

export const HOME_REVALIDATE_SECONDS = 300;

export async function getHomePageContent(): Promise<HomePageContent> {
  try {
    const data = await client.fetch<Partial<HomePageContent> | null>(
      HOME_PAGE_QUERY,
      {},
      { next: { revalidate: HOME_REVALIDATE_SECONDS, tags: ["homePage"] } }
    );
    return { testimonials: data?.testimonials ?? [], faqs: data?.faqs ?? [] };
  } catch (error) {
    console.error("Loading the Home Page content failed:", error);
    return { testimonials: [], faqs: [] };
  }
}
