// Creates the new AI Agent Development Services page (Service Page builder)
// from the approved content doc, at /services/ai-agent-development-services.
// It is published hidden from Google (noindex) and without a card on
// /services, so on-page fixes can be made before it goes public. The old
// /services/ai-agent page is not changed.
//
//   npx sanity exec scripts/create-ai-agent-page.mjs --with-user-token                       (dry run)
//   npx sanity exec scripts/create-ai-agent-page.mjs --with-user-token -- --apply            (create)
//   npx sanity exec scripts/create-ai-agent-page.mjs --with-user-token -- --apply --replace  (overwrite, loses Studio edits)

import sanityCli from "sanity/cli";

const { getCliClient } = sanityCli;
const args = new Set(process.argv.slice(2));
const APPLY = args.has("--apply");
const REPLACE = args.has("--replace");
const client = getCliClient({ apiVersion: "2024-03-14" });

const DOC_ID = "servicePage-ai-agent-development-services";
const SLUG = "ai-agent-development-services";

let keySeq = 0;
const k = () => `k${(++keySeq).toString(36).padStart(4, "0")}`;

/**
 * Rich-text paragraphs. Pass several strings for several paragraphs.
 * [[text|/path]] becomes an internal link, [[text|https://…]] an external one.
 */
const pt = (...paragraphs) =>
  paragraphs.map((text) => {
    const markDefs = [];
    const children = [];
    const re = /\[\[([^|\]]+)\|([^\]]+)\]\]/g;
    let last = 0;
    let m;
    const span = (t, marks = []) => children.push({ _type: "span", _key: k(), text: t, marks });
    while ((m = re.exec(text))) {
      if (m.index > last) span(text.slice(last, m.index));
      const markKey = k();
      markDefs.push(
        m[2].startsWith("http")
          ? { _type: "externalLink", _key: markKey, href: m[2], openInNewTab: true }
          : { _type: "internalLink", _key: markKey, path: m[2] },
      );
      span(m[1], [markKey]);
      last = m.index + m[0].length;
    }
    if (last < text.length) span(text.slice(last));
    return { _type: "block", _key: k(), style: "normal", markDefs, children };
  });

/** "a, b, and c." → ["A", "B", "C"] */
const points = (text) =>
  text
    .replace(/\.$/, "")
    .split(/,\s*(?:and\s+)?/)
    .map((p) => p.trim())
    .filter(Boolean)
    .map((p) => p[0].toUpperCase() + p.slice(1));

const CALENDLY = "https://calendly.com/adnanghaffar/codeautomation";
const CALL = { linkType: "external", url: CALENDLY, openInNewTab: true };
const item = (fields) => ({ _key: k(), ...fields });
const tech = (brand, title) => item({ brand, ...(title ? { title } : {}) });

const sections = [
  {
    _type: "spHero",
    badge: "AI Agent Development",
    badgeIcon: "Bot",
    heading: "Custom AI Agent Development Services in the",
    headingHighlight: "USA",
    subheading: pt(
      "AI agents built around your business processes that automate multi-step workflows, connect your existing systems, and get work done with less manual effort.",
    ),
    highlights: [
      item({ text: pt("Custom AI agents designed for your business workflows") }),
      item({ text: pt("Connected to your CRM, ERP, databases, and business tools") }),
      item({ text: pt("Built with human oversight, testing, and ongoing optimization") }),
    ],
    primaryButton: { label: "Book a Free AI Agent Strategy Call", style: "primary", link: CALL },
    secondaryButton: { label: "Explore Our AI Agent Solutions", style: "accent", link: { linkType: "internal", path: "#solutions" } },
    showTrustBar: true,
  },
  {
    _type: "spIntro",
    eyebrow: "About Our AI Agent Development",
    heading: "AI Agents That Perform Tasks, Not Just Answer Questions",
    body: pt(
      "CodeAutomation is an AI agent development company providing custom AI agent development services to businesses across the USA. We design and build AI agents that go beyond answering questions to perform tasks, make decisions within defined boundaries, and coordinate workflows across your existing systems.",
      "Our artificial intelligence agent development services cover everything from AI agent consulting and workflow design to development, integration, deployment, and ongoing optimization. Whether you need autonomous sourcing agents, inventory management agents, customer service agents, or multi-agent systems, we develop solutions around your business processes.",
      "Every agent is tested against real business scenarios, equipped with appropriate safeguards, and monitored after deployment to support reliable performance.",
    ),
  },
  {
    _type: "spProblem",
    eyebrow: "The Problem",
    heading: "Why Traditional Automation Falls Short of Modern Business Needs",
    intro: pt(
      "Many businesses have already invested in automation, yet employees still spend hours moving information between systems, reviewing documents, checking inventory, and following up on routine requests.",
    ),
    body: pt(
      "The problem isn't always a lack of software. Traditional automation works well for predictable, rule-based tasks, but struggles when a process requires interpreting information, choosing the next action, or coordinating several tools.",
      "A workflow may start automatically but stop the moment something unexpected happens. Employees then have to step in, investigate the issue, and finish the work manually.",
    ),
    badTitle: "Traditional automation",
    badItems: [
      "Works only for predictable, rule-based tasks",
      "Can't interpret information or choose the next action",
      "Stops the moment something unexpected happens",
      "Leaves employees to finish the work manually",
    ],
    goodTitle: "What effective AI agents need",
    goodItems: [
      "Business context",
      "Reliable integrations",
      "Defined permissions",
      "Clear decision-making boundaries",
      "Human approval for sensitive actions",
      "Continuous performance monitoring",
    ],
    closingLine: pt(
      "That's why our AI agent development services focus on building agents that work within real business operations, not just controlled demonstrations.",
    ),
  },
  {
    _type: "spIconGrid",
    theme: "dark",
    eyebrow: "Capabilities",
    heading: "What Our Custom AI Agents Can Do",
    items: [
      item({ icon: "BrainCircuit", title: "Understand business context", description: pt("Interpret requests, documents, data, and workflow requirements before taking action.") }),
      item({ icon: "Route", title: "Plan and execute tasks", description: pt("Break complex requests into manageable steps and complete approved actions.") }),
      item({ icon: "Plug", title: "Connect business systems", description: pt("Retrieve, update, and exchange information across CRMs, ERPs, databases, and APIs.") }),
      item({ icon: "Workflow", title: "Coordinate multiple agents", description: pt("Assign specialized tasks to different AI agents working toward a shared objective.") }),
      item({ icon: "UserRoundCheck", title: "Involve humans when needed", description: pt("Request approval, escalate exceptions, and transfer control with relevant context.") }),
      item({ icon: "ShieldCheck", title: "Operate with safeguards", description: pt("Apply access controls, action limits, logging, and ongoing monitoring to reduce operational risk.") }),
    ],
  },
  {
    _type: "spImageCards",
    anchorId: "solutions",
    eyebrow: "AI Agent Types",
    heading: "AI Agent Solutions We Build for Your Business",
    intro: pt(
      "Different business processes require different levels of intelligence, autonomy, and system access. Our AI agent services are designed around the tasks your teams need to complete.",
    ),
    tagsLabel: "Best for",
    items: [
      item({ icon: "Headset", title: "AI Customer Support Agents", description: pt("AI agents that retrieve customer information, investigate requests, update support tickets, initiate approved resolutions, and escalate complex issues to human teams."), tags: ["eCommerce", "SaaS", "Customer service operations"] }),
      item({ icon: "Magnet", title: "AI Sales & Lead Management Agents", description: pt("Qualify incoming leads, research prospects, update CRM records, schedule meetings, and coordinate follow-up activities across your sales pipeline."), tags: ["B2B companies", "Real estate teams", "Sales organizations"] }),
      item({ icon: "Truck", title: "Autonomous Sourcing & Procurement Agents", description: pt("Our autonomous sourcing agents development services help businesses automate supplier research, compare quotations, evaluate sourcing information, and prepare purchasing recommendations for approval."), tags: ["Procurement teams", "Manufacturers", "Supply chain businesses"] }),
      item({ icon: "BarChart3", title: "AI Inventory Management Agents", description: pt("Our inventory management agents development services help monitor stock levels, identify replenishment needs, analyze inventory trends, and prepare purchasing or transfer actions based on defined business rules."), tags: ["Retailers", "Warehouses", "Distributors", "eCommerce businesses"] }),
      item({ icon: "Search", title: "AI Research & Data Analysis Agents", description: pt("Collect information from approved sources, analyze structured and unstructured data, generate reports, and organize findings to support business decisions."), tags: ["Research teams", "Financial operations", "Business analysts"] }),
      item({ icon: "Workflow", title: "Multi-Agent Workflow Automation Systems", description: pt("Build coordinated teams of specialized AI agents that manage different stages of complex workflows, share context, and complete tasks across connected systems."), tags: ["Growing businesses", "Enterprise operations", "Multi-step processes"] }),
    ],
  },
  {
    _type: "spServicesGrid",
    eyebrow: "What We Do",
    heading: "Our AI Agent Development Services",
    intro: pt(
      "Our custom agentic AI development services cover the complete development lifecycle, from identifying automation opportunities to maintaining AI agents in production.",
    ),
    outcomeLabel: "Outcome",
    items: [
      item({
        icon: "Compass",
        title: "AI Agent Consulting & Strategy",
        description: pt(
          "Our AI agent consulting services begin with understanding your business operations, existing systems, and automation goals. We identify processes suited to AI agents, assess technical feasibility, and define the level of autonomy each workflow requires.",
          "We then recommend an architecture, integration approach, success metrics, and implementation roadmap based on your priorities and budget.",
        ),
        outcome: pt("A practical AI agent development roadmap with clearly defined business objectives."),
      }),
      item({
        icon: "Code2",
        title: "Custom AI Agent Development",
        description: pt(
          "We design and build custom AI agents around your workflows, business rules, and operational requirements. Each agent is configured to understand its assigned responsibilities, use approved tools, and complete tasks within defined boundaries.",
          "As a custom AI agent development company, we focus on solutions that fit your processes rather than forcing your operations into a generic agent template.",
        ),
        outcome: pt("An AI agent designed to handle specific business tasks with appropriate oversight."),
      }),
      item({
        icon: "Layers",
        title: "Agentic AI & Multi-Agent System Development",
        description: pt(
          "Some business processes require several specialized capabilities working together. We develop agentic AI systems where multiple agents coordinate activities such as research, analysis, planning, execution, and validation.",
          "Our custom agentic AI development services include task orchestration, shared context management, agent-to-agent coordination, and human approval checkpoints.",
        ),
        outcome: pt("Coordinated AI agents that manage complex workflows across multiple stages."),
      }),
      item({
        icon: "Plug",
        title: "AI Agent Integration & Workflow Automation",
        description: pt(
          "We integrate AI agents with the software your teams already use, including CRM platforms, ERP systems, databases, communication tools, and third-party APIs.",
          "These integrations allow agents to retrieve information, update records, trigger approved actions, and exchange data without requiring employees to move between disconnected applications.",
        ),
        outcome: pt("AI agents that complete useful work inside your existing business systems."),
      }),
      item({
        icon: "BookOpenText",
        title: "Knowledge-Based AI Agents & RAG Development",
        description: pt(
          "We connect AI agents to your approved business documents, internal knowledge bases, policies, and operational data using retrieval-augmented generation (RAG) and appropriate data-access methods.",
          "This allows agents to reference relevant business information while performing tasks, rather than relying only on general model knowledge.",
          "We also design how agents handle missing information, conflicting sources, and situations requiring human review.",
        ),
        outcome: pt("AI agents that use relevant business knowledge to support more informed actions."),
      }),
      item({
        icon: "FlaskConical",
        title: "AI Agent Testing, Deployment & Optimization",
        description: pt(
          "Before deployment, we test agents against realistic tasks, unexpected inputs, integration failures, and operational edge cases.",
          "After launch, we monitor task completion, decision quality, errors, resource usage, and human interventions. We use these findings to refine workflows, improve reliability, and adapt agents as business requirements change.",
        ),
        outcome: pt("AI agents supported by ongoing testing, monitoring, and continuous improvement."),
      }),
    ],
  },
  {
    _type: "spComparison",
    eyebrow: "Chatbot vs. Agent",
    heading: "AI Chatbot or AI Agent: Which Does Your Business Need?",
    noteLabel: "Choose it when",
    left: {
      icon: "MessagesSquare",
      title: "AI Chatbot",
      description: pt("Built primarily for conversations. AI chatbots answer questions, guide users, collect information, and handle straightforward customer interactions."),
      chooseWhen: pt("Your main goal is improving customer support, lead capture, or conversational experiences."),
    },
    right: {
      icon: "Bot",
      title: "AI Agent",
      description: pt("Built to accomplish tasks. AI agents can interpret goals, plan actions, access connected tools, and execute multi-step workflows with appropriate permissions."),
      chooseWhen: pt("Your business needs to automate processes that involve multiple systems, decisions, and operational steps."),
    },
    footer: pt(
      `Not sure which solution fits your requirements? Explore our [[AI chatbot development services|/services/ai-chatbot-development-services]] or discuss your workflows with our [[AI agent consultants|${CALENDLY}]].`,
    ),
  },
  {
    _type: "spCtaBanner",
    heading: "Let's Build AI Agents That Do More Than Automate Simple Tasks",
    text: pt(
      "Tell us which workflows consume the most time, require repeated manual decisions, or involve disconnected systems. We'll help you identify where custom AI agents could reduce repetitive work and what it would take to implement them.",
    ),
    button: { label: "Let's Connect", style: "accent", link: CALL },
  },
  {
    _type: "spIndustries",
    eyebrow: "Industries",
    heading: "AI Agent Development Solutions for Different Industries",
    intro: pt(
      "Our AI agent development services are adaptable to different industries, team sizes, and levels of technical complexity. For small nonprofits, we prioritize focused, manageable solutions that support limited administrative resources and existing tools.",
    ),
    items: [
      item({ icon: "HeartPulse", title: "Healthcare", points: points("Patient intake coordination, appointment workflows, administrative documentation, and billing support.") }),
      item({ icon: "ShoppingBag", title: "eCommerce & Retail", points: points("Inventory monitoring, order processing, customer service workflows, and replenishment recommendations.") }),
      item({ icon: "House", title: "Real Estate", points: points("Property research, lead qualification, CRM updates, document processing, and appointment coordination.") }),
      item({ icon: "Landmark", title: "Finance & Insurance", points: points("Document review, account servicing workflows, claims processing support, and compliance-related reporting.") }),
      item({ icon: "Truck", title: "Manufacturing & Supply Chain", points: points("Supplier sourcing, inventory management, procurement coordination, and shipment monitoring.") }),
      item({ icon: "Monitor", title: "SaaS & Technology", points: points("Customer onboarding, IT support workflows, ticket management, and internal operations.") }),
      item({ icon: "GraduationCap", title: "Education & Small Nonprofits", points: points("Enrollment administration, donor communication support, volunteer coordination, reporting, and repetitive administrative tasks.") }),
      item({ icon: "Building2", title: "Professional Services", points: points("Client onboarding, document organization, research, reporting, and operational workflow management.") }),
    ],
  },
  // Section 6 "Results Our Clients Have Seen" is not added yet: the case studies
  // and testimonial are still TBD in the content doc.
  {
    _type: "spInsteadOf",
    eyebrow: "Why Choose Us",
    heading: "Why Businesses Choose Our AI Agent Development Company",
    intro: pt(
      "Our goal as an AI-powered development agency is to deliver AI solutions that support measurable business outcomes, fit existing operations, and remain manageable as your needs evolve.",
    ),
    leftLabel: "Instead of",
    rightLabel: "You get",
    rows: [
      item({ insteadOf: "Generic AI agent templates", youGet: pt("Custom agents developed around your actual business processes") }),
      item({ insteadOf: "Isolated AI tools", youGet: pt("Agents connected to your existing systems, workflows, and business data") }),
      item({ insteadOf: "Uncontrolled autonomous actions", youGet: pt("Defined permissions, approval checkpoints, and human oversight") }),
      item({ insteadOf: "Impressive demos with limited practical value", youGet: pt("Real-world workflow testing before deployment") }),
      item({ insteadOf: "Managing disconnected automation tools", youGet: pt("Coordinated agents capable of handling multi-step processes") }),
      item({ insteadOf: "Launching and walking away", youGet: pt("Continued monitoring, troubleshooting, and optimization") }),
    ],
  },
  {
    _type: "spTechStack",
    eyebrow: "Tech Stack",
    heading: "Technologies We Use for AI Agent Development",
    intro: pt(
      "We select technologies based on your business requirements, existing infrastructure, security needs, and agent capabilities.",
    ),
    categories: [
      item({ icon: "BrainCircuit", title: "AI Models", items: [tech("openai", "OpenAI GPT"), tech("claude"), tech("gemini"), tech("llama", "Llama")] }),
      item({ icon: "Layers", title: "Agentic AI Frameworks", items: [tech("langchain"), tech("langgraph", "LangGraph"), tech("crewai", "CrewAI"), tech("autogen", "AutoGen")] }),
      item({ icon: "Library", title: "Knowledge & Retrieval", items: [tech("llamaindex"), tech("pinecone"), tech("vectordb", "Vector databases"), tech("rag", "RAG architectures")] }),
      item({ icon: "Plug", title: "Business Integrations", items: [tech("hubspot"), tech("salesforce"), tech("zoho"), tech("shopify"), tech("slack"), tech("teams", "Microsoft Teams"), tech("api", "REST APIs")] }),
      item({ icon: "Workflow", title: "Workflow Automation", items: [tech("n8n"), tech("make"), tech("code", "Custom orchestration")] }),
      item({ icon: "CloudCog", title: "Cloud & Infrastructure", items: [tech("aws"), tech("azure", "Microsoft Azure"), tech("googlecloud")] }),
    ],
  },
  {
    _type: "spFinalCta",
    heading: "Ready to Build Custom AI Agents",
    headingHighlight: "for Your Business?",
    text: pt(
      "Book a free strategy session with our AI agent development team to explore how intelligent agents can simplify operations, connect your systems, and support your business goals.",
    ),
    listTitle: "You'll leave with",
    items: [
      item({ icon: "Lightbulb", title: "An understanding of which workflows are suitable for AI agent automation" }),
      item({ icon: "Route", title: "Recommended agent capabilities, integrations, and implementation approach" }),
      item({ icon: "ReceiptText", title: "An initial project timeline and cost estimate" }),
    ],
    button: { label: "Book Your Free AI Agent Strategy Session", style: "accent", link: CALL },
  },
  {
    _type: "spFaq",
    eyebrow: "FAQs",
    heading: "Frequently Asked Questions About AI Agent Development Services",
    addSchema: true,
    items: [
      ["What are AI agent development services?", "AI agent development services involve designing, building, integrating, and maintaining AI systems that can carry out tasks using business data and connected tools. Unlike basic automation, AI agents can interpret requests, plan actions, and manage multi-step processes within defined operational boundaries."],
      ["How much does custom AI agent development cost?", "The cost depends on workflow complexity, the number of agents, required integrations, data availability, and security requirements. A focused single-agent solution may cost less than a multi-agent system involving several business applications. Our team provides a project-specific estimate after reviewing your requirements."],
      ["How long does it take to develop and deploy an AI agent?", "Development timelines depend on the agent's responsibilities, system integrations, data readiness, and testing requirements. Focused agents generally require less implementation work than complex multi-agent systems. We define the expected timeline during discovery, including development, integration, testing, and deployment."],
      ["What is the difference between an AI agent and an AI chatbot?", "An AI chatbot primarily manages conversations, answers questions, and assists users through conversational interfaces. An AI agent is designed to complete tasks, coordinate actions, and use connected tools to achieve defined goals. Some modern chatbots also include agent capabilities, so the distinction depends on what the system is designed to do."],
      ["What is agentic AI, and how does it work?", "Agentic AI refers to AI systems designed to pursue defined goals through planning, tool use, and actions. Depending on the architecture, an agent may break a task into steps, retrieve information, interact with software, evaluate intermediate results, and request human approval when necessary."],
      ["Can AI agents integrate with our existing CRM, ERP, and business software?", "Yes. We design integrations with platforms such as HubSpot, Salesforce, Zoho, ERP systems, databases, and other software that provides suitable APIs or integration methods. The available actions depend on system permissions, technical compatibility, and business rules."],
      ["Do you provide custom AI agent development services for small businesses and nonprofits?", "Yes. We can design focused AI agent solutions for small businesses and nonprofits that want to reduce administrative work without building large, complex automation systems. Use cases may include donor record updates, volunteer coordination, routine reporting, and communications support."],
      ["Can you develop autonomous sourcing and inventory management agents?", "Yes. We develop sourcing and inventory workflows that can help with supplier research, quotation comparisons, stock monitoring, replenishment recommendations, and purchasing coordination. Sensitive financial or procurement actions can require human approval before execution."],
      ["Do you offer AI agent consulting services before development?", "Yes. Our AI agent consulting services help businesses identify suitable automation opportunities, evaluate technical requirements, define success metrics, and select an implementation approach before committing to development."],
      ["How do you make AI agents reliable and secure?", "We apply appropriate access permissions, action boundaries, validation checks, human approval steps, and monitoring based on each use case. We also test agents against realistic workflows, unexpected inputs, and integration failures before deployment. These measures reduce operational risk, although no AI system can be guaranteed error-free."],
      ["What is the difference between a single AI agent and a multi-agent system?", "A single AI agent handles a defined set of responsibilities. A multi-agent system uses several specialized agents that collaborate on different parts of a workflow. Multi-agent architectures can be useful for complex operations, but a single agent is often simpler and more economical when the task does not require coordination between multiple roles."],
      ["Which AI model or framework is best for custom AI agent development?", "The right model and framework depend on the agent's tasks, reasoning requirements, tool integrations, privacy needs, latency, and operating costs. We evaluate these factors before recommending a technology stack rather than relying on one model for every project."],
      ["Do you provide AI agent development services in New York and across the USA?", "Yes. CodeAutomation provides AI agent development services to businesses across the United States, including New York. Our US office is based in Naperville, Illinois, and projects can be delivered remotely through discovery sessions, development collaboration, testing, and ongoing support."],
      ["Can AI agents run business workflows without human supervision?", "AI agents can perform approved tasks with varying levels of autonomy. However, actions involving financial transactions, sensitive customer information, regulatory obligations, or important business decisions may require human approval. We define appropriate oversight based on the risks and responsibilities of each workflow."],
      ["What happens after our AI agent goes live?", "After deployment, we can monitor performance, investigate failures, refine prompts and tools, update integrations, and improve workflows as your requirements change. Ongoing optimization helps keep agents aligned with the business processes they support."],
    ].map(([question, answer]) => item({ question, answer: pt(answer) })),
  },
].map((section) => ({ _key: k(), ...section }));

const page = {
  _id: DOC_ID,
  _type: "servicePage",
  title: "AI Agent Development Services",
  slug: { _type: "slug", current: SLUG },
  sections,
  seo: {
    metaTitle: "Custom AI Agent Development Services in the USA | CodeAutomation",
    metaDescription:
      "AI agents built around your business processes that automate multi-step workflows, connect your existing systems, and get work done with less manual effort.",
    keywords: ["AI agent development services", "custom AI agent development", "agentic AI development", "AI agent consulting"],
    // Hidden from Google while on-page fixes are made. Turn off in Studio to publish.
    noIndex: true,
  },
  // No card on /services yet, so it doesn't sit next to the current AI Agent page.
  listing: {
    show: false,
    cardTitle: "AI Agent Development",
    cardDescription: "Custom AI agents that automate multi-step workflows across your existing systems, with human oversight built in.",
  },
};

const existing = await client.fetch(`*[_id in [$id, "drafts." + $id] || (_type == "servicePage" && slug.current == $slug)]{ _id }`, { id: DOC_ID, slug: SLUG });

console.log(`Page: /services/${SLUG}  (${page._id})`);
console.log(`Sections: ${sections.map((s) => s._type).join(", ")}`);
console.log(`FAQs: ${sections.find((s) => s._type === "spFaq").items.length}   noindex: ${page.seo.noIndex}   card on /services: ${page.listing.show}`);
console.log(existing.length ? `Already in Sanity: ${existing.map((d) => d._id).join(", ")}` : "Not in Sanity yet.");

if (!APPLY) {
  console.log('\nDry run. Add "-- --apply" to create and publish it (hidden from Google).');
  process.exit(0);
}

if (existing.length && !REPLACE) {
  console.log("\nStopped: the page already exists. Edit it in Studio, or add --replace to overwrite it (Studio edits are lost).");
  process.exit(1);
}

await client.transaction().createOrReplace(page).delete(`drafts.${DOC_ID}`).commit();
console.log(`\nPublished (noindex): https://codeautomation.ai/services/${SLUG}`);
