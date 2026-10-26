import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { Hourglass, Route, ReceiptText, CalendarCheck } from "lucide-react";
import { CALENDLY_URL } from "./constants";

const TAKEAWAYS: { icon: LucideIcon; text: string }[] = [
  {
    icon: Hourglass,
    text: "The areas where a chatbot will save your team the most time",
  },
  { icon: Route, text: "Recommended channels and integrations" },
  { icon: ReceiptText, text: "A timeline and cost estimate" },
];

export default function FinalCTASection() {
  return (
    <section className="relative overflow-hidden bg-[#0B1F33] text-white">
      {/* Background accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#1D92FB] opacity-20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-24 h-96 w-96 rounded-full bg-[#f7e022] opacity-10 blur-3xl"
      />

      <div className="relative max-w-5xl mx-auto px-5 md:px-10 py-16 md:py-24 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          Ready to Launch Your{" "}
          <span className="text-[#f7e022]">AI Chatbot?</span>
        </h2>
        <p className="mt-6 text-base sm:text-lg leading-8 text-gray-300 max-w-3xl mx-auto">
          Book a free strategy session with our AI chatbot developers to see how
          our AI chatbot development services can take repetitive questions off
          your team&apos;s plate.
        </p>

        <p className="mt-10 text-sm font-semibold uppercase tracking-wider text-[#7cc0ff]">
          You&apos;ll leave with
        </p>
        <ul className="mt-5 grid sm:grid-cols-3 gap-4 text-left">
          {TAKEAWAYS.map(({ icon: Icon, text }) => (
            <li
              key={text}
              className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-5"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1D92FB] text-white">
                <Icon className="w-5 h-5" aria-hidden />
              </span>
              <span className="font-medium leading-6 text-white">{text}</span>
            </li>
          ))}
        </ul>

        <Link
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center justify-center gap-2 rounded-lg bg-[#f7e022] px-6 sm:px-8 py-4 text-base sm:text-lg font-semibold text-black shadow-xl hover:bg-yellow-400 transition-colors"
        >
          <CalendarCheck className="w-5 h-5 shrink-0" aria-hidden />
          Book Your Free Chatbot Strategy Session
        </Link>
      </div>
    </section>
  );
}
