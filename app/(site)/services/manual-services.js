// Service pages that are hand-built in code (not managed in Sanity) but should
// still appear as cards on /services. Same shape as the Sanity `logicalServices`
// query, except `iconSrc` is a plain /public path instead of a Sanity image.
//
// To add a new manual page: add an entry here with its folder name as urlPath.
// If the same urlPath is later added in Sanity, the Sanity entry wins.
const MANUAL_SERVICES = [
  {
    _id: "manual-marketing-automation-services",
    urlPath: "marketing-automation-services",
    serviceCardTitle: "Marketing Automation Services",
    serviceDesc:
      "Turn your marketing into a revenue-generating machine with automated campaigns, lead nurturing and multi-channel workflows.",
    iconSrc: "/service-icons/marketing-automation.png",
  },
  {
    _id: "manual-social-media-automation-workflow",
    urlPath: "social-media-automation-workflow",
    serviceCardTitle: "Social Media Automation",
    serviceDesc:
      "Automate Facebook, Instagram and LinkedIn posts and reels, from AI-generated captions and hashtags to scheduled publishing.",
    iconSrc: "/service-icons/social-media-automation.png",
  },
  {
    _id: "manual-ai-chatbot-development-services",
    urlPath: "ai-chatbot-development-services",
    serviceCardTitle: "AI Chatbot Development Services",
    serviceDesc:
      "Custom AI chatbots trained on your business data and connected to your CRM, helpdesk, and calendar to resolve queries, qualify leads, and book appointments 24/7.",
    iconSrc: "/service-icons/ai-chatbot-development.png",
  },
];

export default MANUAL_SERVICES;
