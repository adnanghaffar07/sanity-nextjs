"use client"

import { ToolCard } from "./AI-ToolCard";

const aiTools = [
  {
    name: "Lovable",
    description: "AI-powered web app development platform that generates full-stack applications from simple descriptions. Build production-ready apps with React, TypeScript, and modern frameworks.",
    tags: ["No-Code", "Full-Stack", "React", "AI-Generated"],
    website: "https://lovable.dev",
    logo: "/lovable.png",
  },
  {
    name: "Cursor AI",
    description: "AI-first code editor that understands your codebase and helps you write code faster. Features intelligent autocomplete, code generation, and debugging assistance.",
    tags: ["Code Editor", "AI Assistant", "Productivity", "Development"],
    website: "https://cursor.sh",
    logo: "/cursor.png",
  },
  {
    name: "Appy Pie",
    description: "No-code app builder with AI assistance for creating mobile and web applications. Features drag-and-drop interface and automated app generation from business requirements.",
    tags: ["No-Code", "Mobile Apps", "Web Apps", "Business"],
    website: "https://www.appypie.com/",
    logo: "/appy-pie.webp",
  },
  {
    name: "Builder.io",
    description: "Visual development platform with AI-powered design-to-code conversion. Transform designs into responsive, production-ready code for any framework.",
    tags: ["Visual Builder", "Design-to-Code", "CMS", "Headless"],
    website: "https://builder.io",
    logo: "/builder.io.png",
  },
  {
    name: "TeleportHQ",
    description: "Front-end design and development platform with AI-powered code generation. Create responsive websites and export clean, production-ready code.",
    tags: ["Front-end", "Design System", "Code Export", "Collaboration"],
    website: "https://teleporthq.io",
    logo: "/teleporthq.png",
  },
 {
  name: "Replit Ghostwriter",
  description: "AI-powered coding assistant that helps you write, debug, and explain code directly inside Replit’s cloud-based IDE.",
  tags: ["AI Coding", "IDE", "Code Completion", "Debugging"],
  website: "https://replit.com/site/ghostwriter",
  logo: "/replit.png", // Update this path to match your actual assets
}

];

export const ToolsGrid = () => {
  return (
    <section id="tools-section" className="py-20 px-6 ">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Featured AI Tools
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Carefully selected platforms that leverage artificial intelligence to streamline 
            and accelerate the development of websites and mobile applications.
          </p>
        </div>
        
        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiTools.map((tool) => (
            <ToolCard
              key={tool.name}
              name={tool.name}
              description={tool.description}
              tags={tool.tags}
              website={tool.website}
              logo={tool.logo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
