// Default text for the /adnan-ghaffar page. The website uses it for any field
// left empty in the "Adnan Ghaffar Page" document, and
// scripts/seed-adnan-ghaffar-page.mjs copies it into that document.
// No imports, so the seed script can load it too.

export interface FocusArea {
  title: string;
  text: string;
  link?: string;
}

export interface AdnanGhaffarPageContent {
  seoTitle: string;
  seoDescription: string;
  role: string;
  introduction: string;
  aboutHeading: string;
  aboutParagraphs: string[];
  focusHeading: string;
  focusAreas: FocusArea[];
  articlesHeading: string;
  articlesIntro: string;
  ctaHeading: string;
  ctaText: string;
  ctaButtonLabel: string;
  ctaLink: string;
}

export const ADNAN_GHAFFAR_DEFAULTS: AdnanGhaffarPageContent = {
  seoTitle: "Adnan Ghaffar | Founder & CEO of CodeAutomation",
  seoDescription:
    "Meet Adnan Ghaffar, founder and CEO of CodeAutomation. Explore his work in AI strategy, custom AI agents, business automation and software development.",
  role: "Founder & CEO of CodeAutomation",
  introduction:
    "Adnan Ghaffar is the founder and CEO of CodeAutomation, an AI consulting and software development company. His work focuses on AI strategy, custom AI agents, business workflow automation and software systems built around business requirements. He leads a team working across AI development, software architecture and application delivery.",
  aboutHeading: "About Adnan Ghaffar",
  aboutParagraphs: [
    "At CodeAutomation, Adnan brings together technology strategy and software development to help businesses plan and build AI-enabled applications. His areas of focus include agentic AI, enterprise automation, custom software and system integration.",
    "His approach starts with understanding the business problem, existing workflows and systems. The CodeAutomation team helps organizations discuss their requirements and define the scope of an AI, automation or software development project.",
  ],
  focusHeading: "Areas of Focus",
  focusAreas: [
    { title: "AI strategy", text: "Identifying business use cases and defining requirements for AI initiatives." },
    {
      title: "Custom AI agents",
      text: "Developing applications that use AI to support tasks and connected workflows.",
      link: "/services/ai-agent",
    },
    {
      title: "Business automation",
      text: "Connecting systems and automating repeatable processes.",
      link: "/services/ai-business-automation-solutions",
    },
    {
      title: "Custom software development",
      text: "Building and integrating applications around business needs.",
      link: "/services/custom-software-development-services",
    },
  ],
  articlesHeading: "Articles on AI and Software Development",
  articlesIntro: "Explore articles on AI agents, business automation and software development featured on Adnan’s profile.",
  ctaHeading: "Discuss Your AI or Software Project",
  ctaText:
    "Share the business problem, existing systems and workflows you want to improve. Connect with Adnan and the CodeAutomation team to discuss the scope of an AI, automation or custom software project.",
  ctaButtonLabel: "Discuss Your Project",
  ctaLink: "https://calendly.com/adnanghaffar/codeautomation",
};
