// Technology brands for the Tech Stack section. Shared by the Studio brand
// picker and the website renderer, so both always show the same logo/colour.
// Logos come from react-icons (Simple Icons / Tabler). Brands without a logo
// there, and generic items like "Web chat", use a matching lucide icon.

import type { ComponentType, CSSProperties } from "react";
import {
  SiOpenai, SiClaude, SiGooglegemini, SiMeta, SiHuggingface, SiLangchain, SiOllama,
  SiWhatsapp, SiMessenger, SiInstagram, SiFacebook, SiSlack, SiTelegram, SiDiscord,
  SiTwilio, SiLinkedin, SiHubspot, SiSalesforce, SiZoho, SiZendesk, SiIntercom,
  SiShopify, SiWoocommerce, SiStripe, SiPaypal, SiQuickbooks, SiXero, SiMailchimp,
  SiNotion, SiGooglesheets, SiAirtable, SiZapier, SiMake, SiGooglecalendar, SiCalendly,
  SiGmail, SiGoogledrive, SiDropbox, SiAsana, SiTrello, SiJira, SiGithub,
  SiAmazonwebservices, SiGooglecloud, SiVercel, SiDocker, SiKubernetes, SiFirebase,
  SiSupabase, SiMongodb, SiPostgresql, SiMysql, SiRedis, SiSanity, SiWordpress,
  SiReact, SiNextdotjs, SiNodedotjs, SiTypescript, SiJavascript, SiPython, SiDjango,
  SiLaravel, SiPhp, SiVuedotjs, SiAngular, SiFlutter, SiSwift, SiKotlin, SiDotnet,
  SiGoogleanalytics,
} from "react-icons/si";
import { TbBrandTeams, TbBrandAzure, TbBrandOffice, TbBrandOnedrive } from "react-icons/tb";
import {
  MessageSquare, MessageSquareText, Mail, PhoneCall, Plug, Database, Library,
  Rocket, Workflow, Globe, Code2, Smartphone,
} from "lucide-react";

export type BrandIcon = ComponentType<{ className?: string; style?: CSSProperties; size?: number | string }>;

export type Brand = { id: string; name: string; icon: BrandIcon; color: string; group: string };

const b = (id: string, name: string, icon: BrandIcon, color: string, group: string): Brand => ({
  id, name, icon: icon as BrandIcon, color, group,
});

export const BRANDS: Brand[] = [
  // AI models & frameworks
  b("openai", "OpenAI / GPT", SiOpenai, "#111111", "AI"),
  b("claude", "Claude", SiClaude, "#D97757", "AI"),
  b("gemini", "Gemini", SiGooglegemini, "#8E75B2", "AI"),
  b("llama", "Llama (Meta)", SiMeta, "#0467DF", "AI"),
  b("huggingface", "Hugging Face", SiHuggingface, "#FFB000", "AI"),
  b("ollama", "Ollama", SiOllama, "#111111", "AI"),
  b("langchain", "LangChain", SiLangchain, "#1C3C3C", "AI"),
  b("llamaindex", "LlamaIndex", Library, "#6B46C1", "AI"),
  b("pinecone", "Pinecone", Database, "#111111", "AI"),

  // Channels
  b("webchat", "Web chat", MessageSquare, "#1D92FB", "Channels"),
  b("sms", "SMS", MessageSquareText, "#1D92FB", "Channels"),
  b("email", "Email", Mail, "#1D92FB", "Channels"),
  b("voice", "Voice / Phone", PhoneCall, "#1D92FB", "Channels"),
  b("website", "Website", Globe, "#1D92FB", "Channels"),
  b("mobileapp", "Mobile app", Smartphone, "#1D92FB", "Channels"),
  b("whatsapp", "WhatsApp", SiWhatsapp, "#25D366", "Channels"),
  b("messenger", "Messenger", SiMessenger, "#0084FF", "Channels"),
  b("instagram", "Instagram", SiInstagram, "#E4405F", "Channels"),
  b("facebook", "Facebook", SiFacebook, "#0866FF", "Channels"),
  b("linkedin", "LinkedIn", SiLinkedin, "#0A66C2", "Channels"),
  b("slack", "Slack", SiSlack, "#4A154B", "Channels"),
  b("teams", "Microsoft Teams", TbBrandTeams, "#6264A7", "Channels"),
  b("telegram", "Telegram", SiTelegram, "#26A5E4", "Channels"),
  b("discord", "Discord", SiDiscord, "#5865F2", "Channels"),
  b("twilio", "Twilio", SiTwilio, "#F22F46", "Channels"),

  // CRM, business & automation tools
  b("hubspot", "HubSpot", SiHubspot, "#FF7A59", "Business tools"),
  b("salesforce", "Salesforce", SiSalesforce, "#00A1E0", "Business tools"),
  b("zoho", "Zoho", SiZoho, "#E42527", "Business tools"),
  b("gohighlevel", "GoHighLevel", Rocket, "#188BF6", "Business tools"),
  b("zendesk", "Zendesk", SiZendesk, "#03363D", "Business tools"),
  b("intercom", "Intercom", SiIntercom, "#6AFDEF", "Business tools"),
  b("shopify", "Shopify", SiShopify, "#7AB55C", "Business tools"),
  b("woocommerce", "WooCommerce", SiWoocommerce, "#96588A", "Business tools"),
  b("stripe", "Stripe", SiStripe, "#635BFF", "Business tools"),
  b("paypal", "PayPal", SiPaypal, "#003087", "Business tools"),
  b("quickbooks", "QuickBooks", SiQuickbooks, "#2CA01C", "Business tools"),
  b("xero", "Xero", SiXero, "#13B5EA", "Business tools"),
  b("mailchimp", "Mailchimp", SiMailchimp, "#241C15", "Business tools"),
  b("calendly", "Calendly", SiCalendly, "#006BFF", "Business tools"),
  b("googlecalendar", "Google Calendar", SiGooglecalendar, "#4285F4", "Business tools"),
  b("gmail", "Gmail", SiGmail, "#EA4335", "Business tools"),
  b("googlesheets", "Google Sheets", SiGooglesheets, "#34A853", "Business tools"),
  b("googledrive", "Google Drive", SiGoogledrive, "#4285F4", "Business tools"),
  b("office", "Microsoft 365", TbBrandOffice, "#D83B01", "Business tools"),
  b("onedrive", "OneDrive", TbBrandOnedrive, "#0078D4", "Business tools"),
  b("dropbox", "Dropbox", SiDropbox, "#0061FF", "Business tools"),
  b("notion", "Notion", SiNotion, "#111111", "Business tools"),
  b("airtable", "Airtable", SiAirtable, "#18BFFF", "Business tools"),
  b("asana", "Asana", SiAsana, "#F06A6A", "Business tools"),
  b("trello", "Trello", SiTrello, "#0052CC", "Business tools"),
  b("jira", "Jira", SiJira, "#0052CC", "Business tools"),
  b("zapier", "Zapier", SiZapier, "#FF4F00", "Business tools"),
  b("make", "Make", SiMake, "#6D00CC", "Business tools"),
  b("n8n", "n8n", Workflow, "#EA4B71", "Business tools"),
  b("api", "Custom API", Plug, "#1D92FB", "Business tools"),

  // Cloud, data & dev
  b("aws", "AWS", SiAmazonwebservices, "#FF9900", "Cloud & dev"),
  b("azure", "Azure", TbBrandAzure, "#0078D4", "Cloud & dev"),
  b("googlecloud", "Google Cloud", SiGooglecloud, "#4285F4", "Cloud & dev"),
  b("vercel", "Vercel", SiVercel, "#111111", "Cloud & dev"),
  b("docker", "Docker", SiDocker, "#2496ED", "Cloud & dev"),
  b("kubernetes", "Kubernetes", SiKubernetes, "#326CE5", "Cloud & dev"),
  b("firebase", "Firebase", SiFirebase, "#FFCA28", "Cloud & dev"),
  b("supabase", "Supabase", SiSupabase, "#3FCF8E", "Cloud & dev"),
  b("mongodb", "MongoDB", SiMongodb, "#47A248", "Cloud & dev"),
  b("postgresql", "PostgreSQL", SiPostgresql, "#4169E1", "Cloud & dev"),
  b("mysql", "MySQL", SiMysql, "#4479A1", "Cloud & dev"),
  b("redis", "Redis", SiRedis, "#FF4438", "Cloud & dev"),
  b("github", "GitHub", SiGithub, "#181717", "Cloud & dev"),
  b("sanity", "Sanity", SiSanity, "#F03E2F", "Cloud & dev"),
  b("wordpress", "WordPress", SiWordpress, "#21759B", "Cloud & dev"),
  b("googleanalytics", "Google Analytics", SiGoogleanalytics, "#E37400", "Cloud & dev"),
  b("react", "React", SiReact, "#61DAFB", "Cloud & dev"),
  b("nextjs", "Next.js", SiNextdotjs, "#111111", "Cloud & dev"),
  b("nodejs", "Node.js", SiNodedotjs, "#5FA04E", "Cloud & dev"),
  b("typescript", "TypeScript", SiTypescript, "#3178C6", "Cloud & dev"),
  b("javascript", "JavaScript", SiJavascript, "#F7DF1E", "Cloud & dev"),
  b("python", "Python", SiPython, "#3776AB", "Cloud & dev"),
  b("django", "Django", SiDjango, "#092E20", "Cloud & dev"),
  b("laravel", "Laravel", SiLaravel, "#FF2D20", "Cloud & dev"),
  b("php", "PHP", SiPhp, "#777BB4", "Cloud & dev"),
  b("vue", "Vue.js", SiVuedotjs, "#4FC08D", "Cloud & dev"),
  b("angular", "Angular", SiAngular, "#DD0031", "Cloud & dev"),
  b("flutter", "Flutter", SiFlutter, "#02569B", "Cloud & dev"),
  b("swift", "Swift", SiSwift, "#F05138", "Cloud & dev"),
  b("kotlin", "Kotlin", SiKotlin, "#7F52FF", "Cloud & dev"),
  b("dotnet", ".NET", SiDotnet, "#512BD4", "Cloud & dev"),
  b("code", "Custom code", Code2, "#1D92FB", "Cloud & dev"),
];

export const BRAND_BY_ID: Record<string, Brand> = Object.fromEntries(BRANDS.map((x) => [x.id, x]));

export const getBrand = (id?: string) => (id ? BRAND_BY_ID[id] : undefined);
