import type { LucideIcon } from "lucide-react";
import {
  LifeBuoy,
  Magnet,
  CalendarClock,
  Building2,
  MessageCircle,
  PhoneCall,
} from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder";

const CHATBOT_TYPES: {
  icon: LucideIcon;
  title: string;
  description: string;
  bestFor: string[];
  imageLabel: string;
}[] = [
  {
    icon: LifeBuoy,
    title: "AI Chatbots for Customer Support",
    description:
      "An AI customer service chatbot that answers common questions, tracks orders, processes returns, and escalates complex issues with full context.",
    bestFor: ["eCommerce", "SaaS", "Service businesses"],
    imageLabel: "Customer support chat illustration",
  },
  {
    icon: Magnet,
    title: "Lead Generation & Sales Chatbots",
    description:
      "Qualify visitors and book sales calls into your calendar, even after hours.",
    bestFor: ["B2B companies", "Agencies", "Real estate teams"],
    imageLabel: "Lead qualification chat illustration",
  },
  {
    icon: CalendarClock,
    title: "Appointment & Booking Chatbots",
    description:
      "Let customers book, reschedule, and cancel through chat, synced with your calendar.",
    bestFor: ["Clinics", "Salons", "Service providers"],
    imageLabel: "Booking chat + calendar illustration",
  },
  {
    icon: Building2,
    title: "Internal Help Desk Chatbots",
    description:
      "Our enterprise chatbot solutions answer employee questions on HR, IT, and onboarding inside Slack or Teams.",
    bestFor: ["Growing teams", "Enterprise teams"],
    imageLabel: "Slack / Teams help desk illustration",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp & Social Media Chatbots",
    description:
      "Automated replies, lead capture, and order updates on the apps customers already use.",
    bestFor: ["Retail", "Hospitality"],
    imageLabel: "WhatsApp / social chat illustration",
  },
  {
    icon: PhoneCall,
    title: "AI Voice Assistants",
    description:
      "Answer calls, take bookings, and route callers with natural speech.",
    bestFor: ["Businesses with busy phone lines"],
    imageLabel: "Voice assistant / phone call illustration",
  },
];

export default function ChatbotTypesSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#EAF4FF] to-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#1D92FB]">
            Chatbot Types
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-black">
            AI Chatbot Solutions We Build for Your Business
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-7 text-gray-700">
            Every business has different conversations to automate. These are
            the AI chatbot solutions our clients ask for most.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CHATBOT_TYPES.map(
            ({ icon: Icon, title, description, bestFor, imageLabel }) => (
              <article
                key={title}
                className="group flex flex-col rounded-3xl bg-white shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="relative p-3 pb-0">
                  <ImagePlaceholder
                    label={imageLabel}
                    size="800 × 450 px (16:9)"
                    className="aspect-video w-full rounded-2xl p-4"
                  />
                  <span className="absolute left-7 -bottom-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1D92FB] text-white shadow-lg ring-4 ring-white">
                    <Icon className="w-6 h-6" aria-hidden />
                  </span>
                </div>

                <div className="flex flex-col grow px-6 pt-10 pb-6">
                  <h3 className="text-lg sm:text-xl font-bold text-black">
                    {title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-7 text-gray-600 grow">
                    {description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-gray-100">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                      Best for
                    </p>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {bestFor.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full bg-[#EAF4FF] px-3 py-1 text-xs font-medium text-[#1D92FB]"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}
