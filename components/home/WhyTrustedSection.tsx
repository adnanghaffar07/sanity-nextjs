import Image from "next/image";

const STATS = [
  {
    imageSrc: "/stats1.png",
    alt: "Software Development",
    text: "We are trusted by 200 global clients and offer innovative software solutions tailored to specific needs and markets",
  },
  {
    imageSrc: "/stats2.png",
    alt: "Software Development Company - Completed projects",
    text: "Completed 350+ projects, showcasing expertise in providing creative software products globally",
  },
  {
    imageSrc: "/stats3.png",
    alt: "Software Development Solutions USA - Completed projects",
    text: "We professionally assessed 300 apps to assure high-quality and reliable software solutions for our clients",
  },
  {
    imageSrc: "/stats4.png",
    alt: "Software Development Solutions USA - Bugs Detected",
    text: "Over 150k bugs have been addressed, ensuring clients' software solutions are reliable and trustworthy",
  },
];

export default function WhyTrustedSection() {
  return (
    <section className="relative flex justify-center items-center px-6 md:px-16 md:py-16 py-10">
      <div className="absolute inset-0 bg-[#1D92FB]" aria-hidden />
      <div className="relative z-10">
        <div className="max-w-[1920px] mx-auto">
          <div className="flex flex-col items-center justify-center text-center mb-6">
            <h2 className="text-2xl md:text-4xl text-white font-semibold mb-4">
              Why Our Software Development Trusted by Industry Leaders
            </h2>
            <p className="text-lg md:text-2xl text-white font-medium max-w-4xl">
              Businesses trust us for our top-notch software development services, proven expertise, and reliable
              solutions tailored to their needs
            </p>
          </div>

          <div className="flex gap-14 flex-wrap justify-center max-w-full md:max-w-[800px] mx-auto 2xl:max-w-full">
            {STATS.map((stat) => (
              <div
                key={stat.imageSrc}
                className="bg-white rounded-lg shadow-xl pt-0 p-4 transform transition-transform duration-300 ease-in-out hover:scale-105"
              >
                <div className="flex flex-col py-4 text-lg leading-6 text-center w-[290px] xl:w-[270px] 2xl:w-[270px] h-[220px] transition-shadow ease-in-out duration-500 font-semibold text-gray-700">
                  <Image
                    src={stat.imageSrc}
                    alt={stat.alt}
                    width={72}
                    height={72}
                    className="self-center aspect-square w-14 sm:w-16 xl:w-[72px]"
                  />
                  <div className="mt-6 max-w-[325px]">{stat.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
