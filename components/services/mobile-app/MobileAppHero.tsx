import Image from "next/image";
import MobileAppForm from "./MobileAppForm";
import { LiveChatLink, QuoteButton } from "./MobileAppConsult";
import background from "@/public/mobile-app-bg.png";
import bannerPhone from "@/public/mobile-banner-image.png";
import affordableIcon from "@/public/app-1.png";
import timelyIcon from "@/public/app-2.png";
import errorFreeIcon from "@/public/app-3.png";
import turnaroundIcon from "@/public/app-4.png";
import confidentialIcon from "@/public/app-5.png";
import managerIcon from "@/public/app-6.png";
import designIcon from "@/public/app-7.png";

const FEATURES = [
  { icon: affordableIcon, tag: "Affordable Pricing", description: "Get quality apps at prices that fit your budget." },
  { icon: timelyIcon, tag: "Timely Delivery", description: "We deliver on time, every time—no compromises." },
  { icon: errorFreeIcon, tag: "Error-Free", description: "Thorough testing ensures smooth, bug-free apps." },
  { icon: turnaroundIcon, tag: "Quick Turnaround", description: "Rapid releases and updates with minimal downtime." },
  { icon: confidentialIcon, tag: "Confidentiality", description: "Your ideas are safe with our NDA protection." },
  { icon: managerIcon, tag: "Easily", description: "A dedicated manager keeps your project on track." },
  { icon: designIcon, tag: "Beautiful Design", description: "Intuitive, beautiful designs for a great user experience." },
];

const linkClass = "hover:text-yellow-400 underline transition-colors mb-2";

// Phone image, selling points with phone/chat/quote links, and the enquiry form.
export default function MobileAppHero() {
  return (
    <div className="relative w-full font-light text-white overflow-hidden pb-12 md:pb-0 lg:min-h-[700px] pt-[80px] md:pt-[100px]">
      <Image src={background} alt="" fill priority sizes="100vw" className="object-cover" />

      <h1 className="relative z-10 text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center pt-10">
        Custom Mobile App Development Services
      </h1>

      <div className="relative z-10 px-4 sm:px-6 md:px-10 2xl:px-20 mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4 2xl:gap-10 items-start">
        <div className="hidden md:flex justify-center">
          <Image src={bannerPhone} alt="Banner" priority sizes="(min-width: 1024px) 33vw, 50vw" className="md:h-[400px] lg:h-[600px] w-auto object-contain" />
        </div>

        <div className="text-white space-y-3 text-center lg:text-left">
          <p className="lg:text-center text-left sm:text-lg md:text-xl">
            We help entrepreneurs and businesses turn <span className="font-semibold">APP</span> ideas into reality.
          </p>

          <div className="grid grid-cols-1 gap-4 text-sm">
            {FEATURES.map((feature) => (
              <div key={feature.tag} className="flex items-start space-x-2 text-left">
                <div className="w-8 h-8 md:mb-2 flex-shrink-0">
                  <Image src={feature.icon} alt={feature.tag} width={52} height={52} className="-mt-1" />
                </div>
                <div>
                  <span className="inline-block text-center bg-[#F7E022] text-black w-[120px] font-medium text-xs px-2 py-0.5 rounded">
                    {feature.tag}
                  </span>
                  <span className="ml-2 text-white">— {feature.description}</span>
                </div>
              </div>
            ))}
          </div>

          <a
            href="tel:+18505584691"
            className="text-lg sm:text-xl mt-4 flex font-bold items-center justify-center space-x-2 text-white hover:text-yellow-400 transition-colors"
          >
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 sm:w-8 h-6 sm:h-8" aria-hidden="true">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.16 3.49a1 1 0 01-.27 1.09l-1.47 1.47a16.018 16.018 0 006.36 6.36l1.47-1.47a1 1 0 011.09-.27l3.49 1.16a1 1 0 01.68.95V19a2 2 0 01-2 2h-1c-9.39 0-17-7.61-17-17V5z"
              />
            </svg>
            <span>+1-850-558-4691</span>
          </a>

          <div className="mt-1 flex flex-row items-center justify-center space-x-3 text-white text-base">
            <LiveChatLink className={linkClass}>Start A Live Chat</LiveChatLink>
            <span className="hidden sm:inline">|</span>
            <QuoteButton className={linkClass}>Request a Free Quote</QuoteButton>
          </div>
        </div>

        <section id="form" className="w-full">
          <MobileAppForm />
        </section>
      </div>
    </div>
  );
}
