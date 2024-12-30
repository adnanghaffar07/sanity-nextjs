"use client";

import Link from "next/link";
import { useState } from "react";

// Define the type for the technology categories
type TechnologyCategory =
  | "mobile-development"
  | "web-development"
  | "programming-languages"
  | "platforms";

// Define the structure of the technologies data
const technologiesData: Record<
  TechnologyCategory,
  { name: string; logo: string; link?: string }[]
> = {
  "mobile-development": [
    { name: "Flutter", logo: "/mobile3.png" },
    { name: "React Native", logo: "/web2.png" },
    { name: "Xamarin", logo: "/xamarin.png" },
    { name: "Swift", logo: "/prog2.png" },
    { name: "Java", logo: "/prog3.png" },
    { name: "Kotlin", logo: "/kotlin.png" },
    { name: "Artificial Intelligence", logo: "/ai.png" },
    { name: "Augmented Reality", logo: "/augmentedReal.png" },
    { name: "C++", logo: "/prog6.png" },
    { name: "Internet of Things", logo: "/iot.png" },
    { name: "HTML5", logo: "/html5.png" },
    { name: "Blockchain", logo: "/blockchain.png" },
    { name: "Mobile Angular UI", logo: "/web3.png" },
  ],
  "web-development": [
    { name: "Node.js", logo: "/web1.png" },
    { name: "React.js", logo: "/web2.png", link: "/services/react-js-development-services" }, // Add a link for React
    { name: "Angular", logo: "/web3.png" },
    { name: "Vue.js", logo: "/web4.png" },
    { name: "Laravel", logo: "/web5.png" },
    { name: "Django", logo: "/web6.png" },
    { name: "Ruby on Rails", logo: "/web7.png" },
    { name: "next.js", logo: "/web8.png" },
    { name: ".Net", logo: "/prog8.png" },
  ],
  "programming-languages": [
    { name: "JavaScript", logo: "/prog1.png" },
    { name: "Python", logo: "/python.png" },
    { name: "Swift", logo: "/prog2.png" },
    { name: "Java", logo: "/prog3.png" },
    { name: "PHP", logo: "/prog4.png", link: "/services/php-development-services" }, // Add a link for PHP
    { name: "C#", logo: "/prog5.png" },
    { name: "C++", logo: "/prog6.png" },
    { name: "Ruby", logo: "/prog7.png" },
  ],
  platforms: [
    { name: "Wordpress", logo: "/plat1.png" },
    { name: "Magento", logo: "/plat2.png" },
    { name: "Shopify", logo: "/plat3.png" },
    { name: "WooCommerce", logo: "/plat4.png" },
    { name: "Drupal", logo: "/plat5.png" },
    { name: "Salesforce", logo: "/plat6.png" },
    { name: "Squarespace", logo: "/plat7.png" },
    { name: "BigCommerce", logo: "/plat8.png" },
  ],
};

const TechnologiesSection = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<TechnologyCategory>("mobile-development");

  const handleButtonClick = (category: TechnologyCategory) => {
    setSelectedCategory(category);
  };

  return (
    <div className="bg-[#1D92FB] bg-opacity-10">
      <div className="max-w-7xl mx-auto px-6 py-10 md:px-16 md:py-16">
        <h2 className="w-full xl:text-4xl text-2xl font-medium text-black pb-6 md:pb-10 text-center">
          Technologies We Use
        </h2>
        <div className="flex flex-wrap justify-center md:mb-12 mb-8 gap-4">
          {Object.keys(technologiesData).map((category) => (
            <button
              key={category}
              className={`px-4 py-2 text-sm rounded-lg ${selectedCategory === category
                  ? "bg-[#1D92FB] text-white"
                  : "bg-[#D9D9D9] text-black"
                } hover:bg-[#1D92FB] border hover:text-white`}
              onClick={() => handleButtonClick(category as TechnologyCategory)}
            >
              {category.replace(/-/g, " ").toUpperCase()}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {technologiesData[selectedCategory].map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center w-1/4 sm:w-1/4 md:w-1/4 lg:w-1/6"
            >
              {tech.link ? (
                <Link href={tech.link} className="group">
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-16 h-16 mb-2 group-hover:opacity-80"
                  />
                  <span className="text-sm md:text-md font-md group-hover:underline">
                    {tech.name}
                  </span>
                </Link>
              ) : (
                <>
                  <img src={tech.logo} alt={tech.name} className="w-16 h-16 mb-2" />
                  <span className="text-sm md:text-md font-md">{tech.name}</span>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologiesSection;
