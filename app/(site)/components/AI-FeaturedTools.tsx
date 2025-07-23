import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import Image from "next/image";

const featuredTools = [
    {
        name: "ChatGPT",
        description: "Converse, code, write, and learn with OpenAI's powerful language model.",
        website: "https://chat.openai.com",
        badge: "Trending",
        logo: "/chatgpt.png", // Replace with actual path to ChatGPT logo
    },
    {
        name: "Midjourney",
        description: "Create stunning AI-generated artwork from simple prompts.",
        website: "https://www.midjourney.com",
        badge: "Trending",
        logo: "/midjourney.png", // Replace with actual path to Midjourney logo
    },
    {
        name: "Grammarly",
        description: "AI-powered writing assistant to help you write with clarity and confidence.",
        website: "https://www.grammarly.com",
        badge: "Popular",
        logo: "/grammerly.png", // Replace with actual path to Grammarly logo
    },
];


export const FeaturedToolsSection = () => {
    return (
        <div className='bg-[#1D92FB] bg-opacity-10 '>
            <section className="bg-muted max-w-7xl mx-auto py-20 px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Trending AI Tools Right Now
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Discover what&apos;s hot in the AI space — the most popular tools teams are using to automate smarter and grow faster.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredTools.map((tool) => (
                        <div
                            key={tool.name}
                            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                {tool.logo && (
                                    <Image
                                        src={tool.logo}
                                        alt={tool.name}
                                        width={40}
                                        height={40}
                                        className="rounded-md"
                                    />
                                )}
                                <div>
                                    <h3 className="text-xl font-semibold text-foreground">
                                        {tool.name}
                                    </h3>
                                    <Badge className="mt-1" variant="outline">
                                        {tool.badge}
                                    </Badge>
                                </div>
                            </div>
                            <p className="text-muted-foreground mb-4">{tool.description}</p>
                            <Button
                                variant="link"
                                size="sm"
                                className="text-primary p-0"
                                asChild
                            >
                                <a href={tool.website} target="_blank" rel="noopener noreferrer">
                                    Visit Tool →
                                </a>
                            </Button>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};
