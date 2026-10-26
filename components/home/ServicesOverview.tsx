import Image from "next/image";

const SERVICES = [
  {
    icon: "/end-to-end-1.png",
    alt: "Custom Software Development Services Company USA",
    title: "Custom Software Development",
    text: "Custom Software Solutions To Power Innovation And Efficiency In Your Business.",
  },
  {
    icon: "/end-to-end-2.png",
    alt: "Offshore Software Development Services Company USA",
    title: "Offshore Software Development",
    text: "Ensure premium results, coupled with seamless project management by the leverage of cost-effective offshore development services to hire top global talent.",
  },
  {
    icon: "/end-to-end-3.png",
    alt: "Enterprise Software Development Services Company USA",
    title: "Enterprise Software Development",
    text: "Scalable, secure enterprise solutions that enhance productivity and support complex business operations.",
  },
  {
    icon: "/end-to-end-4.png",
    alt: "Software Integration Services Company USA",
    title: "Software Integration",
    text: "Software application alignment with a single point-to-point connection removing data silos and optimizing business workflow",
  },
];

export default function ServicesOverview() {
  return (
    <div className="relative flex justify-center items-center py-10 mx-auto px-6 lg:px-10">
      <div className="absolute inset-0 bg-[#001E6B]" aria-hidden />
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl text-center text-white font-semibold mb-4">
          Complete End-to-End Software Development Services
        </h2>
        <p className="text-lg xl:text-xl text-white text-center max-w-4xl mx-auto mb-16">
          Over years of experience, we know that all businesses work within a specific software and hardware setup. We
          offer a wide range of software development services that are available to suit the specific requirements for
          your product. Check out our services below.{" "}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left md:px-16 ">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="flex bg-white p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
            >
              <div className="mr-6 flex-shrink-0">
                <Image src={service.icon} alt={service.alt} width={64} height={64} className="w-16 h-16" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                <p className="text-md text-gray-700">{service.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
