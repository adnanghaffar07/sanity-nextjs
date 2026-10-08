// Sample content for every section type, taken from the AI Chatbot Development
// Services page. Used only by the dev preview page (/service-sections-preview),
// which is also how the Studio insert-menu thumbnails are produced.

import type { ServiceSection } from "./ServicePageRenderer";

let keySeq = 0;
const k = () => `k${++keySeq}`;

/** Portable text paragraph; segments wrapped in [[text|/path]] become internal links. */
const pt = (text: string) => {
  const markDefs: any[] = [];
  const children: any[] = [];
  const re = /\[\[([^|\]]+)\|([^\]]+)\]\]/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m.index > last) children.push({ _type: "span", _key: k(), text: text.slice(last, m.index), marks: [] });
    const markKey = k();
    markDefs.push({ _type: "internalLink", _key: markKey, path: m[2] });
    children.push({ _type: "span", _key: k(), text: m[1], marks: [markKey] });
    last = m.index + m[0].length;
  }
  if (last < text.length) children.push({ _type: "span", _key: k(), text: text.slice(last), marks: [] });
  return [{ _type: "block", _key: k(), style: "normal", markDefs, children }];
};

const CALL = { linkType: "external", url: "https://calendly.com/adnanghaffar/codeautomation", openInNewTab: true };
const IMG = (file: string, alt: string) => ({ url: `/ai-chatbot-development-services/${file}`, alt });

export const SAMPLE_SECTIONS: ServiceSection[] = [
  {
    _type: "spHero", _key: k(),
    badge: "AI Chatbot Development", badgeIcon: "Bot",
    heading: "Custom AI Chatbot Development Services in the", headingHighlight: "USA",
    subheading: pt("Chatbots trained on your business data that resolve customer queries, qualify leads, and book appointments around the clock."),
    highlights: [
      { _key: k(), text: pt("Trained on your own content") },
      { _key: k(), text: pt("Connected to your CRM, helpdesk, and calendar") },
      { _key: k(), text: pt("Live on web, WhatsApp, social, and phone") },
    ],
    primaryButton: { label: "Book a Free Chatbot Strategy Call", style: "primary", link: CALL },
    secondaryButton: { label: "See How It Works", style: "accent", link: { linkType: "internal", path: "#how-it-works" } },
    image: IMG("hero.png", "AI chatbot conversation mockup"),
    showTrustBar: true,
  },
  {
    _type: "spHeroForm", _key: k(),
    heading: "Custom Software Development for Your Needs",
    subheading: pt("Enhance your business with custom digital solutions and innovative technologies crafted by CodeAutomation.ai to drive success and growth."),
    primaryButton: { label: "Our Case Studies", style: "primary", link: { linkType: "internal", path: "/case-studies" } },
    secondaryButton: { label: "Schedule a Call", style: "accent", link: CALL },
    backgroundImage: { url: "https://cdn.sanity.io/images/ld8m6d0z/production/d28be79d8bcedcef287dfaefc59922846e96b3a8-960x540.webp", alt: "Laptop with code on screen" },
    showReviewBadges: true,
    formHeading: "Ready to innovate your business?",
    formSubheading: "We are here! Let's kick-off our journey to success.",
    formStyle: "default",
  },
  {
    _type: "spHeroBanner", _key: k(), alignment: "center",
    heading: "Custom Software Development for Your Needs",
    subheading: pt("Enhance your business with custom digital solutions and innovative technologies crafted by CodeAutomation.ai to drive success and growth."),
    primaryButton: { label: "Our Case Studies", style: "primary", link: { linkType: "internal", path: "/case-studies" } },
    secondaryButton: { label: "Schedule a Call", style: "accent", link: CALL },
    backgroundImage: { url: "https://cdn.sanity.io/images/ld8m6d0z/production/d28be79d8bcedcef287dfaefc59922846e96b3a8-960x540.webp", alt: "Team working at computers" },
    showReviewBadges: true,
  },
  {
    _type: "spHeroBanner", _key: k(), alignment: "left",
    heading: "Left-aligned Hero Banner Example",
    subheading: pt("Same section with the alignment set to Left. On phones it is always centred."),
    primaryButton: { label: "Our Case Studies", style: "primary", link: { linkType: "internal", path: "/case-studies" } },
    secondaryButton: { label: "Schedule a Call", style: "accent", link: CALL },
    backgroundImage: { url: "https://cdn.sanity.io/images/ld8m6d0z/production/d28be79d8bcedcef287dfaefc59922846e96b3a8-960x540.webp", alt: "Team working at computers" },
    showReviewBadges: false,
  },
  {
    _type: "spIntro", _key: k(),
    eyebrow: "About Our AI Chatbot Development",
    heading: "Faster, More Accurate Customer Conversations Without Adding Headcount",
    body: pt("CodeAutomation is an AI chatbot development company providing AI chatbot development services for businesses that want faster, more accurate customer conversations without adding headcount. We build production-ready chatbots trained on your own content and connected to the tools you already use."),
    panelTitle: "What we build",
    panelItems: [
      { _key: k(), icon: "Headset", title: "Customer support & lead capture" },
      { _key: k(), icon: "BookOpenText", title: "Knowledge base (RAG) chatbots" },
      { _key: k(), icon: "MessageCircle", title: "WhatsApp chatbots" },
      { _key: k(), icon: "Mic", title: "AI voice assistants" },
    ],
    notes: [
      { _key: k(), icon: "FlaskConical", title: "Tested on real customer questions before launch" },
      { _key: k(), icon: "Activity", title: "Improved continuously after go-live" },
    ],
  },
  {
    _type: "spProblem", _key: k(),
    eyebrow: "The Problem", heading: "Why Most Business Chatbots Frustrate Customers",
    intro: pt("We've all met the chatbot that replies, \"Sorry, I didn't get that,\" or confidently gives a wrong price or policy."),
    chatExample: [
      { _key: k(), from: "user", text: "Can I change my order after checkout?" },
      { _key: k(), from: "bot", text: "Sorry, I didn't get that." },
      { _key: k(), from: "user", text: "What does the premium plan cost?" },
      { _key: k(), from: "bot", text: "The premium plan is free for the first year!", warning: true },
    ],
    costTitle: "Every bad answer has a cost.",
    costs: [
      { _key: k(), icon: "ShoppingCart", title: "Customers abandon carts" },
      { _key: k(), icon: "UserX", title: "Leads go elsewhere" },
      { _key: k(), icon: "Wrench", title: "Your support team ends up fixing the bot's mistakes" },
    ],
    body: pt("The cause is rarely the AI model. Many businesses launch a general purpose chatbot from a template, add a few FAQs, and never test it on real questions."),
    badTitle: "A typical template chatbot",
    badItems: ["Never tested on real questions", "Can't see your systems", "Doesn't know when to hand off"],
    goodTitle: "What effective AI-powered chatbots need",
    goodItems: ["Your knowledge base", "Access to your systems", "Clear escalation rules"],
    closingLine: pt("That's how we build every chatbot at CodeAutomation."),
  },
  {
    _type: "spServicesGrid", _key: k(),
    eyebrow: "What We Do", heading: "Our Chatbot Development Services",
    intro: pt("Our AI chatbot development services cover the full lifecycle, from strategy to ongoing optimization."),
    items: [
      { _key: k(), icon: "Compass", title: "Consulting & Strategy", description: pt("We identify where a chatbot will deliver the fastest return, then define the scope, tech stack, success metrics, and timeline."), outcome: pt("A clear roadmap before you invest in a build.") },
      { _key: k(), icon: "Code2", title: "Custom Chatbot Development", description: pt("We build around your processes, brand voice, and customer journeys."), outcome: pt("A chatbot that sounds like your brand, not a template.") },
      { _key: k(), icon: "Plug", title: "CRM & Chatbot Integration", description: pt("We connect your chatbot to your CRM, helpdesk and calendar, and it fits into your wider [[AI business automation|/services/ai-business-automation-solutions]]."), outcome: pt("Conversations that end in completed tasks.") },
    ],
  },
  {
    _type: "spImageCards", _key: k(),
    eyebrow: "Chatbot Types", heading: "AI Chatbot Solutions We Build for Your Business",
    intro: pt("These are the AI chatbot solutions our clients ask for most."),
    tagsLabel: "Best for",
    items: [
      { _key: k(), image: IMG("customer-support.png", "Customer support chatbot"), icon: "LifeBuoy", title: "AI Chatbots for Customer Support", description: pt("Answers common questions, tracks orders, processes returns, and escalates complex issues."), tags: ["eCommerce", "SaaS"] },
      { _key: k(), image: IMG("lead-generation.png", "Lead generation chatbot"), icon: "Magnet", title: "Lead Generation & Sales Chatbots", description: pt("Qualify visitors and book sales calls into your calendar, even after hours."), tags: ["B2B", "Agencies"] },
      { _key: k(), image: IMG("voice-assistants.png", "Voice assistant"), icon: "PhoneCall", title: "AI Voice Assistants", description: pt("Answer calls, take bookings, and route callers with natural speech."), tags: ["Busy phone lines"] },
    ],
  },
  {
    _type: "spIconGrid", _key: k(), theme: "dark",
    eyebrow: "Capabilities", heading: "What Our Conversational AI Chatbots Can Do",
    items: [
      { _key: k(), icon: "BrainCircuit", title: "Understand context", description: pt("Handle follow-ups, typos, and everyday language.") },
      { _key: k(), icon: "DatabaseZap", title: "Answer from your data", description: pt("Stay accurate and on-brand.") },
      { _key: k(), icon: "Zap", title: "Take action", description: pt("Book, update, and look up records in your tools.") },
      { _key: k(), icon: "UserRoundCheck", title: "Hand off to humans", description: pt("Escalate with the full conversation attached.") },
      { _key: k(), icon: "Languages", title: "Speak multiple languages", description: pt("Serve customers in their preferred language.") },
      { _key: k(), icon: "ShieldCheck", title: "Protect your data", description: pt("Encrypted handling and role-based access."), tagsLabel: "Compliance standards", tags: ["GDPR", "CCPA"] },
    ],
  },
  {
    _type: "spComparison", _key: k(),
    eyebrow: "Chatbot vs. Agent", heading: "AI Chatbot or AI Agent: Which Do You Need?",
    left: { icon: "MessagesSquare", title: "AI Chatbot", description: pt("Built for conversations: answering questions, taking bookings, and capturing leads."), chooseWhen: pt("you want better, faster customer conversations.") },
    right: { icon: "Workflow", title: "AI Agent", description: pt("Built for multi-step workflows that run end-to-end across your systems."), chooseWhen: pt("you want to automate whole processes behind the scenes.") },
    footer: pt("Not sure which fits? Learn more about our [[AI agent development|/services/ai-agent]]."),
  },
  {
    _type: "spCtaBanner", _key: k(),
    heading: "Let's Build a Chatbot Your Customers Actually Like Using",
    text: pt("Tell us where your team loses the most time to repetitive questions. We'll show you what a custom chatbot can take off their plate."),
    button: { label: "Let's Connect", style: "accent", link: CALL },
    image: IMG("cta.png", "Chatbot answering a customer"),
  },
  {
    _type: "spIndustries", _key: k(),
    eyebrow: "Industries", heading: "AI-Powered Chatbot Use Cases by Industry",
    items: [
      { _key: k(), icon: "HeartPulse", title: "Healthcare", points: ["Scheduling", "Patient intake", "Billing questions"] },
      { _key: k(), icon: "ShoppingBag", title: "eCommerce & Retail", points: ["Product recommendations", "Order tracking", "Returns"] },
      { _key: k(), icon: "House", title: "Real Estate", points: ["Lead qualification", "Property inquiries", "Tour bookings"] },
      { _key: k(), icon: "Landmark", title: "Finance & Insurance", points: ["Account questions", "Claims status", "Policy information"] },
    ],
  },
  {
    _type: "spProcess", _key: k(), anchorId: "how-it-works",
    eyebrow: "How It Works", heading: "Our Proven Chatbot Development Process",
    steps: [
      { _key: k(), icon: "Search", title: "Discovery", description: pt("We map your goals, customer journeys, and integrations.") },
      { _key: k(), icon: "PenTool", title: "Design and prototype", description: pt("We design conversation flows and escalation rules.") },
      { _key: k(), icon: "Blocks", title: "Build and integrate", description: pt("We build on the right model and connect your systems.") },
      { _key: k(), icon: "FlaskConical", title: "Test", description: pt("We test with real customer questions and edge cases.") },
      { _key: k(), icon: "Rocket", title: "Launch and optimize", description: pt("We monitor performance and refine answers.") },
    ],
  },
  {
    _type: "spInsteadOf", _key: k(),
    eyebrow: "Why Choose Us", heading: "Why Businesses Choose Our AI Chatbot Development Agency",
    leftLabel: "Instead of", rightLabel: "You get",
    rows: [
      { _key: k(), insteadOf: "Scripted FAQ answers", youGet: pt("Answers grounded in your own data") },
      { _key: k(), insteadOf: "A bot that only talks", youGet: pt("A chatbot that works inside your systems") },
      { _key: k(), insteadOf: "Launch and forget", youGet: pt("Monitoring and refinement after launch") },
    ],
  },
  {
    _type: "spBenefits", _key: k(),
    eyebrow: "Benefits", heading: "Benefits of a Custom-Built Chatbot",
    intro: pt("A well-built chatbot delivers more than customer support automation:"),
    image: IMG("benefits.png", "Chatbot benefits"),
    items: [
      { _key: k(), icon: "Clock", title: "Round-the-clock support", description: pt("Answer customers outside business hours.") },
      { _key: k(), icon: "Feather", title: "Lighter support workload", description: pt("Routine questions no longer reach your team.") },
      { _key: k(), icon: "Magnet", title: "More captured leads", description: pt("Engage and qualify visitors after hours.") },
    ],
  },
  {
    _type: "spTechStack", _key: k(),
    eyebrow: "Tech Stack", heading: "Technologies We Use",
    categories: [
      { _key: k(), icon: "BrainCircuit", title: "AI models", items: [
        { _key: k(), brand: "openai", title: "GPT" },
        { _key: k(), brand: "claude" },
        { _key: k(), brand: "gemini" },
        { _key: k(), brand: "llama", title: "Llama" },
      ] },
      { _key: k(), icon: "Layers", title: "Frameworks & RAG", items: [
        { _key: k(), brand: "langchain" },
        { _key: k(), brand: "llamaindex" },
        { _key: k(), brand: "pinecone" },
      ] },
      { _key: k(), icon: "Workflow", title: "Channels", items: [
        { _key: k(), brand: "webchat" },
        { _key: k(), brand: "whatsapp" },
        { _key: k(), brand: "messenger" },
        { _key: k(), brand: "instagram" },
        { _key: k(), brand: "sms" },
        { _key: k(), brand: "slack" },
        { _key: k(), brand: "teams", title: "Teams" },
      ] },
      { _key: k(), icon: "Plug", title: "Integrations", items: [
        { _key: k(), brand: "hubspot" },
        { _key: k(), brand: "salesforce" },
        { _key: k(), brand: "zoho" },
        { _key: k(), brand: "gohighlevel" },
        { _key: k(), brand: "zendesk" },
        { _key: k(), brand: "shopify" },
      ] },
      { _key: k(), icon: "CloudCog", title: "Cloud", items: [
        { _key: k(), brand: "aws" },
        { _key: k(), brand: "azure" },
        { _key: k(), brand: "googlecloud" },
      ] },
    ],
  },
  {
    _type: "spFaq", _key: k(), addSchema: true,
    eyebrow: "FAQs", heading: "Frequently Asked Questions About AI Chatbot Development",
    items: [
      { _key: k(), question: "What is the difference between a rule-based chatbot and an AI chatbot?", answer: pt("A rule-based chatbot follows fixed scripts. An AI chatbot understands intent and context and answers from your own content.") },
      { _key: k(), question: "Can an AI chatbot integrate with HubSpot or Salesforce?", answer: pt("Yes. Our [[HubSpot integration team|/services/hubspot-crm-integration-services]] can align it with your pipelines.") },
      { _key: k(), question: "How do you stop an AI chatbot from giving wrong answers?", answer: pt("We ground every answer in your approved content and test with real customer questions before launch.") },
    ],
  },
  {
    _type: "spFinalCta", _key: k(),
    heading: "Ready to Launch Your", headingHighlight: "AI Chatbot?",
    text: pt("Book a free strategy session with our AI chatbot developers."),
    listTitle: "You'll leave with",
    items: [
      { _key: k(), icon: "Hourglass", title: "The areas where a chatbot will save your team the most time" },
      { _key: k(), icon: "Route", title: "Recommended channels and integrations" },
      { _key: k(), icon: "ReceiptText", title: "A timeline and cost estimate" },
    ],
    button: { label: "Book Your Free Chatbot Strategy Session", style: "accent", link: CALL },
  },
];
