import Image from "next/image";
import Link from "next/link";

const highlights = [
  "AI & Business Automation",
  "Custom Software Development",
  "Mobile & Web Applications",
];

export default function ServicesHeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f4f9ff] via-white to-[#eef6ff]">
      <Image
        src="/service-vector-top.png"
        alt=""
        width={480}
        height={480}
        priority
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-24 z-0 w-[min(55vw,480px)] select-none opacity-80"
      />
      <Image
        src="/service-vector-down.png"
        alt=""
        width={320}
        height={320}
        priority
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-8 z-0 w-[min(28vw,220px)] select-none opacity-80"
      />

      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_80%_20%,rgba(29,146,251,0.08),transparent_45%)]" />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 pb-16 pt-32 lg:px-20 lg:pb-24 lg:pt-36">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-7 text-center">
          <span className="inline-flex w-fit items-center rounded-full border border-[#1D92FB]/20 bg-white/80 px-4 py-1.5 text-sm font-medium text-[#1D92FB] shadow-sm backdrop-blur-sm">
            Software · AI · Automation
          </span>

          <div className="space-y-4">
            <h1 className="text-3xl font-bold leading-tight text-[#0b1220] sm:text-4xl lg:text-5xl">
              Our Services for{" "}
              <span className="text-[#1D92FB]">Digital Growth</span>
            </h1>

            <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#334155] sm:text-lg">
              CodeAutomation.ai provides comprehensive software development,
              testing, and automation solutions to enable digital
              transformation for enterprises globally.
            </p>
          </div>

          <ul className="mx-auto flex max-w-md flex-col gap-3 text-left">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[#1e293b]"
              >
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1D92FB] text-xs font-bold text-white">
                  ✓
                </span>
                <span className="text-sm sm:text-base">{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="https://calendly.com/adnanghaffar/codeautomation?utm_source=website&utm_campaign=services"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-xl bg-[#1D92FB] px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-[#1D92FB]/25 transition hover:bg-[#1684e6] sm:w-auto"
            >
              Schedule a Free Call
            </Link>

            <Link
              href="/case-studies"
              className="w-full rounded-xl border border-[#1D92FB] bg-white px-6 py-3 text-center text-sm font-semibold text-[#1D92FB] transition hover:bg-[#1D92FB]/5 sm:w-auto"
            >
              View Case Studies
            </Link>
          </div>

          {/*
          <div className="relative w-full max-w-md lg:max-w-lg">
            <div className="absolute -inset-3 rounded-[1.35rem] bg-gradient-to-br from-[#1D92FB]/20 via-transparent to-[#1D92FB]/10 blur-sm" />
            <div className="relative rounded-[1.25rem] border border-white/70 bg-white/90 p-2 shadow-[0_24px_60px_-24px_rgba(29,146,251,0.45)] backdrop-blur-md">
              <HeroContactForm variant="blue" pageName="Services" />
            </div>
          </div>
          */}
        </div>
      </div>
    </section>
  );
}