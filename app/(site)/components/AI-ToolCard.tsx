"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface ToolCardProps {
  name: string;
  description: string;
  tags: string[];
  website: string;
  logo?: string;
}

export const ToolCard = ({
  name,
  description,
  tags,
  website,
  logo,
}: ToolCardProps) => {
  return (
 <div className="group bg-[#ffffff] border border-[#e5e7eb] rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
  <div className="space-y-4">
    <div className="flex items-center gap-4">
        <div className="w-12 h-12 relative rounded-md overflow-hidden border border-[#d1d5db]">
          <Image
            src={logo ?? "/default-logo.png"}
            alt={`${name} logo`}
            fill
            className="object-contain"
          />
        </div>
    
      <h3 className="text-xl font-semibold text-[#111827] group-hover:text-[#1d92fb] transition-colors">
        {name}
      </h3>
    </div>

    <p className="text-[#6b7280] text-sm leading-relaxed">{description}</p>

    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Badge
          key={tag}
          className="text-xs px-2 py-1 bg-[#f3f4f6] hover:bg-[#e5e7eb] transition-colors"
        >
          {tag}
        </Badge>
      ))}
    </div>

    <div className="pt-2">
      <Button
        className="w-full group-hover:border-[#2563eb] group-hover:text-[#2563eb] transition-colors"
        onClick={() =>
          window.open(website, "_blank", "noopener noreferrer")
        }
      >
        Visit Website
        <ExternalLink className="ml-2 h-4 w-4" />
      </Button>
    </div>
  </div>
</div>

  );
};
