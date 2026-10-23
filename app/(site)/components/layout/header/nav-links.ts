// Links in the site header. Desktop shows them as mega menus with icons; the
// phone menu lists the same pages, in its own order and wording.

export interface NavCard {
  href: string;
  title: string;
  description: string;
  icon: string;
}

export interface NavLink {
  href: string;
  label: string;
}

const service = (slug: string) => `/services/${slug}`;

// Services mega menu: two columns of cards.
export const SERVICE_COLUMNS: NavCard[][] = [
  [
    { href: service("ai-agent"), title: "AI Agent Development", description: "Informed Decision Making Process", icon: "/logo-web-component.svg" },
    { href: service("custom-software-development-services"), title: "Software Development", description: "Desktop and Web Development Solutions", icon: "/logo-javascript.svg" },
    { href: service("ai-business-automation-solutions"), title: "AI Automation", description: "Increase Efficiency with AI Workflows", icon: "/logo-buffer.svg" },
    { href: service("custom-cms-development-services"), title: "CMS", description: "Manage Digital Content", icon: "/logo-codepen.svg" },
  ],
  [
    { href: service("qa-testing-services"), title: "QA Testing & Automation", description: "Ensure the Highest Quality", icon: "/logo-apple-ar.svg" },
    { href: service("mobile-app-development-services"), title: "Mobile App development", description: "Transform Idea into Market Leading App", icon: "/logo-react.svg" },
    { href: service("ai-software-development-services"), title: "AI Software Development", description: "Scale with AI Software Solutions", icon: "/logo-ionitron.svg" },
    { href: service("ui-ux-design-services"), title: "Design Services", description: "Boost your Online Presence", icon: "/logo-figma.svg" },
  ],
];

// Third column of the services menu.
export const INDUSTRY_LINKS: NavLink[] = [
  { href: "/about/industries#healthcare", label: "Healthcare" },
  { href: "/about/industries#ecommerce-retail", label: "E-Commerce & Retail" },
  { href: "/about/industries#finance", label: "Finance" },
  { href: "/about/industries#real-estate", label: "Real Estate" },
  { href: "/about/industries#manufacturing", label: "Manufacturing" },
  { href: "/about/industries#industrial-tech", label: "Industrial Tech" },
  { href: "/about/industries#logistics", label: "Logistics" },
  { href: "/about/industries#education", label: "Education" },
];

// About mega menu: three columns of cards.
export const ABOUT_COLUMNS: NavCard[][] = [
  [
    { href: "/about/service-summary", title: "Service Summary", description: "Service Essence", icon: "/documents-sharp.svg" },
    { href: "/partnership-program", title: "Partner with Us", description: "Grow Together", icon: "/partnership-icon.svg" },
    { href: "/value-blueprints", title: "Value BluePrints", description: "Efficient Deployment", icon: "/cash.svg" },
    { href: "/about/happy-clients", title: "Happy Clients", description: "Trusted Partnerships", icon: "/clients-icon.svg" },
  ],
  [
    { href: "/about/ai-tools-for-website-and-app-development", title: "AI Tools", description: "Web & App Dev", icon: "/aperture-sharp.svg" },
    { href: "/adnan-ghaffar-ceo-codeautomation", title: "About CEO", description: "Founder & AI Leader", icon: "/person-sharp.svg" },
    { href: "/about/discovery-process", title: "Discovery Process", description: "Innovative Strategy", icon: "/server.svg" },
    { href: "/case-studies", title: "Case-Studies", description: "Success Stories", icon: "/library.svg" },
  ],
  [
    { href: "/lifeatca", title: "Life At CA", description: "Employee Experiences", icon: "/images.svg" },
    { href: "/offshore-software-development", title: "Offshore Development", description: "Global Development", icon: "/globe-sharp.svg" },
    { href: "/brochure", title: "Brochure Downloads", description: "Your Ultimate Guide", icon: "/grid.svg" },
    { href: "/news", title: "News", description: "Stay Updated", icon: "/reader.svg" },
  ],
];

export const MOBILE_SERVICE_LINKS: NavLink[] = [
  { href: service("ai-agent"), label: "AI Agent Development" },
  { href: service("custom-software-development-services"), label: "Software Development" },
  { href: service("custom-cms-development-services"), label: "CMS" },
  { href: service("ai-business-automation-solutions"), label: "AI Automation" },
  { href: service("qa-testing-services"), label: "QA Testing & Automation" },
  { href: service("mobile-app-development-services"), label: "Mobile App Development" },
  { href: service("ui-ux-design-services"), label: "Design Services" },
  { href: service("ai-software-development-services"), label: "AI Software Development" },
];

export const MOBILE_ABOUT_LINKS: NavLink[] = [
  { href: "/adnan-ghaffar-ceo-codeautomation", label: "About CEO" },
  { href: "/about/service-summary", label: "Service Summary" },
  { href: "/about/industries", label: "Our Industries" },
  { href: "/lifeatca", label: "Life At CA" },
  { href: "/partnership-program", label: "Partner with Us" },
  { href: "/value-blueprints", label: "Value BluePrints" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/offshore-software-development", label: "Offshore Development" },
];

// Plain links shown after the two menus.
export const TOP_LINKS: NavLink[] = [
  { href: "/blogs", label: "Blogs" },
  { href: "/technologies", label: "Technologies" },
];

export const PHONE = { href: "tel:+1-850-558-4691", label: "850 558 4691" };
export const CONTACT_URL = "https://calendly.com/adnanghaffar";
