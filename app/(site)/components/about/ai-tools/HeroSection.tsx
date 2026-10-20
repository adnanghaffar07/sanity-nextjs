"use client";

import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    const scrollToTools = () => {
        const toolsSection = document.getElementById("tools-section");
        toolsSection?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="flex overflow-hidden relative flex-col pb-12 w-full font-light text-white lg:min-h-[700px] max-md:max-w-full">
            {/* Background Image */}
            <img
                src="/ai-page.jpeg" // Replace with your actual image
                alt="AI Hero Background"
                className="absolute inset-0 w-full h-full object-cover z-0"
            />
            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-[#020C16] opacity-65"></div>

            {/* Content */}
            <div className="flex relative flex-col items-center lg:px-20 px-5 lg:pt-12 lg:pb-0 pt-48 pb-36 w-full max-md:px-5 max-md:max-w-full flex-grow">
                <div className="lg:absolute lg:top-[300px] text-center lg:w-8/12 mx-auto">
                    <h1 className="text-2xl font-bold capitalize lg:text-4xl">  Top AI Tools for Building</h1>
                    <h3 className="text-2xl font-semibold capitalize lg:text-3xl my-4">Websites & Mobile Apps</h3>
                    <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        Discover the most powerful AI-driven platforms that are revolutionizing
                        web and mobile app development. Build faster, smarter, and better.         </p>
                        

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                        <button
                            onClick={scrollToTools}
                            className="bg-[#f7e022] text-black px-6 py-3 rounded-md font-bold text-lg flex items-center gap-2 hover:opacity-90 transition"
                        >
                            Explore Tools <ArrowDown className="w-5 h-5" />
                        </button>

                        <p className="text-sm text-gray-300">
                            6 curated AI tools • Updated regularly
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};
