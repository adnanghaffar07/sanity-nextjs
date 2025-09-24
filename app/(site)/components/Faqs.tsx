import React from "react";
import { client } from "@/sanity/lib/client";

async function getData() {
  const query = `*[_type == 'faq'] | order(_updatedAt desc)`;
  try {
    const fetchData = await client.fetch(query);
    return fetchData || [];
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

const Faqs = async () => {
  const data = await getData();

  return (
    <ul className="mt-10 flex flex-col mx-auto gap-4 w-full max-w-6xl">
      {data &&
        data.map((faq: any) => {
          return (
            <li key={faq._id}>
              <details className="group border border-gray-200 rounded-xl overflow-hidden">
                {/* Always same height for the summary */}
                <summary className="flex justify-between items-center cursor-pointer px-6 py-5 bg-[#1D92FB] bg-opacity-80 text-white text-base md:text-lg xl:text-xl rounded-xl">
                  <span>{faq.title}</span>

                  {/* Chevron that rotates */}
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>

                {/* Animated dropdown */}
                <div className="overflow-hidden transition-[max-height] duration-500 ease-in-out max-h-0 group-open:max-h-96">
                  <article className="px-6 py-4 bg-white text-gray-700 text-sm sm:text-base">
                    <p>{faq.content}</p>
                  </article>
                </div>
              </details>
            </li>
          );
        })}
    </ul>
  );
};

export default Faqs;
