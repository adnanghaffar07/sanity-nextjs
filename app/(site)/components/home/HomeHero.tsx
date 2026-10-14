import Link from "next/link";
import HeroHeadlineSlider from "./HeroHeadlineSlider";
import HeroContactForm from "../HeroContactForm";
import HeroBackground from "./HeroBackground";

const BOOK_A_CALL_URL = "https://calendly.com/adnanghaffar";

export default function HomeHero() {
  return (
    <div className="relative flex min-h-screen w-full overflow-hidden font-light text-white">
      <HeroBackground />
      <div className="absolute top-0 left-0 w-full h-full bg-[#020C16]/75" aria-hidden />

      <div className="relative flex w-full items-center justify-center py-10 px-5 lg:px-20">
        <div className="w-full max-w-[1600px] mx-auto ">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16" style={{ marginTop: "60px" }}>
            {/* Headline slider and calls to action */}
            <div className="flex flex-col justify-center gap-8 lg:w-1/2">
              <div>
                <HeroHeadlineSlider />
              </div>

              <div className="flex flex-col lg:flex-row gap-4 sm:gap-5">
                <Link
                  href="/case-studies"
                  className="w-full sm:w-auto rounded-lg bg-[#1d92fb] px-6 py-3 text-center text-sm font-semibold text-white shadow-xl transition hover:bg-blue-600"
                >
                  Our Case Studies
                </Link>
                <a
                  href={BOOK_A_CALL_URL}
                  className="w-full sm:w-auto rounded-lg bg-[#f7e022] px-6 py-3 text-center text-sm font-semibold text-black shadow-xl transition hover:bg-yellow-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule a Call
                </a>
              </div>
            </div>

            {/* Lead form */}
            <div className="flex justify-center lg:justify-end lg:items-center lg:w-1/2">
              <HeroContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
