import Link from "next/link";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Compass,
  Code2,
  Library,
  Plug,
  MessagesSquare,
  Activity,
  Target,
} from "lucide-react";

const SERVICES: {
  icon: LucideIcon;
  title: string;
  description: ReactNode;
  outcome: string;
}[] = [
  {
    icon: Compass,
    title: "Consulting & Strategy",
    description:
      "We identify where a chatbot will deliver the fastest return, then define the scope, tech stack, success metrics, and timeline. That way, the AI chatbot development solutions we recommend fit your goals and budget.",
    outcome: "A clear roadmap before you invest in a build.",
  },
  {
    icon: Code2,
    title: "Custom Chatbot Development Services",
    description:
      "We build around your processes, brand voice, and customer journeys. Your chatbot understands context and handles follow-up questions the way a trained team member would.",
    outcome: "A chatbot that sounds like your brand, not a template.",
  },
  {
    icon: Library,
    title: "Knowledge Base & RAG Chatbots",
    description:
      "We connect your chatbot to your documents, help center, and policies using retrieval-augmented generation (RAG), so answers come from your own content instead of guesses.",
    outcome: "Answers your team can stand behind.",
  },
  {
    icon: Plug,
    title: "CRM & Chatbot Integration",
    description: (
      <>
        We connect your chatbot to your CRM, helpdesk, calendar, eCommerce, and
        payment systems so it can book appointments, check orders, and update
        records. This chatbot automation removes repetitive manual steps and
        fits into your wider{" "}
        <Link
          href="/services/ai-business-automation-solutions"
          className="font-medium text-[#1D92FB] underline underline-offset-2 hover:text-blue-700"
        >
          AI business automation
        </Link>
        .
      </>
    ),
    outcome: "Conversations that end in completed tasks.",
  },
  {
    icon: MessagesSquare,
    title: "Omnichannel & AI Voice Chat",
    description:
      "Deploy one chatbot across your website, mobile app, WhatsApp, Messenger, Instagram, SMS, and Slack or Teams. Choose a chatbot for website visitors, a voice assistant for phone calls, or both.",
    outcome: "One consistent experience on every channel.",
  },
  {
    icon: Activity,
    title: "Testing, Monitoring & Optimization",
    description:
      "We test before launch, then track accuracy, resolution rates, and escalations to keep improving answers over time.",
    outcome: "A chatbot that improves as your business changes.",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#1D92FB]">
            What We Do
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-black">
            Our Chatbot Development Services
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-7 text-gray-700">
            Our AI chatbot development services cover the full lifecycle, from
            strategy to ongoing optimization.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map(({ icon: Icon, title, description, outcome }, i) => (
            <article
              key={title}
              className="group relative flex flex-col rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="flex flex-col grow p-6 sm:p-7">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF4FF] text-[#1D92FB] group-hover:bg-[#1D92FB] group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" aria-hidden />
                  </span>
                  <span
                    aria-hidden
                    className="text-3xl font-bold text-gray-100 group-hover:text-[#EAF4FF] transition-colors"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 text-lg sm:text-xl font-bold text-black">
                  {title}
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-gray-600">
                  {description}
                </p>
              </div>

              <div className="flex items-start gap-3 bg-[#F7F9FC] border-t border-gray-100 px-6 sm:px-7 py-4">
                <Target
                  className="w-5 h-5 mt-0.5 shrink-0 text-[#1D92FB]"
                  aria-hidden
                />
                <p className="text-sm">
                  <span className="font-semibold text-black">Outcome: </span>
                  <span className="text-gray-700">{outcome}</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
