"use client";

import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import industriesIcon from "@/public/industries.png";
import clientsIcon from "@/public/clients.png";
import projectsIcon from "@/public/projects.png";
import experienceIcon from "@/public/experience.png";

const STATS = [
  { icon: industriesIcon, number: 15, label: "Industries Served" },
  { icon: clientsIcon, number: 80, label: "Global Clients" },
  { icon: projectsIcon, number: 100, label: "Successful Projects" },
  { icon: experienceIcon, number: 7, label: "Years of Experience" },
];

// Company numbers that count up when the band scrolls into view.
export default function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="bg-[#001E6B] py-8 md:py-10" ref={ref}>
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-8 text-white">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex items-center flex-row space-x-4">
              <Image src={stat.icon} alt={stat.label} sizes="56px" className="h-10 w-10 md:h-14 md:w-14 object-contain" />
              <div>
                <p className="text-2xl font-bold flex items-center">
                  {inView && (
                    <CountUp end={stat.number} duration={2.5} formattingFn={(value) => value.toString().padStart(2, "0")} />
                  )}
                  <span className="ml-1">+</span>
                </p>
                <p className="text-xs md:text-sm">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
