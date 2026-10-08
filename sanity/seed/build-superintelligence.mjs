// Builds a test Service Page ("Superintelligence") exercising 15 of the 18
// section types, the listing card and SEO. Output: superintelligence.servicePage.json
//   node sanity/seed/build-superintelligence.mjs
// Import (creates an unpublished DRAFT; publish it in Studio):
//   NEXT_PUBLIC_SANITY_PROJECT_ID=ld8m6d0z NEXT_PUBLIC_SANITY_DATASET=production \
//     npx sanity documents create sanity/seed/superintelligence.servicePage.json

import { writeFileSync } from "node:fs";
import { randomBytes } from "node:crypto";

const key = () => randomBytes(6).toString("hex");

// Existing legacy service pages (references test interlinking to legacy docs).
const REF = {
  aiAgent: "2eaf84f2-e80a-4755-83c0-22a261e12d01",
  aiSoftware: "aa557ece-6c5d-4dab-9960-36b2d1825528",
  aiAutomation: "ef15b958-a3bb-47c0-b812-79256e4b888a",
  ml: "dc3749ee-9f34-4546-80b8-2f2df1c5e573",
  dataAnalytics: "364271ad-fa76-4fb3-b44e-4fdd6c5b36f2",
  qa: "ee6c1a8c-d7e1-49ec-9db3-3cc10e0b7d79",
};

// Existing image assets in the dataset (no uploads needed).
const IMG = {
  superintelligence: "image-b9fb37237d3088ee324652137467ee42be2eeb33-1774x887-webp",
  explosion: "image-1dbce56c649a1f8101f23be8a8bcc4139516078a-1774x887-webp",
  recursive: "image-a6095f24d4121ca98eb83defdc0a401a469ca35f-1774x887-webp",
  multiAgent: "image-3feb67bd53971d9154458f3de5f82ca5b5067eb8-1774x887-webp",
  agentsWork: "image-fee1a9ac4f4d17f673e9f1d9fdfc4a51ed87a810-1536x1024-webp",
  aiWorks: "image-c23e235659008be2c2906947577f15c263a4445f-1536x1024-webp",
  applications: "image-65dacbdc06b545fdc9f5043a4fe8784462f5f735-1536x1024-webp",
  automationPlatforms: "image-a388068ffe53bb9d989b15b9e3f2069e87afc894-1536x1024-webp",
  cardIcon: "image-47e3584272bf80d18a4e76bb64c0f871b719ad21-120x112-png",
};
const image = (ref, alt) => ({ _type: "spImage", asset: { _type: "reference", _ref: ref }, alt });

/**
 * Rich text paragraph. Inline links:
 *   [[text|@aiAgent]]   → internal link to a legacy page reference
 *   [[text|/path]]      → internal site path
 *   [[text|https://…]]  → external link
 */
const pt = (text) => {
  const markDefs = [];
  const children = [];
  const re = /\[\[([^|\]]+)\|([^\]]+)\]\]/g;
  let last = 0;
  let m;
  while ((m = re.exec(text))) {
    if (m.index > last) children.push({ _type: "span", _key: key(), text: text.slice(last, m.index), marks: [] });
    const markKey = key();
    const target = m[2];
    if (target.startsWith("@")) {
      markDefs.push({ _type: "internalLink", _key: markKey, reference: { _type: "reference", _ref: REF[target.slice(1)] } });
    } else if (target.startsWith("http")) {
      markDefs.push({ _type: "externalLink", _key: markKey, href: target, openInNewTab: true });
    } else {
      markDefs.push({ _type: "internalLink", _key: markKey, path: target });
    }
    children.push({ _type: "span", _key: key(), text: m[1], marks: [markKey] });
    last = m.index + m[0].length;
  }
  if (last < text.length) children.push({ _type: "span", _key: key(), text: text.slice(last), marks: [] });
  return [{ _type: "block", _key: key(), style: "normal", markDefs, children }];
};

const CALENDLY = {
  _type: "spLink",
  linkType: "external",
  url: "https://calendly.com/adnanghaffar/codeautomation?utm_source=website&utm_campaign=superintelligence",
  openInNewTab: true,
};
const path = (p) => ({ _type: "spLink", linkType: "internal", path: p, openInNewTab: false });
const ref = (r) => ({ _type: "spLink", linkType: "internal", reference: { _type: "reference", _ref: REF[r] }, openInNewTab: false });
const button = (label, link, style = "primary") => ({ _type: "spButton", label, link, style });
const item = (obj) => ({ _key: key(), ...obj });

const sections = [
  {
    _type: "spHero", _key: key(),
    badge: "Advanced AI Readiness", badgeIcon: "BrainCircuit",
    heading: "Superintelligence Readiness Services for Forward-Thinking", headingHighlight: "Businesses",
    subheading: pt("Prepare your business for increasingly capable AI. We help you adopt advanced AI agents today, with the governance, data foundations, and safeguards you'll need as systems become more autonomous."),
    highlights: [
      item({ _type: "highlight", text: pt("Practical AI roadmaps grounded in what works today") }),
      item({ _type: "highlight", text: pt("Governance and safety built in from day one") }),
      item({ _type: "highlight", text: pt("Agentic systems connected to your real workflows") }),
    ],
    primaryButton: button("Book a Free AI Strategy Call", CALENDLY, "primary"),
    secondaryButton: button("See Our Approach", path("#approach"), "accent"),
    image: image(IMG.superintelligence, "Illustration of superintelligent AI concept"),
    showTrustBar: true,
  },
  {
    _type: "spIntro", _key: key(),
    eyebrow: "About This Service",
    heading: "Getting Ready for the Next Leap in AI",
    body: pt("Superintelligence describes AI that outperforms humans across most cognitive tasks. It isn't here yet, but AI capability is improving quickly, and businesses that build strong foundations now will adapt faster. We help you put those foundations in place: clean data, well-governed [[AI agents|@aiAgent]], and processes designed for human oversight."),
    panelTitle: "What we help with",
    panelItems: [
      item({ _type: "panelItem", icon: "Compass", title: "Advanced AI strategy & roadmaps" }),
      item({ _type: "panelItem", icon: "Workflow", title: "Autonomous agent workflows", link: ref("aiAgent") }),
      item({ _type: "panelItem", icon: "ShieldCheck", title: "AI governance & safety" }),
      item({ _type: "panelItem", icon: "Database", title: "Data foundations for AI", link: ref("dataAnalytics") }),
    ],
    notes: [
      item({ _type: "note", icon: "Users", title: "Human oversight at every step" }),
      item({ _type: "note", icon: "Activity", title: "Reviewed as AI capabilities evolve" }),
    ],
  },
  {
    _type: "spProblem", _key: key(),
    eyebrow: "The Challenge",
    heading: "Why Most Businesses Aren't Ready for More Capable AI",
    intro: pt("Many teams are still experimenting with chatbots while AI systems are learning to plan, reason, and act on their own."),
    chatExample: [
      item({ _type: "chatMessage", from: "user", text: "Can our AI approve refunds automatically?" }),
      item({ _type: "chatMessage", from: "bot", text: "Yes, all refunds approved.", warning: true }),
    ],
    costTitle: "Unprepared adoption has real costs.",
    costs: [
      item({ _type: "cost", icon: "Bot", title: "Agents acting without clear limits" }),
      item({ _type: "cost", icon: "Database", title: "Messy data leading to wrong decisions" }),
      item({ _type: "cost", icon: "Lock", title: "Compliance and security gaps" }),
    ],
    body: pt("The problem is rarely the model. It's missing governance, unclear escalation paths, and data that was never prepared for autonomous systems."),
    badTitle: "Ad-hoc AI adoption",
    badItems: ["Tools chosen before goals", "No human-in-the-loop checks", "No plan for model upgrades"],
    goodTitle: "Superintelligence-ready adoption",
    goodItems: ["Clear guardrails and permissions", "Audit trails for every AI action", "Architecture that swaps in better models"],
    closingLine: pt("That's the foundation we build with every client."),
  },
  {
    _type: "spServicesGrid", _key: key(),
    eyebrow: "What We Do",
    heading: "Our Superintelligence Readiness Services",
    intro: pt("From strategy to safe deployment, we cover the full journey toward more capable AI."),
    items: [
      item({ _type: "serviceItem", icon: "Compass", title: "AI Readiness Assessment", description: pt("We review your data, systems, and processes to find where advanced AI can add value safely."), outcome: pt("A clear, prioritized roadmap.") }),
      item({ _type: "serviceItem", icon: "Bot", title: "Agentic System Design", description: pt("We design multi-step [[AI agents|@aiAgent]] that plan and act inside your tools with defined limits."), outcome: pt("Automation you can trust."), link: ref("aiAgent") }),
      item({ _type: "serviceItem", icon: "ShieldCheck", title: "AI Governance & Safety", description: pt("Policies, permissions, and monitoring so every AI decision is traceable and reversible."), outcome: pt("Confidence for leadership and regulators.") }),
      item({ _type: "serviceItem", icon: "Database", title: "Data Foundations", description: pt("We clean, structure, and connect your data so advanced models have reliable context. See our [[data analytics services|@dataAnalytics]]."), outcome: pt("Better answers from every model.") }),
      item({ _type: "serviceItem", icon: "Cpu", title: "Model-Agnostic Architecture", description: pt("Systems built to swap in newer, more capable models without a rebuild."), outcome: pt("Future-proof AI investments.") }),
      item({ _type: "serviceItem", icon: "Activity", title: "Monitoring & Evaluation", description: pt("Ongoing testing of accuracy, safety, and cost as models and regulations change."), outcome: pt("AI that stays reliable over time.") }),
    ],
  },
  {
    _type: "spImageCards", _key: key(),
    eyebrow: "Focus Areas",
    heading: "Where Advanced AI Creates the Most Value",
    intro: pt("These are the areas our clients prioritize when preparing for more capable AI."),
    tagsLabel: "Best for",
    items: [
      item({ _type: "imageCard", image: image(IMG.multiAgent, "Multi-agent AI system architecture"), icon: "Workflow", title: "Multi-Agent Systems", description: pt("Teams of specialized AI agents that collaborate on complex, multi-step work."), tags: ["Operations", "Enterprise"] }),
      item({ _type: "imageCard", image: image(IMG.recursive, "Recursive AI self-improvement cycle"), icon: "TrendingUp", title: "Self-Improving Workflows", description: pt("Processes that learn from outcomes and get better with every cycle, under human review."), tags: ["SaaS", "eCommerce"] }),
      item({ _type: "imageCard", image: image(IMG.explosion, "AI capability growth concept"), icon: "LineChart", title: "Strategic Forecasting", description: pt("Scenario planning for how rapidly improving AI will reshape your industry."), tags: ["Leadership", "Strategy"] }),
    ],
  },
  {
    _type: "spIconGrid", _key: key(), theme: "dark",
    eyebrow: "Capabilities",
    heading: "What Our Advanced AI Systems Can Do",
    items: [
      item({ _type: "iconItem", icon: "BrainCircuit", title: "Reason over complex tasks", description: pt("Break goals into steps and plan the work.") }),
      item({ _type: "iconItem", icon: "DatabaseZap", title: "Use your knowledge", description: pt("Ground every decision in your own data.") }),
      item({ _type: "iconItem", icon: "Zap", title: "Act in your tools", description: pt("Update records, send messages, and trigger workflows.") }),
      item({ _type: "iconItem", icon: "UserRoundCheck", title: "Escalate to humans", description: pt("Hand off anything high-risk with full context.") }),
      item({ _type: "iconItem", icon: "Languages", title: "Work across languages", description: pt("Serve global teams and customers.") }),
      item({ _type: "iconItem", icon: "ShieldCheck", title: "Stay within guardrails", description: pt("Role-based permissions and full audit logs."), tagsLabel: "Aligned with", tags: ["GDPR", "CCPA", "EU AI Act"] }),
    ],
  },
  {
    _type: "spComparison", _key: key(),
    eyebrow: "AI vs. Superintelligence",
    heading: "Today's AI or Superintelligence: What's the Difference?",
    left: { icon: "Bot", title: "Today's Advanced AI", description: pt("Narrow and agentic systems that excel at specific tasks with human oversight."), chooseWhen: pt("you want measurable results from AI right now."), link: ref("aiSoftware") },
    right: { icon: "Sparkles", title: "Superintelligence", description: pt("Hypothetical AI that surpasses human ability across nearly every domain."), chooseWhen: pt("you're planning long-term strategy, governance, and risk.") },
    footer: pt("Want to start with what's possible today? Explore our [[AI software development services|@aiSoftware]] or read our guide on [[what superintelligence is|/blogs]]."),
  },
  {
    _type: "spCtaBanner", _key: key(),
    heading: "Build an AI Foundation That's Ready for What's Next",
    text: pt("Tell us where AI could have the biggest impact in your business. We'll map out a practical, safe path to get there."),
    button: button("Let's Talk Strategy", CALENDLY, "accent"),
    image: image(IMG.agentsWork, "How AI agents work"),
  },
  {
    _type: "spIndustries", _key: key(),
    eyebrow: "Industries",
    heading: "Advanced AI Use Cases by Industry",
    items: [
      item({ _type: "industry", icon: "HeartPulse", title: "Healthcare", points: ["Clinical documentation", "Research synthesis", "Patient triage"] }),
      item({ _type: "industry", icon: "Landmark", title: "Finance", points: ["Risk modeling", "Fraud detection", "Regulatory reporting"] }),
      item({ _type: "industry", icon: "ShoppingBag", title: "Retail & eCommerce", points: ["Demand forecasting", "Dynamic pricing", "Personalization"] }),
      item({ _type: "industry", icon: "Truck", title: "Logistics", points: ["Route optimization", "Supply planning", "Exception handling"] }),
    ],
  },
  {
    _type: "spProcess", _key: key(), anchorId: "approach",
    eyebrow: "Our Approach",
    heading: "How We Prepare Your Business for Advanced AI",
    steps: [
      item({ _type: "step", icon: "Search", title: "Assess", description: pt("Review data, systems, risks, and goals.") }),
      item({ _type: "step", icon: "PenTool", title: "Design", description: pt("Define use cases, guardrails, and success metrics.") }),
      item({ _type: "step", icon: "Blocks", title: "Build", description: pt("Develop agents and integrations on a model-agnostic stack.") }),
      item({ _type: "step", icon: "FlaskConical", title: "Validate", description: pt("Stress-test for accuracy, safety, and edge cases with our [[QA team|@qa]].") }),
      item({ _type: "step", icon: "Rocket", title: "Evolve", description: pt("Monitor and upgrade as models improve.") }),
    ],
  },
  {
    _type: "spInsteadOf", _key: key(),
    eyebrow: "Why Choose Us",
    heading: "Why Businesses Trust Us With Advanced AI",
    leftLabel: "Instead of", rightLabel: "You get",
    rows: [
      item({ _type: "row", insteadOf: "Chasing the latest AI hype", youGet: pt("A roadmap tied to business outcomes") }),
      item({ _type: "row", insteadOf: "Black-box AI decisions", youGet: pt("Traceable, auditable actions") }),
      item({ _type: "row", insteadOf: "Locked-in to one vendor", youGet: pt("Model-agnostic architecture") }),
      item({ _type: "row", insteadOf: "Launch and forget", youGet: pt("Continuous evaluation and upgrades") }),
    ],
  },
  {
    _type: "spBenefits", _key: key(),
    eyebrow: "Benefits",
    heading: "Benefits of Preparing for Superintelligence Now",
    intro: pt("Early preparation pays off long before superintelligence arrives:"),
    image: image(IMG.applications, "Applications of artificial intelligence"),
    items: [
      item({ _type: "benefit", icon: "Rocket", title: "Faster adoption", description: pt("Roll out new AI capabilities in weeks, not months.") }),
      item({ _type: "benefit", icon: "ShieldCheck", title: "Lower risk", description: pt("Guardrails reduce costly AI mistakes.") }),
      item({ _type: "benefit", icon: "TrendingUp", title: "Competitive edge", description: pt("Stay ahead as competitors scramble to catch up.") }),
      item({ _type: "benefit", icon: "BadgeCheck", title: "Regulatory confidence", description: pt("Be ready for emerging AI regulations.") }),
    ],
  },
  {
    _type: "spTechStack", _key: key(),
    eyebrow: "Tech Stack",
    heading: "Technologies We Use",
    categories: [
      item({ _type: "techCategory", icon: "BrainCircuit", title: "AI models", items: [
        item({ _type: "tech", brand: "openai", title: "GPT" }), item({ _type: "tech", brand: "claude" }),
        item({ _type: "tech", brand: "gemini" }), item({ _type: "tech", brand: "llama", title: "Llama" }),
      ] }),
      item({ _type: "techCategory", icon: "Layers", title: "Agent frameworks", items: [
        item({ _type: "tech", brand: "langchain" }), item({ _type: "tech", brand: "llamaindex" }),
        item({ _type: "tech", brand: "huggingface" }),
      ] }),
      item({ _type: "techCategory", icon: "Database", title: "Data & vectors", items: [
        item({ _type: "tech", brand: "pinecone" }), item({ _type: "tech", brand: "postgresql" }),
        item({ _type: "tech", brand: "mongodb" }),
      ] }),
      item({ _type: "techCategory", icon: "CloudCog", title: "Cloud", items: [
        item({ _type: "tech", brand: "aws" }), item({ _type: "tech", brand: "azure" }),
        item({ _type: "tech", brand: "googlecloud" }),
      ] }),
    ],
  },
  {
    _type: "spFaq", _key: key(), addSchema: true,
    eyebrow: "FAQs",
    heading: "Frequently Asked Questions About Superintelligence",
    items: [
      item({ _type: "faqItem", question: "What is superintelligence?", answer: pt("Superintelligence refers to AI that would outperform humans across nearly all cognitive tasks. It does not exist yet, but AI capabilities are advancing quickly.") }),
      item({ _type: "faqItem", question: "Can you build a superintelligent AI for my business?", answer: pt("No one can today. We help you adopt the most capable AI available now, such as [[AI agents|@aiAgent]], while building the foundations to adapt as AI advances.") }),
      item({ _type: "faqItem", question: "How do you keep advanced AI safe?", answer: pt("We use permissions, human approval for high-risk actions, audit logs, and continuous testing.") }),
      item({ _type: "faqItem", question: "Which AI models do you work with?", answer: pt("We are model-agnostic and work with GPT, Claude, Gemini, Llama, and others, choosing based on accuracy, cost, and privacy.") }),
      item({ _type: "faqItem", question: "How long does an AI readiness assessment take?", answer: pt("Most assessments take two to four weeks, depending on the size of your organization.") }),
    ],
  },
  {
    _type: "spFinalCta", _key: key(),
    heading: "Ready to Future-Proof Your Business With", headingHighlight: "Advanced AI?",
    text: pt("Book a free strategy session to see where advanced AI fits in your business today, and how to prepare for tomorrow."),
    listTitle: "You'll leave with",
    items: [
      item({ _type: "takeaway", icon: "Target", title: "Your highest-value AI opportunities" }),
      item({ _type: "takeaway", icon: "ShieldCheck", title: "Key risks and guardrails to put in place" }),
      item({ _type: "takeaway", icon: "Route", title: "A phased roadmap and next steps" }),
    ],
    button: button("Book Your Free AI Strategy Session", CALENDLY, "accent"),
  },
];

const doc = {
  // drafts. prefix → created unpublished; publish it from Studio when ready.
  _id: "drafts.service-page-superintelligence",
  _type: "servicePage",
  title: "Superintelligence Readiness Services",
  slug: { _type: "slug", current: "superintelligence" },
  sections,
  seo: {
    metaTitle: "Superintelligence Readiness Services | CodeAutomation",
    metaDescription: "Prepare your business for advanced AI. Strategy, agentic systems, governance and data foundations built for the road to superintelligence.",
    keywords: ["superintelligence", "AI readiness", "advanced AI strategy", "AI governance", "agentic AI"],
    ogImage: { _type: "image", asset: { _type: "reference", _ref: IMG.superintelligence } },
    noIndex: false,
  },
  listing: {
    show: true,
    cardTitle: "Superintelligence Readiness",
    cardDescription: "Prepare your business for increasingly capable AI with strategy, agentic systems, governance and data foundations.",
    cardIcon: { _type: "image", asset: { _type: "reference", _ref: IMG.cardIcon } },
  },
};

const out = new URL("./superintelligence.servicePage.json", import.meta.url);
writeFileSync(out, JSON.stringify(doc, null, 2));
console.log(`Wrote ${out.pathname} — ${sections.length} sections:`, sections.map((s) => s._type).join(", "));
