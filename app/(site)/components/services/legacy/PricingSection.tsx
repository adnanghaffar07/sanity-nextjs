import Link from "next/link";
import type { LegacyService } from "@/sanity/lib/legacy-services";
import { CONSULTATION_URL, Tint } from "./primitives";

// Plan cards; the highlighted plan is slightly larger with a blue border.
export default function PricingSection({ pricing }: { pricing: NonNullable<LegacyService["pricingSection"]> }) {
  const globalButton = pricing.showButtonInAllPlans && pricing.globalButtonText && pricing.globalButtonUrl ? pricing.globalButtonText : null;

  return (
    <section className="px-6 py-10 md:px-16 md:py-16 relative">
      <Tint />
      <div className="relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#3C3C3C]">{pricing.heading || "Simple Pricing, Clear Value"}</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">{pricing.description}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 relative">
          {pricing.plans?.map((plan, index) => (
            <div
              key={index}
              className={`w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-md flex-shrink-0 bg-white rounded-2xl shadow-lg p-8 ${
                plan.highlighted ? "border-2 border-[#1D92FB] transform scale-105" : "border border-gray-200"
              }`}
            >
              <h3 className="text-2xl font-bold text-[#1D92FB] mb-2">{plan.title}</h3>
              {plan.price && (
                <p className="text-3xl font-extrabold text-[#3C3C3C] mb-4">
                  {plan.price}
                  {!plan.price.toLowerCase().includes("custom") && <span className="text-base font-medium">/month</span>}
                </p>
              )}
              <ul className="space-y-3 text-gray-700 list-disc list-inside mb-6">
                {plan.features?.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
              {plan.buttonText && plan.buttonUrl && (
                <Link
                  href={CONSULTATION_URL}
                  className="w-full bg-[#1D92FB] text-white py-3 px-6 rounded-lg font-semibold text-center block hover:bg-[#0d8ce8] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {plan.buttonText}
                </Link>
              )}
              {globalButton && (
                <Link
                  href={CONSULTATION_URL}
                  className="w-full bg-[#f7e022] text-black py-3 px-6 rounded-lg font-semibold text-center block mt-4 hover:bg-[#e6d01e] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {globalButton}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
