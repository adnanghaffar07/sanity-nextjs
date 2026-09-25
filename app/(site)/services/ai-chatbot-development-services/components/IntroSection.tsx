import {
  Headset,
  BookOpenText,
  MessageCircle,
  Mic,
  FlaskConical,
  RefreshCw,
} from "lucide-react";

// The four chatbot types named in the intro copy.
const CAPABILITIES = [
  {
    icon: Headset,
    title: "Customer support & lead capture",
  },
  {
    icon: BookOpenText,
    title: "Knowledge base (RAG) chatbots",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp chatbots",
  },
  {
    icon: Mic,
    title: "AI voice assistants",
  },
];

export default function IntroSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* LEFT: copy */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#1D92FB]">
              About Our AI Chatbot Development
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-black">
              Faster, More Accurate Customer Conversations{" "}
              <span className="text-[#1D92FB]">Without Adding Headcount</span>
            </h2>
            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-700">
              CodeAutomation is an AI chatbot development company providing AI
              chatbot development services for businesses that want faster,
              more accurate customer conversations without adding headcount. We
              build production-ready chatbots trained on your own content and
              connected to the tools you already use. That covers customer
              support and lead capture, knowledge base (RAG) chatbots, WhatsApp
              chatbots, and AI voice assistants. Every chatbot is tested against
              real customer questions before launch and improved after it goes
              live.
            </p>
          </div>

          {/* RIGHT: what we build */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-[#EAF4FF] p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                What we build
              </p>
              <ul className="mt-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-3">
                {CAPABILITIES.map(({ icon: Icon, title }) => (
                  <li
                    key={title}
                    className="flex items-center gap-4 rounded-2xl bg-white px-4 py-4 shadow-sm"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1D92FB] text-white">
                      <Icon className="w-5 h-5" aria-hidden />
                    </span>
                    <span className="font-medium text-black">{title}</span>
                  </li>
                ))}
              </ul>

              {/* Quality promise from the last line of the copy */}
              <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-start gap-2 text-gray-700">
                  <FlaskConical
                    className="w-4 h-4 mt-0.5 shrink-0 text-[#1D92FB]"
                    aria-hidden
                  />
                  Tested on real customer questions before launch
                </div>
                <div className="flex items-start gap-2 text-gray-700">
                  <RefreshCw
                    className="w-4 h-4 mt-0.5 shrink-0 text-[#1D92FB]"
                    aria-hidden
                  />
                  Improved continuously after go-live
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
