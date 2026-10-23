import SanityImage from "@/components/ui/SanityImage";
import type { ValueBlueprintsPage } from "@/sanity/lib/value-blueprints";

type Tool = ValueBlueprintsPage["tools"]["items"][number];

// Rows of 7, 7 and 6 tools.
const ROWS: [number, number][] = [
  [0, 7],
  [7, 14],
  [14, 20],
];

// "Tools & Technologies": the logos of the tools the blueprints are built with.
export default function ToolsShowcase({ tools }: { tools: ValueBlueprintsPage["tools"] }) {
  return (
    <div className="px-6 md:px-16 py-10 md:py-16 relative">
      <div className="absolute inset-0 bg-[#1D92FB] opacity-10 pointer-events-none" />
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 relative">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">{tools.heading}</h2>
        <p className="text-lg text-gray-800 leading-relaxed text-center mb-6">{tools.text}</p>
        <div className="flex flex-col w-full max-w-[1090px] mx-auto mt-10 gap-10">
          {ROWS.map(([start, end]) => (
            <div key={start} className="flex flex-wrap gap-5 justify-center items-center empty:hidden">
              {tools.items.slice(start, end).map((tool) => (
                <ToolLogo key={tool._key} tool={tool} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ToolLogo({ tool }: { tool: Tool }) {
  return (
    <div className="flex justify-center w-1/4 lg:w-1/5">
      {tool.logos.map((logo) => (
        <div key={logo._id} className="flex md:flex-row flex-col items-center">
          <SanityImage image={logo.image} alt={logo.heading ?? ""} sizes="112px" className="h-10 md:h-14 w-auto md:mr-2 object-contain" />
          <p className="text-sm text-gray-800 font-semibold text-center mt-2">{tool.name}</p>
        </div>
      ))}
    </div>
  );
}
