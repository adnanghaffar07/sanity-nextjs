"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

type Category = "Languages" | "Frameworks" | "Databases" | "Backend";

const categories: Category[] = ["Languages", "Frameworks", "Databases", "Backend"];

const techStack: Record<Category, { name: string; logo: string }[]> = {
  Languages: [
    { name: "Dart", logo: "/mob-dart.png" },
    { name: "Kotlin", logo: "/mob-kotlin.png" },
    { name: "Swift", logo: "/mob-swift.png" },
    { name: "Java", logo: "/mob-java.png" },
    { name: "React Native", logo: "/mob-react-native.png" },
  ],
  Frameworks: [
    { name: "Android Studio", logo: "/mob-android-studio.png" },
    { name: "React Native", logo: "/mob-react-native.png" },
    { name: "Node", logo: "/mob-node.png" },
    { name: "Flutter", logo: "/mob-flutter.png" },
    { name: "Xcode", logo: "/mob-xcode.png" },
  ],
  Databases: [
    { name: "MySQL", logo: "/mob-mysql.png" },
    { name: "MongoDB", logo: "/mob-mongodb.png" },
    { name: "PostgreSQL", logo: "/mob-postgresql.png" },
    { name: "Sql Server", logo: "/mob-sql.png" },
  ],
  Backend: [
    { name: "Java", logo: "/mob-java.png" },
    { name: "Node", logo: "/mob-node.png" },
    { name: "Laravel", logo: "/mob-laravel.png" },
    { name: "Graphql", logo: "/mob-graphql.png" },
  ],
};

export default function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("Frameworks");

  // Auto-rotate only on mobile
  useEffect(() => {
    if (window.innerWidth < 768) {
      const interval = setInterval(() => {
        setActiveCategory((prev) => {
          const currentIndex = categories.indexOf(prev);
          const nextIndex = (currentIndex + 1) % categories.length;
          return categories[nextIndex];
        });
      }, 4000); // change every 4s
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-16 px-4 lg:px-20 text-center"
      style={{ backgroundImage: "url('/mobile-tech-bg.jpeg')" }}
    >
      {/* Content wrapper */}
      <div className="relative z-10">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4">
          Cutting-Edge Tech Stack to Power Your Mobile App
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-10">
          We leverage these technologies to deliver mobile apps that are scalable,
          secure, and tailored to your startup’s needs combining native performance with
          cross-platform flexibility to maximize reach and ROI.
        </p>

        {/* Tabs (desktop only) */}
        <div className="hidden md:flex justify-around max-w-4xl mx-auto space-x-6 mb-10 bg-[#0A8FFC] rounded-lg py-2 px-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 text-sm md:text-base font-semibold ${
                activeCategory === cat
                  ? "text-yellow-400 border-b-2 border-yellow-400"
                  : "text-white hover:text-yellow-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Mobile auto-rotating tab title */}
        <div className="md:hidden max-w-[70%] mx-auto text-lg py-2 border-b-2 border-[#F7E022] font-semibold bg-[#0A8FFC] text-[#F7E022]">
          {activeCategory}
        </div>

        {/* Logos */}
        <div className="flex flex-col md:flex-row md:flex-wrap py-6 md:py-0 bg-white rounded-bl-lg rounded-br-lg md:bg-transparent max-w-[70%] md:max-w-3xl mx-auto justify-center items-center gap-6 md:gap-16 transition-all duration-500 ease-in-out">
          {techStack[activeCategory]?.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center space-y-2 animate-fadeIn"
            >
              <Image
                src={tech.logo}
                alt={tech.name}
                width={100}
                height={100}
                className="object-contain h-10 md:h-[60px] md:w-[120px]"
              />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-10">
          <a
            href="tel:+18505584691"
            className="bg-[#1D92FB] hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-md transition duration-300 inline-block"
          >
            LET&apos;S TALK
          </a>
        </div>
      </div>
    </section>
  );
}
