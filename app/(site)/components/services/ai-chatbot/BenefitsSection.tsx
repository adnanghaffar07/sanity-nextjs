import type { LucideIcon } from "lucide-react";
import { Clock, Feather, Magnet, Timer, BadgeCheck } from "lucide-react";
import Image from "next/image";

const BENEFITS: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Clock,
    title: "Round-the-clock support",
    description: "Answer customers outside business hours.",
  },
  {
    icon: Feather,
    title: "Lighter support workload",
    description: "Routine questions no longer reach your team.",
  },
  {
    icon: Magnet,
    title: "More captured leads",
    description: "Engage and qualify visitors after hours.",
  },
  {
    icon: Timer,
    title: "Faster first responses",
    description: "Customers get an answer without waiting in a queue.",
  },
  {
    icon: BadgeCheck,
    title: "Consistent answers",
    description: "Every customer gets the same accurate information.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT: heading + visual */}
          <div className="text-center lg:text-left">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#1D92FB]">
              Benefits
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-black">
              Benefits of a Custom-Built Chatbot
            </h2>
            <p className="mt-5 text-base sm:text-lg leading-7 text-gray-700">
              A well-built chatbot delivers more than customer support
              automation:
            </p>
            <Image
              src="/ai-chatbot-development-services/benefits.png"
              alt="AI chatbot benefits: 24/7 availability, cost savings, consistent brand experience, higher customer satisfaction, increased sales and scalable support"
              width={1040}
              height={780}
              sizes="(min-width: 1024px) 512px, (min-width: 640px) 512px, 100vw"
              className="mt-8 w-full max-w-lg h-auto mx-auto lg:mx-0 rounded-3xl shadow-lg"
            />
          </div>

          {/* RIGHT: benefits list */}
          <ul className="space-y-4">
            {BENEFITS.map(({ icon: Icon, title, description }) => (
              <li
                key={title}
                className="group flex items-start gap-5 rounded-3xl border border-gray-100 bg-[#F7F9FC] p-5 sm:p-6 hover:bg-white hover:shadow-lg hover:border-[#1D92FB]/30 transition-all duration-300"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-[#1D92FB] shadow-sm group-hover:bg-[#1D92FB] group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" aria-hidden />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-black">{title}</h3>
                  <p className="mt-1 text-[15px] leading-7 text-gray-600">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
