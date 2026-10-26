// Content for the "Content's Automated Journey" walkthrough.

import {
  BarChart, Bell, Brain, Calendar, Clock, FileText, Filter, FormInput, Globe, ImageIcon, Layers, Mail,
  MessageSquare, Palette, Shield, Slack, Split, Upload, Users, Video, Zap, type LucideIcon,
} from "lucide-react";

export const CONSULTATION_URL = "https://calendly.com/adnanghaffar/codeautomation?utm_source=website&utm_campaign=services";

export type PhaseId = "submission" | "activation" | "processing" | "results";

export interface Phase {
  id: PhaseId;
  number: number;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  gradient: string;
  accent: string;
}

export const PHASES: Phase[] = [
  { id: "submission", number: 1, title: "Content Submission", subtitle: "Everything starts with one simple form", icon: FormInput, gradient: "from-[#00A3FF] to-[#0066CC]", accent: "text-[#0066CC]" },
  { id: "activation", number: 2, title: "Automation Start", subtitle: "Magic happens automatically", icon: Zap, gradient: "from-[#00C9A7] to-[#00A3FF]", accent: "text-[#00C9A7]" },
  { id: "processing", number: 3, title: "AI Processing", subtitle: "AI-powered content transformation", icon: Brain, gradient: "from-[#7B61FF] to-[#5A43CC]", accent: "text-[#7B61FF]" },
  { id: "results", number: 4, title: "Scheduled & Notified", subtitle: "Complete transparency", icon: Bell, gradient: "from-[#FF6B82] to-[#FF4757]", accent: "text-[#FF6B82]" },
];

export const FORM_FIELDS = [
  { icon: Globe, label: "Platforms", value: "Facebook, Instagram, LinkedIn" },
  { icon: FileText, label: "Post Title & Description", value: "Engaging content that converts" },
  { icon: Layers, label: "Category", value: "Business, Lifestyle, Education" },
  { icon: Split, label: "Post Type", value: "Post or Reel" },
  { icon: Calendar, label: "Posting Date & Time", value: "Optimal times selected" },
  { icon: Palette, label: "Background Color/Mood", value: "Brand-aligned visuals" },
  { icon: MessageSquare, label: "Caption Instructions", value: "Tone, style, CTAs" },
  { icon: Filter, label: "Hashtag Instructions", value: "Relevant & trending" },
];

export const WHY_FORM_WORKS = ["Structured data for perfect automation", "No room for errors", "Brand guidelines enforced", "One-time setup"];

export const ACTIVATION_PROGRESS: { label: string; status: "completed" | "active" | "pending" }[] = [
  { label: "Form Submission Received", status: "completed" },
  { label: "Data Validation", status: "completed" },
  { label: "Content Type Detection", status: "active" },
  { label: "Workflow Routing", status: "pending" },
  { label: "AI Processing Queue", status: "pending" },
];

export interface WorkflowStep {
  step: string;
  title: string;
  icon: LucideIcon;
  description: string;
  details: string[];
  aiPowered: boolean;
}

export const POST_STEPS: WorkflowStep[] = [
  {
    step: "4A",
    title: "Image Input & Template Logic",
    icon: ImageIcon,
    description: "System processes your image selection",
    details: ["Template detection (standard vs custom)", "Automatic image optimization", "Platform-specific sizing", "Brand compliance check"],
    aiPowered: false,
  },
  {
    step: "5A",
    title: "Caption & Hashtag Generation",
    icon: FileText,
    description: "AI crafts engaging, optimized content",
    details: ["Google Gemini AI generates captions", "Trending hashtag research", "SEO-optimized metadata", "Cross-platform formatting"],
    aiPowered: true,
  },
  {
    step: "6A",
    title: "Image Editing & Asset Creation",
    icon: Palette,
    description: "Automated design with AI enhancements",
    details: ["Intelligent text overlays", "Color-based adjustments", "Style & filter application", "Consistency verification"],
    aiPowered: true,
  },
  {
    step: "7A",
    title: "Upload & Scheduling",
    icon: Upload,
    description: "Deployment across all platforms",
    details: ["Direct GoHighLevel integration", "Optimal timing algorithms", "Multi-platform coordination", "Performance tracking setup"],
    aiPowered: false,
  },
];

export const REEL_STEPS: WorkflowStep[] = [
  {
    step: "4B",
    title: "Thumbnail Creation",
    icon: ImageIcon,
    description: "Eye-catching thumbnails for engagement",
    details: ["Template-based or custom designs", "High-converting layouts", "Platform-optimized dimensions", "Brand consistency checks"],
    aiPowered: false,
  },
  {
    step: "5B",
    title: "Video Generation from Script",
    icon: Video,
    description: "AI transforms scripts into videos",
    details: ["Dynamic scene composition", "Professional transitions", "AI voiceovers (optional)", "Background music integration"],
    aiPowered: true,
  },
  {
    step: "6B",
    title: "Upload & Scheduling",
    icon: Calendar,
    description: "Strategic deployment for maximum reach",
    details: ["Multi-platform distribution", "Peak engagement timing", "Cross-channel promotion", "Analytics integration"],
    aiPowered: false,
  },
];

export const AI_CAPABILITIES = [
  { title: "Smart Caption Generation", description: "Creates engaging, brand-aligned captions", icon: MessageSquare, impact: "2x engagement rate" },
  { title: "Hashtag Optimization", description: "Applies trending, relevant hashtags", icon: Filter, impact: "40% more reach" },
  { title: "Visual Analysis", description: "Analyzes and optimizes images", icon: ImageIcon, impact: "35% better appeal" },
  { title: "Video Creation", description: "Transforms scripts into videos", icon: Video, impact: "3x more content" },
];

export const PLATFORMS = [
  { name: "Facebook", color: "text-[#00A3FF]" },
  { name: "Instagram", color: "text-[#FF6B82]" },
  { name: "LinkedIn", color: "text-[#0066CC]" },
];

export const NOTIFICATIONS = [
  { platform: "Slack", icon: Slack, preview: "Post scheduled successfully!", time: "2:30 PM Today" },
  { platform: "Email", icon: Mail, preview: "Content scheduled across platforms", time: "Just now" },
];

export const BENEFITS = [
  { icon: Clock, title: "Save 20+ hrs/wk", description: "Automate repetitive tasks" },
  { icon: BarChart, title: "Increase engagement", description: "AI-optimized content" },
  { icon: Users, title: "Scale effortlessly", description: "Handle unlimited content" },
  { icon: Shield, title: "Maintain consistency", description: "Always on-brand" },
];
