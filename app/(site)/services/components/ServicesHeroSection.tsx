import Image from "next/image";
import Link from "next/link";

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
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
          {/* Badge */}
          <h1 className="inline-flex items-center rounded-full border border-[#1D92FB]/20 bg-white px-5 py-2 text-sm font-semibold text-[#1D92FB] shadow-sm">
            Our Services
          </h1>

          {/* Heading */}
          <span className="max-w-4xl text-2xl font-bold leading-tight text-[#0B1220] md:text-3xl">
            Your Partner for All Your{" "}
            <span className="text-[#1D92FB]">Digital Needs</span>
          </span>

          {/* Description */}
          <p className="max-w-4xl text-base leading-8 text-[#475569] sm:text-lg">
            As a custom software development company, we offer a wide range of
            technological solutions including but not limited to web development
            services, SaaS services, and app development services. Our teams of
            experts have the required knowledge and experience to deliver bespoke
            solutions in network infrastructure, cloud computing, custom software
            solutions, cybersecurity solutions, and so on.
          </p>
        </div>
      </div>
    </section>
  );
}