import type { LucideIcon } from "lucide-react";
import {
  LifeBuoy,
  Magnet,
  CalendarClock,
  Building2,
  MessageCircle,
  PhoneCall,
} from "lucide-react";
import Image from "next/image";

const CHATBOT_TYPES: {
  icon: LucideIcon;
  title: string;
  description: string;
  bestFor: string[];
  image: string;
  imageAlt: string;
}[] = [
  {
    icon: LifeBuoy,
    title: "AI Chatbots for Customer Support",
    description:
      "An AI customer service chatbot that answers common questions, tracks orders, processes returns, and escalates complex issues with full context.",
    bestFor: ["eCommerce", "SaaS", "Service businesses"],
    image: "/ai-chatbot-development-services/customer-support.png",
    imageAlt: "AI customer support chatbot answering an order question",
  },
  {
    icon: Magnet,
    title: "Lead Generation & Sales Chatbots",
    description:
      "Qualify visitors and book sales calls into your calendar, even after hours.",
    bestFor: ["B2B companies", "Agencies", "Real estate teams"],
    image: "/ai-chatbot-development-services/lead-generation.png",
    imageAlt: "Sales chatbot qualifying a lead and booking a sales call",
  },
  {
    icon: CalendarClock,
    title: "Appointment & Booking Chatbots",
    description:
      "Let customers book, reschedule, and cancel through chat, synced with your calendar.",
    bestFor: ["Clinics", "Salons", "Service providers"],
    image: "/ai-chatbot-development-services/appointment-booking.png",
    imageAlt: "Booking chatbot scheduling an appointment synced with a calendar",
  },
  {
    icon: Building2,
    title: "Internal Help Desk Chatbots",
    description:
      "Our enterprise chatbot solutions answer employee questions on HR, IT, and onboarding inside Slack or Teams.",
    bestFor: ["Growing teams", "Enterprise teams"],
    image: "/ai-chatbot-development-services/internal-help-desk.png",
    imageAlt: "Internal help desk chatbot answering employee HR and IT questions",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp & Social Media Chatbots",
    description:
      "Automated replies, lead capture, and order updates on the apps customers already use.",
    bestFor: ["Retail", "Hospitality"],
    image: "/ai-chatbot-development-services/whatsapp-social-media.png",
    imageAlt: "WhatsApp and social media chatbot sending automated replies and order updates",
  },
  {
    icon: PhoneCall,
    title: "AI Voice Assistants",
    description:
      "Answer calls, take bookings, and route callers with natural speech.",
    bestFor: ["Businesses with busy phone lines"],
    image: "/ai-chatbot-development-services/voice-assistants.png",
    imageAlt: "AI voice assistant booking an appointment over a phone call",
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
            ({ icon: Icon, title, description, bestFor, image, imageAlt }) => (
              <article
                key={title}
                className="group flex flex-col rounded-3xl bg-white shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="relative p-3 pb-0">
                  <div className="overflow-hidden rounded-2xl">
                    <Image
                      src={image}
                      alt={imageAlt}
                      width={800}
                      height={450}
                      sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                      className="aspect-video w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
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
