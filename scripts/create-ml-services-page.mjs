// Moves /services/ml-services onto the Service Page builder (the new
// template), using the approved "Machine Learning Services" content doc.
// A Service Page with this address takes precedence over the old Logical
// Services page, which is left in Sanity untouched: deleting this Service Page
// brings the old page back.
//
//   npx sanity exec scripts/create-ml-services-page.mjs --with-user-token                       (dry run)
//   npx sanity exec scripts/create-ml-services-page.mjs --with-user-token -- --apply            (create + publish)
//   npx sanity exec scripts/create-ml-services-page.mjs --with-user-token -- --apply --replace  (overwrite, loses Studio edits)

import sanityCli from "sanity/cli";

const { getCliClient } = sanityCli;
const args = new Set(process.argv.slice(2));
const APPLY = args.has("--apply");
const REPLACE = args.has("--replace");
const client = getCliClient({ apiVersion: "2024-03-14" });

const DOC_ID = "servicePage-ml-services";
const SLUG = "ml-services";

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

const CALENDLY = "https://calendly.com/adnanghaffar/codeautomation";
const CALL = { linkType: "external", url: CALENDLY, openInNewTab: true };
const item = (fields) => ({ _key: k(), ...fields });
const tech = (brand, title) => item({ brand, ...(title ? { title } : {}) });

const sections = [
  {
    _type: "spHero",
    badge: "Machine Learning Development and Consulting",
    badgeIcon: "BrainCircuit",
    heading: "Machine Learning Development Company and ML Services in the",
    headingHighlight: "USA",
    subheading: pt(
      "Most ML projects stall between the prototype and production. CodeAutomation builds machine learning systems that reach your actual workflows — not just your demo environment. From use case scoping and data preparation through custom model development and live deployment, we cover the full journey for US businesses.",
    ),
    highlights: [
      item({ text: pt("Custom machine learning solutions built around your data and business goals") }),
      item({ text: pt("ML models developed, tested and integrated into real workflows") }),
      item({ text: pt("Deployment, monitoring and continuous improvement after launch") }),
    ],
    primaryButton: { label: "Book an ML Strategy Call", style: "primary", link: CALL },
    secondaryButton: { label: "Explore Our ML Services", style: "accent", link: { linkType: "internal", path: "#solutions" } },
    // Section 2 "Trusted by / Reviews": the hero's trust bar (client logos and review ratings).
    showTrustBar: true,
  },
  {
    _type: "spIntro",
    eyebrow: "About Our Machine Learning Development",
    heading: "Machine Learning Built for Real Business Decisions",
    body: pt(
      "A useful machine learning system does more than produce an impressive chart. It takes the data a business can realistically collect, learns patterns relevant to a defined task, and produces outputs that teams can evaluate and use. As a machine learning development company, CodeAutomation supports that full journey — from early consulting and feasibility checks to custom model development, software integration and operational support.",
      "Our ML development services support demand forecasting, anomaly detection, recommendation systems, document classification and other well-defined prediction tasks. We start by agreeing on the decision the model should inform, the data available, and what a successful result looks like before writing a line of code. For teams that need broader workflow automation alongside ML, our [[AI automation services|/services/ai-business-automation-solutions]] cover the full operational layer.",
    ),
  },
  {
    _type: "spProblem",
    eyebrow: "The Problem",
    heading: "Why Business Data Rarely Turns Into Useful Predictions on Its Own",
    intro: pt(
      "Businesses often have years of transactions, customer interactions, equipment logs or operational records, yet still rely on manual estimates or disconnected spreadsheets. The obstacle is not always a lack of data. Records may be incomplete, definitions may vary between systems, and teams may not know how to translate a business problem into a measurable ML task.",
    ),
    body: pt(
      "A model trained on unreliable data produces confident wrong answers. A model built without an integration plan may never reach the people who need it. And a model that worked at launch can degrade quietly as conditions change. These are the gaps CodeAutomation is built to close — before they become expensive surprises.",
    ),
    badTitle: "Common barriers we address",
    badItems: [
      "Inconsistent or fragmented data across systems",
      "Unclear success metrics or poorly defined prediction targets",
      "Models that are difficult to integrate into existing applications",
      "Limited monitoring after deployment",
      "Security, privacy and governance requirements",
    ],
    goodTitle: "What effective ML projects require",
    goodItems: [
      "A specific business decision to support",
      "Representative data and realistic evaluation criteria",
      "A plan for integration and human review from day one",
      "Clear ownership of updates, monitoring and retraining",
    ],
  },
  {
    _type: "spIconGrid",
    theme: "dark",
    eyebrow: "Core ML Capabilities",
    heading: "What Our Machine Learning Solutions Can Do",
    items: [
      item({ icon: "TrendingUp", title: "Forecast Outcomes", description: pt("Estimate future demand, workload or resource needs using suitable historical and contextual data.") }),
      item({ icon: "Activity", title: "Identify Patterns and Anomalies", description: pt("Surface unusual transactions, performance changes or operational events for further investigation.") }),
      item({ icon: "FolderCheck", title: "Classify and Extract Information", description: pt("Categorize documents, messages, images or records to help teams organize incoming data.") }),
      item({ icon: "Target", title: "Recommend Relevant Options", description: pt("Support personalized content, product or next-best-action suggestions using behavioral signals.") }),
      item({ icon: "Languages", title: "Analyze Images and Language", description: pt("Apply computer vision or natural language processing methods for tasks where the data and use case support them.") }),
      item({ icon: "Plug", title: "Integrate Predictions Into Workflows", description: pt("Deliver model outputs through APIs, dashboards or business applications with appropriate review controls.") }),
    ],
  },
  {
    _type: "spImageCards",
    anchorId: "solutions",
    eyebrow: "Machine Learning Solutions We Develop",
    heading: "Custom ML Solutions for Different Business Challenges",
    intro: pt(
      "The right architecture depends on the decision you want to improve — not the popularity of a particular algorithm. Our custom machine learning development services are scoped around the following applications.",
    ),
    tagsLabel: "Best for",
    items: [
      item({ icon: "LineChart", title: "Predictive Analytics and Forecasting", description: pt("Use historical patterns to support planning for sales, demand, capacity or resource allocation. All forecasting models include confidence ranges and are designed to be evaluated against live conditions as part of ongoing use."), tags: ["Retail", "Logistics", "Operations"] }),
      item({ icon: "ShieldCheck", title: "Fraud and Anomaly Detection", description: pt("Flag unusual transactions, account behavior or operational patterns for review and human evaluation."), tags: ["Fintech", "Insurance", "Digital platforms"] }),
      item({ icon: "Sparkles", title: "Recommendation Engines", description: pt("Build ranking and recommendation components using relevant product, user and interaction data, with privacy considerations built into the design."), tags: ["eCommerce", "SaaS", "Media"] }),
      item({ icon: "Search", title: "Computer Vision Applications", description: pt("Develop models to identify or classify defined objects and visual patterns in images, supported by labeled training data and human validation."), tags: ["Manufacturing", "Inspection", "Document workflows"] }),
      item({ icon: "MessagesSquare", title: "Natural Language Processing", description: pt("Extract categories, entities or sentiment from text and route results into searchable repositories or operational tools."), tags: ["Support", "Document-heavy operations", "Analytics"] }),
      item({ icon: "BrainCircuit", title: "Deep Learning Development Solutions", description: pt("Evaluate neural network approaches for image, language or complex pattern tasks where they offer a measurable advantage over simpler models."), tags: ["Complex datasets", "Specialized products"] }),
    ],
  },
  {
    _type: "spServicesGrid",
    eyebrow: "Our ML Development Services",
    heading: "End-to-End ML Development Services",
    outcomeLabel: "Outcome",
    items: [
      item({
        icon: "Compass",
        title: "ML Consulting and Feasibility",
        description: pt("We assess the business objective, data availability, technical constraints and success measures. The discovery phase identifies whether ML is the right fit, what the minimum viable experiment should test, and how results will be used."),
        outcome: pt("A scoped ML roadmap and evaluation plan."),
      }),
      item({
        icon: "Database",
        title: "Data Preparation and Engineering",
        description: pt("Useful models depend on reliable data. We help organize datasets, address quality issues, create repeatable preparation steps and document data definitions, access rules and lineage."),
        outcome: pt("A defined and testable data pipeline."),
      }),
      item({
        icon: "Code2",
        title: "Custom ML Model Development",
        description: pt("Our ML model development services cover feature selection, model selection, training and validation using task-appropriate methods. We benchmark candidates against a baseline to ensure complexity is justified by performance."),
        outcome: pt("An evaluated model for the chosen use case."),
      }),
      item({
        icon: "Layers",
        title: "Deep Learning and Advanced Model Development",
        description: pt("For problems involving images, language or complex patterns, we assess deep learning where the data and performance requirements support it."),
        outcome: pt("A justified model architecture with measured trade-offs."),
      }),
      item({
        icon: "Blocks",
        title: "Machine Learning App and Software Integration",
        description: pt("Our machine learning app development services connect model outputs with web apps, business platforms or internal tools. APIs, review screens and exception handling help users work confidently with model results. Where the integration requires new application components, our [[custom software development|/services/custom-software-development-services]] team handles the build alongside the ML layer."),
        outcome: pt("ML functionality accessible inside an actual workflow."),
      }),
      item({
        icon: "CloudCog",
        title: "MLOps, Deployment and Optimization",
        description: pt("We plan model deployment, versioning, monitoring and retraining triggers. Evaluation continues after release so shifts in data or performance are detected and addressed early."),
        outcome: pt("A supportable production workflow with monitoring."),
      }),
    ],
  },
  {
    _type: "spComparison",
    eyebrow: "Custom ML Development or Off-the-Shelf Tools?",
    heading: "Custom Machine Learning Development or Off-the-Shelf Tools?",
    noteLabel: "Choose it when",
    left: {
      icon: "Code2",
      title: "Custom ML Development",
      description: pt("Custom ML development is the better fit when your data, workflow, decision logic or risk requirements are distinctive enough that a generic model would miss what matters. It requires a real investment in data preparation and ongoing maintenance — but it also means the model is trained on your actuals, integrated into your tools, and built to be maintained by your team."),
      chooseWhen: pt("Your data, workflow, decision logic or risk requirements are distinctive."),
    },
    right: {
      icon: "Blocks",
      title: "Off-the-Shelf ML Tools",
      description: pt("Off-the-shelf ML tools work well when the use case is common, supported integrations exist, and flexibility requirements are low. They offer a faster starting point. The limitation is that your model learns from generic data, runs on a shared architecture, and may not reflect the specific patterns in your business."),
      chooseWhen: pt("The use case is common, supported integrations exist, and flexibility requirements are low."),
    },
    footer: pt(
      `Not sure which applies to your situation? The right answer usually becomes clear within the first ML feasibility session. Book one before you commit to either path: [[Book an ML Feasibility Call|${CALENDLY}]].`,
    ),
  },
  {
    _type: "spCtaBanner",
    heading: "Have a Data Problem That Needs a Better Answer?",
    text: pt(
      "Tell us what your team is trying to predict, classify or detect. We will discuss the data you have, your current decision process, the technical constraints, and what a sensible first experiment looks like — before you commit to a full build.",
    ),
    button: { label: "Discuss Your ML Use Case", style: "accent", link: CALL },
  },
  {
    _type: "spIndustries",
    eyebrow: "Industries",
    heading: "Machine Learning Development for Different Industries",
    items: [
      item({ icon: "HeartPulse", title: "Healthcare", points: ["Operational forecasting", "Document categorization", "Decision-support tooling built with appropriate clinical oversight and privacy safeguards"] }),
      item({ icon: "ShoppingBag", title: "eCommerce and Retail", points: ["Demand forecasting", "Product recommendations", "Churn analysis", "Inventory planning"] }),
      item({ icon: "Landmark", title: "Finance and Insurance", points: ["Anomaly detection", "Risk-support analysis", "Document processing with auditable human review steps"] }),
      item({ icon: "House", title: "Real Estate", points: ["Market trend analysis", "Lead scoring", "Portfolio analytics using available, reliable data"] }),
      item({ icon: "Settings", title: "Manufacturing and Supply Chain", points: ["Predictive maintenance research", "Visual quality checks", "Supply-demand forecasting"] }),
      item({ icon: "Truck", title: "Logistics", points: ["Volume forecasting", "Exception detection", "Capacity planning"] }),
      item({ icon: "Monitor", title: "SaaS and Technology", points: ["Customer health signals", "Churn-risk modeling", "Intelligent product features"] }),
      item({ icon: "GraduationCap", title: "Education", points: ["Enrollment forecasting", "Engagement analysis", "Administrative insights with appropriate privacy controls"] }),
    ],
  },
  {
    _type: "spInsteadOf",
    eyebrow: "Why Choose CodeAutomation",
    heading: "Why Work With Our Machine Learning Development Team?",
    leftLabel: "Instead of",
    rightLabel: "Our approach",
    rows: [
      item({ insteadOf: "Building a model without a defined purpose", youGet: pt("Start with a business objective, baseline and measurable acceptance criteria. You know before development begins what the model needs to achieve and how you will verify it has.") }),
      item({ insteadOf: "Forcing your data into a generic product", youGet: pt("Assess custom ML development against your existing systems and available data. The model learns from your actuals, not a training set that approximates your industry.") }),
      item({ insteadOf: "Focusing only on training accuracy", youGet: pt("Evaluate errors, bias, latency and usability in the intended workflow. The model performs in production, not just on a benchmark.") }),
      item({ insteadOf: "Delivering a disconnected prototype", youGet: pt("Plan APIs, applications, deployment and human review from the start. Your team gets a system they can use, not a notebook they cannot integrate.") }),
      item({ insteadOf: "Treating launch as the finish line", youGet: pt("Include monitoring, versioning and ongoing model evaluation. Performance is tracked after release and addressed before it affects decisions.") }),
    ],
  },
  {
    _type: "spTechStack",
    eyebrow: "Technology Stack",
    heading: "Technologies for Machine Learning Development",
    intro: pt("Technology selection depends on the task, existing infrastructure, data governance and deployment requirements."),
    categories: [
      item({ icon: "BrainCircuit", title: "Languages and ML Frameworks", items: [tech("python"), tech("scikitlearn", "scikit-learn"), tech("tensorflow", "TensorFlow"), tech("pytorch", "PyTorch"), tech("keras", "Keras")] }),
      item({ icon: "Database", title: "Data Processing", items: [tech("spark", "Apache Spark"), tech("hadoop", "Hadoop"), tech("mongodb")] }),
      item({ icon: "Rocket", title: "Deployment and Delivery", items: [tech("docker"), tech("jenkins", "Jenkins")] }),
      item({ icon: "Activity", title: "Monitoring and Observability", items: [tech("prometheus", "Prometheus"), tech("grafana", "Grafana")] }),
    ],
  },
  {
    _type: "spFaq",
    eyebrow: "FAQs",
    heading: "Frequently Asked Questions",
    addSchema: true,
    items: [
      ["What does a machine learning development company do?", "A machine learning development company helps businesses frame predictive problems, prepare data, develop and evaluate models, integrate results into applications, and monitor those models after deployment."],
      ["What is included in ML development services?", "Services commonly include consulting, data preparation, training and testing, model integration, deployment and ongoing monitoring. The exact scope depends on your available data and business objectives."],
      ["How is machine learning different from general AI development?", "Machine learning is a branch of AI that learns patterns from data for tasks such as prediction and classification. AI development can also include rules-based systems, language-model applications and agentic workflows."],
      ["Do you offer custom ML model development services?", "The ML services page describes custom model development, training and tuning. Specific methods and deliverables should be scoped to your data, use case and evaluation requirements."],
      ["Can you integrate ML into an existing application?", "ML outputs can often be exposed through APIs, dashboards or features within existing software, depending on architecture, permissions and integration requirements."],
      ["How long does machine learning development take?", "Timelines depend on data readiness, complexity, labeling effort, integration and acceptance testing. A focused feasibility study can help establish a realistic schedule before a full implementation."],
      ["What affects the cost of machine learning consulting and development?", "Cost depends on project scope, data quality, model complexity, integrations, security needs and ongoing support. A custom estimate should follow discovery."],
      ["When should we consider machine learning outsourcing?", "Machine learning outsourcing can be useful when an internal team needs specialized model-development or deployment capacity. Compare vendors on data security, evaluation methods, ownership and ongoing support—not price alone."],
      ["What is the difference between a proof of concept and production ML?", "A proof of concept tests whether an approach is feasible on representative data. Production ML also needs dependable integration, monitoring, reliability controls and a maintenance plan."],
      ["Can machine learning work with sensitive business information?", "It can, provided the architecture, contracts, permissions and processing controls meet the organization’s applicable requirements. Sensitive use cases need an explicit governance and security review."],
    ].map(([question, answer]) => item({ question, answer: pt(answer) })),
  },
].map((section) => ({ _key: k(), ...section }));

// The old page's card on /services: keep its icon so the card looks the same.
const legacy = await client.fetch(`*[_type == "logicalServices" && urlPath == $slug][0]{ _id, cardIcon }`, { slug: SLUG });

const page = {
  _id: DOC_ID,
  _type: "servicePage",
  title: "Machine Learning Development Services",
  slug: { _type: "slug", current: SLUG },
  sections,
  seo: {
    metaTitle: "Machine Learning Development Company and ML Services | CodeAutomation",
    metaDescription:
      "US-based machine learning development company offering ML consulting, custom model development, predictive analytics and MLOps. Turn data into decisions.",
    keywords: [
      "machine learning development company",
      "ML development services",
      "AI and machine learning development services",
      "machine learning app development services",
      "predictive analytics",
      "ML consulting",
    ],
    // The address is already public and indexed.
    noIndex: false,
  },
  listing: {
    show: true,
    cardTitle: "ML Services",
    cardDescription: "Machine learning consulting, custom model development, predictive analytics and MLOps that turn your business data into decisions.",
    ...(legacy?.cardIcon?.asset ? { cardIcon: legacy.cardIcon } : {}),
  },
};

const existing = await client.fetch(`*[_id in [$id, "drafts." + $id] || (_type == "servicePage" && slug.current == $slug)]{ _id }`, { id: DOC_ID, slug: SLUG });

console.log(`Page: /services/${SLUG}  (${page._id})`);
console.log(`Replaces old page: ${legacy?._id ?? "none found"} (kept in Sanity)`);
console.log(`Sections: ${sections.map((s) => s._type).join(", ")}`);
console.log(`FAQs: ${sections.find((s) => s._type === "spFaq").items.length}   card icon copied: ${Boolean(page.listing.cardIcon)}`);
console.log(existing.length ? `Already in Sanity: ${existing.map((d) => d._id).join(", ")}` : "Not in Sanity yet.");

if (!APPLY) {
  console.log('\nDry run. Add "-- --apply" to create and publish it.');
  process.exit(0);
}

if (existing.length && !REPLACE) {
  console.log("\nStopped: the page already exists. Edit it in Studio, or add --replace to overwrite it (Studio edits are lost).");
  process.exit(1);
}

await client.transaction().createOrReplace(page).delete(`drafts.${DOC_ID}`).commit();
console.log(`\nPublished: https://codeautomation.ai/services/${SLUG}`);
