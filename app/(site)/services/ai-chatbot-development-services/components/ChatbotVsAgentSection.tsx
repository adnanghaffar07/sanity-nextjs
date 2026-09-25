import Link from "next/link";
import { MessagesSquare, Workflow, CircleCheck } from "lucide-react";
import { CALENDLY_URL } from "./constants";

export default function ChatbotVsAgentSection() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-5 md:px-10 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#1D92FB]">
            Chatbot vs. Agent
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-black">
            AI Chatbot or AI Agent: Which Do You Need?
          </h2>
        </div>

        <div className="relative mt-12 grid md:grid-cols-2 gap-6 md:gap-10">
          {/* Card 1: AI Chatbot */}
          <div className="flex flex-col rounded-3xl border-2 border-[#1D92FB] bg-[#EAF4FF] p-5 sm:p-9">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1D92FB] text-white shadow-lg">
              <MessagesSquare className="w-7 h-7" aria-hidden />
            </span>
            <h3 className="mt-6 text-2xl font-bold text-black">AI Chatbot</h3>
            <p className="mt-3 text-base leading-7 text-gray-700 grow">
              Built for conversations: answering questions, taking bookings, and
              capturing leads.
            </p>
            <div className="mt-6 flex items-start gap-3 rounded-2xl bg-white px-4 sm:px-5 py-4 shadow-sm">
              <CircleCheck
                className="w-5 h-5 mt-0.5 shrink-0 text-[#1D92FB]"
                aria-hidden
              />
              <p className="text-[15px] leading-6 text-gray-800">
                <span className="font-semibold text-black">Choose it when</span>{" "}
                you want better, faster customer conversations.
              </p>
            </div>
          </div>

          {/* VS badge */}
          <span
            aria-hidden
            className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-14 w-14 items-center justify-center rounded-full bg-[#f7e022] text-lg font-extrabold text-black shadow-lg ring-8 ring-white"
          >
            VS
          </span>

          {/* Card 2: AI Agent */}
          <div className="flex flex-col rounded-3xl bg-[#0B1F33] p-5 sm:p-9 text-white">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#7cc0ff]">
              <Workflow className="w-7 h-7" aria-hidden />
            </span>
            <h3 className="mt-6 text-2xl font-bold">AI Agent</h3>
            <p className="mt-3 text-base leading-7 text-gray-300 grow">
              Built for multi-step workflows that run end-to-end across your
              systems.
            </p>
            <div className="mt-6 flex items-start gap-3 rounded-2xl bg-white/10 px-4 sm:px-5 py-4">
              <CircleCheck
                className="w-5 h-5 mt-0.5 shrink-0 text-[#7cc0ff]"
                aria-hidden
              />
              <p className="text-[15px] leading-6 text-gray-200">
                <span className="font-semibold text-white">Choose it when</span>{" "}
                you want to automate whole processes behind the scenes.
              </p>
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-base sm:text-lg text-gray-700">
          Not sure which fits? Learn more about our{" "}
          <Link
            href="/services/ai-agent"
            className="font-semibold text-[#1D92FB] underline underline-offset-4 hover:text-blue-700"
          >
            AI agent development
          </Link>
          , or ask us on your{" "}
          <Link
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#1D92FB] underline underline-offset-4 hover:text-blue-700"
          >
            strategy call
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
