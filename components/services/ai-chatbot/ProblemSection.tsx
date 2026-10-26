import type { ReactNode } from "react";
import {
  Bot,
  User,
  TriangleAlert,
  ShoppingCart,
  UserX,
  Wrench,
  CircleX,
  CircleCheck,
  ArrowRight,
} from "lucide-react";

const COSTS = [
  { icon: ShoppingCart, text: "Customers abandon carts" },
  { icon: UserX, text: "Leads go elsewhere" },
  { icon: Wrench, text: "Your support team ends up fixing the bot's mistakes" },
];

const TYPICAL_BOT = [
  "Launched from a general purpose template with a few FAQs",
  "Never tested on real questions",
  "Can't see your systems",
  "Doesn't know when to hand off",
  "Nobody checks its answers",
];

const EFFECTIVE_BOT = [
  "Your knowledge base",
  "Access to your systems",
  "Clear escalation rules",
  "Real-world testing",
  "Ongoing monitoring",
];

export default function ProblemSection() {
  return (
    <section className="bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-24">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#1D92FB]">
            The Problem
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-black">
            Why Most Business Chatbots Frustrate Customers
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-7 text-gray-700">
            We&apos;ve all met the chatbot that replies, &ldquo;Sorry, I
            didn&apos;t get that,&rdquo; or confidently gives a wrong price or
            policy.
          </p>
        </div>

        {/* Chat mock + cost of bad answers */}
        <div className="mt-12 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Illustrative "bad bot" conversation */}
          <div
            className="rounded-3xl bg-white p-5 sm:p-7 shadow-lg border border-gray-100"
            aria-label="Example of a frustrating chatbot conversation"
          >
            <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-gray-500">
                <Bot className="w-5 h-5" aria-hidden />
              </span>
              <div>
                <p className="text-sm font-semibold text-black">Template Bot</p>
                <p className="text-xs text-gray-400">Generic chatbot</p>
              </div>
            </div>

            <div className="mt-5 space-y-4 text-sm">
              <ChatBubble from="user">Can I change my order after checkout?</ChatBubble>
              <ChatBubble from="bot">Sorry, I didn&apos;t get that.</ChatBubble>
              <ChatBubble from="user">What does the premium plan cost?</ChatBubble>
              <ChatBubble from="bot" warning>
                The premium plan is free for the first year!
              </ChatBubble>
            </div>
          </div>

          {/* Cost */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-black">
              Every bad answer has a cost.
            </h3>
            <ul className="mt-6 space-y-4">
              {COSTS.map(({ icon: Icon, text }) => (
                <li
                  key={text}
                  className="flex items-center gap-4 rounded-2xl bg-white px-5 py-4 shadow-sm border border-gray-100"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-500">
                    <Icon className="w-5 h-5" aria-hidden />
                  </span>
                  <span className="font-medium text-gray-800">{text}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-base leading-7 text-gray-700">
              <strong className="text-black">
                The cause is rarely the AI model.
              </strong>{" "}
              Many businesses launch a general purpose chatbot from a template,
              add a few FAQs, and never test it on real questions.
            </p>
          </div>
        </div>

        {/* Typical vs effective */}
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-white p-6 sm:p-8 border border-gray-100 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wider text-red-500">
              A typical template chatbot
            </p>
            <ul className="mt-5 space-y-3">
              {TYPICAL_BOT.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <CircleX
                    className="w-5 h-5 mt-0.5 shrink-0 text-red-400"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-[#0B1F33] p-6 sm:p-8 text-white shadow-lg">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#7cc0ff]">
              What effective AI-powered chatbots for business need
            </p>
            <ul className="mt-5 space-y-3">
              {EFFECTIVE_BOT.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CircleCheck
                    className="w-5 h-5 mt-0.5 shrink-0 text-[#1D92FB]"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 flex items-center gap-2 font-semibold text-[#f7e022]">
              That&apos;s how we build every chatbot at CodeAutomation.
              <ArrowRight className="w-4 h-4 shrink-0" aria-hidden />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChatBubble({
  from,
  warning = false,
  children,
}: {
  from: "user" | "bot";
  warning?: boolean;
  children: ReactNode;
}) {
  if (from === "user") {
    return (
      <div className="flex justify-end items-end gap-2">
        <p className="max-w-[80%] rounded-2xl rounded-br-sm bg-[#1D92FB] px-4 py-2.5 text-white">
          {children}
        </p>
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#EAF4FF] text-[#1D92FB]">
          <User className="w-4 h-4" aria-hidden />
        </span>
      </div>
    );
  }
  return (
    <div className="flex items-end gap-2">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gray-200 text-gray-500">
        <Bot className="w-4 h-4" aria-hidden />
      </span>
      <div className="max-w-[80%]">
        <p
          className={`rounded-2xl rounded-bl-sm px-4 py-2.5 ${
            warning
              ? "bg-red-50 text-red-700 border border-red-200"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          {children}
        </p>
        {warning && (
          <p className="mt-1 flex items-center gap-1 text-xs font-medium text-red-500">
            <TriangleAlert className="w-3.5 h-3.5" aria-hidden />
            Confidently wrong
          </p>
        )}
      </div>
    </div>
  );
}
