import React from "react";
import { client } from "@/sanity/lib/client";

async function getData() {
  const query = `*[_type == 'faq'] | order(_updatedAt desc)`;
  try {
    const data = await client.fetch(query);
    return data || [];
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    return [];
  }
}

const Faqs = async () => {
  const faqs = await getData();

  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-20 lg:grid lg:grid-cols-12 lg:gap-12">
        
        {/* Left Section */}
        <div className="lg:col-span-5">
          <div className="sticky top-10">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              Frequently Asked Questions
            </h2>

            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Everything you need to know. Can’t find the answer you’re looking for? 
              Feel free to reach out to our support team.
            </p>

            {/* Stats */}
            <div className="mt-10 flex gap-10">
              <div>
                <p className="text-3xl font-semibold text-gray-900">
                  {faqs.length}+
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Questions answered
                </p>
              </div>

              <div>
                <p className="text-3xl font-semibold text-gray-900">24/7</p>
                <p className="text-sm text-gray-500 mt-1">
                  Support available
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="mt-14 lg:mt-0 lg:col-span-7">
          <div className="space-y-4">
            {faqs.map((faq: any, index: number) => (
              <details
                key={faq._id}
                className="group border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-200"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-5 list-none">
                  
                  <div className="flex items-start gap-4">
                    <span className="text-sm font-medium text-blue-600">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>

                    <h3 className="text-base font-medium text-gray-900">
                      {faq.title}
                    </h3>
                  </div>

                  <svg
                    className="w-5 h-5 text-gray-400 transition-transform duration-300 group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>

                <div className="px-6 pb-6 pl-12">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {faq.content}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;