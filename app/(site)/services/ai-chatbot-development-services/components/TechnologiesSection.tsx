import type { ComponentType, CSSProperties } from "react";
import {
  SiOpenai,
  SiClaude,
  SiGooglegemini,
  SiMeta,
  SiLangchain,
  SiWhatsapp,
  SiMessenger,
  SiInstagram,
  SiSlack,
  SiHubspot,
  SiSalesforce,
  SiZoho,
  SiZendesk,
  SiShopify,
  SiAmazonwebservices,
  SiGooglecloud,
} from "react-icons/si";
import { TbBrandTeams, TbBrandAzure } from "react-icons/tb";
import {
  BrainCircuit,
  Layers,
  RadioTower,
  Plug,
  CloudCog,
  Library,
  Database,
  MessageSquare,
  MessageSquareText,
  Rocket,
} from "lucide-react";

type Tech = {
  name: string;
  icon: ComponentType<{ className?: string; style?: CSSProperties }>;
  color: string;
};

// Brand logos come from react-icons (Simple Icons / Tabler). LlamaIndex,
// Pinecone and GoHighLevel have no brand icon there, so they use a neutral
// icon; Web chat and SMS aren't brands.
const CATEGORIES: {
  title: string;
  icon: ComponentType<{ className?: string }>;
  items: Tech[];
}[] = [
  {
    // Final list TBD
    title: "AI models",
    icon: BrainCircuit,
    items: [
      { name: "GPT", icon: SiOpenai, color: "#111111" },
      { name: "Claude", icon: SiClaude, color: "#D97757" },
      { name: "Gemini", icon: SiGooglegemini, color: "#8E75B2" },
      { name: "Llama", icon: SiMeta, color: "#0467DF" },
    ],
  },
  {
    // Final list TBD
    title: "Frameworks & RAG",
    icon: Layers,
    items: [
      { name: "LangChain", icon: SiLangchain, color: "#1C3C3C" },
      { name: "LlamaIndex", icon: Library, color: "#6B46C1" },
      { name: "Pinecone", icon: Database, color: "#111111" },
    ],
  },
  {
    title: "Channels",
    icon: RadioTower,
    items: [
      { name: "Web chat", icon: MessageSquare, color: "#1D92FB" },
      { name: "WhatsApp", icon: SiWhatsapp, color: "#25D366" },
      { name: "Messenger", icon: SiMessenger, color: "#0084FF" },
      { name: "Instagram", icon: SiInstagram, color: "#E4405F" },
      { name: "SMS", icon: MessageSquareText, color: "#1D92FB" },
      { name: "Slack", icon: SiSlack, color: "#4A154B" },
      { name: "Teams", icon: TbBrandTeams, color: "#6264A7" },
    ],
  },
  {
    title: "Integrations",
    icon: Plug,
    items: [
      { name: "HubSpot", icon: SiHubspot, color: "#FF7A59" },
      { name: "Salesforce", icon: SiSalesforce, color: "#00A1E0" },
      { name: "Zoho", icon: SiZoho, color: "#E42527" },
      { name: "GoHighLevel", icon: Rocket, color: "#188BF6" },
      { name: "Zendesk", icon: SiZendesk, color: "#03363D" },
      { name: "Shopify", icon: SiShopify, color: "#7AB55C" },
    ],
  },
  {
    title: "Cloud",
    icon: CloudCog,
    items: [
      { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
      { name: "Azure", icon: TbBrandAzure, color: "#0078D4" },
      { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
    ],
  },
];

export default function TechnologiesSection() {
  return (
    <section className="bg-[#F7F9FC]">
      <div className="max-w-6xl mx-auto px-5 md:px-10 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#1D92FB]">
            Tech Stack
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-black">
            Technologies We Use
          </h2>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm divide-y divide-gray-100">
          {CATEGORIES.map(({ title, icon: CategoryIcon, items }) => (
            <div
              key={title}
              className="grid md:grid-cols-[220px_1fr] gap-4 md:gap-8 items-center px-5 sm:px-8 py-6"
            >
              <h3 className="flex items-center gap-3 text-base font-bold text-black">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EAF4FF] text-[#1D92FB]">
                  <CategoryIcon className="w-5 h-5" aria-hidden />
                </span>
                {title}
              </h3>

              <ul className="flex flex-wrap gap-3">
                {items.map(({ name, icon: Icon, color }) => (
                  <li
                    key={name}
                    className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3.5 py-2 text-sm font-medium text-gray-800 hover:border-[#1D92FB]/40 hover:shadow-sm transition"
                  >
                    <Icon
                      className="w-5 h-5 shrink-0"
                      style={{ color }}
                      aria-hidden
                    />
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
