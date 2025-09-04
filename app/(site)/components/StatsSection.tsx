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
      number: 10,
      label: "Years of Experience",
    },
  ];

  // Hook to detect when section is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // run only once
    threshold: 0.3, // start when 30% visible
  });

  return (
    <section className="bg-[#001E6B] py-10" ref={ref}>
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-white">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center sm:flex-row sm:text-left sm:items-center sm:space-x-4"
            >
              {/* Icon */}
              <img
                src={stat.icon}
                alt={stat.label}
                className="h-12 w-12 object-contain mb-2 sm:mb-0"
              />

              {/* Number + Label */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold flex items-center">
                  {inView && (
                    <CountUp end={stat.number} duration={2.5} />
                  )}
                  <span className="ml-1">+</span>
                </h3>
                <p className="text-sm">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
