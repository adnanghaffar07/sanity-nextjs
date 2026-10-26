import SanityImage from "@/components/ui/SanityImage";
import type { CaseStudy } from "@/sanity/lib/case-studies";

// Feature blocks: optional title (first in red, rest in blue), image above,
// large centred text, image below.
export default function CaseStudyFeatures({ features }: { features: CaseStudy["features"] }) {
  if (!features?.featureslist?.length) return null;

  return (
    <section className="px-6 md:px-16 pb-6 md:pb-16 pt-0 max-w-7xl mx-auto">
      {features.featureslist.map((feature, index) => (
        <div key={feature._key} className="flex flex-col items-center">
          {features.showTitles && (
            <h3
              className={`text-xl font-klein font-semibold leading-10 max-md:max-w-full md:text-xl max-md:leading-8 ${
                index === 0 ? "text-red-600" : "text-blue-600"
              }`}
            >
              {feature.heading}
            </h3>
          )}
          <SanityImage image={feature.logoImage} sizes="(min-width: 768px) 1120px, 100vw" className="object-cover h-auto my-2 md:px-20" />
          <p className="font-semibold text-center md:text-2xl text-lg my-2 max-w-3xl tracking-wide leading-10 text-black max-md:max-w-full">
            {feature.description}
          </p>
          <SanityImage image={feature.images} sizes="(min-width: 768px) 1024px, 100vw" className="object-cover h-auto mt-4 md:px-32" />
        </div>
      ))}
    </section>
  );
}
