import type { LucideIcon } from "lucide-react";
import {
  HeartPulse,
  ShoppingBag,
  House,
  Landmark,
  Cloud,
  GraduationCap,
  Truck,
  Hotel,
} from "lucide-react";

const INDUSTRIES: { icon: LucideIcon; name: string; useCases: string[] }[] = [
  {
    icon: HeartPulse,
    name: "Healthcare",
    useCases: ["Scheduling", "Patient intake", "Billing questions"],
  },
  {
    icon: ShoppingBag,
    name: "eCommerce & Retail",
    useCases: ["Product recommendations", "Order tracking", "Returns"],
  },
  {
    icon: House,
    name: "Real Estate",
    useCases: ["Lead qualification", "Property inquiries", "Tour bookings"],
  },
  {
    icon: Landmark,
    name: "Finance & Insurance",
    useCases: ["Account questions", "Claims status", "Policy information"],
  },
  {
    icon: Cloud,
    name: "SaaS",
    useCases: ["Onboarding", "Feature guidance", "Tier-1 support"],
  },
  {
    icon: GraduationCap,
    name: "Education",
    useCases: ["Admissions", "Enrollment", "Course guidance"],
  },
  {
    icon: Truck,
    name: "Logistics",
    useCases: ["Shipment tracking", "Delivery updates"],
  },
  {
    icon: Hotel,
    name: "Hospitality & Travel",
    useCases: ["Reservations", "Guest questions"],
  },
];

export default function IndustriesSection() {
  return (
    <section className="bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#1D92FB]">
            Industries
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-black">
            AI-Powered Chatbot Use Cases by Industry
          </h2>
        </div>

        <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {INDUSTRIES.map(({ icon: Icon, name, useCases }) => (
            <li
              key={name}
              className="group relative flex flex-col rounded-3xl bg-white p-6 shadow-sm border border-gray-100 hover:border-[#1D92FB]/40 hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {/* Accent bar that grows on hover */}
              <span
                aria-hidden
                className="absolute left-0 top-0 h-1 w-12 bg-[#1D92FB] transition-all duration-300 group-hover:w-full"
              />
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF4FF] text-[#1D92FB] group-hover:bg-[#1D92FB] group-hover:text-white transition-colors">
                <Icon className="w-6 h-6" aria-hidden />
              </span>
              <h3 className="mt-5 text-lg font-bold text-black">{name}</h3>
              <ul className="mt-3 space-y-2">
                {useCases.map((useCase) => (
                  <li
                    key={useCase}
                    className="flex items-center gap-2 text-[15px] text-gray-600"
                  >
                    <span
                      aria-hidden
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#1D92FB]"
                    />
                    {useCase}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
