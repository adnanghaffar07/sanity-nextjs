import Image, { type StaticImageData } from "next/image";
import processImage from "@/public/process-img-home.png";
import strategyIcon from "@/public/mobile-1.png";
import designIcon from "@/public/mobile-2.png";
import developmentIcon from "@/public/mobile-3.png";
import testingIcon from "@/public/mobile-4.png";
import launchIcon from "@/public/mobile-5.png";
import supportIcon from "@/public/mobile-6.png";

const CONSULTATION_URL = "https://calendly.com/adnanghaffar/codeautomation?utm_source=website&utm_campaign=services";

type Service = { title: string; description: string; icon: StaticImageData };

// Shown above the process image on desktop (left column on phones).
const FIRST_ROW: Service[] = [
  { title: "Conceptualization & Strategy", description: "We turn your business goals into a strategic roadmap for a successful app.", icon: strategyIcon },
  { title: "UI/UX Design", description: "Our team creates intuitive, engaging interfaces for a seamless user experience.", icon: designIcon },
  { title: "Development & Coding", description: "Robust, scalable mobile apps built for top performance and future growth.", icon: developmentIcon },
];

// Shown below the process image on desktop (right column on phones).
const SECOND_ROW: Service[] = [
  { title: "Testing & Quality Assurance", description: "Rigorous testing ensures an error-free, high-performance app before launch.", icon: testingIcon },
  { title: "Deployment & Launch", description: "Smooth, timely deployment to the App Store and Google Play.", icon: launchIcon },
  { title: "Post-Launch Support", description: "Ongoing support to keep your app updated and performing at its best.", icon: supportIcon },
];

function ServiceItem({ service, compact }: { service: Service; compact?: boolean }) {
  return (
    <div className="flex flex-row items-start space-x-4">
      <Image src={service.icon} alt={service.title} sizes="48px" className="md:block hidden h-12 w-12 object-contain" />
      <div className="text-left space-y-1">
        <h4 className={`font-bold text-white ${compact ? "text-sm" : "text-lg"}`}>{service.title}</h4>
        <p className={`text-white ${compact ? "text-xs" : "text-sm"}`}>{service.description}</p>
      </div>
    </div>
  );
}

// "Our Services — What We Do": six services around the process image.
export default function MobileServicesOverview() {
  return (
    <section id="services" className="bg-[url('/what-we-do.jpeg')] bg-cover bg-center py-10 md:py-16 px-4 lg:px-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
      <h3 className="text-lg text-white mb-6 md:mb-10">What We Do</h3>

      <div className="hidden md:flex flex-col gap-10 items-center max-w-7xl mx-auto">
        <div className="flex flex-row gap-6">
          {FIRST_ROW.map((service) => (
            <ServiceItem key={service.title} service={service} />
          ))}
        </div>
        <Image src={processImage} alt="Mobile App Preview" sizes="1000px" className="mx-auto h-[250px] w-[1000px] object-contain" />
        <div className="flex flex-row gap-6 mb-10">
          {SECOND_ROW.map((service) => (
            <ServiceItem key={service.title} service={service} />
          ))}
        </div>
      </div>

      <div className="md:hidden max-w-7xl mx-auto">
        <Image src={processImage} alt="Mobile App Preview" sizes="300px" className="mx-auto mb-6 h-16 w-[300px] object-contain" />
        <div className="flex flex-row gap-4">
          {[FIRST_ROW, SECOND_ROW].map((column, index) => (
            <div key={index} className="flex flex-col gap-6">
              {column.map((service) => (
                <ServiceItem key={service.title} service={service} compact />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <a
          href={CONSULTATION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1D92FB] hover:bg-blue-700 hover:text-white bg-white font-semibold px-8 py-3 rounded-md transition duration-300"
        >
          Schedule a Call
        </a>
      </div>
    </section>
  );
}
