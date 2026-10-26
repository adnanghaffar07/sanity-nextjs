import type { ServiceSummaryContent } from "@/sanity/lib/service-summary";

// Summary on the left; the call to action and the current offer on the right.
// The button jumps to the contact form in the site footer.
export default function ClosingSection({
  summary,
  cta,
  offer,
}: {
  summary?: ServiceSummaryContent["summary"];
  cta?: ServiceSummaryContent["cta"];
  offer?: ServiceSummaryContent["offer"];
}) {
  return (
    <section className="relative isolate overflow-hidden bg-[#061A3A] text-white">
      <div aria-hidden className="absolute -bottom-40 -right-32 -z-10 h-96 w-96 rounded-full bg-[#1D92FB]/20 blur-3xl" />
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-24 grid gap-12 lg:grid-cols-2 lg:gap-20 items-start">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{summary?.heading}</h2>
          <p className="mt-6 max-w-xl text-[17px] leading-8 text-white/75">{summary?.text}</p>
        </div>

        <div className="rounded-3xl bg-white/[0.06] ring-1 ring-white/10 backdrop-blur-sm p-6 sm:p-10">
          <h2 className="text-2xl font-bold">{cta?.heading}</h2>
          <p className="mt-4 text-white/75 leading-7">{cta?.text}</p>
          <a
            href="#contact-box"
            className="mt-8 inline-flex items-center rounded-xl bg-[#F7E022] px-6 py-3 font-semibold text-[#061A3A] hover:bg-[#ffe94d] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#061A3A]"
          >
            Get started now
          </a>

          {offer?.text && (
            <div className="mt-10 border-t border-white/10 pt-8">
              <h3 className="font-semibold text-[#F7E022]">{offer.heading}</h3>
              <p className="mt-2 text-white/75 leading-7">{offer.text}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
