import Image from "next/image";
import type { HomeFaq } from "@/sanity/lib/home";
import ellipse from "@/public/ellipse-2.png";

// FAQ accordion (content from the Home Page document). Uses native
// <details>/<summary>, so it works without JavaScript.
export default function FaqSection({ faqs }: { faqs: HomeFaq[] }) {
  if (faqs.length === 0) return null;

  return (
    <div className="flex gap-5 max-md:flex-wrap lg:py-16 py-8 w-full mx-auto relative">
      <Image src={ellipse} alt="" className="w-[260px] absolute right-0 top-[30px]" />
      <div className="flex flex-col flex-1 text-xl relative z-10 xl:container xl:mx-auto">
        <section>
          <div className="max-w-7xl mx-auto px-6 py-10 md:py-20 lg:grid lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <div className="sticky top-10">
                <h2 className="text-4xl font-bold tracking-tight text-gray-900">Frequently Asked Questions</h2>
                <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                  Everything you need to know. Can’t find the answer you’re looking for? Feel free to reach out to our
                  support team.
                </p>
                <div className="mt-10 flex gap-10">
                  <div>
                    <p className="text-3xl font-semibold text-gray-900">{faqs.length}+</p>
                    <p className="text-sm text-gray-500 mt-1">Questions answered</p>
                  </div>
                  <div>
                    <p className="text-3xl font-semibold text-gray-900">24/7</p>
                    <p className="text-sm text-gray-500 mt-1">Support available</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-14 lg:mt-0 lg:col-span-7">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details
                    key={faq._key}
                    className="group border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    <summary className="flex items-center justify-between cursor-pointer px-6 py-5 list-none">
                      <div className="flex items-start gap-4">
                        <span className="text-sm font-medium text-blue-600" aria-hidden>
                          {(index + 1).toString().padStart(2, "0")}
                        </span>
                        <h3 className="text-base font-medium text-gray-900">{faq.question}</h3>
                      </div>
                      <svg
                        className="w-5 h-5 text-gray-400 transition-transform duration-300 group-open:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        aria-hidden
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-6 pl-12">
                      <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
