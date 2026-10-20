"use client";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function StatsSection() {
  const stats = [
    {
      icon: "/industries.png",
      number: 15,
      label: "Industries Served",
    },
    {
      icon: "/clients.png",
      number: 80,
      label: "Global Clients",
    },
    {
      icon: "/projects.png",
      number: 100,
      label: "Successful Projects",
    },
    {
      icon: "/experience.png",
      number: 7, // FIXED
      label: "Years of Experience",
    }
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // FIXED
  });

  return (
    <section className="bg-[#001E6B] py-8 md:py-10" ref={ref}>
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 md:gap-8 text-white">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center flex-row space-x-4"
            >
              <img
                src={stat.icon}
                alt={stat.label}
                className="h-10 w-10 md:h-14 md:w-14 object-contain"
              />

              <div>
                <p className="text-2xl sm:text-2xl font-bold flex items-center">
                  {inView && (
                    <CountUp
                      end={stat.number}
                      duration={2.5}
                      formattingFn={(value) => value.toString().padStart(2, "0")}
                    />
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
