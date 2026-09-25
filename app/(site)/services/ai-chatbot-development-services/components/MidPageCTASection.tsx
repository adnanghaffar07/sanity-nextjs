import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder";
import { CALENDLY_URL } from "./constants";

export default function MidPageCTASection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-12 md:py-16">
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#1D92FB] via-[#1479d6] to-[#0B1F33] px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14 text-white shadow-2xl">
          {/* Decorative rings */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border-[40px] border-white/10"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-16 -bottom-20 h-56 w-56 rounded-full bg-[#f7e022]/10 blur-2xl"
          />

          <div className="relative grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                Let&apos;s Build a Chatbot Your Customers Actually Like Using
              </h2>
              <p className="mt-5 text-base sm:text-lg leading-7 text-blue-50/90 max-w-2xl mx-auto lg:mx-0">
                Tell us where your team loses the most time to repetitive
                questions. We&apos;ll show you what a custom chatbot can take off
                their plate and what it would take to launch.
              </p>
              <Link
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-[#f7e022] px-8 py-3.5 font-semibold text-black shadow-lg hover:bg-yellow-400 transition-colors"
              >
                Let&apos;s Connect
                <ArrowRight
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
            </div>

            <div className="lg:col-span-5">
              <ImagePlaceholder
                label="CTA image: team + chatbot dashboard"
                size="880 × 660 px (4:3)"
                onDark
                className="aspect-[4/3] w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
