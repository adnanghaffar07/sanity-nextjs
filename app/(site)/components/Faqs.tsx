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
    <ul className="mt-10 flex flex-col gap-4">
      {data &&
        data.map((faq: any) => {
          return (
            <li key={faq._id}>
              <details className="group">
                <summary className="flex justify-between items-center flex-grow">
                  <div className="w-11/12 text-base">
                    <span className="px-6 py-7 rounded-xl bg-[#1D92FB] bg-opacity-80 max-md:px-5 max-md:max-w-full gap-3 text-white font-normal marker:content-none hover:cursor-pointer justify-between text-base md:text-lg xl:text-xl flex flex-grow">
                      {faq.title}
                    </span>
                  </div>

                  <div className="w-1/12 justify-center align-center flex hover:cursor-pointer">
                    <svg
                      className="block group-open:hidden"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.8704 13.2H13.3104V20.96H8.03043V13.2H0.47043V8.32H8.03043V0.56H13.3104V8.32H20.8704V13.2Z"
                        fill="#002244"
                      />
                    </svg>

                    <svg
                      className="hidden group-open:block"
                      width="17"
                      height="6"
                      viewBox="0 0 17 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.9904 0.36V5.08H0.0304298V0.36H16.9904Z"
                        fill="#002244"
                      />
                    </svg>
                  </div>
                </summary>
                <article className="px-4 py-4">
                  <div className="w-11/12 text-xs sm:text-base">
                    <p className="mb-2">{faq.content}</p>
                  </div>
                </article>
              </details>
            </li>
          );
        })}
    </ul>
  );
};
export default Faqs;
