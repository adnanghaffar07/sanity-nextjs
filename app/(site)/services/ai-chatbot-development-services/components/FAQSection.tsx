import Link from "next/link";
import type { ReactNode } from "react";
import { Plus } from "lucide-react";

// `answer` is what renders on the page; `answerText` is the plain-text version
// used for the FAQPage structured data (must match the visible answer).
const FAQS: { question: string; answer: ReactNode; answerText: string }[] = [
  {
    question:
      "How much does it cost to build a custom AI chatbot for my business?",
    // TBD: starting price
    answerText:
      "The cost of AI chatbot development services depends on your use cases, channels, and integrations, starting at TBD for a focused chatbot. You get a fixed estimate after a free strategy call.",
    answer: null,
  },
  {
    question: "How long does it take to develop and launch an AI chatbot?",
    // TBD: both timelines
    answerText:
      "A focused chatbot typically goes live in TBD weeks, while complex multi-channel builds take TBD weeks. Both timelines include design, development, and testing with real customer questions.",
    answer: null,
  },
  {
    question:
      "What is the difference between a rule-based chatbot and an AI chatbot?",
    answerText:
      "A rule-based chatbot follows fixed scripts and breaks when questions are phrased unexpectedly. An AI chatbot understands intent and context and answers from your own content.",
    answer: null,
  },
  {
    question: "What is the difference between an AI chatbot and an AI agent?",
    answerText:
      "An AI chatbot handles conversations and simple tasks like bookings or order lookups. An AI agent runs multi-step workflows across several systems with less human direction.",
    answer: null,
  },
  {
    question: "What do I need to provide before chatbot development starts?",
    answerText:
      "Share your goals, your most common customer questions, and existing content like FAQs and policies. We'll also need access to the systems the chatbot will connect to.",
    answer: null,
  },
  {
    question: "How does your chatbot development process work step by step?",
    answerText:
      "We start with discovery, design the conversation flows, then build, integrate, and test with real customer questions. After launch, we monitor performance and keep refining answers.",
    answer: null,
  },
  {
    question: "Which AI model is best for a business chatbot?",
    answerText:
      "No single model suits every business, so we choose based on accuracy, speed, cost, and privacy needs. Our AI chatbot solutions aren't locked to one provider, so switching later is easy.",
    answer: null,
  },
  {
    question:
      "Can an AI chatbot integrate with HubSpot, Salesforce, or my existing CRM?",
    answerText:
      "Yes. Your chatbot can connect to HubSpot, Salesforce, Zoho, GoHighLevel, and other tools to create leads and book meetings. Our HubSpot integration team can align it with your pipelines.",
    answer: (
      <>
        Yes. Your chatbot can connect to HubSpot, Salesforce, Zoho,
        GoHighLevel, and other tools to create leads and book meetings. Our{" "}
        <Link
          href="/services/hubspot-crm-integration-services"
          className="font-medium text-[#1D92FB] underline underline-offset-2 hover:text-blue-700"
        >
          HubSpot integration team
        </Link>{" "}
        can align it with your pipelines.
      </>
    ),
  },
  {
    question: "How do you stop an AI chatbot from giving wrong answers?",
    answerText:
      "We ground every answer in your approved content and test with real customer questions before launch. The chatbot hands tricky questions to a person instead of guessing.",
    answer: null,
  },
  {
    question: "Can I hire AI chatbot developers near me in the USA?",
    answerText:
      "Yes. Our US office is in Naperville, Illinois, and we work with businesses across the United States, running most projects remotely.",
    answer: null,
  },
];

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ question, answerText }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answerText },
  })),
};

export default function FAQSection() {
  return (
    <section className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />

      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* LEFT: heading (sticks while scrolling the list on desktop) */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32 text-center lg:text-left">
              <span className="text-sm font-semibold uppercase tracking-wider text-[#1D92FB]">
                FAQs
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-black">
                Frequently Asked Questions About AI Chatbot Development
              </h2>
            </div>
          </div>

          {/* RIGHT: accordion */}
          <div className="lg:col-span-8 space-y-3">
            {FAQS.map(({ question, answer, answerText }, i) => (
              <details
                key={question}
                open={i === 0}
                className="group rounded-2xl border border-gray-200 bg-white open:border-[#1D92FB]/40 open:bg-[#F7F9FC] open:shadow-sm transition-colors"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 sm:px-6 py-5 [&::-webkit-details-marker]:hidden">
                  <h3 className="text-base sm:text-lg font-semibold text-black">
                    {question}
                  </h3>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EAF4FF] text-[#1D92FB] transition-transform duration-300 group-open:rotate-45 group-open:bg-[#1D92FB] group-open:text-white">
                    <Plus className="w-4 h-4" aria-hidden />
                  </span>
                </summary>
                <p className="px-5 sm:px-6 pb-5 -mt-1 text-[15px] leading-7 text-gray-600">
                  {answer ?? answerText}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
