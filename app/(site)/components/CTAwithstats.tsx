"use client";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

export default function CtaWithStats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3, // animate when 30% of section is visible
  });

  const stats = [
    { icon: "/cta-1.png", number: 500, label: "Clients Served", suffix: "+" },
    { icon: "/cta-2.png", number: 10, label: "Years in Business", suffix: "+" },
    { icon: "/cta-3.png", number: 350, label: "Industries Served", suffix: "+" },
    { icon: "/cta-4.png", number: 200, label: "Global Clients", suffix: "+" },
  ];

  return (
    <div
      ref={ref}
      className="w-full px-6 py-10 md:px-16 md:py-20 shadow-lg flex flex-col md:flex-row items-center text-white"
      style={{
        backgroundImage: "url(/Container.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-left">
          <h4 className="mb-6 text-2xl md:text-4xl font-bold max-w-2xl">
            Want To Develop A Custom Software Solution?
          </h4>
          <div className="flex items-start self-stretch pr-8 text-base xl:text-xl lg:text-lg font-medium whitespace-nowrap max-w-[450px] max-md:pr-5 mt-12">
            <Link
              href="https://join.skype.com/invite/crU4cXW4bttb"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor flex overflow-hidden relative gap-2 px-8 py-2 items-center bg-[#F7E022] rounded-lg shadow-md"
            >
              <p className="relative grow self-center text-black font-semibold text-lg">
                Get Started Today
              </p>
            </Link>
          </div>
        </div>

        {/* Right Stats */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 flex flex-wrap justify-center md:justify-end gap-8 text-center md:text-left">
          {stats.map((stat, index) => (
            <div key={index} className="w-[45%] flex items-center">
              <img src={stat.icon} alt={stat.label} className="w-14 h-14 mr-4" />
              <div>
                <p className="text-4xl font-bold">
                  {inView && (
                    <CountUp end={stat.number} duration={2.5} />
                  )}
                  {stat.suffix}
                </p>
                <p className="text-lg text-white font-light mt-2">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
